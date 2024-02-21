function Login() {

    const flexAlignCenter = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    }

    const loginContainer = {
        ...flexAlignCenter,
        'backgroundColor': '#eae9e9',
        'height': '100vh',
        'width': '100vw',
    }

    const loginBoxWrapper = {
        'height': '44rem',
        'width': '29rem',
        'backgroundColor': '#ffffff',
        'border': 'solid 0.036rem #000',
        'border-radius': '1rem',
    }
    return (
        <div style={loginContainer}>
            <div style={loginBoxWrapper}>

            </div>
        </div>
    )
}

export default Login;