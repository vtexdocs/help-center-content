---
title: Configurar gateway Paymentez
id: 7zmH2WCtVuAoUUQWyU2qgO
status: PUBLISHED
createdAt: 2018-03-28T17:47:41.909Z
updatedAt: 2023-03-26T22:08:53.622Z
publishedAt: 2023-03-26T22:08:53.622Z
firstPublishedAt: 2018-03-28T18:18:57.206Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-paymentez
legacySlug: configurar-gateway-paymentez
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Paymentez é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que possui certificação [PCI](/pt/faq/o-que-e-o-pci-ssc) nível 2 e tem sua atuação concentrada na América Latina.

Para configurar a Paymentez, siga os passos abaixo:

## Configurar afiliação de gateway Paymentez
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Paymentez__.
4. No campo __External Service Url__, você deve configurar a url externa que vai estar associada à `/pvt/payments?an={AccountName}`.
5. Preencha os campos de cadastro com os dados fornecidos pela Paymentez (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__, você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __Installments Service Url__.
7. Em __External Cancellation Service__, você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
8. Já no campo __Installments Service Url__, você deve configurar a url externa que vai estar associada à `/options`.
9. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
11. Em __Tem um antifraude contratado com essa afiliação?__, informe se deseja usar um antifraude.
12. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Paymentez vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Paymentez). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
