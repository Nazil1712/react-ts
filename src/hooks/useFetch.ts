import { useEffect, useState } from "react";

interface FetchState<T> {
    data : T | null;
    loading: boolean;
    error: string | null
}


export default function useFetch<T>(url:string): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data : null,
        loading: true,
        error: null
    })

    // Logic to fetch
    /* useEffect(()=>{
        fetch(url)
    }) */


    return state;
}
