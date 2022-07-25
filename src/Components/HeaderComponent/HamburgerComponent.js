
import "./Hamburger.style.scss";


const HamburgerComponent = ({open}) => {
 

  return (
    <div open={open} className="burger-menu">
      <div className={`ham ${open ? "open" : ""}`}></div>
      <div className={`ham ${open ? "open" : ""}`}></div>
      <div className={`ham ${open ? "open" : ""}`}></div>
    </div>
    
  );
};

export default HamburgerComponent;
