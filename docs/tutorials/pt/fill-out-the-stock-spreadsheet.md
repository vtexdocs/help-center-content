---
title: 'Como preencher a planilha de estoque'
id: 2EQ0XOe8aA0UyQso0k2kkA
status: DRAFT
createdAt: 2019-01-24T20:45:40.102Z
updatedAt: 2020-07-03T22:29:33.529Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:07:32.520Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: como-preencher-a-planilha-de-estoque
legacySlug: como-preencher-a-planilha-de-estoque
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Por meio da planilha de estoque, é possível inserir em massa a quantidade de SKUs para cada estoque da sua loja.

Desse modo, cada linha da planilha diz respeito a um SKU por estoque. Ou seja, se o mesmo SKU constar em mais de um estoque, ele aparecerá uma vez para cada um desses estoques.

Além disso, o preenchimento correto da planilha depende de duas regras. São elas:

- Cada coluna da planilha deve conter ou um número ou um texto;
- A atualização da quantidade de SKUs deve ser feita na coluna __TotalQuantity__. 

<div class="alert alert-warning">
<strong>Atenção</strong>: caso estas indicações não sejam respeitadas, o sistema pode não aceitar a importação da planilha ou o número de itens a venda pode ficar incorreto.
</div>

A seguir, confira o significado de cada campo da planilha de estoque.

- __SkuId__ (texto): ID do SKU.
- __TotalQuantity__ (número): quantidade de unidades do SKU.
- __ReservedQuantity__ (número): quantidade do SKU em reserva.
- __AvailableQuantity__ (número): quantidade do SKU disponível para ser vendida.
- __WarehouseId__ (texto): ID do estoque, segundo cadastrado no módulo de logística.
- __WarehouseName__ (texto): nome do estoque, segundo cadastrado no módulo de logística.
- __RefId__ (texto): código de referência do SKU.
- __IsActive__ (texto): indica se o SKU está ativo (`true`) ou inativo (`false`) no catálogo.
- __UnlimitedQuantity__ (texto): indica se o estoque do SKU foi definido como estoque infinito (`true`) ou não (`false`).
- __LockIds__ (texto): Código identificador da reserva.
- __DispatchedReservations__ (número): número de itens do SKU que já passaram do status `Pronto para manuseio`, ou seja, cujas reservas já caíram.
