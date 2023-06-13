---
title: Configurar o gateway VTEX Standard
id: 3B0uJ5XGVqecaII8WG0qaE
status: DRAFT
createdAt: 2018-06-21T22:12:51.416Z
updatedAt: 2020-05-21T22:16:51.280Z
publishedAt: 
firstPublishedAt: 2018-06-21T22:31:36.348Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-gateway-vtex-standard
legacySlug: configurar-o-gateway-vtex-standard
subcategory: 
---

A VTEX possui um gateway nativo com certificação do [PCI Security Standards Council](/pt/faq/o-que-e-o-pci-ssc). Isso significa que ele segue os mais altos padrões de segurança de dados, garantindo mais proteção para as transações realizadas na sua loja.

São três conectores diferentes: com o __VTEX Standard__ configurado, sua loja vai processar pagamentos realizados com cartões de crédito e pagamentos customizados. É só seguir os passos abaixo:

## Configurar afiliação de gateway VTEX Standard
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __VTEX Standard__.
5. No campo __External Service Url__, configure a url externa que vai estar associada a `/pvt/payments?an={AccoutName}`.
6. Preencha os campos de cadastro com os dados fornecidos pela VTEX (campos _appKey_ e _appToken_). Saiba como encontrar essas informações [neste artigo](/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes).
7. Em __Implements Installments Service__, escolha se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __Installments Service Url__.
8. Em __External Cancellation Service__, defina o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
9. Já no campo __Installments Service Url__, configure a url externa que vai estar associada à `/options`.
10. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
11. No campo __Captura de Segurança Antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
12. Em __Usa Antifraude__, informe se deseja usar um antifraude.
13. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o VTEX Standard vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o VTEX Standard). 
Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
