import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from './pages/IntroductionPage';
import Contact from './pages/ContactPage';
import Resume from './pages/ResumePage';
import Layout from './pages/Layout';

function App() {
  // return (

  //   <>
  //   <div> <Layout></Layout> </div>
  //   <div> <Introduction></Introduction> </div>
  //   <div> <Socials></Socials> </div>
  //   <div> <Resume></Resume></div>
  //   </>
  //   );

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Introduction />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resume" element={<Resume />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;