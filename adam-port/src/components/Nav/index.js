import React from "react";

function Nav(props) {
    
const {
    contactSelected,
    setContactSelected
} = props;

  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>Adam Menkes</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>Portfolio</span>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          <li className={"mx-2"}>
              <span onClick={() => handleClick()}>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
