import { div } from 'prelude-ls'
import './styles/Main.css';
import './images/'
 
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark container navigation pt-3">
    <h5 className="row navbar-brand text-white col-6 d-flex justify-content-start align-items-center">Portfolio</h5>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="col-6 pt-2 collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="col-3 nav-item">
          <a className="nav-link text-white navigation-link" href="#about">About</a>
        </li>
        <li className="col-3 nav-item">
          <a className="nav-link text-white navigation-link" href="#projects">Projects</a>
        </li>
        <li className="col-3 nav-item">
          <a className="nav-link text-white navigation-link" href="#social-media">Social</a>
        </li>

        <li className="col-3 nav-item">
          <a className="nav-link text-white navigation-link"
            href="https://docs.google.com/document/d/1wIEbPnZ4yEIATHNxbkdfInFhxsdKCFlZHetO1apVUos/export?format=pdf">Resume</a>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}
export default Header;
