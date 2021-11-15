const Display = (props: any) => {
    return(
        <div>
            <h3>Current temperature: {props.weather} F&deg;</h3>
        </div>
    )
}

export default Display;