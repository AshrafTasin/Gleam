import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const About = () =>{
    return (
        <div>
             <Link to='/edit'>
                <Button>
                    Edit
                </Button>
            </Link>
        </div>
    )
}

export default About;
