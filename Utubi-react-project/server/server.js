const express = require(`express`)//framework de backend
const cors = require(`cors`) //nome bibloteca back end
const {readFile, access , writeFile} = require(`node:fs/promises`) //nome bibloteca back end , sim usamos 3 biblotecas
const path = require(`node:path`)

const app = express()

app.use(cors())
app.use(express.json())

const csvPath = path.resolve(__dirname, "../public/database/database.csv")

async function readCSV() {
    await access(csvPath)
    const text = await readFile(csvPath , `utf8`)
    const lines = text.trim().split("\n")
    const headers = lines[0].split(",")

    return lines.slice(1).map((line) => {
				const values = line.split(",");
				return Object.fromEntries(headers.map((a , b) => [a,values[b] ?? ``]));
			});
}

// TO DO: Criar funcao parecida ao readCSV mas para writeCSV , que vai registar utilizadores novos no CSV

async function registerUser(username, password) {
    await access(csvPath)

    const text = await readFile(csvPath, "utf8")
    const lines = text.trim().split("\n")
    const headers = lines[0].split(",")

    const users = lines.slice(1).map(line => {
        const values = line.split(",")
        return Object.fromEntries(headers.map((h, i) => [h, values[i]]))
    })

    // 1. verificar se username já existe
    const userExists = users.some(user => user.username === username)

    if (userExists) {
        throw new Error("Username já existe")
    }

    // 2. adicionar novo user
    users.push({ username, password })

    // 3. reconstruir CSV
    const newCSV =
        headers.join(",") + "\n" +
        users.map(u => `${u.username},${u.password}`).join("\n")

    // 4. escrever ficheiro inteiro
    await writeFile(csvPath, newCSV, "utf8")
}

// Endpoints
app.get(`/api/users` , async (req , res) => {
    try {
        const rows = await readCSV()
        return res.json(rows)
    }  
    catch(error){
        console.error(error)
        return res.status(500).json({message:"Erro a ler CSV"})
    }
})

// TO DO: Criar endpoint para registar utilizadores novos no CSV
app.post("/api/register", async (req, res) => {
    try {
        const { username, password } = req.body

        await registerUser(username, password)

        res.status(201).json({
            message: "Utilizador criado"
        })
    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

app.listen(3001,() => {
    console.log("API a correr em http://localhost:3001")
})

