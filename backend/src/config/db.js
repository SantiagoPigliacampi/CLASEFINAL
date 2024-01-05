import { connect } from "mongoose"

export const connectDB = async () => {
  try {
    await connect("mongodb://127.0.0.1:27017/publicaciones")
  } catch (err) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
  }
}
