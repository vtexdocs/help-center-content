---
title: 'Definir meios de pagamento exibidos no VTEX Sales App'
id: jHQQcyX3WKeUFidwSjmY1
status: PUBLISHED
createdAt: 2021-09-27T20:54:02.947Z
updatedAt: 2026-03-02T17:16:01.041Z
publishedAt: 2023-07-05T17:16:01.041Z
firstPublishedAt: 2021-09-27T20:57:59.730Z
contentType: trackArticle
productTeam: Shopping
slugEN: define-payment-methods-displayed-on-vtex-sales-app
locale: pt
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: vtex-sales-app-payments
order: 6
---

Após configurar os meios de pagamento da sua loja, é preciso criar filtros para disponibilizá-los para os clientes no checkout do **VTEX Sales App**.

Para isso, será necessário incluir um trecho de código JavaScript no arquivo `checkout-instore-custom.js` da sua loja. O passo a passo completo está disponível no guia [Define payment methods displayed on VTEX Sales App](https://developers.vtex.com/docs/guides/define-payment-methods-displayed-on-vtex-sales-app).

> ❗ Recomendamos que qualquer alteração no arquivo `checkout-instore-custom.js` seja feita por uma pessoa desenvolvedora, pois erros nesta etapa podem causar problemas críticos para a loja.

## Localizar o ID da condição de pagamento

Em uma das etapas de configuração do `checkout-instore-custom.js`, é preciso informar os IDs das condições de pagamento. Para identificá-los, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de pagamento**, busque a opção desejada. Caso queira, filtre os resultados usando a barra de busca.
3. O ID do meio de pagamento é o código numérico que aparece no topo direito. No exemplo a seguir, o ID do `Mastercard` com parcelamento de 1x a 10x é `4`:

![INSERT IMAGE](link)

> ℹ️ As informações completas para definir os meios de pagamento exibidos no **VTEX Sales App** estão disponíveis no guia [Define payment methods displayed on VTEX Sales App](https://developers.vtex.com/docs/guides/define-payment-methods-displayed-on-vtex-sales-app).
