---
title: 'Quantas vezes seu benefício será aplicado em sua loja" Salvando Incorretamente na Interface do Formulário de Promoção'
id: 6vT0rYIry3cGx1nG5BPkmx
status: PUBLISHED
createdAt: 2022-06-28T19:23:30.074Z
updatedAt: 2022-11-25T22:12:21.814Z
publishedAt: 2022-11-25T22:12:21.814Z
firstPublishedAt: 2022-06-28T19:23:30.406Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: quantas-vezes-seu-beneficio-sera-aplicado-em-sua-loja-salvando-incorretamente-na-interface-do-formulario-de-promocao
locale: pt
kiStatus: Backlog
internalReference: 268304
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Na primeira caixa da seção "Restrições e Limitações de Uso" do formulário de promoção Regular, quando você salva a primeira caixa com um valor que não seja ilimitado e todas as outras caixas de seleção são marcadas, assim:

 ![](https://vtexhelp.zendesk.com/attachments/token/XPIZEznRNirizqLBs0Bk3F2ns/?name=inline1741007227.png)

E você revisita a promoção depois de salvar, os dados "mudam" para a caixa abaixo:

 ![](https://vtexhelp.zendesk.com/attachments/token/QH2S7TuWMuQ2DRdr78J2YbZvS/?name=inline137244708.png)



## Simulação


Como descrito acima, basta ir a um formulário de promoção regular e salvar uma promoção preenchendo apenas a primeira caixa da seção #4.

Depois disso, abra novamente o formulário de promoção.



## Workaround


Existem 3 soluções de trabalho:


**1)** Apenas não economize o benefício novamente. Os dados são salvos corretamente no backend na primeira ação de salvamento.

Quando você revisita a promoção, ela "desce" na forma e a salva novamente, o que tornará as informações a serem salvas incorretamente.


**2)** O preenchimento da segunda caixa com dados substitutos para "ilimitado" (em outras palavras, um número elevado, como 9999999) também funciona:

 ![](https://vtexhelp.zendesk.com/attachments/token/7J5orWNE31sV3vzBFhy6pwWXs/?name=inline-1533850111.png) ![](https://vtexhelp.zendesk.com/attachments/token/vZMkrn7uS56cywlx1nDO3g7vz/?name=inline-468944681.png)

3) Finalmente, a última solução seria economizar diretamente via API, em nosso pedido de SaveBenefit documentado em nosso centro de ajuda: https://developers.vtex.com/reference/benefits#createorupdatecalculatorconfiguration

