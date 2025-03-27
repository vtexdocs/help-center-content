---
title: 'DPAN e FPAN: entendendo a segurança no fluxo de pagamentos tokenizados online'
id: 3RM7RvhKZ057wja5xVEOqb
status: PUBLISHED
createdAt: 2023-06-19T16:55:51.107Z
updatedAt: 2023-06-26T13:27:44.965Z
publishedAt: 2023-06-26T13:27:44.965Z
firstPublishedAt: 2023-06-19T17:10:43.124Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: dpan-and-fpan-understanding-security-in-the-online-tokenized-payment-flow
locale: pt
legacySlug: dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online
subcategoryId: unknown-subcategory
---

Token é a representação digital de um ativo físico que possui valor comercial. No contexto de pagamentos, tokenização é um procedimento de segurança que permite proteger informações sensíveis dos clientes durante transações com cartões de crédito, débito ou carteiras digitais, como Apple Pay, Google Pay e Samsung Pay.

Primeiramente, é necessário compreender as seguintes informações relacionadas a um cartão:

- **PAN (Primary Account Number)**: número físico impresso na frente ou verso de um cartão de débito ou crédito, utilizado para identificar o titular de uma conta e a sua instituição financeira emissora. Contém entre 14 e 19 dígitos.

- **DPAN (Device Primary Account Number)**: versão tokenizada do PAN, utilizada em pagamentos móveis ou carteiras digitais. Este número é vinculado ao dispositivo móvel do usuário (smartphone, smartwatch, tablet) e à conta do titular do cartão. 

- **FPAN (Funding Primary Account Number)**: identificação da conta na qual será debitado o valor pago em uma transação de pagamento. Utilizado exclusivamente quando a compra é realizada por meio de carteiras digitais ou serviços que permitam a escolha de mais de uma forma de pagamento ao mesmo tempo, por exemplo, diferentes cartões de crédito, débito ou contas bancárias.

Veja abaixo, um exemplo de fluxo de pagamento utilizando tokens:

1. O cliente insere as informações do cartão em um site, aplicativo ou máquina, ou utiliza uma carteira digital como forma de pagamento em uma compra.

2. O provedor de pagamento ou sistema de carteira digital faz uma requisição à instituição financeira que emitiu o cartão, solicitando que seja criado um token para representar o PAN.

3. O banco gera o token (DPAN) e encaminha para o provedor de pagamento ou sistema de carteira digital. O PAN permanece registrado apenas no sistema do banco.

4. Durante o processamento da transação, o provedor de pagamento envia o DPAN ao banco, solicitando a autorização da transação. Quando aplicável, o FPAN também é gerado e encaminhado para autorização da transação.

5. O banco verifica a relação entre o DPAN e PAN, e autoriza o pagamento. No caso onde o FPAN é utilizado, o banco também irá verificar se o FPAN é válido e se a fonte de financiamento (conta) possui saldo suficiente, antes de autorizar o pagamento. 

6. A transação é concluída e o lojista recebe a confirmação de pagamento. O dado físico do cartão (PAN) não é compartilhado com o lojista ou terceiros, reduzindo o risco de acesso a fraudes.
