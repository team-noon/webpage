
export enum svgs{
    monoLogo = "/pictures/logos/noonLogoLight.webp",
    Logo = "/pictures/logos/noonLogoDark.svg"
}

export default function SVG({svgType, size, id} : {svgType : svgs, size : number, id? : string}){
    return (<>
        <img src={svgType} alt="SVG" height={size} width={size}  id={id}/>
    </>)
}