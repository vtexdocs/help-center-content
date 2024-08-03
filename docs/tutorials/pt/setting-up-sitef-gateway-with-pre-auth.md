---
title: 'Configurar gateway Sitef com pre-auth'
id: 2ZH4DLmZpKw022aSGcGYag
status: DRAFT
createdAt: 2018-03-05T21:07:59.629Z
updatedAt: 2024-03-18T20:04:33.165Z
publishedAt: 
firstPublishedAt: 2018-03-06T14:09:56.654Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-sitef-com-pre-auth
locale: pt
legacySlug: configurar-gateway-sitef-com-pre-auth
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">Essa integração de pagamento não pode ser mais configurada na plataforma devido ao <a href="https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14">processo de remoção de provedores legados</a> e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.</div>

Para permitir que compras feitas com cartão de crédito tenham o valor reservado, você pode configurar o gateway __Sitef com pre-auth__ (pré-autorização) na sua loja.

Para isso, basta seguir os passos abaixo:

## Configurar afiliação de gateway Sitef com pre-auth
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Sitef com pre-auth__.
4. No campo __Id da Loja__, preencha os dados do seu MerchantId na Sitef.
5. Em __Chave de Acesso__, preencha o MerchantKey fornecido pela Sitef.
6. Em __Ambiente__, defina em qual ambiente Sitef vai utilizar a conta: produção, homologação ou homologação com timeout.
7. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
8. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Sitef com pre-auth vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Sitef com pre-auth). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
