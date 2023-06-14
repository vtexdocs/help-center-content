---
title: 'Configurar adquirente Getnet'
id: 5jKTzassnCkOcU4AIGc6W6
status: DRAFT
createdAt: 2018-03-05T19:25:46.439Z
updatedAt: 2020-04-24T15:04:58.459Z
publishedAt: 
firstPublishedAt: 2018-03-05T20:43:53.372Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-adquirente-getnet
legacySlug: configurar-adquirente-getnet
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Getnet é um dos maiores [adquirentes](/pt/tutorial/o-que-e-um-adquirente) do Brasil e conta com as principais bandeiras de cartões em sua rede de adquirência, inclusive algumas que atuam regionalmente.

Para configurar a Getnet, siga os passos abaixo:

## Configurar afiliação de gateway Getnet

1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __Getnet__.
5. No campo __External Service Url__, você deve configurar a url externa que vai estar associada à `/pvt/payments?an={AccountName}`.
6. Preencha os campos de cadastro com os dados fornecidos pela Getnet (campos _appKey_ e _appToken_).
7. Em __Implements Installments Service__, você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __Installments Service Url__.
8. Em __External Cancellation Service__, você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
9. Já no campo __Installments Service Url__, você deve configurar a url externa que vai estar associada à `/options`.
10. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
11. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
12. Em __Usa Antifraude__, informe se deseja usar um antifraude.
13. Clique em __Salvar__.

## Configurar condição de pagamento

Depois de seguir os passos indicados, a Getnet vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Getnet). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
