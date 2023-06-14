---
title: Como funciona o Relatório de segurança
id: tutorials_282
status: PUBLISHED
createdAt: 2017-04-27T22:10:10.101Z
updatedAt: 2023-03-29T19:22:38.336Z
publishedAt: 2023-03-29T19:22:38.336Z
firstPublishedAt: 2017-04-27T23:03:13.247Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: entendendo-o-relatorio-de-seguranca
legacySlug: entendendo-o-relatorio-de-seguranca
subcategory: 5yDQmr18K4GgQAeGwq8USa
---

O relatório de Segurança é onde ficam registradas as alterações que afetam o cadastro de produtos. Sua função principal é fornecer ao lojista, a possibilidade de verificar o autor por determinadas alterações em um período de tempo específico.

## Acessar o relatório de Segurança

Siga o passo a passo para acessar o relatório:

1. No Admin VTEX, acesse **Catálogo**, ou digite **Catálogo** na barra de busca no topo da página.
2. Clique em **Relatórios**.
3. Clique na aba __Segurança__.

## Filtrar o relatório de Segurança

É possível filtrá-lo de diversas formas, a partir dos campos abaixo, considerando que o campo data deve ser sempre preenchido para que retorne o devido resultado. Caso não seja feito nenhum filtro, será exibido o registro de todas as alterações da data atual.

O exemplo abaixo ilustra o filtro para uma alteração (seja criação ou atualização) de preço de um SKU. Para isso, é necessário utilizar os campos __Dados__ com o Id do SKU, __Tela__ com o local da plataforma onde ocorre essa alteração e um período de tempo específico. De acordo com o relatório que se deseja, pode ser necessário usar outros campos em conjunto ou em substituição a esses.

![relatoriosegurançaPT](//images.ctfassets.net/alneenqid6w5/9t5KxHdSwTGYy84KmJIq7/beca72120562bfd90fa0b81965fcf2be/relatorio-seguranca-pt.gif)

Confira a seção a seguir para entender todos os campos disponíveis para filtrar o relatório.

## Campos disponíveis para filtro

**Nome do Administrador:** Nome do usuário que efetuou a alteração.

**Endereço de acesso:** Endereço de IP da máquina que efetuou a alteração.

**Dados:** Pode ser informado o Id do sku, produto, marca, categoria ou de qualquer outro cadastro que deseja buscar o registro.

**Tela:** Local na plataforma onde foi efetuada a alteração, levando em consideração o endereço da URL. Por exemplo, no formulário de alteração de preço é SkuTabelaValorForm.

**Função:** Ação que foi feita na tela. Seguindo o exemplo do tópico anterior, uma alteração de preço apareceria como StockKeepingUnitPriceShet-update.

**Data:** Período que deseja buscar com datas “de” e “até”.

**Itens por página:** Define o máximo de linhas que no resultado da busca.

