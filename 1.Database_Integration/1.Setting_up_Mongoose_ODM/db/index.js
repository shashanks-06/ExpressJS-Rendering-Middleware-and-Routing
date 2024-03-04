import mongoose, { connect } from "mongoose";

const connectToDb = () =>
  mongoose.connect(
    `mongodb+srv://${process.env.atlasUser}:${process.env.atlasPassword}@cluster0.ygw6e8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true, // to ensure that underlying Node.js driver use a newly written url parsing logic while working with mongoDB connection strings
      useUnifiedTopology: true, //Monitoring servers in mongoDB replica set.
      //   useCreateIndex: true, // Needed indexes can be created in database.
      //   useFindAndModify: false, // To find a document to modify its contents

      // MondgoDB Atlas error : MongoParseError: options usecreateindex, usefindandmodify are not supported
      // thats why usecreateindex & usefindandmodify are commented out.
    }
  );

export default connectToDb;
