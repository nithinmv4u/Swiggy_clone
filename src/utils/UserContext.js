import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "dummy",
        email: "dummy.dummy.com",
    },
    status:["offline", "red"]
})

export default UserContext;