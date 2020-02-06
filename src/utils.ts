const months = [
  'stycznia',
  'lutego',
  'marca',
  'kwietnia',
  'maja',
  'czerwca',
  'lipca',
  'sierpnia',
  'września',
  'października',
  'listopada',
  'grudnia'
];

export const getDateDisplay = (d: Date): string => `${d.getDate()} ${months[d.getMonth()]}`;
export const getDaysOffsetDisplay = (days: number): string => {
  const weeks = Math.floor(days / 7);

  if (days < 0) {
    return 'minęła';
  }

  if (days === 0) {
    return 'dzisiaj';
  }

  if (days === 1) {
    return 'jutro';
  }

  if (days === 2) {
    return 'pojutrze';
  }

  if (days < 7) {
    return `za ${days} dni`;
  }

  if (weeks === 1) {
    return 'w przyszłym tygodniu';
  }

  if([2, 3, 4].some(x => weeks % 10 === x && weeks !== 10 + x)) {
    return `za ${weeks} tygodnie`;
  }

  return `za ${weeks} tygodni`;
};

export const getDaysOffset = (d: Date): number => {
  const days1 = Math.floor(d.getTime() / (24 * 3600 * 1000));
  const days2 = Math.floor(new Date().getTime() / (24 * 3600 * 1000));
  return days1 - days2;
};
