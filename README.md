1. ## Proje Tanımı ve Amaçları

   - ## Proje Tanımı:
     Kişisel bakım alanında bloglar paylaşılmasını, kullanıcıların kayıt olarak bu bloglar altında fikirlerini paylaşmasını ve istenilen kişisel bakım işletmelerinden randevu alarak birebir görüşmelere gitmesini sağlayan bir platform.
   - ## Hedef Kitlesi:
     Kişisel bakım salonları ve kişisel bakım araştırması yapan insanlar.

2. ## Kurulum ve Başlangıç

   - ## Bağımlılıkların Kurulumu
      - npm install
   - ## Ortam Değişkenlerinin Ayarlanması
     - FRONTEND_HOST = http://localhost:3000
     - PORT = 8000
     - DATABASE_URL
     - SALT
     - EMAIL_HOST
     - EMAIL_PORT
     - EMAIL_USER
     - EMAIL_PASS
     - EMAIL_FROM
     - JWT_ACCESS_TOKEN_SECRET_KEY
     - JWT_REFRESH_TOKEN_SECRET_KEY
     - NEXT_PUBLIC_JWT_SECRET_KEY

    - ## Projeyi Çalıştırma
     - npm run dev

3.  ## Kullanılan Teknoloji ve Araçlar

    - ## Frontend:
      - React.js
      - Next.js
      - Ant Design
      - Redux
      - Axios
      - Formik
    - ## Backend:
      - Node.js
      - Express.js
      - Bcrypt
      - Cookie-parser
      - Cors
      - Dotenv
      - Joi
      - Mongoose
      - Nodemailer
      - Nodemon
      - Passport-jwt
      - Passport
    - ## Veritabanı:
      - MongoDB

4.  ## Proje Yapısı

    - Ana Klasörler ve Dosyalar
    - Dizin Yapısı

5.  ## API Kılavuzu

    - ## End Noktaları
      - Kullanıcı Girişi: POST http://localhost:8000/api/account/login
      - Kullanıcı Kaydı: POST http://localhost:8000/api/account/register
      - Şifre Sıfırlama Linki: POST http://localhost:8000/api/account/reset-password-link
      - Token Yenileme: POST http://localhost:8000/api/account/refresh-token
      - Şifre Değiştirme: POST http://localhost:8000/api/account/change-password
      - Çıkış Yapma: POST http://localhost:8000/api/account/logout
      - Şifre Sıfırlama: POST http://localhost:8000/api/account/reset-password/:id/:token
    - ## İstek/Yanıt Formatları
      - Başarılı Yanıt:
      {
      "status": "success",
      "message": "Kayıt başarılı"
      }  
      - Hata Yanıtı:
      {
      "message": "Kayıt yapılırken bir hata oluştu. Daha sonra tekrar deneyiniz.",
      "status": "failed"
      }
    - ## Örnek İstekler
      - login {
      "email": "ali_kaya_@outlook.com.tr",
      "password":"333333"
      }
      - register {
      "email":"ghjjghd@outlook.com.tr",
      "name":"3333",
      "password": "313131",
      "password_confirmation":"313131"
      }

6.  Kod Örnekleri

    - Önemli Kod Parçaları ve Fonksiyonlar

7.  Sıkça Sorulan Sorular (SSS)

8.  Katılım Kılavuzu
    - Projeyi fork'layın.
    - Yeni bir dal oluşturun (git checkout -b feature/isim).
    - Değişikliklerinizi commitleyin (git commit -m 'Yeni özellik ekleme').
    - Dalınıza push yapın (git push origin feature/isim).
    Bir Pull Request açın.
