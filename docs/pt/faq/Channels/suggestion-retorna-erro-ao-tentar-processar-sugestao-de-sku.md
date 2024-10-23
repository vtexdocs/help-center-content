---
title: 'Sugestões retorna erro ao tentar processar sugestão de SKU. O que fazer?'
id: 2OAWpCkw3YQwWGAmss6sCG
status: CHANGED
createdAt: 2019-01-24T20:30:45.252Z
updatedAt: 2023-03-22T20:55:46.996Z
publishedAt: 2019-12-31T14:25:03.994Z
firstPublishedAt: 2019-01-24T20:30:45.711Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_24
slugEN: suggestion-module-returns-error-when-trying-to-process-sku-suggestion
locale: pt
legacySlug: 
---

Ao tentar aceitar a sugestão de um SKU, o marketplace pode receber o seguinte erro:

`Não conseguimos processar a Sugestão`

Isto acontece quando há algum erro no cadastro do SKU no seller.

Para identificar qual é o erro, siga os passos abaixo:
1. Entre no módulo __Sugestões__.  
2. Clique no SKU que o marketplace não aceitou.!![suggestions1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Channels/suggestion-retorna-erro-ao-tentar-processar-sugestao-de-sku_1.png)  
3. Entre no __developer tools__ do browser (para isso, se estiver usando o Google Chrome, aperte `F12` no Windows ou `Command+Option+I` no Mac).   
4. No developer tools, clique na aba __Network__.  
5. Ainda no developer tools, clique na opção __All__.!![f12pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Channels/suggestion-retorna-erro-ao-tentar-processar-sugestao-de-sku_2.png)  
6. Clique no botão __Aceitar__ do módulo Sugestões.  
7. Você verá uma lista das chamadas ativadas pelo botão Aceitar.  
8. Se uma delas estiver em vermelho e com status `400`, como na imagem abaixo, clique nessa chamada.![erroSuggestion3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Channels/suggestion-retorna-erro-ao-tentar-processar-sugestao-de-sku_3.png)  
9. Você verá em seguida a descrição do erro que ocasionou a falha no processamento da sugestão do SKU.![erroSuggestion4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Channels/suggestion-retorna-erro-ao-tentar-processar-sugestao-de-sku_4.png)  

Para resolver o problema, o seller deve resolver o erro apontado nessa descrição.

Depois disso, a sugestão será atualizada no marketplace, e poderá então ser aprovada com sucesso.
