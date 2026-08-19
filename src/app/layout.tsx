import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Демонтажные работы в квартирах и домах с вывозом мусора под ключ',
  description: 'Аккуратный демонтаж стен, перегородок, стяжки, плитки. Вывоз строительного мусора контейнерами. Собственный инструмент.',
  icons: {
    icon: 'icon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
