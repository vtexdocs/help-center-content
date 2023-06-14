---
title: Teste AB: por que não está funcionando? (Google Analytics)
id: frequentlyAskedQuestions_629
status: PUBLISHED
createdAt: 2017-04-27T22:31:14.775Z
updatedAt: 2019-12-31T14:24:07.364Z
publishedAt: 2019-12-31T14:24:07.364Z
firstPublishedAt: 2017-04-27T23:02:25.985Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_84
slug: teste-ab-por-que-nao-esta-funcionando-google-analytics
legacySlug: teste-ab-por-que-nao-esta-funcionando-google-analytics
---

Normalmente o cenário ocorre porque o Lojista não consegue salvar o script que o Analytics gera dentro do Template.

Para solucionar o cenário basta seguir o passo a passo:

1. Crie um contentPlaceHolder dentro do template.
2. Na página em que o Teste AB está sendo aplicado crie um controle do tipo HTML e salve o script.

Dessa forma o Teste AB funcionará com sucesso.

Seguem as telas que exemplificam o passo a passo:

__Tela Controle__:
![](//images.contentful.com/alneenqid6w5/3GIGsJXbo4KAMikCqesM6s/e8231671043f3ce763c8faf87718d6d7/testeAB-controle1-300x138.png)

__Tela Script__:
![](//images.contentful.com/alneenqid6w5/7gUgGNnvlmcQyiW4A0A6ao/dac8e58e0931686de3e9e4ae46c66afa/testeAB-script-300x148.png)

__Tela Template__:
![](//images.contentful.com/alneenqid6w5/4u6uQHYOPuw6Ws8CYKCISo/d04c5fbcc08a5de8a05a242ef76e7ecf/testeAB-template-300x216.png)
