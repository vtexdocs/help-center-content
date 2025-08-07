---
title: 'Algo deu errado" ao adicionar um endereço incompleto e tentar editá-lo'
id: 3rWGAr4K86JAetSBJ75q3h
status: PUBLISHED
createdAt: 2024-01-02T21:11:17.425Z
updatedAt: 2024-01-02T21:11:17.955Z
publishedAt: 2024-01-02T21:11:17.955Z
firstPublishedAt: 2024-01-02T21:11:17.955Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: algo-deu-errado-ao-adicionar-um-endereco-incompleto-e-tentar-editalo
locale: pt
kiStatus: Backlog
internalReference: 960064
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Durante a etapa de checkout, usando um comprador com um perfil completo, na etapa de preenchimento dos dados de envio, clicando na opção "Entregar em outro endereço", se apenas o código postal for adicionado e o comprador voltar à lista de endereços (usando o botão "voltar ao catálogo de endereços") e clicar em "Atualizar informações de endereço selecionadas", haverá um erro com a mensagem "Algo deu errado".

## Simulação



- Adicione itens ao carrinho e use um e-mail com um perfil completo;
- Durante a etapa de Checkout, ao preencher os dados de envio, clique em "Deliver to another address" (Entregar em outro endereço);
- Adicione um código postal e retorne aos dados de envio clicando no botão "Back to address list" (Voltar à lista de endereços);
- Clique em "Update selected address information" (Atualizar informações de endereço selecionadas)

## Workaround



- Atualize a página se o erro for exibido.




