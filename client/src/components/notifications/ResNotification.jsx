import { notification } from "antd";

const ResNotification = (response) => {
  if (response.status === "success") {
    console.log(response.status)
    notification.success({
      message: "Başarılı",
      description: `${response.message}`,
    });
    return true; 

  } else if (response.status === "failed") {
    notification.error({
      message: "Hata",
      description: `${response.message}`,
    });
  }
  return false;
};

export default ResNotification;
