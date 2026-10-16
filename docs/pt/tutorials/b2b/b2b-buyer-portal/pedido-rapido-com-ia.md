---
title: 'Pedido rápido com IA'
createdAt: 2026-10-02T00:00:00.000Z
updatedAt: 2026-10-02T00:00:00.000Z
contentType: tutorial
productTeam: B2B
slugEN: ai-quick-order
locale: pt
---

O **Pedido rápido com IA** (inteligência artificial) usa o **Agente de entrada de pedidos** para montar o pedido a partir de um arquivo ou de uma conversa no chat. O agente interpreta o contexto sem depender de um modelo fixo.

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

## Fazer um pedido com um arquivo

Para montar um pedido a partir de um arquivo, siga estas instruções:

1. Faça login na loja e acesse diretamente o caminho `/pvt/organization-account/order-entry`.

   Em **Como prefere começar?**, a tela do **Agente de entrada de pedidos** oferece as opções **Enviar um arquivo**, **Arrastar e soltar um documento** e **Buscar produtos pelo chat**. Este artigo segue o fluxo por arquivo. A linha **Formatos suportados** lista os formatos aceitos: `csv`, `xlsx`, `xls`, `txt` e `json`.
2. Envie o arquivo clicando no ícone `+` ou arraste-o para a área do chat.

   O agente interpreta os itens sem depender de um modelo fixo de planilha. No entanto, o arquivo deve conter alguma identificação (nome ou SKU) dos produtos e a quantidade de cada um. Linhas sem ambiguidade são adicionadas ao pedido automaticamente.
3. Se uma linha corresponder a mais de um produto, o agente indicará o item com o selo **Ambíguo**, o nome extraído e a quantidade extraída. Em seguida, selecione uma das opções:
   - `Escolher este produto (SKU …)`: escolhe um dos produtos encontrados e o adiciona ao pedido.
   - `Buscar outro produto`: busca outro produto.
   - `Rejeitar item`: recusa o item.
   - `Revisar depois`: deixa o item para uma revisão posterior.
4. Continue a revisão até resolver todos os itens pendentes.

   A revisão ocorre um item por vez, e o agente informa quantos itens ainda estão pendentes. Ao final, ele informa que o pedido foi montado e quantos itens foram adicionados, incluindo os resolvidos automaticamente e durante a revisão.
5. Em **Itens**, confira **Detalhes da linha**, **Quantidade**, **Preço unitário** e **Subtotal** de cada item. O preço unitário vem do catálogo.

   O resumo também exibe o identificador do pedido, **Contrato**, **Criadores**, **Última atualização**, **Código promocional**, **Comentários**, **Entrega** e **Pagamento**. O botão `Checkout` fica inativo enquanto o pedido não tem itens.
6. (Opcional) Altere a quantidade dos itens clicando em `−` e `+`.
7. Clique em `Checkout`.

## Fazer um pedido pelo chat

Para montar um pedido pelo chat, selecione `Buscar produtos pelo chat` e informe o nome ou SKU dos produtos e as quantidades desejadas. Depois, siga as instruções do **Agente de entrada de pedidos**, incluindo revisar os itens e resolver possíveis ambiguidades.

## Cotação

O **Agente de entrada de pedidos** pode solicitar uma cotação se a funcionalidade **Cotações** estiver habilitada.

> ℹ️ Saiba mais em **[B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt)**. O que acontece depois do clique em `Checkout` está descrito em **[Buyer Portal Checkout](https://help.vtex.com/pt/docs/tutorials/buyer-portal-checkout-pt)**.

