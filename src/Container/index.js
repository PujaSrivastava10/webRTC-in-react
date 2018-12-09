import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {changeButtonColour} from '../Action';


const btnStyle = {
    "display" : "block",
    "margin" : "10px auto"
}

const videoStyle = {
    "display" : "block",
    "margin" : "10px auto",
    "width" : "50%",
    "height" : "auto"
}

class VideoWebCam extends Component {
    componentDidMount(){
        this.props.changeButtonColour("primary", "stop")
        var constraints = { audio: true, video: true };
        window.navigator.mediaDevices.getUserMedia(constraints)
            .then((MediaStream) => {
                this.video.srcObject =  MediaStream;
                this.video.onloadedmetadata = (e) => {
                this.video.play();
                };
            }).catch(function(err) { console.log(err.name + ": " + err.message); });
    }

    handleOnClick = () =>{
        var constraints = { audio: true, video: true };
        if(this.btn.props.color === "primary" && this.btn.props.children === "stop") {
            this.props.changeButtonColour("secondary" , "play" );
            window.navigator.mediaDevices.getUserMedia(constraints)
                .then((MediaStream) => {
                    this.video.srcObject =  MediaStream;
                    this.video.onloadedmetadata = (e) => {
                    this.video.pause();
                    };
                }).catch(function(err) { console.log(err.name + ": " + err.message); });
          }
        else{
            this.props.changeButtonColour("primary" , "stop");
            window.navigator.mediaDevices.getUserMedia(constraints)
                .then((MediaStream) => {
                    this.video.srcObject =  MediaStream;
                    this.video.onloadedmetadata = (e) => {
                    this.video.play();
                    };
                }).catch(function(err) { console.log(err.name + ": " + err.message); });
        }
    }

    render() {
        return (
        <React.Fragment>
            <video style={videoStyle} ref={video => {this.video = video} } autoplay="autoplay"> </video>
            <Button style={btnStyle} color={this.props.data.color} ref={(btnRef)=>this.btn = btnRef} variant="raised" onClick={this.handleOnClick}>
                {this.props.data.text}
            </Button>
        </React.Fragment>
        );
    }
}``

function mapStateToProps(state){
    return{
        data:state
    }
}
  
export default connect(mapStateToProps,{changeButtonColour})(VideoWebCam);



