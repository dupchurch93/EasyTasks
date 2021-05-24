const CurrentDate = () => {

    const currentDate = () => {
        const currentDateString = new Date().toLocaleDateString()
        return (<span>{currentDateString}</span>)
    }

    return (
        <div>{currentDate()}</div>
    )
}

export default CurrentDate