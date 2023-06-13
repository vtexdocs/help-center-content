---
title: Configurar gateway Conductor
id: Q5Ezi95TSEyE2GCQSs8ak
status: PUBLISHED
createdAt: 2018-05-02T17:09:15.090Z
updatedAt: 2023-03-29T00:55:20.862Z
publishedAt: 2023-03-29T00:55:20.862Z
firstPublishedAt: 2018-05-02T18:38:56.879Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-conductor
legacySlug: configurar-gateway-conductor
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Conductor é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) com certificação [PCI](/pt/faq/o-que-e-o-pci-ssc) que atua há mais de 20 anos com o processamento de pagamentos. Na VTEX, ela pode ser configurada para processar pagamentos realizados com __cartões de crédito com bandeira própria__.

Para habilitar a Conductor na sua loja, siga os passos abaixo:

## Configurar afiliação de gateway Conductor
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Conductor__.
4. No campo __External Service Url__, configure a url externa que vai estar associada a `/pvt/payments?an={AccoutName}`.
5. Preencha os campos de cadastro com os dados fornecidos pela Conductor (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__, escolha se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __Installments Service Url__.
7. Em __External Cancellation Service__, defina o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
8. Já no campo __Installments Service Url__, configure a url externa que vai estar associada à `/options`.
9. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de Segurança Antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
11. Em __Usa Antifraude__, informe se você tem ou não antifraude configurado na Conductor.
12. Clique em __Salvar__.

## Configurar pagamentos customizados
Depois de seguir os passos indicados, a Conductor vai estar configurada na sua loja. Assim, quando você for cadastrar um __Cartão da Loja (Bandeira Própria)__, ela vai estar disponível no campo __Processar com a afiliação__. Para saber como cadastrar pagamentos customizados, acesse [este artigo](/pt/tutorial/como-configurar-pagamento-customizado).
