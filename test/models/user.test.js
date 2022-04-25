const User = require('./../../app/user')

describe("Unit test for User class", () => {
    test('Create an User Object', () => {
      const user = new User(1, "eri_gonza", "Erick", "Bio", "dateCreated", "lastUpload")
      expect(user.id).toBe(1)
      expect(user.username).toBe("eri_gonza")
      expect(user.name).toBe("Erick")
      expect(user.bio).toBe("Bio")
      expect(user.dateCreated).toBe("dateCreated")
      expect(user.lastUpload).toBe("lastUpload")
    });
  })