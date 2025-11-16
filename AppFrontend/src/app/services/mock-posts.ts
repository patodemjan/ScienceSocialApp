export interface Post {
  id: string;
  content: string;
  type: 'chat' | 'media' | 'post';
  authorUsername: string;
  createdAt: string;
  link?: string;
}

export interface Topic {
  id: string;
  title: string;
  posts: Post[];
}

export interface Room {
  _id: string;
  name: string;
  imageUrl: string;
  description?: string;
  topics: Topic[];
}

export const MOCK_ROOMS: Room[] = [
  // 1. Sport
  {
    _id: '1',
    name: 'Sport',
    imageUrl: 'assets/sports.webp',
    description: 'Discuss sports and training',
    topics: [
      {
        id: 't1-1',
        title: 'Football',
        posts: [
          { id: 'p1-1', content: 'Welcome to football discussion!', type: 'chat', authorUsername: 'alice', createdAt: new Date().toISOString() },
          { id: 'p1-2', content: 'Check this match highlights', type: 'media', authorUsername: 'bob', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/xyz1' },
          { id: 'p1-3', content: 'Tips for training', type: 'post', authorUsername: 'charlie', createdAt: new Date().toISOString() },
          { id: 'p1-4', content: 'Player stats discussion', type: 'chat', authorUsername: 'dave', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't1-2',
        title: 'Basketball',
        posts: [
          { id: 'p1-5', content: 'Basketball rules explained', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() },
          { id: 'p1-6', content: 'Highlight reel', type: 'media', authorUsername: 'frank', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/xyz2' },
          { id: 'p1-7', content: 'Live game discussion', type: 'chat', authorUsername: 'alice', createdAt: new Date().toISOString() },
          { id: 'p1-8', content: 'Training tips', type: 'post', authorUsername: 'bob', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't1-3',
        title: 'Tennis',
        posts: [
          { id: 'p1-9', content: 'Grand Slam news', type: 'chat', authorUsername: 'charlie', createdAt: new Date().toISOString() },
          { id: 'p1-10', content: 'Technique video', type: 'media', authorUsername: 'dave', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/xyz3' },
          { id: 'p1-11', content: 'Player profiles', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() },
          { id: 'p1-12', content: 'Live match chat', type: 'chat', authorUsername: 'frank', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't1-4',
        title: 'Running',
        posts: [
          { id: 'p1-13', content: 'Marathon tips', type: 'post', authorUsername: 'alice', createdAt: new Date().toISOString() },
          { id: 'p1-14', content: 'Trail running video', type: 'media', authorUsername: 'bob', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/xyz4' },
          { id: 'p1-15', content: 'Discuss running shoes', type: 'chat', authorUsername: 'charlie', createdAt: new Date().toISOString() },
          { id: 'p1-16', content: 'Weekly schedule', type: 'post', authorUsername: 'dave', createdAt: new Date().toISOString() }
        ]
      }
    ]
  },

  // 2. Anatomy
  {
    _id: '2',
    name: 'Anatomy',
    imageUrl: 'assets/anatomy.webp',
    description: 'Learn about human anatomy',
    topics: [
      {
        id: 't2-1',
        title: 'Muscles',
        posts: [
          { id: 'p2-1', content: 'Basics of muscles', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() },
          { id: 'p2-2', content: 'Muscle movement video', type: 'media', authorUsername: 'mark', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/abc1' },
          { id: 'p2-3', content: 'Muscle groups discussion', type: 'chat', authorUsername: 'lucas', createdAt: new Date().toISOString() },
          { id: 'p2-4', content: 'Anatomy quiz post', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't2-2',
        title: 'Nervous System',
        posts: [
          { id: 'p2-5', content: 'Neuron structure', type: 'post', authorUsername: 'mark', createdAt: new Date().toISOString() },
          { id: 'p2-6', content: 'Brain video', type: 'media', authorUsername: 'lucas', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/abc2' },
          { id: 'p2-7', content: 'Discussion on nerves', type: 'chat', authorUsername: 'emma', createdAt: new Date().toISOString() },
          { id: 'p2-8', content: 'Nervous system post', type: 'post', authorUsername: 'mark', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't2-3',
        title: 'Skelet',
        posts: [
          { id: 'p2-9', content: 'Skeletal overview', type: 'post', authorUsername: 'lucas', createdAt: new Date().toISOString() },
          { id: 'p2-10', content: 'Bones video', type: 'media', authorUsername: 'emma', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/abc3' },
          { id: 'p2-11', content: 'Bone health chat', type: 'chat', authorUsername: 'mark', createdAt: new Date().toISOString() },
          { id: 'p2-12', content: 'Skelet post', type: 'post', authorUsername: 'lucas', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't2-4',
        title: 'Organs',
        posts: [
          { id: 'p2-13', content: 'Heart anatomy', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() },
          { id: 'p2-14', content: 'Lungs video', type: 'media', authorUsername: 'mark', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/abc4' },
          { id: 'p2-15', content: 'Organ functions chat', type: 'chat', authorUsername: 'lucas', createdAt: new Date().toISOString() },
          { id: 'p2-16', content: 'Organ post', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() }
        ]
      }
    ]
  },

  // 3. Ecology
  {
    _id: '3',
    name: 'Ecology',
    imageUrl: 'assets/ecology.webp',
    description: 'Explore ecology and environment',
    topics: [
      {
        id: 't3-1',
        title: 'Forests',
        posts: [
          { id: 'p3-1', content: 'Forest conservation', type: 'chat', authorUsername: 'anna', createdAt: new Date().toISOString() },
          { id: 'p3-2', content: 'Forest ecosystem video', type: 'media', authorUsername: 'ben', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ec1' },
          { id: 'p3-3', content: 'Tree species', type: 'post', authorUsername: 'cara', createdAt: new Date().toISOString() },
          { id: 'p3-4', content: 'Forest chat', type: 'chat', authorUsername: 'dan', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't3-2',
        title: 'Oceans',
        posts: [
          { id: 'p3-5', content: 'Ocean pollution', type: 'post', authorUsername: 'ella', createdAt: new Date().toISOString() },
          { id: 'p3-6', content: 'Marine life video', type: 'media', authorUsername: 'frank', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ec2' },
          { id: 'p3-7', content: 'Discussion on fish species', type: 'chat', authorUsername: 'george', createdAt: new Date().toISOString() },
          { id: 'p3-8', content: 'Conservation tips', type: 'post', authorUsername: 'hannah', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't3-3',
        title: 'Climate Change',
        posts: [
          { id: 'p3-9', content: 'Global warming effects', type: 'chat', authorUsername: 'ian', createdAt: new Date().toISOString() },
          { id: 'p3-10', content: 'Climate video', type: 'media', authorUsername: 'jane', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ec3' },
          { id: 'p3-11', content: 'Carbon footprint post', type: 'post', authorUsername: 'kate', createdAt: new Date().toISOString() },
          { id: 'p3-12', content: 'Renewable energy chat', type: 'chat', authorUsername: 'leo', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't3-4',
        title: 'Pollution',
        posts: [
          { id: 'p3-13', content: 'Air pollution', type: 'post', authorUsername: 'mike', createdAt: new Date().toISOString() },
          { id: 'p3-14', content: 'Pollution video', type: 'media', authorUsername: 'nina', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ec4' },
          { id: 'p3-15', content: 'Local pollution chat', type: 'chat', authorUsername: 'oliver', createdAt: new Date().toISOString() },
          { id: 'p3-16', content: 'Reduce waste post', type: 'post', authorUsername: 'paula', createdAt: new Date().toISOString() }
        ]
      }
    ]
  },

  // 4. Physics
  {
    _id: '4',
    name: 'Physics',
    imageUrl: 'assets/physics.webp',
    description: 'Learn about physics and laws of nature',
    topics: [
      {
        id: 't4-1',
        title: 'Mechanics',
        posts: [
          { id: 'p4-1', content: 'Newton laws discussion', type: 'chat', authorUsername: 'adam', createdAt: new Date().toISOString() },
          { id: 'p4-2', content: 'Mechanics demo video', type: 'media', authorUsername: 'beth', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ph1' },
          { id: 'p4-3', content: 'Kinematics post', type: 'post', authorUsername: 'carl', createdAt: new Date().toISOString() },
          { id: 'p4-4', content: 'Forces chat', type: 'chat', authorUsername: 'dana', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't4-2',
        title: 'Thermodynamics',
        posts: [
          { id: 'p4-5', content: 'Heat transfer', type: 'post', authorUsername: 'ella', createdAt: new Date().toISOString() },
          { id: 'p4-6', content: 'Thermo video', type: 'media', authorUsername: 'frank', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ph2' },
          { id: 'p4-7', content: 'Energy discussion', type: 'chat', authorUsername: 'george', createdAt: new Date().toISOString() },
          { id: 'p4-8', content: 'Laws post', type: 'post', authorUsername: 'hannah', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't4-3',
        title: 'Optics',
        posts: [
          { id: 'p4-9', content: 'Light refraction', type: 'chat', authorUsername: 'ian', createdAt: new Date().toISOString() },
          { id: 'p4-10', content: 'Lens video', type: 'media', authorUsername: 'jane', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ph3' },
          { id: 'p4-11', content: 'Reflection post', type: 'post', authorUsername: 'kate', createdAt: new Date().toISOString() },
          { id: 'p4-12', content: 'Prism chat', type: 'chat', authorUsername: 'leo', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't4-4',
        title: 'Electromagnetism',
        posts: [
          { id: 'p4-13', content: 'Magnetic fields', type: 'post', authorUsername: 'mike', createdAt: new Date().toISOString() },
          { id: 'p4-14', content: 'Electro video', type: 'media', authorUsername: 'nina', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ph4' },
          { id: 'p4-15', content: 'Current chat', type: 'chat', authorUsername: 'oliver', createdAt: new Date().toISOString() },
          { id: 'p4-16', content: 'Voltage post', type: 'post', authorUsername: 'paula', createdAt: new Date().toISOString() }
        ]
      }
    ]
  },

  // 5. Computer Science
  {
    _id: '5',
    name: 'Computer Science',
    imageUrl: 'assets/computerscience.webp',
    description: 'Discuss algorithms, programming, AI',
    topics: [
      {
        id: 't5-1',
        title: 'Programming',
        posts: [
          { id: 'p5-1', content: 'JavaScript discussion', type: 'chat', authorUsername: 'alice', createdAt: new Date().toISOString() },
          { id: 'p5-2', content: 'Code video', type: 'media', authorUsername: 'bob', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/cs1' },
          { id: 'p5-3', content: 'Python post', type: 'post', authorUsername: 'charlie', createdAt: new Date().toISOString() },
          { id: 'p5-4', content: 'Algorithms chat', type: 'chat', authorUsername: 'dave', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't5-2',
        title: 'AI',
        posts: [
          { id: 'p5-5', content: 'Neural networks', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() },
          { id: 'p5-6', content: 'ML video', type: 'media', authorUsername: 'frank', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/cs2' },
          { id: 'p5-7', content: 'AI ethics chat', type: 'chat', authorUsername: 'alice', createdAt: new Date().toISOString() },
          { id: 'p5-8', content: 'Deep learning post', type: 'post', authorUsername: 'bob', createdAt: new Date().toISOString() }
        ]
      },
      {
        id: 't5-3',
        title: 'Cybersecurity',
        posts: [
          { id: 'p5-9', content: 'Network security chat', type: 'chat', authorUsername: 'charlie', createdAt: new Date().toISOString() },
          { id: 'p5-10', content: 'Encryption video', type: 'media', authorUsername: 'dave', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/cs3' },
          { id: 'p5-11', content: 'Firewall post', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() },
          { id: 'p5-12', content: 'Pen testing chat', type: 'chat', authorUsername: 'frank', createdAt: new Date().toISOString() }
        ]
      },
            {
        id: 't5-4',
        title: 'Data Science',
        posts: [
          { id: 'p5-13', content: 'Data cleaning techniques', type: 'post', authorUsername: 'george', createdAt: new Date().toISOString() },
          { id: 'p5-14', content: 'Statistics video', type: 'media', authorUsername: 'hannah', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/cs4' },
          { id: 'p5-15', content: 'Pandas vs NumPy chat', type: 'chat', authorUsername: 'ian', createdAt: new Date().toISOString() },
          { id: 'p5-16', content: 'Machine learning models', type: 'post', authorUsername: 'jane', createdAt: new Date().toISOString() }
        ]
      }
    ]
  },

  
 // 6. History
{
  _id: '6',
  name: 'History',
  imageUrl: 'assets/chemistry.webp',
  description: 'Explore ancient civilizations, world wars and historical events',
  topics: [
    {
      id: 't6-1',
      title: 'Ancient Civilizations',
      posts: [
        { id: 'p6-1', content: 'Overview of ancient Egypt', type: 'post', authorUsername: 'anna', createdAt: new Date().toISOString() },
        { id: 'p6-2', content: 'Pyramids documentary', type: 'media', authorUsername: 'ben', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ch1' },
        { id: 'p6-3', content: 'Discussion about Mesopotamia', type: 'chat', authorUsername: 'cara', createdAt: new Date().toISOString() },
        { id: 'p6-4', content: 'Greek philosophy introduction', type: 'post', authorUsername: 'dan', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't6-2',
      title: 'Middle Ages',
      posts: [
        { id: 'p6-5', content: 'Feudalism basics', type: 'post', authorUsername: 'ella', createdAt: new Date().toISOString() },
        { id: 'p6-6', content: 'Castles documentary', type: 'media', authorUsername: 'frank', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ch2' },
        { id: 'p6-7', content: 'Knights and crusades chat', type: 'chat', authorUsername: 'george', createdAt: new Date().toISOString() },
        { id: 'p6-8', content: 'Black death impact', type: 'post', authorUsername: 'hannah', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't6-3',
      title: 'Modern History',
      posts: [
        { id: 'p6-9', content: 'Industrial revolution overview', type: 'chat', authorUsername: 'ian', createdAt: new Date().toISOString() },
        { id: 'p6-10', content: 'WW2 documentary', type: 'media', authorUsername: 'jane', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ch3' },
        { id: 'p6-11', content: 'Cold War timeline', type: 'post', authorUsername: 'kate', createdAt: new Date().toISOString() },
        { id: 'p6-12', content: '20th century events discussion', type: 'chat', authorUsername: 'leo', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't6-4',
      title: 'Historical Research',
      posts: [
        { id: 'p6-13', content: 'How historians use sources', type: 'post', authorUsername: 'mike', createdAt: new Date().toISOString() },
        { id: 'p6-14', content: 'Archaeology video', type: 'media', authorUsername: 'nina', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/ch4' },
        { id: 'p6-15', content: 'Artifact analysis chat', type: 'chat', authorUsername: 'oliver', createdAt: new Date().toISOString() },
        { id: 'p6-16', content: 'Historiography introduction', type: 'post', authorUsername: 'paula', createdAt: new Date().toISOString() }
      ]
    }
  ]
},

{
  _id: '7',
  name: 'Astronomy',
  imageUrl: 'assets/math.webp',
  description: 'Explore planets, stars, galaxies and the universe',
  topics: [
    {
      id: 't7-1',
      title: 'Planets & Solar System',
      posts: [
        { id: 'p7-1', content: 'Introduction to the solar system', type: 'post', authorUsername: 'adam', createdAt: new Date().toISOString() },
        { id: 'p7-2', content: 'Planets documentary', type: 'media', authorUsername: 'beth', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/m1' },
        { id: 'p7-3', content: 'Atmospheres discussion', type: 'chat', authorUsername: 'carl', createdAt: new Date().toISOString() },
        { id: 'p7-4', content: 'Moons of Jupiter', type: 'post', authorUsername: 'dana', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't7-2',
      title: 'Stars & Nebulae',
      posts: [
        { id: 'p7-5', content: 'Star lifecycle basics', type: 'post', authorUsername: 'ella', createdAt: new Date().toISOString() },
        { id: 'p7-6', content: 'Nebula formations video', type: 'media', authorUsername: 'frank', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/m2' },
        { id: 'p7-7', content: 'Supernova chat', type: 'chat', authorUsername: 'george', createdAt: new Date().toISOString() },
        { id: 'p7-8', content: 'Types of stars overview', type: 'post', authorUsername: 'hannah', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't7-3',
      title: 'Galaxies',
      posts: [
        { id: 'p7-9', content: 'Milky Way structure', type: 'chat', authorUsername: 'ian', createdAt: new Date().toISOString() },
        { id: 'p7-10', content: 'Galaxy collisions documentary', type: 'media', authorUsername: 'jane', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/m3' },
        { id: 'p7-11', content: 'Dark matter basics', type: 'post', authorUsername: 'kate', createdAt: new Date().toISOString() },
        { id: 'p7-12', content: 'Types of galaxies chat', type: 'chat', authorUsername: 'leo', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't7-4',
      title: 'Cosmology',
      posts: [
        { id: 'p7-13', content: 'Big Bang theory introduction', type: 'post', authorUsername: 'mike', createdAt: new Date().toISOString() },
        { id: 'p7-14', content: 'Expansion of the universe video', type: 'media', authorUsername: 'nina', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/m4' },
        { id: 'p7-15', content: 'Cosmic background chat', type: 'chat', authorUsername: 'oliver', createdAt: new Date().toISOString() },
        { id: 'p7-16', content: 'Space-time discussion', type: 'post', authorUsername: 'paula', createdAt: new Date().toISOString() }
      ]
    }
  ]
},

// 8. Chemistry
{
  _id: '8',
  name: 'Chemistry',
  imageUrl: 'assets/psychology.webp',
  description: 'Explore the human mind, cognition and behavior',
  topics: [
    {
      id: 't8-1',
      title: 'Cognitive Psychology',
      posts: [
        { id: 'p8-1', content: 'Attention and memory', type: 'post', authorUsername: 'anna', createdAt: new Date().toISOString() },
        { id: 'p8-2', content: 'Cognition video', type: 'media', authorUsername: 'bob', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/p1' },
        { id: 'p8-3', content: 'Problem solving chat', type: 'chat', authorUsername: 'cara', createdAt: new Date().toISOString() },
        { id: 'p8-4', content: 'Cognitive bias post', type: 'post', authorUsername: 'dan', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't8-2',
      title: 'Social Psychology',
      posts: [
        { id: 'p8-5', content: 'Group behavior', type: 'post', authorUsername: 'ella', createdAt: new Date().toISOString() },
        { id: 'p8-6', content: 'Conformity video', type: 'media', authorUsername: 'frank', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/p2' },
        { id: 'p8-7', content: 'Social influence chat', type: 'chat', authorUsername: 'george', createdAt: new Date().toISOString() },
        { id: 'p8-8', content: 'Group dynamics post', type: 'post', authorUsername: 'hannah', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't8-3',
      title: 'Developmental Psychology',
      posts: [
        { id: 'p8-9', content: 'Human development stages', type: 'chat', authorUsername: 'ian', createdAt: new Date().toISOString() },
        { id: 'p8-10', content: 'Child learning video', type: 'media', authorUsername: 'jane', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/p3' },
        { id: 'p8-11', content: 'Cognitive growth post', type: 'post', authorUsername: 'kate', createdAt: new Date().toISOString() },
        { id: 'p8-12', content: 'Emotional development chat', type: 'chat', authorUsername: 'leo', createdAt: new Date().toISOString() }
      ]
    },
    {
      id: 't8-4',
      title: 'Clinical Psychology',
      posts: [
        { id: 'p8-13', content: 'Mental health basics', type: 'post', authorUsername: 'mike', createdAt: new Date().toISOString() },
        { id: 'p8-14', content: 'Therapy techniques video', type: 'media', authorUsername: 'nina', createdAt: new Date().toISOString(), link: 'https://www.youtube.com/embed/p4' },
        { id: 'p8-15', content: 'Coping strategies chat', type: 'chat', authorUsername: 'oliver', createdAt: new Date().toISOString() },
        { id: 'p8-16', content: 'Stress management post', type: 'post', authorUsername: 'paula', createdAt: new Date().toISOString() }
      ]
    }
  ]
}


];

