import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import { postsRouter } from "./routes/posts.routes.js"
import { commentsRouter } from "./routes/comments.routes.js"
import { registerRouter } from "./routes/register.routes.js"
import { login } from "./controllers/login.controllers.js"
import { loginRouter } from "./routes/login.routes.js"
import {port} from "./config/config.js"
import TokenMiddleware from "./middleware/tokenmiddleware.js"

const app = express()

// Middleware necesarios para que Express pueda interpretar los datos que le enviamos desde el cliente
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS
app.use(cors())

// Rutas

app.use("/register", registerRouter)
app.use("/login", loginRouter)
app.use(TokenMiddleware)
// Routes /posts and /comments are protected by TokenMiddleware
app.use("/posts", postsRouter)
app.use("/comments", commentsRouter)

// Conexión a la base de datos
/// utilizo el "port" que cree en config
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server is running on port 8080")
    })
  })
  .catch((err) => {})
