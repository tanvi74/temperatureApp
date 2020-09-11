import React from 'react';
import "./temperature.css";

class Temperature extends React.Component{
    render(){
        const temp = this.props.temp;
        let hotClass;
        // let style;
        if(temp >= 100){
            // style = {
            //     color: "red",
            //     backgroundColor: "yellow",
            //     fontSize: 30
            // }
            hotClass = 'too-hot'
        }
        return(
            <div className="team-input">
                <legend className={hotClass}>Enter Temperature in : {this.props.scale}</legend> 
                {/* <legend style={style}>Enter Temperature in : {this.props.scale}</legend> */}
                <input
                    value = {temp}
                    onChange={(e)=>{this.props.handleChange(e,this.props.scale)}}
                />
            </div>
        )
    }
}

export default Temperature;