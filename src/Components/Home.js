import Items from "./Items"

function Home({prop, propTwo, propThree, propFunc}){
    return (
        <div>
            <h2>Welcome to flatroad, {propThree}</h2>
            <Items prop={prop} propTwo={propTwo} propFunc={propFunc}/>
        </div>
    )
}

export default Home