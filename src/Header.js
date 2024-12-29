import {useState, useEffect} from 'react';
import {Link} from 'react-router';
function isAuthenticated(){
    return true;
}
export default Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    // useEffect(()=> {
    //     setLoggedIn(isAuthenticated)
    // }, [isLoggedIn]);

    return (
        <div className="header-container">
            <a href="/">
                <img className="logo" src="https://media.istockphoto.com/id/981368726/vector/restaurant-food-drinks-logo-fork-knife-background-vector-image.jpg?s=2048x2048&w=is&k=20&c=PBbdXEXWkg1lq-U8c1Jxt0JbeNWCRtf-elsn3Ncew8M=" 
                alt="My Restaurant logo" />
            </a>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutUs">About</Link></li>
                <li><a href="">Contact</a></li>
                <div>
                    <button disabled={isLoggedIn} onClick={()=>setLoggedIn(true)}>Login</button>
                    <button disabled={!isLoggedIn} onClick={()=> setLoggedIn(false)}>Logout</button>
                </div>
            </ul>
        </div>
    )
}
