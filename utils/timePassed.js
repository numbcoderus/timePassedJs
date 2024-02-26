const timePassed = async (date) => {
    let dateReal
    if (typeof date === 'string' || date instanceof String) {
        const parsedDate = new Date(date)
        if (isNaN(parsedDate.getTime())) {
            return false
        }

        dateReal = parsedDate
    } else if (date instanceof Date) {
        dateReal = date
    } else {
        console.log("not")
    }
    
    const currentTime = new Date()
    const timeDifference = currentTime - dateReal

    const seconds = Math.floor(timeDifference / 1000)
    const minutes = Math.floor(timeDifference / (1000 * 60))
    const hours = Math.floor(timeDifference / (1000 * 60 * 60))
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30))
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365))

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    } else if (seconds > 0) {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now'
    }
}

module.exports = timePassed