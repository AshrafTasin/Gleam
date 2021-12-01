import React, {useState} from 'react'
import { Avatar,Button,Grid,Paper,Typography,Container, Icon } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined"
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux"; 
import { useHistory } from 'react-router-dom';
import { signin,signup } from '../../actions/auth';
import Input from "./Input";
// import icon from "./Icon"

// import useStyles from './styles';           CUSTOM CSS

const initialState ={firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {

    // const classes = useStyles();             CUSTOM CSS

    const [showPassword,setShowPassword] = useState(false);
    const [isSignUp,setIsSignUp] = useState(false);
    const [formData,setFormData] = useState(initialState);

    const dispatch = useDispatch();
    const history = useHistory(); 

    const handleShowPassword =() => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit =(event) => {
        event.preventDefault();
        
        if(isSignUp){
            dispatch(signup(formData,history));  
              
        }else{
            dispatch(signin(formData,history));
        }
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false); 
    };


    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data:{ result,token} });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };
    const googleFailure = () => {
        console.log("Google Sign In Failed. Please Try Again");
    };



    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3}>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name="firstname" label="First Name" handleChange={(e) => setFormData({ ...formData,firstName: e.target.value})} autoFocus half />
                                <Input name="lastname" label="Last Name" handleChange={(e) => setFormData({ ...formData,lastName: e.target.value})} half />
                            </>
                        )
                    }

                    <Input name="email" label="Email Address" handleChange={(e) => setFormData({ ...formData,email: e.target.value})} type="email"/>
                    <Input name="password" label="Password" handleChange={(e) => setFormData({ ...formData,password: e.target.value})} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    {
                        isSignUp && 
                        <Input name="confirmPassword" label="Confirm Password" handleChange={(e) => setFormData({ ...formData,confirmPassword: e.target.value})} type="password" />
                    }
                    </Grid>

                    <Button type="submit" fullWidth variant="contained" color="primary" >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>

                    <GoogleLogin 
                        clientId="630287535020-c7horr7mrrt0scr4mjhvjuvuehnn2nr4.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button
                            color="primary"
                            fullWidth
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<Icon />}
                            variant="contained"

                            >
                                Google Sign In
                            </Button>
                        )}
                        
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={"single_host_origin"}

                    />




                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Already have an account ? Sign In" : "Need an account ? Sign Up"}
                            </Button>
                        </Grid>

                    </Grid>

                </form>
            </Paper>
        </Container>
    )
}

export default Auth
