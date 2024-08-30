---
title: 'Configurar gateway Sitef'
id: 1y3gqmbb6wgwscW8yeccAc
status: DRAFT
createdAt: 2018-03-05T17:07:51.846Z
updatedAt: 2024-03-18T20:02:31.580Z
publishedAt: 
firstPublishedAt: 2018-03-05T17:35:10.870Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-gateway-sitef
locale: pt
legacySlug: configurar-gateway-sitef
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Na VTEX, é possível configurar o gateway Sitef. Para configurá-lo, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Sitef__ na barra de busca e clique sobre o nome do provedor.
4. No campo __Id da Loja__, preencha com os dados do seu MerchantId na Sitef.
5. Em __Chave de Acesso__, preencha com o MerchantKey fornecido pela Sitef.
6. No campo __Captura de segurança antecipada__, escolha em quanto tempo deve ser realizada a captura do valor após a aprovação da transação.
7. Clique em `Salvar`.

## Configurar condição de pagamento

Na VTEX, o conector da Sitef processa principalmente __cartões de crédito__. Para aprender a configurar os meios de pagamento a serem processados pelo gateway da Sitef, [acesse nosso tutorial](/pt/tutorial/condicoes-de-pagamento).
