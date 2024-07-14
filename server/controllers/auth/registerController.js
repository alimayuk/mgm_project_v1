import UserModel from "../../models/User.js";
import bcrypt from "bcrypt";
import { sendEmailVerificationOTP } from "../../utils/sendEmailVerificationOTP.js";

class RegisterController {
  static register = async (req, res) => {
    try {
      const { name, phone, email, password } = req.body;
      // Check if email is already exists
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          status: "failed",
          message: "Bu email kullanılıyor !",
        });
      }

      // generate salt and hash password
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashedPassword = await bcrypt.hash(password, salt);

      // create new user
      const newUser = await new UserModel({
        name,
        email,
        phone,
        password: hashedPassword,
      }).save();

      await sendEmailVerificationOTP(req, newUser);
      res.status(201).json({
        status: "success",
        message: "Kayıt başarılı. Email adresinizden hesabınızı doğrulayın.",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message:
          "Kayıt yapılırken bir hata oluştu. Daha sonra tekrar deneyiniz.",
        status: "failed",
      });
    }
  };
}

export default RegisterController;
