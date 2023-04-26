import { Link } from "react-router-dom"

function SignUp({propFuncTwo}){

    function handleForm(e){
        e.preventDefault()
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
        })
        e.target.reset()
    }

    return (
    <div>
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
    )
}

export default SignUp