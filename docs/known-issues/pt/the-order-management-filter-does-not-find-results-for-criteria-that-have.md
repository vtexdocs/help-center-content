---
title: Ponto de retirada não fica visível durante associação com política de envio
id: 3GcfZkPG9yB3l8Cfd1lVzf
status: PUBLISHED
createdAt: 2021-12-16T19:34:39.907Z
updatedAt: 2022-01-13T19:04:23.643Z
publishedAt: 2022-01-13T19:04:23.643Z
firstPublishedAt: 2021-12-16T19:51:24.285Z
contentType: knownIssue
productTeam: Order Management
author: 30TBnJ838LXSZvdJFlcB8H
tag: Logistics
slug: o-filtro-do-gerenciamento-de-pedidos-nao-retorna-resultados-para-criterios
kiStatus: Backlog
internalReference: Zendesk Ticket #353656
---

## Sumário

<!-- Yay, no errors, warnings, or alerts! -->

Depois de criar um [ponto de retirada](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E?&utm_source=autocomplete#2-associar-ponto-de-retirada-a-uma-transportadora), é preciso associá-lo a uma política de envio para que ele fique disponível para os clientes. Para fazer a associação, o campo `Nomes dos pontos de retirada` ([da política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)) deve ser preenchido com o nome do ponto de retirada cadastrado. O preenchimento é feito com uma busca pelo nome do ponto de retirada. No entanto, durante a busca, o ponto de retirada pode não ser encontrado quando há mais de 999 pontos de retirada cadastrados na loja.

Assim, é possível que o ponto de retirada desejado não apareça nos resultados da busca de pontos de retirada em lojas que têm mais de 999 pontos de retirada cadastrados.


## Simulação


Para realizar a simulação, certifique-se de que a loja tem mais de 999 pontos de retirada. 

1. Crie ou altere uma [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio):
    1. Na janela **Relacionar pontos de retirada,** busque um ponto de retirada no campo `Nomes dos pontos de retirada`;
    2. Perceba que os resultados dos pontos de retirada não contêm o ponto de retirada desejado. 

## Workaround

Há dois workarounds para esse caso:

* **Via Admin**: nesse caso, é necessário vincular uma [tag](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E?&utm_source=autocomplete#campos-de-cadastro) ao ponto de retirada. Ao criar um ponto de retirada, utilize o [campo tag](https://help.vtex.com/pt/tutorial/configurar-pontos-de-retirada-pickup-points--2R5ClQiwe4KoSQgsuiOw4E?&utm_source=autocomplete#campos-de-cadastro) para adicionar o ponto de retirada a um grupo. Preencha o campo `Tags dos pontos de retirada` antes de realizar a busca em `Nomes dos pontos de retirada`.
* **Via API:** é possível associar o ponto de retirada a uma política de envio utilizando a API [Update Shipping Policy](https://developers.vtex.com/vtex-rest-api/reference/shipping-policies#put_logistics-pvt-shipping-policies-id). 
    1. Dê **[GET](https://developers.vtex.com/vtex-rest-api/reference/shipping-policies#get_logistics-pvt-shipping-policies-id)** para conferir as configurações da política de envio;
    2. Substitua o campo `deliveryChannel: delivey` por `deliveryChannel`: `pickup-in-point`;
    3. No objeto `pickupPointsSettings`, adicione o [ID do ponto de retirada](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1) no campo `PickupPointIds`.  

