interface memberCard{
    imgSource : string
    description: string
}

export default function Member({imgSource, description} : memberCard) : JSX.Element{
    return (<div className="aspect-square relative flex items-center justify-center w-40 ">
        <img src={imgSource}  className="absolute bg-primary-500 rounded-full w-40 z-10 aspect-square hover:opacity-0 duration-75"/>
        <div className="transition-all bg-primary-950 rounded-full flex items-center justify-center w-40 aspect-square">
            <div className="max-w-36">{description}</div>
        </div>
    </div>
    )
}