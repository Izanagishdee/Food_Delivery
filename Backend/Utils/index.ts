import bcrypt from "bcrypt";

export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSaltSync(1);

  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compareSync(password, hashedPassword);
  return isPasswordRight;
};
