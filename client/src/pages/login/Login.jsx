import "./login.scss"

function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">

            <div className="loginLeft">
                <h3 className="logo">IvoireCOde</h3>
                <span className="logindesc">connect toi avec tous tes freres partout Ici a baby</span>
            </div>
            <div className="loginRight">
                <form action="" className='loginBox'>
                    <input type="email" placeholder="email" className="loginInput" />
                    <input type="password" placeholder="password" className="loginInput" />
                    <button className="loginButton">
                        connecter
                    </button>
                    <span className="loginText">mot de passe oublier</span>
                    <button className="registerbButton">
                        New Account 
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login