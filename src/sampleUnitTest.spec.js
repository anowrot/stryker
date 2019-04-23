const {ClubEntry} = require('./sampleFile');


describe('oldEnough', () => {
    it('returns true when input age is more than 21', () => {
        expect(ClubEntry.isOldEnough(21)).toBe(true)
    });

    it('returns false when input age is below 21', () => {
        expect(ClubEntry.isOldEnough(20)).toBe(false)
    });

    it('returns 0$ when input sex is female and age is more than 18', () => {
        expect(ClubEntry.clubEntryPrice('female', 18)).toBe(0)
    });

    it('returns "free" when time is before 12PM and is presnent on Fb list', () => {
        expect(ClubEntry.fbList(10, true)).toBe('free')
    });

    it('returns "hasToPay" when time is before 12PM and is not presnent on Fb list', () => {
        expect(ClubEntry.fbList(10, false)).toBe('hasToPay')
    });

    it('returns "hasToPay" when time is after 12PM', () => {
        expect(ClubEntry.fbList(11)).toBe('hasToPay')
    });


    it('returns 10$ when input sex is male and age is more than 18', () => {
        expect(ClubEntry.clubEntryPrice('male', 18)).toBe(10)
    });

    it('returns "noAccess" when input age is below 18', () => {
        expect(ClubEntry.clubEntryPrice('male', 17)).toBe('noAccess')
    });

    }
);

