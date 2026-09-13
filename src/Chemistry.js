import React from "./App.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Mathematics(){
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
            <img className="book" src="https://cdn-icons-png.flaticon.com/512/8716/8716846.png"/>
        </div>
        <div> 
            <h1>Chemistry</h1>
        </div>
        <div>
            <div className="bodyhead">Choose Your Topic</div>
            <h3>Master each concept step by step ✦ </h3>
        </div>
        <div className="portion">
            <h3>Foundation & Fundamentals</h3>
            <p>Dalton's theory, mole, empirical formula, laws of chemical combination.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Stoichiometry</h3>
            <p>Mole concept, limiting reagent, percentage composition, titration..</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Atomic Structure</h3>
            <p>Bohr's model, quantum numbers, electronic configuration, orbitals.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Chemical Bonding</h3>
            <p>Ionic, covalent, VSEPR, hybridization, molecular geometry.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Electrochemistry</h3>
            <p>Redox reactions, electrochemical cells, Nernst equation, corrosion.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>

        <div className="portion">
            <h3>Acid-Base Equilibrium</h3>
            <p>LpH, buffers, hydrolysis, solubility product, common ion effect.</p>
            <button className="btnhead">
              Explore➜
            </button>   
        </div>
        
       </div>
    
       
      </div>
</>
)
}
export default Mathematics;