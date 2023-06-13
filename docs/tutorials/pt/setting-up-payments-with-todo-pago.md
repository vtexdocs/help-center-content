---
title: Configurar pagamento com Todo Pago
id: 4nO5e9gKLCsQmkAASouiMM
status: DRAFT
createdAt: 2018-03-01T19:18:03.810Z
updatedAt: 2022-12-23T20:46:56.078Z
publishedAt: 
firstPublishedAt: 2018-03-01T21:30:00.544Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamento-com-todo-pago
legacySlug: configurar-pagamento-com-todo-pago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Todo Pago é uma digital wallet argentina que funciona como um [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) no fluxo de pagamento. Seu cliente precisa escolher o __meio de pagamento__ Todo Pago na sua loja e realizar a autenticação no ambiente da wallet.

Para configurar o Todo Pago, siga os passos abaixo:

## Configurar afiliação de gateway Todo Pago
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __TodoPago__.
4. Preencha os campos de cadastro com os dados fornecidos pelo Todo Pago (campos _Authorization_, _Merchant_, _Security_).
5. No campo __Currency__, escolha a moeda da transação (atualmente, só está habilitado o uso de Pesos Argentinos).
6. Em __Maximum Installments__, você define o número máximo de parcelas para oferecer ao seu cliente.
7. Clique em __Salvar__.


## Configurar condição de pagamento Todo Pago
1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __TodoPago__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Se você tiver um antifraude configurado, poderá selecionar a opção __Usar Antifraude__.
6. Faça a configuração da [condição de pagamento](/pt/tutorial/condicoes-de-pagamento): à vista ou parcelado.
7. Você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Clique em __Salvar__.

Depois de seguir todos os passos indicados, seu cliente poderá escolher a opção de pagamento Todo Pago no checkout. Clicando em __Finalizar Compra__, seu cliente vai ser redirecionado para o ambiente do Todo Pago, onde vai poder escolher entre acessar sua conta ou usar um cartão diferente.
