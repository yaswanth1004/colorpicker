import {Component} from 'react';
class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state={toggle:false}
    }
    changecolor=(event)=>{
        const main=document.getElementById("main");
        main.style.backgroundColor=this.props[event.target.id];
        console.log(this.props[event.target.id]);
        this.setState({toggle:false});
    }
    showoptions=()=>{
        this.setState(
            {toggle:true}
        );
    }
    render(){
        return(
            <div id='main'>
                 <h1>Color Picker</h1> {/* Add the heading */}
                {(this.state.toggle) ? <div id='colors'>
                    <div style={{backgroundColor:this.props.color1}} onClick={this.changecolor} className='pick' id='color1'></div>
                    <div style={{backgroundColor:this.props.color2}} onClick={this.changecolor} className='pick' id='color2'></div>
                    <div style={{backgroundColor:this.props.color3}} onClick={this.changecolor} className='pick' id='color3'></div>
                    <div style={{backgroundColor:this.props.color4}} onClick={this.changecolor} className='pick' id='color4'></div>
                    <div style={{backgroundColor:this.props.color5}} onClick={this.changecolor} className='pick' id='color5'></div>
                    <div style={{backgroundColor:this.props.color6}} onClick={this.changecolor} className='pick' id='color6'></div>
                    <div style={{backgroundColor:this.props.color7}} onClick={this.changecolor} className='pick' id='color7'></div>
                    <div style={{backgroundColor:this.props.color8}} onClick={this.changecolor} className='pick' id='color8'></div>
                    <div style={{backgroundColor:this.props.color9}} onClick={this.changecolor} className='pick' id='color9'></div>
                    <div style={{backgroundColor:this.props.color10}} onClick={this.changecolor} className='pick' id='color10'></div>
                    <div style={{backgroundColor:this.props.color11}} onClick={this.changecolor} className='pick' id='color11'></div>
                    <div style={{backgroundColor:this.props.color12}} onClick={this.changecolor} className='pick' id='color12'></div>
                    <div style={{backgroundColor:this.props.color13}} onClick={this.changecolor} className='pick' id='color13'></div>
                    <div style={{backgroundColor:this.props.color14}} onClick={this.changecolor} className='pick' id='color14'></div>
                    <div style={{backgroundColor:this.props.color15}} onClick={this.changecolor} className='pick' id='color15'></div>
                    <div style={{backgroundColor:this.props.color16}} onClick={this.changecolor} className='pick' id='color16'></div>
                </div> : <div></div>}
                <button onClick={this.showoptions}>Pick a color</button>
            </div>
        )
    }
}
export default ColorPicker; 