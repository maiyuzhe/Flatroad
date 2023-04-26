function Items({prop, propTwo}){

    return (
        <div className="m-10 inline-flex object-center item-start">
            {prop.map(datum => {
                return (
                    <div key={datum.name} className='m-5 p-10 bg-green-300 flex-1 w-64 hover:bg-red-300 rounded-xl'>
                        <img src={datum.image} alt={datum.name} className="w-32 h-32"/>
                        <h3 className="font-bold">{datum.name}</h3>
                        <p>{datum.description}</p>
                        <p className="font-bold">$ {datum.price}</p>
                        <p className="font-bold">{(datum.price/propTwo[0].price).toFixed(4)} XMR</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Items