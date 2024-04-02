import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import tru from '../../assets/tru.png';

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-8 text-white font-medium text-md px-8  ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
              
                <Link to={'/cart'} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ marginRight: '0.5rem' }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
  </svg>
  <li style={{ listStyleType: 'none' }}>Cart({cartItems.length})</li>
</Link>

            </li>
            
        </ul>
    )
    return (
        <nav className="bg-red-600 sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div  className="left py-3 lg:py-0">
                <Link to={'/'} className="flex items-center justify-center">
    <img src={tru} alt="logo" className="mr-2" />
    <h2 className="font-bold text-white text-2xl text-center">Faiz Marketing</h2>
</Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
