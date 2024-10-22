---
title: 'Configurar pagamentos customizados'
id: 1wWt35dRwEboRs1nrSx7G0
status: PUBLISHED
createdAt: 2019-11-12T14:02:06.237Z
updatedAt: 2023-10-18T14:41:42.080Z
publishedAt: 2023-10-18T14:41:42.080Z
firstPublishedAt: 2019-11-25T15:33:37.696Z
contentType: trackArticle
productTeam: Financial
slugEN: how-to-configure-a-custom-payment
locale: pt
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugPT: pagamentos
---

O **meio de pagamento customizado** é uma alternativa às opções oferecidas por padrão pelo módulo de Pagamentos. 

É possível customizar pagamentos dentro de três categorias: **Promissórias**, **Cartões da Loja (bandeira própria)**, e **Cartões da Loja (Co-Branded)**. 

Cada categoria permite cinco configurações, totalizando 15 possíveis alternativas de pagamentos customizados. 

### Promissórias
Promissória é uma promessa de pagamento que precisa de aprovação manual do lojista para aprovar a transação. É frequentemente usada para disponibilizar o pagamento através de dinheiro.  

### Cartões da Loja (bandeira própria)
Permite que utilize um cartão de crédito com bandeira própria da Loja.  

### Cartões da Loja (Co-Branded)
Permite que você utilize um cartão de crédito da loja com uma das seguintes bandeiras: Mastercard, Visa, Amex e Diners.  

## Como configurar pagamentos customizados

1.  No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.  
2.  Acesse a aba **Pagamentos Customizados**.  
3.  Selecione uma das opções de pagamento customizado.  
4.  Preencha os campos do formulário e clique em  **Salvar**.

![PT Pagamento Customizado](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/payments/configurar-pagamentos-customizados_1.gif)

Após essa configuração, será necessária a criação da [Condição de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento/).  

> _Recomendamos o **uso da aprovação automática** apenas em casos em que o pagamento será realizado no **momento da entrega** ou da **retirada na loja**. Essa opção autoriza o pagamento do pedido, ou seja, o pedido passa automaticamente para o status de Preparando Entrega, sem a verificação do pagamento._
