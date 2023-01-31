import { useState } from 'react';
import './global.css';
import { Post } from './Post'
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Post 
        author="Ilgner Silva"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates vel molestiae consectetur quam cupiditate recusandae illo veniam saepe maiores, nemo tempore! Nam suscipit maxime voluptates earum, quidem quia reiciendis harum!"
        />
    </>
  )
}
export default App
