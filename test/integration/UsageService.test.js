const UsageService = require("../../src/services/UsageService");

describe("UsageService", () => {
  let creditServiceMock;
  let service;
  let user;
  let plan;

  beforeEach(() => {
    // Crie um mock do CreditService com o método consumeCredits

    // Crie uma instância do UsageService passando o mock

    // Crie um usuário simples com id (ex: "1")

    // Crie um plano vazio
  });

  test("Deve chamar o serviço de crédito com custo de REPORT", () => {
    // Execute o método registerUsage com ação "REPORT"

    // Verifique se consumeCredits foi chamado com:
    // user, custo 10, e plan
  });

  test("Deve chamar o serviço de crédito com custo de EXPORT", () => {
    // Execute o método registerUsage com ação "EXPORT"

    // Verifique se consumeCredits foi chamado com:
    // user, custo 25, e plan
  });

  test("Deve registrar o uso", () => {
    // Execute o método registerUsage com uma ação válida

    // Verifique se um log foi adicionado (tamanho da lista = 1)
  });

  test("Deve lançar erro para ação inválida", () => {
    // Execute o método registerUsage com uma ação inválida (ex: "INVALID")

    // Verifique se um erro é lançado com a mensagem "Invalid action"
  });
});