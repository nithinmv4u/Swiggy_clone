const Authentication = (isLogged) => {
    console.log("auth is logged: ", isLogged);
    return (
        <>
        {
            isLogged ? <button>Login</button> : <button>Logout</button>
        }        
        </>
    );
}


export default Authentication;