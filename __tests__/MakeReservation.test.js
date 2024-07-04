import makeReservation from "../functions";

describe("Testing the Make Reservation Function", () => {

    it("When function called, return total seats remaining", () => {
        expect(makeReservation(2, 10)).toBe(8)
    })

    it("Number of guests cannot be 0", () => {
        expect(
            () => {
                makeReservation(0, 10)
            }
        ).toThrow("Invalid input, guests cannot be 0")
    })

    it("If number of guests is negative, throw an error", () => {
        expect(
            () => {
                makeReservation(-23, 10)
            }
        ).toThrow("Invalid input, must provide a positive number")
    })

    it("If number of guests is more than 6, throw an error", () => {
        expect(
            () => {
                makeReservation(8, 10)
            }
        ).toThrow("Invalid input, guests cannot be more than 6")
    })

    it("If number of guests is more than 6 available space, throw an error", () => {
        expect(
            () => {
                makeReservation(4, 2)
            }
        ).toThrow("No available seats for reservation")
    })

})