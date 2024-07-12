const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://HelsinkiAdatok:<password>@helsinki0.qbekqw5.mongodb.net/"


async function sportagakListazza() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("Helsinki");
        const collection = db.collection("HelsinkiAdatokObjektumban");

        const eredmeny = await collection.find({
            sportAg: {
                $in: ["torna", "uszas"]
            }
        },{ projection: { _id: 0, sportAg: 1, versenySzam: 1 } }).toArray();


        console.log(eredmeny);
        client.close();
    }
    catch (err) {
        console.error("Hiba a művelet végrehajtása közben:", err);
    }
}


sportagakListazza();