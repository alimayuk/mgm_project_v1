import Reservation from "../../models/Reservation.js";
import Staff from "../../models/Staff.js";

class ReservationsController {
  static createReservation = async (req, res) => {
    const { date, startTime, endTime, title, description, staff } = req.body;

    try {
      // Çalışanın var olup olmadığını kontrol et
      const staffDoc = await Staff.findById(staff);

      if (!staffDoc) {
        return res.status(400).json({
          message: "Çalışan Bulunamadı.",
        });
      }

      // Zaman çakışması kontrolü
      const existingReservations = await Reservation.find({ date, staff });
      const hasOverlap = existingReservations.some((reservation) => {
        return (
          (startTime >= reservation.startTime && startTime < reservation.endTime) ||
          (endTime > reservation.startTime && endTime <= reservation.endTime) ||
          (startTime <= reservation.startTime && endTime >= reservation.endTime)
        );
      });

      if (startTime === endTime) {
        return res.status(400).json({
          message: "Başlangıç ve Bitiş Zamanı Aynı Olamaz.",
        });
      }

      if (hasOverlap) {
        return res.status(400).json({
          message: "Zaman aralığı çakışıyor. Lütfen başka bir zaman aralığı seçin.",
        });
      }

      // Yeni rezervasyonu oluştur
      const newReservation = new Reservation({
        date,
        startTime,
        endTime,
        title,
        description,
        staff,
      });

      await newReservation.save();

      // Yeni rezervasyonu çalışanın rezervasyonlarına ekle ve kaydet
      staffDoc.reservations.push(newReservation._id);
      await staffDoc.save();

      res.status(201).json(newReservation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

export default ReservationsController;
