---
title: 'Pedidos com a Amazon apresentam erros de integração'
id: 1ukX1Gw4fVUs62IIpGgsZF
status: PUBLISHED
createdAt: 2024-09-12T16:05:45.774Z
updatedAt: 2024-11-08T18:29:42.178Z
publishedAt: 2024-11-08T18:29:42.178Z
firstPublishedAt: 2024-09-12T16:24:22.283Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: integration-errors-in-amazon-orders
locale: pt
legacySlug: pedidos-com-a-amazon-apresentam-erros-de-integracao
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
---

**Tags:** Pedidos, Integração, Marketplace, Amazon

Quando ocorre um erro de integração em pedidos entre a **Amazon** e uma loja, uma mensagem de erro é informada em cada pedido. Para verificar se um pedido contém erros de integração, no Admin VTEX, acesse **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.  

Os erros mais comuns em pedidos realizados na Amazon são:  

- **Erro de SLA**
- **SKU fora de estoque**
- **SKU inativo**
- **SKU sem política comercial vinculada**
- **SKU inexistente**
- **Erro de comunicação com o catálogo**

## Solução

Para corrigir erros de integração em pedidos da Amazon, considere as opções apresentadas na tabela a seguir:

|**Mensagem de erro**|**Significado**|**Ação requerida**|
|:---:|:---:|:---|
|**No available sla to deliver this order**|Algum fator está inviabilizando a entrega do pedido ao consumidor final. |Para identificar a origem do erro e corrigi-lo, confira [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).|
|**Order with SKU out of stock**|Existe um problema no estoque atrelado ao marketplace.|Para corrigir o erro, verifique na documentação [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP) qual erro de estoque está associado ao pedido e siga os passos indicados na documentação.|
|**SKU inativo**|Ao menos um SKU do pedido não está ativo no catálogo da loja.|Verifique o status do SKU acessando o Admin VTEX, em **Catálogo > Produtos e SKUs,** em seguida ative um único SKU seguindo as instruções do tutorial Preencher campos de cadastro de SKU, ou para ativar vários SKUs siga os passos descritos em [Ativar SKUs em massa](https://help.vtex.com/pt/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY). |
|**SKU sem política comercial**|Os SKUs do pedido estão ativos, porém não estão vinculados a uma [Política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) utilizada na Amazon.|Para corrigir o erro, é necessário associar o SKU a uma política comercial vinculada à Amazon. Para isso, siga o tutorial [Associação de SKU à Política comercial](https://help.vtex.com/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb) |
|**SKU in order don't belong to a VTEX Store, sku id it's not a integer**|Ao menos um SKU do pedido não está cadastrado no catálogo da loja ou a Amazon forneceu alguma informação incorreta no pedido.|Caso o SKU não exista no catálogo, é necessário cancelar o pedido. <br>Se o SKU consta no catálogo, é necessário entrar em contato com a Amazon para o marketplace corrigir o erro.</br>|
|**Ocorreu um erro de comunicação com o Catálogo - Acesso não autorizado do seller x para o sales channel y**|O website associado a conta principal do site da loja não tem a política comercial da Amazon selecionada.  |Para corrigir o erro, é necessário seguir o tutorial [Vincular uma loja a uma estrutura de pastas do CMS](https://help.vtex.com/pt/tutorial/vincular-um-account-name-a-um-website-binding) e selecionar a política comercial da Amazon.|

