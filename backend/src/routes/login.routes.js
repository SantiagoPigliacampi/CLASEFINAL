import { Router } from "express"
import {
  login
} from "../controllers/login.controllers.js"

const loginRouter = Router()

// loguearse
loginRouter.post("/", login)

export { loginRouter }