import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import { postsRouter } from "./routes/posts.routes.js"
import { commentsRouter } from "./routes/comments.routes.js"

const app = express()

// Middleware necesarios para que Express pueda interpretar los datos que le enviamos desde el cliente
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS
app.use(cors())

// Rutas
app.use("/posts", postsRouter)
app.use("/comments", commentsRouter)

connectDB()
  .then(() => {
    app.listen(8080, () => {
      console.log("Server is running on port 8080")
    })
  })
  .catch((err) => {})
