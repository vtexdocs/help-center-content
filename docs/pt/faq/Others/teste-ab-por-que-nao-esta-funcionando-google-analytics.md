---
title: 'Teste AB: por que não está funcionando? (Google Analytics)'
id: frequentlyAskedQuestions_629
status: PUBLISHED
createdAt: 2017-04-27T22:31:14.775Z
updatedAt: 2019-12-31T14:24:07.364Z
publishedAt: 2019-12-31T14:24:07.364Z
firstPublishedAt: 2017-04-27T23:02:25.985Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: authors_84
slugEN: ab-testing-why-is-it-not-working-google-analytics
locale: pt
legacySlug: teste-ab-por-que-nao-esta-funcionando-google-analytics
---

Normalmente o cenário ocorre porque o Lojista não consegue salvar o script que o Analytics gera dentro do Template.

Para solucionar o cenário basta seguir o passo a passo:

1. Crie um contentPlaceHolder dentro do template.
2. Na página em que o Teste AB está sendo aplicado crie um controle do tipo HTML e salve o script.

Dessa forma o Teste AB funcionará com sucesso.

Seguem as telas que exemplificam o passo a passo:

__Tela Controle__:
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Others/teste-ab-por-que-nao-esta-funcionando-google-analytics_1.png)

__Tela Script__:
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Others/teste-ab-por-que-nao-esta-funcionando-google-analytics_2.png)

__Tela Template__:
![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Others/teste-ab-por-que-nao-esta-funcionando-google-analytics_3.png)
