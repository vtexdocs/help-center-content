---
title: 'Como funciona a pontuação do VTEX Matcher'
id: tutorials_424
status: PUBLISHED
createdAt: 2017-04-27T22:05:43.272Z
updatedAt: 2023-05-10T14:44:35.573Z
publishedAt: 2023-05-10T14:44:35.573Z
firstPublishedAt: 2017-04-27T23:03:25.241Z
contentType: tutorial
productTeam: Channels
author: 245tA425AIeioKAk2eaiwS
slug: entendendo-a-pontuacao-do-vtex-matcher
legacySlug: entendendo-a-pontuacao-do-vtex-matcher
subcategory: znvlXLHC80EKkugQaiMI4
---

VTEX Matcher é a ferramenta usada por marketplaces para avaliar anúncios enviados por sellers e acelerar o processo de catalogação.

O VTEX Matcher avalia SKUs correspondendo  informações de um anúncio do seller, com as de itens já presentes no catálogo do marketplace. Os atributos avaliados em um anúncio são:

- Nome do SKU  
- Nome do produto  
- Marca  
- Categoria  
- EAN ou Ref ID  
- Altura  
- Largura  
- Comprimento  
- Peso  
- Nome da Imagem  
- URL da imagem  
- Especificações  

## Pontuação 
Anúncios recebidos são inseridos em uma fila para serem avaliados pelo VTEX Matcher. Os SKUs recebidos que pertencem ao mesmo produto possuem uma regra para priorização: o SKU que chegar primeiro é avaliado primeiro.

O VTEX Matcher atribui uma pontuação para cada atributo em um anúncio que coincide com as informações de produtos existentes no marketplace. Os pontos são somados, gerando um Score final para o anúncio.

O Score final determina o status do produto, entre as opções *Aprovado*, *Negado* ou *Pendente*. 

## Catalogação
Confira na tabela abaixo como cada pontuação gera um status e uma ação correspondente.

<div class="alert alert-info">
A pontuação máxima do VTEX Matcher para catalogação automática é 95. Scores maiores que 95 requerem catalogação manual.
</div>

| Score      | Status   | Cenário                                                                                                                                                                | Ação                                                                                                                                                                                                                                                                                                           |
|------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 95 pontos  | Aprovado | Correspondência entre `productName`, `brandName` e pelo menos dois entre os três a seguir: `EAN` ou `refId` ou `skuName`.                                              | **Associar a SKU existente:** o próprio VTEX Matcher realiza a [catalogação automática](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/#opcoes-de-catalogacao). As informações do item associado não são transferidas, os atributos do SKU que já existia prevalecem.                            |
| 90 pontos  | Aprovado | Correspondência entre `productName`  e pelo menos dois entre os três a seguir: `EAN` ou `refId` ou `skuName`.                                                          | **Associar a SKU existente:** o próprio VTEX Matcher realiza a [catalogação automática](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/#opcoes-de-catalogacao). As informações do item associado não são transferidas, os atributos do SKU que já existia prevalecem.                            |
| 85 pontos  | Aprovado | Correspondência entre  `productName` e `brandName`.                                                                                                                    | **Associar a um produto existente:** o próprio VTEX Matcher realiza a [catalogação automática](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/#opcoes-de-catalogacao). As informações adicionais desse item são transferidas para o produto, complementando a informação que já está registrada. |
| 80 pontos  | Aprovado | Correspondência entre `productName`.                                                                                                                                   | **Associar a um produto existente:** o próprio VTEX Matcher realiza a [catalogação automática](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/#opcoes-de-catalogacao). As informações adicionais desse item são transferidas para o produto, complementando a informação que já está registrada. |
| De 31 a 79 | Pendente | O anúncio não tem um `productName` equivalente no marketplace.                                                                                                         | **Tornar anúncio pendente:** quando o VTEX Matcher torna um anúncio pendente, o marketplace precisa revisá-lo e definir sua catalogação, por meio do módulo [SKUs Recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396)                                                      |
| De 0 a 30  | Negado   | O anúncio foi enviado sem `imageName`  `imageUrl`, `EAN`, `largura`, `altura`, `comprimento`, `peso`, `productName`, `skuName`, `brandName`, `categoria`, ou `refId`.  | **Recusar anúncio:** anúncios negados automaticamente pelo Matcher saem da fila e só podem ser visualizados via [API de Marketplace](https://developers.vtex.com/docs/api-reference/marketplace-apis).                                                                                      |

## Configuração do Matcher
Os critérios descritos neste artigo são padrão. É possível configurar o VTEX Matcher de forma diferente por meio da [API de Aprovação automática](https://developers.vtex.com/docs/api-reference/marketplace-apis-suggestions#put-/suggestions/configuration/autoapproval/toggle).  

A plataforma VTEX também permite que você use outros matchers, desenvolvidos por equipes internas ou por parceiros.

Ao fazer isso, os matchers vão trabalhar em paralelo. Isso quer dizer que eles não substituem um ao outro, mas funcionam de forma complementar. Sempre que um produto ou SKU for enviado para o marketplace, todos os matchers serão notificados para dar início ao processo de avaliação. Da mesma forma, para que um SKU enviado seja recusado, ele precisa ser negado por todos os matchers ativos na loja.

## Saiba mais 
- [Catalogação de SKUs Recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus--tutorials_396)
- [Documentação de API para configuração do Matcher](https://developers.vtex.com/vtex-rest-api/reference/getautoapprovevaluefromconfig) 

