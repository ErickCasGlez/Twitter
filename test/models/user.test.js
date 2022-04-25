describe("Unit test fo mission commander class", () => {
    test('Create a mission commander object', () => {
      const myMissionCommander = new MissionCommander("Yo")
      expect(myMissionCommander.name).toBe("Yo");
    });
  })