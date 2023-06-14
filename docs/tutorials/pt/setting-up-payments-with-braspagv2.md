---
title: 'Configurar pagamento com BraspagV2'
id: 6gaw7zu9wlItgjfDVndRPn
status: PUBLISHED
createdAt: 2022-01-20T19:41:22.154Z
updatedAt: 2023-03-22T19:03:11.096Z
publishedAt: 2023-03-22T19:03:11.096Z
firstPublishedAt: 2022-01-21T16:38:10.049Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-braspagv2
locale: pt
legacySlug: configurar-pagamento-com-braspagv2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o gateway BraspagV2. Com este conector, sua loja pode realizar vendas com cartão de crédito, débito e vouchers. Para configurar a BraspagV2, siga os passos abaixo:

## Configurar afiliação de gateway BraspagV2

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateway__, clique no botão __+__.
3. Clique no conector __BraspagV2__.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta BraspagV2.
5. Em __Provider__, selecione o adquirente a ser utilizado com o conector BraspagV2.
6. Em __IsSplit__, escolha se a opção de split estará disponível.
7. Em __UseMPi__, escolha se as transações serão autenticadas. Caso selecione “Yes”, siga para o Passo 10. Caso selecione “No”, siga para o Passo 11.
8. Preencha os campos __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__ e __MpiEstablishmentCode__ com os seus dados de acesso Mpi.
9. Em __Ativar split e enviar recebedores?__, selecione se o split de pagamentos estará disponível para o marketplace e os sellers.
10. Clique em __Salvar__.

## Configurar condição de pagamento

Para configurar os meios de pagamento a serem processados pelo gateway da BraspagV2 na VTEX, acesse o nosso [tutorial](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).
