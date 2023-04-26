import Items from "./Items"

function Page2({prop, propTwo}){
    return (
        <div>
            <h2>Orders</h2>
            <Items prop={prop} propTwo={propTwo}/>
        </div>
    )
}

export default Page2