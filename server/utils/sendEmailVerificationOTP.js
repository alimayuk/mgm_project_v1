import transporter from "../config/emailConfig.js";
import EmailVerificationModel from "../models/EmailVerification.js";
import jwt from "jsonwebtoken";

export const sendEmailVerificationOTP = async (req, user) => {
  // generate a random 4 digital number
  const otp = Math.floor(1000 + Math.random() * 9000);

  // save otp to database
  await new EmailVerificationModel({
    userId: user._id,
    otp: otp,
  }).save();

  // OTP Verification Link
  const otpVerificationLink = `${process.env.FRONTEND_HOST}/email-dogrulama?email=${user.email}&otp=${otp}`;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: "Hesap Doğrulama Kodu",
    html: `
      <p>Sevgili ${user.name},</p>
      <p>Web sitemize kaydolduğunuz için teşekkür ederiz. Kayıt işleminizi tamamlamak için, lütfen aşağıdaki linke tıklayarak e-posta adresinizi doğrulayın:</p>
      <p><a href="${otpVerificationLink}">E-posta adresinizi doğrulamak için tıklayın</a></p>
      <p>Bu link 15 dakika geçerlidir. Eğer bu işlemi siz başlatmadıysanız, lütfen bu e-postayı dikkate almayın.</p>
    `,
  });
};

export const sendPasswordChangeLink = async (req, user) => {
  // Generate token for password reset
  const secret = user._id + process.env.JWT_ACCESS_TOKEN_SECRET_KEY;
  const token = jwt.sign({ userID: user._id }, secret, { expiresIn: "15m" });

  // Reset Link
  const resetLink = `${process.env.FRONTEND_HOST}/yeni-sifre?userID=${user._id}&token=${token}`;

  // Send password reset email
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: "Şifre Sıfırlama",
    html: `<p>Merhaba ${user.name},</p><p>Şifrenizi sıfırlamak için lütfen <a href="${resetLink}">buraya tıklayın</a>.</p>`
  });
};

export const sendEmailStaffPassword = async (name, email, password) => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: "MGM Çalışan Şifreniz",
    html: `<p>Merhaba ${name},</p><p>Çalışan olarak size özel oluşturulmuş giriş şifreniz: <strong>${password}</strong>. Daha sonra değiştirmeyi unutmayınız!</p>`,
  });
};
