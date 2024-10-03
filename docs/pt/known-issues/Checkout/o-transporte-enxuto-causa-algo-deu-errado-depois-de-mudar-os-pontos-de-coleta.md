---
title: "O transporte enxuto causa 'Algo deu errado' depois de mudar os pontos de coleta"
id: 45jQODtjZ4vLXniNJIlQZc
status: PUBLISHED
createdAt: 2024-06-20T21:11:53.067Z
updatedAt: 2024-06-20T21:15:28.608Z
publishedAt: 2024-06-20T21:15:28.608Z
firstPublishedAt: 2024-06-20T21:11:53.899Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: lean-shipping-causes-something-went-wrong-after-changing-pickup-points
locale: pt
kiStatus: Backlog
internalReference: 1053609
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Um comprador pode pesquisar diferentes pontos de coleta em diferentes códigos postais. Ao usar o envio enxuto, depois de adicionar um código postal com pontos de coleta disponíveis e mudar para um código postal sem pontos de coleta, a etapa de envio é bloqueada com a mensagem "Algo deu errado".

 ![](https://vtexhelp.zendesk.com/attachments/token/i0jCDFlz5EGPnKyk5Nfw0Etl0/?name=image.png)

## Simulação



- Monte um carrinho e selecione a retirada no ponto no carrinho;
- Adicione um código postal com a retirada;
- Selecione uma das coletas
- Alterar para um código postal sem pontos de retirada;
- Vá para o checkout e a mensagem "Something went wrong" (Algo deu errado) é exibida na etapa de envio

## Workaround


Atualize a página ou desative o envio enxuto.




