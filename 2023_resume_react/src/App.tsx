import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Introduction from './components/Introduction';
import Socials from './components/Socials';
import Resume from './components/Resume';
import resume from './src/images/Resume_JuliaLoman_2023.pdf'

function App() {
  return (

    <>
    <div> <Introduction></Introduction> </div>
    <div> <Socials></Socials> </div>
    <div> <Resume></Resume></div>
    </>
    );
}

export default App;