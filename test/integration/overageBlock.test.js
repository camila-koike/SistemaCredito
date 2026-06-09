const db = require("../../src/database/fakeDB");

const CreditService = require("../../src/services/CreditService");
const UsageService = require("../../src/services/UsageService");

beforeEach(() => {
   db.users.clear();
   db.plans.clear();
});
describe("Integration - Overage Block", () => {
  test("deve bloquear o usuário quando atingir -100 créditos", () => {
    let servicoCredito = new CreditService();
    let servicoUso = new UsageService(servicoCredito)
    let user = {
      id: "u1",
      credits: 5,
      isBlocked: false
    };
    let plan = {monthlyCredits:100, overageAllowed: true}
    while(user.isBlocked==false){
      servicoUso.registerUsage(user, 'EXPORT', plan)
    }
    expect(user.isBlocked).toBe(true)
    expect(user.credits).toBeLessThanOrEqual(-100);    
  });
});