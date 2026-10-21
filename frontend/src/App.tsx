import "./App.css";
import { useEffect, useState } from "react";
import type { Category } from "./types/campus-event";
import type { PageName } from "./types/page";
import { events } from "./data/events";
import { filterByCategory, findEventById, searchEvents } from "./utils/filter-events";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";

const categories = [...new Set(events.map((e) => e.category))];

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
    window.scrollTo(0, 0);
  }

  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);
  const filtered = filterByCategory(searchEvents(events, searchText), category);
  const selected = selectedId ? findEventById(events, selectedId) : undefined;

  const titles: Record<PageName, string> = {
    home: "Kampüs Etkinlikleri",
    events: "Tüm Etkinlikler",
    detail: selected ? selected.title : "Etkinlik bulunamadı",
    add: "Etkinlik Ekle",
    update: "Etkinlik Güncelle",
  };
  const subtitles: Record<PageName, string> = {
    home: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.",
    events: "Ekim ayında kampüste düzenlenen etkinlikler.",
    detail: "Etkinlik detayları ve künyesi.",
    add: "Fakültede yeni bir etkinlik planlayın.",
    update: "Mevcut etkinlik bilgilerini güncelleyin.",
  };

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri — ${titles[page]}`;
  }, [titles[page]]);

  const showDetail = (id: string) => go("detail", id);

  return (
    <>
      <Header title={titles[page]} subtitle={subtitles[page]} current={page} onNavigate={go} />

      <main>
        {page === "home" && (
          <section>
            <h2 className="section-title">Yaklaşan 2 Etkinlik</h2>
            <EventList events={upcoming} onDetail={showDetail} />
            <div className="all-events-btn-wrapper">
              <button type="button" className="btn btn-primary" onClick={() => go("events")}>
                Tüm etkinlikleri gör
              </button>
            </div>
          </section>
        )}

        {page === "events" && (
          <>
            <EventFilter
              searchText={searchText}
              category={category}
              categories={categories}
              onSearchChange={setSearchText}
              onCategoryChange={setCategory}
            />
            <p id="sonuc">
              {filtered.length === 0
                ? "Aramanıza uygun etkinlik bulunamadı."
                : `${filtered.length} etkinlik listeleniyor.`}
            </p>
            <EventList events={filtered} onDetail={showDetail} />
          </>
        )}

        {page === "detail" && (
          <EventDetail event={selected} onBack={() => go("events")} onUpdate={(id) => go("update", id)} />
        )}

        {(page === "add" || page === "update") && (
          <EventForm mode={page} categories={categories} />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
