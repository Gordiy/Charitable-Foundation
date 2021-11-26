import './App.css';
import SiteHeader from './components/header'

function App() {
  let info = {
    contacts: [
		{
			url: "https://www.facebook.com/groups/626423081826328/?ref=share",
			text: "Слідкуйте за нами Facebook"
		}, 
		{
			url: "https://www.instagram.com/plich_o_plich/",
			text: "Вподобайте Instagram"
		}, 
		{
			url: "gord.rushynes@gmail.com",
			text: "Пишіть на Email"
		}
	],
    about: "Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information."
  }
  return <SiteHeader about={info.about} contacts={info.contacts}/>
}

export default App;