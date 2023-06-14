---
title: 'Match de anúncios Amazon (Beta)'
id: 7fRfoP69kYgg8znImMhyQ0
status: PUBLISHED
createdAt: 2023-05-29T15:07:38.220Z
updatedAt: 2023-05-29T16:59:25.926Z
publishedAt: 2023-05-29T16:59:25.926Z
firstPublishedAt: 2023-05-29T16:38:11.840Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slug: match-de-anuncios-amazon
legacySlug: match-de-anuncios-amazon
subcategory: 4YvjazdRUhQzjHJ53FCYJM
---

Toda vez que um [SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) com [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) cadastrado na VTEX é enviado para a Amazon, o marketplace realiza um processo chamado *matching*, que consiste em unificar anúncios de um mesmo produto através do seu EAN.  

O EAN cadastrado na VTEX é utilizado para fazer a equivalência com os [ASINs](https://associados.amazon.com.br/resource-center/asin-amazon?ac-ms-src=rc-home-card) (*Amazon Standard Identification Number, ou, Número de Identificação Padrão da Amazon*) correspondentes na Amazon. Para realizar o pareamento entre o EAN e o ASIN, é necessário realizar o matching manual. A correspondência entre EAN e ASINs precisa ser exata para que os anúncios sejam vinculados corretamente.   

![Match Amazon PT](//images.ctfassets.net/alneenqid6w5/2w6NrOhlTwsknC27Soe0pr/a3a3da7039a2bbbaff057380c368a124/https___daniel--grocery1.myvtex.com_admin_vtex_integration-amazon-sku-matcher.gif)

## Aba Oportunidade  
Na aba __Oportunidade__, o seller pode realizar o match dos produtos enviados à Amazon individualmente ou em massa, realizar busca por nome do produto e clicando no ícone <i class="fas fa-ellipsis-v"></i> o seller poderá escolher entre `ver detalhes` dos produtos e `ver anúncio` do produto correspondente na Amazon. 

Conheça abaixo a estrutura da aba.  

- __Barra de pesquisa:__ Localizado no topo da aba, o seller pode utilizar para pesquisar por nome completo ou parcial do produto e SKU enviado.  
- __Caixa de seleção:__ Localizada do lado esquerdo da foto de cada anúncio. Ela deverá ser selecionada para realizar o match daquele anúncio.  
- __Contador:__ Aparece ao lado do nome da aba, mostra o número de produtos listados para realizar o match.  
- __Seu anúncio:__ Todos os anúncios enviados serão apresentados nessa coluna, sendo cada anúncio apresentado com a seguinte estrutura:  
  - Foto do produto  
  - Nome do produto  
  - Marca  

- __Sugestão Amazon:__ São anúncios com ASINs correspondentes, estes serão apresentados com a seguinte estrutura:  
  - Foto do produto  
  - Nome do produto  
  - Marca  

## Aba Anúncios  

Na aba __Anúncios__,  o seller poderá visualizar todos os anúncios já aprovados, realizar  busca por nome do produto, e clicando no ícone <i class="fas fa-ellipsis-v"></i> o seller poderá escolher entre `ver detalhes` dos produtos e `ver anúncio` do produto correspondente na Amazon.  

Conheça abaixo a estrutura da aba.  

- __Barra de busca:__ Localizado no topo da aba, o seller pode utilizar para pesquisar por nome completo ou parcial do produto e SKU aprovado.  
- __Contador:__ Aparece ao lado do nome da aba, mostra o número de anúncios já aprovados.  
- __Seu anúncio:__ Todos os anúncios enviados e aprovados serão apresentados nessa coluna, sendo cada anúncio apresentado com a seguinte estrutura:  
  - Foto do produto  
  - Nome do produto  
  - Marca  
- __Anúncio vinculado:__ São anúncios vinculados na Amazon com o ASIN correspondente, estes serão apresentados com a seguinte estrutura:  
  - Foto do produto  
  - Nome do produto  
  - Marca  

## Como realizar o matching manual dos produtos  

Após o [envio](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD), os produtos estarão disponíveis na página __Match de anúncios Amazon__. Para visualizar os anúncios não aprovados, acesse o Admin VTEX, clique em *Marketplace >*__Match de anúncios Amazon__ ou use a barra de busca no topo da página.  

Na aba de `Oportunidade`, todos os produtos listados que possuem equivalência entre Seu anúncio e Sugestão Amazon, precisam ser aprovados manualmente. Para aprovar as correspondências de SKU e ASIN, siga os passos abaixo.  

1. Na aba `Oportunidade`, marque a caixa de seleção ao lado do título dos anúncios com equivalência SKU <> ASIN.  
Ao selecionar os produtos, aparecerá na tela o seguinte pop-up mostrando quantos produtos foram selecionados.

![popup seleção mtach Amazon](//images.ctfassets.net/alneenqid6w5/3MTOQgMftiT5rsbJgKVpAD/7cf1452afbaa25640210af435d2e0f8b/popup_sele____o_PT.png)

2. Ao finalizar a seleção de produtos, clique em  `Publicar selecionados`.  

3. No pop-up de confirmação do *matching*, confira os anúncios selecionados e clique em `Confirmar publicação`.  

![confirmação do matching Amazon](//images.ctfassets.net/alneenqid6w5/7IWcW7ozGbMmZAH4Prec3M/4a3cd9f22575382fb03d4c8aab476048/confirma____o_do_matching_PT.png)

Quando confirmado, os seus anúncios serão enviados e enfileirados para processamento. Após aprovado, o anúncio aparecerá na aba __Anúncios__, onde você pode __“ver detalhes do seu anúncio”__, __“ver anúncio sugerido pela Amazon”__ e __pesquisar anúncios__ na barra de busca.  

Os anúncios que não possuem correspondências, deverão ser enviados novamente. Para isso, siga o [tutorial de envio de produtos](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).  

Antes de realizar um novo envio, certifique-se de que os campos `Categoria global` e `EAN` estejam configurados, seguindo o passo a passo da [Pré- configuração do catálogo](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#3-pre-configuracoes-no-catalogo), e que todos os produtos estejam cumprindo os requisitos de [atributos obrigatórios na Amazon](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon).
