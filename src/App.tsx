
import { Header } from './components/Header.js';
import { Post, PostType } from './components/Post.js';
import { Sidebar } from './components/Sidebar.js';
import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gumiranha.png',
      name: 'Gustavo Yuri',
      role: ' studant at Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'https://www.linkedin.com/in/gustavo-cunha-168985273/' },
    ],
    publishedAt: new Date('2024-05-03 20:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: ' CTO @ Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'https://www.linkedin.com/school/rocketseat/posts/' },
    ],
    publishedAt: new Date('2024-05-10 20:00')
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
               post={post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
