const User = require('./../../app/models/user')

describe("Add getters", () => {
    test('Add getters', () => {
        const user = new User(1, "eri_gonza", "Erick", "Bio")
        expect(user.getUsername).toBe("eri_gonza")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpload).not.toBeUndefined()
      });
  })
