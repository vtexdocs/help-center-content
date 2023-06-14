---
title: 'Configurar pagamento com CieloV4'
id: 7M2CqJxprwpDtbgLZHBoiI
status: PUBLISHED
createdAt: 2022-07-20T14:25:28.188Z
updatedAt: 2023-03-26T21:25:12.482Z
publishedAt: 2023-03-26T21:25:12.482Z
firstPublishedAt: 2022-07-20T17:07:25.186Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-cielov4
locale: pt
legacySlug: configurar-pagamento-com-cielov4
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o gateway CieloV4. Com este conector, sua loja pode realizar vendas com cartão de crédito, débito e private labels. 

Para configurar a afiliação CieloV4, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateway__, clique no botão `+`.
3. Clique no conector __CieloV4__.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Cielo.
5. Em __Provider__, selecione o adquirente a ser utilizado com o conector CieloV4.
6. Em __IsSplit__, escolha se a opção de split estará disponível.
7. Em __UseMPi__, escolha se as transações serão autenticadas. Caso selecione “Yes”, siga para o Passo 10. Caso selecione “No”, siga para o Passo 11.
8. Preencha os campos __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__ e __MpiEstablishmentCode__ com os seus dados de acesso Mpi.
9. Em __Ativar split e enviar recebedores?__, selecione se o split de pagamentos estará disponível para o marketplace e os sellers.
10. Clique em `Salvar`.

## Configurar condição de pagamento

Para configurar o pagamento por cartões de crédito ou débito, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para configurar o pagamento por cartões private labels, acesse [Configurar pagamentos com Cartões de Loja](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4#).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete).

Depois de seguir os passos indicados, o conector CieloV4 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
