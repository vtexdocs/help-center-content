---
title: 'Por que os pedidos do marketplace não integram com minha loja?'
id: 275YvF8dyry5KmfY9epoET
status: PUBLISHED
createdAt: 2024-06-21T14:24:48.621Z
updatedAt: 2025-07-31T17:28:33.906Z
publishedAt: 2025-07-31T17:28:33.906Z
firstPublishedAt: 2024-06-21T14:48:49.434Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: why-dont-marketplace-orders-integrate-with-my-store
legacySlug: por-que-os-pedidos-do-marketplace-nao-integram-com-minha-loja
locale: pt
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags:
  - Pedidos
  - Marketplace
  - Integração
  - Estoque
  - SKU
---

Quando erros de integração em pedidos ocorrem entre um marketplace e sua loja, mensagens são exibidas na página de cada pedido, informando qual o erro ocorreu no pedido. Os possíveis erros de integração de pedido são os seguintes:  

- Dados de entrega incompletos.  
- Divergência de valores.  
- ID de SKU inválido.  
- Indisponibilidade de inventário.  
- Status de indisponibilidade.  
- Transportadora não cadastrada no ERP.  

Verifique o status da integração dos pedidos e as mensagens acessando no Admin VTEX. **Marketplace > Conexões > Pedidos** ou digite **Pedidos** na barra de busca.   

## Solução

| **Tipo de erro** | **Significado** | **Ação requerida** |
|:---:|:---:|:---:|
| **Dados de entrega incompletos** | Os dados para entrega estão incompletos ou preenchidos incorretamente. | Corrigir ou preencher os dados solicitados seguindo a documentação [Fluxo e status de pedidos.](/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) |
| **Divergência de valores** | O valor total do pedido pago no marketplace difere do valor esperado pela loja VTEX, e essa diferença de valor supera o percentual aceito pela loja VTEX ou a Taxa de divergência de preço não está configurada.<br>**Exemplo**<br>O total pago pelo pedido no marketplace é igual R$ 311,77, o valor esperado pela loja é igual R$ 313,61. Ou seja, pedido tem uma diferença de R$ 1,84. | [Reprocessar o pedido](/pt/tutorial/verificando-integracao-no-bridge#pedidos) ou Configurar a [Regra de divergência de valores.](/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) |
| **ID de SKU inválido** | Os IDs dos produtos cadastrados na política comercial são diferentes dos IDs cadastrados no marketplace. | Alterar os IDs dos SKUs no marketplace, para terem os mesmos códigos dos produtos na política comercial. |
| **Indisponibilidade inventário** | O SKU não está sendo exibido no marketplace.<br>Veja a lista completa de [Erros de integração de estoque com marketplaces.](/pt/tutorial/erros-de-integracao-de-estoque-com-marketplaces--32bcsv9Dx1Dtl0YQOwWDpc) | Aplicar a correção requerida conforme o erro identificado na documentação [Erros de integração de estoque com marketplaces.](/pt/tutorial/erros-de-integracao-de-estoque-com-marketplaces--32bcsv9Dx1Dtl0YQOwWDpc)<br>  |
| **Status de indisponibilidade** | O produto está disponível em sua loja, porém o marketplace bloqueou o item em sua vitrine. O status do pedido aparecerá como **Unavailable.** | Entrar em contato com o marketplace para a liberação do pedido. |
| **Transportadora não cadastrada no ERP** | Transportadora selecionada para a entrega do produto não está cadastrada no ERP.<br>**Exemplo**<br>Transportadora nova foi cadastrada na VTEX, mas não foi cadastrada no ERP. | Atualizar o cadastro de transportadoras no ERP conforme as cadastradas na VTEX. |

