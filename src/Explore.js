import React from "./App.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Explore(){
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
    <div className="container">
      <div >
            <div className="book"><img src="https://th.bing.com/th/id/R.ed8cfc86654ff527c9b34b12bdaa4aa6?rik=wamVJXOLiTfVWA&pid=ImgRaw&r=0"/></div>
            <h3>Physics</h3>
            <div >Fundamental science</div>
            <br />
            <div className="tags">
              <span>➤ Mechanics</span>
              <span>➤ Thermodynamics</span>
              <span>➤ Optics</span>
            </div>
            <br />
            <a>
                <Link to="/physics" className="headbtn">
                      Explore➜
                </Link>
            </a>   
       </div>
    </div>
    <div className="container">
      <div >
            <div className="book"><img src="https://cdn-icons-png.flaticon.com/512/8716/8716846.png"/></div>
            <h3>Chemistry</h3>
            <div >Matter and Reactions</div>
            <br />
            <div className="tags">
              <span>➤ Organic</span>
              <span>➤ Inorganics</span>
              <span>➤ Physical</span>
            </div>
            <br />
            <a>
                <Link to="/chemistry" className="headbtn">
                      Explore➜
                </Link>
            </a>   
       </div>
    </div>
    <div className="container">
      <div >
            <div className="book"><img src="https://tse1.mm.bing.net/th/id/OIP.OVDukhnK2O9AR8KsgBLPQAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"/></div>
            <h3>Mathematics</h3>
            <div >Language of Logic</div>
            <br />
            <div className="tags">
              <span>➤ Algebra</span>
              <span>➤ Calculus</span>
              <span>➤ Geometry</span>
            </div>
            <br />
            <a>
                <Link to="/mathematics" className="headbtn">
                      Explore➜
                </Link>
            </a>   
       </div>
    </div>
  </div>
</>
)
}
export default Explore;