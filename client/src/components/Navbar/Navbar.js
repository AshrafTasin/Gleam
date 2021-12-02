import React,{ useState,useEffect} from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar,Toolbar,IconButton,Typography,Button,Avatar} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './styles'

const Navbar = () => {
    
    const classes = useStyles();
    const history= useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [anchorEl, setAnchorEl] = useState(null);

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

    return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
         <MenuIcon />
        </IconButton>
          { user ? (
              <>
              <div onClick={handleClick}>
                <Avatar alt={user.result.firstName} src={user.result.imageURL}>{user.result.firstName.charAt(0)}
                </Avatar>
              </div>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to='/me'>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>

                  <Link to='/new-blog'>
                    <MenuItem onClick={handleClose}>Write</MenuItem>
                  </Link>

                  <Link to='/logout'>
                    <MenuItem onClick={handleClose}>logout</MenuItem>
                  </Link>

                </Menu>
                <Typography variant="h6" className={classes.title}>{user.result.firstName}</Typography>
                <Button variant="contained" color="secondary" onClick={logout}>Log Out</Button>
               </>
          ) : (
              <>
            <Typography variant="h6" className={classes.title}> Not Logged In </Typography>
            <Button variant="contained" color="secondary" component={Link} to='/auth'> Log In</Button>
              </>

          )}

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
