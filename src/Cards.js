import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import "./Cards.css"
function Cards() {

    const [people,setPeople]= useState([
        {
            name:"KAKU BHIYA",
            url:"https://www.thepassivevoice.com/wp-content/uploads/2020/05/a1-6.jpg",
            age:"24",
            gender:"M"
        },
        {
            name:"Kanuu Behen",
            url:"https://miro.medium.com/max/1000/1*fNLMb7DHUQfn18w8YvyLQA.png",
            age:"21",
            gender:"F"
        },{
            name:"jeva Laal",
            url:"https://www.thepassivevoice.com/wp-content/uploads/2020/05/a1-6.jpg",
            age:"24",
            gender:"M"
        },
        {
            name:"Tanu didi",
            url:"https://miro.medium.com/max/1000/1*fNLMb7DHUQfn18w8YvyLQA.png",
            age:"21",
            gender:"F"
        }
    ]);


    
    return (
        <div className="cards">


            <div className="cards__container">
                { people.map((persons,key) => (
                    <TinderCard 
                    className="cards__swipe" 
                    preventSwipe={['up','down']}
                    key={key}
                    // onSwipe={()=> setCurrentPerson( currentPerson + 1 )}
                    
                    >


                    <div className="cards__content" style={{backgroundImage:`url(${persons.url})`}}>
                    <h3>Name- {persons.name} </h3>
                    </div>
                    </TinderCard>
                ))}
                
            </div>

        </div>
    )
}

export default Cards
