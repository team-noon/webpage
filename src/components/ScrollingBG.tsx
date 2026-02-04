import { useState } from "react"

interface ScrollingBGInterface {
    windowWidth: number
}


export default function ScrollingBG({ windowWidth }: ScrollingBGInterface): JSX.Element {
    const [offset, setOffset] = useState(0)
    setInterval(() => {
        setOffset(offset+0.1)
    }, 1000 / 100)

    return (<div className="absolute top-[50%]">

        <div className="flex -translate-y-[50%]" style={{transform:`translate(${offset}px, 0px)`}}>
            {[...Array(Math.ceil(windowWidth/200)+2)].map((x, i) =>
                <img src="/pictures/logos/noonLogoLight.webp" width={"150px"}/>
            )}

        </div>
        <div className="flex -translate-y-[150%]">
            {[...Array(Math.ceil(windowWidth/200)+2)].map((x, i) =>
                <img src="/pictures/logos/noonLogoLight.webp" width={"250px"}/>
            )}

        </div>
        <div className="flex -translate-y-[250%]">
            {[...Array(Math.ceil(windowWidth/200)+2)].map((x, i) =>
                <img src="/pictures/logos/noonLogoLight.webp" width={"350px"}/>
            )}

        </div>

    </div>)
}