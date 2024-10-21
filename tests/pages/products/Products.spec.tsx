import Products from "@/app/products/page";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { http } from "msw";
import { env } from "@/config/env";

jest.mock("next/navigation", () => require("next-router-mock"));

const server = setupServer(
  http.get(`${env.apiBaseUrl}/produto`, () => {
    return Response.json({
      produtos: [
        {
          id: 1,
          descricao: "Bolacha",
          marca: "Trakinas",
          valor: 1.99,
          peso_gramas: 100,
          sabor: "morango",
        },
      ],
    });
  }),
  http.get(`${env.apiBaseUrl}/produto/1`, () => {
    return Response.json({
      produto: {
        id: 1,
        descricao: "Bolacha",
        marca: "Trakinas",
        valor: 1.99,
        peso_gramas: 100,
        sabor: "morango",
      },
    });
  })
);

describe("Products List Page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/products");
    server.listen();
  });
  afterAll(() => {
    server.close();
  });
  it("should render product list with all fields", async () => {
    render(<Products />);

    screen.getByTestId("productList");

    await screen.findByRole("cell", { name: "Bolacha" });
    await screen.findByRole("cell", { name: "Trakinas" });
    await screen.findByRole("cell", { name: "1.99" });
    await screen.findByRole("cell", { name: "100" });
    await screen.findByRole("cell", { name: "morango" });

    screen.logTestingPlaygroundURL();
  });
});
