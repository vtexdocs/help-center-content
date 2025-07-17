---
title: 'Otimizar as buscas com palavras substitutas'
id: 32FqSsl5VuQyiIMEc02Uwu
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.707Z
updatedAt: 2025-06-12T20:29:40.190Z
publishedAt: 2025-06-12T20:29:40.190Z
firstPublishedAt: 2019-01-24T22:00:22.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: how-to-optimize-searches-with-substitute-words
locale: pt
legacySlug: otimizar-as-buscas-com-palavras-substitutas
subcategoryId: 383bZO0kymqpnNf7Z4NdEg
---

<div class = "alert alert-warning">
As operações da configuração <a href="https://help.vtex.com/pt/tutorial/otimizar-as-buscas-com-palavras-substitutas--32FqSsl5VuQyiIMEc02Uwu?&utm_source=autocomplete">Palavras Substitutas</a> não são recomendadas para a sua loja em caso de utilização do Intelligent Search. Para relacionar palavras ao produto, é recomendada a utilização da configuração de <a href="https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV">Sinônimos</a>, que possibilita uma gestão mais escalável de termos por produto. Para mais informações, entre em contato com nosso <a href="https://support.vtex.com/hc/pt-br/requests">Suporte</a>.
</div>

## Como funciona o buscador
O buscador da VTEX possui um algoritmo inteligente que, a partir do termo de busca, identifica qual é o melhor resultado para apresentar ao usuário, ou seja, a ele é apresentado sempre o resultado que gerará mais conversão de venda.

<div class = "alert alert-info">
Veja mais detalhes de <a href="https://help.vtex.com/pt/tutorial/como-funciona-a-busca-da-vtex--tutorials_542">como funciona a busca</a> na VTEX.
</div>

## Para que serve uma palavra substituta
Se o sistema de busca não identifica Landing Page, Marca ou Departamento de acordo com o termo buscado, aplica uma Busca por Palavra Substituta (palavra chave). 

Apesar de ter um peso baixo para a pontuação do indexador, a utilização de palavras substitutas é um recurso extremamente importante, já que torna possível alcançar usuários que realizam buscas por termos com erros gramaticais (spagetti), redação fonética (espagueti) ou palavras mal escritas por erros de digitação (spaguetto), mas com a mesma semântica da palavra original (spaguetti).

<div class="alert alert-info">
Um recurso muito utilizado para agilizar as buscas da equipe interna é colocar o RefId/EAN como Palavra Substituta no produto. Assim, é possível fazer buscas mais rápidas, com resultados únicos e encontrar agilmente o produto buscado.
</div>

## Como carrego uma palavra substituta

### 1. Integração de produtos
Integrar os produtos mediante a **Catalog API** permite agregar suas Palavras Substitutas e associá-las ao produto em questão:
https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product

### 2. Importação por planilha
Carregar as Palavras Substitutas diretamente por planilha de produto, de modo massivo:
https://help.vtex.com/pt/tutorial/cadastrando-produto#importacao-de-produtos-por-planilha

### 3. Editar um produto
Carregar as Palavras Substitutas diretamente a cada produto individualmente no campo “Palavras Substitutas”:
https://help.vtex.com/pt/tutorial/cadastrando-produto#cadastrando-produto-pelo-admin

## Onde consigo palavras substitutas
### Google Trends
Uma boa forma de conseguir as palavras chave alternativas que um usuário costuma digitar em uma busca é utilizando uma boa ferramenta de pesquisa de tendências de busca, como Google Trends. Por exemplo: Ao buscar a palavra “Spaguetti” com filtro Argentina, você descobrirá que os usuários relacionam essa busca com termos similares como “massa” ou “espagueti”.

### Google Analytics
Analisando o histórico de palavras de busca em Google Analytics se conseguirá acessar um interessante grupo de keywords de busca, na seção de Aquisição >> Audiência de campanhas >> Palavras chave orgânicas. É um bom repositório de termos que os usuários costumam escrever ao buscar um produto específico, e que poderíamos ter catalogado com outro nome.

### Google Search Console
No menu Tráfego de Busca >> Analítica de Busca, será possível exportar um relatório com um grande número de palavras chave, que falarão do que os usuários buscam quando nos encontram no buscador do Google.

### Partners de Catalogação
Existem empresas que se dedicam a realizar bancos de dados de produtos, imagens e seus atributos.
