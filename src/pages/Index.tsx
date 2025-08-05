import { lazy, useEffect, useState } from "react";
import Topbar from "../components/TopbarMain";
import ScrollDown from "../components/ScrollDown";
import colors from "../colors";
import TitleComp from "../components/Title/TitleComp";

const Experience = lazy(() => import('../components/Experience'))
const Background = lazy(() => import("../3dcomponents/Background"))
let lastHash = ""

function Index(): JSX.Element {
    const [offset, setOffset] = useState(0)
    const [maxOffset, setMaxOffset] = useState(0)
    const [scrollMaxHeight, setScrollMaxHeight] = useState(1)

    // window dimension
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [isMobile, setIsMobile] = useState(windowDimensions.height > windowDimensions.width || windowDimensions.width < 600 || windowDimensions.height < 600)

    const handleResize = () => {
        setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        setIsMobile(windowDimensions.height > windowDimensions.width || windowDimensions.width < 600 || windowDimensions.height < 600)

    };

    const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setScrollMaxHeight(event.currentTarget.scrollHeight - event.currentTarget.clientHeight)

        setOffset(event.currentTarget.scrollTop)

        if(event.currentTarget.scrollTop > maxOffset){
            setMaxOffset(event.currentTarget.scrollTop)
        }
    }


    // use effect for handling resizing
    useEffect(() => {

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };


    });

    // use effect for handling hash change
    useEffect(() => {
        const handleHashChange = (hash: string, force: boolean) => {
            if ((!hash && hash != "") || (hash === lastHash && force == false)) return;

            let element
            if (hash == "") {
                element = document.getElementById("index");
            }
            else {
                element = document.getElementById(hash);
            }

            lastHash = hash;


            if (element) {
                history.pushState(null, "", `#${hash}`); // Update URL without triggering default jump
                element.scrollIntoView({ behavior: "smooth", block: "start" });

            }
        };

        const checkHash = () => {


            const hash = window.location.hash.substring(1);
            handleHashChange(hash, false);
        };

        // Intercept anchor tag clicks to prevent instant jump
        const interceptAnchorClicks = (event: MouseEvent) => {
            const target = event.target as HTMLAnchorElement;

            if (target.tagName === "A" && (target.hash || target.hash == "") && target.id == "topbar") {
                event.preventDefault(); // Stop default hash jump
                handleHashChange(target.hash.substring(1), true); // Manually smooth scroll
                return
            }
            if (target.tagName === "svg" && target.id == "indexButton") {
                event.preventDefault()
                handleHashChange("", true)
                return
            }
        };

        window.addEventListener("hashchange", checkHash);
        document.addEventListener("click", interceptAnchorClicks); // Catch clicks

        checkHash(); // Run on first load if there's a hash

        return () => {
            window.removeEventListener("hashchange", checkHash);
            document.removeEventListener("click", interceptAnchorClicks);
        };
    }, []);



    return (

        <div className="relative scheme-only-dark">
            <Topbar scrollOffset={offset} appear={150} isMobile={isMobile} />
            <div className="max-h-screen max-w-screen min-h-screen min-w-screen overflow-y-auto  absolute z-10  top-0" id="content" onScroll={handleScroll}>
                {/* TITLE SCREEN */}
                <div className="flex place-content-center items-center relative min-h-screen" id="index">
                    <div className="md:text-9xl text-5xl bg-clip-text text-transparent select-none font-stretch-50% bg-gradient-to-r from-primary-300 to-primary-700 font-mono -translate-y-44 ">
                        <TitleComp/>
                    </div>
                    <ScrollDown scrollOffset={offset} disappear={100} color={colors.primary500} />
                </div>
                {/* the actual content */}
                <div className="*:border-t *:border-surface-900  *:text-primary-100 *:text-justify *:pt-12 *:items-center *:flex *:flex-col *:rounded-t-3xl *:min-h-screen">
                    {/* ABOUT US SECTION */}
                    <div className="bg-surface-700/60 translate-y-5 backdrop-blur-xl" id="about">
                        <div className="font-mono underline underline-offset-2 text-4xl my-8">
                            About Us
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-sm md:text-lg pb-8">
                            We are a RoboCup team representing Hungary. Our team formed in 2025 and our first competition will be the Humanoid kid size robot soccer competition in the summer of 2026.
                        </div>
                    </div>
                    {/* OUR PREVIOUS COMPETITIONS - HISTORY */}
                    <div className="  translate-y-5" id="docs">
                        <div className="font-mono underline underline-offset-2 text-4xl my-8">
                            A bit about our robot
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-sm md:text-lg ">

                        </div>
                    </div>
                    {/* FOR SPONSORS SECTION */}
                    <div className="bg-surface-900/80 backdrop-blur-xl" id="contact">
                        <div className="font-mono underline underline-offset-2 text-4xl my-8">
                            Perks of being a sponsor include:
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-sm md:text-lg ">
                            <div>
                                <div>
                                    A spot on our T-Shirt
                                </div>
                                <div>
                                    Every Sponsor will get a spot on our T-Shirts that we will wear almost every day to the European and the International rounds of the competitions.
                                </div>
                            </div>
                            <div>
                                <div>
                                    A spot in our On Stage performance
                                </div>
                                <div>
                                    We will get a stickers that have the logos of our sponsors on them, and because we are making race cars this year we will put them on the cars like on the real F1 cars!
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Experience className="transition-none" width="100vw" height="100vh">
                <Background offset={offset} maxOffset={maxOffset} scrollMaxHeight={scrollMaxHeight}/>
            </Experience>
        </div>
    );
}

export default Index;