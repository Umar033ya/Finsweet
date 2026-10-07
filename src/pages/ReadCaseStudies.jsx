import odam from "../assets/odam.svg";
import way from "../assets/way.svg";
import "./ReadCaseStudies.css";
function ReadCaseStudies() {
  return (
    <div>
      <div className="ota">
        <p>Web design and development</p>
        <h3>Finsweet Design case studies</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <img src={odam} alt="odam-svg" />
        <div>
          <div>
            <a href="#">Client</a>
            <p>facebook.com</p>
          </div>
          <div>
            <a href="#">Client</a>
            <p>Product Design</p>
          </div>
          <div>
            <a href="#">Client</a>
            <p>UI Screens, UX Flow & Prototype</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="ona">
        <h3>About the project</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          </li>
          <li>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
          </li>
          <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
        </ul>
        <img src={way} alt="" />
      </div>
      <div className="bola">
        <h3>How we do it</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, non.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, non.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, non.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, libero.</li>
        </ul>

      </div>
      <div className="brand">
        <a href="#">Keywords</a>
        <a href="#">Design </a>
        <a href="#">UI/UX </a>
        <a href="#">Wireframing</a>
        <a href="#">Branding</a>
        <a href="#">Development</a>
        <a href="#">webflow</a>
      </div>
      <hr />
      <div className="bulit">
        <h2>Let's build something great together</h2>
        <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
        <button>Contact Us</button>
      </div>
      <hr />
    </div>
  );
}
export default ReadCaseStudies;
