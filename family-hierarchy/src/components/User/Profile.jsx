

export default function Profile() {
        const user = {
    name: "Shrikant Kushwaha",
    email: "shrikant@example.com",
    avatar: "https://static.vecteezy.com/system/resources/previews/033/129/417/non_2x/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg" 
      };// test ke liye placeholder image
  return (
    <>
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      <img 
        src={user.avatar} 
        alt="User Avatar" 
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button 
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Edit Profile
      </button>
    </div>
    </>
  )
}
