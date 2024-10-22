"use client"
// clientで利用するものは上記のように明示する必要あり
// clientの処理が必要なものについてはこのファイルに切り出した
import { useState, useEffect } from "react"

export default function SSR() {
    const [state, setState] = useState(undefined);
    // clientで利用するものはuseEffectで宣言する
    useEffect(() => {
        setState('client loaded');
    },[])

    return (
        <>
            <div>{state}</div>
        </>
    )
}
