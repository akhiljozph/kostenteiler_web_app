import { headingOneTitle, loginBoxWrapper, loginContainer } from "./LoginCSS";

function Login() {

    return (
        <div style={loginContainer}>
            <div style={loginBoxWrapper}>
                <h1 style={headingOneTitle}>login</h1>
                <div>
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;