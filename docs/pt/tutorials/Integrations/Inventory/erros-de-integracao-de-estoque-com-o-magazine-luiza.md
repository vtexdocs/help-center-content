---
title: 'Erros de integração de estoque com o Magazine Luiza'
id: 2MDUBnEp0AJ7YHppzatW9L
status: PUBLISHED
createdAt: 2021-11-22T13:46:18.519Z
updatedAt: 2023-03-29T14:44:16.995Z
publishedAt: 2023-03-29T14:44:16.995Z
firstPublishedAt: 2021-11-22T13:53:56.929Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: magazine-luiza-inventory-integration-errors
locale: pt
legacySlug: erros-de-integracao-de-estoque-com-o-magazine-luiza
subcategoryId: 7lxg0kyL3TYIsrlSQlf1zP
---

Nos marketplaces para os quais a VTEX desenvolveu um [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), por vezes ocorrem erros de integração de estoque. Este artigo reúne os erros mais comuns de integração de estoque com o Magazine Luiza e orienta sobre como solucioná-los.

Existem mensagens que identificam quais são os erros. Você pode visualizá-las no Admin VTEX, em **MARKETPLACE > Conexões > Estoque**, clicando sobre a mensagem de processo com erro.

Após solucionar um erro, é necessário reprocessar manualmente a integração do estoque daquele SKU. Isso é feito no mesmo local onde o erro é visualizado, clicando em **Ações > Reprocessar**.

Seguem abaixo as mensagens mais comuns de erros de integração de estoque com o Magazine Luiza:

#### Mensagem de erro

`Não existe um sku com o Id informado`

Esta mensagem significa que o produto não foi importado corretamente, e o SKU é dado como inexistente, sendo impossível enviar estoque para o Magazine Luiza. Antes de mais nada, certifique-se de que o SKU está corretamente associado à política comercial utilizada na integração com o Magalu. Caso ele não esteja, realize sua [associação à política comercial](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb). Reprocesse o erro de importação de SKU no seu Admin VTEX, em **MARKETPLACE > Conexões > Produtos**. Clique sobre a mensagem de processo com erro e, em seguida, clique em **Ações > Reprocessar SKU**. Feito isso, realize o reprocessamento do erro de integração de estoque, em **MARKETPLACE > Conexões > Estoque**.

____

#### Mensagem de erro

`Sku não exportado pois o mesmo não possui Preço cadastrado para a Política comercial`

Não é possível integrar estoque de SKUs que não possuem preço cadastrado na política comercial utilizada na integração com o Magazine Luiza. A solução para este erro é [cadastrar o preço base do produto](https://help.vtex.com/pt/tutorial/cadastrar-o-preco-base-de-um-produto--4S9SbPWlVmOAAWO6yq8wE6). Se for do seu interesse, é possível configurar uma [regra de preço para a política comercial](https://help.vtex.com/pt/tutorial/configurar-regra-de-preco-para-politica-comercial--5LQMLwcUcEGCWK6SMI6cEM) usada na integração.

____

#### Mensagem de erro

`O produto pai não foi integrado`

A integração de um SKU depende do produto ao qual ele se relaciona ter sido corretamente integrado. Portanto, um problema de importação de produto vai ocasionar erro no envio de estoque para o Magazine Luiza. Antes de mais nada, certifique-se de que o produto está corretamente associado à política comercial utilizada na integração com o Magalu. Caso ele não esteja, realize sua [associação à política comercial](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb). Reprocesse o erro de importação de produto no seu Admin VTEX, em **MARKETPLACE > Conexões > Produtos**. Clique sobre a mensagem de processo com erro e, em seguida, clique em **Ações > Reprocessar SKU**. Feito isso, realize o reprocessamento do erro de integração de estoque, em **MARKETPLACE > Conexões > Estoque**.

<br></br>
### Saiba mais

- [Integração com o Magazine Luiza](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-magazine-luiza--5Yx5IrNa7Y48c6aSC8wu2Y)
- [Controle de estoque mínimo para integrações](https://help.vtex.com/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D)
- [Configurar o Alerta de Estoque Crítico](https://help.vtex.com/pt/tutorial/configurar-o-alerta-de-estoque-critico--6FD0GHeQPCsKIMgkQ88SGu)
