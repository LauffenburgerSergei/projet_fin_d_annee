import mongoose from "mongoose";
import config from "config";


async function connect() {
    const DBURI = config.get<string>('mongodburi');

    try {
      await mongoose.connect(DBURI)
      console.log('Connected to mongoDB')
    }
    catch(error:any) {
      console.log('Could not connect to mongoDB')
      process.exit(-1)
    }  
  }
  export default connect;