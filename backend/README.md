# Kampüs Etkinlikleri - Backend REST API

Bu servis, Kampüs Etkinlikleri uygulamasının Node.js, Express, MongoDB ve Mongoose ile geliştirilmiş REST API arka yüzüdür (Sprint 9 - Tam CRUD).

## Çalıştırma Komutları

```bash
cd backend
npm install
npm run seed    # Örnek etkinlikleri MongoDB veritabanına ekler (deleteMany + insertMany)
npm run dev     # node --watch src/server.js ile geliştirme modunda başlatır
npm start       # node src/server.js ile başlatır
```

### Test Çalıştırma (Newman)
Sunucu açıkken yeni bir terminalde:
```bash
npx newman run https://webdersi.vercel.app/test.json
```
veya yerel koleksiyon ile:
```bash
npx newman run requests/kampus-api.json --reporters cli,json --reporter-json-export requests/run-results.json
```

## Ortam Değişkenleri (.env)

Sunucu yapılandırması `.env` dosyasından okunur. Örnek yapılandırma için `.env.example` dosyası kullanılabilir.

| Değişken | Açıklama | Örnek / Varsayılan |
|---|---|---|
| `PORT` | API sunucusunun dinleyeceği port numarası | `3000` |
| `MONGODB_URI` | MongoDB veritabanı bağlantı URI adresi | `mongodb://127.0.0.1:27017/kampus` veya `mongodb+srv://...` |

> **Önemli:** Gerçek MongoDB Atlas kullanıcı adı ve şifresi kesinlikle GitHub'a gönderilmez; `.env` dosyası `.gitignore` ile korunmaktadır.

## REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
|---|---|---|---|---|---|
| GET | `/health` | Sunucu durum ve öğrenci no kontrolü | 200 | - | çalışıyor |
| GET | `/events` | Listeyi getir (`?search=` ve `?category=` filtreleri) | 200 | - | çalışıyor |
| GET | `/events/upcoming` | Yaklaşan etkinlikleri tarihe göre sıralı getir | 200 | - | çalışıyor |
| GET | `/events/:id` | Tek etkinlik detayını MongoDB `_id` ile getir | 200 | 404 | çalışıyor |
| POST | `/events` | Yeni etkinlik kaydı oluştur (Mongoose doğrulama) | 201 | 400 | çalışıyor |
| PATCH | `/events/:id` | Etkinlik bilgilerini güncelle (sadece gönderilen alanlar) | 200 | 400, 404 | çalışıyor |
| DELETE | `/events/:id` | Etkinliği sil (gövde yok) | 204 | 404 | çalışıyor |

### HTTP Durum Kodları (Status Codes)
- **200 OK:** İstek başarılı (veri listelendi, tekil etkinlik `_id` ile getirildi veya kayıt güncellendi).
- **201 Created:** Yeni etkinlik kaydı MongoDB'ye başarıyla kaydedildi.
- **204 No Content:** İşlem başarılı, içerik yok (silme işlemi).
- **400 Bad Request:** Şema doğrulama hatası (Mongoose ValidationError), geçersiz tarih biçimi, boş body veya korunan alan değiştirme girişimi.
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
      "time": "2026-11-25T10:00:00.000Z",
      "student": "2211012707"
    }
    ```

## Öğrenci Bilgileri
- **Ad Soyad:** Mehmet Ali Can Coşkun
- **Öğrenci No:** 2211012707
