import "./App.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";


export default function App(){
return(
  <>
   <div className="head">
      <div className="head.1">
           <Link to="/" className="book">
            <img src={logo} />
          </Link>
      </div>


      <div className="head.2">
        <a>
          <Link to="/physics" className="headbtn">
            Physics
          </Link>
        </a>
        <a>
          <Link to="/chemistry" className="headbtn">
            Chemistry
          </Link>
        </a>
         <a>
          <Link to="/mathematics" className="headbtn">
            Mathematics
          </Link>
        </a>
         <a>
          <Link to="/login" className="headbtn">
            Login
          </Link>
        </a>
      </div>
   </div>


<section className="hero">

  <div className="hero-content">
    <span className="hero-label">
      YOUR STUDY COMPANION
    </span>

    <h1>
      Learn smarter.
      <br />
      <span>Achieve more.</span>
    </h1>

    <p>
      Everything you need to organize your studies,
      manage tasks, track your progress, and stay
      on top of your goals.
    </p>

    <Link to="/explore" className="hero-button">
      Explore Resources
      <span>→</span>
    </Link>
  </div>


<div className="hero-visual">

      <div className="hero-circle circle-one"></div>

      <div className="hero-circle circle-two"></div>

      <div className="hero-card">

        <img
          src={logo} className="book"
          alt="StudySpace"
        />

        <h3>Study smarter</h3>

        <p>Everything in one place.</p>

      </div>

    </div>
</section>







   <div className="body">
    <div className="container">
      <div className="book"><img src="https://th.bing.com/th/id/R.6a12c92fdda739b68e0b16529ce12e22?rik=XoHvjmXI0hnW%2fw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbook%2fbook_PNG51047.png&ehk=YeaUj4uVqLiDKvaiiAcMLj7Y%2fvsPqXMN1SpGpl9M5%2bI%3d&risl=&pid=ImgRaw&r=0"/></div>
      <h3>Study Resources</h3>
      <p>Click the button below to explore Physics, Chemistry, and Mathematics.</p>
      <a>
        <Link to="./explore" className="headbtn">
          Explore Resources:
        </Link>
      </a>   
    </div>
    <div className="container">
      <div className="book"><img src="https://static.vecteezy.com/system/resources/previews/049/160/750/non_2x/task-manager-for-android-free-png.png"/></div>
      <h3>Task Manager</h3>
      <p>Organize assignments, projects, and deadlines with ease..</p>
      <button>
        Manage tasks:
      </button>    
    </div>
    <div className="container">
      <div className="book"><img src="https://tse2.mm.bing.net/th/id/OIP.4CPYfZibKtkwvf_MatnWpwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/></div>
      <h3>Progress Tracking</h3>
      <p>Monitor study patterns, track time, and visualise your growth.</p>
      <button>
        View Stats:
      </button>    
    </div>
    <div className="container">
      <div className="book"><img src="https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTc3LnBuZw.png"/></div>
      <h3>Smart Remindes</h3>
      <p>Get notified about upcoming deadlines and study sessions.</p>
      <button>
        Set Remindes:
      </button>    
    </div>
    
   </div>
  </>


);

}
