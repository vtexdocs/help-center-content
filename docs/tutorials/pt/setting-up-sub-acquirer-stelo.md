---
title: 'Configurar subadquirente Stelo'
id: 3gHWiaK9wQg08wOsoysciQ
status: DRAFT
createdAt: 2018-03-02T17:43:45.957Z
updatedAt: 2024-03-18T20:16:43.458Z
publishedAt: 
firstPublishedAt: 2018-03-02T20:17:14.474Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-subadquirente-stelo
locale: pt
legacySlug: configurar-subadquirente-stelo
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

A Stelo é um [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) que facilita a integração de meios de pagamento à sua loja.

Para configurar a Stelo, siga os passos abaixo:

## Configurar afiliação de gateway Stelo
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações__, clique no botão __+__.
3. Clique no conector __Stelo__.
4. No campo __External Service Url__, você deve configurar a URL externa que vai estar associada à `/pvt/payments?an={{AccountName}}`.
5. Preencha os campos de cadastro com os dados fornecidos pela Stelo (campos _appKey_ e _appToken_).
6. Em __Implements Installments Service__, você deve escolher se deseja usar serviços externos de parcelamento ou o que está configurado no portal. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __Installments Service Url__.
7. Em __External Cancellation Service__, você precisa definir o uso ou não de um serviço de cancelamento externo. Se escolher a opção _yes_, o sistema vai utilizar a url configurada no campo __External Service Url__.
8. Já no campo __Installments Service Url__, você deve configurar a url externa que vai estar associada à `/options`.
9. Em __SoftDescriptor__, indique o que vai aparecer para identificar a transação realizada na sua loja.
10. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da tranasação e da análise do antifraude). Você também pode desativar a função.
11. Em __Usa Antifraude__, informe se possui o antifraude da Stelo.
12. Clique em __Salvar__.

## Configurar condição de pagamento

Depois de seguir os passos indicados, a Stelo vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Stelo). Para saber como definir condições de pagamento, acesse [este artigo](/pt/tutorial/condicoes-de-pagamento).
