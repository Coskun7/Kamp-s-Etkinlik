https://kamp-s-etkinlik.vercel.app/

# Kampüs Etkinlikleri

Bu depo, Üniversite Kampüs Etkinlikleri uygulamasının Frontend (React, Vite, TypeScript, React Router, Context API) ve Backend (Sprint 7 - Node.js, Express, REST API) adımlarını içermektedir.

## Canlı Yayın Adresi
- **Vercel Canlı Link (Frontend):** [https://kamp-s-etkinlik.vercel.app/](https://kamp-s-etkinlik.vercel.app/)

## Sprint 7 · Backend REST API
Bu sprintte `backend/` klasöründe Express tabanlı bağımsız bir REST API servisi geliştirilmiştir:
- **Port:** `.env` üzerinden okunur (Varsayılan: `3000`). `.env.example` mevcuttur.
- **Health-Check:** `GET /health` -> `{ "status": "ok", "time": "...", "student": "2211012707" }`
- **Etkinlik Listesi:** `GET /events` (isteğe bağlı `?category=` filtresi)
- **Tekil Etkinlik:** `GET /events/:id` (bulunamazsa `404` `{ error: { message: "Event not found" } }`)
- **Yeni Etkinlik:** `POST /events` (başarılıysa `201`, eksik alanda `400` `{ error: { message: "title, category and date are required" } }`)
- **Postman Test Koleksiyonu:** `backend/requests/kampus-api.json` (6 adet otomatik test isteği)

### Backend REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/health` | Sunucu sağlık kontrolü ve öğrenci no | 200 | - | Sprint 7 |
| GET | `/events` | Listeyi getir (`?category=` opsiyonel) | 200 | - | Sprint 7 |
| GET | `/events/:id` | Tek etkinlik getir | 200 | 404 | Sprint 7 |
| POST | `/events` | Yeni etkinlik ekle | 201 | 400 | Sprint 7 |
| PATCH | `/events/:id` | Etkinlik güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Etkinlik sil | 204 | 404 | Sprint 9 |

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
│   │   ├── controllers/
│   │   │   └── event-controller.js
│   │   ├── data/
│   │   │   └── events.js
│   │   ├── routes/
│   │   │   └── event-routes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.tsx
│   │   └── main.tsx
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

### Backend (Sprint 7)
```bash
cd backend
npm install
npm run dev     # http://localhost:3000 (node --watch src/server.js)
npm start
```

## Öğrenci Bilgileri
- **Ad Soyad:** Mehmet Ali Can Coşkun
- **Öğrenci No:** 2211012707
