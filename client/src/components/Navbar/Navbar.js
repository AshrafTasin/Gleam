import React,{ useState,useEffect} from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar,Toolbar,IconButton,Typography,Button,Avatar} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home';
import InputBase from '@material-ui/core/InputBase';



import useStyles from './styles'

const Navbar = () => {
    
    const classes = useStyles();
    const history= useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const logout = () => {
      dispatch({type: 'LOGOUT' });
      history.push('/auth');
      setUser(null);
    };

    const handleClick = (event) => {
      event.stopPropagation();
      console.log(user.result);
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
      const token = user?.token;
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])




    ///// NEW ////////

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >

        <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
        
        <Link to='/new-blog'>
          <MenuItem onClick={handleMenuClose}>Write A Blog</MenuItem>
        </Link>


        <MenuItem onClick={handleMenuClose}>My account</MenuItem>

        <Link onClick={logout}>
          <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
        </Link>
        
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        
        <Link to='/' onClick={handleMenuClose}>
          <MenuItem color="inherit">
            <IconButton>
                <HomeIcon />
            </IconButton>
              <p>Home</p>
          </MenuItem>
        </Link>

        <Link to='/blogs' onClick={handleMenuClose}>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
              <MenuBookIcon />
          </IconButton>
          <p>Blogs</p>
        </MenuItem>
        </Link>
        
        <Link to='/discussions' onClick={handleMenuClose}>
        <MenuItem >
          <IconButton aria-label="show 11 new notifications" color="inherit">
              <ForumIcon />
          </IconButton>
          <p>Discussions</p>
        </MenuItem>
        </Link>
        {
          user ? (
            <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
          ) : (
            <></>
          )
        }

      </Menu>
    );




    return (
      <div className={classes.grow}>
        <AppBar position="static" >
          <Toolbar>
            {/* <Typography className={classes.title} variant="h6" noWrap>
              Gleam
            </Typography> */}

            {
              user?(
                <></>
              ) : (
                <Button variant="contained" color="secondary" component={Link} to='/auth'> Log In</Button>
              )
            }



            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

            <Link to='/'>
                <IconButton aria-label="show 4 new mails" style={{color:"#ffffff"}}>
                    <HomeIcon style={{ fontSize: 30 }}/>
                </IconButton>
              </Link>
              
              <Link to='/blogs'>
                <IconButton aria-label="show 4 new mails" style={{color:"#ffffff"}}>
                    <MenuBookIcon style={{ fontSize: 30 }}/>
                </IconButton>
              </Link>

              <Link to='/discussion'>
                <IconButton aria-label="show 17 new notifications" style={{color:"#ffffff"}}>
                    <ForumIcon style={{ fontSize: 30 }}/>  
                </IconButton>
              </Link>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {
                  user?(
                    <Avatar style={{ fontSize: 30 }} alt={user.result.firstName} src={user.result.imageURL}>{user.result.firstName.charAt(0)}</Avatar>
                  ) :(
                    <></>
                  )
                }
                
                {/* <AccountCircle style={{ fontSize: 30 }}/> */}
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    );








  //   return (
  //   <AppBar position="static">
  //     <Toolbar>
  //       <IconButton
  //         edge="start"
  //         className={classes.menuButton}
  //         color="inherit"
  //         aria-label="menu"
  //       >
  //        <MenuIcon />
  //       </IconButton>
  //         { user ? (
  //             <>
  //             <div onClick={handleClick}>
  //               <Avatar alt={user.result.firstName} src={user.result.imageURL}>{user.result.firstName.charAt(0)}
  //               </Avatar>
  //             </div>
  //               <Menu
  //                 id="simple-menu"
  //                 anchorEl={anchorEl}
  //                 keepMounted
  //                 open={Boolean(anchorEl)}
  //                 onClose={handleClose}
  //               >
  //                 <Link to='/me'>
  //                   <MenuItem onClick={handleClose}>Profile</MenuItem>
  //                 </Link>

  //                 <Link to='/new-blog'>
  //                   <MenuItem onClick={handleClose}>Write</MenuItem>
  //                 </Link>

  //                 <Link to='/logout'>
  //                   <MenuItem onClick={handleClose}>logout</MenuItem>
  //                 </Link>

  //               </Menu>
  //               <Typography variant="h6" className={classes.title}>{user.result.firstName}</Typography>
  //               <Button variant="contained" color="secondary" onClick={logout}>Log Out</Button>
  //              </>
  //         ) : (
  //             <>
  //           <Typography variant="h6" className={classes.title}> Not Logged In </Typography>
  //           <Button variant="contained" color="secondary" component={Link} to='/auth'> Log In</Button>
  //             </>

  //         )}

  //     </Toolbar>
  //   </AppBar>
  // );
};

export default Navbar;
