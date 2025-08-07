---
title: "Problemas de navegação no menu MyAccount"
id: 32fJfkxOnaOIXmoATm6NGL
status: PUBLISHED
createdAt: 2025-04-11T16:28:13.873Z
updatedAt: 2025-04-11T16:28:14.746Z
publishedAt: 2025-04-11T16:28:14.746Z
firstPublishedAt: 2025-04-11T16:28:14.746Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: problemas-de-navegacao-no-menu-myaccount
locale: pt
kiStatus: Backlog
internalReference: 1209822
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O aplicativo de login da VTEX tem um recurso chamado accountOptionLinks, que permite colocar links de redirecionamento personalizados para as seções da myaccount dentro do popover de login. Esses links são exibidos quando o usuário está conectado à loja on-line. Exemplo:

 ![](https://vtexhelp.zendesk.com/attachments/token/zosxLBGZVqOL0xNQkPDEfheBO/?name=image.png)

No entanto, a navegação a partir desses links de popover de login não está funcionando. Depois de clicar, o URL muda na barra de endereços do navegador, mas a página não é renderizada. Por outro lado, a navegação de qualquer outra página para "myaccount" funciona bem.

## Simulação



-

Faça login em uma loja virtual que tenha o recurso `accountOptionLinks`. Ex:



 ![](https://vtexhelp.zendesk.com/attachments/token/JdhPUya3LJeKRpxwhzfvEA9d3/?name=image.png)

- No canto superior direito, clique no ícone do nome de usuário/avatar e um popover será exibido. Em seguida, clique em uma das opções do menu de redirecionamento (no exemplo abaixo, "pedidos") e você verá que o URL do navegador será alterado, mas a página não.

 ![](https://vtexhelp.zendesk.com/attachments/token/plTb6qntOS6aZTxUIdMMfiEaK/?name=image.png)



## Workaround


Não há nenhuma solução alternativa disponível.




