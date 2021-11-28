import News from './news';
import React,{useState} from 'react';
import Modalwindow from './Modalwindow';
function MainContent(props) {
    console.log(props)
    const [mod,setmod] = useState(false)
    function toggleModal(){
        setmod(!mod)
        console.log(mod);
    }
   
    return (
        <main>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    {
                        props.carousel.items.map((value, index) => {
                            return (
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={index+1} aria-label="Slide"></button>
                            )
                        })
                    }
                </div>
                <div className="carousel-inner"  style={{zIndex:0}} >
                    <div className="carousel-item active" style={{backgroundImage: `url('${props.carousel.active.photo}'), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`}}>
                        <div className="container"  >
                            <div className="carousel-caption text-start" >
                                <h1>{props.carousel.active.title}</h1>
                                <p>{props.carousel.active.text}</p>
                                <p><a className="btn btn-lg btn-primary" href="#" onClick={()=>toggleModal() }  >Внесок</a></p>
                            </div>
                        </div>
                    </div>

                    {
                        props.carousel.items.map(value => {
                            return(
                                <div className="carousel-item">
                                    <div className="carousel-item active" style={{backgroundImage: `url('${value.photo}'), linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))`}}>
                                        <div className="container">
                                        <div className="carousel-caption">
                                            <h1>{value.title}!</h1>
                                            <p>{value.text}Ще у розпал карантину, наша команда ініціювала благодійний збір коштів на боротьбу з коронавірусом.</p>
                                            <p><a className="btn btn-lg btn-primary" href="#" onClick={()=>toggleModal()} >Внесок</a></p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <News />
            <Modalwindow mod ={mod} setmod={setmod}/>

   
        </main>
    )
}

export default MainContent;