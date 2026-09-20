// Featherborn
import featherborn1 from '../images/Featherborn/featherborn1.png';
import featherborn2 from '../images/Featherborn/featherborn2.png';
import featherborn3 from '../images/Featherborn/featherborn3.png';

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
import dungeon1 from '../images/Dungeon/dungeon1.webp';
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
import senior8 from '../images/SeniorDesign/senior8.png';
import senior9 from '../images/SeniorDesign/senior9.png';

// Bug Gladiator
import gladiator1 from '../images/Bug_Gladiator/gladiator1.png';
import gladiator2 from '../images/Bug_Gladiator/gladiator2.png';
import gladiator3 from '../images/Bug_Gladiator/gladiator3.png';

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
        links: [{ label: 'Steam Demo', url: 'https://store.steampowered.com/app/3082940/Featherborn/' },
          { label: 'Pitch Deck', url: 'https://impress.games/press-kit/boku-studios/featherborn' },
          {label: 'Kickstarter', url: 'https://www.kickstarter.com/projects/featherborn/featherborn-a-2d-isometric-openworld-game'},
          {label: 'GDD', url: 'https://docs.google.com/document/d/1z4WgnZqFgJuGBmLDFSqjFXH8HN6bEt9mVZFjGLOpYys/edit?usp=sharing'}],
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
    title: 'Stomper',
    category: 'Game Dev',
    pages: [
      {
        type: 'overview',
        role: 'Solo Developer',
        description: 'An early career game project built with Construct 3. The game was a simple platformer where the player had to stomp on enemies to defeat them.',
        tech: ['Construct 3'],
        image: stomper1,
        links: [{label: 'Stomper on Scirra Arcade', url:'https://www.construct.net/en/free-online-games/stomper-33634/play'}],
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
              caption: 'Stomp ability defeating an enemy',
            },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'dungeon',
    title: 'The Lost Dungeon',
    category: 'Game Dev',
    pages: [
      {
        type: 'overview',
        role: 'Solo Developer',
        description: 'Lost Dungeon was the first "real" game I made in highschool. It started as a game jam entry, and then evolved into a full game. It was built with Construct3 and Aesprite',
        tech: ['Construct3','Aesprite'],
        image: dungeon2,
        links: [{label:'The Lost Dungeon - Scirra Arcade', url:'https://www.construct.net/en/free-online-games/lost-dungeon-38261/play'}],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'The Lost Dungeon' }, // TODO
          {
            type: 'column',
            children: [
            {
              type: 'image',
              src: dungeon1,
              alt: 'Stomper boss fight',
              caption: 'Evil Eye Boss',
            },
            {
              type: 'image',
              src: dungeon4,
              alt: 'Stomper boss fight',
              caption: 'Level Design',
            },
            {
              type: 'image',
              src: dungeon3,
              alt: 'Stomper boss fight',
              caption: 'Cutscene Artwork',
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
              { type: 'image', src: multiplayer4, alt: 'Feature 2' },
              
            ],
          },
        ],
      },
      
      {
        type: 'split',
        heading: 'Multiplayer Class Project', // TODO
        paragraphs: ['Achievements and stats were tracked through an SQL database'],
        image: multiplayer5,
        imageAlt: 'Server architecture diagram',
      },
    ],
  },
  

  // ---------- WEB DEV ----------
  {
    id: 'senior-design',
    title: 'Senior Design Project',
    category: 'Web Dev',
    pages: [
      {
        type: 'overview',
        role: 'Frontend, UI/UX Developer',
        description: 'My senior design had me form a team and build a web app for a real client. The web app was a dashboard for a class so that all the information about the teams could be viewed and edited on one cohesive platform',
        tech: ['React','Typescript','Electron','SQL'],
        image: senior1,
        links: [],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Senior Design Project' },
          {
            type: 'column',
            children: [
              { type: 'text', text: 'Color Themes'},
              { type: 'image', src: senior2, alt: 'Senior design screen 2' },
              { type: 'image', src: senior3, alt: 'Senior design screen 3' },
            ],
          },
        ],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Senior Design Project' },
          {
            type: 'column',
            children: [
              { type: 'text', text: 'Team Analysis Screens'},
              { type: 'image', src: senior5, alt: 'Senior design screen 5' },
              { type: 'image', src: senior6, alt: 'Senior design screen 6' },
              { type: 'image', src: senior7, alt: 'Senior design screen 7' },
            ],
          },
        ],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Senior Design Project' },
          { type: 'text', text: 'Mobile View'},
          {
            type: 'gallery',
            columns: 2,
            images: [
              { src: senior8, alt: 'Senior design screen 6' },
              { src: senior9, alt: 'Senior design screen 7' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gifts-of-hope',
    title: 'Gifts of Hope',
    category: 'Web Dev',
    pages: [
      {
        type: 'overview',
        role: 'Solo Developer',
        description: 'A website I built for the Gifts of Hope nonprofit LLC with Google Sites',
        tech: ['Google Sites'],
        image: giftsOfHope1,
        links: [{label: 'Gifts of Hope Website', url:'https://www.giftsofhopeiowa.org/home'}],
      },
      {
        type: 'split',
        heading: 'Gifts of Hope',
        paragraphs: ['Live service website built with the founders feedback'],
        image: giftsOfHope2,
        imageAlt: 'Gifts of Hope screen',
      },
    ],
  },
  {
    id: 'survey',
    title: 'Video Game Personality Test',
    category: 'Web Dev',
    pages: [
      {
        type: 'overview',
        role: 'Frontend Developer',
        description: "A personality test that recommends video games based on the user's answers, built with HTML, CSS, and JavaScript, with mySQL Database integration. My first full stack program from class",
        tech: ['HTML', 'CSS', 'JavaScript', 'mySQL'],
        image: survey1,
        links: [],
      },
      {
        type: 'custom',
        blocks: [
          { type: 'heading', text: 'Video Game Personality Test' },
          {
            type: 'column',
            children: [
              { type: 'text', text: 'Survey Screens' },
              { type: 'image', src: survey2, alt: 'Survey question screen' },
              { type: 'image', src: survey3, alt: 'Survey question screen' },
              { type: 'image', src: survey4, alt: 'Survey question screen' },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   id: 'bug-gladiator',
  //   title: 'Bug Gladiator Card Game',
  //   category: 'Product Design',
  //   pages: [
  //     {
  //       type: 'overview',
  //       role: 'Solo Developer',
  //       description: "A card battler game that I developed for a class",
  //       tech: ['Dextrous'],
  //       image: gladiator1,
  //       links: [{label:'Rulesheet', url:'https://docs.google.com/document/d/1_b8jVcpokbVyF9HljSbf1HGmvLDl24Lwb4v0XlcAIXw/edit?tab=t.0#heading=h.fzfvv1lq517x'},
  //         {label:'Sellsheet',url:'https://docs.google.com/document/d/1_b8jVcpokbVyF9HljSbf1HGmvLDl24Lwb4v0XlcAIXw/edit?tab=t.lc84w4mfla6j'}],
  //     },
  //     {
  //       type: 'custom',
  //       blocks: [
  //         { type: 'heading', text: 'Bug Gladiator Card Game' },
  //         { type: 'text', text: 'Different Card Types'},
  //         {
  //           type: 'row',
  //           children: [
  //             { type: 'image', src: gladiator2, alt: 'Survey question screen' },
  //             { type: 'image', src: gladiator3, alt: 'Survey question screen' },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  
];

export default projects;