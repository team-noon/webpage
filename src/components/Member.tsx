interface memberCard{
    imgSource : string
    description: string
    name: string
    github?: string
    instagram?: string
}

export default function Member({instagram,github,imgSource, description, name} : memberCard) : JSX.Element{
    return (<div className="">
        <img src={imgSource}  className=""/>
        <div>{name}</div>
        <div className="">{description}</div>
        {github || instagram ? <div>

            asd
        </div> : null}
    </div>
    )
}