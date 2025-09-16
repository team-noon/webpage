import { lazy, useEffect, useState } from "react";
import Topbar from "../components/TopbarMain";
import ScrollDown from "../components/ScrollDown";
import colors from "../colors";
import TitleComp from "../components/Title/TitleComp";
import Member from "../components/Member";

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

        if (event.currentTarget.scrollTop > maxOffset) {
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
            <div className="max-h-[100dvh] max-w-screen min-h-[100dvh] min-w-screen overflow-y-auto  absolute z-10  top-0" id="content" onScroll={handleScroll}>
                {/* TITLE SCREEN */}
                <div className="flex place-content-center items-center relative min-h-screen" id="index">

                    <TitleComp />

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
                        <div className="max-w-screen lg:w-5xl grid ">
                            <Member imgSource="pictures/hema-no-bg.png" description="Electrical Design and Embedded Development" name="Nyilas Mátyás" github="https://github.com/Hema2-official" />
                            <Member imgSource="pictures/hema-no-bg.png" description="Web Development, Outreach, and Machine learning" name="Varga Miklós" github="https://github.com/Utelagazkodas" />
                            <Member imgSource="pictures/hema-no-bg.png" description="Electrical Design, Embedded Development and 3D design" name="Virgo Sámuel" github="https://github.com/samthedev32" />
                            <Member imgSource="pictures/hema-no-bg.png" description="Multimedia and Creative Designer" name="Kara Ádám" website="http://adytm.eu/" github="https://github.com/AdyStudios" />
                            <Member imgSource="pictures/hema-no-bg.png" description="Tactics Development and 3D Design" name="Varga Benedek" github="https://github.com/vBenii" />
                            <Member imgSource="pictures/hema-no-bg.png" description="Tactics Development and 3D Design" name="Fenyvesvölgyi Zétény" github="https://github.com/Gaplaster3600" />
                            <Member imgSource="pictures/hema-no-bg.png" description="Web Development" name="Somfai Máté" github="https://github.com/TheRealMattHUN" />
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
                        <div className="font-mono underline underline-offset-2 md:text-5xl text-4xl my-8">
                            Contact
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-base text-justify md:text-center md:text-lg ">
                            <div className="md:text-2xl text-xl pb-3 ">
                                You can contact us at: <a href="mailto:team@no-on.hu" className="text-primary-400">team@no-on.hu</a>

                                <hr className="mx-20" />
                            </div>

                            We’d be happy to answer your questions — feel free to reach out!
                            <br />
                            <br />
                            We are currently looking for sponsors, in return we will put your logo on our shirt, on our website AND on our robot. Since RoboCup is a huge international competition with a lot of like minded people it's a good opportunity for some publicity! 
                        </div>
                    </div>

                </div>

                {/* FOOTER */}
                <div className="border-t border-surface-300 text-surface-400 md:mx-40 h-2xl">
                    <div className="font-mono text-center p-2">
                        © {new Date().getFullYear()} Team Noon. All rights reserved.
                    </div>
                </div>

            </div>
            <Experience className="transition-none" width="100vw" height="100vh">
                <Background offset={offset} maxOffset={maxOffset} scrollMaxHeight={scrollMaxHeight} />
            </Experience>
        </div>
    );
}

export default Index;