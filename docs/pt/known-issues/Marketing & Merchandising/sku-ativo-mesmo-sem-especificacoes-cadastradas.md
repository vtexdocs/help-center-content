---
title: "SKU ativo mesmo sem especificações cadastradas"
id: RVkBbJAVMGwo2cqcq6Okg
status: PUBLISHED
createdAt: 2018-06-28T22:50:36.470Z
updatedAt: 2020-05-14T17:58:25.679Z
publishedAt: 2020-05-14T17:58:25.679Z
firstPublishedAt: 2018-06-28T22:59:59.588Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 6qOjO5gpEs8scQ8OugaEaW
tag: Catalog
slugEN: sku-ativo-mesmo-sem-especificacoes-cadastradas
locale: pt
kiStatus: Closed
internalReference: 
---

## Sumário

Ao importar a planilha de Produtos/SKUs, os SKUs com a coluna ___AtivarSkuSePossível___ preenchida com __"SIM"__ e que não possuem especificações cadastradas estão sendo ativados na loja.

## Simulação

1. Acessar o catálogo.
2. Navegar até Cadastro de Produtos > Produtos e SKUs > Importar/Exportar Produtos e SKUs.
3. Exportar planilha com os produtos que não possuem especificações cadastradas.
4. Alterar em cada linha da planilha a coluna ___AtivarSkuSePossível___ para __SIM__.
5. Importar a planilha de Produtos e SKUs.

## Workaround

Ao importar a planilha, certificar-se de que a coluna __AtivarSkuSePossível__ esteja como __NÃO__ para os SKUs que deseja permanecer inativados.

