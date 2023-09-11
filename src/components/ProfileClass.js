import React from "react";
import { json } from "react-router-dom";

class ProfileClass extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            count : 0,
            userInfo : {
                name : "",
                location: "",
                avatar_url : "",
            }
        };
        console.log("constructor "+props.comp);
    }

    async componentDidMount() {
        console.log("Component did mount "+this.props.comp);
        const githubToken = process.env.GITHUB_TOKEN;
        const data = await fetch("https://api.github.com/users/nithinmv4u",{
            headers: {
              Authorization: `token ${githubToken}`
            }
          }
        );
        console.log(data);
        const json = await data.json();
        this.setState({
            userInfo : json,
        })
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
                <h2>My Git Account</h2>
                <h3>Name:{this.state.userInfo.name}</h3>
                <h4>Location: {this.state.userInfo.location}</h4>
                <img src={this.state.userInfo.avatar_url} />
            </div>
        )
    }  
}

export default ProfileClass;