import React, { useRef,useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './DropDownStyle.css'; 


const Dropdown = ({ open, setOpen }) => {
 
  
  
  

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
       
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="App">
      <div className="menu-container "ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
        Dropdown <RiArrowDropDownLine className='sizing-icon'/>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          
          <ul>
            <DropdownItem  text = {"My Profile"}/>
            <DropdownItem  text = {"Inbox"}/>
            <DropdownItem  text = {"Settings"}/>
            <DropdownItem  text = {"Helps"}/>
            <DropdownItem  text = {"Logout"}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
    
      <a> {props.text} </a>
    </li>
  );
}

export default Dropdown;