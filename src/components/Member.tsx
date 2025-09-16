import { FiGithub } from "react-icons/fi"
import { CiGlobe } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

interface memberCard {
    imgSource: string
    description: string
    name: string
    imgClass? : string
    github?: string
    instagram?: string
    website?: string
    isZeteny? :boolean
}

export default function Member({ instagram, github, imgSource, description, name, website, imgClass }: memberCard): JSX.Element {
    return (<div className="w-[350px] h-[475px] bg-secondary-950 flex flex-col items-center my-6 rounded-xl p-3 text-center">
        <div className="text-4xl font-extralight mb-5 mt-2">{name}</div>

        <div className="aspect-square  object-scale-down border rounded-full max-w-60 min-h-60  bg-tertiary-200 border-surface-950 overflow-hidden">
            <img src={imgSource} className={imgClass} />
        </div>
        {/*<img src={imgSource} className="aspect-square  object-scale-down border rounded-full size-64 bg-tertiary-200 border-surface-950 " /> */ }

        <div className="font-light max-w-[80%] mt-4">{description}</div>
        {github || instagram || website ? <div className="text-surface-400 flex-1/2 items-center flex">
            {github ? <a href={github}><FiGithub size={"25px"} className="mx-1" /></a> : null}
            {website ? <a href={website}><CiGlobe size={"25px"} className="mx-1" /></a> : null}
            {instagram ? <a href={instagram}><IoLogoInstagram size={"25px"} className="ml-4" /></a> : null}
        </div> : null}
    </div>
    )
}