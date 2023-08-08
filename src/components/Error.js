import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError()
    console.log(err)

    return (
        <div style={{margin:'5%', textAlign:'center'}}>
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong....!</h2>
            <h4>{ err.status +" : "+ err.statusText }</h4>
            <h5><a href="/">-- Go Home --</a></h5>
        </div>
    )
}

export default Error;