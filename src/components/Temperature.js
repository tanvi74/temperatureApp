import React from 'react';
import "./Temperature.css";

class Temperature extends React.Component{
    render(){
        const temp = this.props.temp;
        let hotClass;
        if(temp>=100){
            hotClass = 'too-hot'
        }
        return(
            <div className="team-input">
                <legend className={hotClass}>Enter Temperature in : {this.props.scale}</legend>
                <input
                    value = {temp}
                    onChange={(e)=>{this.props.handleChange(e,this.props.scale)}}
                />
            </div>
        )
    }
}

export default Temperature;