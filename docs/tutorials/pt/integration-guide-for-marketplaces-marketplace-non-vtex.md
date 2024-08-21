---
title: ' Guia de integração para Marketplace não hospedado na plataforma VTEX'
id: SMBUYFVEfZr0m0ttOULxj
status: PUBLISHED
createdAt: 2019-09-16T12:59:18.174Z
updatedAt: 2022-10-30T20:49:19.369Z
publishedAt: 2022-10-30T20:49:19.369Z
firstPublishedAt: 2019-10-14T19:49:14.349Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: guia-de-integracao-para-marketplaces-marketplace-nao-vtex
locale: pt
legacySlug: guia-de-integracao-para-marketplaces-marketplace-nao-vtex
subcategory: 6riYYNZCpO8wyksi8Ksgyq
---

>⚠️ Confira a versão atualizada desse [guia de integração com marketplace](https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide) em nosso Developer Portal. 

Este documento auxilia na integração de um Marketplace não hospedado na plataforma VTEX com um Seller hospedado na plataforma VTEX.

As ações necessárias para montar essa integração, do lado do Marketplace, podem ser divididas em dois blocos: 
- **A)** Ações referentes à atualização de __catálogo__ (troca de catálogo, mudança de preço ou mudança no estoque de um SKU);  
- **B)** Ações referentes ao envio e processamento de __pedidos__ (simulação de carrinho, envio de pedidos, autorização de despacho, recebimento de nota fiscal, rastreamento de transportadora e cancelamento).   

Neste artigo, você confere a visão geral do processo de integração de ambos os blocos, além de ter acesso aos links com o passo a passo específico de cada ação.

> **Alguns Conceitos:**<br/>    
> **Seller** - Dono do produto, responsável pelo fullfilment, ou seja, por cumprir com a entrega do SKU.<br/>  
> **Marketplace/Afiliado** - Dono da vitrine (onde o cliente final vê o produto), responsável por expor e fazer a venda do SKU.<br/>  
> **SKU** - Item a ser trocado e vendido entre Marketplace e Seller.<br/>  
> **Política Comercial** - Sortimento de produtos, preços e configurações de logística que determina as características de um canal de venda.<br/>  
> **Endpoint** - Ponto de acesso de um serviço na internet, serviço pronto para receber uma requisição e devolver uma resposta.<br/>  
> **MarketplaceServicesEndpoint** - Ponto de acesso onde o Seller VTEX entrega ao Marketplace informações sobre o pedido, como a nota fiscal e o código de rastreamento de pedido.   

## A) Fluxo referente à atualização de Catálogo

- Dentro da loja hospedada na VTEX (*Seller*), será cadastrado um *afiliado* (ou seja, o **Marketplace**), que é o interessado em receber o catálogo e as atualizações nos SKUs.  
- O **Marketplace** deve implementar um endpoint onde receberá notificações sobre quaisquer alterações de preço, estoque ou catálogo do seller.  
- No *Seller* VTEX, cada vez que um SKU comercializado pelo **Marketplace** sofrer uma alteração de preço, estoque ou no catálogo, o endpoint de notificação do afiliado será chamado.    
- Quando o **Marketplace** é notificado pelo *Seller* de que um SKU sofreu essa alteração, o **Marketplace** deve checar se atualmente comercializa aquele SKU.  

> Caso SIM: O **Marketplace** usa a API do Catálogo para obter no Seller os dados do SKU e guarda esses dados.  

> Caso NÃO: O **Marketplace** usa a API do Catálogo para obter no Seller os dados do SKU e decidir se deseja incluí-lo na loja ou não.  

### API REST - Ações Referentes à Atualização de Catálogo

1) Marketpalce recebe notificação de mudança de preço, estoque ou catálogo.  

2) Marketplace busca dados de SKU no Seller pela API do Catálogo.  

3) Marketplace busca preço, estoque e dados de frete do SKU pela API de Fullfillment.  

<div class = "alert alert-info">
Saiba mais na documentação para desenvolvedores <a href="https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide">External Marketplace</a>.
</div>

## B) Fluxo referente ao Envio e Processamento de Pedidos 

O fluxo de integrações referente ao envio e processamento de pedidos pode ser dividido em três momentos, cada um com ações específicas:

### Simulação de Carrinho
- Produto é inserido no carrinho do **Marketplace** ou ocorre a edição de produtos no carrinho.  
- **Marketplace** precisa fazer consulta de simulação de carrinho no *Seller* para checar preço e estoque.  
> OBS: quando o cliente fecha o pedido e vai para o pagamento, outra simulação de carrinho deve ser feita.   

### Envio de Pedidos e Despacho
- Pedido é fechado no **Marketplace**.   
- **Marketplace** insere pedido no endpoint do *Seller*.   
- Pagamento do pedido é concluído no **Marketplace**.  
- **Marketplace** faz chamada no endpoint do *Seller* para autorizar despacho de pedido.  

### Implementação de Marketplace Services Endpoint Actions

  - *Seller* chama *Marketplace Services Endpoint* para realizar três possíveis ações finais:  
	- Informar nota fiscal.  
	- Informar código de rastreamento da transportadora.  
	- Enviar solicitação de cancelamento.   

### API REST - Ações Referentes ao Envio e Processamento de Pedidos

1) Simulação de carrinho.

2) Inserir pedido no Seller.

3) Autorizar despacho de pedido no Seller.

4) Informar Nota Fiscal.

5) Informar rastreamento da transportadora.

6) Enviar solicitação de cancelamento.

<div class = "alert alert-info">
Saiba mais na documentação para desenvolvedores <a href="https://developers.vtex.com/vtex-rest-api/docs/external-marketplace-integration-guide">External Marketplace</a>.
</div>
