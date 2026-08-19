'use client';

import React, { useState, useMemo } from 'react';
import {
  Truck,
  Trash2,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Phone,
  Camera,
  Hammer,
  HardHat,
} from 'lucide-react';

interface DemolitionItem {
  id: string;
  name: string;
  price: number;
}

const DEMO_ITEMS: DemolitionItem[] = [
  { id: 'partition', name: 'Демонтаж перегородок (гипсокартон / пеноблок)', price: 400 },
  { id: 'brick', name: 'Снос кирпичных стен до 12 см', price: 650 },
  { id: 'screed', name: 'Демонтаж цементной стяжки пола до 5 см', price: 450 },
  { id: 'tile', name: 'Снятие старой кафельной плитки со стен и пола', price: 300 },
  { id: 'sanuzel', name: 'Полный слом сантехкабины (гипс / шифер)', price: 14000 },
  { id: 'trash_bag', name: 'Сбор в мешки и спуск строительного мусора', price: 80 },
  { id: 'container_8', name: 'Вывоз мусора контейнером 8 м³ (до 5 тонн)', price: 8500 },
];

const DEMO_PORTFOLIO = [
  {
    title: 'Полный демонтаж 3-комнатной квартиры 84 м² под ключ',
    category: 'Вторичное жилье',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Снос сантехкабины и расширение проемов с усилением',
    category: 'Сантехкабины',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Демонтаж стяжки пола и плитки в коммерческом помещении',
    category: 'Коммерция',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
  },
];

export default function DemolitionLanding() {
  const [selectedTasks, setSelectedTasks] = useState<string[]>(['partition', 'screed', 'trash_bag', 'container_8']);
  const [squareMeters, setSquareMeters] = useState<number>(45);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleItem = (id: string) => {
    setSelectedTasks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalCost = useMemo(() => {
    let sum = 0;
    selectedTasks.forEach((id) => {
      const item = DEMO_ITEMS.find((s) => s.id === id);
      if (!item) return;
      if (id === 'sanuzel' || id === 'container_8') {
        sum += item.price;
      } else {
        sum += item.price * squareMeters;
      }
    });
    return sum;
  }, [selectedTasks, squareMeters]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border-subtle)', padding: '12px 0', backgroundColor: 'rgba(12, 15, 20, 0.95)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--color-orange-light)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', flexShrink: 0 }}>
              <Hammer size={20} />
            </div>
            <div style={{ minWidth: 0 }}>
              <div className="header-logo-text" style={{ fontWeight: 900, fontSize: '1.15rem', color: '#FFF', whiteSpace: 'nowrap' }}>ДЕМОНТАЖ-ПРО</div>
              <div className="header-logo-sub" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Свой парк контейнеров</div>
            </div>
          </div>

          <nav className="nav-desktop" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#portfolio" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Объекты</a>
            <a href="#calc" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Калькулятор</a>
            <a href="#prices" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Цены</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <div className="header-phone-desktop" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <a href="tel:+78000000000" style={{ fontWeight: 800, fontSize: '1rem', color: '#FFF', textDecoration: 'none' }}>+7 (800) 000-00-00</a>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-orange)' }}>Оценка по фото за 15 мин</span>
            </div>
            <a href="#calc" className="btn-orange" style={{ padding: '8px 16px', fontSize: '0.82rem', minHeight: 36 }}>
              Рассчитать смету
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '50px 0', overflow: 'hidden', backgroundImage: 'linear-gradient(to right, rgba(20, 20, 20, 0.96) 40%, rgba(20, 20, 20, 0.7) 100%), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container hero-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: 9999, background: 'var(--color-orange-light)', border: '1px solid var(--color-orange)', color: 'var(--color-orange)', fontSize: '0.75rem', fontWeight: 800, marginBottom: '16px' }}>
              <Truck size={13} /> Контейнеры 8–27 м³ и вывоз мусора
            </div>
            <h1 style={{ fontSize: 'clamp(1.65rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '14px' }}>
              Аккуратный демонтаж в квартирах и домах <span style={{ color: 'var(--color-orange)' }}>от 400 ₽/м²</span>
            </h1>
            <p style={{ fontSize: 'clamp(0.88rem, 2vw, 1.1rem)', color: 'var(--text-primary)', opacity: 0.9, marginBottom: '22px', lineHeight: 1.5, maxWidth: 620 }}>
              Снос межкомнатных перегородок, демонтаж стяжки, плитки и сантехкабин. Строгое соблюдение графика тишины, упаковка в плотные мешки и вывоз мусора на полигон.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(8px)', padding: '10px', borderRadius: 10, border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock color="var(--color-orange)" size={18} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>График тишины</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>без жалоб</div>
                </div>
              </div>
              <div style={{ background: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(8px)', padding: '10px', borderRadius: 10, border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Trash2 color="var(--color-orange)" size={18} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Вывоз за 1 день</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>контейнеры</div>
                </div>
              </div>
              <div style={{ background: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(8px)', padding: '10px', borderRadius: 10, border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck color="var(--color-orange)" size={18} />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>Фикс-смета</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>без доплат</div>
                </div>
              </div>
            </div>

            <div className="hero-btn-group" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#calc" className="btn-orange" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                Рассчитать смету ➔
              </a>
              <a href="#portfolio" className="btn-outline" style={{ padding: '12px 20px', fontSize: '0.9rem' }}>
                Смотреть объекты
              </a>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 20, padding: '24px', boxShadow: '0 16px 40px rgba(0,0,0,0.5)', width: '100%' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Оценка стоимости по фото</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.4 }}>
              Оставьте номер — пришлем расчет стоимости демонтажа и вывоза мусора в WhatsApp/Telegram за 15 минут.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>Номер телефона *</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: '100%', background: 'var(--bg-main)', border: '1.5px solid var(--border-subtle)', padding: '10px 14px', borderRadius: 8, color: '#FFF', fontSize: '0.9rem' }}
                />
              </div>
              <button type="submit" className="btn-orange" style={{ width: '100%', padding: '12px', fontSize: '0.92rem', marginTop: '4px' }}>
                {submitted ? '✓ Расчет отправлен!' : 'Получить расчет по фото'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Photo Portfolio Section */}
      <section id="portfolio" style={{ padding: '60px 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px auto' }}>
            <div style={{ color: 'var(--color-orange)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Camera size={14} /> Выполненные объекты
            </div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', marginBottom: '8px' }}>Примеры демонтажных работ</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Чистая уборка объекта и упаковка мусора в прочные мешки</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {DEMO_PORTFOLIO.map((work, idx) => (
              <div key={idx} style={{ background: 'var(--bg-main)', borderRadius: 14, overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
                <div style={{ height: 180, backgroundImage: `url('${work.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(20, 20, 20, 0.85)', backdropFilter: 'blur(6px)', color: 'var(--color-orange)', padding: '3px 8px', borderRadius: 5, fontSize: '0.7rem', fontWeight: 800 }}>
                    {work.category}
                  </span>
                </div>
                <div style={{ padding: '14px' }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFF' }}>{work.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calc" style={{ padding: '60px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 32px auto' }}>
            <div style={{ color: 'var(--color-orange)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              Калькулятор демонтажа
            </div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', marginBottom: '8px' }}>Рассчитайте смету с вывозом мусора</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Точный расчет без изменения цены на объекте</p>
          </div>

          <div className="calc-card-container">
            {/* Services Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--bg-surface-elevated)', borderRadius: 10, marginBottom: '6px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Площадь объекта:</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button type="button" onClick={() => setSquareMeters(Math.max(10, squareMeters - 5))} style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.1)', color: '#FFF', fontWeight: 800, cursor: 'pointer' }}>-5</button>
                  <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-orange)' }}>{squareMeters} м²</span>
                  <button type="button" onClick={() => setSquareMeters(squareMeters + 5)} style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.1)', color: '#FFF', fontWeight: 800, cursor: 'pointer' }}>+5</button>
                </div>
              </div>

              {DEMO_ITEMS.map((s) => {
                const isSelected = selectedTasks.includes(s.id);
                return (
                  <div
                    key={s.id}
                    onClick={() => toggleItem(s.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: 10,
                      background: isSelected ? 'var(--color-orange-light)' : 'var(--bg-surface-elevated)',
                      border: isSelected ? '1.5px solid var(--color-orange)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      minHeight: 44,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ width: 20, height: 20, borderRadius: 5, border: '1.5px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: isSelected ? 'var(--color-orange)' : 'transparent', color: '#FFF', flexShrink: 0 }}>
                        {isSelected && <CheckCircle2 size={14} />}
                      </div>
                      <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>{s.name}</span>
                    </div>
                    <span style={{ color: 'var(--color-orange)', fontWeight: 700, fontSize: '0.84rem', flexShrink: 0 }}>
                      {s.id === 'sanuzel' || s.id === 'container_8' ? `${s.price} ₽` : `${s.price} ₽/м²`}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Total Panel */}
            <div style={{ background: 'var(--bg-surface-elevated)', padding: '24px', borderRadius: 16, border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-orange)', marginBottom: '2px' }}>Предварительный расчёт</div>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#FFF' }}>
                  {new Intl.NumberFormat('ru-RU').format(totalCost)} ₽
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '6px' }}>
                  В расчет включены демонтаж, упаковка в мешки и вывоз строительного мусора на полигон.
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn-orange"
                  style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
                  onClick={() => {
                    alert(`Спасибо! Смета ${totalCost} ₽ сформирована. Бригадир свяжется с вами.`);
                  }}
                >
                  Заказать выезд оценщика
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '24px 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
        <div className="container">
          <div>© {new Date().getFullYear()} «Демонтаж-Про». Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}
