import { headingOneTitle, loginBoxWrapper, loginContainer, loginLbl, loginBtn } from "./LoginCSS";

function Login() {

    return (
        <div style={loginContainer}>
            <div style={loginBoxWrapper}>
                <h1 style={headingOneTitle}>login</h1>
                <div>
                    <label style={loginLbl}>username</label>
                    <input type="text" />
                </div>
                <div>
                    <label style={loginLbl}>password</label>
                    <input type="password" />
                </div>
                <div>
                    <button style={loginBtn}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;