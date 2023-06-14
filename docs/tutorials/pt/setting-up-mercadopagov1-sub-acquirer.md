---
title: Configurar o subadquirente MercadoPagoV1
id: 6wTlR3UTJe6YMAsEuquO26
status: PUBLISHED
createdAt: 2018-03-08T13:05:57.452Z
updatedAt: 2023-03-22T18:05:53.962Z
publishedAt: 2023-03-22T18:05:53.962Z
firstPublishedAt: 2018-03-08T19:45:23.370Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-subadquirente-mercadopagov1
legacySlug: configurar-o-subadquirente-mercadopagov1
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

No gateway da VTEX, você pode configurar o [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) MercadoPago para operar de várias formas. O __MercadoPagoV1__ permite que sua loja receba pagamentos com cartões de débito e crédito, além da [carteira digital](/pt/faq/o-que-e-uma-carteira-digital-e-wallet) Mercado Pago.

<div class="alert alert-warning">
A afiliação <strong>MercadoPagoV1</strong> não suporta pagamentos por boleto bancário.
</div>

Para configurar o MercadoPagoV1, siga os passos abaixo:

## Configurar afiliação de gateway MercadoPagoV1

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __MercadoPagoV1__.
4. O campo __OAuth login__ não é utilizado. Deixe-o como está.
5. Preencha os campos de cadastro __PublicKey__ e __AccessToken__ com os dados fornecidos pelo MercadoPago.
6. Deixe os campos __RefreshToken__, __ExpiredTokenIn__ e __Merchant Account Id__ em branco.
7. Em __Processing Mode__, escolha como você quer usar o MercadoPagoV1: como gateway ou subadquirente.
8. No campo __CountryName__, selecione o país da sua loja.
9. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
10. Já em __Description__, escreva uma breve descrição do seu negócio (o preenchimento é opcional).
11. No campo __CategoryId__, escolha a categoria dos produtos que você vende na sua loja.
12. Já o campo __Financial Institution__ é opcional e deve ser preenchido apenas se sua loja operar do Chile.
13. Em __Use External Installments__, selecione se quer usar ou não o serviço de parcelamento do MercadoPagoV1.
14. No campo __Antifraud__, informe se deseja usar um antifraude.
15. Em __Time Zone__, indique a região que define seu horário local.
16. Em __orderExpirationHours__, defina por quantas horas o sistema deve checar o status do pedido antes de sua expiração. Quando essa opção não é preenchida, é adotado o padrão de 192 horas.
17. No campo __maxInstallments__, escolha a quantidade máxima de parcelas enviadas ao MercadoPago.
18. Em __Categoria Principal__, escolha a categoria que mais se encaixa com sua loja.
19. Já o campo __Captura de segurança antecipada__ é opcional e deve ser preenchido apenas por lojas na Argentina e no Brasil. Você pode desativar a função ou escolher em quanto tempo quer realizar a captura (depois da aprovação da tranasção e da análise do antifraude).
20. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o MercadoPagoV1 vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o MercadoPagoV1).

Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).

Para maiores informações sobre a integração com o Mercado Pago, acesse o [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/plugins/unofficial/vtex/gateway-affiliations).
