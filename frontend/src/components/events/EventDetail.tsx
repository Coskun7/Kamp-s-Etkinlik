import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent | undefined;
  onBack: () => void;
  onUpdate: (id: string) => void;
}

function EventDetail({ event, onBack, onUpdate }: EventDetailProps) {
  if (!event) {
    return (
      <div className="hata-kutusu">
        <p>Böyle bir etkinlik yok. Listeden bir etkinlik seçin.</p>
        <div className="buton-grubu">
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            ← Listeye dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="detay-karti">
      <div className={event.image ? "detay-grid" : undefined}>
        {event.image && (
          <figure className="afis-cerceve">
            <img className="afis-resim" src={event.image} alt={`${event.title} afişi`} />
            <figcaption>{event.title} afişi</figcaption>
          </figure>
        )}

        <div className="kunye-sutun">
          <h2>Etkinlik Künyesi</h2>
          <dl className="kunye-listesi">
            <dt>Tarih</dt>
            <dd>
              <time dateTime={`${event.date}T${event.time}`}>
                {formatDate(event.date)}, {event.time}
              </time>
            </dd>
            <dt>Yer</dt>
            <dd>{event.location}</dd>
            <dt>Kategori</dt>
            <dd>{event.category}</dd>
            <dt>Kontenjan</dt>
            <dd>{event.capacity} kişi</dd>
          </dl>
        </div>
      </div>

      <section className="aciklama-alani">
        <h2>Açıklama</h2>
        <p>{event.description}</p>
      </section>

      <div className="detay-eylemler">
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          ← Listeye dön
        </button>
        <button type="button" className="btn btn-primary" onClick={() => onUpdate(event.id)}>
          Bu etkinliği güncelle
        </button>
      </div>
    </article>
  );
}

export default EventDetail;
