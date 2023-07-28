import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Platform{
    id:number;
    name:string;
    slug:string;
}
export interface Game{
    id:number,
    name:string,
    background_image:string
    parent_platforms:[{platform:Platform}]
    metacritic:number
}
interface fetch{
    count:number
    results:Game[]
}
const useGames= ()=>{
    const[games,setgames]=useState<Game[]>([]);
    const[error,seterror]=useState('');
    const[loading,setloading]=useState(false);
   
    useEffect(()=>{
        const controller=new AbortController();
        setloading(true)
        apiClient.get<fetch>('/games',{signal:controller.signal}).then((res)=>{setgames(res.data.results); setloading(false)}).catch((err)=>{
            if(err instanceof CanceledError) return;
            seterror(err.message);
            setloading(false);
        });
          
        return ()=>controller.abort();
    },[])
    return {games,error,loading};
}
export default useGames