---
title: Configurar PayPal Plus (PayPal Transparente)
id: 2akxq3I92k8A4kymIYOiWy
status: PUBLISHED
createdAt: 2018-02-20T20:15:36.950Z
updatedAt: 2023-03-29T01:12:02.453Z
publishedAt: 2023-03-29T01:12:02.453Z
firstPublishedAt: 2018-02-20T22:56:13.192Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-paypal-plus-paypal-transparente
legacySlug: configurar-paypal-plus-paypal-transparente
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

No gateway da VTEX, é possível configurar o subadquirente PayPal Plus, o checkout transparente da PayPal. Nesta modalidade, basta o cliente inserir as informações de __cartão de crédito__ e finalizar a compra normalmente. O pagamento é feito diretamente em seu site, sem redirecionar seus clientes. 

Para fazer as configurações, siga os passos abaixo:

## Configurar afiliação de gateway PayPal Plus

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __PayPal Plus__.

Preencha os campos de cadastro com os dados fornecidos pela PayPal, conforme abaixo.
- O *clientId* deve ser inserido no campo __ID do cliente__.
- O *secret* deve ser inserido no campo __Secret__.
- O *userName* deve ser inserido no campo __Nome de usuário__.
- A *password* deve ser inserida no campo __Senha__.
- A *signature* deve ser inserida no campo __Assinatura__.

Depois, siga estes passos:
1. No campo __Lembrar cartões__,  selecione __Sim__ para que o cliente possa selecionar a opção de salvar o cartão no momento do checkout. Caso não deseje habilitar esta opção, selecione __Não__.
2. Em __Moeda__, escolha a moeda da transação.
3. Em __Local__, selecione o local da transação.  
4. Clique em __Salvar__

## Configurar condição de pagamento PayPal Plus

1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __PayPal Plus__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Caso deseje, marque a caixa __Usar Antifraude__ para ativar o antifraude básico.
6. Como o pagamento com PayPal Plus é um pagamento com cartão de crédito, vocês pode escolher [configurar a condição de pagamento à vista ou parcelado](/pt/tutorial/condicoes-de-pagamento).
7. Caso queira, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
8. Após realizar as configurações, clique em __Salvar__.

Pronto! Agora será exibida no checkout a opção de pagamento por __cartão de crédito__ utilizando a [PayPal como subadquirente](/pt/tutorial/o-que-e-um-subadquirente).
