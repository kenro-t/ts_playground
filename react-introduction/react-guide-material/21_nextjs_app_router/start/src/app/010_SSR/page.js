"use client"
// clientで利用するものは上記のように明示する必要あり

import { useEffect, useState } from "react"

export default function SSR() {
    const [state, setState] = useState(undefined);
    // clientで利用するものはuseEffectで宣言する
    useEffect(() => {
        setState('client loaded');
    },[])
    return (
        <>
            <div>SSR Page</div>
            <div>{state}</div>
        </>
    )   
}

// appディレクトリのディレクトリでルーティングできる