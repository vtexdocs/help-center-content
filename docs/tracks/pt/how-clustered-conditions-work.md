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
slug: como-funcionam-as-condicoes-de-clusterizacao
locale: pt
trackId: 1LqUFHQZ3ZQyV5TmugbGNm
trackSlugPT: condicoes-de-pagamento-clusterizadas
---

A Clustered Payment Conditions utiliza condições para criar os clusters de consumidores. 

Essas condições, por sua vez, são baseadas nos dados que o [Master Data](https://help.vtex.com/pt/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw "Master Data") armazena sobre os consumidores de uma loja.

Desse modo, as regras de prazo e parcelamento serão aplicadas ao(s) consumidor(es) que se encaixarem na condição - ou condições. 

<div class="alert alert-danger">
<strong>Atenção</strong>: só é permitido criar cinco clusters de clientes por condição de pagamento.
</div>  

Para configurá-las, escolha uma propriedade e, em seguida, selecione os parâmetros para criar um cluster.

![UI - Pagamentos Clusterizados](//images.ctfassets.net/alneenqid6w5/5CqjpJpWRzVAPpTSUAIt8C/91425fe2c9d9d49b66655419b89abf9a/image.png)

## Propriedade

A propriedade é preenchida com um dos campos presentes no [Master Data](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629 "Master Data"). Em resumo, podemos dizer que os campos são as informações dos consumidores que o sistema da VTEX armazena. 

Lembrando que existem alguns campos nativos no Master Data. Ou seja, assim que um cliente ganha acesso ao Admin da sua loja, já existem alguns campos criados no Master Data. Entretanto, esses campos não são determinantes. 

Além dos campos nativos, o cliente pode [criar os campos que desejar](https://help.vtex.com/pt/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829?&utm_source=autocomplete "criar os campos que desejar "), quando quiser. 

Consequentemente, ele pode criar as propriedades - que podem ser de texto, numéricas, verdadeiro/falso, por data - que achar mais adequado para aplicar na condição especial de pagamento por clusterização. 

Sigamos com o exemplo. Na imagem abaixo, a propriedade usada é “Localização Padrão”. Mas outros campos que poderiam ser usados são “E-mail” e “Telefone”, por exemplo.

![Propriedade - PC](//images.ctfassets.net/alneenqid6w5/3acMvJIDlyTfdbIWKcuweT/80c035726574476b316c91b054d3c741/PC1.png)

## Operador 

É o fator que determina como a propriedade e o valor segmentam os consumidores.

Na imagem abaixo, a regra será aplicada a todos os clientes que correspondem a condição “Localização igual São Paulo”. Mas essa não é a única alternativa de operador.

Caso o lojista determinasse a condição “Localização diferente São Paulo” - “diferente” como operador - a regra de pagamento seria aplicada a todos os consumidores da base que não moram em São Paulo.

![Operador](//images.ctfassets.net/alneenqid6w5/4KHYbVD6ubXXFSW01ZuS9q/8ed89399d9f88f2285cbaefc236b4507/PC2.png)

## Valor
Por fim, o último campo é preenchido com um valor relacionado à propriedade escolhida. Sigamos com o exemplo da condição “Localização Igual São Paulo”. 

Apenas a informação “Localização” não é o suficiente para o sistema crie um cluster. Assim, adicionamos uma informação - valor - que especifique a propriedade escolhida. Podemos dizer que o valor é uma característica da propriedade. 

Nesse caso, o sistema segmenta os consumidores que correspondam à localização “São Paulo” e aplica a regra de prazo e parcelamento a essas pessoas. 

Caso exista apenas um consumidor que corresponda ao cluster “Localização é São Paulo”, essa regra será aplicadas apenas para ele.

![PC3](//images.ctfassets.net/alneenqid6w5/3oQrXen2cJCOsLpwRAqT74/3600f14168835dcbeabec367e512805e/PC3.png)
