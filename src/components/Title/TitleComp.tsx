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

const timeDelay : number = 15

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
        }, 150) // 200ms

        return () => clearInterval(interval)
    }, [])

    return (
        <div id="titleText" >
            
            {curStep -timeDelay< text.length
                ? (<>{text.substring(0, curStep - 15)}</>)
                : End}
        </div>
    )
}