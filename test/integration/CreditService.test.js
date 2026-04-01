const CreditService = require("../../src/services/CreditService");

describe("CreditService", () => {
  let service;
  let user;
  let plan;

  beforeEach(() => {
    // Crie uma nova instância do serviço antes de cada teste
    service = new CreditService();
    user = {id: 1, credits: 50, isBlocked: false};
    plan = {overageAllowed: true}

    // Defina um usuário padrão com:
    // id: 1
    // credits: 50
    // isBlocked: false

    // Defina um plano padrão que permite overage (saldo negativo)
  });

  test("deve consumir o crédito normalmente", () => {
    // Execute o método consumeCredits consumindo 20 créditos
    service.consumeCredits(user, 20, plan)
    // Verifique se os créditos do usuário foram reduzidos corretamente
    expect(user.credits).toBe(30);
  });

  test("deve permitir o limite negativo", () => {
    // Ajuste os créditos do usuário para um valor baixo (ex: 10)
    user.credits = 10;
    // Consuma uma quantidade maior do que o saldo disponível
    
    // Verifique se o saldo ficou negativo corretamente
  });

  test("deve bloquear o usuário em -100", () => {
    // Defina o saldo do usuário próximo do limite negativo (ex: -90)

    // Consuma créditos suficientes para ultrapassar -100

    // Verifique se o usuário foi bloqueado (isBlocked = true)
  });

  test("deve lançar erro se estiver bloqueado", () => {
    // Marque o usuário como bloqueado

    // Tente consumir créditos

    // Verifique se uma exceção (erro) é lançada
  });

  test("should throw if no overage", () => {
    // Configure o plano para NÃO permitir overage

    // Defina um saldo menor que o valor a ser consumido

    // Tente consumir créditos

    // Verifique se uma exceção (erro) é lançada
  });
});