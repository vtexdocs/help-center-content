---
title: 'Definir a arquitetura da conta para o VTEX Sales App'
createdAt: 2026-09-25T00:00:00.000Z
updatedAt: 2026-10-21T00:00:00.000Z
contentType: trackArticle
productTeam: Shopping
slugEN: define-the-vtex-sales-app-account-architecture
locale: pt
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 3
---

Antes de instalar o **VTEX Sales App**, defina quais estratégias [omnichannel](/pt/docs/tracks/comercio-unificado-101) sua operação vai adotar. Essa escolha define o que a conta precisa ter antes das próximas etapas desta trilha, como [contas franquia](/pt/docs/tutorials/o-que-e-conta-franquia), [pontos de retirada](/pt/docs/tutorials/pontos-de-retirada) e integração com o ERP. O que configurar em cada estratégia está no artigo [Planejar a implementação do VTEX Sales App](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app).

## Definir a arquitetura técnica

A arquitetura da conta depende das estratégias adotadas:

- **[Prateleira Infinita](/pt/docs/tracks/prateleira-infinita):** o cliente acessa todo o seu inventário, integrado entre os canais de venda. Ou seja, um cliente que está em uma loja física pode comprar um produto do estoque de outras lojas físicas ou do ecommerce, e a entrega pode ser feita a partir de qualquer um desses estoques. Saiba mais em [Configuração da Prateleira Infinita](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#configuracao-da-prateleira-infinita).
- **[Ship from Store](/pt/docs/tracks/configurar-ship-from-store):** o cliente recebe em casa pedidos com produtos que saem do estoque de uma loja física, de forma que a loja funciona como um centro de distribuição. Saiba mais em [Configuração do Ship from Store](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#configuracao-do-ship-from-store).
- **[Retirada em loja](/pt/docs/tracks/configurar-lojas-fisicas-como-pontos-de-retirada):** as lojas físicas funcionam como pontos de retirada, o que permite ao vendedor realizar a venda em qualquer loja ou ecommerce, e garante que o cliente possa retirar o pedido na loja de sua preferência. Saiba mais em [Configuração da retirada em loja](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#configuracao-da-retirada-em-loja).
- **[Venda do estoque local e carrinhos mistos](/pt/docs/tutorials/habilitar-venda-de-estoque-local-do-vtex-sales-app):** o cliente leve o produto no momento da compra na loja física, ou seja, permite a venda do tipo "Levar agora" (On Hands). Essa estratégia pode ser combinada com carrinhos mistos, quando uma mesma venda contém itens que o cliente retira imediatamente e itens que serão entregues no seu endereço a partir de outro estoque. Saiba mais em [Configuração da venda do estoque local e carrinhos mistos](/pt/docs/tutorials/planejar-a-implementacao-do-vtex-sales-app#configuracao-da-venda-do-estoque-local-e-carrinhos-mistos).

## Criar contas franquia

Se a estratégia escolhida exigir contas franquia, crie ao menos uma dessas contas antes de seguir com a instalação do **Sales App** e os testes iniciais. É necessário criar todas as contas antes do go-live e da configuração de inventário e dos times das lojas. Para criar contas franquia, abra um ticket para o [Suporte VTEX](https://help.vtex.com/support).

Cada conta franquia representa uma loja física, tem um Admin VTEX próprio e logística independente, e herda o catálogo da conta principal. O **Sales App** é instalado apenas na conta principal e busca nas contas franquia as informações de estoque e entrega de cada loja.

> ⚠️ Cada conta franquia deve ter um CNPJ diferente para que o pagamento dos pedidos funcione corretamente.

## Extensibilidade no VTEX Sales App

Para funcionalidades que o **Sales App** não oferece nativamente, como programas de fidelidade, serviços adicionais ou formulários customizados, avalie o [VTEX Sales App Extensibility](/pt/docs/tutorials/vtex-sales-app-extensibility-pt). Com ele, seu time ou um parceiro desenvolve módulos em pontos da jornada de vendas.
