import Items from "./Items"

function Home({prop, propTwo, propFunc}){
    return (
        <div>
            <h2>Welcome to flatroad</h2>
            <Items prop={prop} propTwo={propTwo} propFunc={propFunc}/>
        </div>
    )
}

export default Home