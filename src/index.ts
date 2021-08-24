

import startup from "./app";
import { connecteDB } from "./config/database";


async function main() {
    
    const app = await startup();

    app.listen(4000, ()=>{
        console.log("server on running on port: 4000");
        
    });

    connecteDB();
    

}


main();