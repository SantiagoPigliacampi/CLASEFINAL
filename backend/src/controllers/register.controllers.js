import userModel from "../models/login.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica si el usuario ya existe con el mismo correo electrónico
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Hashea la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    const newUser = new userModel({
      email,
      password: hashedPassword,
    });

    // Guarda el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
