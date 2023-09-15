import { useEffect, useState } from "react";

const useOnline = () =>{
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        //logic
        window.addEventListener('online', ()=>{
            console.log("online");
            setIsOnline(true);
        });
        window.addEventListener('offline', ()=>{
            console.log("offline");
            setIsOnline(false);
        })
    },[])

    return isOnline;
}

export default useOnline;