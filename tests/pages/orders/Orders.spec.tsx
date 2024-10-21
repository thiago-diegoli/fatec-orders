import Orders from "@/app/orders/page"; // Ajuste o caminho para o componente correto
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { setupServer } from "msw/node";
import { http } from "msw";
import { env } from "@/config/env";

jest.mock("next/navigation", () => require("next-router-mock"));

const server = setupServer(
  http.get(`${env.apiBaseUrl}/pedido`, () => {
    return Response.json({
      pedidos: [
        {
          id: 1,
          data: "2024-09-11",
          cpf: "35614587945",
          forma_pagamento: "prazo",
          quantidade_itens: 5,
          valor_total: 174.47,
        },
      ],
    });
  }),
  http.get(`${env.apiBaseUrl}/pedido/1`, () => {
    return Response.json({
      pedido: {
        id: 1,
        data: "2024-09-11",
        cpf: "35614587945",
        forma_pagamento: "prazo",
        quantidade_itens: 5,
        valor_total: 174.47,
      },
    });
  })
);

describe("Orders List Page", () => {
  beforeAll(() => {
    mockRouter.setCurrentUrl("/orders");
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("should render orders list with all fields", async () => {
    render(<Orders />);

    screen.getByTestId("orderList");

    await screen.findByRole("cell", { name: "2024-09-11" });
    await screen.findByRole("cell", { name: "35614587945" });
    await screen.findByRole("cell", { name: "prazo" });
    await screen.findByRole("cell", { name: "5" });
    await screen.findByRole("cell", { name: "174.47" });

    screen.logTestingPlaygroundURL();
  });
});
