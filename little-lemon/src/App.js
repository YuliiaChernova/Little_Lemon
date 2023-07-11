import './App.css';
import nav_logo from './assets/nav_logo.png';
import footer_logo from './assets/footer_logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <nav class="headerFooterContainer">
        <div>
          <img src={nav_logo} alt="Little Lemon Logo" />
        </div>
        <div class="menu">
          <FontAwesomeIcon icon={faBars} size="3x" />
        </div>
      </nav>
      <main>
        <form>
          <input type="text" id="name" name="name" placeholder="Name*" />
          <input type="text" id="phone" name="phone" placeholder="Phone*" />
          <input type="text" id="email" name="email" placeholder="Email*" />
          <div class="dateTime">
            <input type="text" id="date" name="date" placeholder="Booking date*" />
            <input type="text" id="time" name="time" placeholder="Time*" />
          </div>
          <input type="text" id="adults" name="adults" placeholder="Number of adults*" />
          <input type="text" id="children" name="children" placeholder="Number of children*" />
          <button>Book table</button>
        </form>
      </main>
      <footer class="headerFooterContainer">
        <img src={footer_logo} alt="Little Lemon Logo" />
        <div>
          <h3>Navigation</h3>
          <p>Menu</p>
          <p>Book table</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Contacts</p>
          <p>Map</p>
        </div>
        <div>
          <h3>Social media</h3>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </footer>
    </>
  );
}

export default App;