import 'bulma/css/bulma.min.css' // css lib
import './style.css'

// pages
import MainPage from './pages/main-page/mainpage'

const app = document.querySelector('#app')
const mainPage = new MainPage()
app.innerHTML = mainPage.render()
