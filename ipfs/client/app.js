console.log("hello");
import { create } from 'js-kubo-rpc-client';
import fs from "fs";

async function ipfsClient() {
    const ipfs = await create({ url: "http://ipfs-node1.test:5001" });
    return ipfs;
}


async function saveText() {
    let ipfs = await ipfsClient();

    let result = await ipfs.add(`welcome ${new Date()}`);
    console.log(result);
}
//saveText();

async function saveFile() {
    let ipfs = await ipfsClient();

    let data = fs.readFileSync("./package.json")
    let options = {
        warpWithDirectory: false,
        progress: (prog) => console.log(`Saved :${prog}`)
    }
    let result = await ipfs.add(data, options);
    console.log(result)
}
//saveFile()

async function getData(hash) {
    let ipfs = await ipfsClient();

    let asyncitr = ipfs.cat(hash)

    for await (const itr of asyncitr) {

        let data = Buffer.from(itr).toString()
        console.log(data)
    }
}
getData('QmWNXDkUUoLtBsg3La4YCPqTUuwhR6sr29HgpPAUasUgRU')