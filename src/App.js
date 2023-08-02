import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import "bulma/css/bulma.min.css";

library.add(fas, fab);

function App() {
  return (
    <div className="main">
      <nav className="navbar is-dark has-text-white" role="navigation" aria-label="main navigation">
        <div className="anton is-size-2 is-uppercase p-2 pl-4">Shannon Fitzgerald</div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="/" className="button">
              <FontAwesomeIcon icon={["fas", "house"]} className="has-text-white" size="2x"/>
            </a>
            {/* <a href="#" className="button">
              <FontAwesomeIcon icon={["fas", "address-card"]} className="has-text-white" size="2x"/>
            </a> */}
            <a href="https://github.com/sfitzgerald16" className="button" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "github"]} className="has-text-white" size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/shannon-fitzgerald" className="button" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="has-text-white" size="2x"/>
            </a>
          </div>
        </div>
      </nav>
      <div className='bio has-text-centered'>
        <p>Full stack web and mobile developer based in Fresno, California. Experienced in developing custom responsive websites and apps using React, Python, Django, JavaScript, HTML, CSS and Bootstrap as well as Social Media content creation and management.</p>
      </div>
    </div>
  );
}

export default App;
