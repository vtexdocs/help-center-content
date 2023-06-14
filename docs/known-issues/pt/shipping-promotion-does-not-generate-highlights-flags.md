---
title: 'A promoção de embarque não gera destaques / bandeiras'
id: wwCzhTue5cSNhKFLFX9lP
status: PUBLISHED
createdAt: 2022-04-25T14:00:46.027Z
updatedAt: 2022-11-25T22:09:40.171Z
publishedAt: 2022-11-25T22:09:40.171Z
firstPublishedAt: 2022-04-25T14:00:46.772Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: a-promocao-de-embarque-nao-gera-destaques-bandeiras
kiStatus: Backlog
internalReference: 527111
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Porcentagens de remessa, remessa máxima, remessa gratuita e promoções de presentes não estão gerando destaque / bandeiras nos PDPs e PLPs.



## Simulação


- Criar uma Promoção de Embarque e definir "Promoção é Destaque" para Sim;
- Certifique-se de que você não está usando nenhuma restrição no carrinho (faixa de CEP, grupo de clientes, etc., para mais informações https://help.vtex.com/tutorial/configuring-promotions-with-a-highlightflag--tutorials_2295);
- Certifique-se de que você está usando a ViewPart correta para renderizar estas informações na frente, para lojas Portal: https://help.vtex.com/tutorial/lista-de-controles-para-templates?locale=pt, para Lojas IO: https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-highlights
- Verifique o PDP ou PLP, as informações de destaque não estarão disponíveis.



## Workaround


Não há solução.

