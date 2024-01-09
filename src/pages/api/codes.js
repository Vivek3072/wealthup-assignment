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
  if (req.method === "GET") {
    try {
      const newCode = await Code.create({ value: generateRandomCode() });
      res.json({ code: newCode.value });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

function generateRandomCode() {
  const length = 6;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
