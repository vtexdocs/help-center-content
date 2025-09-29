---
title: 'Pré go-live'
id: 7sM5IMx02zaHvAFTm0OxiJ
status: PUBLISHED
createdAt: 2022-12-09T20:00:23.023Z
updatedAt: 2023-05-25T17:29:40.880Z
publishedAt: 2023-05-25T17:29:40.880Z
firstPublishedAt: 2022-12-09T22:07:50.195Z
contentType: trackArticle
productTeam: Reliability
slugEN: pre-go-live
locale: pt
trackId: 4Ns5FxIiksmjsdX2yOTduM
trackSlugEN: go-live
order: 3
---

Este estágio dá inicio ao go-live já que estes passos precisam ser cuidadosamente agendados de acordo com a data prevista para o go-live de fato.

## Cadastrar domínio na VTEX

Você deve [cadastrar o domínio no Gerenciamento da conta](/pt/tutorial/configurando-dominios-no-license-manager). É isso que conecta o endereço à loja.

> ⚠️ Após o cadastro do seu domínio, você tem sete dias para concluir o go-live. Caso contrário, deverá acessar o cadastro realizado e salvar novamente.

## Solicitar apontamento IO

Se sua frente de loja é feita com [CMS IO](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), solicite o apontamento interno de DNS para CMS IO por meio de um ticket no [suporte VTEX](https://help.vtex.com/pt/support), informando a URL você deseja que seja apontada. Este processo pode levar até três dias úteis.

Após receber a confirmação do apontamento interno, você deverá realizar o [apontamento comum de DNS](/pt/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns) em até cinco dias. Do contrário o apontamento interno será excluído e você precisará refazer esta solicitação.

> ℹ️ Saiba mais sobre [go-live com Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-go-live) ou [Migração do CMS legado para Store Framework](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-migrating-storefront-from-legacy-to-io).

## Solicitar apontamento especial

Se o acesso à sua loja é restrito por [política comercial](/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) com regra condicional e sua frente de loja foi construída com [CMS Portal Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), você deverá solicitar um apontamento interno especial.

Um exemplo comum são [lojas B2B](/pt/tutorial/b2b-visao-geral--5vb9SNXhX2bZnkpAh7ADdC), que [restringem o acesso](/pt/tutorial/configurando-b2b-na-vtex--tutorials_238#1-incluir-regra-condicional-na-politica-comercial-do-b2b) a empresas pré-aprovadas.

Para solicitar um apontamento especial, abra um ticket no [suporte VTEX](https://help.vtex.com/pt/support), indicando qua é a política comercial e regra condicional configurada. Este processo pode levar até três dias úteis.

Após receber a confirmação do apontamento interno, você deverá realizar o [apontamento comum de DNS](/pt/tracks/go-live-your-store--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj#realizar-apontamento-de-dns) em até cinco dias. Do contrário o apontamento especial será excluído e você precisará refazer esta solicitação.

