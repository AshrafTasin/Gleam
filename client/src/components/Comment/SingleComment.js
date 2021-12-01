import React from 'react'
import {Comment, Avatar,Button,Input } from 'antd';

const SingleComment = () => {

    const action= [

        <span onClick key="comment-basic-reply-to">Reply to </span>
    ]
    return (
        <div>
           <Comment actions={action}
            author
            avatar={<Avatar src="" alt /> }
            content={
                <p>

               </p>
            }>

           </Comment>
           
           <form style = {{ display: 'flex'}} onSubmit /*</div>={onSubmit}*/  >
                <Input
                    style={{ width: '100%', borderRadius: '5px'}}
                    onChange /* ={ (e)=>setComment(e.target.value)} */
                    value={Comment}
                    placeholder=" Write your Comment"
                    />
                 <br/>
                 <Button style={{width: '20%',height: '52px'}} onClick /*</form>= {onSubmit} */>Submit</Button>
                

           </form>
        </div>
    )
}

export default SingleComment
