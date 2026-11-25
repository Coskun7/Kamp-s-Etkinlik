https://kamp-s-etkinlik.vercel.app/

# Kampüs Etkinlikleri

Bu depo, Üniversite Kampüs Etkinlikleri uygulamasının Frontend (React, Vite, TypeScript, React Router, Context API) ve Backend (Sprint 7 & Sprint 8 - Node.js, Express, MongoDB, Mongoose, REST API) adımlarını içermektedir.

## Canlı Yayın Adresi
- **Vercel Canlı Link (Frontend):** [https://kamp-s-etkinlik.vercel.app/](https://kamp-s-etkinlik.vercel.app/)

## Sprint 8 · Kalıcı Veri (MongoDB ve Mongoose)
Bu sprintte `backend/` klasöründe MongoDB ve Mongoose ile kalıcı veri mimarisine geçilmiştir:
- **Veritabanı:** MongoDB Atlas / Yerel MongoDB (`MONGODB_URI` ortam değişkeni ile).
- **Mongoose Modeli:** `Event` şeması (`title`, `category`, `capacity`, `date`, `time`, `location`, `description`, `timestamps`).
- **Seed Scripti:** `npm run seed` (`src/seed.js`) komutu ile örnek 6 etkinlik veritabanına eklenir.
- **Health-Check:** `GET /health` -> `{ "status": "ok", "time": "...", "student": "2211012707" }`
- **Etkinlik Listesi:** `GET /events` (MongoDB'den tarihe göre sıralı, isteğe bağlı `?category=` filtresi)
- **Tekil Etkinlik:** `GET /events/:id` (MongoDB `_id` ile bulma; geçersiz veya bulunamayan id için `404` `{ error: { message: "Event not found" } }`)
- **Yeni Etkinlik:** `POST /events` (Mongoose ile oluşturma `201`, şema doğrulama hatasında `400`)
- **Hata Yakalayıcı:** Merkezi hata middleware'i (`500 Server error`) ile sunucu çökmesi engellenir.
- **Postman Test Koleksiyonu:** `backend/requests/kampus-api.json` (Sprint 8 MongoDB ve `_id` uyumlu 6 test isteği)

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
│   │   └── kampus-api.json
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

### Backend (Sprint 8)
```bash
cd backend
npm install
npm run seed    # MongoDB'ye 6 örnek etkinliği ekler
npm run dev     # node --watch src/server.js
npm start
```

## Öğrenci Bilgileri
- **Ad Soyad:** Mehmet Ali Can Coşkun
- **Öğrenci No:** 2211012707
