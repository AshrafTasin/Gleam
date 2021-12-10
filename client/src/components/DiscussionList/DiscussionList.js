import React from 'react';
import Disc from './Discussion/Discussion.js';
import {Grid,CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';

const DiscussionList = () => {
    
    // const testcode= useSelector((state)=> console.log("ABCDEFGHIJKL     ~~~~~~~~  " +state ));
    // const testcode2= useSelector((state)=> console.log("WXYZ~~~~~~~~\n  " +state.discussion ));
    
    const discussionList= useSelector((state) => state.discussion  );
    return (
        !discussionList.length ? <CircularProgress/> :(
            <Grid container direction="coloumn">
                {discussionList.map((disc)=>(
                    <Grid key={disc._id} item xs={12} sm={12}>
                        <Disc disc={disc}/>  
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default DiscussionList;
