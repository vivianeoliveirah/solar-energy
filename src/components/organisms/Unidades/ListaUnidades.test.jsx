import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListaUnidades from "./ListaUnidades";
import { BrowserRouter } from "react-router-dom";

function renderComponent() {
  render(<ListaUnidades />, { wrapper: BrowserRouter });
}

describe("Lista de Unidade", () => {
  test("se o componente é renderizado corretamente: com título “Lista de unidades:", async () => {
    renderComponent();
    const titulo = await screen.findByRole("heading", {
      name: "Lista de unidades:",
    });

    expect(titulo).toBeInTheDocument();
  });
});

test("se a tabela é renderizada com o cabeçalho correto", async () => {
  renderComponent();
  const cabecalho = await screen.findByRole("row", {
    name: "ID Apelido Local Marca Modelo",
  });

  expect(cabecalho).toBeInTheDocument();
});

test.only("se a primeira linha da tabela é rendeizada corretamente (criar mock da API)", async () => {
  renderComponent();
  const name = await screen.findByText("abc");
  expect(name).toBeInTheDocument();
});

/*
{
    id: "abc",
    apelido: "Padaria São Luiz",
    local: "Rua 1237",
    marca: "Marca 1",
    modelo: "Modelo 1",
    ativa: true,
  },*/

//testar comportamento do botão “Editar”

//testar comportamento do botão “Remover”

//testar comportamento do botão “Nova Unidade”
