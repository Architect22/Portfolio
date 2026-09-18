import featherborn1 from '../images/Featherborn/featherborn1.png';
import featherborn2 from '../images/Featherborn/featherborn2.png';
import giftsOfHope1 from '../images/GiftsOfHope/giftsOfHope1.png';
import multiplayer1 from '../images/Multiplayer/multiplayer1.png';
import survey1 from '../images/Survey/survey1.png';
import seniorDesign1 from '../images/SeniorDesign/senior1.png';
import dungeon1 from '../images/Dungeon/dungeon1.webp';
import stomper1 from '../images/Stomper/stomper1.webp';
const projects = [
  {
    id: 'featherborn',
    title: 'Featherborn',
    category: 'Game Development',
    pages: [
      {
        type: 'overview',
        role: 'Founder / Developer — Boku Studios',
        description: 'A commercial game shipped under my own studio, with a playable Steam demo.',
        tech: ['Unity', 'C#'],
        image: featherborn1,
        links: [{ label: 'Steam Demo', url: 'https://store.steampowered.com/app/3082940/Featherborn/' }],
      },
      {
        type: 'split',
        heading: 'Combat System Deep Dive',
        paragraphs: [
          'Featherborn\'s combat started as a simple hit-and-hurtbox system, but early playtesters found it too punishing.',
          'I reworked it around a windup/commit/recovery state machine so attacks telegraph clearly before they land.',
          'This also made enemy AI easier to write, since enemies could react to the player\'s current state rather than raw input.',
        ],
        link: { label: 'Devlog: Combat Rework', url: 'https://bokustudios.dev/devlog/combat' },
        image: featherborn2,
        imageAlt: 'Combat state machine diagram',
      },
    ],
  },
  {
    id: 'lost-dungeon',
    title: 'The Lost Dungeon',
    category: 'Game Development',
    pages: [
      {
        type: 'overview',
        role: 'Game Developer',
        description: 'A 2D dungeon crawler built with Construct3. The game was originally a game jam entry, but was later expanded into a full game with multiple levels and enemies.',
        tech: ['Construct3'],
        image: dungeon1,
        links: [],
      },
    ],
  },
  {
    id: 'stomper',
    title: 'Stomper',
    category: 'Game Development',
    pages: [
      {
        type: 'overview',
        role: 'Game Developer',
        description: 'An early career game project built with Construct3. The game was a simple platformer where the player had to stomp on enemies to defeat them.',
        tech: ['Construct3'],
        image: stomper1,
        links: [],
      },
    ],
  },
  {
    id: 'multiplayer',
    title: 'Multiplayer Class Project',
    category: 'Web Development',
    pages: [
      {
        type: 'overview',
        role: 'Frontend / Multiplayer Developer',
        description: 'A multiplayer game built with Android Studio and LibGDX, featuring a custom server and client architecture.',
        tech: ['Android Studio', 'LibGDX'],
        image: multiplayer1,
        links: [],
      },
      {
        type: 'overview',
        role: 'Frontend / Multiplayer Developer',
        description: 'A multiplayer game built with Android Studio and LibGDX, featuring a custom server and client architecture.',
        tech: ['Android Studio', 'LibGDX'],
        image: multiplayer1,
        links: [],
      },
    ],
  },
  {
    id: 'senior-design',
    title: 'Senior Design Class Dashboard',
    category: 'Web Development',
    pages: [
      {
        type: 'overview',
        role: 'Frontend Developer, UI/UX Designer',
        description: 'A dashboard for a senior design class, built with Typescript, React, and ported with Electron.',
        tech: ['Typescript', 'React', 'Electron'],
        image: seniorDesign1,
        links: [],
      },
    ],
  },
  {
    id: 'gifts-of-hope',
    title: 'Gifts of Hope',
    category: 'Web Development',
    pages: [
      {
        type: 'overview',
        role: 'Web Developer',
        description: 'A charity website for a local non-profit, built with Google Sites',
        tech: ['Google Sites'],
        image: giftsOfHope1,
        links: [],
      },
    ],
  },
  {
    id: 'survey',
    title: 'Video Game Personality Test',
    category: 'Web Development',
    pages: [
      {
        type: 'overview',
        role: 'Frontend Developer',
        description: 'A personality test that recommends video games based on the user\'s answers, built with HTML, CSS, and JavaScript, with mySQL Database integration' ,
        tech: ['HTML', 'CSS', 'JavaScript', 'mySQL'],
        image: survey1,
        links: [],
      },
    ],
  },
];

export default projects;