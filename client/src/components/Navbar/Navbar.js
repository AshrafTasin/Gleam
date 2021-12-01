import React,{ useState,useEffect} from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar,Toolbar,IconButton,Typography,Button,Avatar} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles'

const Navbar = () => {
    
    const classes = useStyles();
    const history= useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
      dispatch({type: 'LOGOUT' });
      history.push('/auth');
      setUser(null);
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
                <Avatar alt={user.result.name} src={user.result.imageURL}>{user.result.name.charAt(0)}</Avatar>
                <Typography variant="h6" className={classes.title}>{user.result.name}</Typography>
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
