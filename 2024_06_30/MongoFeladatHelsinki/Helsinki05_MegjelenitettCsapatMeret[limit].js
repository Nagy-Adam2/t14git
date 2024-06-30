const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://HelsinkiAdatok:<password>@helsinki0.qbekqw5.mongodb.net/"


async function legnagyobbCsapatmeret() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("Helsinki");
        const collection = db.collection("HelsinkiAdatokObjektumban");

        const rendezesBeallitasa = { csapatMeret: -1 };
        const eredmeny = await collection.find({},{ projection: { _id: 0, helyezes: 1, csapatMeret: 1, sportAg: 1, versenySzam: 1 } }).sort(rendezesBeallitasa).limit(1).toArray();

        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása közben:", err);
    }
}


legnagyobbCsapatmeret();