import { useState } from 'react'
import './App.css'
import { FrontPage } from './Pages/FrontPage/FrontPage'
import { HardSkillPage } from './Pages/HardSkillPage/HardSkillPage'

function App() {

  const images = {
      bk: "https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_1280.jpg",
  };

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      {/* <FrontPage images={images} /> */}
      <HardSkillPage images={images} />
    </div>
  )
}

export default App
