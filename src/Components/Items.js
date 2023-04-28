function Items({prop, propTwo, propFunc}){

    function handleBuy(arg1){
        if(arg1.quantity > 0){
            const newQuantity = arg1.quantity - 1

            fetch(`http://localhost:3001/marketplace/${arg1.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({quantity: newQuantity})
            })
            .then(res=> res.json())
            .then(data=> propFunc(data))
        }
        else{}
    }

    return (
        <div className="m-10 flex flex-wrap flex-row object-center">
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
                        <button onClick={()=>handleBuy(datum)}className="bg-blue-300 p-2 rounded-xl hover:bg-green-300">
                            {datum.quantity>0 ? "Buy": "Sold Out"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Items