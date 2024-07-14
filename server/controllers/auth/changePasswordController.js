import UserModel from "../../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendPasswordChangeLink } from "../../utils/sendEmailVerificationOTP.js";

class changeUserPassword {
  static changePassword = async (req, res) => {
    try {
      const { password } = req.body;
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const newHashPassword = await bcrypt.hash(password, salt);
      await UserModel.findByIdAndUpdate(req.user._id, {
        $set: { password: newHashPassword },
      });
      res
        .status(200)
        .json({ status: "success", message: "Şifre başarıyla değiştirildi." });
    } catch (error) {
      res
        .status(500)
        .json({
          status: "failed",
          message: "Şifre değiştirme sırasında bir hata oluştu.",
        });
    }
  };
 // Send Password Reset Link via Email
 static sendUserPasswordResetEmail = async (req, res) => {
  try {
    const { email } = req.body;
   
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: "failed", message: "Email bulunamadı." });
    }
    sendPasswordChangeLink(req, user);
    // Send success response
    res.status(200).json({ status: "success", message: "Parola sıfırlama e-postası gönderildi. Lütfen e-postanızı kontrol edin." });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "Parola sıfırlama e-postası gönderilemiyor. Lütfen daha sonra tekrar deneyin." });
  }
}

// Password Reset
static userPasswordReset = async (req, res) => {
  try {
    const { password } = req.body;
    const { id, token } = req.params;
    // Find user by ID
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ status: "failed", message: "Kullanıcı bulunamadı" });
    }
    // Validate token
    const new_secret = user._id + process.env.JWT_ACCESS_TOKEN_SECRET_KEY;
    jwt.verify(token, new_secret);

    // Generate salt and hash new password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const newHashPassword = await bcrypt.hash(password, salt);

    // Update user's password
    await UserModel.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } });

    // Send success response
    res.status(200).json({ status: "success", message: "Parola başarıyla sıfırlandı." });

  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return res.status(400).json({ status: "failed", message: "Jetonun süresi doldu. Lütfen yeni bir şifre sıfırlama bağlantısı isteyin." });
    }
    return res.status(500).json({ status: "failed", message: "Parola sıfırlanamadı. Lütfen daha sonra tekrar deneyin." });
  }
}
}

export default changeUserPassword;
