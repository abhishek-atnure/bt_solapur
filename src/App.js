import './App.css'
import ContactHeader from './header/contactHeader/ContactHeader'
import MainHeader from './header/mainHeader/MainHeader'
import Main from './main/Main'
import Footer from './footer/Footer'

function App() {
  return (
    <div className='App'>
      <ContactHeader />
      <MainHeader />
      <Main />
      <Footer />
    </div>
  )
}

export default App
