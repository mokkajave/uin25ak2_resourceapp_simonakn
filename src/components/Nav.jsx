import { Link, NavLink } from "react-router-dom";
import "../styles/nav.scss";

export default function Nav() {
    
    return (
        <nav>
            <ul>
                {/* Benytter NavLink istedenfor Link, for å kunne ha en active-klasse per
                navigasjonselement. Tydeligere hvilket emne som vises på siden. */}
                <li><NavLink to="/html">HTML</NavLink></li>
                <li><NavLink to="/css">CSS</NavLink></li>
                <li><NavLink to="/javascript">JavaScript</NavLink></li>
                <li><NavLink to="/react">React</NavLink></li>
                <li><NavLink to="/sanity">Sanity and headless CMS</NavLink></li>
            </ul>
        </nav>
    )
}