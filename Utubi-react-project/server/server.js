const express = require(`express`)//nome bibloteca back end
const cors = require(`cors`) //nome bibloteca back end
const {readFile} = require(`node:fs/promises`) //nome bibloteca back end , sim usamos 3 biblotecas
const path = require(`node:path`)

const app = express()

app.use(cors())
app.use(express.json())

const csvPath = path.resolve(__dirname, "../public/database/database.csv")

async function readCSV() {
    const text = await readfile(csvPath , `UTF8`)
    const lines = text.trim().split("\n")
    const headers = lines(0).split(",")

    return lines.slice(1).map((line) => {
				const values = line.split(",");
				return Object.fromEntries(headers.map((a , b) => [a,values[b] ?? ``]));
			});
}

app.get(`/api/users` , async (req , res) => {
    try {
        const rows = await readCSV()
        return res.json(rows)
    }  
    catch(Error){
        console.log(Error)
        return res.status(500).json({message:"Erro a ler CSV"})
    }
})

app.listen(3001,() => {
    console.log("API a correr em http://localhost:3001")
})