import { h1Title, loginBoxWrapper, loginContainer } from "./LoginCSS";

function Login() {

    return (
        <div style={loginContainer}>
            <div style={loginBoxWrapper}>
                <h1 style={h1Title}>login</h1>

            </div>
        </div>
    )
}

export default Login;