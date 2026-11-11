# Kampüs Etkinlikleri - Backend REST API

Bu servis, Kampüs Etkinlikleri uygulamasının Node.js ve Express ile geliştirilmiş REST API arka yüzüdür (Sprint 7).

## Çalıştırma Komutları

```bash
cd backend
npm install
npm run dev     # node --watch src/server.js ile geliştirme modunda başlatır
npm start       # node src/server.js ile başlatır
```

## Ortam Değişkenleri (.env)

Sunucu portu `.env` dosyasından okunur. Örnek yapılandırma için `.env.example` dosyası kullanılabilir.

| Değişken | Açıklama | Varsayılan |
|---|---|---|
| `PORT` | API sunucusunun dinleyeceği port numarası | `3000` |

## REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/events` | Listeyi getir (isteğe bağlı `?category=` filtresi) | 200 | - | Bu sprint |
| GET | `/events/:id` | Tek etkinlik detayını getir | 200 | 404 | Bu sprint |
| POST | `/events` | Yeni etkinlik kaydı oluştur | 201 | 400 | Bu sprint |
| PATCH | `/events/:id` | Etkinlik bilgilerini güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Etkinliği sil | 204 | 404 | Sprint 9 |

### HTTP Durum Kodları (Status Codes)
- **200 OK:** İstek başarılı (veri listelendi veya tekil etkinlik getirildi).
- **201 Created:** Yeni etkinlik kaydı başarıyla oluşturuldu.
- **204 No Content:** İçerik yok (silme işlemi).
- **400 Bad Request:** Eksik veya geçersiz veri (zorunlu `title`, `category`, `date` alanlarının eksik olması).
- **404 Not Found:** İstenen etkinlik veya route bulunamadı.

### Hata Yanıtı Biçimi
Tüm hatalar standart JSON biçiminde döner:
```json
{
  "error": {
    "message": "Event not found"
  }
}
```

### Health-Check Endpoint
- **GET `/health`**
  - **Başarılı (200 OK):**
    ```json
    {
      "status": "ok",
      "time": "2026-11-11T10:00:00.000Z",
      "student": "2211012707"
    }
    ```

## Öğrenci Bilgileri
- **Ad Soyad:** Mehmet Ali Can Coşkun
- **Öğrenci No:** 2211012707
