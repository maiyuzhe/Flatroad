function Page1(){

    function handleSubmit(e){
        e.preventDefault()
        const newItem = {
            image: e.target.image.value,
            name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
        }
        console.log(newItem)
        fetch('http://localhost:3001/marketplace', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
    }

    return (
        <div>
            <h2>User Account</h2>
            <form onSubmit={handleSubmit}>
                <input name="image" placeholder="Image"></input>
                <input name="name" placeholder="Name"></input>
                <input name="description" placeholder="Description"></input>
                <input name="price" placeholder="Price"></input>
                <button>Submit Entry</button>
            </form>
        </div>
    )
}

export default Page1