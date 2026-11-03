import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";
import { useEvents } from "../../context/EventsContext";
import { findEventById } from "../../utils/filter-events";

const pageHeaders: { path: string; title: string; text?: string }[] = [
  {
    path: "/",
    title: "Kampüs Etkinlikleri",
    text: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.",
  },
  {
    path: "/events",
    title: "Tüm Etkinlikler",
    text: "Ekim ayında kampüste düzenlenen etkinlikler.",
  },
  { path: "/admin", title: "Etkinlik Yönetimi" },
  { path: "/admin/new", title: "Etkinlik Ekle" },
  { path: "/login", title: "Giriş Yap" },
  { path: "/register", title: "Kayıt Ol" },
  { path: "/forgot-password", title: "Şifremi Unuttum" },
];

function Header() {
  const { pathname } = useLocation();
  const { events } = useEvents();

  const detailMatch =
    matchPath("/events/:id", pathname) ?? matchPath("/admin/:id/edit", pathname);
  const matchedEvent = detailMatch
    ? findEventById(events, detailMatch.params.id ?? "")
    : undefined;

  const pageHeader = pageHeaders.find((p) => matchPath(p.path, pathname));

  const title = matchedEvent
    ? matchedEvent.title
    : pageHeader
      ? pageHeader.title
      : "Sayfa Bulunamadı";

  const text = matchedEvent
    ? `${matchedEvent.category} · ${matchedEvent.location}`
    : pageHeader?.text;

  useEffect(() => {
    const siteName = "Kampüs Etkinlikleri";
    document.title = title === siteName ? siteName : `${title} — ${siteName}`;
  }, [title]);

  return (
    <header className="site-baslik">
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </header>
  );
}

export default Header;
