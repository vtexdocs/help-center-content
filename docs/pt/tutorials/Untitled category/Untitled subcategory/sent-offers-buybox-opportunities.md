---
title: 'Gerenciamento de anúncios: oportunidades de Catálogo MeLi '
id: 1hO9eI1th47EGxQoTzGewC
status: DRAFT
createdAt: 2021-07-29T19:59:30.988Z
updatedAt: 2024-06-20T21:42:56.304Z
publishedAt: 
firstPublishedAt: 2021-07-29T20:20:39.780Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: anuncios-enviados-oportunidades-de-buybox
locale: pt
legacySlug: anuncios-enviados-oportunidades-de-buybox-beta
subcategoryId: unknown-subcategory
---

>ℹ️ Para evoluir sua experiência ao sincronizar e atualizar anúncios, o time da VTEX está desenvolvendo uma nova funcionalidade que irá substituir o atual módulo **Gerenciamento de anúncios**.
> Por este motivo, o Gerenciamento de anúncios não receberá novas atualizações ou manutenção. 
> Para conectores e marketplaces que já se integraram com o módulo, solicitamos que entre em contato com nosso time de desenvolvimento através do email [taissa.araujo@vtex.com.br](taissa.araujo@vtex.com.br).
> Para os conectores com interesse em iniciar a integração, solicitamos que aguardem o lançamento do novo módulo, assim que disponível avisaremos a todos os clientes através do [Developer portal na página de release notes](https://developers.vtex.com/updates/release-notes) e [VTEX Help Center na página de novidades](https://help.vtex.com/pt/en/announcements).  

Anúncio é um SKU de um seller que foi enviado para um canal de vendas e teve seu preço e estoque configurados. O módulo [Gerenciamento de anúncios](https://help.vtex.com/pt/tutorial/listagem-de-anuncios--7MRb9S78aBdZjFGpbuffpE) do Admin VTEX permite que sellers supervisionem o envio e sincronização de seus produtos para marketplaces e também apresenta oportunidades de mais vendas para seus anúncios. 

A funcionalidade chamada *Oportunidades* identifica anúncios do seller que podem performar com mais sucesso nos canais em que são vendidos e direciona ações para que essas oportunidades se realizem. 

Um exemplo de oportunidade é a funcionalidade de Catálogo MeLi. O Catálogo MeLi é um recurso no checkout do Mercado Livre, que seleciona anúncios de sellers diferentes como opções de compra para um mesmo produto. O Gerenciamento de anúncios avalia os anúncios que são compatíveis com produtos já presentes no Mercado Livre, para que sejam adicionados ao seu Catálogo MeLi.

As *Oportunidades* acompanham a presença de um anúncio nas diferentes páginas do módulo **Gerenciamento de anúncios**, como será visto nas imagens a seguir.

>ℹ️ O **Gerenciamento de anúncios** permite acompanhar anúncios com o [Mercado Livre Classic](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), [Mercado Livre Premium](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), [Netshoes](https://help.vtex.com/pt/tracks/configurar-integracao-da-netshoes--5Ua87lhFg4m0kEcuyqmcCm) e [marketplaces VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex). Para conectores que desejam integrar via API, existe o [Guia de integração do Gerenciamento de anúncios](https://developers.vtex.com/vtex-rest-api/docs/sent-offers-integration-guide-connectors).

## Listagem de Anúncios

Na página [Gerenciamento de anúncios](https://help.vtex.com/pt/tutorial/offers-listing--7MRb9S78aBdZjFGpbuffpE), anúncios com oportunidades de Catálogo MeLi abertas terão um ícone em seu título. Ao clicar no anúncio marcado com uma `Oportunidade`, você será redirecionado para a página a seguir.

## Detalhes do Anúncio

![PT Oportunidades Offer details](https://images.ctfassets.net/alneenqid6w5/05EP70mvjspXAYAqYUBlm/c50404811bbb7be69e463f97cdc4408e/PT_Oportunidades_Offer_details.jpg)

A página de [Detalhes do anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) apresenta um card de `Oportunidade` no topo. Ao clicar em `Ver Oportunidade`, você será redirecionado para a página a seguir.

## Oportunidades do Anúncio

![PT Oportunidades oportunidades do anúncio](https://images.ctfassets.net/alneenqid6w5/6Atuthxay11bdJrmSQxEM9/753c2b80a4bf68ca6f82aa6f23cca363/PT_Oportunidades_oportunidades_do_an__ncio.jpg)

A página **Oportunidades do anúncio** apresenta o anúncio elegível para o Catálogo MeLi ao lado do anúncio já presente no marketplace. A página permite comparar os dados dos dois anúncios, incluindo informações das marcas, especificações e dimensões.

Além da oportunidade de adicionar anúncios, há o __Auto Optin (criação automática de anúncios Catálogo MeLi)__, nesta opção o Mercado Livre irá avaliar as publicações dos sellers, caso cumpra com todos os requisitos para se tornar um anúncio de Catálogo MeLi, ele será feito automaticamente e o seller visualizará a mensagem da imagem abaixo.

![Auto Optin MELI](https://images.ctfassets.net/alneenqid6w5/2Hiw11uUW5n5QHvwIlpo0C/95e691c69a8a8afccdf50abd0f0d09c4/Captura_de_tela_2023-06-27_175316.png)

## Adicionar anúncios ao Catálogo MeLi

Siga os passos abaixo para adicionar seu anúncio ao Catálogo MeLi:

1. No Admin VTEX, acesse **MARKETPLACE > Gestão de anúncios**. 
> Se sua loja usa o [Novo Admin VTEX](https://content.vtex.com/join-new-admin-beta-program-pt/), acesse **Marketplace > Conexões**.
2. Selecione o anúncio que tiver o ícone raio <i class="fas fa-bolt"></i>.
3. Na página **Detalhes do Anúncio**, clique em `Ver Oportunidade`.
4. Na página de **Oportunidade do Anúncio**, avalie se seu anúncio é compatível com o anúncio já presente no marketplace. Caso sejam compatíveis, clique em `Adicionar ao Catálogo MeLi`. 
5. Clique em `Adicionar`.

>⚠️ Essa ação não poderá ser desfeita, portanto certifique-se de que os anúncios são compatíveis. Se seu anúncio não for compatível com o produto já presente no marketplace, não adicione-o ao Catálogo MeLi. Adicionar anúncios que não fazem parte do produto pode prejudicar sua reputação como seller naquele marketplace.

Para que seu anúncio esteja bem posicionado no Catálogo MeLi, finalize as configurações indicadas na próxima seção [Ganhando e perdendo no Catálogo MeLi](#ganhando-e-perdendo-no-buybox).

## Ganhando e perdendo no Catálogo MeLi

Após [adicionar o anúncio ao Catálogo MeLi](#adicionar-anuncios-ao-buybox), seu anúncio estará ativo no Catálogo MeLi daquele produto, mas não necessariamente será o primeiro item indicado para a compra no marketplace. Anúncios podem estar, portanto, com um dos status abaixo:

- **Ganhando:** você ativou a oportunidade e seu anúncio está em primeiro lugar do Catálogo MeLi.   
- **Perdendo:** você ativou a oportunidade, mas não terminou as configurações necessárias para tornar o anúncio atrativo suficiente para estar em primeiro lugar.

Para que seu anúncio esteja ganhando, siga as instruções abaixo:

1. Na página **Oportunidade do Anúncio**, clique em `Ver detalhes do anúncio`, 
2. Acesse as **Oportunidades Ativas**. 
3. Siga as instruções Catálogo MeLi.

A seção de *Oportunidades Ativas* da página [Detalhes do anúncio](https://help.vtex.com/pt/tutorial/detalhes-do-anuncio--4FF9QYAewqAn610mDHwb0P) reúne: 

- **Dados da Catálogo MeLi:** informações sobre o Catálogo MeLi em que o anúncio foi adicionado.  
- **Status da oportunidade:** incluindo `Ganhando` ou `Perdendo`.  
- **Lista de configurações:** ações necessárias para que seu anúncio esteja ganhando na Catálogo MeLi. As instruções listadas incluem alterar preço, promover frete grátis, entrega rápida ou oferecer pagamento com parcelamento sem juros, por exemplo. Cada item da lista apresenta uma sugestão de configuração  que tornará o anúncio mais atrativo, posicionando-o em primeiro lugar no Catálogo MeLi. 

![PT Oportunidades oportunidades ativas](https://images.ctfassets.net/alneenqid6w5/1e5ozasXAVsjNrH7RBjq71/6e7672dc863d4150b4e8b8efe600187a/PT_Oportunidades_oportunidades_ativas.jpg)
