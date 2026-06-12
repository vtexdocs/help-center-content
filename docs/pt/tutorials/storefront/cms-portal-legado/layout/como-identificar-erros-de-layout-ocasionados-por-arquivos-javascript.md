---
title: 'Identificar erros de layout ocasionados por arquivos JavaScript'
id: frequentlyAskedQuestions_588
status: PUBLISHED
createdAt: 2019-01-24T20:45:54.986Z
updatedAt: 2023-03-29T13:44:10.202Z
publishedAt: 2023-03-29T13:44:10.202Z
firstPublishedAt: 2019-01-24T22:14:27.348Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-identify-layout-errors-caused-by-javascript-files
legacySlug: como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal (Legado).
</div>

Uma maneira de identificar se um erro apresentado no layout é ocasionado por um controle padrão da VTEX ou por um arquivo Javascript personalizado na loja é utilizar o /tools.html.

Para isso faça os seguintes passos :

1. Para desabilitar o JS da página basta colocar o `/tools.html` no fim da URL. Ex: {AccountName}.myvtex.com/tools.html
2. Clique em __Disable__ na aba __Client JavaScript is__.

![javascript-disable ](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-identificar-erros-de-layout-ocasionados-por-arquivos-javascript_1.png) 

3. Após isso, retire o `/tools.html` da URL e atualize a página.

Se o erro que estava sendo apresentado é ocasionado por um Javascript externo, o mesmo não irá aparecer mais.
Com isso é necessário ajustar esse arquivo.

Sobre arquivos JavaScript inseridos na página é importante seguir algumas premissas:

- Utilizar JavaScript externo, e não online.
- Verificar se o mesmo não irá interferir na performance da loja.

Lembrando que temos também o Vtex Speed ferramenta que possibilita o desenvolvimento local com um tempo de cache menor. [Vtex Speed - Download e Execução](https://github.com/vtex/speed)

Para investigar possíveis problemas envolvendo CSS recomendamos o uso do plugin WebDeveloper - veja [aqui](/pt/tutorial/ferramentas-para-auxiliar-performance-do-e-commerce/) algumas ferramentas para melhorar a debugar problemas de customização.
