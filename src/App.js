import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import SiteHeader from './components/header';
import Main from './components/main';

function App() {
  let headerInfo = {
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
  
  let mainInfo = {
	  carousel: {
		  active: {
			  photo: "static/photo/main-2.jpg",
			  title: "Зроби світ крашим.",
			  text: "Зроби свій внесок для благоустрою ШБГ Шаблезуб - заплати Гордію 100$"
		  },
		  items: [
			  {
				  photo: "static/photo/action2.jpg",
				  title: "Маленькими кроками до великої мети!",
				  text: "Ще у розпал карантину, наша команда ініціювала благодійний збір коштів на боротьбу з коронавірусом."
			  }
		  ]
	  }
  }
  return (
	  <Router>
		  <Routes>
			<Route exact path='/' element={
				<div>
					<SiteHeader about={headerInfo.about} contacts={headerInfo.contacts}/>
					<Main carousel={mainInfo.carousel}/>
				</div>
			} />
		  </Routes>
	  </Router>
  )
}

export default App;