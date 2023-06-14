---
title: 'Divergência de inventário na IU x API devido à identificação do depósito ser sensível a maiúsculas e minúsculas'
id: 3YBSu7M0KqY7JU10wVplFG
status: PUBLISHED
createdAt: 2022-06-27T14:34:38.139Z
updatedAt: 2022-11-25T22:44:44.786Z
publishedAt: 2022-11-25T22:44:44.786Z
firstPublishedAt: 2022-06-27T14:34:38.490Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: divergencia-de-inventario-na-iu-x-api-devido-a-identificacao-do-deposito-ser-sensivel-a-maiusculas-e-minusculas
locale: pt
kiStatus: Backlog
internalReference: 346163
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Como na verdade a mesma API cria e atualiza o armazém (Create/update warehouse: `POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses`), a Logística identifica pelo id qual ação deve ser tomada, e como o id é sensível a maiúsculas e minúsculas, se a intenção for atualizar o id "TEST" mas o id "test" for inserido, um novo armazém é criado, mas o inventário é replicado para ambos porque o inventário é insensível a maiúsculas e minúsculas.


## Simulação


Criar um inventário com identificação de capital, seja por UI ou API, por exemplo:

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{"id": "TESTE", "nome": "TESTE", "warehouseDocks": {"dockId": "dock-test", "tempo": "05:00:00", "custo": 0,99 }]}

Atualizar o inventário de uma SKU para este novo depósito (id "TEST"), seja por UI ou API, por exemplo:

    PUT https://{accountName}.{environment}.com.br/api/logistics/pvt/inventory/skus/{skuId}/warehouses/{warehouseId}{"quantidade": 122}

Atualizar o tempo e o custo da doca de carregamento por API com "teste" de identificação em letras minúsculas, por exemplo:

    POST https://{accountName}.{environment}.com.br/api/logistics/pvt/configuration/warehouses{"id": "teste", "nome": "TEST", "warehouseDocks": {"dockId": "teste de doca", "tempo": "08:00:00", "custo": 0,00 }]}

Embora a identificação seja a mesma, a sensibilidade a maiúsculas e minúsculas fará com que outro armazém seja criado:
 ![](https://vtexhelp.zendesk.com/attachments/token/9rtOZ4rvyimyhR8a4SPYiKkcV/?name=image.png)

Entretanto, para a IU de inventário, a identificação não é sensível a maiúsculas e minúsculas, portanto, para ambos os inventários, as mesmas informações serão mostradas:
 ![](https://vtexhelp.zendesk.com/attachments/token/0yAKYzWYy5Sn023Hk28QqcDDR/?name=image.png)

Mas verificando o API, cada inventário é separado, como esperado:
 ![](https://vtexhelp.zendesk.com/attachments/token/LFPgP1tbhl81JA0e7zeW6lrwv/?name=image.png)

E então, ao apagar o primeiro registro de depósito (com letra maiúscula "TEST"), as informações do inventário na IU continuam mostrando aquela quantidade disponível para o inventário de "teste" de identificação (letras minúsculas), onde na verdade é 0:
 ![](https://vtexhelp.zendesk.com/attachments/token/nhn5tLzAlpiTrfRTSaZNu058S/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/YI35cmEAkxMVHpaqTE0KrHHS1/?name=image.png)

E como consequência disso, a indexação SKU recebe quantidade 0, e se mostra fora de estoque no checkout:
 ![](https://vtexhelp.zendesk.com/attachments/token/Q3SECpqLt5hNL4OIkp5s55BpK/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/j3LH5atDUaQL8RzTJug42Wqq7/?name=image.png)


## Workaround


Como alternativa, você pode atualizar o inventário do armazém específico e, se possível, não ter a mesma identificação com a insensibilidade ao caso ("TEST" x "teste").

