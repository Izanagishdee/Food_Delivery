import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const passwordHash = (password: string) => {
  const salt = bcrypt.genSaltSync(15);

  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compareSync(password, hashedPassword);
  return isPasswordRight;
};

export const tokenCreate = async (userId: string) => {
  const token = jwt.sign({ userId }, "secret", { expiresIn: "1d" });
  return token;
};
