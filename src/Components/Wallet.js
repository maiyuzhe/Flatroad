function Wallet({prop}){
    return (
        <div>
            <div className="m-5 p-10 bg-green-300 flex-row w-64 rounded-xl justify-center">
                <h2>{prop[0]}</h2>
                <p>{prop[1]} XMR = </p>
            </div>
            <div className="m-5 p-10 bg-green-300 flex-row w-64 rounded-xl justify-center">
                <h2>Add Funds</h2>
            </div>
        </div>
    )
}

export default Wallet