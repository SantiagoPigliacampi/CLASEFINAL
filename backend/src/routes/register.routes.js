import { Router } from "express"
import {
  register
} from "../controllers/register.controllers.js"

const registerRouter = Router()

// Crear un post
registerRouter.post("/", register)

export { registerRouter }