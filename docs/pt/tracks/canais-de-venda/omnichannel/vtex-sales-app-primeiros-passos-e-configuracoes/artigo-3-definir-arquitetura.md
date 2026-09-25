---
title: 'Definir a arquitetura da conta para o VTEX Sales App'
createdAt: 2026-09-25T00:00:00.000Z
updatedAt: 2026-09-25T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: define-the-vtex-sales-app-account-architecture
locale: pt
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 3
---

Antes de instalar o **VTEX Sales App**, defina quais estratégias [omnichannel](/pt/docs/tracks/comercio-unificado-101) sua operação vai adotar. Essa decisão determina as configurações que sua conta precisa ter antes de seguir para as próximas etapas desta trilha, como [contas franquia](/pt/docs/tutorials/o-que-e-conta-franquia), [pontos de retirada](/pt/docs/tutorials/pontos-de-retirada) e integração com o ERP.

Este artigo resume essas configurações. Para entender em detalhes cada estratégia e as demais decisões da implementação, leia o guia [Planejar a implementação do VTEX Sales App](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app).

## Identificar as configurações de cada estratégia

A tabela abaixo mostra o que cada estratégia exige da sua conta. Se sua operação combinar mais de uma estratégia, atenda aos requisitos de todas elas.

| Requisito | Prateleira Infinita | Ship from Store | Retirada em loja | Venda do estoque local e carrinhos mistos |
| :--- | :--- | :--- | :--- | :--- |
| Conta franquia | Opcional | Recomendada | Sim | Sim |
| Ponto de retirada | Opcional | Não | Sim | Sim |
| Integração com ERP | Não | Sim | Recomendada | Sim |
| Emissão de nota fiscal na loja (NFC-e/SAT) | Não | {Confirmar com time} | Não | Sim |

Veja a seguir o que configurar em cada caso:

- **[Prateleira Infinita](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#prateleira-infinita):** use apenas a conta principal, sem configurações adicionais obrigatórias. Para vender a partir do estoque das lojas físicas, cadastre cada loja como um estoque na conta principal ou crie uma conta franquia para cada loja.
- **[Ship from Store](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#ship-from-store):** crie uma conta franquia para cada loja que fará entregas, com política de envio e doca próprias, e integre o ERP para manter o inventário da loja atualizado.
- **[Retirada em loja](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#retirada-em-loja):** crie uma conta franquia para cada loja que funcionará como ponto de retirada e, nessa conta, cadastre o ponto de retirada conectado ao estoque da loja.
- **[Venda do estoque local e carrinhos mistos](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#venda-do-estoque-local-e-carrinhos-mistos):** use a mesma base da retirada em loja e integre o ERP e o sistema fiscal para emitir a nota fiscal no momento da venda.

## Criar contas franquia

Se a estratégia escolhida exigir contas franquia, crie essas contas antes de seguir para a instalação. Para isso, abra um ticket para o [Suporte VTEX](https://help.vtex.com/support).

Cada conta franquia representa uma loja física e tem um Admin VTEX próprio, com configurações de logística independentes, mas herda o catálogo da conta principal. O **Sales App** é instalado apenas na conta principal e busca nas contas franquia as informações de estoque e entrega de cada loja.

> ⚠️ Cada conta franquia deve ter um CNPJ diferente para que o pagamento dos pedidos funcione corretamente.

## Definir os preços das lojas físicas

Recomendamos que as lojas físicas herdem os preços do ecommerce. Se sua operação precisar de preços diferenciados por loja, leia [Preços nas lojas físicas](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#precos-nas-lojas-fisicas) antes de continuar.
