

const Login = () => {
  return (
    <>
   <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <input type="checkbox"/>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
    </>
  )
}

export default Login
