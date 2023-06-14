---
title: 'Configurar gateway PagHiper'
id: I3KXAIIJG0oyyg4A4MykE
status: PUBLISHED
createdAt: 2018-04-09T22:06:11.621Z
updatedAt: 2023-03-29T01:13:11.291Z
publishedAt: 2023-03-29T01:13:11.291Z
firstPublishedAt: 2018-04-09T22:43:35.309Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-paghiper
legacySlug: configurar-gateway-paghiper
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A PagHiper é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) especializado no processamento de compras realizadas por boletos bancários.

Para configurar a PagHiper, siga os passos abaixo:

## Configurar afiliação de gateway PagHiper
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __PagHiper__.
4. No campo __External Service Url__, você deve configurar a url externa que vai estar associada à `/pvt/payments?an={AccountName}`.
5. Preencha os campos de cadastro com os dados fornecidos pela PagHiper (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__, você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a URL configurada no campo __Installments Service Url__.
7. Em __External Cancellation Service__, você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
8. Já no campo __Installments Service Url__, você deve configurar a url externa que vai estar associada à `/options`.
9. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __email__, informe o e-mail de cadastro na PagHiper.
11. Em __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
12. Em __Usa Antifraude__, informe se deseja usar um antifraude.
13. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a PagHiper vai estar configurado na sua loja. Assim, quando você for cadastrar um boleto como condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__. 
Para saber como habilitar o boleto bancário como opção de pagamento para seus clientes, [este artigo do Help](/pt/tutorial/como-configurar-boleto-bancario).
