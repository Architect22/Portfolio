// Featherborn
import featherborn1 from '../images/Featherborn/featherborn1.png';
import featherborn2 from '../images/Featherborn/featherborn2.png';
import featherborn3 from '../images/Featherborn/Featherborn3.png'; // note: capital F in filename

// Stomper
import stomper1 from '../images/Stomper/stomper1.webp';
import stomper2 from '../images/Stomper/stomper2.webp';
import stomper3 from '../images/Stomper/stomper3.webp';

// Multiplayer
import multiplayer1 from '../images/Multiplayer/multiplayer1.png';
import multiplayer2 from '../images/Multiplayer/multiplayer2.png';
import multiplayer3 from '../images/Multiplayer/multiplayer3.png';
import multiplayer4 from '../images/Multiplayer/multiplayer4.png';
import multiplayer5 from '../images/Multiplayer/multiplayer5.png';

// Dungeon — using dungeon2/3/4 per your file tree (dungeon1.webp wasn't shown there)
import dungeon2 from '../images/Dungeon/dungeon2.webp';
import dungeon3 from '../images/Dungeon/dungeon3.webp';
import dungeon4 from '../images/Dungeon/dungeon4.webp';

// Survey
import survey1 from '../images/Survey/survey1.png';
import survey2 from '../images/Survey/survey2.png';
import survey3 from '../images/Survey/survey3.png';
import survey4 from '../images/Survey/survey4.png';

// Gifts of Hope
import giftsOfHope1 from '../images/GiftsOfHope/giftsOfHope1.png';
import giftsOfHope2 from '../images/GiftsOfHope/giftsOfHope2.png';

// Senior Design
import senior1 from '../images/SeniorDesign/senior1.png';
import senior2 from '../images/SeniorDesign/senior2.png';
import senior3 from '../images/SeniorDesign/senior3.png';
import senior4 from '../images/SeniorDesign/senior4.png';
import senior5 from '../images/SeniorDesign/senior5.png';
import senior6 from '../images/SeniorDesign/senior6.png';
import senior7 from '../images/SeniorDesign/senior7.png';
import senior8 from '../images/SeniorDesign/Senior8.png'; // note: capital S in filename
import senior9 from '../images/SeniorDesign/senior9.png';
// const projects = [
//   {
//     id: 'featherborn',
//     title: 'Featherborn',
//     category: 'Game Dev',
//     pages: [
//       {
//         type: 'overview',
//         role: 'Founder / Developer — Boku Studios',
//         description: 'A commercial game shipped under my own studio, with a playable Steam demo.',
//         tech: ['Unity', 'C#'],
//         image: featherborn1,
//         links: [{ label: 'Steam Demo', url: 'https://store.steampowered.com/app/3082940/Featherborn/' }],
//       },
//       {
//         type: 'custom',
//         blocks: [
//           { type: 'heading', text: 'Level Design' },
//           {
//             type: 'row',
//             children: [
//               { type: 'image', src: featherborn2, alt: 'Level layout' },
//               { type: 'image', src: featherborn2, alt: 'Level layout' },
//             ],
//           },
//           { type: 'text', text: 'Early levels were built as flat corridors, but playtesting showed players got lost without visual landmarks.' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'lost-dungeon',
//     title: 'The Lost Dungeon',
//     category: 'Game Dev',
//     pages: [
//       {
//         type: 'overview',
//         role: 'Game Developer',
//         description: 'A 2D dungeon crawler built with Construct3. The game was originally a game jam entry, but was later expanded into a full game with multiple levels and enemies.',
//         tech: ['Construct3'],
//         image: dungeon1, dungeon3,
//         links: [],
//       },
//       {
//         type: 'overview',
//         role: 'Animation and Art',
//         description: 'All the art and animations in the game were hand drawn by me and animated in editor. The game has 2 large cutscenes and many sprite sheet animations.',
//         tech: ['Construct3','Pixel Art','Timeline Animation'],
//         image: dungeon2,
//         links: [],
//       },
//     ],
//   },
//   {
//     id: 'stomper',
//     title: 'Stomper',
//     category: 'Game Dev',
//     pages: [
//       {
//         type: 'overview',
//         role: 'Game Developer',
//         description: 'An early career game project built with Construct3. The game was a simple platformer where the player had to stomp on enemies to defeat them.',
//         tech: ['Construct3'],
//         image: stomper1,
//         links: [],
//       },
//     ],
//   },
//   {
//     id: 'multiplayer',
//     title: 'Multiplayer Class Project',
//     category: 'Game Dev',
//     pages: [
//       {
//         type: 'overview',
//         role: 'Frontend / Multiplayer Developer',
//         description: 'A multiplayer game built with Android Studio and LibGDX, featuring a custom server and client architecture.',
//         tech: ['Android Studio', 'LibGDX'],
//         image: multiplayer1,
//         links: [],
//       },
//       {
//         type: 'custom',
//         blocks: [
//           { type: 'heading', text: 'Level Design' },
//           {
//             type: 'row',
//             children: [
//               { type: 'image', src: multiplayer2, alt: 'Level layout' },
//               { type: 'image', src: multiplayer2, alt: 'Level layout' },
//             ],
//           },
//           { type: 'text', text: 'Early levels were built as flat corridors, but playtesting showed players got lost without visual landmarks.' },
//         ],
//       },
//     ],
//   },
//   {
//     id: 'senior-design',
//     title: 'Senior Design Class Dashboard',
//     category: 'Web Dev',
//     pages: [
//       {
//         type: 'overview',
//         role: 'Frontend Developer, UI/UX Designer',
//         description: 'A dashboard for a senior design class, built with Typescript, React, and ported with Electron.',
//         tech: ['Typescript', 'React', 'Electron'],
//         image: seniorDesign1,
//         links: [],
//       },
//     ],
//   },
//   {
//     id: 'gifts-of-hope',
//     title: 'Gifts of Hope',
//     category: 'Web Dev',
//     pages: [
//       {
//         type: 'overview',
//         role: 'Web Developer',
//         description: 'A charity website for a local non-profit, built with Google Sites',
//         tech: ['Google Sites'],
//         image: giftsOfHope1,
//         links: [],
//       },
//     ],
//   },
//   {
//     id: 'survey',
//     title: 'Video Game Personality Test',
//     category: 'Web Dev',
//     pages: [
//       {
//         type: 'overview',
//         role: 'Frontend Developer',
//         description: 'A personality test that recommends video games based on the user\'s answers, built with HTML, CSS, and JavaScript, with mySQL Database integration' ,
//         tech: ['HTML', 'CSS', 'JavaScript', 'mySQL'],
//         image: survey1,
//         links: [],
//       },
//     ],
//   },
// ];
const projects = [
  // ---------- GAME DEV ----------
  {
    id: 'featherborn',
    title: 'Featherborn',
    category: 'Game Dev',
    pages: [
      {
        type: 'overview',
        role: 'Founder / Developer - Boku Studios', // TODO: confirm
        description: 'Featherborn is a commercial Unity game shipped under my own studio, with a playable Steam demo.',
        tech: ['Unity', 'C#'],
        image: featherborn1,
        links: [{ label: 'Steam Demo', url: 'https://store.steampowered.com/app/3082940/Featherborn/' }],
      },
      {
        type: 'split',
        heading: 'Featherborn',
        paragraphs: [
          'I was responsible for the programming, UI/UX, level design, marketing, and managing of contract workers',
        ],
        image: featherborn2,
        imageAlt: 'Featherborn gameplay',
      },
      {
        type: 'split',
        heading: 'Featherborn',
        paragraphs: [
          'I worked closely with the artists and made sure that all the art was cohesive across multiple contracters',
          'This screen shows some of the character dialogue UI'
        ],
        image: featherborn3,
        imageAlt: 'Featherborn gameplay',
      },
    ],
  },
  {
    id: 'stomper',
    title: 'Stomper', // TODO: confirm exact title
    category: 'Game Dev',
    pages: [
      {
        type: 'overview',
        role: 'Solo Developer', // TODO
        description: 'An early career game project built with Construct 3. The game was a simple platformer where the player had to stomp on enemies to defeat them.',
        tech: ['Construct 3'],
        image: stomper1,
        links: [],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Stomper' },
          { type: 'text'},
          {
            type: 'column',
            children: [
            {
              type: 'image',
              src: stomper2,
              alt: 'Stomper boss fight',
              caption: 'Stomp ability in action',
            },
            {
              type: 'image',
              src: stomper3,
              alt: 'Stomper boss fight',
              caption: 'Stomp ability defeating an enemy', // optional — remove if not needed
            },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'multiplayer-action',
    title: 'Multiplayer Class Project',
    category: 'Game Dev',
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
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Multiplayer Class Project' },
          {
            type: 'column',
            children: [
              { type: 'text', text: 'Changing level screens'},
              { type: 'image', src: multiplayer2, alt: 'Feature 1' },
              { type: 'image', src: multiplayer3, alt: 'Feature 2' },
            ],
          },
        ],
      },
      {
        type: 'split',
        heading: 'Server Architecture', // TODO
        paragraphs: ['TODO: describe the client/server design.'],
        image: multiplayer5,
        imageAlt: 'Server architecture diagram',
      },
    ],
  },
  {
    id: 'dungeon',
    title: 'Dungeon Project', // TODO: confirm real title
    category: 'Game Dev',
    pages: [
      {
        type: 'overview',
        role: 'Solo Developer', // TODO
        description: 'TODO: description of the dungeon project.',
        tech: [], // TODO
        image: dungeon2,
        links: [],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Environment Art' }, // TODO
          {
            type: 'gallery',
            columns: 2,
            images: [
              { src: dungeon3, alt: 'Dungeon area 1' },
              { src: dungeon4, alt: 'Dungeon area 2' },
            ],
          },
        ],
      },
    ],
  },

  // ---------- WEB DEV (guessed — reassign if wrong) ----------
  {
    id: 'survey',
    title: 'Video Game Personality Test',
    category: 'Web Dev',
    pages: [
      {
        type: 'overview',
        role: 'Frontend Developer',
        description: "A personality test that recommends video games based on the user's answers, built with HTML, CSS, and JavaScript, with mySQL Database integration.",
        tech: ['HTML', 'CSS', 'JavaScript', 'mySQL'],
        image: survey1,
        links: [],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Question Flow' }, // TODO
          {
            type: 'row',
            children: [
              { type: 'text', text: 'TODO: describe the question/scoring logic.' },
              { type: 'image', src: survey2, alt: 'Survey question screen' },
            ],
          },
        ],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Results Page' }, // TODO
          {
            type: 'gallery',
            columns: 2,
            images: [
              { src: survey3, alt: 'Results screen 1' },
              { src: survey4, alt: 'Results screen 2' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gifts-of-hope',
    title: 'Gifts of Hope', // TODO: confirm real title
    category: 'Web Dev', // TODO: confirm — could be Product Design
    pages: [
      {
        type: 'overview',
        role: 'TODO',
        description: 'TODO: description.',
        tech: [], // TODO
        image: giftsOfHope1,
        links: [],
      },
      {
        type: 'split',
        heading: 'TODO Section Title',
        paragraphs: ['TODO: paragraph about this project.'],
        image: giftsOfHope2,
        imageAlt: 'Gifts of Hope screen',
      },
    ],
  },
  {
    id: 'senior-design',
    title: 'Senior Design Project', // TODO: confirm real title
    category: 'Web Dev', // TODO: confirm
    pages: [
      {
        type: 'overview',
        role: 'TODO',
        description: 'TODO: description of the senior design capstone project.',
        tech: [], // TODO
        image: senior1,
        links: [],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'System Overview' }, // TODO
          {
            type: 'gallery',
            columns: 3,
            images: [
              { src: senior2, alt: 'Senior design screen 1' },
              { src: senior3, alt: 'Senior design screen 2' },
              { src: senior4, alt: 'Senior design screen 3' },
            ],
          },
        ],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Technical Details' }, // TODO
          {
            type: 'row',
            children: [
              { type: 'text', text: 'TODO: explain a specific technical challenge.' },
              { type: 'image', src: senior5, alt: 'Senior design diagram' },
            ],
          },
        ],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'More Screens' },
          {
            type: 'gallery',
            columns: 2,
            images: [
              { src: senior6, alt: 'Senior design screen 4' },
              { src: senior7, alt: 'Senior design screen 5' },
              { src: senior8, alt: 'Senior design screen 6' },
              { src: senior9, alt: 'Senior design screen 7' },
            ],
          },
        ],
      },
    ],
  },
];

export default projects;