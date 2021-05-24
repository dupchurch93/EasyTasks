const CurrentDate = () => {

    const currentDate = () => {
        const currentDateString = new Date().toLocaleDateString()
        return (<span>{currentDateString}</span>)
    }

    return (
        <div className="font-semibold text-2xl">{currentDate()}</div>
    )
}

export default CurrentDate