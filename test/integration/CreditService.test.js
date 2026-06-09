const CreditService = require("../../src/services/CreditService");

describe("CreditService", () => {
  let service;
  let user;
  let plan;
  let u;

  beforeEach(() => {
    service = new CreditService();
    user = {id: 1, credits: 50, isBlocked: false};
    plan = {overageAllowed: true}
  });

  test("deve consumir o crédito normalmente", () => {
    service.consumeCredits(user, 20, plan)
    expect(user.credits).toBe(30);
  });

  test("deve permitir o limite negativo", () => {
    service.consumeCredits(user, 60, plan)
    expect(user.credits).toBe(-10);
  });

  test("deve bloquear o usuário em -100", () => {
    service.consumeCredits(user, 160, plan)
    expect(user.isBlocked).toBe(true);
  });

  test("deve lançar erro se estiver bloqueado", () => {
    user.isBlocked = true;
    expect(  () => { service.consumeCredits(user, 160, plan) } ).toThrow();
  });

  test("should throw if no overage", () => {
    plan.overageAllowed = false;
    expect(  () => { service.consumeCredits(user, 160, plan) } ).toThrow();
  });
});