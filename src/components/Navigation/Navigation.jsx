import { Link } from 'react-router-dom'
import "./style.css"

const Navigation = () => (
    <nav className="navbar">
        <ul className="nav-list">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/modeler">MODELER</Link></li>
            <li><Link to="/frameworks">FRAMEWORKS</Link></li>
        </ul>
    </nav>
)

export default Navigation