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
        }
    ]);

    const [currentPerson ,setCurrentPerson] = useState(0);


function handelSwipe()
{
    setCurrentPerson = currentPerson + 1;
}

    
    return (
        <div className="cards">

            <div className="actualCards">

                <TinderCard onSwipe={handelSwipe}>


                <h3>Name- {people[currentPerson].name}</h3>
                <img className="personPhoto" src={people[currentPerson].url}/>

                </TinderCard>
            </div>

        </div>
    )
}

export default Cards
