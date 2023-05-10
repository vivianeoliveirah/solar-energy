import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Navbar from "./Navbar"; 
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
test("se o componente é renderizado corretamente: com logo e 3 botões/links", () => {
    render (<Navbar />, {wrapper: BrowserRouter});

    const logo = screen.getByRole("img", { name: /Solar Energy logo/i });
   expect(logo).toBeInTheDocument();


})



test.todo("se o botão da rota default inicia selecionado e os demais não selecionados")

test.todo("se a página é alterada corretamente quando clica em algum botão")

test.todo("se a página é alterada para a default quando clica no logo")
})