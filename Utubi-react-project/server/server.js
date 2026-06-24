const express = require(`express`)//nome bibloteca back end
const cors = require(`cors`) //nome bibloteca back end
const {readFile, access} = require(`node:fs/promises`) //nome bibloteca back end , sim usamos 3 biblotecas
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

app.listen(3001,() => {
    console.log("API a correr em http://localhost:3001")
})