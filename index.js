function findMatching(drivers, driverName) {
    return drivers.filter(function (name) {
        return name.toLowerCase() === driverName.toLowerCase()
    })
}

function fuzzyMatch(drivers, letterMatch) {
    return drivers.filter(function (match) {
        return match.toLowerCase().indexOf(letterMatch.toLowerCase()) === 0
    })
}

function matchName(drivers, driverName) {
    return drivers.filter(record => record.name === driverName)
}