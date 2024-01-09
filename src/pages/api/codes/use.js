import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    const connection = await mongoose.connect(
      process.env.CONNECTION_STRING,
      {}
    );

    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

await connectToDatabase();
// console.log(isConnected, "isConnected");

const codeSchema = new mongoose.Schema({
  value: { type: String, unique: true },
  used: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Code = mongoose.models.Code || mongoose.model("Code", codeSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { code } = req.body;

    try {
      const existingCode = await Code.findOne({ value: code });

      if (!existingCode) {
        return res.status(400).json({ message: "Enter a valid code" });
      }

      if (existingCode.used) {
        return res
          .status(400)
          .json({ message: "This code has already been used" });
      }

      const currentTime = new Date();
      const expirationTime = new Date(
        existingCode.createdAt.getTime() + 60 * 1000
      );

      if (currentTime > expirationTime) {
        return res.status(400).json({ message: "The code has expired" });
      }

      await Code.findOneAndUpdate({ value: code }, { used: true });
      res.json({ message: "Code is correct" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
