---
title: 'Como funcionam as condições de clusterização'
id: 2CmfhSqmOTVo0tLWkAPiiA
status: PUBLISHED
createdAt: 2020-11-18T12:47:27.764Z
updatedAt: 2020-11-23T12:32:27.706Z
publishedAt: 2020-11-23T12:32:27.706Z
firstPublishedAt: 2020-11-18T17:37:48.695Z
contentType: trackArticle
productTeam: Financial
slugEN: how-clustered-conditions-work
locale: pt
trackId: 1LqUFHQZ3ZQyV5TmugbGNm
trackSlugEN: condicoes-de-pagamento-clusterizadas
order: 3
---

A Clustered Payment Conditions utiliza condições para criar os clusters de consumidores. 

Essas condições, por sua vez, são baseadas nos dados que o [Master Data](/pt/docs/tutorials/master-data) armazena sobre os consumidores de uma loja.

Desse modo, as regras de prazo e parcelamento serão aplicadas ao(s) consumidor(es) que se encaixarem na condição - ou condições. 

> ❗ **Atenção**: só é permitido criar cinco clusters de clientes por condição de pagamento.  

Para configurá-las, escolha uma propriedade e, em seguida, selecione os parâmetros para criar um cluster.

![UI - Pagamentos Clusterizados](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/soluções-de-pagamento/condicoes-de-pagamento-clusterizadas/como-funcionam-as-condicoes-de-clusterizacao_1.png)

## Propriedade

A propriedade é preenchida com um dos campos presentes no [Master Data](/pt/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629). Em resumo, podemos dizer que os campos são as informações dos consumidores que o sistema da VTEX armazena. 

Lembrando que existem alguns campos nativos no Master Data. Ou seja, assim que um cliente ganha acesso ao Admin da sua loja, já existem alguns campos criados no Master Data. Entretanto, esses campos não são determinantes. 

Além dos campos nativos, o cliente pode [criar os campos que desejar](/pt/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829?&utm_source=autocomplete), quando quiser. 

Consequentemente, ele pode criar as propriedades - que podem ser de texto, numéricas, verdadeiro/falso, por data - que achar mais adequado para aplicar na condição especial de pagamento por clusterização. 

Sigamos com o exemplo. Na imagem abaixo, a propriedade usada é “Localização Padrão”. Mas outros campos que poderiam ser usados são “E-mail” e “Telefone”, por exemplo.

![Propriedade - PC](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/soluções-de-pagamento/condicoes-de-pagamento-clusterizadas/como-funcionam-as-condicoes-de-clusterizacao_2.png)

## Operador 

É o fator que determina como a propriedade e o valor segmentam os consumidores.

Na imagem abaixo, a regra será aplicada a todos os clientes que correspondem a condição “Localização igual São Paulo”. Mas essa não é a única alternativa de operador.

Caso o lojista determinasse a condição “Localização diferente São Paulo” - “diferente” como operador - a regra de pagamento seria aplicada a todos os consumidores da base que não moram em São Paulo.

![Operador](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/soluções-de-pagamento/condicoes-de-pagamento-clusterizadas/como-funcionam-as-condicoes-de-clusterizacao_3.png)

## Valor
Por fim, o último campo é preenchido com um valor relacionado à propriedade escolhida. Sigamos com o exemplo da condição “Localização Igual São Paulo”. 

Apenas a informação “Localização” não é o suficiente para o sistema crie um cluster. Assim, adicionamos uma informação - valor - que especifique a propriedade escolhida. Podemos dizer que o valor é uma característica da propriedade. 

Nesse caso, o sistema segmenta os consumidores que correspondam à localização “São Paulo” e aplica a regra de prazo e parcelamento a essas pessoas. 

Caso exista apenas um consumidor que corresponda ao cluster “Localização é São Paulo”, essa regra será aplicadas apenas para ele.

![PC3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/soluções-de-pagamento/condicoes-de-pagamento-clusterizadas/como-funcionam-as-condicoes-de-clusterizacao_4.png)
