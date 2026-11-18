# Kampüs Etkinlikleri - Backend REST API

Bu servis, Kampüs Etkinlikleri uygulamasının Node.js, Express, MongoDB ve Mongoose ile geliştirilmiş REST API arka yüzüdür (Sprint 8 - Kalıcı Veri).

## Çalıştırma Komutları

```bash
cd backend
npm install
npm run seed    # Örnek 6 etkinliği MongoDB veritabanına ekler (deleteMany + insertMany)
npm run dev     # node --watch src/server.js ile geliştirme modunda başlatır
npm start       # node src/server.js ile başlatır
```

## Ortam Değişkenleri (.env)

Sunucu yapılandırması `.env` dosyasından okunur. Örnek yapılandırma için `.env.example` dosyası kullanılabilir.

| Değişken | Açıklama | Örnek / Varsayılan |
|---|---|---|
| `PORT` | API sunucusunun dinleyeceği port numarası | `3000` |
| `MONGODB_URI` | MongoDB veritabanı bağlantı URI adresi | `mongodb://127.0.0.1:27017/kampus` |

> **Önemli:** Gerçek MongoDB Atlas kullanıcı adı ve şifresi kesinlikle GitHub'a gönderilmez; `.env` dosyası `.gitignore` ile korunmaktadır.

## REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/health` | Sunucu durum ve öğrenci no kontrolü | 200 | - | Sprint 7/8 |
| GET | `/events` | Listeyi getir (isteğe bağlı `?category=` filtresi) | 200 | - | Sprint 8 |
| GET | `/events/:id` | Tek etkinlik detayını MongoDB `_id` ile getir | 200 | 404 | Sprint 8 |
| POST | `/events` | Yeni etkinlik kaydı oluştur (Mongoose doğrulama) | 201 | 400 | Sprint 8 |
| PATCH | `/events/:id` | Etkinlik bilgilerini güncelle | 200 | 400, 404 | Sprint 9 |
| DELETE | `/events/:id` | Etkinliği sil | 204 | 404 | Sprint 9 |

### HTTP Durum Kodları (Status Codes)
- **200 OK:** İstek başarılı (veri listelendi veya tekil etkinlik `_id` ile getirildi).
- **201 Created:** Yeni etkinlik kaydı MongoDB'ye başarıyla kaydedildi.
- **204 No Content:** İçerik yok (silme işlemi).
- **400 Bad Request:** Şema doğrulama hatası (Mongoose ValidationError).
- **404 Not Found:** İstenen etkinlik bulunamadı veya geçersiz `_id` biçimi.
- **500 Server Error:** Beklenmeyen sunucu hatası (merkezi hata middleware'i tarafından yakalanır).

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
      "time": "2026-11-18T10:00:00.000Z",
      "student": "2211012707"
    }
    ```

## Öğrenci Bilgileri
- **Ad Soyad:** Mehmet Ali Can Coşkun
- **Öğrenci No:** 2211012707
