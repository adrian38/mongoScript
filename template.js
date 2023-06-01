// Importar los módulos necesarios
const MongoClient = require("mongodb").MongoClient;

// URL de conexión a la base de datos
const url = "mongodb+srv://barbara_api:cbnrzhjQqvAL9eDU@cluster0.ne84d.mongodb.net/dm_demo_dev?authSource=admin&replicaSet=atlas-135rkq-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";
const client = new MongoClient(url);
// Nombre de la base de datos y colecciones
const databaseName = "dm_dev";
const sourceCollectionName = "templates";
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
      var new_schema = {
        templateId: "",
        alias: "",
        type: "",
        model: "",
        connectionConfig: {},
        connectionStatus: {},
        readConfig: {},
        commsConfig: {},
        performance: {},
        particularConfig: {},
      };

      new_schema.templateId = document.templateId;
      new_schema.alias = document.alias;
      new_schema.connectionConfig = document.connectionConfig;
      new_schema.connectionStatus = document.connectionStatus;
      new_schema.readConfig = document.readConfig;
      new_schema.commsConfig = document.commsConfig;
      new_schema.performance = document.performance;
      new_schema.particularConfig = document.particularConfig;

      switch (document.type) {
        case 1:
          new_schema.type = "GTW";
          break;
        case 2:
          new_schema.type = "MTR";
          break;
        case 3:
          new_schema.type = "MNT";
          break;
        case 4:
          new_schema.type = "LDT";
          break;
        case 5:
          new_schema.type = "DTL";
          break;
        case 6:
          new_schema.type = "PCS";
          break;
        case 10:
          new_schema.type = "OTR";
          break;
      }

      switch (document.model) {
        case 100:
          new_schema.model = "PLR";
          break;
        case 101:
          new_schema.model = "MTR";
          break;

        case 200:
          new_schema.model = "HER";
          break;
        case 300:
          new_schema.model = "PSU";
          break;
        case 301:
          new_schema.model = "MLX";
          break;
        case 302:
          new_schema.model = "MUX";
          break;
        case 303:
          new_schema.model = "PEP";
          break;
        case 304:
          new_schema.model = "CV1";
          break;
        case 305:
          new_schema.model = "CV2";
          break;
        case 306:
          new_schema.model = "LX2";
          break;
        case 307:
          new_schema.model = "MU2";
          break;
        case 308:
          new_schema.model = "SE2";
          break;
        case 309:
          new_schema.model = "PPR";
          break;
        case 400:
          new_schema.model = "RTU";
          break;
        case 500:
          new_schema.model = "LIT";
          break;
        case 501:
          new_schema.model = "HUB";
          break;
        case 600:
          new_schema.model = "BAR";
          break;
        case 700:
          new_schema.model = "COR";
          break;
      }

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
