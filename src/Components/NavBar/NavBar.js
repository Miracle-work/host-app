import {React,useContext} from 'react';
// Bootstrap Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { AiOutlineSetting } from "react-icons/ai";
import { AiTwotoneBank } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthContext from '../../Store/Auth-Context'
// import {useNavigate} from 'react-router-dom';

// End Of Bootstrap Components
import classes from './NavBar.module.scss';

const NavBar = () => {
    const authContext= useContext(AuthContext)
    // const navigate=useNavigate()
    const logout=()=>{
        authContext.logout()
        // navigate('/login')
        console.log('logged out')
    }
    const menu=[
        {
            id:1,
            itemName:'التصنيع',
            url:'',
            dropdown:true,
            dropdownList:[
                {
                    name:'الرئيسية',
                    link:'/dashboard/manufacturing'
                }
            ]
        },{
            id:2,
            itemName:'الاصول',
            url:'',
            dropdown:true,
            dropdownList:[
                {
                    name:'الرئيسية',
                    link:'/dashboard/assets'
                }
            ]
        }
    ]

    return (

        <Navbar expand="lg" dir='rtl' className={`${classes.navbar}`}>
            <Container>
                <Navbar href="" className={`justify-content-start ${classes.navbar_link}`}>Logo</Navbar>

                <Navbar.Toggle className={`${classes.navbar_toggle}`}>
                     <GiHamburgerMenu className={`${classes.navbar_toggle_icon} `} />
                </Navbar.Toggle>

                <Navbar.Collapse className={`justify-content-start ${classes.navbar_link}`}>
                    <Nav>
                        {
                            menu.map((item)=>{
                                return(
                                    item.dropdown ? 
                                        <NavDropdown key={item.id} className={`${classes.dropdown}`} title={
                                            <span className={`${classes.navbar_link}`}>
                                                <AiOutlineSetting className={`${classes.nav_icon}`} /> 
                                                {item.itemName}
                                                {
                                                    <IoIosArrowDown className={`${classes.nav_icon_down}`} />
                                                }
                                            </span>
                                        }>
                                            { 
                                                item.dropdownList.map((list)=>{
                                                    return(
                                                        <NavDropdown.Item key={item.id} href={list.link}>
                                                            {list.name}
                                                        </NavDropdown.Item>
                                                    )
                                                })
                                            }    
                                        </NavDropdown> :
                                        <Nav.Link  href={item.url} className={` ${classes.navbar_link} ${classes.dropdown}`}>
                                            {item.itemName} 
                                        </Nav.Link>
                                )    
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
                
                <Navbar.Collapse className={`justify-content-end ${classes.navbar_link}`}>
                    <NavDropdown className={`${classes.dropdown}`} title={
                        <span className={`${classes.navbar_link}`}>
                            <FaUserCircle className={`${classes.nav_icon} ${classes.nav_icon_user}`} />  اسم المستخدم 
                        </span>
                    }>
                        <NavDropdown.Item href="#" onClick={logout}>Logout</NavDropdown.Item>         
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
    );
};

export default NavBar;