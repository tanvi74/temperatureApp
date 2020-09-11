import React from 'react';
import BolilingVerdict from "./BolilingVerdict";
import Temperature from "./Temperature";

class Calculator extends React.Component {
    state = {
        scale: 'C',
        temp: 20
    }

    handleChange=(e,scale)=>{
        this.setState({
            scale : scale,
            temp : e.target.value
        })
    }


    render(){
        const temperature = this.state.temp;
        const scale = this.state.scale;
        let fTemp;
        let cTemp;
        if(scale === 'C'){
            // convert celcius to f
            fTemp = Math.round((temperature * 9 / 5) +32);
            // we dont need to convert C ... its already celcius
            cTemp = temperature;
        }else if(scale === 'F'){
            // convert f to celcius
            cTemp = Math.round((temperature - 32) * 5 / 9);
            fTemp = temperature;
        }

        return(
            <div>
                <Temperature scale='C' temp={cTemp} handleChange={this.handleChange}/>
                <Temperature scale='F' temp={fTemp} handleChange={this.handleChange}/>

                <BolilingVerdict temp={parseFloat(cTemp)}/>
            </div>

        )
    }
}

export default Calculator;