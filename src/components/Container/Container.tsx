import {PropsWithChildren} from "react";

export default function Container({children}: PropsWithChildren) {
    return(
        <div className={`w-[78.125rem] max-w-full mx-auto px-[3.125rem] py-[4.375rem]`}>{children}</div>
    )
}