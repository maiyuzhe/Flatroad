import { Link } from "react-router-dom"

function SignUp({propFuncTwo}){

    function handleForm(e){
        e.preventDefault()
        if(e.target.username.value !=="" && e.target.password.value !== "" && e.target.email.value !== ""){
            const newUser = {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            }

            fetch('http://localhost:3001/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }).then(res=>res.json())
            .then(data=> propFuncTwo(data))
            e.target.reset()
        }
        else{alert("You are missing a necessary field")}
    }

    return (
        <div className="flex justify-center ">
            <div className="m-5 p-10 bg-green-300 flex-row w-64 rounded-xl justify-center">
                <form onSubmit={handleForm}>
                    <label>Email</label>
                    <input name="email" type="email"></input>
                    <label>Username</label>
                    <input name="username" type="text"></input>
                    <label>Password</label>
                    <input name="password" type="password"></input>
                    <button>Create Account</button>
                </form>
                <Link to="/" onClick={() => propFuncTwo()}>Login</Link>
            </div>
        </div>
    )
}

export default SignUp