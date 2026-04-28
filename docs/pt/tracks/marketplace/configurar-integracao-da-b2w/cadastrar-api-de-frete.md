---
title: 'Cadastrar API de frete'
id: 3W7OqhHUl2CQKIsAc0SS4g
status: PUBLISHED
createdAt: 2018-09-27T22:38:15.061Z
updatedAt: 2025-02-28T15:31:01.135Z
publishedAt: 2025-02-28T15:31:01.135Z
firstPublishedAt: 2018-09-27T22:40:49.064Z
contentType: trackArticle
productTeam: Channels
slugEN: apis-registration
locale: pt
trackId: 6w07SJBVqE020KIOOS8ygk
trackSlugEN: configurar-integracao-da-b2w
order: 6
---

A B2W exige o cadastro de um endpoint de API que permita a consulta de valores de frete, preço e prazo em tempo real, de acordo com o CEP. Esse cadastro é feito no [portal de atendimento](https://americanasmarketplace.com.br/login) do marketplace. 

Utilize a seguinte rota API REST, que permite a operação `POST`, substituindo `{AccountName}` pelo [nome da sua loja](/pt/docs/tutorials/o-que-e-account-name) na plataforma VTEX.

`http://simulation.vtexcommercestable.com.br/api/skyhubintegration/freight?an={accountName}`

Feita esta etapa, a integração com a B2W estará concluída.
