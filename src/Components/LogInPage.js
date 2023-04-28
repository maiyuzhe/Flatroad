import { Link } from "react-router-dom"

function LogInPage({propFunc, propFuncTwo}){

    function handleForm(e){
        const loginInfo = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        e.preventDefault()
        propFunc(loginInfo)
        e.target.reset()
    }

    return (
        <div className="flex justify-center ">
            <div className="m-5 p-10 bg-green-300 flex-row w-64 rounded-xl justify-center">
                <div>
                    <form onSubmit={handleForm}>
                        <label>Username</label>
                        <input name="username"></input>
                        <label>Password</label>
                        <input type="password" name="password"></input>
                        <button>Sign In</button>
                    </form>
                    <Link to="/signup" onClick={() => propFuncTwo()}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default LogInPage