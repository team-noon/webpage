import { lazy, useEffect, useState } from "react";
import Topbar from "../components/TopbarMain";
import ScrollDown from "../components/ScrollDown";
import colors from "../colors";
import TitleComp from "../components/Title/TitleComp";
import Member from "../components/Member";
import Draggable from "../3dcomponents/Draggable";
import { RobotModel } from "../3dcomponents/Mockup assembly";
import SponsorButton from "../components/SponsorButton";

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

            if (target.tagName === "A" && (target.hash || target.hash == "") && (target.id == "topbar" || target.id=="scrollDown")) {
                event.preventDefault(); // Stop default hash jump
                handleHashChange(target.hash.substring(1), true); // Manually smooth scroll
                return
            }
            if (target.id == "indexButton") {
                event.preventDefault()
                handleHashChange("", true)
                return
            }
            if(target.id == "scrollDown"){
                event.preventDefault()
                handleHashChange("about", true)
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
                    <SponsorButton href="https://www.unitree.hu/" className="left-3 top-4/12 md:left-12" size={isMobile ? "128px" : "20vw"}>
                        <img src="/pictures/logos/infuze.png"/>
                    </SponsorButton>

                    <SponsorButton href="https://www.maxongroup.com/" size={isMobile ? "128px" : "20vw"} className="right-3 md:right-12 top-4/12">
                        <img src="/pictures/logos/maxon.png" />
                    </SponsorButton>

                    {/*<SponsorButton href="https://www.maxongroup.com/" size={isMobile ? 32 : 64} className="left-3 md:left-12 top-[45%] md:top-[70%]">
                        <img src="/pictures/logos/hestore.png" />
                    </SponsorButton> */}

                    <ScrollDown scrollOffset={offset} disappear={100} color={colors.primary500} />
                </div>
                {/* the actual content */}
                <div className=" *:border-surface-900 *:border-y-2 *:text-primary-100 *:text-justify *:pt-12 *:items-center *:flex *:flex-col  *:min-h-screen">
                    {/* ABOUT US SECTION */}
                    <div className="bg-surface-700/60 border-t rounded-t-2xl backdrop-blur-sm pb-10" id="about">
                        <div className="font-mono text-4xl my-8">
                            About Us
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-sm md:text-lg pb-8">
                            We are a RoboCup team representing Hungary. Our team formed in 2025 and our first competition will be the Humanoid kid size robot soccer competition in the summer of 2026.
                            <br /> <br />
                            We believe in open source software (and hardware) so you can access anything we do on <a href="https://github.com/team-noon" className="underline">our Github page</a>!
                            <br /> <br />
                            We look ahead to working on our robot from year to year making improvements and learning along the way.
                        </div>
                        <div className="text-4xl font-mono ">
                            Our members
                        </div>
                        <hr className="md:w-[600px] w-screen mb-10" />
                        <div className="max-w-screen md:w-3xl flex *:m-3 flex-wrap place-content-around">
                            <Member

                                imgSource="pictures/members/kara-crop.webp"
                                description="Multimedia and Creative Designer"
                                name="Ádám Kara"
                                website="http://adytm.eu/"
                                github="https://github.com/AdyStudios"
                                school="Óbuda University"
                            />
                            {/*<Member
                                imgSource="pictures/members/old/hema-no-bg.png"
                                description="Tactics Development and 3D Design"
                                name="Benedek Varga"
                                github="https://github.com/vBenii"
                            /> */}
                            <Member
                                imgSource="pictures/members/hema-crop.webp"
                                description="Electrical Design and Embedded Development"
                                name="Mátyás Nyilas"
                                github="https://github.com/Hema2-official"
                                school="University of Twente"
                            />
                            <Member
                                imgSource="pictures/members/somfa-crop.webp"
                                description="Web Development and Tactics Simulation"
                                name="Máté Somfai"
                                github="https://github.com/TheRealMattHUN"
                                school="Lovassy László Gymnasium"
                            />
                            <Member
                                imgSource="pictures/members/miki-crop.webp"
                                description="Web Development, Outreach, and Machine learning"
                                name="Miklós Varga"
                                github="https://github.com/Utelagazkodas"
                                school="Lovassy László Gymnasium"
                            />
                            <Member
                                imgSource="pictures/members/samu-crop.webp"
                                description="Electrical Design, Embedded Development and 3D design"
                                name="Sámuel Virgo"
                                github="https://github.com/samthedev32"
                                school="Lovassy László Gymnasium"
                            />
                            <Member
                                imgSource="pictures/members/zeti-crop.webp"
                                description="Tactics Development and 3D Design"
                                name="Zétény Fenyvesvölgyi"
                                github="https://github.com/Gaplaster3600"
                                isZeteny={true}
                                school="Krúdy Gyula Gymnasium"
                            />
                        </div>
                    </div>
                    {/* The yapp about our robot */}
                    <div className="border-y bg-surface-800/60 backdrop-blur-sm" id="docs">
                        <div className="font-mono  text-4xl my-8 text-center">
                            A Bit About Our Robot
                        </div>

                        <div className="max-w-screen md:w-4xl p-4 text-sm md:text-lg text-pink-50 font-normal">

                            <div>
                                <div className="font-semibold text-2xl text-center">Hardware</div>
                                <div className="mt-2">
                                    <div className="font-medium text-lg">Electronics</div>
                                    <p>
                                        We’re designing custom PCBs that will be mounted in both the head and body of the robot. For now, we’re prototyping on a development board to work out the quirks of the CPU, motors, and drivers.
                                    </p>
                                    <div className="font-medium mt-3 text-lg">Body</div>
                                    <p>
                                        The robot’s frame will use carbon fiber rods combined with custom 3D-printed parts (both FDM and SLA). The render you see in the website background (and below) is a mockup with roughly correct proportions, created primarily for balancing tests.
                                        <div className="flex items-center justify-center">
                                            <div className="bg-surface-950 border rounded-lg  w-[200px]  m-5">
                                                <Draggable>
                                                    <RobotModel rotation={[Math.PI / -3, 0, 0]} scale={[3, 3, 3]} position={[0, 0.2, 0]} />
                                                </Draggable>
                                            </div>
                                            <div className="w-[150px] text-left text-surface-300">
                                                Try Dragging him around!
                                            </div>
                                        </div>
                                    </p>
                                    
                                </div>
                                <div className="flex justify-center">
                                <a href="https://cad.onshape.com/documents/020d197daa00ade3be93673c/w/0c373a8929754e4d8a36e708/e/b81b2e91174ddea71b2f8e81" className="bg-primary-500/80 p-2 rounded-xl border backdrop-blur-sm backdrop">Check our 3D Models on Onshape!</a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="font-semibold text-2xl text-center mb-2">Tactics</div>
                                <p>
                                    We’re developing a <a href="https://github.com/team-noon/tactics-sim" className="underline">Tactics Simulation</a> tool to test and refine strategies that will control our robots during real competitions.
                                </p>
                                <div className="flex flex-wrap items-center justify-center m-2">
                                    <img src="/gifs/tacticsim.webp" className="w-[300px] rounded-2xl" />
                                    <div className="text-surface-300 text-center md:text-left md:p-2">
                                        <div className="underline ">Sneak peek of the tactics sim</div>
                                        <div className="max-w-[26rem]">
                                            Red - The Ball 
                                            <br />
                                            Green and Blue team playing against eachother, when their color changes that means they cant move.
                                            <br />
                                            The lines coming out of them represent their velocity
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="font-semibold text-2xl text-center mb-2">Balancing</div>
                                <p>
                                    To train our robot to walk and stay balanced—even under external forces—we’re building a custom Webots environment. This setup allows us to train a neural network for robust balance control.
                                    Explore the <a href="https://github.com/team-noon/balancing-sim" className="underline">source code here</a>.

                                    <div className="flex justify-center flex-wrap items-center mt-4">
                                        {/*<div className="aspect-video w-[450px] max-w-screen  flex items-center justify-center rounded-xl bg-gradient-to-tl from-surface-700 to-surface-950 border border-surface-950">
                                            * Video coming soon *
                                        </div>*/}
                                        <img className="h-64 rounded-xl border-2 border-surface-900" src="./gifs/robot-balancing.gif" />
                                        <div className="w-60 text-left mx-3 mt-3 text-surface-300">Early prototype of the robot balancing in Unity</div>
                                    </div>

                                </p>
                            </div>

                            <hr className="mt-8 border-surface-300 md:mx-8" />
                            <div className="my-8 text-center text-xl">
                                <a href="https://docs.google.com/document/d/1YPM1EzlZLIFmAyXTJZOxc3lrpaGzJnXO86ZKA5H6EsU/edit?usp=sharing" className=" bg-primary-500/80 p-2 rounded-xl border backdrop-blur-sm backdrop">Read more about us!</a>
                            </div>

                        </div>
                    </div>

                    {/* Contacts  */}
                    <div className="bg-surface-900/80 backdrop-blur-sm border-t" id="contact">
                        <div className="font-mono  md:text-5xl text-4xl my-8">
                            Contact
                        </div>
                        <div className="max-w-screen  md:w-4xl p-4 text-base text-justify md:text-center md:text-lg ">
                            <div className="md:text-2xl text-xl pb-3 text-center">
                                You can contact us at: 
                                <br /><a href="mailto:team@no-on.hu" className="text-primary-400">team@no-on.hu</a>  <br />
                                or <br />
                                <a href="mailto:robocup.noon@gmail.com" className="text-primary-400">robocup.noon@gmail.com</a>

                                <hr className="mx-20 my-4" />
                            </div>

                            We’d be happy to answer your questions — feel free to reach out!
                            <br />
                            <br />
                            We are currently looking for sponsors, in return we will put your logo on our shirt, on our website and in every piece of media we make. Since RoboCup is a huge international competition with a lot of like minded people it's a good opportunity for some publicity!
                        </div>
                    </div>

                </div>

                {/* FOOTER */}
                <div className="border-t-2 border-surface-500 bg-surface-900/80 backdrop-blur-sm  text-surface-500 pb-10 md:pb-0 md:mx-40">
                    <div className="font-mono text-center p-1">
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
