import EmailVerificationModel from "../../models/EmailVerification.js";
import UserModel from "../../models/User.js";
import {sendEmailVerificationOTP} from "../../utils/sendEmailVerificationOTP.js";

class verifyEmailController {
  static verifyEmail = async (req, res) => {
    try {
      // extract request body parameters
      const {email, otp} = req.params;
      console.log(email + otp);
      const existingUser = await UserModel.findOne({ email });

      // Check if email doesn't exists
      if (!existingUser) {
        return res
          .status(404)
          .json({ status: "failed", message: "Email bulunamadı." });
      }

      // Check if email is already verified
      if (existingUser.is_verified) {
        return res
          .status(400)
          .json({ status: "failed", message: "Email önceden onaylanmış!" });
      }

      const emailVerification = await EmailVerificationModel.findOne({
        userId: existingUser._id,
        otp,
      });

      // Check if otp is valid
      if (!emailVerification) {
        if (!existingUser.is_verified) {
          await sendEmailVerificationOTP(req, existingUser);
          return res.status(400).json({
            status: "failed",
            message: "Onay Kodu Geçersiz, Yeni Onay Kodunu Email'e Gönderildi.",
          });
        }
        return res
          .status(400)
          .json({ status: "failed", message: "Onay Kodu Geçersiz!" });
      }

      // Check if OTP is expired
      const currentTime = new Date();
      // 15 * 60 * 1000 calculates the expiration period in milliseconds(15 minutes).
      const expirationTime = new Date(
        emailVerification.createdAt.getTime() + 15 * 60 * 1000 * 1000
      );
      if (currentTime > expirationTime) {
        // OTP expired, send new OTP
        await sendEmailVerificationOTP(req, existingUser);
        return res.status(400).json({
          status: "failed",
          message: "OTP süresi doldu, yeni OTP e-posta adresinize gönderildi.",
        });
      }

      // OTP is valid and not expired, mark email as verified
      existingUser.is_verified = true;
      await existingUser.save();

      // Delete email verification document
      await EmailVerificationModel.deleteMany({ userId: existingUser._id });
      return res
        .status(200)
        .json({ status: "success", message: "E-posta başarıyla doğrulandı." });
    } catch (error) {
        return res
         .status(500)
         .json({ status: "failed", message: "E-posta doğrulama sırasında bir hata oluştu." });
    }
  };
}

export default verifyEmailController;