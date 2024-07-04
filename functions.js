
const makeReservation = (numGuests, maxCapacity) => {

    if (numGuests === 0) {
        throw new Error("Invalid input, guests cannot be 0")
    }
    if (numGuests < 0) {
        throw new Error("Invalid input, must provide a positive number")
    }
    if (numGuests > 6) {
        throw new Error("Invalid input, guests cannot be more than 6")
    }
    if (numGuests > maxCapacity) {
        throw new Error("No available seats for reservation")
    }

    return maxCapacity - numGuests

}

export default makeReservation