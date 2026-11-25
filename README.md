https://kamp-s-etkinlik.vercel.app/

# Kampüs Etkinlikleri

Bu depo, Üniversite Kampüs Etkinlikleri uygulamasının Frontend (React, Vite, TypeScript, React Router, Context API) ve Backend (Sprint 7, Sprint 8 & Sprint 9 - Tam CRUD, Node.js, Express, MongoDB, Mongoose, REST API) adımlarını içermektedir.

## Canlı Yayın Adresi
- **Vercel Canlı Link (Frontend):** [https://kamp-s-etkinlik.vercel.app/](https://kamp-s-etkinlik.vercel.app/)

## Sprint 9 · Tam CRUD (PATCH, DELETE, Arama ve Yaklaşan Etkinlikler)
Bu sprintte `backend/` servisinde tam CRUD kabiliyeti, gelişmiş arama ve tarih temelli listeleme mekanizmaları hayata geçirilmiştir:
- **Tarih Standardı (`GG-AA-YYYY`):** API arayüzünde `"15-10-2026"` biçiminde metin olarak iletilen tarihler, veritabanında gerçek BSON `Date` olarak saklanır (`src/utils/date.js` modülündeki `parseDate`, `formatDate` getter/setter ve `todayStart()` fonksiyonları ile).
- **Kısmi Güncelleme (`PATCH /events/:id`):** Sadece gönderilen alanlar güncellenir (`returnDocument: "after"`). `runValidators: true` ile şema kuralları işletilir; `_id`, `createdAt`, `updatedAt`, `__v` gibi korunan alanlar değiştirilemez (`400 Bad Request`). Boş gövde gönderildiğinde `400 Bad Request` yanıtı verilir.
- **Güvenli Silme (`DELETE /events/:id`):** Kayıt silindiğinde `204 No Content` (boş gövde) döner. Aynı kayıt tekrar silinmeye çalışıldığında `404 Not Found` yanıtı verilir.
- **Arama ve Kategori Filtresi (`GET /events?search=&category=`):** Başlıkta büyük/küçük harf duyarsız arama (`$regex`, `$options: "i"`) ve kategori filtreleme özellikleri tek veya birlikte çalışacak şekilde sunulur. Özel regex karakterleri kaçırılarak güvenli arama sağlanmıştır.
- **Yaklaşan Etkinlikler (`GET /events/upcoming`):** Bugünün başından itibaren (`$gte: todayStart()`) gelecekteki etkinlikler en yakından uzağa doğru kronolojik sırada (`sort({ date: 1, time: 1 })`) listelenir. Rota çakışmasını engellemek için `/:id` rotasından önce tanımlanmıştır.
- **Postman & Newman Doğrulaması:** 18 istek ve 45 testten oluşan resmi test koleksiyonu (`backend/requests/kampus-api.json`) çalıştırılmış, tüm testlerin başarıyla geçtiği (`45/45 yeşil, 0 hata`) `backend/requests/run-results.json` dosyasına işlenmiştir.

## Sprint 8 · Kalıcı Veri (MongoDB ve Mongoose)
- **Veritabanı:** MongoDB Atlas / Yerel MongoDB (`MONGODB_URI` ortam değişkeni ile).
- **Mongoose Modeli:** `Event` şeması (`title`, `category`, `capacity`, `date`, `time`, `location`, `description`, `timestamps`).
- **Seed Scripti:** `npm run seed` (`src/seed.js`) komutu ile örnek 6 etkinlik veritabanına eklenir (geçmiş ve gelecek tarihli etkinlikler içerir).
- **Health-Check:** `GET /health` -> `{ "status": "ok", "time": "...", "student": "2211012707" }`
- **Etkinlik Listesi:** `GET /events` (MongoDB'den tarihe göre sıralı, isteğe bağlı filtreler)
- **Tekil Etkinlik:** `GET /events/:id` (MongoDB `_id` ile bulma; geçersiz veya bulunamayan id için `404` `{ error: { message: "Event not found" } }`)
- **Yeni Etkinlik:** `POST /events` (Mongoose ile oluşturma `201`, şema doğrulama hatasında `400`)
- **Hata Yakalayıcı:** Merkezi hata middleware'i (`500 Server error`) ile sunucu çökmesi engellenir.

### Backend REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/health` | Sunucu sağlık kontrolü ve öğrenci no | 200 | - | çalışıyor |
| GET | `/events` | Listeyi getir (`?search=` ve `?category=` filtreleri) | 200 | - | çalışıyor |
| GET | `/events/upcoming` | Yaklaşan etkinlikleri tarihe göre sıralı getir | 200 | - | çalışıyor |
| GET | `/events/:id` | Tek etkinlik getir (MongoDB `_id` ile) | 200 | 404 | çalışıyor |
| POST | `/events` | Yeni etkinlik ekle (MongoDB kalıcı) | 201 | 400 | çalışıyor |
| PATCH | `/events/:id` | Etkinlik güncelle (sadece gönderilen alanlar) | 200 | 400, 404 | çalışıyor |
| DELETE | `/events/:id` | Etkinlik sil (gövde yok) | 204 | 404 | çalışıyor |

## Rotalar (Frontend - 10 Adet Route)
| Yol (`path`) | Sayfa Bileşeni | Açıklama |
|---|---|---|
| `/` | `HomePage.tsx` | Yaklaşan 2 etkinliği ve tüm etkinliklere geçiş butonunu gösterir. |
| `/events` | `EventsPage.tsx` | Tüm etkinlikleri listeler; canlı arama ve kategori filtreleme yapar. |
| `/events/:id` | `EventDetailPage.tsx` | Seçilen etkinliğin afişini, künyesini ve açıklamasını gösterir. |
| `/admin` | `AdminPage.tsx` | Etkinlik yönetim tablosu; yeni ekleme, düzenleme ve onaylı silme (`window.confirm`) sağlar. |
| `/admin/new` | `NewEventPage.tsx` | Doğrulamalı formla yeni etkinlik ekler ve `/admin`'e yönlendirir. |
| `/admin/:id/edit` | `EditEventPage.tsx` | Mevcut etkinliği formda doldurarak günceller ve `/admin`'e yönlendirir. |
| `/login` | `LoginPage.tsx` | E-posta ve şifre doğrulamalı giriş sayfası. |
| `/register` | `RegisterPage.tsx` | Ad soyad, e-posta, şifre ve şifre tekrarı doğrulamalı kayıt sayfası. |
| `/forgot-password` | `ForgotPasswordPage.tsx` | E-posta doğrulamalı şifre sıfırlama bağlantısı gönderme sayfası. |
| `*` | `NotFoundPage.tsx` | Bulunamayan sayfa veya etkinlikler için 404 görünümü. |

## Repo Yapısı
```text
kampus-etkinlik/
├── backend/
│   ├── requests/
│   │   ├── kampus-api.json
│   │   └── run-results.json
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   └── event-controller.js
│   │   ├── data/
│   │   │   └── seed-events.js
│   │   ├── models/
│   │   │   └── event-model.js
│   │   ├── routes/
│   │   │   └── event-routes.js
│   │   ├── utils/
│   │   │   └── date.js
│   │   ├── app.js
│   │   ├── seed.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Çalıştırma

### Frontend
```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
npm run build
```

### Backend (Sprint 9)
```bash
cd backend
npm install
npm run seed    # Örnek etkinlikleri veritabanına ekler
npm run dev     # node --watch src/server.js ile geliştirme modunda başlatır
npm start       # Üretim modu

# Masada / Yerel Test Komutu (Backend açıkken yeni bir terminalde):
npx newman run https://webdersi.vercel.app/test.json
```

## Öğrenci Bilgileri
- **Ad Soyad:** Mehmet Ali Can Coşkun
- **Öğrenci No:** 2211012707
