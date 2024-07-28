"use client";
import { Col, Row, Typography } from "antd";
import React from "react";
const { Title, Paragraph } = Typography;
const page = () => {
  return (
    <div className="container">
      <Row gutter={[16,16]} style={{ marginTop: "20px" }}>
        <Col md={24} lg={18}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <img
              src="https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              style={{ width: "100%", borderRadius: "20px", maxHeight: "500px", objectFit: "cover" }}
            />
            <Title style={{ marginTop: "20px" }} level={1}>
              Dijital Dişçilik: Geleceğin Diş Hekimliği
            </Title>
            <Paragraph style={{ lineHeight: "30px" }}>
              Giriş Dijital teknolojilerin hızla gelişmesiyle birlikte, dişçilik
              alanında da büyük değişimler yaşanmaktadır. Geleneksel yöntemlerin
              yerini daha hızlı, daha doğru ve daha konforlu dijital teknikler
              almaya başlamıştır. Bu yazıda, dijital dişçilikteki yenilikleri ve
              bu yeniliklerin diş sağlığı üzerindeki etkilerini ele alacağız.
              Dijital Dişçilik Nedir? Dijital dişçilik, diş hekimliği
              uygulamalarında dijital teknolojilerin kullanılmasıdır. Bu,
              dijital röntgenlerden 3D baskıya kadar geniş bir yelpazeyi kapsar.
              Dijital teknolojiler, tedavi süreçlerini daha etkili hale
              getirirken, hastalar için de daha konforlu deneyimler sunar.
              Dijital Dişçilikte Kullanılan Teknolojiler Dijital Röntgen Dijital
              röntgenler, geleneksel röntgenlere göre daha az radyasyon yayar ve
              anında sonuç verir. Bu sayede, diş hekimleri daha hızlı teşhis
              koyabilir ve tedavi planı oluşturabilir. CAD/CAM Teknolojisi
              Bilgisayar destekli tasarım ve üretim (CAD/CAM) teknolojisi, diş
              protezleri ve kronların üretiminde devrim yaratmıştır. Bu
              teknoloji sayesinde, hastaların diş ölçümleri dijital olarak
              alınır ve protezler daha hızlı ve hassas bir şekilde üretilir. 3D
              Baskı 3D baskı teknolojisi, diş hekimlerine ve teknisyenlere diş
              modelleri, protezler ve cerrahi rehberler oluşturma imkanı sağlar.
              Bu, tedavi süreçlerini hızlandırırken, maliyetleri de düşürür.
              Intraoral Tarayıcılar Intraoral tarayıcılar, hastaların ağız içi
              ölçümlerini dijital olarak alır. Bu tarayıcılar, geleneksel ölçüm
              yöntemlerine göre daha konforludur ve daha hassas sonuçlar verir.
              Dijital Dişçiliğin Avantajları Hızlı ve Hassas Teşhis: Dijital
              teknolojiler, diş hekimlerinin daha hızlı ve doğru teşhis
              koymasını sağlar. Konforlu Deneyim: Dijital yöntemler, hastalar
              için daha az invazivdir ve daha konforlu bir tedavi süreci sunar.
              Daha İyi Tedavi Planlaması: Dijital veriler, diş hekimlerinin daha
              etkili tedavi planları oluşturmasına yardımcı olur. Maliyet ve
              Zaman Tasarrufu: Dijital teknolojiler, tedavi süreçlerini
              hızlandırır ve maliyetleri düşürür. Sonuç Dijital dişçilik, diş
              hekimliği alanında devrim yaratmaktadır. Bu teknolojiler, hem diş
              hekimlerine hem de hastalara birçok avantaj sunar. Gelecekte
              dijital dişçiliğin daha da yaygınlaşması ve yeni teknolojilerin
              geliştirilmesiyle, diş sağlığı alanında büyük ilerlemeler
              kaydedilecektir.
            </Paragraph>
          </div>
        </Col>
        <Col md={24} lg={6} style={{ width:"100%" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "20px",
              height:"100%",
              width:"100%",
            }}
          >
            <Title level={3} style={{ textAlign:"center" }}>Benzer İçerikler</Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default page;
