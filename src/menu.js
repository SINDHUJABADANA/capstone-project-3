import {Link} from "react-router-dom"
function Menu(){
    return(
        <div style={{marginTop:'50px'}}>
            <Link to="/">Home |</Link>
            <Link to="/about">About | </Link>
            <Link to="/work">Work | </Link>
            <Link to="/testimonial">Testimonial | </Link>
            <Link to="/contact">Contact | </Link>
            <Link to="/footer">Footer</Link>
        </div>
    )
}
export default Menu;