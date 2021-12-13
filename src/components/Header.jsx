import React,{useState} from 'react';
import { NavLink as Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import {ReactComponent as Bars} from '../assets/images/bars.svg';
import {ReactComponent as Products} from '../assets/images/products.svg';
import {ReactComponent as Bank} from '../assets/images/bank.svg';
import {ReactComponent as AddProducts} from '../assets/images/addProducts.svg';
import {ReactComponent as Report} from '../assets/images/report.svg';
import {ReactComponent as Reviews} from '../assets/images/reviews.svg';
import {ReactComponent as Login} from '../assets/images/user.svg';
import {ReactComponent as Register} from '../assets/images/userplus.svg';
import LogoutIcon from '@mui/icons-material/Logout';
import { connect } from 'react-redux';
import { toggleDrawer } from "../redux/drawer/drawer.action";
import style from '../assets/css/navbar.module.css';
import { withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth';

const Header = (props) => {
    const [click, setClick] = useState(props.drawer);
    const his = props.history.location.pathname;
    return (
        <div className={style.App}>
            <nav className={style.navbar}>
                <div className={style.navbarContainer}>
                    <div className={style.navbarLeft}>
                        <Bars className={style.menuBars} fill="#00000" onClick={() => {
                            setClick(!click);
                            props.toggle();
                        }} />
                        <Link to='/' className={style.showNavbarLogo}>
                            <img className={style.navbarLogo} src={logo} alt='Logo'/>
                        </Link>
                    </div>

                    {isAuthenticated() ? (
                        <div className={style.navbarBtn}
                        style={{cursor:"pointer"}}
                        onClick={() => {
                            signout(() => {
                                props.history.push("/login");
                            })
                        }}>
                        <div className={style.navbarRegister}>
                            <span className={style.navbarRegisterText}>Logout</span>
                            <LogoutIcon className={style.register} fill="#fff" />
                        </div>
                    </div>
                    ):(
                        <div className={style.navbarBtn}>
                        <Link to='/register' className={style.navbarRegister}>
                            <span className={style.navbarRegisterText}>Register</span>
                            <Register className={style.register} fill="#fff" />
                        </Link>

                        <Link to='/login' className={style.navbarLogin}>
                           <span className={style.navbarRegisterText}>Login</span>
                           <Login className={style.login} fill="#fff" />
                        </Link>
                    </div>
                    )}
                </div>
            </nav>
            <div className={click ? style.showSidebar : style.hideSidebar}>
                <ul className={click ? style.showSidebarMenu : style.hideSidebarMenu}>
                    <li className={his==="/add-products" ? style.menuI:style.menuItem} onClick={() => props.history.push("/add-products")}>
                        <AddProducts className={style.sidebarIcon} fill={his==="/add-products" ? "#ffffff":"#808080"} />
                        <div className={click ? style.showSidebarText : style.hideSidebarText} style={{color:his==="/add-products" ? "#ffffff":"#808080"}}>
                            Add Products
                        </div>
                    </li>

                    <li className={his==="/all-products" ? style.menuI:style.menuItem} onClick={() => props.history.push('/all-products')}>
                        <Products className={style.sidebarIcon} fill={his==="/all-products" ? "#ffffff":"#808080"} />
                        <div className={click ? style.showSidebarText : style.hideSidebarText} style={{color:his==="/all-products" ? "#ffffff":"#808080"}}>
                            All Products
                        </div>
                    </li>
                    
                    <li className={his==="/finance" ? style.menuI:style.menuItem} onClick={() => props.history.push('/finance')}>
                        <Bank className={style.sidebarIcon} fill={his==="/finance" ? "#ffffff":"#808080"} />
                        <div className={click ? style.showSidebarText : style.hideSidebarText} style={{color:his==="/finance" ? "#ffffff":"#808080"}}>
                            Bank Details
                        </div>
                    </li>

                    <li className={his==="/report" ? style.menuI:style.menuItem} onClick={() => props.history.push('/report')}>
                        <Report className={style.sidebarIcon} fill={his==="/report" ? "#ffffff":"#808080"} />
                        <div className={click ? style.showSidebarText : style.hideSidebarText} style={{color:his==="/report" ? "#ffffff":"#808080"}}>
                            Report
                        </div>
                    </li>

                    <li className={his==="/reviews" ? style.menuI:style.menuItem} onClick={() => props.history.push('/reviews')}>
                        <Reviews className={style.sidebarIcon} fill={his==="/reviews" ? "#ffffff":"#808080"} />
                        <div className={click ? style.showSidebarText : style.hideSidebarText} style={{color:his==="/reviews" ? "#ffffff":"#808080"}}>
                            Reviews
                        </div>
                    </li>
                </ul>
            </div>
            <div className={click ? style.fullContent : style.halfContent}>
                {props.children}
            </div> 
        </div>
    )
}
const mapStateToProps = (state) => ({
    drawer : state.drawer.drawer
});
const mapDispathchTorops = (dispatch) => ({
    toggle: () => dispatch(toggleDrawer())
})
 
export default connect(mapStateToProps,mapDispathchTorops)(withRouter(Header));
