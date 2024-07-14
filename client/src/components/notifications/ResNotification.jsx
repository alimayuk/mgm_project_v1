import { notification } from "antd";

const ResNotification = (response) => {
  if (response.data && response.data.status === "success") {
    notification.success({
      message: "Başarılı",
      description: `${response.data.message}`,
    });
    return true; // Başarılı olduğunu belirtmek için true döndürüyoruz
  } else if (response.error && response.error.data.status === "failed") {
    notification.error({
      message: "Hata",
      description: `${response.error.data.message}`,
    });
  }
  return false; // Başarısız olduğunu belirtmek için false döndürüyoruz
};

export default ResNotification;
