---
title: 'Configurar gateway maxiPago!'
id: 5yUVMQON0WqaGG8Owi4oAU
status: DRAFT
createdAt: 2018-04-20T16:23:13.404Z
updatedAt: 2022-12-23T20:25:57.357Z
publishedAt: 
firstPublishedAt: 2018-04-20T20:59:21.701Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-maxipago
locale: pt
legacySlug: configurar-gateway-maxipago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A maxiPago! é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que integra com os principais adquirentes e meios de pagamento do Brasil.

Para configurar a maxiPago!, siga os passos abaixo:

## Configurar afiliação de gateway maxiPago!
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __MaxiPago__.
5. Preencha os campos de cadastro com os dados fornecidos pela maxiPago! (campos _Merchant Id_ e _Merchant Key_).
6. No campo __Moeda__, escolha a moeda que será usada nas transações da sua loja.
7. Em __Tipo de parcelamento__, defina se o parcelamento terá ou não a incidência de juros.
8. Nos campos __Visa__, __Mastercard__, __Diners__, __Discover__, __Amex__, __ELO__, __Hipercard__ e __Credz__, selecione os adquirentes que vão ser usados para passar cada cartão. A escolha vai depender do contrato com a maxiPago!.
9. Em __Boleto Bancário__, defina o banco que vai ser usado para gerar os boletos. Essa escolha também depende do contrato com a maxiPago!.
10. No campo __Instruções no boleto ao Caixa__, escreva as instruções que serão impressas no boleto.
11. Em __Validade do boleto em dias__, selecione o número de dias para pagamento até que o boleto deixe de valer.
12. No campo __Processador de Antifraude__, escolha o antifraude que você tem configurado na maxiPago! ou desabilite a função.
13. Em __Boleto Registrado__, informe se o boleto tem ou não registro.
14. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
15. Em __Tem um antifraude contratado com essa afiliação?__, informe se você tem ou não antifraude configurado na maxiPago!
16. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a maxiPago! vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a maxiPago!). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
