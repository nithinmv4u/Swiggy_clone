import React from "react";

class ProfileClass extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            count : 0,
        };
        console.log("constructor "+props.comp);
    }

    componentDidMount() {
        console.log("Component did mount "+this.props.comp);
    }

    render(){
        console.log("render "+this.props.comp);
        return(
            <div>
                <h2>Profile class</h2>
                <h4>Component : {this.props.comp}</h4>
                <h5>Count : {this.state.count}</h5>
                <button onClick = { () =>{
                    this.setState({
                        count : this.state.count+1,
                    })
                }}> + </button>
                <button onClick = { () =>{
                    this.setState({
                        count : this.state.count-1,
                    })
                }}> - </button>
            </div>
        )
    }  
}

export default ProfileClass;