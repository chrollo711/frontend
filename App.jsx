import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./HomePage.css";
import image from './bitcoinImg.webp'
import icon from './user (1).png'

const MainPage = ({user}) =>
  {
    const [showUserInfo, setShowUserinfo] = useState(false);

    return(
      <div className= "Body">
        <button className="iconButton" type="button" onClick= {() => setShowUserinfo(!showUserInfo)}><img className="icon main" src={icon} alt="icon"/></button>
          {showUserInfo && user && (
            <div className="user-info main">
              <p><strong>{user.name}</strong> </p>
              <p>{user.email}</p>
            </div>
          )}
          <div className="Inner_Page">
              <div className="Left-grid">
                  <div className="graph">
                  </div>
                  <div className="prediction">
                  </div>
              </div>
              <div className="Right-grid">
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
                  <button className="coin button"></button>
              </div>
          </div>
      </div>
    )
  }

const SignUp = ({setIsSignedup, setUser}) =>
  {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validate = () => {
      let newErrors = {};
  
      if (!formData.name.trim()) 
      {
        newErrors.name = "Name is required";
      }
      if (!formData.email.includes("@") || !formData.email.includes(".")) 
      {
        newErrors.email = "Invalid email";
      }
      if (formData.password.length < 6)
      {
        newErrors.password = "Password must be at least 6 characters long";
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) =>
    {
      e.preventDefault();

      if (validate())
      {
        console.log("Form Submitted:", formData);
        setMessage("SignUp successful!");
        setIsSignedup(true);
        setUser({name: formData.name, email: formData.email});
        navigate("/");
      }
      else
        setMessage("");
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const navigate = useNavigate();

    return (
      <div className="Body">
        <form onSubmit={handleSubmit}>
          <h2 className="heading">Sign Up</h2>
          <div className="container">
            {/* <div className="ask">
              <h4 className="line">Already have an account?</h4>
              <button className="login-btn" type="button"  onClick={() => navigate("login")}>Log In</button>
            </div> */}

            <input className="ip" type="text" name="name" placeholder="  Full Name" value={formData.name} onChange={handleChange} required />
            <input className="ip" type="email" name="email" placeholder="  Email" value={formData.email} onChange={handleChange} required />
            <input className="ip" type="password" name="password" placeholder="  Password" value={formData.password} onChange={handleChange} required />

            <div>{errors.name && <p style={{ color: "red", fontSize: '17px'}}>{errors.name}</p>}</div>
            <div>{errors.email && <p style={{ color: "red", fontSize: '17px'}}>{errors.email}</p>}</div>
            <div>{errors.password && <p style={{ color: "red", fontSize: '17px'}}>{errors.password}</p>}</div>

            <button className="btn button" type="submit">Sign Up</button>

            {message && <p style={{ color: "green", fontSize: '17px'}}>{message}</p>}

          </div>
        </form>
      </div>
    );
  };

const LogIn = ({setIsSignedup}) =>
  {
    const [formData, setFormData] = useState({ email: "", password: "" });
      const [message, setMessage] = useState("");
      const [errors, setErrors] = useState({});

      const validate = () => 
      {
        let newErrors = {};

        if (!formData.email.includes("@") || !formData.email.includes("."))
        {
          newErrors.email = "Invalid email format";
        }
        if (formData.password.length < 6)
        {
          newErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleSubmit = (e) =>
      {          
        e.preventDefault();
        if(validate())
        {
          console.log("Log in Data:", formData);
          setMessage("Log in successful!");
        }
        else
          setMessage("");
      };
  
      const handleChange = (e) => 
      {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="Body">
          <form onSubmit={handleSubmit}>
            <h2 className="heading">Log In</h2>
            <div className="container">

              <input className="ip" type="email" name="email" placeholder="  Email" value={formData.email} onChange={handleChange} required />
              <input className="ip" type="password" name="password" placeholder="  Password" value={formData.password} onChange={handleChange} required />

              <div>{errors.password && <p style={{ color: "red", fontSize: '17px' }}>{errors.password}</p>}</div>
              <div>{errors.email && <p style={{ color: "red", fontSize: '17px' }}>{errors.email}</p>}</div>

              <div className="ask">
                <button className="button" style={{ width: '160px', color: 'white', float: 'right', marginTop : '20px', marginLeft: '25px', marginRight: '10px', fontSize :'large', backgroundColor: '#4A45E6', height: '30px' }} type="button">Forgot password?</button>
                <button className="button" style={{ width: '150px', color: 'white', float: 'right', marginTop : '20px', marginLeft: '10px', marginRight: '25px', fontSize :'large', backgroundColor: '#4A45E6', height: '30px' }} type="submit">Log In</button>
              </div>

              {message && <p style={{ color: "green", fontSize: '17px' }}>{message}</p>}
            </div>
          </form>
        </div>
      );
  };

const Home = ({isSignedup, user}) =>
{
  const [showUserInfo, setShowUserinfo] = useState(false);
  const navigate = useNavigate();
    
  return (
    <div className="Body">
        <div className="first-line">
            <h1 className="cryptix">Cryptix</h1>
            <div className="right-grid">
              { 
              isSignedup?
              (<>
                <button className="iconButton" type="button" onClick= {() => setShowUserinfo(!showUserInfo)}><img className="icon" src={icon} alt="icon"/></button>
                {showUserInfo && user && (
                <div className="user-info">
                  <p><strong>{user.name}</strong> </p>
                  <p>{user.email}</p>
                </div>
              )}
                </>
              ):
              (
              <>
                <button className="login-button button" type="button" onClick={() => navigate("login")}>Log In</button>
                <button className="signup-button button" type="button" onClick={() => navigate("signup")}>Sign Up</button>
              </>
              )
              }
            </div>
        </div>

        <div className="down-grid">
          <div className="line2">
            <h1 className="statement" style={{marginBottom: '0px'}}>Welcome to Cryptix,</h1>
            <h1 className="statement" style={{marginTop: '0px'}}>reliable crypto predictions powered by machine learning.</h1>

            {
              isSignedup?(<>
              <button className="get-started button" type="button"  onClick={() => navigate("mainpage")}>Get started</button>
              </>):(
                <></>
              )
            }
          </div>
          <div>
            <img id="image" src={image} alt="image"/>
          </div>
        </div>
    </div>
  );
};

const App = () => 
{
  document.title = 'Cryptix';

  const [isSignedup, setIsSignedup] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home isSignedup={isSignedup} user={user} />} />
        <Route path="/signup" element={<SignUp setIsSignedup={setIsSignedup} setUser={setUser} />} />
        <Route path="/login" element={<LogIn setIsSignedup={setIsSignedup} />} />
        <Route path="/mainpage" element={<MainPage user={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
