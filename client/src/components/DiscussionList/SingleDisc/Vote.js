import Icon from "@ant-design/icons/lib/components/Icon";
import { Tooltip } from "antd";
import React,{useState} from "react";

import './Vote.css'

const Vote = () => {
  
  const [UpVote,setUpVote]=useState(0);

  const submitVoteUp = ()=>{

    setUpVote(UpVote+1);
    console.log( "UPVOTE"+UpVote) ;
  }
  const submitVoteDown = ()=>{

    setUpVote(UpVote-1);
    console.log( "Downvote"+UpVote) ;
}

  return (
      <div class="vote circle" style={{ marginLeft : '-70px'}} >
        <div class="increment up"  onClick={submitVoteUp}></div>
        <div class="increment down"onClick={submitVoteDown} ></div>

        <div class="count">{UpVote}</div>
      </div>
  );
};

export default Vote;
