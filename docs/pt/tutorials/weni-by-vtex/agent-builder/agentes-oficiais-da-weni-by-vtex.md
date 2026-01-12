---
title: 'Agentes oficiais da Weni by VTEX'
id: 7E8wlD3T41CiOexDVH1SIy
status: PUBLISHED
createdAt: 2025-07-18T17:25:54.700Z
updatedAt: 2025-09-12T12:59:45.816Z
publishedAt: 2025-09-12T12:59:45.816Z
firstPublishedAt: 2025-07-29T16:33:54.447Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: official-agents-from-weni-by-vtex
legacySlug: agentes-oficiais-da-weni-by-vtex
locale: pt
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

Este artigo descreve os agentes colaboradores oficiais da Weni by VTEX e informa as credenciais necessárias para atribuí-los ao Agent Builder.

| Agentes oficiais | Descrição | Credenciais necessárias |
| :-------------: | :------------- | :------------- |
| Order Status (Pick and Pack) | Fornece detalhes sobre pedidos processados pelo [VTEX Pick and Pack](/pt/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU), como informações sobre pagamento e rastreio. | `Pick and Pack API Key`: Token da API do [Pick and Pack](https://help.vtex.com/docs/tutorials/vtex-pick-and-pack-settings#api-key). |
| Reverse Agent (Aftersale) | Retorna informações sobre trocas e devoluções a partir do número do pedido. | `Token Aftersale API`: token da API do Aftersale. |
| Order Cancellation (VTEX) | Responsável exclusivamente pelo cancelamento de pedidos. Ao adicioná-lo, o cancelamento de pedidos é habilitado; ao removê-lo, essa opção é desativada.  | -- |
| Utility Agent | Fornece diversas informações com base nas conversas com clientes, como previsão do tempo, conversão entre moedas e identificação do endereço a partir do CEP.  | -- |
| Exchange Order Status (Troquecommerce) | Consulta o status de trocas e devoluções de pedidos na Troquecommerce a partir do CPF, CNPJ ou email do cliente. | `Subdomain (Troquecommerce)`: sua conta no Troquecommerce. <br> `Token Troquecommerce`: seu token no Troquecommerce. |
| Tracking Agent (Correios) | Retorna informações sobre o rastreio a partir do código de rastreio dos Correios. | `Correios API Token`: token da API dos Correios. |
| Feedback Recorder | Coleta feedback ao final das conversas com clientes. | -- |
| Product Concierge (No Catalog) | Oferece recomendações personalizadas aos clientes com base em suas necessidades e preferências. | `BASE_URL`: URL da sua conta VTEX. <br> `LOCALE`: o locale do domínio. É um código que indica o idioma e a localidade, como `pt-BR` ou `en-US`. <br> `STORE_URL`: URL da sua loja. |
| Payment Agent (without catalog) | Gera um carrinho para pagamento do cliente de acordo com os produtos dos pedidos. | `Base URL`: URL da sua conta VTEX. <br> `Store URL`: URL da sua loja. |
| Monitoring Agent | Acionado quando você identifica que não consegue responder uma pergunta por falta de informação, quando foge do escopo de conhecimento ou quando não sabe qual agente deve ser usado. | -- |
| Product Concierge (Synerise) | Ajuda os usuários a encontrar produtos pelo nome, pela marca ou por outras características (como categoria e cor), retornando preços, links e imagens. | `Synerise API Key`: chave da API da Synerise. <br> `Synerise Index`: índice da Synerise.|
| Orders Agent Commerce IO | Fornece detalhes sobre pedidos, como informações sobre pagamento e rastreio. Esse agente não realiza cancelamentos. | -- |
| Order Status (Cademeupedido) | Fornece detalhes sobre pedidos, como informações sobre pagamento e rastreio. | `CadeMeuPedido Base URL`: URL da sua conta na Cademeupedido. <br> `CadeMeuPedido Subdomain`: seu subdomínio na Cademeupedido. |
| Product Concierge With Regionalization | Oferece recomendações personalizadas com base na localidade, nas necessidades e nas preferências dos clientes. | `Base URL`: URL da sua conta VTEX. <br> `Store URL`: URL da sua loja. |
| Order Status (VTEX) | Fornece detalhes sobre pedidos, como informações sobre pagamento e rastreio. Esse agente não realiza cancelamentos. | `VTEX Base URL`: URL da sua conta VTEX. <br> `VTEX API App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX API App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys).|
