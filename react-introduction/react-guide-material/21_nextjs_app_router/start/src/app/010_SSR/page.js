// SSRの処理のみここで行い、clientの処理についてはClientCompに切り出した

import ClientComp from "./components/ClientComp";

export default function SSR() {
    return (
        <>
            <div>SSR Page</div>
            <ClientComp />
        </>
    )   
}