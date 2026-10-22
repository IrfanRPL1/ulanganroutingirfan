import { ReactNode } from "react";

type Props = {
    children : ReactNode;
    className : string;
}
const Card = ({children, className }: Props) => {
    return (
        <div className={`bg-white shadow-md rounded-lg 
        p-4 ${className}`}>
            {children}
        </div>
    );
}
export default Card;