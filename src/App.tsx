import './App.css'
import { Contact } from './components/contact/Contact'
import { Nav } from './components/nav/Nav'

function App() {

  return (
    <>
      <Nav />
      <main>
        Header/Services
      </main>
      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1258.8448910549985!2d-45.93925233060304!3d-23.2837127918973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcadee358c46f%3A0x796611ce3e87f383!2sPadaria%20arco%20iris!5e0!3m2!1spt-BR!2sbr!4v1736809091875!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
      </section>
      <Contact />
    </>
  )
}

export default App
