const db = require("../../src/database/fakeDB");

const PlanService = require("../../src/services/PlanService");

beforeEach(() => {
  // Limpe os dados do banco fake antes de cada teste
  // (users e plans)
});

describe("Integration - Monthly Reset", () => {
  test("deve resetar os créditos e desbloquear o usuário", () => {
    // Crie uma instância do PlanService

    // Crie um usuário com:
    // id (ex: "u1")
    // créditos negativos (ex: -120)
    // usuário bloqueado (isBlocked: true)

    // Crie um plano com:
    // quantidade de créditos mensais (ex: 100)

    // Execute o método applyMonthlyReset passando o usuário e o plano

    // Verifique se os créditos do usuário foram resetados para o valor do plano

    // Verifique se o usuário foi desbloqueado (isBlocked = false)
  });
});