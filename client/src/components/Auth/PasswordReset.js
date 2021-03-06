import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar,Button,Typography,Container,Grid } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined"
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from "react-redux"; 
import { useHistory,useLocation } from 'react-router-dom';
import axios from 'axios';

import useStyles from './styles';     


const Verification = () => {
    
    const classes = useStyles();
    const [email,setEmail] = useState('');
    // const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const history = useHistory();
    const location = useLocation(); 

    // useEffect(() => {
    //     const token = user?.token;
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [location])

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(email);
        const getLink = async () => {
            //const body = {mail:email};
            const res = await axios.post('http://localhost:5000/users/reset-password',{email:email});
            console.log(res);
        };
        getLink();
        window.location.replace('/confirmation');
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Enter your email id
            </Typography>
            <Grid container spacing={2}>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                <Button type="submit"> Submit </Button>
              </form> 
            </Grid>
          </div>
      </Container> 
    )
}

export default Verification;