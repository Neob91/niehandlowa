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
export const getTimeUntilDateDisplay = (d: Date): string => {
  const days = Math.ceil((d.getTime() - +new Date()) / (1000 * 3600 * 24));
  const weeks = Math.floor(days / 7);

  if (days < 0) {
    return null;
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
