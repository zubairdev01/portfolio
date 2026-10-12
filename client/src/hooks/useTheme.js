import { useState, useEffect } from 'react';
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { const saved = localStorage.getItem('theme'); if (saved) return saved; } catch {}
    return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}
