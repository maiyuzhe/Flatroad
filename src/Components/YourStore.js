function YourStore({prop, propTwo}){

    function removeItem(arg1){

    }

    return (
        <div className="m-10 inline-flex object-center item-start">
            {prop.map(datum => {
                return (
                    <div key={datum.name} className='m-5 p-10 bg-green-300 flex-row w-64 hover:bg-red-300 rounded-xl justify-center'>
                        <img src={datum.image} alt={datum.name} className="w-32 h-32"/>
                        <h3 className="font-bold">{datum.name}</h3>
                        <p>{datum.description}</p>
                        <p className="font-bold">$ {datum.price}</p>
                        <p className="font-bold">{(datum.price/propTwo[0].price).toFixed(4)} XMR</p>
                        <p className="font-bold">Number for Sale: {datum.quantity}</p>
                        <p className="font-bold">Seller: {datum.seller}</p>
                        <button onClick={()=>removeItem(datum)}className="bg-blue-300 p-2 rounded-xl hover:bg-green-300">
                            {datum.quantity>0 ? "Remove Item": "Removed"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default YourStore