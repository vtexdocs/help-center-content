---
title: 'Configurar o gateway VTEX Standard Promissory'
id: 2LEec9Z3m0gS8gCAK2uIYc
status: ARCHIVED
createdAt: 2018-03-09T14:46:43.809Z
updatedAt: 2020-04-22T13:52:07.836Z
publishedAt: 
firstPublishedAt: 2018-03-09T15:09:10.272Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-gateway-vtex-standard-promissory
locale: pt
legacySlug: configurar-o-gateway-vtex-standard-promissory
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A VTEX possui um gateway nativo com certificação do [PCI Security Standards Council](/pt/faq/o-que-e-o-pci-ssc). Isso significa que ele segue os mais altos padrões de segurança de dados, garantindo mais proteção para as transações realizadas na sua loja.

São três conectores diferentes: com o __VTEX Standard Promissory__ configurado, sua loja vai processar pagamentos realizados com promisórias. É só seguir os passos abaixo:

## Configurar afiliação de gateway VTEX Standard Promissory
1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __VTEX Standard Promissory__.
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
 
Depois de seguir os passos indicados, o VTEX Standard Promissory vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, no módulo de Pagamentos, esse gateway vai estar disponível no campo **Processar com a afiliação** (desde que os meios de pagamento sejam compatíves. 

Para saber como cadastrar pagamentos customizados, acesse [este artigo](http://help.vtex.com/pt/tutorial/condicoes-de-pagamento)
