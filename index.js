const { MongoClient } = require('mongodb')

async function main() {
    console.log("iniciando")
    const client = new MongoClient('mongodb://127.0.0.1:27017')

    try {
        await client.connect()
        const db = client.db('test')
        console.log("foi")
        const result = await db.collection('Teste').insertOne({nome:'teste', numero:3})
        console.log(result.acknowledged)
    } catch (err) {
        console.error("Erro ao conectar:", err)
    } finally {
        await client.close()
    }
}

main()


