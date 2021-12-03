import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux"; 
import { useHistory,useLocation } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


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
            const res = await axios.post('http://localhost:5000/users/reset-password',{'mail':email});
            console.log(res);
        };
        getLink();
        window.location.replace('/confirmation');
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
             <Button type="submit"> Submit </Button>
      </form>  
    )
}

export default Verification;