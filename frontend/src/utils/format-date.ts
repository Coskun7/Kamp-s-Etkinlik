// "2026-10-21" -> "21 Ekim 2026"
export const formatDate = (d: string) =>
  new Date(`${d}T00:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
