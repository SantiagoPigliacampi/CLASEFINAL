import User from "../models/login.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {secretkey} from "../config/config.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario por su email
    const user = await User.findOne({ email });

    // Si el usuario no existe
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {

      // Crea un token de acceso
      const token = jwt.sign({ email: user.email}, secretkey, {
      expiresIn: '1h',
      });


      // Usuario autenticado exitosamente
      res.status(200).json({ message: "Autenticación exitosa" ,token});
    } else {
      // Contraseña incorrecta
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
