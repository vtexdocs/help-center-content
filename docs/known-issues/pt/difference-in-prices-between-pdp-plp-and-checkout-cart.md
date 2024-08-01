---
title: 'Diferença de preços entre PDP, PLP e carrinho de compras'
id: 3Oo5ccYOG7hcEXYaROxXMV
status: PUBLISHED
createdAt: 2023-06-29T20:02:13.485Z
updatedAt: 2023-06-29T20:02:14.572Z
publishedAt: 2023-06-29T20:02:14.572Z
firstPublishedAt: 2023-06-29T20:02:14.572Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: diferenca-de-precos-entre-pdp-plp-e-carrinho-de-compras
locale: pt
kiStatus: Backlog
internalReference: 853175
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O portal está fornecendo o mesmo conteúdo nos PDPs e PLPs, mesmo após algumas atualizações, como promoções.

## Simulação



Com um cache expirado, a CDN pergunta ao sistema do portal se a página foi alterada. Em caso afirmativo, o portal fornece a nova página a ser renderizada; caso contrário, a CDN redesenha a página que já possui.

Nesse caso, vimos que, embora a página tenha sofrido algumas alterações, a inclusão de uma promoção, o portal retornou à CDN que não houve alteração em comparação com a página em cache e, portanto, a camada de borda estava renderizando a página sem promoção

## Workaround



Uma maneira de contornar isso era **alterar o modelo da página do produto (como incluir um comentário**), para que o portal informasse que havia uma alteração na estrutura e a CDN recebesse a nova página para ser armazenada em cache.




