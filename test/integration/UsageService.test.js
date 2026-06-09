const UsageService = require("../../src/services/UsageService");

describe("UsageService", () => {
  let mockServicoCredito;
  let service;
  let user;
  let plan;

  beforeEach(() => {
    // Crie um mock do CreditService com o método consumeCredits
    mockServicoCredito = { consumeCredits: jest.fn()}
    // Crie uma instância do UsageService passando o mock
    service = new UsageService(mockServicoCredito)
    // Crie um usuário simples com id (ex: "1")
    user = {id:1}
    // Crie um plano vazio
    plan = {}
  });

  test("Deve chamar o serviço de crédito com custo de REPORT", () => {
    // Execute o método registerUsage com ação "REPORT"
    service.registerUsage(user, "EXPORT", plan)
    // Verifique se consumeCredits foi chamado com:
    // user, custo 10, e plan
    expect(mockServicoCredito.consumeCredits).toHaveBeenCalledWith(user, 25, plan);
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
   expect(() => service.registerUsage(user, "INVALID", plan)).toThrow()
  });
});