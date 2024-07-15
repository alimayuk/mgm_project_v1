import React from "react";
import { Carousel } from "antd";

const images = [
  {
    title: "Sağlıklı Gülüşler İçin",
    image:
      "https://plus.unsplash.com/premium_photo-1702599011315-d7a589a91a09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Konforlu Diş Tedavisi",
    image:
      "https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
  },
  {
    title: "Gülüş Tasarımı",
    image:
      "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
  },
  {
    title: "Ağız ve Diş Sağlığı",
    image:
      "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
  },
];

const CarouselComp = React.memo(() => (
  <div
    style={{
      margin: "0 auto 20px",
      borderRadius: "10px",
      overflow: "hidden",
    }}
  >
    <Carousel autoplay>
      {images.map((src, index) => (
        <div key={index}>
          <div
            style={{
              height: "80vh",
              backgroundImage: `url(${src.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              userSelect: "none",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.664)",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                position: "relative",
                width: "100%",
                color: "white",
                textAlign: "center",
                zIndex: "2",
                fontSize: "36px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                userSelect: "none",
              }}
            >
              {src.title}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
));

export default CarouselComp;
