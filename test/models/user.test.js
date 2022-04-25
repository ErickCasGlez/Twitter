const User = require('./../../app/models/user')

describe("Unit test for User class", () => {
    test('Fechat', () => {
        const user = new User(1, "eri_gonza", "Erick", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("eri_gonza")
        expect(user.name).toBe("Erick")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpload).not.toBeUndefined()
    });
  })