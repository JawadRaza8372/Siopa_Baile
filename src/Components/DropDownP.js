import React from "react";
import {Dropdown} from "react-bootstrap"

function DropDownP({children,logoutfunction}) {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
     {children}
      
        </a>
      ));
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      
          return (
            <div
              ref={ref}
              style={{position:"absolute",right:"10px"}}
              className={className}
              aria-labelledby={labeledBy}
            >
           {children}
             
            </div>
          );
        },
      );
      
      
    return (
        <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {children}
        </Dropdown.Toggle>
          <Dropdown.Menu as={CustomMenu}  align="right">
            <Dropdown.Item onClick={()=>{logoutfunction()}}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    )
}

export default DropDownP