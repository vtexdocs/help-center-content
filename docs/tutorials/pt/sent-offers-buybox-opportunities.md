---
title: Gerenciamento de anúncios: oportunidades de Buybox 
id: 1hO9eI1th47EGxQoTzGewC
status: PUBLISHED
createdAt: 2021-07-29T19:59:30.988Z
updatedAt: 2022-10-20T01:38:56.059Z
publishedAt: 2022-10-20T01:38:56.059Z
firstPublishedAt: 2021-07-29T20:20:39.780Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: anuncios-enviados-oportunidades-de-buybox
legacySlug: anuncios-enviados-oportunidades-de-buybox-beta
subcategory: 2zVauFUkYn8vgS0y0MfWeK
---

Anúncio é um SKU de um seller que foi enviado para um canal de vendas e teve seu preço e estoque configurados. O módulo [Gerenciamento de anúncios](https://help.vtex.com/pt/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) do Admin VTEX permite que sellers supervisionem o envio e sincronização de seus produtos para marketplaces e também apresenta oportunidades de mais vendas para seus anúncios. 

A funcionalidade chamada *Oportunidades* identifica anúncios do seller que podem performar com mais sucesso nos canais em que são vendidos e direciona ações para que essas oportunidades se realizem. 

Um exemplo de oportunidade é a funcionalidade de *Buybox* do Mercado Livre. O Buybox é um recurso no checkout do Mercado Livre, que seleciona anúncios de sellers diferentes como opções de compra para um mesmo produto. O **Gerenciamento de anúncios** avalia os anúncios que são compatíveis com produtos já presentes no Mercado Livre, para que sejam adicionados ao seu Buybox.

As *Oportunidades* acompanham a presença de um anúncio nas diferentes páginas do módulo **Gerenciamento de anúncios**, como será visto nas imagens a seguir.

<div class = "alert alert-info">
O <b>Gerenciamento de anúncios</b> permite acompanhar anúncios com o <a href="https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq">Mercado Livre Classic</a>, <a href="https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq">Mercado Livre Premium</a>, <a href="https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm">Netshoes</a> e <a href="https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex">marketplaces VTEX</a>. Para conectores que desejam integrar via API, existe o <a href="https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors">Guia de integração do Gerenciamento de anúncios</a>.
</div>

## Listagem de Anúncios

Na página [Gerenciamento de anúncios](https://help.vtex.com/pt/tutorial/offers-listing--7MRb9S78aBdZjFGpbuffpE), anúncios com oportunidades de Buybox abertas terão um ícone <i class="fas fa-bolt"></i> em seu título. Ao clicar no anúncio marcado com uma `Oportunidade`, você será redirecionado para a página a seguir.

## Detalhes do Anúncio

![PT Oportunidades Offer details](//images.ctfassets.net/alneenqid6w5/05EP70mvjspXAYAqYUBlm/c50404811bbb7be69e463f97cdc4408e/PT_Oportunidades_Offer_details.jpg)

A página de [Detalhes do anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) apresenta um card de `Oportunidade` no topo. Ao clicar em `Ver Oportunidade`, você será redirecionado para a página a seguir.

## Oportunidades do Anúncio

![PT Oportunidades oportunidades do anúncio](//images.ctfassets.net/alneenqid6w5/6Atuthxay11bdJrmSQxEM9/753c2b80a4bf68ca6f82aa6f23cca363/PT_Oportunidades_oportunidades_do_an__ncio.jpg)

A página **Oportunidades do anúncio** apresenta o anúncio elegível para o Buybox ao lado do anúncio já presente no marketplace. A página permite comparar os dados dos dois anúncios, incluindo informações das marcas, especificações e dimensões.

## Adicionar anúncios ao Buybox

Siga os passos abaixo para adicionar seu anúncio ao Buybox:

1. No Admin VTEX, acesse **MARKETPLACE > Gestão de anúncios**. 
> Se sua loja usa o [Novo Admin VTEX](https://content.vtex.com/join-new-admin-beta-program-pt/), acesse **Marketplace > Conexões**.
2. Selecione o anúncio que tiver o ícone raio <i class="fas fa-bolt"></i>.
3. Na página **Detalhes do Anúncio**, clique em `Ver Oportunidade`.
4. Na página de **Oportunidade do Anúncio**, avalie se seu anúncio é compatível com o anúncio já presente no marketplace. Caso sejam compatíveis, clique em `Adicionar ao Buybox`. 
5. Clique em `Adicionar`.

<div class="alert alert-warning">
Essa ação não poderá ser desfeita, portanto certifique-se de que os anúncios são compatíveis. Se seu anúncio não for compatível com o produto já presente no marketplace, não adicione-o ao Buybox. Adicionar anúncios que não fazem parte do produto pode prejudicar sua reputação como seller naquele marketplace.  
</div>

Para que seu anúncio esteja bem posicionado no Buybox, finalize as configurações indicadas na próxima seção [Ganhando e perdendo no Buybox](#ganhando-e-perdendo-no-buybox).

## Ganhando e perdendo no Buybox

Após [adicionar o anúncio ao Buybox](#adicionar-anuncios-ao-buybox), seu anúncio estará ativo no Buybox daquele produto, mas não necessariamente será o primeiro item indicado para a compra no marketplace. Anúncios podem estar, portanto, com um dos status abaixo:

- **Ganhando:** você ativou a oportunidade e seu anúncio está em primeiro lugar do Buybox.   
- **Perdendo:** você ativou a oportunidade, mas não terminou as configurações necessárias para tornar o anúncio atrativo suficiente para estar em primeiro lugar.

Para que seu anúncio esteja ganhando, siga as instruções abaixo:

1. Na página **Oportunidade do Anúncio**, clique em `Ver detalhes do anúncio`, 
2. Acesse as **Oportunidades Ativas**. 
3. Siga as instruções listadas na seção, para finalizar a configuração do anúncio e ativá-lo no Buybox.

A seção de *Oportunidades Ativas* da página [Detalhes do anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) reúne: 

- **Dados da Buybox:** informações sobre os buyboxes em que o anúncio foi adicionado.  
- **Status da oportunidade:** incluindo `Ganhando` ou `Perdendo`.  
- **Lista de configurações:** ações necessárias para que seu anúncio esteja ganhando na buybox. As instruções listadas incluem alterar preço, promover frete grátis, entrega rápida ou oferecer pagamento com parcelamento sem juros, por exemplo. Cada item da lista apresenta uma sugestão de configuração  que tornará o anúncio mais atrativo, posicionando-o em primeiro lugar no Buybox. 

![PT Oportunidades oportunidades ativas](//images.ctfassets.net/alneenqid6w5/1e5ozasXAVsjNrH7RBjq71/6e7672dc863d4150b4e8b8efe600187a/PT_Oportunidades_oportunidades_ativas.jpg)
