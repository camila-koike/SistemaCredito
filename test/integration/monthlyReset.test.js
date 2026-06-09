const db = require("../../src/database/fakeDB");

const PlanService = require("../../src/services/PlanService");

beforeEach(() => {
  db.users.clear();
  db.plans.clear();
});
describe("Integration - Monthly Reset", () => {
  test("deve resetar os créditos e desbloquear o usuário", () => {
    let servicoPlano = new PlanService();
    let user = {
      id: "u1",
      credits: -120,
      isBlocked: true
    };
    let plan = {monthlyCredits:100}
    servicoPlano.applyMonthlyReset(user,plan)
    expect(user.credits).toBe(100)
    expect(user.isBlocked).toBe(false)
  });
});