---
title: 'Agentes oficiais da Weni by VTEX'
id: 7E8wlD3T41CiOexDVH1SIy
status: PUBLISHED
createdAt: 2025-07-18T17:25:54.700Z
updatedAt: 2025-07-29T16:33:54.447Z
publishedAt: 2025-07-29T16:33:54.447Z
firstPublishedAt: 2025-07-29T16:33:54.447Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: weni-by-vtexs-official-agents
legacySlug: agentes-oficiais-da-weni-by-vtex
locale: pt
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

Este artigo fornece a descrição dos agentes colaboradores oficiais da Weni by VTEX e informa as credenciais necessárias para atribuí-los ao Agent Builder.

| Agentes oficiais | Descrição | Credenciais necessárias |
| :-------------: | :------------- | :------------- |
| Order Status (Pick and Pack) | Fornece detalhes sobre pedidos processados pelo [VTEX Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU), como informações sobre pagamento e rastreio. | -- |
| Reverse Agent (Aftersale) | Retorna informações sobre trocas e devoluções a partir do número do pedido. | `Token Aftersale API`: Token da API do Aftersale. |
| Order Cancellation (VTEX) | Responsável exclusivamente pelo cancelamento de pedidos. Adicioná-lo habilita a funcionalidade de cancelamento de pedidos, enquanto removê-lo retira essa funcionalidade.  | -- |
| Utility Agent | Fornece diversas informações com base nas conversas com clientes, como previsão do tempo, conversão entre moedas e identificação do CEP a partir do endereço.  | -- |
| Exchange Order Status (Troquecommerce) | Checa o status de trocas e devoluções de pedidos na Troquecommerce a partir do CPF, CNPJ ou email do cliente. | <p>`Subdomain (Troquecommerce)`: Sua conta no Troquecommerce.</p> <p>`Token Troquecommerce`: Seu token no Troquecommerce.</p> |
| Tracking Agent (Correios) | Retorna informações sobre o rastreio a partir do código de rastreio dos Correios. | `Correios API Token`: Token da API dos Correios. |
| Feedback Recorder | Coleta feedbacks ao final das conversas com clientes. | -- |
| Product Concierge (No Catalog) | Oferece recomendações personalizadas aos clientes com base em suas necessidades e preferências. | <p>`BASE_URL`: URL da sua conta VTEX.</p> <p>`LOCALE`: O locale do domínio. É um código que indica o idioma e a localidade, como `pt-BR` ou `en-US`.</p> <p>`STORE_URL`: URL da sua loja.</p> |
| Payment Agent (without catalog) | Gera um carrinho para pagamento do cliente de acordo com os produtos pedidos. | <p>`Base URL`: URL da sua conta VTEX.</p> <p>`Store URL`: URL da sua loja.</p> |
| Monitoring Agent | Acionado quando você identifica que não consegue responder a uma pergunta por falta de informação, quando foge ao escopo de conhecimento ou quando não sabe qual agente deve acionar. | -- |
| Product Concierge (Synerise) | Ajuda os usuários a encontrar produtos pelo nome, pela marca ou por outras características (como categoria e cor), retornando preços, links e imagens. | <p>`Synerise API Key`: Chave da API da Synerise.</p> <p>`Synerise Index`: Índice da Synerise.</p>|
| Orders Agent Commerce IO | Fornece detalhes sobre pedidos, como informações sobre pagamento e rastreio. Esse agente não realiza cancelamentos. | -- |
| Order Status (Cademeupedido) | Fornece detalhes sobre pedidos, como informações sobre pagamento e rastreio. | <p>`CadeMeuPedido Base URL`: URL da sua conta na Cademeupedido.</p> <p>`CadeMeuPedido Subdomain`: O seu subdomínio na Cademeupedido.</p> |
| Product Concierge With Regionalization | Oferece recomendações personalizadas aos clientes com base em sua localidade, necessidades e preferências. | <p>`Base URL`: URL da sua conta VTEX.</p> <p>`Store URL`: URL da sua loja.</p> |
| Order Status (VTEX) | Fornece detalhes sobre pedidos, como informações sobre pagamento e rastreio. Esse agente não realiza cancelamentos. | <p>`VTEX Base URL`: URL da sua conta VTEX.</p> <p>`VTEX API App Key`: Chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys).</p> <p>`VTEX API App Token`: Token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys).</p>|
