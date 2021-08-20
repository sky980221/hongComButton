const makeRoom = (name, rooms) => {
    if (rooms.find(e => e == name) == undefined) {
        return true
    }
    else {
        return false
    }
}

module.exports = makeRoom