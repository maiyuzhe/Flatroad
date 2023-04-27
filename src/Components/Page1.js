function Page1({propFunc}){

    function handleSubmit(e){
        e.preventDefault()
        if(e.target.name.value !== ""){
            const newItem = {
                image: e.target.image.value,
                name: e.target.name.value,
                description: e.target.description.value,
                price: e.target.price.value,
                quantity: e.target.quantity.value
            }
            console.log(newItem)
            fetch('http://localhost:3001/marketplace', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newItem)
            })
            .then(res=>res.json())
            .then(data=> propFunc(data))
            e.target.reset()
        }
        else{}
    }

    return (
        <div className="m-5 p-10 bg-green-300 flex-row w-64 rounded-xl justify-center">
            <h2 className="">User Account</h2>
            <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-6">
                <input name="image" placeholder="Image"></input>
                <input name="name" placeholder="Name"></input>
                <input name="description" placeholder="Description"></input>
                <input name="price" placeholder="Price" type="number"></input>
                <input name="quantity" placeholder="Quantity" type="number"></input>
                <button className="bg-white">Submit Entry</button>
            </form>
        </div>
    )
}

export default Page1