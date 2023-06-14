---
title: 'Configurar pagamentos com OneBuy'
id: 1fgHy2pgQGQgCiEGYi0m2M
status: PUBLISHED
createdAt: 2018-04-12T13:08:01.424Z
updatedAt: 2023-03-29T00:49:49.514Z
publishedAt: 2023-03-29T00:49:49.514Z
firstPublishedAt: 2018-04-12T15:12:01.050Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-pagamentos-com-onebuy
legacySlug: configurar-pagamentos-com-onebuy
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Você pode configurar a OneBuy para receber pagamentos na sua loja. Nesta modalidade, seu cliente escolhe o __meio de pagamento__ OneBuy para efetuar a compra.

Para configurar a OneBuy, siga os passos abaixo:

## Configurar afiliação de gateway OneBuy
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __OneBuy__.
4. No campo __External Service Url__, você deve configurar a url externa que vai estar associada a `/pvt/payments?an={AccountName}`.
5. Preencha os campos de cadastro com os dados fornecidos pela OneBuy (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__, você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __Installments Service Url__.
7. Em __External Cancellation Service__, você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
8. Já no campo __Installments Service Url__, você deve configurar a url externa que vai estar associada a `/options`.
9. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
11. Em __Usa Antifraude__, informe se deseja usar um antifraude.
12. Clique em __Salvar__.

## Configurar condição de pagamento OneBuy
1. Já dentro das __Configurações__ do módulo de Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Selecione o meio de pagamento __OneBuy__.
4. Clique no botão __Status__ para ativar essa condição de pagamento.
5. O campo __Processar com a afiliação__ já vai estar preenchido pela opção _OneBuy_.
6. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
7. Escolha se deseja que os pagamentos sejam feitos à vista ou parcelados.
8. Se quiser, você também pode optar por uma [condição especial de pagamento](/pt/tutorial/condicoes-especiais).
9. Clique em __Salvar__.

Depois de seguir os passos indicados, a OneBuy vai aparecer no checkout da sua loja como uma opção de pagamento para seus clientes utilizarem.
