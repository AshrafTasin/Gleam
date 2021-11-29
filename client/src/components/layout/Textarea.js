import React, { Component } from "react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';


export class Textarea extends Component {
  
  render() {

      return (
          <div className="Textarea container">
              <h6>Using CKEditor 4 in React</h6>
              <br/>
              <CKEditor
              editor={ClassicEditor}
              onReady={editor=>{

              }}
              config={
                {
                  ckfinder:{
                    uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
                  }
                }
              }
> </CKEditor>
          </div>
      );
  }
}

export default Textarea;
