import "@testing-library/jest-dom";
const mockData = [
  {
    id: "abc",
    apelido: "Padaria São Luiz",
    local: "Rua 1237",
    marca: "Marca 1",
    modelo: "Modelo 1",
    ativa: true,
  },
  {
    id: "def",
    apelido: "Mercadinho Paraiba",
    local: "Rua 2",
    marca: "Marca 2",
    modelo: "Modelo 2",
    ativa: false,
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockData) })
);
