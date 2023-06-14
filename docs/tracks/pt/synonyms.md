---
title: 'Sinônimos'
id: 1pxAWPEglBey1UFdvcetZV
status: PUBLISHED
createdAt: 2019-11-29T12:01:19.985Z
updatedAt: 2023-05-16T14:15:36.596Z
publishedAt: 2023-05-16T14:15:36.596Z
firstPublishedAt: 2020-03-05T19:55:04.962Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: sinonimos
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

A funcionalidade de Sinônimos permite o cadastro de sinônimos - palavras de mesmo sentido - a um termo de busca específico, aumentando a chance de uma busca com sucesso. Essa ferramenta possibilita ao lojista criar regras de relacionamento entre palavras pesquisadas e palavras contidas em seu catálogo de produtos.

A gestão centralizada dessas regras entre palavras relacionadas forma automaticamente um dicionário para todo o catálogo de produtos da loja.

O uso de Sinônimos também complementa os relatórios de buscas sem resultados. A partir dessa análise, o usuário consegue identificar e tomar ações sobre quais termos precisam de sinônimos em seu dicionário.

Para isso, o VTEX Intelligent Search recebe o termo pesquisado pelo cliente e o procura nas regras de sinônimos cadastradas em sua base de dados. Caso exista uma regra, estas palavras são direcionadas para a pesquisa dentro do catálogo.

Desse modo, caso exista uma regras de sinônimos, não importa como o cliente pesquise ou como está cadastrado o nome do produto, ele sempre encontrará o que procura.

<div class = "alert alert-warning">
Sinônimos não devem ser utilizados para resolver erros de grafia, de plural e singular ou mesmo de pronomes, de artigos e de preposições  nos termos pesquisados. Em todos estes pontos, o VTEX Intelligent Search é capaz de interpretar, aprender e resolver automaticamente por meio de algoritmos.
</div>

### Tipos de sinônimos

Existem dois tipos de sinônimos que podem ser criados: Unidirecional ou Bidirecional. Veja a seguir o significado de cada um deles.

 - **Unidirecional**: define que duas ou mais palavras possuem sentidos iguais. Contudo, vale ressaltar que elas não apresentam significados equivalentes. 
Outro caso de uso é, por decisão estratégica de negócio, não fazer com que o cenário inverso seja retornado.
   Exemplo: quando o cliente realiza uma busca com o termo “smartphone”, os resultados também podem se estender para “iphone”, caso configurado. Mas o oposto não seria aplicado, pesquisando por "iphone", "smartphone" não será exibido. 

 - **Bidirecional**: define que duas ou mais palavras possuem sentidos iguais com significados equivalentes.
   Exemplo: se configurado, o cliente pode pesquisar por produtos “diet” e os resultados apresentam também produtos definidos como “zero” ou “sem açúcar”. Da mesma forma que ao pesquisar por "zero", produtos definidos como "diet" e "sem açúcar" seriam exibidos.

## Exemplos

Em uma loja, os produtos são cadastrados como “televisão”, mas é comum os clientes pesquisarem por “tv”. Você pode configurar que, quando o termo “tv” é pesquisado, televisões sejam exibidas.

