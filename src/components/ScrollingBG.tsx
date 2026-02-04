import { useState } from "react"

interface ScrollingBGInterface {
    windowWidth: number
}


export default function ScrollingBG({ windowWidth }: ScrollingBGInterface): JSX.Element {
    const [offset, setOffset] = useState(0)

    /*setInterval(() => {
        setOffset(offset+0.1)
    }, 1000 / 100)*/

    return (<div className="absolute top-[50%] flex scrollingBG *:m-0 *:p-0 m-0 p-0">

        {/*<span className="flex -translate-y-[50%] -translate-x-[100vw]">
            {[...Array(Math.ceil(windowWidth / 250) + 2)].map((x, i) =>
                <img src="/pictures/logos/noonLogoLight.webp" width={"250px"} />
            )}

        </span>
        <span className="flex -translate-y-[50%]" style={{ transform: `translate(${offset}px, 0px)` }}>
            {[...Array(Math.ceil(windowWidth / 250) + 2)].map((x, i) =>
                <img src="/pictures/logos/noonLogoLight.webp" width={"250px"} />
            )}

        </span>*/}

        


    </div>)
}