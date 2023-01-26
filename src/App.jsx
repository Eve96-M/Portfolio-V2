import { useState } from 'react'

import './App.css'
import Display from './components/Display/Display'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import About from './components/About/About'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
function App() {
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState(false)
  const [language, setLanguage] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <div className={theme ? 'NavBar-Container-dark' : 'NavBar-Container'}>
          <div className='Logo-container'>
            <img src="/PF.svg" alt="logo" className={theme ? 'Dark-filter-image' : 'Light-filter-image'}/><h3>{language ? "Portfolio" : "Portafolio"}</h3>
          </div>
          <ul className={menu ? 'Nav-elements' : 'Nav-elements hide'}>
            <Link to='#Projects' smooth className='Links' onClick={() => setMenu(false)}>{language ? "Projects" : "Proyectos"}</Link>
            <Link to='#Technologies' smooth className='Links' onClick={() => setMenu(false)}>{language ? "Technologies" : "Tecnologias"}</Link>
            <Link to='#About' smooth className='Links' onClick={() => setMenu(false)}>{language ? "About me" : "Acerca de mi"}</Link>
          </ul>
          <ul className='Social-elements'>
            <a href='https://github.com/Eve96-M' target="_blank" className= 'Social-elements-link' ><li><img src="/Github.svg" alt="Github" className={theme ? 'Dark-filter-image' : 'Light-filter-image'}/></li></a>
            <a href='https://www.linkedin.com/in/evemed/' target="_blank" className='Social-elements-link' ><li><img src="/Linkedin.svg" alt="LinkedIn" className={theme ? 'Dark-filter-image' : 'Light-filter-image'} /></li></a>
            <a href='https://mail.google.com/mail/?view=cm&source=mailto&to=evemele45@gmail.com' target="_blank" className='Social-elements-link' ><li><img src="/Mail.svg" alt="Gmail" className={theme ? 'Dark-filter-image' : 'Light-filter-image'} /></li></a>
          </ul>
        </div>
        <Display language={language} theme={theme} />
        <Projects language={language} theme={theme}/>
        <Technologies language={language} theme={theme}/>
        <About language={language} theme={theme}/>
      </div>
      <div className='Menu-switch'>
        <button className='Mobile-button' onClick={() => setMenu(!menu)}><img src="/Menu.png" alt="Menu" className='Mobile-button-image'/></button> 
        <button onClick={() => setLanguage(!language)} className='Language-button'><img src={language ? "/Spain.png" : "/Usa.png"} alt="Flags" className='Flags' /></button>
        <button className='Theme-button' onClick={() => setTheme(!theme)}><img src="/DN.png" alt="Menu" className='Theme-button-image'/></button> 

      </div>
    </BrowserRouter>
  )
}

export default App
