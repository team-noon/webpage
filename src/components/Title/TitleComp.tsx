import { useEffect, useState } from "react"
import "./TitleComp.css"

const text = "www.no-on.hu"

const End: JSX.Element = (<>
    <span id="titleSubDomain">www.</span>
    <span id="titleFirstHalf">no</span>
    <span id="titleDash">-</span>
    <span id="titleSecondHalf">on</span>
    <span id="titleTopDomain">.hu</span>
</>)

const timeDelay : number = 5 // number of cycles before it actually starts typing it
const typeSpeed : number = 150 // in ms

export default function TitleComp() {
    const [curStep, setCurStep] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurStep(prev => {
                if (prev - timeDelay< text.length) {
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

        <div id="titleText" className=" md:text-9xl text-5xl bg-clip-text text-transparent select-none font-stretch-50% bg-gradient-to-r from-primary-300 to-primary-700 font-mono -translate-y-44 flex items-center" >
            
            {curStep -timeDelay< text.length
                ? (<>{text.substring(0, curStep - timeDelay)}</>)
                : End}
        </div>
    
    )
}