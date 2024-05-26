import {PropsWithChildren} from "react";

export default function Container({children}: PropsWithChildren) {
    return(
        <div className={`container py-[4.375rem]`}>{children}</div>
    )
}