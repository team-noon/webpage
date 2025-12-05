import { useState } from "react"

interface sponsorButtonInterface{
    children : JSX.Element | string
    href : string
    className : string
    size : string
}

export default function SponsorButton({children, href, className, size} : sponsorButtonInterface) : JSX.Element{
    const [rotation, setRotation] = useState((Math.random() - 0.5) * 10)

    const [hovered, setHovered] = useState(false)

    return (<a onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{ setRotation((Math.random() - 0.5) * 10); setHovered(false)}} className={`absolute hover:cursor-pointer flex items-center justify-center hover:scale-125 transition-all duration-150 ${className}`} style={{width: size, rotate: hovered ? `${rotation}deg` : "0deg"}} href={href}>
        {children}
    </a>)
}