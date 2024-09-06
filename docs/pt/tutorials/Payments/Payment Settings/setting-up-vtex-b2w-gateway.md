---
title: 'Configurar o gateway VTEX B2W'
id: 4Xssw6LV5ewAWEssiqgmU6
status: ARCHIVED
createdAt: 2018-03-09T15:11:51.754Z
updatedAt: 2022-02-02T14:46:32.563Z
publishedAt: 
firstPublishedAt: 2018-03-09T15:39:13.088Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-gateway-vtex-b2w
locale: pt
legacySlug: configurar-o-gateway-vtex-b2w
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A VTEX possui um gateway nativo com certificação do [PCI Security Standards Council](/pt/faq/o-que-e-o-pci-ssc). Isso significa que ele segue os mais altos padrões de segurança de dados, garantindo mais proteção para as transações realizadas na sua loja.

São três conectores diferentes: com o __VTEXB2W__ configurado, sua loja no marketplace da B2W vai processar pagamentos realizados com boletos bancários e as principais bandeiras de cartões de crédito. É só seguir os passos abaixo.

## Configurar afiliação de gateway VTEX B2W
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __VTEXB2W__.
5. No campo __External Service Url__, configure a URL externa que vai estar associada a `/pvt/payments?an={AccountName}`.
6. Preencha os campos de cadastro com os dados fornecidos pela VTEX (campos _appKey_ e _appToken_). Saiba como encontrar essas informações [neste artigo](/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes).
7. Em __Implements Installments Service__, escolha se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a URL configurada no campo __Installments Service Url__.
8. Em __External Cancellation Service__, defina o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a URL configurada no campo __External Service Url__.
9. Já no campo __Installments Service Url__, configure a URL externa que vai estar associada à `/options`.
10. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
11. No campo __B2W Service Url__, defina a URL que vai ser usada para pegar o token dos pagamentos.
12. Em __b2wServiceUser__ e __b2wServicePassword__, informe os dados da sua conta no marketplace da B2W.
13. Já em __mainAccountName__, preencha o Account Name principal ao qual sua loja no marketplace da B2W está vinculada.
14. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
15. Em __Usa Antifraude__, informe se deseja usar um antifraude.
16. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o VTEX B2W vai estar configurado na sua loja e vai poder ser usado para processar pagamentos no marketplace da B2W. Para usar o gateway, basta cadastrar uma condição de pagamento compatível e o VTEX B2W estará disponível no campo __Processar com a afiliação__. 
Para saber como definir condições de pagamento, acesse [este artigo](/pt/tutorial/condicoes-de-pagamento).
