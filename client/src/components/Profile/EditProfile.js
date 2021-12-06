import React,{ useState,useEffect} from "react";
import { useHistory } from "react-router";
import {useDispatch} from 'react-redux';
import { updateuser } from '../../actions/user';
import "./EditProfile.css";

// import Sidebar from "../../components/sidebar/Sidebar";

const EditProfile = () => {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history=useHistory();
  const dispatch = useDispatch();

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [about,setAbout]=useState('');

  useEffect(() => {
      // if(!user){
      //   history.push('/');
      // }else{
          // setFirstName(X);
      setLastName(user.result.lastName);
      setEmail(user.result.email);
      setFirstName(user.result.firstName);
      setAbout(user.result.about);
      setPassword(user.result.password);
      
  },[history,user])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(password===!confirmPassword){
        console.log("Passwords do not match");
    }else{
      const updatedUser ={
        id:user.result._id,
        firstName,lastName,email,password,about
      };
      console.log(updatedUser);
      dispatch(updateuser(updatedUser,user.result.id));
    }


  };
  
  return (
    <div className="profile">
      <div className="profileWrapper">
        <div className="profileTitle">
          <span className="profileTitleUpdate">Update Your Account</span>
          <span className="profileTitleDelete">Delete Account</span>
        </div>
        <form className="profileForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="profilePP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profilePPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="profilePPInput"
            />
          </div>
          <label>First name</label>
          <input type="text" placeholder="First Name" name="First name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          <label>Last name</label>
          <input type="text" placeholder="Last Name" name="Last name" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder="Email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" onChange={(e)=> setPassword(e.target.value)}/>
          <label>Comfirm Password</label>
          <input type="password" placeholder="Confirm Password" name="comnfirmPassword" onChange={(e)=> setConfirmPassword(e.target.value)} />
          <label>About</label>
          <input type="text" placeholder="About Me" name="about" value={about} onChange={(e)=> setAbout(e.target.value)} />
          <button className="profileSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
}

export default EditProfile;