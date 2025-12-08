import { FaAngleDoubleDown } from "react-icons/fa";
import { Color } from "../colors";

interface ScrollDown{
    scrollOffset : number
    disappear : number
    color : Color
}


export default function ScrollDown({scrollOffset, disappear, color} : ScrollDown) : JSX.Element {
    return (<a id="scrollDown" href="/#about" className="absolute bottom-16 right-10 text-lg font-light font-mono font-stretch-50%  flex items-center hover:cursor-pointer" title="Scroll down!" style={{opacity: Math.max(0,  1-scrollOffset/disappear)}}>
            <FaAngleDoubleDown size={"35px"} color={color.hex} id="scrollDown"/>
        </a>)
}