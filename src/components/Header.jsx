import React,{useState} from 'react';
import { NavLink as Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import bars from '../assets/images/bars.svg';
import products from '../assets/images/products.svg';
import bank from '../assets/images/bank.svg';
import addProducts from '../assets/images/addProducts.svg';
import report from '../assets/images/report.svg';
import reviews from '../assets/images/reviews.svg';
import login from '../assets/images/user.svg';
import register from '../assets/images/userplus.svg';
import style from '../assets/css/navbar.module.css';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const [click, setClick] = useState(true);
    return (
        <div className={style.App}>
            <nav className={style.navbar}>
                <div className={style.navbarContainer}>
                    <div className={style.navbarLeft}>
                        <img className={style.menuBars} src={bars} alt="bars" onClick={() => setClick(!click)}/>
                        <Link to='/' className={style.showNavbarLogo}>
                            <img className={style.navbarLogo} src={logo} alt='Logo'/>
                        </Link>
                    </div>

                    <div className={style.navbarBtn}>
                        <Link to='/register' className={style.navbarRegister}>
                            <span className={style.navbarRegisterText}>Register</span>
                            <img className={style.register} src={register} alt='Register'/>
                        </Link>

                        <Link to='/login' className={style.navbarLogin}>
                           <span className={style.navbarRegisterText}>Login</span>
                            <img className={style.login} src={login} alt='Login'/>
                        </Link>
                    </div>
                </div>
            </nav>
            <div className={click ? style.showSidebar : style.hideSidebar}>
                <ul className={click ? style.showSidebarMenu : style.hideSidebarMenu}>
                    <li className={style.menuItem} onClick={() => props.history.push("/addProducts")}>
                        <img className={style.sidebarIcon} src={addProducts}  alt='Add'/>
                        <div className={click ? style.showSidebarText : style.hideSidebarText}>
                            Add Products
                        </div>
                    </li>

                    <li className={style.menuItem} onClick={() => props.history.push('/allProducts')}>
                        <img className={style.sidebarIcon} src={products} alt="All" />
                        <div className={click ? style.showSidebarText : style.hideSidebarText}>
                            All Products
                        </div>
                    </li>
                    
                    <li className={style.menuItem} onClick={() => props.history.push('/bank')}>
                        <img className={style.sidebarIcon} src={bank} alt="Bank" />
                        <div className={click ? style.showSidebarText : style.hideSidebarText}>
                            Bank Details
                        </div>
                    </li>

                    <li className={style.menuItem} onClick={() => props.history.push('/report')}>
                        <img className={style.sidebarIcon} src={report} alt="Report" />
                        <div className={click ? style.showSidebarText : style.hideSidebarText}>
                            Report
                        </div>
                    </li>

                    <li className={style.menuItem} onClick={() => props.history.push('/reviews')}>
                        <img className={style.sidebarIcon} src={reviews} alt="Review"/>
                        <div className={click ? style.showSidebarText : style.hideSidebarText}>
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

export default withRouter(Header);
