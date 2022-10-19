import { Component } from "react";
import "./confirm.css";

class Confirm extends Component{
    render (){
        return(
            <div className="confirm-wrapper confirm-visible">
                <div className="confirm-container">
                    <div className="confirm-title-container">
                        <span>This is where our title should go</span>
                    </div>
                       <div className="confirm-content-container">
                         <p>This is where our content should heho</p>
                       </div>
                       <div className="confirm-buttons-container">
                         <button className="confirm-cancel">Cancel</button>
                         <button className="confirm-ok">Okay</button>
                       </div>
                    </div>
                </div>
        );
    }
}
export default Confirm;