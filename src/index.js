const storesOpenSundays = [
    '2019-07-28',
    '2019-08-25',
    '2019-09-29',
    '2019-10-27',
    '2019-11-24',
    '2019-12-15',
    '2019-12-22',
    '2019-12-29'
];

window.addEventListener('DOMContentLoaded', () => {
    const currentSunday = getCurrentSunday();
    const isCurrentSundayOpen = storesOpenSundays.indexOf(getDateString(currentSunday)) !== -1;
    const futureOpenSundays = getFutureSundaysWithOpenStores();
    const currentElem = document.querySelector('.current');

    currentElem.classList.toggle('stores-closed', !isCurrentSundayOpen);
    currentElem.innerText = (
        `Niedziela ${isCurrentSundayOpen ? 'handlowa' : 'niehandlowa'}`
    );

    document.querySelector('.future > .text-1').innerText = (
        isCurrentSundayOpen ?
            'Kolejne niedziele handlowe' :
            'Nadchodzące niedziele handlowe'
    );
    document.querySelector('.future > .text-2').innerHTML = futureOpenSundays.map(getDateDisplay).slice(0, 4).join('<br />');
});

const getCurrentSunday = () => {
    const d = new Date();
    const weekday = d.getDay();
    const isTodaySunday = weekday === 0;

    if (!isTodaySunday) {
        d.setDate(d.getDate() + 7 - weekday);
    }

    return d;
};

const getFutureSundaysWithOpenStores = () => {
    const sunday = getDateString(getCurrentSunday());
    return storesOpenSundays.filter(d => d > sunday).map(d => new Date(d));
};

const getDateString = d => d.toISOString().split('T')[0];
const getDateDisplay = d => d.toLocaleDateString('pl-PL');
