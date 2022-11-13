import mapsa from "/Mapsa.png";

export default function Navbar() {
  return (
    <nav className="leftest-nav">
      <ul>
        <li className="naseh">
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
        </li>
        <div className="line"></div>
        <li className="active">
          <a href="#">
            <img src={mapsa} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-plus"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-compass"></i>
          </a>
        </li>
        <div className="line"></div>
        <li>
          <a href="#">
            <i className="fa-solid fa-download"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
