const db = require("../../src/database/fakeDB");

const CreditService = require("../../src/services/CreditService");
const UsageService = require("../../src/services/UsageService");

beforeEach(() => {
  // Limpe os dados do banco fake antes de cada teste
  // (users e plans)
});

describe("Integration - Overage Block", () => {
  test("deve bloquear o usuário quando atingir -100 créditos", () => {
    // Crie uma instância do CreditService

    // Crie uma instância do UsageService passando o CreditService

    // Crie um usuário com:
    // id (ex: "u1")
    // poucos créditos (ex: 5)
    // não bloqueado (isBlocked: false)

    // Crie um plano que permita overage (saldo negativo)

    // Execute um loop chamando registerUsage até o usuário ser bloqueado

    // Verifique se o usuário foi bloqueado

    // Verifique se os créditos são menores ou iguais a -100
  });
});