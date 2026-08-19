'use client';

import React, { useState, useMemo } from 'react';
import {
  Hammer,
  Truck,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Trash2,
  Clock,
  Sparkles,
  ChevronDown,
  Building2,
  Layers,
  ArrowRight,
  Camera,
  Wrench,
} from 'lucide-react';

const DEMOLITION_WORKS = [
  {
    title: 'Полный демонтаж 2-комнатной квартиры',
    location: 'Вторичка 56 м², вывезено 3 контейнера',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tag: 'Квартира под ключ',
  },
  {
    title: 'Снос кирпичных стен и сантехкабины',
    location: 'Сталинка, подготовка под перепланировку',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    tag: 'Снос стен',
  },
  {
    title: 'Снятие цементной стяжки до плит',
    location: 'Новостройка 82 м², очистка за 1 день',
    img: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
    tag: 'Стяжка',
  },
  {
    title: 'Погрузка и вывоз мусора контейнером 8м³',
    location: 'Упаковка в 120 мешков, чистый подъезд',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    tag: 'Вывоз мусора',
  },
];

export default function DemolitionLanding() {
  const [area, setArea] = useState(45);
  const [wallType, setWallType] = useState<'drywall' | 'brick' | 'concrete' | 'none'>('brick');
  const [screedRemoval, setScreedRemoval] = useState(true);
  const [tileRemoval, setTileRemoval] = useState(true);
  const [includeDisposal, setIncludeDisposal] = useState(true);

  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const calculation = useMemo(() => {
    let basePricePerSqM = 400;
    let wallsCost = wallType === 'drywall' ? 350 * 15 : wallType === 'brick' ? 650 * 15 : wallType === 'concrete' ? 1200 * 15 : 0;
    let screedCost = screedRemoval ? area * 350 : 0;
    let tileCost = tileRemoval ? 8000 : 0;
    let disposalCost = includeDisposal ? 9000 : 0;

    let total = area * basePricePerSqM + wallsCost + screedCost + tileCost + disposalCost;
    return { baseTotal: area * basePricePerSqM, wallsCost, screedCost, tileCost, disposalCost, total };
  }, [area, wallType, screedRemoval, tileRemoval, includeDisposal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div>
      {/* Header */}
      <header style={{ borderBottom: '1px solid var(--border-subtle)', padding: '16px 0', backgroundColor: 'rgba(20, 20, 20, 0.95)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--color-orange-light)', border: '1px solid var(--color-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)' }}>
              <Hammer size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: '1.25rem', color: '#FFF', letterSpacing: '0.04em' }}>ДЕМОНТАЖ-ПРО</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Снос стен, демонтаж квартир и вывоз мусора</div>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#portfolio" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Объекты</a>
            <a href="#calc" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Калькулятор</a>
            <a href="#prices" style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>Цены</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <a href="tel:+78000000000" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#FFF' }}>+7 (800) 000-00-00</a>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-orange)' }}>Оценка по фото за 15 минут</span>
            </div>
            <a href="#calc" className="btn-orange" style={{ padding: '9px 20px', fontSize: '0.875rem' }}>
              Рассчитать демонтаж
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '90px 0', overflow: 'hidden', backgroundImage: 'linear-gradient(to right, rgba(20, 20, 20, 0.96) 40%, rgba(20, 20, 20, 0.7) 100%), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: 9999, background: 'var(--color-orange-light)', border: '1px solid var(--color-orange)', color: 'var(--color-orange)', fontSize: '0.8125rem', fontWeight: 800, marginBottom: '24px' }}>
              <Truck size={15} /> Свой парк контейнеров 8-27м³ и бригады грузчиков
            </div>
            <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', lineHeight: 1.15, marginBottom: '20px' }}>
              Аккуратный демонтаж в квартирах и домах <span style={{ color: 'var(--color-orange)' }}>от 400 ₽/м²</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', opacity: 0.9, marginBottom: '32px', lineHeight: 1.6, maxWidth: 620 }}>
              Снос межкомнатных перегородок, демонтаж стяжки, плитки и сантехкабин. Строгое соблюдение графика тишины, упаковка в плотные мешки и вывоз мусора на полигон.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '14px', marginBottom: '36px' }}>
              <div style={{ background: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(8px)', padding: '14px', borderRadius: 12, border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock color="var(--color-orange)" size={22} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>По графику тишины</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>без жалоб соседей</div>
                </div>
              </div>
              <div style={{ background: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(8px)', padding: '14px', borderRadius: 12, border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Trash2 color="var(--color-orange)" size={22} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Вывоз за 1 день</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>свои контейнеры</div>
                </div>
              </div>
              <div style={{ background: 'rgba(30, 30, 30, 0.85)', backdropFilter: 'blur(8px)', padding: '14px', borderRadius: 12, border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck color="var(--color-orange)" size={22} />
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>Фикс-смета</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>цена не вырастет</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#calc" className="btn-orange" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                Рассчитать смету демонтажа ➔
              </a>
              <a href="#portfolio" className="btn-outline" style={{ padding: '14px 24px' }}>
                Смотреть объекты
              </a>
            </div>
          </div>

          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 24, padding: '32px', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>Оценка стоимости по фото</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
              Оставьте номер — пришлем расчет стоимости демонтажа и вывоза мусора в WhatsApp/Telegram за 15 минут.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px' }}>Номер телефона *</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: '100%', background: 'var(--bg-main)', border: '1.5px solid var(--border-subtle)', padding: '12px 16px', borderRadius: 10, color: '#FFF', fontSize: '0.9375rem' }}
                />
              </div>
              <button type="submit" className="btn-orange" style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '4px' }}>
                {submitted ? '✓ Заявка принята! Ожидайте расчет' : 'Получить расчет сметы'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Photo Portfolio Section */}
      <section id="portfolio" style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px auto' }}>
            <div style={{ color: 'var(--color-orange)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Camera size={16} /> Выполненные объекты
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Фотографии процесса и результатов</h2>
            <p style={{ color: 'var(--text-muted)' }}>Чистая бетонная коробка, готовая к чистовой отделке без пыли и мусора.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {DEMOLITION_WORKS.map((work, idx) => (
              <div key={idx} style={{ background: 'var(--bg-main)', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border-subtle)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
                <div style={{ height: 220, backgroundImage: `url('${work.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(20, 20, 20, 0.85)', backdropFilter: 'blur(6px)', color: 'var(--color-orange)', padding: '4px 10px', borderRadius: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                    {work.tag}
                  </span>
                </div>
                <div style={{ padding: '18px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '6px', color: '#FFF' }}>{work.title}</h4>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{work.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calc" style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px auto' }}>
            <div style={{ color: 'var(--color-orange)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Калькулятор демонтажа
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>Узнайте стоимость работ онлайн</h2>
            <p style={{ color: 'var(--text-muted)' }}>Точный расчет с учетом площади и вывоза мусора</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 24, padding: '36px' }}>
            {/* Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px' }}>
                  1. Площадь объекта (по полу): <span style={{ color: 'var(--color-orange)' }}>{area} м²</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="150"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--color-orange)', height: 6 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px' }}>2. Снос межкомнатных перегородок:</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                  {[
                    { id: 'none', label: 'Не требуется', price: '0 ₽' },
                    { id: 'drywall', label: 'Гипсокартон / ПГП', price: 'от 350 ₽/м²' },
                    { id: 'brick', label: 'Кирпич (в 1/2)', price: 'от 650 ₽/м²' },
                    { id: 'concrete', label: 'Бетон / монолит', price: 'от 1 200 ₽/м²' },
                  ].map((w) => (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setWallType(w.id as any)}
                      style={{
                        padding: '14px',
                        borderRadius: 12,
                        border: wallType === w.id ? '1.5px solid var(--color-orange)' : '1px solid var(--border-subtle)',
                        background: wallType === w.id ? 'var(--color-orange-light)' : 'var(--bg-surface-elevated)',
                        color: '#FFF',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{w.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-orange)', marginTop: 2 }}>{w.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: '10px' }}>3. Дополнительные работы:</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-surface-elevated)', padding: '12px 14px', borderRadius: 10, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={screedRemoval}
                      onChange={(e) => setScreedRemoval(e.target.checked)}
                      style={{ accentColor: 'var(--color-orange)', width: 18, height: 18 }}
                    />
                    <span style={{ fontSize: '0.875rem' }}>Демонтаж стяжки пола до плит (+350 ₽/м²)</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-surface-elevated)', padding: '12px 14px', borderRadius: 10, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={tileRemoval}
                      onChange={(e) => setTileRemoval(e.target.checked)}
                      style={{ accentColor: 'var(--color-orange)', width: 18, height: 18 }}
                    />
                    <span style={{ fontSize: '0.875rem' }}>Демонтаж плитки в санузле (+8 000 ₽)</span>
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-surface-elevated)', padding: '12px 14px', borderRadius: 10, cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={includeDisposal}
                      onChange={(e) => setIncludeDisposal(e.target.checked)}
                      style={{ accentColor: 'var(--color-orange)', width: 18, height: 18 }}
                    />
                    <span style={{ fontSize: '0.875rem' }}>Контейнер 8м³ + мешки + спуск и погрузка (+9 000 ₽)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Live Result */}
            <div style={{ background: 'var(--bg-surface-elevated)', padding: '32px', borderRadius: 20, border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-orange)', marginBottom: '4px' }}>Ориентировочная стоимость</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFF' }}>
                  {new Intl.NumberFormat('ru-RU').format(calculation.total)} ₽
                </div>

                <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Очистка покрытий ({area} м²):</span>
                    <span style={{ color: '#FFF', fontWeight: 600 }}>{calculation.baseTotal} ₽</span>
                  </div>
                  {calculation.wallsCost > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Снос перегородок:</span>
                      <span style={{ color: '#FFF', fontWeight: 600 }}>{calculation.wallsCost} ₽</span>
                    </div>
                  )}
                  {calculation.screedCost > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Демонтаж стяжки:</span>
                      <span style={{ color: '#FFF', fontWeight: 600 }}>{calculation.screedCost} ₽</span>
                    </div>
                  )}
                  {calculation.disposalCost > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Вывоз мусора контейнером:</span>
                      <span style={{ color: '#FFF', fontWeight: 600 }}>{calculation.disposalCost} ₽</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn-orange"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                  onClick={() => {
                    alert(`Спасибо! Смета демонтажа (${calculation.total} ₽) зафиксирована.`);
                  }}
                >
                  Вызвать бригадира на бесплатный осмотр
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section id="prices" style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 40px auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Прайс-лист на демонтажные работы</h2>
            <p style={{ color: 'var(--text-muted)' }}>Цены действительны на текущий месяц</p>
          </div>

          <div style={{ maxWidth: 800, margin: '0 auto', background: 'var(--bg-main)', borderRadius: 16, border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
            {[
              { name: 'Демонтаж гипсокартонных / ПГП перегородок', price: 'от 350 ₽/м²' },
              { name: 'Снос кирпичных стен в полкирпича', price: 'от 650 ₽/м²' },
              { name: 'Алмазная резка и снос бетона / монолита', price: 'от 1 200 ₽/м²' },
              { name: 'Демонтаж цементной стяжки пола (до 5 см)', price: 'от 350 ₽/м²' },
              { name: 'Снятие старой кафельной плитки', price: 'от 250 ₽/м²' },
              { name: 'Снятие обоев и зачистка штукатурки', price: 'от 120 ₽/м²' },
              { name: 'Демонтаж сантехкабины (гипс / шифер)', price: 'от 14 000 ₽' },
              { name: 'Аренда контейнера 8м³ с вывозом и утилизацией', price: 'от 8 500 ₽' },
            ].map((row, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: idx !== 7 ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontSize: '0.9375rem' }}>{row.name}</span>
                <span style={{ fontWeight: 700, color: 'var(--color-orange)' }}>{row.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 0', background: 'var(--bg-main)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '30px', textAlign: 'center' }}>Вопросы и ответы</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { q: 'Как вы решаете вопрос с соседями и шумом?', a: 'Мы строго соблюдаем закон о тишине: шумим только с 09:00 до 13:00 и с 15:00 до 19:00 (с обязательным тихим часом). Предупреждаем соседей и поддерживаем порядок в подъезде.' },
              { q: 'Кто убирает мусор в подъезде и лифте?', a: 'После окончания работ наши грузчики подметают лестничную клетку и моют лифт. Никакого мусора и строительной пыли в местах общего пользования.' },
              { q: 'Можно ли снести несущую стену?', a: 'Несущие стены сносить категорически запрещено. Мы выполняем демонтаж только ненесущих перегородок или резку проемов с обязательным усилением металлоконструкциями.' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 12, overflow: 'hidden' }}>
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  style={{ width: '100%', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', color: '#FFF', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer', textAlign: 'left' }}
                >
                  {item.q}
                  <ChevronDown size={18} style={{ transform: faqOpen === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </button>
                {faqOpen === idx && (
                  <div style={{ padding: '0 20px 16px 20px', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8125rem', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ fontWeight: 900, color: '#FFF', fontSize: '1.1rem', marginBottom: '8px' }}>ДЕМОНТАЖ-ПРО</div>
          <p>Комплексный демонтаж квартир и домов. Вывоз строительного мусора на полигон.</p>
          <p style={{ marginTop: '12px' }}>© {new Date().getFullYear()} Все права защищены. Портфолио-кейс.</p>
        </div>
      </footer>
    </div>
  );
}
