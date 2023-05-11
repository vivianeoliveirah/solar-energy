import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Unidades from "./Unidades";
import { BrowserRouter } from "react-router-dom";

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

function renderComponent() {
  render(<Unidades />, { wrapper: BrowserRouter });
}

describe("Unidade", () => {
  test("se o componente é renderizado corretamente: com título Unidades", async () => {
    renderComponent();
    const titulo = await screen.findByRole("heading", { name: "Unidades" });

    expect(titulo).toBeInTheDocument();
  });

  test("ao clicar no botão “Nova unidade” deve renderizar o cadastro de unidade", async () => {
    const user = userEvent.setup();
    renderComponent();

    const button = screen.getByRole("button", { name: "Nova Unidade" });
    await user.click(button);

    const titulo = screen.getByRole("heading", {
      name: "Cadastro de Unidade Geradora",
    });
    expect(titulo).toBeInTheDocument();
  });
});
