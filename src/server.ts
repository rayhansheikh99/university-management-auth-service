import mongoose from "mongoose";
import app from "./app"
import config from "./config/index"

// database connect 
async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('Database connected');
        app.listen(config.port, () => {
            console.log(`Server app listening on port ${config.port}`)
        })
    } catch (err) {
        console.log('Database connection failed');
    }

}

main();
