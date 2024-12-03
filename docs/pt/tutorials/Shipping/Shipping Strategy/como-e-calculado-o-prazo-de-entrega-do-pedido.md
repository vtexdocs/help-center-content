---
title: 'Como é calculado o prazo de entrega do pedido'
id: 1TOuKCIjGQmqOqQkEqCg82
status: PUBLISHED
createdAt: 2018-01-12T12:56:52.805Z
updatedAt: 2023-09-23T00:34:19.034Z
publishedAt: 2023-09-23T00:34:19.034Z
firstPublishedAt: 2018-01-12T14:42:26.502Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slugEN: how-is-the-order-delivery-deadline-calculated
locale: pt
legacySlug: como-e-calculado-o-prazo-de-entrega-do-pedido
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

O prazo de envio de um pedido leva em consideração os seguintes aspectos da logística:

- [Lead time](https://help.vtex.com/pt/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B)
- [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
- [Doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)
- [Política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)

![lead_time_image_total_time_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Shipping/Shipping%20Strategy/como-e-calculado-o-prazo-de-entrega-do-pedido_1.png)

Você define um período para essas etapas e o prazo de envio que o seu cliente vê no checkout é uma soma desses períodos. 

O tempo de envio da __transportadora__ é definido pela [tabela de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127), que precisa ser associada a sua estratégia de envio por meio de uma [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140).

As configurações de política de envio, estoque e doca podem ser feitas pelo seu Admin VTEX, em **Envio > Estratégia de envio**, em abas diferentes. Já a configuração opcional do lead time pode ser realizada em **Catálogo > Gerenciamento de inventário**.

### Saiba mais

- [Simulador de envio](https://help.vtex.com/pt/tutorial/simulador-de-envio--tutorials_144)
- [Verificar como o prazo de entrega de um pedido foi calculado](https://help.vtex.com/pt/tutorial/verificar-como-o-prazo-de-entrega-de-um-pedido-foi-calculado).
