import { useState } from "react"

function Wallet({prop}){

    const [funds, setFunds] = useState(prop[1])

    function handleAddFunds(e){
        e.preventDefault()
        setFunds(e.target.funds.value)
        e.target.reset()
    }

    return (
        <div>
            <div className="m-5 p-10 bg-green-300 flex-row w-64 rounded-xl justify-center">
                <h2>{prop[0]}</h2>
                <p>{funds} XMR = </p>
            </div>
            <div className="m-5 p-10 bg-green-300 flex-row w-64 rounded-xl justify-center">
                <h2>Add Funds</h2>
                <form onSubmit={handleAddFunds}>
                    <input name="funds" type="number" placeholder="Add Funds"></input>
                </form>
            </div>
        </div>
    )
}

export default Wallet