import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id:number
    name:string
    slug:string
}
interface fetchGenre{
    count:number
    results:Genre[]
}
const useGenre=()=>{
    const[genre,setgenre]=useState<Genre[]>([]);
    const[error,seterror]=useState('');
    const[loading,setloading]=useState(false);
   
    useEffect(()=>{
        const controller=new AbortController();
        setloading(true)
        apiClient.get<fetchGenre>('/genres',{signal:controller.signal}).then((res)=>{setgenre(res.data.results); setloading(false)}).catch((err)=>{
            if(err instanceof CanceledError) return;
            seterror(err.message);
            setloading(false);
        });
          
        return ()=>controller.abort();
    },[])
    return {genre,error,loading};
}
export default useGenre;