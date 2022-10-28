const players1 = ['neur',
    'alaba',
    'robben',
    'ribery',
    'lewandowsky',
    'muller',
    'schwinstiger',
    'messi',
    'mount',
    'eto',
    'rudiger',
    'essien'];

const players2 = [
    'cassilas',
    'ronaldo',
    'ronaldinho',
    'cafu',
    'xavi',
    'iniesta',
    'konte',
    'mani',
    'keane',
    'benzema',
    'casemiro',
    'anthony'
]

const [gk, ...fieldPlayers] = players1;

console.log(fieldPlayers, gk)

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'coutinho', 'perisic'];