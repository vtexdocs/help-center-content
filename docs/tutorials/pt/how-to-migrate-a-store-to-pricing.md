---
title: 'Características do Pricing'
id: 2b4KuARqwsUw0i8AwqYauK
status: DRAFT
createdAt: 2019-01-24T20:45:36.290Z
updatedAt: 2020-11-26T20:02:41.784Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:09:39.222Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: como-migrar-uma-loja-para-o-pricing
locale: pt
legacySlug: como-migrar-uma-loja-para-o-pricing-v2
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

O Pricing é o novo módulo de preços da VTEX. Esta versão introduz novas funcionalidades que permitem a evolução da gestão dos preços da sua loja.

## Características do Pricing

O Pricing possui algumas diferenças importantes em relação à primeira versão. Seguem abaixo as features do Pricing:

- Preço agendado
- Importação/Exportação de preços por planilha
- Preço por quantidade mínima
- Preço de custo e faixa de Markup
- Regras de preço por política comercial
- Arredondamento de Preços
- Trava de variação de preço
- Preços condicionais (em breve!)
- Tabela de preços com hierarquia (em breve!)


## Compatibilidade entre as APIs

- As APIs do Pricing v1 são compatíveis com as do Pricing v2, o que permite que a sua loja migre de versão sem ser impactada na integração. Porém, é preciso levar em consideração que as APIs do Pricing v1 têm menos performance e não tiram proveito de todos os recursos do Pricing v2.
- As APIs do Pricing v1 só sabem lidar com preços fixos, que, por definição, se sobrepõem a preços dinâmicos. Usando as APIs antigas, não é possível tirar proveito, por exemplo, das regras de preço usadas para a composição automática de preços a partir do preço de custo.
- As APIs do Pricing v1 sobrescrevem qualquer preço fixo que existir no Pricing v2. Isso indica que preços criados pelo ambiente administrativo serão substituídos por o que for enviado pelas APIs de compatibilidade.
- As APIs antigas sempre têm sua rota iniciada com `/api/pricing/pvt/price-sheet`. Com a evolução do Pricing v2, é esperado que elas sejam descontinuadas, mas ainda não há data definida para isso.
- Note que o Webservice também altera preços. É comum que sejam passados valores de preços no método `StockKeepingUnitInsertUpdate` (caminho atual para integração de Catálogo), pois são campos obrigatórios. No entanto, é possível passar o campo de preço como nulo (`null`) para que não seja feita nenhuma alteração de preços.
- As APIs do Pricing v2 estão todas documentadas em nossa coleção no Postman. Você pode acessar a documentação [neste link](https://developers.vtex.com/reference/pricing-api-overview).

## Migração da loja para o Pricing v2

>ℹ️ Toda nova loja VTEX já é criada com o Pricing v2.

O Pricing v2 está disponível para as lojas que desejarem migrar para o novo módulo. Atualmente, temos um processo de migração automática, em que verificamos a compatibilidade das features do Pricing v2 com as features utilizadas atualmente pela loja. 

Caso sua loja ainda não esteja utilizando o Pricing v2, __você pode solicitar ao nosso time de atendimento a migração para o novo módulo__. Você deve levar em conta as atuais características do Pricing v2 no momento da migração. Caso sua loja utilize alguma das features do Pricing antigo que ainda não esteja presente no Pricing v2, sugerimos que a migração ainda não seja realizada.

Futuramente, as features que ainda não estão presentes no Pricing v2 serão disponibilizadas e todas as lojas VTEX serão migradas.
