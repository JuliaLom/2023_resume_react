import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Introduction from './pages/IntroductionPage';
import Socials from './components/SocialsButtons';
import Resume from './components/Resume';

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