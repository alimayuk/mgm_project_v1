import Staff from "../../models/Staff.js";
import bcrypt from "bcrypt";
import { generateRandomPassword } from "../../utils/generateRandomPassword.js";
import { sendEmailStaffPassword } from "../../utils/sendEmailVerificationOTP.js";

class StaffController {
  static createStaff = async (req, res) => {
    const { name, phone, email } = req.body;
    try {
      const existingStaff = await Staff.findOne({ email });
      if (existingStaff) {
        return res.status(409).json({
          status: "failed",
          message: "Bu email kullanılıyor!",
        });
      }

      const password = generateRandomPassword();
      // generate salt and hash password
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashedPassword = await bcrypt.hash(password, salt);

      await sendEmailStaffPassword(name, email, password);

      const newStaff = new Staff({
        name,
        phone,
        email,
        password: hashedPassword,
      });

      await newStaff.save();

      res.status(201).json({
        status: "success",
        message: "Kayıt başarılı.",
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
  static getStaffs = async (req, res) => {
    try {
      const staffs = await Staff.find();
      res.status(200).json({
        status: "success",
        staffs,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "failed",
        message:
          "Kayıtları getirirken bir hata oluştu. Daha sonra tekrar deneyiniz.",
      });
    }
  };
  static deleteStaff = async (req, res) => {
    const { email } = req.body;
    try {
      // Çalışanı bul
      const staff = await Staff.findOneAndUpdate(
        { email },
        { active: false },
        { new: true }
      );

      // Çalışan bulunamazsa
      if (!staff) {
        return res.status(404).json({
          status: "failed",
          message: "Çalışan bulunamadı.",
        });
      }

      // Güncelleme yapılmışsa
      if (staff.active === false) {
        return res.status(400).json({
          status: "failed",
          message: "Çalışan zaten silinmiş.",
        });
      }

      // Başarı durumu
      res.status(200).json({
        status: "success",
        message: "Kayıt başarıyla silindi.",
      });
    } catch (error) {
      // Hata durumu
      console.error("deleteStaff error:", error);
      res.status(500).json({
        status: "failed",
        message:
          "Kayıt silinirken bir hata oluştu. Daha sonra tekrar deneyiniz.",
      });
    }
  };
}

export default StaffController;
