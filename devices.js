// Importar los módulos necesarios
const MongoClient = require("mongodb").MongoClient;

// URL de conexión a la base de datos
// const url = "mongodb+srv://barbara_api:cbnrzhjQqvAL9eDU@cluster0.ne84d.mongodb.net/dm_demo_dev?authSource=admin&replicaSet=atlas-135rkq-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";
// const url = "mongodb://adm_idrica:QOap8UivstMjJXnJGPuwO5OJRI@192.168.3.93:27017/";
const url = "mongodb://adm_idrica:QOap8UivstMjJXnJGPuwO5OJRI@192.168.3.93:27017/"
const client = new MongoClient(url);
// Nombre de la base de datos y colecciones
const databaseName = "dm";
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
            var new_schema = {
                deviceId: "",
                company: "",
                templateId: "",
                group: "",
                statusDevice: "",
                statusConnection: false,
                type: "",
                model: "",
                sn: "",
                unitID: 0,
                alias: "",
                position: {
                    address: "",
                    city: "",
                    zipCode: "",
                    lat: "",
                    lng: "",
                },
                data: {
                    last_msg_date: null,
                    hwVersion: "",
                    fwVersion: "",
                    connectionConfig: {},
                    connectionStatus: {},
                    readConfig: {},
                    commsConfig: {},
                    performance: {},
                    particularConfig: {},
                    status: {},
                },
            };

            new_schema.deviceId = document.deviceId;
            new_schema.company = document.company;
            new_schema.templateId = document.templateId;
            new_schema.group = document.group;
            new_schema.unitID = document.unitID;

            switch (document.statusDevice) {
                case 1:
                    new_schema.statusDevice = "STO";
                    break;
                case 2:
                    new_schema.statusDevice = "PRO";
                    break;
                case 3:
                    new_schema.statusDevice = "PRE";
                    break;
                case 4:
                    new_schema.statusDevice = "INS";
                    break;
                case 5:
                    new_schema.statusDevice = "DEC";
                    break;
            }

            switch (document.statusConnection) {
                case 1:
                    new_schema.statusConnection = false;
                    break;
                case 2:
                    new_schema.statusConnection = true;
                    break;
            }

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

            new_schema.sn = document.sn;
            new_schema.alias = document.alias;
            new_schema.position = document.position;

            new_schema.data.last_msg_date = document.lastConnection;
            new_schema.data.hwVersion = document.hwVersion;
            new_schema.data.fwVersion = document.fwVersion;
            new_schema.data.connectionConfig = document.connectionConfig;
            new_schema.data.connectionStatus = document.connectionStatus;
            new_schema.data.readConfig = document.readConfig;
            new_schema.data.commsConfig = document.commsConfig;
            new_schema.data.performance = document.performance;
            new_schema.data.particularConfig = document.particularConfig;
            new_schema.data.status = document.status;

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

function convertDateFormat(dateString) {
    const date = new Date(dateString);
    const isoString = date.toISOString();
    return isoString;
}

async function updateDateData() {
    try {
        // Conectar a la base de datos
        await client.connect();
        const db = client.db(databaseName);

        // Obtener los documentos de la colección de origen
        const sourceCollection = db.collection(sourceCollectionName);
        const documents = await sourceCollection.find().toArray();

        // Actualizar cada documento en la colección de destino
        for (let document of documents) {
            if (document.data && document.data.wmbus_sensors_data && document.data.wmbus_sensors_data.length > 0) {
                for (let element of document.data.wmbus_sensors_data) {
                    if (element.data_greylist && element.data_greylist.length > 0) {
                        for (let time of element.data_greylist) {
                            console.log("************* timestamp *************");
                            console.log(time.timestamp);
                            time.timestamp = convertDateFormat(time.timestamp);
                        }
                    }
                }
            }

            // Insertar/actualizar el documento en la colección de destino
            await sourceCollection.updateOne({ _id: document._id }, { $set: document }, { upsert: true });
        }

        console.log("Actualización completa.");

        // Cerrar la conexión a la base de datos
        client.close();
    } catch (error) {
        console.error("Ocurrió un error durante la actualización:", error);
    }
}

async function updateDeviceData() {
    try {
        // Conectar a la base de datos
        await client.connect();
        const db = client.db(databaseName);

        // Obtener los documentos de la colección de origen
        const sourceCollection = db.collection(sourceCollectionName);


        const devicesId = ["P0ab6CP9bvShJr1Mq5N25tuN2rGQX82M","D16vc1RrKTqQppQpOsXuqsV4oSYGhwyN", "2vAcBdhW16ePr9YDBWTvakp9xdgiwSL5", "vWdcoRk4TAhGTeT4s5h4DSU1Yuv2hPq0", "Qd9hFLslQRjDsUvB5x3G5OAzpLJnxHJj", "t77GqMS8gsjxpSTfCECpUgHunBdDyVM3", "prgxFj5ulN3jaAER8NBHqGDqkCmT5fcN", "dFIopLBrB3lHbdMRHF5YAm88YiCEAsEa", "HiF95vbBKZfQrSVGxpPIguw2Bz54SJVL", "nooV05bGoGBzhtn8T79di8LLMReNn8Ih", "5th0cDox2WUO5PfUPC0oTiGyyvFqR6Dn",];
        const documents = await sourceCollection.find({ deviceId: { $in: devicesId } }).toArray();


        // Actualizar cada documento en la colección de destino
        for (let document of documents) {


            document.data.last_msg_date = new Date();
            document.data.device_associated= "CZ22B0Q0UYR002805",
            document.data.meter_type= "SINK",
            document.data.meter_model= "CZ2000A",
            document.data.meter_state= "active",
            document.data.meter_model_attr = "mockup",
            document.data.meter_caliber= "45",
            document.data.meter_q3= "88888",
            document.data.meter_type_of_use = "mockup",
            document.data.meter_group= "goagua",
            document.data.meter_situation= "BAJA",
            document.data.meter_sector= "abando",
            document.data.last_read_index= 10.7,
            document.data.id_subscriber= -1,
            document.data.id_sector_dma= -1,
            document.data.supply_point= "moyua"

            // Insertar/actualizar el documento en la colección de destino
            await sourceCollection.updateOne({ _id: document._id }, { $set: document }, { upsert: true });
        }


        console.log("Actualización completa.");

        // Cerrar la conexión a la base de datos
        client.close();
    } catch (error) {
        console.error("Ocurrió un error durante la actualización:", error);
    }
}

// Ejecutar la función de actualización
// updateSchemaAndData();
// await updateDateData();
updateDeviceData();

// const originalDate = "2023-06-20 11:34:30";
// const convertedDate = convertDateFormat(originalDate);
// console.log("************* convertedDate *************");
// console.log(convertedDate);
