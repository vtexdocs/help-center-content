---
title: 'Configurar gateway Pagar.me'
id: egFyDkXjfa80wkSkUWsmc
status: PUBLISHED
createdAt: 2018-04-10T17:54:18.410Z
updatedAt: 2023-03-26T21:05:35.943Z
publishedAt: 2023-03-26T21:05:35.943Z
firstPublishedAt: 2018-04-10T18:10:52.337Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-pagar-me
locale: pt
legacySlug: configurar-gateway-pagar-me
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O Pagar.me é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que oferece diversas soluções para processar pagamentos na sua loja.

Para configurar o Pagar.me, siga os passos abaixo:

## Configurar afiliação de gateway Pagar.me
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __PagarMe__.
4. No campo __External Service Url__, você deve configurar a url externa que vai estar associada à `/pvt/payments?an={AccountName}`.
5. Preencha os campos de cadastro com os dados fornecidos pelo Pagar.me (campos __appKey__ e __appToken__).
6. Em __Implements Installments Service__, você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __Installments Service Url__.
7. Em __External Cancellation Service__, você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
8. Já no campo __Installments Service Url__, você deve configurar a url externa que vai estar associada à `/options`.
9. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
11. Em __Usa Antifraude__, informe se deseja usar um antifraude.
12. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o Pagar.me vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o Pagar.me). 
Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
