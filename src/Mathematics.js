import React from "./App.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Chemistry(){
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
            <img className="book" src="https://tse1.mm.bing.net/th/id/OIP.OVDukhnK2O9AR8KsgBLPQAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/>
        </div>
        <div> 
            <h1>Mathematics</h1>
        </div>
        <div>
            <div className="bodyhead">Choose Your Topic</div>
            <h3>Master each concept step by step ✦ </h3>
        </div>
        <div className="portion">
            <h3>Set,Relations And Functions</h3>
            <p>Types of sets, relations, functions, domain, range, composition.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Complex Numbers</h3>
            <p>Algebra, modulus, conjugate, polar form, De Moivre's theorem..</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Quadratic Equations</h3>
            <p>Nature of roots, sum & product, discriminant, inequalities..</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Sequence And Series</h3>
            <p>Arithmetic, geometric, harmonic progressions, infinite series..</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Electrochemistry</h3>
            <p>Trigonometry</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Binomial Theorem</h3>
            <p>Pascal's triangle, expansion, general term, applications.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>
        
       </div>
    
       
      </div>
</>
)
}
export default Chemistry;