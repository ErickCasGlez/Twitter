const User = require('./../../app/models/user')

describe("Add setters", () => {
    test('Add setters', () => {
        const user = new User(1, "eri_gonza", "Erick", "Bio")
        user.setUsername = "Erick"
        expect(user.username).toBe("Erick")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
      });
  })
