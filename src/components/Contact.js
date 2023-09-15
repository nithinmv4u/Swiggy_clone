import useOnline from "../utils/useOnline";

const Contact = () => {
    const [status, color] = useOnline() ? ['Online','green'] : ['Offline','red'];
    return (    
    <>
        <h2>This is Contact Page</h2>
        <h3 style={{color:color}}>You are {status}</h3>
    </>
    )    
}

export default Contact;