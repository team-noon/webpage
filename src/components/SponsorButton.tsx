interface sponsorButtonInterface{
    children : JSX.Element | string
    href : string
    className : string
    size : number
}

export default function SponsorButton({children, href, className, size} : sponsorButtonInterface) : JSX.Element{
    return (<a className={`absolute hover:cursor-pointer flex items-center justify-center hover:scale-125 transition-all duration-150 ${className}`} style={{width: `${size*4}px`}} href={href}>
        {children}
    </a>)
}