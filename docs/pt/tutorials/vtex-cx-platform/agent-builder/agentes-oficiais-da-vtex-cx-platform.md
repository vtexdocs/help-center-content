---
title: 'Agentes oficiais do VTEX CX Platform'
id: 7E8wlD3T41CiOexDVH1SIy
status: PUBLISHED
createdAt: 2025-07-18T17:25:54.700Z
updatedAt: 2026-06-12T00:00:00.000Z
publishedAt: 2025-09-12T12:59:45.816Z
firstPublishedAt: 2025-07-29T16:33:54.447Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: official-agents-from-vtex-cx-platform
legacySlug: agentes-oficiais-da-weni-by-vtex
locale: pt
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

Este artigo apresenta os agentes oficiais do VTEX CX Platform e as credenciais necessárias para atribuí-los a um time no Agent Builder. Para mais informações sobre como configurar os agentes em sua loja, acesse [Atribuir e testar agentes](https://help.vtex.com/pt/docs/tutorials/atribuir-e-testar-agentes).

## Feedback Recorder

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :---: | :--- | :--- | :---: |
| -- | CSAT (Customer Satisfaction Score) | Solicita que clientes avaliem a satisfação com a empresa, produto ou serviço em uma escala de 1 a 5. | -- |
| -- | NPS (Net Promoter Score) | Pergunta aos clientes, em uma escala de 0 a 10, qual é a probabilidade de recomendarem a empresa, produto ou serviço. | -- |

## Find Pickup Points

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| VTEX | VTEX Pickup Points | Permite que clientes encontrem lojas e pontos de coleta próximos usando o CEP. | `VTEX Account`: nome da sua conta VTEX. |

## Monitoring Agent

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :---: | :--- | :--- | :---: |
| -- | -- | Registra perguntas sem resposta ou fora do escopo do projeto e gera dados para relatórios no módulo **Análise**. | -- |

## Order Cancellation

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| VTEX | order_cancellation_vtex | Permite que clientes cancelem pedidos diretamente pelo chat. | `VTEX Base URL`: URL da sua conta VTEX. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `Weni API Token`: token da Weni. |

## Order Status

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| Intelipost | Order Status (Intelipost) | Consulta a Intelipost para informar status, rastreamento e outros dados relevantes sobre o pedido do cliente. | `API Key Intelipost`: chave da API Intelipost. <br> `VTEX Base URL`: URL da sua conta VTEX. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| Cadê Meu Pedido | Cadê Meu Pedido | Consulta o Cadê Meu Pedido para informar detalhes do pedido, como faturamento e rastreamento. | `CadeMeuPedido Base URL`: URL da sua conta no Cadê Meu Pedido. <br> `CadeMeuPedido Subdomain`: subdomínio da sua conta no Cadê Meu Pedido. |
| VTEX | Orders Agent - VTEX B2B | Consulta status e detalhes de pedidos B2B na VTEX. Permite acesso apenas a usuários autenticados com permissão para visualizar pedidos e deve ser usado com o Organizations Agent para autenticação. | `VTEX Account Name`: nome da sua conta VTEX. <br> `VTEX App Key (for Message Center)`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| VTEX | Pick and Pack | Consulta dados do VTEX Pick and Pack para responder dúvidas do cliente sobre pedidos. | `API Key Pick and Pack`: token da API do [Pick and Pack](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#chave-de-api). <br> `VTEX Base URL`: URL da sua conta VTEX. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| VTEX | VTEX Default | Consulta informações padrão sobre pedidos da VTEX para responder aos clientes. | `VTEX Account`: nome da sua conta VTEX. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Organizations Agent

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| VTEX | Organizations Agent | Autentica usuários B2B, verifica permissões de administrador e ajuda na seleção de organizações para compras. O agente gerencia o fluxo da autenticação até a criação da sessão. | `VTEX Account`: nome da sua conta VTEX. <br> `VTEX_API_APPKEY`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX_API_APPTOKEN`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Payment Agent

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| VTEX | B2B Checkout | Gerencia o carrinho e o checkout em lojas B2B na VTEX. Permite adicionar, atualizar e remover itens, exibir o carrinho, gerar o link de checkout e processar pedidos com pagamento por promissória de acordo com as permissões e os métodos de pagamento do cliente autenticado. Deve ser usado com o Organizations Agent para autenticação. | `VTEX Account`: nome da sua conta VTEX. <br> `Checkout URL`: URL do checkout na sua loja. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |
| VTEX | Checkout URL | Gerencia o carrinho e o checkout na VTEX. Permite adicionar, atualizar e remover itens, exibir o carrinho e gerar o link de checkout para o cliente concluir a compra no navegador. Também funciona com carrinhos criados antes da conversa atual. | `VTEX Account`: nome da sua conta VTEX. <br> `Checkout URL`: URL do checkout na sua loja. |
| VTEX | One-click Payment | Gerencia o carrinho, consulta opções de entrega e retirada, e processa pagamentos com cartão de crédito salvo na VTEX via OneClickPayment. Coleta o CVV com segurança pelo WhatsApp Flow. Se não houver cartão salvo ou o canal não for WhatsApp, envia o link de checkout para o cliente concluir a compra no navegador. | `VTEX Account`: nome da sua conta VTEX. <br> `Checkout URL`: URL do checkout na sua loja. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `WhatsApp CVV Flow ID`: identificador do seu formulário WhatsApp Flows. |
| VTEX | Pix & One-click Payment | Permite que o cliente pague com cartão de crédito salvo ou Pix. Para cartão de crédito, finaliza o checkout via OneClickPayment e coleta o CVV com segurança pelo WhatsApp Flow. Para Pix, envia o botão de pagamento com o código copia e cola. No webchat, envia o link de checkout para cartão de crédito e o código Pix em texto. | `VTEX Account`: nome da sua conta VTEX. <br> `Checkout URL`: URL do checkout na sua loja. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `WhatsApp CVV Flow ID`: identificador do seu formulário WhatsApp Flows. |
| VTEX | Pix Payment | Permite que o cliente pague com Pix pelo código copia e cola enviado no chat ou com cartão de crédito pelo link de checkout. Para cartão de crédito, o agente pode exibir opções de entrega, e o cliente informa os dados de pagamento na página de finalização da compra. | `VTEX Account (account name ou URL)`: nome da sua conta VTEX. <br> `Checkout URL`: URL do checkout na sua loja. <br> `Store URL`: URL da sua loja. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Product Concierge

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| Synerise | Default | Ajuda clientes a encontrar produtos por nome, marca ou características, como categoria e cor. Retorna preços, links e imagens. | `Synerise API Key`: chave da API da Synerise. <br> `Synerise Index`: índice da Synerise. |
| VTEX | Agent | Ajuda clientes a descobrir, explorar e escolher produtos do catálogo da loja. É recomendado para perguntas sobre produtos, preços, disponibilidade, recomendações ou navegação no catálogo. | `VTEX Account`: nome da sua conta VTEX. <br> `Store Domain URL`: URL da sua loja. |
| VTEX | Agent - B2B | Busca produtos em lojas B2B de acordo com as informações de `segment` e `session` do usuário autenticado. Deve ser usado com o Organizations Agent para autenticação. | `VTEX Account`: nome da sua conta VTEX. <br> `Store Domain URL`: URL da sua loja. |
| VTEX | Agent - Regionalized | Busca produtos no catálogo de forma regionalizada, usando a localização do cliente para exibir disponibilidade e preço. O agente solicita a localização quando ela não está disponível nos cookies da loja. | `VTEX Account`: nome da sua conta VTEX. <br> `Store Domain URL`: URL da sua loja. |
| VTEX | Fashion Segment | Busca produtos do segmento de moda usando filtros e coleções para refinar os resultados. | `VTEX Account`: nome da sua conta VTEX. <br> `Store Domain URL`: URL da sua loja. |

## Promotions Agent

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| VTEX | Promotions | Consulta promoções públicas e automáticas ativas da loja VTEX. É indicado para perguntas sobre promoções, descontos, cupons, frete grátis ou condições especiais. Retorna dados estruturados para que o manager apresente ao cliente. | `VTEX Account`: nome da sua conta VTEX. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Return and Exchange

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| Troquecommerce | Troquecommerce | Consulta o status de trocas e devoluções de pedidos na Troquecommerce a partir do CPF, CNPJ ou email do cliente. | `Subdomain (Troquecommerce)`: conta no Troquecommerce. <br> `Token Troquecommerce`: token no Troquecommerce. |
| Reversso | Reversso - Returns Agent | Gerencia devoluções e trocas de produtos usando a API da Reversso. | `Reversso MCP Endpoint URL`: URL do endpoint MCP Reversso. |
| Aftersale | Reverse Agent (Aftersale) | Gerencia devoluções e trocas de produtos usando a API da Aftersale. | `Token Aftersale API`: token da API Aftersale. |

## User Manager

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :--- | :--- | :--- | :--- |
| VTEX | VTEX B2B User Manager | Cadastra, pesquisa e remove usuários em organizações VTEX B2B via GraphQL. Requer autenticação prévia pelo Organizations Agent. | `VTEX Account`: nome da sua conta VTEX. <br> `VTEX App Key`: chave da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). <br> `VTEX App Token`: token da [API VTEX](https://developers.vtex.com/docs/guides/api-authentication-using-application-keys). |

## Utility Agent

| Sistema | MCP (Model Context Protocol) | Descrição | Credenciais necessárias |
| :---: | :--- | :--- | :---: |
| -- | -- | Fornece funções utilitárias para conversas com clientes, como conversão de moeda e previsão do tempo. | -- |
