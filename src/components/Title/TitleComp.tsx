import { useEffect, useState } from "react"
import "./TitleComp.css"

const text = "team no-on"

const End: JSX.Element = (<>
    team no-on
</>)

const timeDelay: number = 5 // number of cycles before it actually starts typing it
const typeSpeed: number = 150 // in ms

export default function TitleComp() {
    const [curStep, setCurStep] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurStep(prev => {
                if (prev - timeDelay < text.length) {
                    return prev + 1
                } else {
                    clearInterval(interval)
                    return prev
                }
            })
        }, typeSpeed)

        return () => clearInterval(interval)
    }, [])

    return (

        <div className="flex items-center -translate-y-[30vh] z-10">
            <span
                id="titleText"
                className="
      md:text-8xl text-5xl font-mono select-none inline-block leading-[1.1]
      bg-gradient-to-r from-primary-300 to-primary-700
      text-transparent bg-clip-text
      [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]
    "
            >
                {curStep - timeDelay < text.length
                    ? (<>{text.substring(0, curStep - timeDelay)}</>)
                    : End}
            </span>
        </div>

    )

}