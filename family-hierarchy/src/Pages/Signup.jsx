
export default function Signup() {
  return (
    <>
      <div className="signup-container">
      <div className="signup-box">
        <h2>Signup to Your Account</h2>
        <form>
            <div className="form-group">
            <label>Name</label>
            <input
              type="Name"
              placeholder="Enter Your Full Name"
              required
            />
          </div>

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
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p className="signup-text">
         Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
    </>
  )
}
