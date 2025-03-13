const plans = [
  {
    title: 'STANDART',
    basePrice: 78, // Цена за 3 месяца (базовая)
    discount: 35,
    durationOptions: [
      { label: '3 месяца', months: 3, multiplier: 1 },
      { label: '6 месяцев', months: 6, multiplier: 1.9 }, // Немного дешевле за 6 мес
      { label: '12 месяцев', months: 12, multiplier: 3 }, // Цена за год
    ],
    features: [
      'Ручной трейдинг',
      'Автоматическое или полуавтоматическое копирование сделок',
      'Личный кабинет со статистикой',
      'Среднесрочные сделки с уровнями набора портфеля',
    ],
    isHighlighted: false,
  },
  {
    title: 'VIP',
    basePrice: 195, // Цена за 3 месяца (базовая)
    discount: 35,
    durationOptions: [
      { label: '3 месяца', months: 3, multiplier: 1 },
      { label: '6 месяцев', months: 6, multiplier: 1.9 },
      { label: '12 месяцев', months: 12, multiplier: 3 },
    ],
    features: [
      'Ручной трейдинг',
      'Автоматическое или полуавтоматическое копирование сделок',
      'Личный кабинет со статистикой',
      'Краткосрочные, среднесрочные и инвест сделки',
      'Доступ в VIP-чат с командой',
      'Наш авторский курс по трейдингу',
    ],
    isHighlighted: true,
  },
];

export default plans;
