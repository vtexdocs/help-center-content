---
title: 'Validar um layout antes de ir para produção'
id: frequentlyAskedQuestions_593
status: ARCHIVED
createdAt: 2019-01-24T20:45:55.474Z
updatedAt: 2022-09-08T16:44:20.634Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:50.821Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: validating-a-layout-before-moving-it-to-production
locale: pt
legacySlug: como-validar-um-layout-antes-de-ir-para-producao
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Não existe um ambiente de QA ou homologação separado para testar alterações de layout.

No entanto, existem duas maneiras de fazer esses testes sem a necessidade de colocar as mudanças em produção.

## Testar mudanças usando o Layout ID (LID)

Todo layout criado no módulo CMS tem um ID específico (o `LID`).

Esse ID pode ser usado como parâmetro na URL para que o layout correspondente seja acessado.

Com isso, você pode:
1. Duplicar o layout.
2. Fazer as mudanças desejadas no layout duplicado, mantendo o primeiro layout como default (ou seja, o segundo layout não será acessável pela URL padrão da sua loja).
3. Acessar o segundo layout por meio do parâmetro `LID`.
4. Fazer os testes necessários.
5. Incorporar as mudanças desejadas ao layout original, ou seja, no que está em produção. 

Para encontrar o `LID`, basta acessar o layout pelo Admin, no módulo CMS. Ele fica na seção __Properties__, como indica a imagem abaixo:

![lid](https://images.contentful.com/alneenqid6w5/4FISyY6wwg2asGE4Mog2sK/991b8c634b474c336de1754acdb414de/lid.png)

Para acessar a página da loja com o novo layout, você deve inserir um ponto de interrogação ao final da URL e depois o parâmetro `LID`.

Por exemplo: 
{AccountName}.vtexcommercestable.com.br**?lid=3536da96-963c-4844-bf52-cc978113be09**

## Testar mudanças usando o Web Site ID (WID)

Outra alternativa que lhe permite testar mudanças no layout antes de ir para produção é criar um novo Web Site e acessá-lo por meio de seu ID específico (`WID`).

1. Duplicar o web site no CMS.
2. Fazer as mudanças desejadas no web site duplicado. Neste caso, você pode alterar quantos layouts quiser.
3. Acessar o segundo web site por meio do parâmetro `WID`.
4. Fazer os testes necessários.
5. Incorporar as mudanças desejadas ao web site original, ou seja, no que está em produção.

Para encontrar o `WID`, acesse o web site. Ele fica no primeiro campo da tela do web site: __Id do WebSite__.

![wid](//images.contentful.com/alneenqid6w5/ghvd0wl9HqGu2KCWW2Yu2/5e27a13e79134f7ba89863ccd54031a6/wid.png)

Lembre-se que, apesar de com a duplicação do web site você poder alterar os layouts do novo web site de maneira intependente, estes vão consumir os mesmos templates do web site original. 

Então, dependendo das mudanças que você quer testar, pode ser necessário criar novos templates para alimentarem os novos layouts. 
