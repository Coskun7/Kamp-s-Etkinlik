https://kampus-etkinlikleri-seven.vercel.app/

# Kampüs Etkinlikleri

Bu depo, Üniversite Kampüs Etkinlikleri uygulamasının Sprint 1, Sprint 2, Sprint 3, Sprint 4, Sprint 5 ve Sprint 6 (React Router & Context API) adımlarını içermektedir.

## Canlı Yayın Adresi
- **Vercel Canlı Link:** [https://kampus-etkinlikleri-seven.vercel.app/](https://kampus-etkinlikleri-seven.vercel.app/)

## Rotalar (10 Adet Route)
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

## Klasör ve Dosya Yapısı (`frontend/src/`)
```text
src/
├── components/
│   ├── events/
│   │   ├── EventCard.tsx
│   │   ├── EventDetail.tsx
│   │   ├── EventFilter.tsx
│   │   └── EventList.tsx
│   ├── forms/
│   │   └── EventForm.tsx
│   └── layout/
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Navigation.tsx
├── context/
│   └── EventsContext.tsx
├── data/
│   └── events.ts
├── pages/
│   ├── AdminPage.tsx
│   ├── EditEventPage.tsx
│   ├── EventDetailPage.tsx
│   ├── EventsPage.tsx
│   ├── ForgotPasswordPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── NewEventPage.tsx
│   ├── NotFoundPage.tsx
│   └── RegisterPage.tsx
├── types/
│   └── campus-event.ts
├── utils/
│   ├── filter-events.ts
│   └── format-date.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## Çalıştırma
```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
npm run build
```

## Öğrenci Bilgileri
- **Ad Soyad:** Mehmet Ali Can Coşkun
- **Öğrenci No:** 2211012707
