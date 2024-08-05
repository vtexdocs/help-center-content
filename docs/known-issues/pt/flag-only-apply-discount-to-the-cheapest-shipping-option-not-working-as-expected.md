---
title: "Bandeira 'Aplicar desconto apenas à opção de remessa mais barata' não funcionando como esperado"
id: 15irjH6rNkHhkBeRNn9RUI
status: PUBLISHED
createdAt: 2022-10-05T18:01:57.821Z
updatedAt: 2022-11-25T22:11:49.524Z
publishedAt: 2022-11-25T22:11:49.524Z
firstPublishedAt: 2022-10-05T18:01:58.840Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: bandeira-aplicar-desconto-apenas-a-opcao-de-remessa-mais-barata-nao-funcionando-como-esperado
locale: pt
kiStatus: Backlog
internalReference: 672567
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O comportamento inesperado acontece para pedidos com mais de 1 item e para cenários em que pelo menos um dos itens tem uma janela de entrega que não é compartilhada com outros itens, apenas um.

Exemplo: Promoção de remessa gratuita com esta restrição.

Carrinho de compras:
Item 1 - Janela de Entrega A, Janela de Entrega B
Item 2 - Janela de Entrega A, Janela de Entrega B
Item 3 - Janela de Entrega A, Janela de Entrega B, Janela de Entrega C.

Neste caso, a opção mais barata para todo o carrinho seria a Janela de Entrega C mesmo que não seja uma opção para os itens 1 e 2.

O comportamento esperado seria considerar as opções mais baratas que estão realmente disponíveis para o carrinho inteiro.



## Simulação



1. Criar uma promoção de remessa gratuita que tenha uma restrição "Aplicar desconto somente para a opção de remessa mais barata";
2. Adicionar ao carrinho de compras itens com opções de entrega comuns e um item com uma diferente que não seja aplicável para os outros itens;
3. Verifique se a promoção definirá um envio gratuito para todos os itens, exceto aquele com uma opção de entrega diferente.



## Workaround



- Habilite a opção de entrega diferente para os outros itens no carrinho;
- Remover a opção de entrega diferente para o item que a promoção não está sendo aplicada corretamente;
- Remover a bandeira de restrição "Aplicar desconto somente para a opção de entrega mais barata".

