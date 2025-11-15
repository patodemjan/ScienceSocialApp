export interface Post {
  id: number;
  content: string;
  type: 'chat' | 'media' | 'post';
  authorUsername: string;
  createdAt: string;
}

// Mock posts pre každú miestnosť
export const MOCK_POSTS: { [roomId: string]: Post[] } = {
  '1': [
    { id: 1, content: 'Welcome to Sport room!', type: 'chat', authorUsername: 'alice', createdAt: new Date().toISOString() },
    { id: 2, content: 'Sports video highlight', type: 'media', authorUsername: 'bob', createdAt: new Date().toISOString() },
    { id: 3, content: 'Training tips post', type: 'post', authorUsername: 'john', createdAt: new Date().toISOString() },
  ],
  '2': [
    { id: 4, content: 'Anatomy chat discussion', type: 'chat', authorUsername: 'emma', createdAt: new Date().toISOString() },
    { id: 5, content: 'Human skeleton media', type: 'media', authorUsername: 'mark', createdAt: new Date().toISOString() },
    { id: 6, content: 'Post about muscles', type: 'post', authorUsername: 'lucas', createdAt: new Date().toISOString() },
  ],
  '3': [
    { id: 7, content: 'Ecology chat', type: 'chat', authorUsername: 'sara', createdAt: new Date().toISOString() },
    { id: 8, content: 'Forest ecosystem media', type: 'media', authorUsername: 'anna', createdAt: new Date().toISOString() },
    { id: 9, content: 'Post about climate change', type: 'post', authorUsername: 'tom', createdAt: new Date().toISOString() },
  ],
  '4': [
    { id: 10, content: 'Physics chat', type: 'chat', authorUsername: 'peter', createdAt: new Date().toISOString() },
    { id: 11, content: 'Quantum mechanics media', type: 'media', authorUsername: 'lucy', createdAt: new Date().toISOString() },
    { id: 12, content: 'Post on Newton laws', type: 'post', authorUsername: 'anna', createdAt: new Date().toISOString() },
  ],
  '5': [
    { id: 13, content: 'Computer science chat', type: 'chat', authorUsername: 'mike', createdAt: new Date().toISOString() },
    { id: 14, content: 'Algorithm visualization', type: 'media', authorUsername: 'sara', createdAt: new Date().toISOString() },
    { id: 15, content: 'Post about AI', type: 'post', authorUsername: 'john', createdAt: new Date().toISOString() },
  ],
  '6': [
    { id: 16, content: 'History chat', type: 'chat', authorUsername: 'lucas', createdAt: new Date().toISOString() },
    { id: 17, content: 'Ancient civilization media', type: 'media', authorUsername: 'emma', createdAt: new Date().toISOString() },
    { id: 18, content: 'Post about World War II', type: 'post', authorUsername: 'bob', createdAt: new Date().toISOString() },
  ],
  '7': [
    { id: 19, content: 'Astronomy chat', type: 'chat', authorUsername: 'alice', createdAt: new Date().toISOString() },
    { id: 20, content: 'Galaxy photo media', type: 'media', authorUsername: 'tom', createdAt: new Date().toISOString() },
    { id: 21, content: 'Post about stars', type: 'post', authorUsername: 'lucy', createdAt: new Date().toISOString() },
  ],
  '8': [
    { id: 22, content: 'Chemistry chat', type: 'chat', authorUsername: 'mark', createdAt: new Date().toISOString() },
    { id: 23, content: 'Periodic table media', type: 'media', authorUsername: 'anna', createdAt: new Date().toISOString() },
    { id: 24, content: 'Post about reactions', type: 'post', authorUsername: 'emma', createdAt: new Date().toISOString() },
  ],
};
