import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';

const About = () =>{
    return (
        <div>
            <Sidebar/>
             <Link to='/edit'>
                <Button>
                    Edit
                </Button>
            </Link>
        </div>
    )
}

export default About;
