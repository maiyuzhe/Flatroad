function Wallet({prop}){
    return (
        <div className="m-10 flex-none object-center item-center">
            <h2>{prop[0].username}</h2>
            <p>{prop[0].wallet} XMR = </p>
        </div>
    )
}

export default Wallet