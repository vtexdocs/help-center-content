---
title: Configurar pagamento com PayPal
id: 4p3sD9u1moq2Aya2oc684w
status: PUBLISHED
createdAt: 2018-02-21T17:15:53.516Z
updatedAt: 2023-03-21T20:46:52.481Z
publishedAt: 2023-03-21T20:46:52.481Z
firstPublishedAt: 2018-02-21T17:54:19.079Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-paypal
legacySlug: configurar-paypal
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

No gateway da VTEX, é possível configurar o subadquirente PayPal para receber seus pagamentos. Nesta modalidade, o seu cliente escolhe o __meio de pagamento__ PayPal e realiza sua autenticação no ambiente do PayPal.

Para fazer as configurações, siga os passos abaixo:

## Configurar afiliação de gateway PayPal

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __PayPal__.

Preencha os campos de cadastro com os dados fornecidos pela PayPal, conforme abaixo.
- O *API username* deve ser inserido no campo __Nome de usuário da API__.
- O *API password* deve ser inserido no campo __Senha da API__.
- O *Signature* deve ser inserido no campo __Assinatura__.

Para obter estas informações, você pode acessar o seu [Dashboard na PayPal](https://developer.paypal.com/dashboard/) ou entrar em contato com o [suporte da PayPal](https://www.paypal.com/br/smarthelp/contact-us).

Em __Moeda__, escolha a moeda da transação. E em __Local__, selecione o local da transação.  

Por fim, clique em __Salvar__.

## Configurar condição de pagamento PayPal

1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __PayPal__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Caso deseje, marque a caixa __Usar Antifraude__ para ativar o antifraude básico.
6. Caso queira, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
7. Após realizar as configurações, clique em __Salvar__.

__Pronto!__ Agora será exibida no checkout a opção de pagamento utilizando PayPal. Depois de clicar em __Finalizar Compra__, o cliente será redirecionado para o ambiente do PayPal para realizar sua autenticação e preencher os dados do cartão de crédito.

<div class="alert alert-warning" role="alert">
  <strong>Nota:</strong> Pagamento parcelado não está disponível para este meio de pagamento.
</div>
