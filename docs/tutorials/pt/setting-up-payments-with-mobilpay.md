---
title: 'Configurar pagamento com MobilPay'
id: 3NG5rHR700xg8CaPy1IGRn
status: DRAFT
createdAt: 2022-02-22T15:08:29.690Z
updatedAt: 2022-12-23T20:29:50.244Z
publishedAt: 
firstPublishedAt: 2022-02-22T19:37:58.721Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-mobilpay
legacySlug: configurar-pagamento-com-mobilpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Mobilpay. Com este conector, sua loja pode realizar vendas por meio de carteira digital (Wallet) da Mobilpay.

Para configurar a afiliação Mobilpay, siga os passos abaixo:

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. Na aba __Afiliações de Gateways__, clique no botão __+__.
5. Clique no conector __MobilPay__.
6. Em __SellerAccountId__, informe os seus dados de identificação (Id) ou assinatura informados pela MobilPay.
7. Em __Country__, selecione o país onde sua loja irá operar.
8. Em __Currency__, selecione a moeda na qual sua loja irá receber os pagamentos.
9. Em __Language__, selecione em qual lingua as informações de pagamento serão mostradas.
10. Em __Certificate [.cer]__, clique no botão __Upload__ para carregar o certificado (extensão .cer) disponível em sua conta MobilPay.
11. Em __Private Key [.key]__, clique no botão __Upload__ para carregar o certificado (extensão .key) disponível em sua conta MobilPay.
12. Nos campos __UserName__ e __Password__, insira os seus dados utilizados para chamar os métodos de captura e crédito da API MobilPay.
13. Clique em __Salvar__.

## Configurar condição de pagamento

1. Acesse o __Admin__ VTEX.
2. Clique em __Pagamentos__.
3. Em seguida, clique em __Configurações__.
4. Na aba __Condições de Pagamentos__, clique no botão __+__.
5. Selecione a condição de pagamento __MobilPay__.
6. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
7. Ative a condição no campo __Status__.
8. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
9. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
10. Clique em __Salvar__.

Depois de seguir os passos indicados, o conector MobilPay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
