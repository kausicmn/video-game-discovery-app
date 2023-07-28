import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface fetchdata<T>{
    count:number
    results:T[]
}
const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[])=>{
    const[data,setdata]=useState<T[]>([]);
    const[error,seterror]=useState('');
    const[loading,setloading]=useState(false);
   
    useEffect(()=>{
        const controller=new AbortController();
        setloading(true)
        apiClient.get<fetchdata<T>>(endpoint,{signal:controller.signal,...requestConfig}).then((res)=>{setdata(res.data.results); setloading(false)}).catch((err)=>{
            if(err instanceof CanceledError) return;
            seterror(err.message);
            setloading(false);
        });
          
        return ()=>controller.abort();
    },deps?[...deps]:[])
    return {data,error,loading};
}
export default useData;