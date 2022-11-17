import "./register.scss"

function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">

            <div className="loginLeft">
                <h3 className="logo">IvoireCOde</h3>
                <span className="logindesc">connectes toi avec tous tes <strong>freresSang</strong>  partout Ici a baby</span>
            </div>
            <div className="loginRight">
                <form action="" className='loginBox'>
                    <input type="text" placeholder="username" className="loginInput" />
                    <input type="email" placeholder="email" 
                    className="loginInput" />
                    <input type="password" placeholder="confirm" className="loginInput" />
                    <input type="password" placeholder="password" 
                    className="loginInput" />
                    
                    
                    <button className="registerbButton">
                        create
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login