import React,{useState} from 'react'
import NewConteiner from './NewContainer';

function News({props}) {
    const [togle,settogle] = useState(true)
    let names;
    let image="static/photo/action2.jpg"
    let mm =[  
        {
            photo:"static/photo/action2.jpg",
            text:` Ще у розпал карантину, наша команда ініціювала благодійний збір коштів на боротьбу з коронавірусом. Протягом місяця ми знаходили небайдужих людей, які підтримали б нашу ідею. Метою було купівля необхідного обладнання для Львівської обласної інфекційної лікарні.
            За цей час нам вдалось зібрати трохи більше 48 тис. грн від майже півтори сотні благодійників😯`
        }
    ] 

    if(togle) {
        names= 'Сховати'
    }
    else {
        names = 'Переглянути'
    }
    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">               
                        <NewConteiner props = {props} names={names} mm={mm[0]} togle={togle} settogle = {settogle} image={image} />    
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default News;