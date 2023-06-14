---
title: Casos de uso
id: 5k74U1EJm6FzirFczMYHBk
status: PUBLISHED
createdAt: 2020-11-18T13:40:47.138Z
updatedAt: 2020-11-18T17:37:59.283Z
publishedAt: 2020-11-18T17:37:59.283Z
firstPublishedAt: 2020-11-18T17:37:59.283Z
contentType: trackArticle
productTeam: Financial
slug: casos-de-uso
trackId: 1LqUFHQZ3ZQyV5TmugbGNm
trackSlugPT: condicoes-de-pagamento-clusterizadas
---

Aqui daremos alguns exemplos práticos de como as condições de clusterização funcionam.

## Condição de pagamento exclusiva

O lojista pode aplicar a condição de pagamento para apenas um consumidor da sua base.

Para isso, é possível criar uma clusterização a partir de uma propriedade que é única para cada consumidor.

Por exemplo, existem dois campos nativos no Master Data: “CPF” e “CNPJ”. 

Ao criar uma única condição “CPF é 00991929303”, a regra de prazo e parcelamento será aplicada apenas para o consumidor que tiver o valor “00991929303” cadastrado no banco de dados. 

Isso acontece porque nenhum outro consumidor da base terá uma propriedade CPF com o mesmo valor igual a “0099192930”. 

Neste caso, tanto faz definir que a regra vale para “todas as condições” ou para “qualquer um das condições”. Já que haverá apenas uma clusterização configurada, a condição será aplicada independente do comando escolhido.

## Campos personalizados  

O lojista não precisa usar só os campos nativos do Master Data. Ele mesmo pode criar as propriedades que se adequem às estratégias de negócio que queira desenvolver. 

Vamos pensar na perspectiva do Customer Credit, em que um lojista concede crédito para seus clientes. Toda compra, feita com esse crédito, gera um título que precisa ser pago.

Por mais que os clientes sejam da confiança do lojista, imprevistos acontecem e nem sempre esses títulos são pagos no prazo de vencimento.

O lojista pode segmentar os clientes de acordo com o momento que pagam o título. Nesse caso, ele criaria a propriedade “Pagamento” que seria completada com os valores:

- “adiantado”
- “emDia” 
- “atrasado”

Desse modo, seria possível aplicar uma condição de pagamento apenas para os clientes que correspondessem aos valores “adiantado” e “emdia”.

Bastaria criar duas condições - “Pagamento +  é +  adiantando”, “Pagamento é em dia” - e definir que a regra de prazo e parcelamento será válida para qualquer uma das condições.
