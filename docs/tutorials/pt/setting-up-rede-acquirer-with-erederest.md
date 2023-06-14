---
title: 'Configurar adquirente Rede com o ERedeRest'
id: 5TD6Ap9kiIUSiAMUsgYmcY
status: PUBLISHED
createdAt: 2018-04-12T15:47:44.783Z
updatedAt: 2023-03-29T01:11:21.243Z
publishedAt: 2023-03-29T01:11:21.243Z
firstPublishedAt: 2018-04-13T15:41:42.879Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-adquirente-rede-com-o-erederest
legacySlug: configurar-adquirente-rede-com-o-erederest
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você pode fazer a integração com o [adquirente](/pt/tutorial/o-que-e-um-adquirente) Rede usando o conector ERedeREST. Esse conector traz uma série de melhorias, entre elas o suporte a meios de pagamento com pré-autorização (__Visa__, __Mastercard__, __American Express__, __Diners__, __Hipercard__, __JCB__ e __Credz__).

<div class="alert alert-warning">
A bandeira <strong>Elo</strong> ainda não oferece suporte para pré-autorização. 
</div>

Outra característica importante do conector ERedeREST é que você também pode configurá-lo para aceitar pagamentos com [__Apple Pay__](/pt/tutorial/configurar-pagamentos-com-apple-pay), a carteira digital da Apple.

Para configurar o ERedeREST, siga os passos abaixo:

## Configurar afiliação de gateway ERedeREST
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __ERedeRest__.
4. No campo __PV__, insira o número de identificação da sua loja no sistema da Rede.
5. Em __Token__, informe o valor do Token criado pela Rede. Para preencher este campo, acesse a sua conta no site da Rede e na seção de Configurações, procure por __Geração de Token__.
6. Os campos __Apple MerchantId__, __Apple Merchant Certificate (.p12)__ e __Apple Merchant Password__ devem ser preenchidos com os dados fornecidos pela Apple. Essa configuração é necessária para que sua loja passe a aceitar pagamentos com __Apple Pay__. Veja como obter esses dados [neste artigo](/pt/tutorial/como-configurar-certificado-para-validar-merchant-do-apple-pay).
7. Em __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
8. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o adquirente Rede vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento faça parte da rede de adquirência da Rede). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).

### Artigos relacionados
- [Configurar pagamentos com Apple Pay](/pt/tutorial/configurar-pagamentos-com-apple-pay)
- [Como usar a integração ERedeREST](/pt/tutorial/nova-integracao-com-erede-erederest)
- [Configurar Merchant ID no Apple Pay](/pt/tutorial/como-configurar-certificado-para-validar-merchant-do-apple-pay)
- [Configurar condições de pagamento](/pt/tutorial/condicoes-de-pagamento)
- [O que é um adquirente?](/pt/tutorial/o-que-e-um-adquirente)
