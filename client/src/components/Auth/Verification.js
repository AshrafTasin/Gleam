import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux"; 
import { useHistory,useLocation } from 'react-router-dom';
import { verification } from '../../actions/auth';

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
    const [token,setToken] = useState('');
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const location = useLocation(); 

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const handleSubmit = (event) =>{
        event.preventDefault();
        setUser(JSON.parse(localStorage.getItem('profile')));
        console.log(token); 
        const data={userID:user.result._id,otp:token};
        console.log(data);

        dispatch(verification(data,history));
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Token" variant="outlined" onChange={(e) => setToken(e.target.value)} />
             <Button type="submit"> Submit </Button>
      </form>  
    )
}

export default Verification;