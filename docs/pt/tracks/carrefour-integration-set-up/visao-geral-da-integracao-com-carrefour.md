---
title: 'Configurações no Carrefour'
id: 4ixukTWxz7PsN2fdNOZUue
status: PUBLISHED
createdAt: 2021-12-27T15:33:33.498Z
updatedAt: 2021-12-29T17:25:49.754Z
publishedAt: 2021-12-29T17:25:49.754Z
firstPublishedAt: 2021-12-27T17:11:48.631Z
contentType: trackArticle
productTeam: Channels
slugEN: carrefour-integration-overview
locale: pt
trackId: 2wYlj07cNuA8k8mmwY86K2
trackSlugPT: configurar-integracao-do-carrefour
---

O primeiro passo para integrar sua loja VTEX com o Carrefour Marketplace é [criar uma conta de seller](https://www.carrefour.com.br/marketplace/inscreva-se). Depois de  realizar o cadastro e criar a conta, você deverá aguardar o contato do Carrefour em até 5 dias úteis. Em caso de dúvidas, assista ao tutorial do Carrefour Marketplace [“Como cadastrar sua loja para vender no Carrefour Marketplace”.](https://www.youtube.com/watch?v=TYYOmRpNTl4)

Durante esse contato, o Carrefour Marketplace fornecerá o **ShopKey** e **ShopId** da sua loja. Guarde esses dados porque eles serão necessários para [cadastrar o conector do Carrefour](https://help.vtex.com/pt/tracks/configurar-integracion-con-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK), sem eles não será possível realizar a integração.

### API de Frete

O [Carrefour Marketplace](https://marketplace.carrefour.com.br/login) exige o cadastro de um endpoint de API que permita a consulta de valores de frete, preço e prazo em tempo real, de acordo com o CEP. Esse cadastro é feito na própria plataforma do marketplace.

Utilize a seguinte rota API GET substituindo `{AccountName}` pelo [nome da sua loja](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) na plataforma VTEX.

`http://portal.vtexcommercestable.com.br/api/carrefourintegration/pub/{accountName}/freight`

Em caso de dúvidas, assista ao tutorial do Carrefour [“Como configurar a Intelipost no Carrefour”](https://www.youtube.com/watch?v=hDn-pAwd5jY).

Para dar continuidade à integração, os próximos passos são:

- [Configurar política comercial](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2s7YE2VK7LBx4Mvokj3gc)
- [Definir Estratégia de Envio](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/4WKC9WpPyZHpb7ZoyPlCbV)
- [Configurar cadastro do conector do Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/2AhqcmRN1mseCsGuGIe6GK)
- [Enviar produtos para Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/6FacWWJszKw0Um42uYcQai)

