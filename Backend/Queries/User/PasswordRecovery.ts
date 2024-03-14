import { Request, Response } from "express";
import { UserModel } from "../../db";
import nodemailer from "nodemailer";

const getUSerByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};
function generateRandomToken(): string {
  const min = 100000;
  const max = 999999;
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.example.com",
  port: 587,
  secure: true,
  auth: {
    user: "kurookuroo891@gmail.com",
    pass: "eouoxikmqfelyuww",
  },
});

export const passwordRecovery = async (req: Request) => {
  const { email } = req.body;
  try {
    const user = await getUSerByEmail(email);
    if (!user) {
      return "User not found";
    }
    const token: string = generateRandomToken();
    const info = await transporter.sendMail({
      from: '"Azaa " <thebuy@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Hello ", // Subject line
      html: `<b>Here is your password recovery code: ${token}</b>`, // html body
    });

    transporter.sendMail(info, (error: any, info: any) => {
      if (error) {
        console.error("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
    const updatedUser = await UserModel.findOneAndUpdate(
      { email: user.email },
      { $set: { otp: token } }
    );
    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
