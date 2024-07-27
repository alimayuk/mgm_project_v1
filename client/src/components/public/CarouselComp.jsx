import React from "react";
import { Carousel } from "antd";

const images = [
  {
    title: "Sağlıklı Gülüşler İçin",
    image:
      "https://plus.unsplash.com/premium_photo-1702599011315-d7a589a91a09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sağlıklı gülüşler, sadece estetik değil, aynı zamanda genel ağız sağlığınız için de önemlidir. Rutin kontroller ve düzenli diş temizliği, sağlıklı ve parlak bir gülümsemenin anahtarıdır. Dişlerinizi düzenli olarak fırçalayarak ve diş ipi kullanarak sağlıklı bir ağız yapısına sahip olabilirsiniz.",
  },
  {
    title: "Konforlu Diş Tedavisi",
    image:
      "https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    description:
      "Konforlu diş tedavisi, hastaların rahat ve stressiz bir deneyim yaşamalarını sağlar. Modern teknoloji ve yöntemlerle, diş tedavileri artık çok daha konforlu ve ağrısız bir şekilde gerçekleştirilebilmektedir.",
  },
  {
    title: "Gülüş Tasarımı",
    image:
      "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    description:
      "Gülüş tasarımı, estetik diş hekimliği uygulamaları ile ideal gülüşünüzü oluşturmayı hedefler. Diş rengi, şekli ve dizilimi gibi faktörler dikkate alınarak, kişiye özel çözümler sunulur.",
  },
  {
    title: "Ağız ve Diş Sağlığı",
    image:
      "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
    description:
      "Ağız ve diş sağlığı, genel sağlık durumunuzun önemli bir parçasıdır. Düzenli diş hekimi kontrolleri, doğru beslenme ve ağız hijyenine dikkat etmek, sağlıklı dişlere ve diş etlerine sahip olmanızı sağlar.",
  },
];

const CarouselComp = React.memo(() => (
   <div
    style={{
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
                width: "80%",
                color: "white",
                textAlign: "center",
                zIndex: "2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                userSelect: "none",
                margin:"0 auto"
              }}
            >
              <h2 style={{ fontSize: "56px" ,fontWeight: "bold",}}>{src.title}</h2>
              <p style={{ fontSize:"20px", color:"lightgrey" }}>{src.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
));

export default CarouselComp;
