---
title: 'Configurar o subadquirente MercadoPagoV2'
id: 1y6k8lCSzJYfPs2yObNFo4
status: PUBLISHED
createdAt: 2021-11-30T18:49:42.837Z
updatedAt: 2023-03-22T18:35:39.911Z
publishedAt: 2023-03-22T18:35:39.911Z
firstPublishedAt: 2021-11-30T19:32:27.420Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-o-subadquirente-mercadopagov2
legacySlug: configurar-o-subadquirente-mercadopagov2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

No gateway da VTEX, você pode configurar o [subadquirente](https://help.vtex.com/pt/tutorial/o-que-e-um-subadquirente) MercadoPagoV2. Por meio dele, sua loja pode receber os pagamentos pelos métodos tradicionais, como: boleto, PIX, cartões de débito e crédito, bem como por métodos exclusivos do Mercado Pago, como: MercadoPagoOff, MercadoPagoPro e MercadoPagoWallet.

<div class="alert alert-warning">
  Os subadquirentes <strong>MercadoPago</strong> e <strong>MercadoPagoV1</strong> não permitem o recebimento por meio do PIX. Esta é uma característica exclusiva do <strong>MercadoPagoV2</strong>.
</div>

## Configurar afiliação de gateway MercadoPagoV2

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no __botão “+”__.
3. Clique no conector __MercadoPagoV2__.
4. Preencha os campos de cadastro __Application Key__ e __Application Token__ com os dados fornecidos pelo Mercado Pago.
5. Em __Prazo de vencimento do boleto__, escolha a quantidade de dias (contados a partir da geração do boleto) que seu cliente terá para fazer o pagamento.
6. Informe o nome da sua empresa no campo __Nome da loja__. Lembre-se de que essa é a informação que será descrita no campo Beneficiário do boleto ou na fatura do cartão do cliente.
7. Em __Parcelamento máximo__, escolha a quantidade máxima de parcelas enviadas ao Mercado Pago.
8. Em __Categoria principal da loja__, escolha a categoria que mais se encaixa com sua loja.
9. Na opção __Reembolso automático / manual__, escolha se o cliente será reembolsado de forma automática ou manualmente em caso de cancelamento da ordem.
10. Em __Modo binário__, selecione “Sim” ou “Não”. Selecionar “Sim”, indica que o processo de aprovação do pagamento ocorra instantaneamente, podendo ser aprovado ou recusado. Selecionar “Não”, indica que o pagamento pode ficar no status “pendente” (caso exija qualquer ação do comprador) ou “em processo” (se for necessária uma revisão manual).
11. Em __Métodos de pagamento excluídos__, descreva os métodos de pagamentos que não deseja utilizar por meio do MercadoPagoV2 (opcional). Caso opte por deixar em branco este campo, todos os métodos de pagamento disponíveis do MercadoPagoV2 estarão disponíveis em sua loja.
12. Em __Tipos de pagamento excluídos__,  descreva as bandeiras específicas de crédito e débito (Visa, Mastercard, entre outros) que não deseja utilizar por meio do MercadoPagoV2 (opcional). Caso opte por deixar em branco este campo, todos os tipos de pagamento disponíveis do MercadoPagoV2 estarão disponíveis em sua loja.
13. Em __Modo de processamento__, escolha como você quer usar o MercadoPagoV2 ( subadquirente ou gateway). Para maiores informações, acesse [O que é um subadquirente?](https://help.vtex.com/pt/tutorial/o-que-e-um-subadquirente--64aX6PeRQQ66O8uCqo0W4q#) e [O que é um gateway de pagamentos?](https://help.vtex.com/pt/tutorial/o-que-e-um-gateway-de-pagamentos--2KH9Wdi7F6swOU4amECSOk#). 
14. Na opção __Integrator ID__, indique o código identificador do programador ou agência que realiza a configuração do Mercado Pago.
15. Na opção __Moeda__, escolha se a moeda utilizada no pagamento será “Local” (cada país) ou “Dólar Americano” (USD).
16. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o MercadoPagoV2 estará configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele estará disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o MercadoPagoV2).

Para saber como definir condições de pagamento, acesse [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

## Configurar métodos exclusivos de pagamento

Para saber como configurar métodos exclusivos de pagamento do Mercado Pago, acesse [configurar Mercado Pago Offline e Wallet como métodos de pagamento](https://help.vtex.com/pt/tutorial/configurar-mercado-pago-offline-e-wallet-como-metodos-de-pagamentos).

Para maiores informações sobre a integração com o Mercado Pago, acesse o [DevSite Mercado Pago](https://www.mercadopago.com.br/developers/pt/guides/plugins/unofficial/vtex/gateway-affiliations).
