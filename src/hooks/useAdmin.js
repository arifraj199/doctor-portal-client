import { useEffect, useState } from "react";

const useAdmin = user=>{
    const [admin,setAdmin] = useState(false);
    const [adminLoader,setAdminLoader] = useState(true);

    useEffect( ()=>{
        const email = user?.email;
        if(email){
            fetch(`https://morning-fortress-41142.herokuapp.com/admin/${email}`,{
                method:"GET",
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>{
                setAdmin(data.admin);
                setAdminLoader(false);
            })
        }
    },[user])
    return [admin,adminLoader];
}

export default useAdmin;