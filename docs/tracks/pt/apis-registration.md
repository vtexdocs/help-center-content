---
title: Cadastrar API de frete
id: 3W7OqhHUl2CQKIsAc0SS4g
status: PUBLISHED
createdAt: 2018-09-27T22:38:15.061Z
updatedAt: 2022-02-02T20:54:32.209Z
publishedAt: 2022-02-02T20:54:32.209Z
firstPublishedAt: 2018-09-27T22:40:49.064Z
contentType: trackArticle
productTeam: Channels
slug: cadastrar-api-de-frete
trackId: 6w07SJBVqE020KIOOS8ygk
trackSlugPT: configurar-integracao-da-b2w
---

A B2W exige o cadastro de um endpoint de API que permita a consulta de valores de frete, preço e prazo em tempo real, de acordo com o CEP. Esse cadastro é feito no [portal de atendimento](https://americanasmarketplace.com.br/login) do marketplace. 

Utilize a seguinte rota API REST, que permite a operação GET, substituindo `{AccountName}` pelo [nome da sua loja](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) na plataforma VTEX.

`http://simulation.vtexcommercestable.com.br/api/skyhubintegration/freight?an={accountName}`

Feita esta etapa, a integração com a B2W estará concluída.
