import Items from "./Items"

function Home({prop, propTwo}){
    return (
        <div>
            <h2>Welcome to flatroad</h2>
            <Items prop={prop} propTwo={propTwo}/>
        </div>
    )
}

export default Home