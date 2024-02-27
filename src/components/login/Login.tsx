import { headingOneTitle, loginBoxWrapper, loginContainer, loginLabel } from "./LoginCSS";

function Login() {

    return (
        <div style={loginContainer}>
            <div style={loginBoxWrapper}>
                <h1 style={headingOneTitle}>login</h1>
                <div>
                    <label style={loginLabel}>username</label>
                    <input type="text" />
                </div>
                <div>
                    <label style={loginLabel}>password</label>
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