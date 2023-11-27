// Importar los módulos necesarios
const MongoClient = require("mongodb").MongoClient;

// URL de conexión a la base de datos
const url = "mongodb+srv://barbara_api:cbnrzhjQqvAL9eDU@cluster0.ne84d.mongodb.net/dm_demo_dev?authSource=admin&replicaSet=atlas-135rkq-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";
// const url = "mongodb://adm_idrica:QOap8UivstMjJXnJGPuwO5OJRI@192.168.3.93:27017/";
const client = new MongoClient(url);
// Nombre de la base de datos y colecciones
const databaseName = "dm_dev";
const sourceCollectionName = "devices";
const targetCollectionName = "temp";

// Definir la función principal de actualización del esquema y los datos
async function updateSchemaAndData() {
    try {
        // Conectar a la base de datos
        await client.connect();
        const db = client.db(databaseName);

        // Obtener los documentos de la colección de origen
        const sourceCollection = db.collection(sourceCollectionName);
        const documents = await sourceCollection.find().toArray();

        // Crear/obtener la colección de destino
        const targetCollection = db.collection(targetCollectionName);

        // Actualizar cada documento en la colección de destino
        for (const document of documents) {


            var new_schema = { ...document };
            delete new_schema.statusConfiguration;

            // Agregar statusConfiguration con valor "OK"
            new_schema.statusConfiguration = "OK";


            // Insertar/actualizar el documento en la colección de destino
            await targetCollection.updateOne({ _id: document._id }, { $set: new_schema }, { upsert: true });
        }

        await db.dropCollection(sourceCollectionName);
        const newCollection = await db.createCollection(sourceCollectionName);
        const newdocuments = await targetCollection.find().toArray();
        await newCollection.insertMany(newdocuments);
        await db.dropCollection(targetCollectionName);

        console.log("Actualización completa.");

        // Cerrar la conexión a la base de datos
        client.close();
    } catch (error) {
        console.error("Ocurrió un error durante la actualización:", error);
    }
}



// Ejecutar la función de actualización
updateSchemaAndData();


// const originalDate = "2023-06-20 11:34:30";
// const convertedDate = convertDateFormat(originalDate);
// console.log("************* convertedDate *************");
// console.log(convertedDate);
