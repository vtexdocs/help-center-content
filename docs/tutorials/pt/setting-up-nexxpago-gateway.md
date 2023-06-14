---
title: 'Configurar gateway Nexxpago'
id: 28Fgmof1WYEeAcM8MkOcWm
status: PUBLISHED
createdAt: 2018-04-18T15:46:11.611Z
updatedAt: 2023-03-29T01:08:32.601Z
publishedAt: 2023-03-29T01:08:32.601Z
firstPublishedAt: 2018-04-18T16:05:40.588Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-nexxpago
locale: pt
legacySlug: configurar-gateway-nexxpago
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Nexxpago é uma empresa com certificação [PCI](/pt/faq/o-que-e-o-pci-ssc) que oferece diversas soluções de pagamento. A principal delas é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que permite o processamento de pagamentos por meio de boletos bancários e cartões de crédito.

Para configurar a Nexxpago, siga os passos abaixo:

## Configurar afiliação de gateway Nexxpago
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Nexxpago__.
4. No campo __External Service Url__("URL externa do serviço), você deve configurar a url externa que vai estar associada a `/pvt/payments?an={AccountName}`.
5. Preencha os campos de cadastro com os dados fornecidos pela Nexxpago (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__ ("Implementação do serviço de parcelamentos"), você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a URL configurada no campo __Installments Service Url__ ("URL serviço de parcelamentos").
7. Em __External Cancellation Service__("Serviço de cancelamento externo"), você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__ ("URL externa do serviço").
8. Já no campo __Installments Service Url__ ("URL serviço de parcelamentos"), você deve configurar a url externa que vai estar associada a `/options`.
9. Em __SoftDescriptor__ ("Descrição da Transação"), indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
11. Em __Usa Antifraude__, informe se deseja usar um antifraude.
12. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Nexxpago vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Nexxpago). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
