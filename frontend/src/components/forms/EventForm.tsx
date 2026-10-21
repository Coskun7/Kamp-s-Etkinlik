import type { Category } from "../../types/campus-event";

interface EventFormProps {
  mode: "add" | "update";
  categories: Category[];
}

function EventForm({ mode, categories }: EventFormProps) {
  return (
    <div className="form-container">
      <p className="form-info">
        Yıldızlı (*) alanlar zorunludur. Bu sprintte form sadece görünümdür; kaydetme yapılmaz.
      </p>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-grup">
          <label htmlFor="title">Etkinlik Adı *</label>
          <input type="text" id="title" name="title" maxLength={80} placeholder="Örn. Web Tasarım Atölyesi" />
        </div>

        <div className="form-grup">
          <label htmlFor="category">Kategori *</label>
          <select id="category" name="category">
            <option value="">Seçiniz</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-grup">
          <label htmlFor="date">Tarih *</label>
          <input type="date" id="date" name="date" />
        </div>

        <div className="form-grup">
          <label htmlFor="time">Saat *</label>
          <input type="time" id="time" name="time" />
        </div>

        <div className="form-grup">
          <label htmlFor="location">Yer *</label>
          <input type="text" id="location" name="location" placeholder="Örn. A Blok Konferans Salonu" />
        </div>

        <div className="form-grup">
          <label htmlFor="capacity">Kontenjan</label>
          <input type="number" id="capacity" name="capacity" min={1} max={1000} placeholder="Örn. 50" />
        </div>

        <div className="form-grup">
          <label htmlFor="description">Açıklama</label>
          <textarea id="description" name="description" rows={5} placeholder="Etkinlik hakkında kısa bilgi..." />
        </div>

        <button type="submit" className="btn btn-primary">
          {mode === "update" ? "Güncelle" : "Kaydet"}
        </button>
      </form>
    </div>
  );
}

export default EventForm;
