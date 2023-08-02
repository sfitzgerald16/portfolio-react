import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import lostcatsweb from "./image/lostcatsthumbnail.jpg";
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
      <div className='bio opensans has-text-centered'>
        <p>Full stack web and mobile developer based in Fresno, California. Experienced in developing custom responsive websites and apps using React, Python, Django, JavaScript, HTML, CSS and Bootstrap as well as Social Media content creation and management.</p>
      </div>
      <div>
        <div className="heading anton has-text-centered is-size-2 is-uppercase pt-5">
          Websites
        </div>
        <div className="row">
          <div className="column is-one-third">
            <a href="https://sfitzgerald16.github.io/Lost-Cats/" class="thumbnail" target="_blank">
              {/* <div class="thumbnail-image-box" id="lost-cats-web" ></div> */ }
              <img
                src={ lostcatsweb }
                alt="Lost Cats Website"
                style={ { height: 200, marginBottom: 20, padding: "0 0 10px 0" } }
                // className="logo"
              />
              <div class="caption text-center sans-text">
                <h3>California Lost Cats</h3>
              </div>
              <div class="overlay"></div>
            </a>
          </div>
          <div className="column is-one-third"></div>
          <div className="column is-one-third"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
