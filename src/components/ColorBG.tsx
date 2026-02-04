export default function ColorBG({isMobile}:{isMobile : boolean}): JSX.Element {


    return (<>
        <div className="absolute backdrop-blur-[128px] -z-10 w-screen h-screen"></div>
        <div className="BGColor BGColor-1 -z-20"></div>
        <div className="BGColor BGColor-2 -z-20 "></div>
        <div className="BGColor BGColor-3 -z-20"></div>
        {!isMobile ? (
            <>
        <div className="smallBGColor smallBGColor-1 -z-20"></div>
        <div className="smallBGColor smallBGColor-2 -z-20 "></div>
        <div className="smallBGColor smallBGColor-3 -z-20"></div>
        </>): ""}
        </>
    )
}