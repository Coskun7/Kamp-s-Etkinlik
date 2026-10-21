import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface EventListProps {
  events: CampusEvent[];
  onDetail: (id: string) => void;
}

function EventList({ events, onDetail }: EventListProps) {
  if (events.length === 0) {
    return <p className="bos-liste">Gösterilecek etkinlik yok.</p>;
  }
  return (
    <section className="etkinlik-listesi">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onDetail={onDetail} />
      ))}
    </section>
  );
}

export default EventList;
