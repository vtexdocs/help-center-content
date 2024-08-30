---
title: 'Como impedir que uma transportadora atenda determinada faixa de CEP?'
id: 6GEYG5p9E4MOEy2qmY4uGa
status: PUBLISHED
createdAt: 2019-01-24T20:45:39.807Z
updatedAt: 2024-03-01T01:07:45.930Z
publishedAt: 2024-03-01T01:07:45.930Z
firstPublishedAt: 2019-01-24T22:03:33.994Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: como-impedir-que-uma-transportadora-atenda-determinada-faixa-de-cep
locale: pt
legacySlug: como-impedir-que-uma-transportadora-atenda-determinada-faixa-de-cep
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

As faixas de CEP atendidas por uma transportadora são determinadas pela planilha de frete, que normalmente é fornecida à loja pela própria transportadora.

Mas pode ser que você precise bloquear algum CEP ou faixa de CEPs. Ou seja, você pode querer impedir que, para determinado CEP ou faixa de CEPs, aquela transportadora faça entregas, mesmo que por padrão ela consiga fazer.

Para isso, você deve excluir os CEPs que não deseja considerar da planilha de frete.

### Exemplo

Digamos que você deseje excluir apenas o CEP __45920-000__ da planilha de uma transportadora.

Para isso, siga estes passos:

1. No Admin VTEX, acesse **Envio > Estratégia de Envio > Política de envio**, ou digite *Estratégia de Envio* na barra de busca no topo da página.  
2. Faça download da planilha de frete em **Tabela de Frete**.  
3. Abra a planilha e procure as linhas correspondentes à faixa de CEP onde o CEP a ser desconsiderado se enquadra, ou seja: `ZipCodeStart` = __37900-001__ e `ZipCodeEnd` = __97904-999__.  
4. Cada uma dessas linhas deve ser transformada em duas, de modo que o CEP 45920-000 seja ignorado. Portanto, você passaria a ter: `ZipCodeStart` = __37900-001__ e `ZipCodeEnd` = __45919-999__ / `ZipCodeStart` = __45920-001__ e `ZipCodeEnd` = __97904-999__.  

Com isso, a planilha passaria a "pular" o CEP 45920-000. E consequentemente ele deixaria de ser considerado como opção de endereço atendido por essa transportadora.

>ℹ️ Os exemplos de código postal deste artigo são referentes ao Brasil, cada país tem o seu próprio formato de código postal.
