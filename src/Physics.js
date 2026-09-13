import React from "./App.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Physics(){
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


   <div className="body">
       <div className="subject">
        <div>
            <img className="book" src="https://th.bing.com/th/id/R.ed8cfc86654ff527c9b34b12bdaa4aa6?rik=wamVJXOLiTfVWA&pid=ImgRaw&r=0"/>
        </div>
        <div> 
            <h1>Physics</h1>
        </div>
        <div>
            <div className="bodyhead">Choose Your Topic</div>
            <h3>Master each concept step by step ✦ </h3>
        </div>
        <div className="portion">
            <h3>Unit And Dimension</h3>
            <p>Organize assignments, projects, and deadlines with ease..</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Vectors</h3>
            <p>Scalars, vectors, addition, resolution, dot & cross product.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Kinematics</h3>
            <p>Motion in 1D & 2D, equations of motion, projectile.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Newton's Laws</h3>
            <p>Force, inertia, action‑reaction, free‑body diagrams.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Work, Energy & Power</h3>
            <p>Kinetic & potential energy, conservation, power.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Thermodynamics</h3>
            <p>Laws of thermodynamics, heat, work, entropy.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>
        
       </div>
    
       
      </div>
</>
)
}
export default Physics;