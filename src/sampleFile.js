class ClubEntry {

    static isOldEnough (age) {
        return age >= 21
    }

    static fbList (time, isPresent) {
        if (time <= 10 && isPresent === true) {
            return 'free'
        }
        else return 'hasToPay'
    }

    static clubEntryPrice (sex, age) {
        if (sex === 'female' && age >= 18) {
            return 0
        } else {
            if (age >= 18)
                return 10
            return 'noAccess'
        }
    }
}

module.exports = { ClubEntry };