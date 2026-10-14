https://kampus-etkinlikleri-seven.vercel.app/

# Kampüs Etkinlikleri

Bu depo, Üniversite Kampüs Etkinlikleri uygulamasının Sprint 1, Sprint 2, Sprint 3 ve Sprint 4 adımlarını içermektedir.

## Canlı Yayın Adresi
- **Vercel Canlı Link:** https://kampus-etkinlikleri-seven.vercel.app/

## Sprintler
1. **Sprint 1 (HTML, Git ve Yayına Alma):** Semantik HTML iskeleti, 5 sayfa, erişilebilir formlar (sprint-01).
2. **Sprint 2 (CSS ve Responsive Tasarım):** Numaraya göre CSS değişkenleri (--ton: 347, --font: "Times New Roman"), grid kart düzeni, responsive tasarım (sprint-02).
3. **Sprint 3 (JavaScript ve DOM):** Modüler ES yapısı (data.js, event-list.js, event-detail.js, event-form.js), arama + dinamik kategori filtreleme, URLSearchParams ile detay sayfası (?id=), novalidate ve aria-invalid form validasyonu (sprint-03).
4. **Sprint 4 (Vite, TypeScript ve React):** `frontend/` klasöründe Vite React-TS projesi; tipler, veri ve saf fonksiyonlar `.ts` dosyalarında, 5 sayfa tek `App.tsx` içinde, sayfa geçişi ve arama state ile (sprint-04).

## Sprint 4 · frontend/ Dosyaları
| Dosya | Görevi |
|---|---|
| `package.json` | Proje adını, komutları (dev, build, preview) ve paket listesini tutar. |
| `package-lock.json` | Yüklenen paketlerin tam sürümlerini kilitler. |
| `node_modules/` | İndirilen paketlerdir; GitHub'a gönderilmez. |
| `tsconfig*.json` | TypeScript derleyici ayarlarını içerir. |
| `vite.config.ts` | Vite ayarlarını ve React eklentisini tanımlar. |
| `index.html` | Tek HTML dosyasıdır; React'in çizildiği boş `div#root`'u içerir. |
| `src/main.tsx` | React'i başlatır ve `App` bileşenini `#root`'a çizer. |
| `src/App.tsx` | Uygulamanın ana bileşenidir; 5 sayfanın hepsi buradadır. |
| `src/App.css` | Sprint 3'teki numaraya özel CSS'tir. |
| `src/index.css` | Genel stil dosyasıdır; bu sprintte boştur. |
| `src/types/campus-event.ts` | `Category` ve `CampusEvent` tiplerini tarif eder. |
| `src/data/events.ts` | Tipe uyan 6 etkinlik kaydını tutar. |
| `src/utils/filter-events.ts` | Arama, kategori filtresi ve id ile bulma saf fonksiyonlarıdır. |
| `public/` | Olduğu gibi kopyalanan dosyalardır (`afis.svg`). |

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
