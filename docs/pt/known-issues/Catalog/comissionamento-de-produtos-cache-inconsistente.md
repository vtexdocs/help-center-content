---
title: "Comissionamento de produtos Cache inconsistente"
id: 7queBSJcAG9yIlKbvWOVgY
status: PUBLISHED
createdAt: 2023-08-01T17:48:39.144Z
updatedAt: 2023-08-01T17:56:01.673Z
publishedAt: 2023-08-01T17:56:01.673Z
firstPublishedAt: 2023-08-01T17:54:19.969Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: comissionamento-de-produtos-cache-inconsistente
locale: pt
kiStatus: Backlog
internalReference: 872364
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Existem, a partir de 2023, dois conjuntos de APIs distintos para atualizar as informações de um vendedor em um marketplace, são eles:
https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller
https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/seller-register/pvt/sellers/-sellerId-/commissions/categories

Eles devem ser consistentes entre si (e, em sua maioria, são), mas, ao atualizar os dados de comissionamento de todas as categorias no último, leva muito tempo para atualizar as informações na resposta da API catalog_system.

Isso acontece quando a comissão é definida para a categoria raiz (por exemplo, o payload abaixo)

```
[
 {
      ""categoryId"": ""default"",
      ""categoryName"": nulo,
      ""categoryFullPath"": [],
      ""productCommissionPercentage"": 50.0,
      ""freightCommissionPercentage"": 0.0
  }
]
```

A principal consequência desse atraso é que o checkout e os marktplaces usam principalmente a resposta do catalog_system, o que pode levar a comissões incorretas nos pedidos.


## Simulação


1. Em um marketplace, tente usar uma solicitação GET usando a API do catálogo para um determinado vendedor https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/seller/-sellerId-
2. Atualize seus dados de comissionamento de produtos por meio de um PUT para o mesmo caminho https://developers.vtex.com/docs/api-reference/catalog-api#put-/api/catalog_system/pvt/seller
3. Execute outro GET e você verá que as informações foram atualizadas corretamente.
4. Agora, tente fazer o mesmo usando a API de registro do vendedor https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/seller-register/pvt/sellers/-sellerId-/commissions
5. Envie um payload para a categoria raiz (ou seja, para toda a loja, além de outras categorias com comissões específicas) configurando qualquer productComissionPercentage https://developers.vtex.com/docs/api-reference/marketplace-apis#put-/seller-register/pvt/sellers/-sellerId-/commissions/categories
6. Se você buscar dados por meio de GET para essa mesma coleção, verá as informações atualizadas: https://developers.vtex.com/docs/api-reference/marketplace-apis#get-/seller-register/pvt/sellers/-sellerId-/commissions
7. No entanto, ao tentar obter esses mesmos dados por meio da API catalog_system, levará dias para atualizá-los se você não fizer nenhuma outra atualização.


## Workaround

- Configurar outros dados na API de registro do vendedor, o que força uma falha de cache.
- Atualizar diretamente por meio da API catalog_system
- Usando a interface do usuário para realizar atualizações"

