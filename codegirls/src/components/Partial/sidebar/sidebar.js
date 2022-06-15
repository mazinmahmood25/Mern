import { Link } from "react-router-dom";
import './sidebar.css'

const Sidebar = (props) => {
  return (
    <>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            {props.name.map((e,index)=>{
                return (
                    <Link to={e.path} className="list-group-item list-group-item-action py-2 ripple">{e.title}</Link>                   
                )
            })}
            
          </div>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;