---
title: 'Match de anúncios Amazon'
id: 7fRfoP69kYgg8znImMhyQ0
status: PUBLISHED
createdAt: 2023-05-29T15:07:38.220Z
updatedAt: 2023-07-27T21:32:07.360Z
publishedAt: 2023-07-27T21:32:07.360Z
firstPublishedAt: 2023-05-29T16:38:11.840Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amazon-offer-matching
legacySlug: match-de-anuncios-amazon
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Toda vez que um [SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) com [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) cadastrado na VTEX é enviado para a Amazon, o marketplace realiza um processo chamado *matching*, que consiste em unificar anúncios de um mesmo produto através do seu EAN.  

O EAN cadastrado na VTEX é utilizado para fazer a equivalência com os [ASINs](https://associados.amazon.com.br/resource-center/asin-amazon?ac-ms-src=rc-home-card) (*Amazon Standard Identification Number, ou, Número de Identificação Padrão da Amazon*) correspondentes na Amazon. Para realizar o pareamento entre o EAN e o ASIN, é necessário realizar o matching manual. A correspondência entre EAN e ASINs precisa ser exata para que os anúncios sejam vinculados corretamente.   

![Overview match de anúncios](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/match-de-anuncios-amazon_1.gif)

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

## Fazendo matching manual dos produtos  

Após o [envio](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD), os produtos estarão disponíveis na página __Match de anúncios Amazon__. Para visualizar os anúncios não aprovados, acesse o Admin VTEX, clique em *Marketplace >*__Match de anúncios Amazon__ ou use a barra de busca no topo da página.  

### Match individual de anúncios  

Na aba de `Oportunidade`, cada produto listado apresenta o ícone <i class="fas fa-ellipsis-v"></i>, ao clicar nele, o seller verá dois botões, `ver detalhes` e `ver anúncio sugerido`, em ambos, ele será redirecionado a novas páginas, uma para o match individual do produto e outra para ver o anúncio sugerido publicado no site da Amazon respectivamente. 
Veja os botões disponíveis em cada uma das páginas e suas ações.  

- **Botão `Rejeitar`:** esse botão irá excluir a sugestão de match e o seller deverá enviar novamente o seu produto caso queira, seguindo o [tutorial de envio de produtos](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).  
- **Botão `Rejeitar e solicitar revisão`:** se o seller não concorda com a sugestão de match e quer pedir revisão à Amazon, deverá escolher essa opção. Ao clicar nesse botão o seller será enviado para a página de abertura de chamados na Amazon e a sugestão de match irá sair da lista de oportunidade.
O acompanhamento dessa revisão deve ser realizado pelo painel de chamados da Amazon.  
- **Botão `Publicar`:** Se o seller está de acordo com a sugestão proposta pela Amazon, basta clicar no botão `Publicar`.  

Para aprovar a correspondência o seller deve seguir os passos abaixo.

1. Na aba `Oportunidade`, clique no ícone <i class="fas fa-ellipsis-v"></i>. 
2. Clique no botão `Ver detalhes`.  
3. Confira as informações que aparecerão na página.  
![Match individual de anúncios](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/match-de-anuncios-amazon_2.png)  
4. Conforme a análise das informações, clique em um dos botões disponíveis, `Publicar`, `Rejeitar e solicitar revisão` ou `Rejeitar`.

### Match massivo de anúncios  

Na aba de `Oportunidade`, todos os produtos listados que possuem equivalência entre Seu anúncio e Sugestão Amazon, precisam ser aprovados manualmente. Para aprovar as correspondências de SKU e ASIN, siga os passos abaixo.  

1. Na aba `Oportunidade`, marque a caixa de seleção ao lado do título dos anúncios com equivalência SKU <> ASIN.  
Ao selecionar os produtos, aparecerá na tela o seguinte pop-up mostrando quantos produtos foram selecionados.

![popup seleção mtach Amazon](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/match-de-anuncios-amazon_3.png)

2. Ao finalizar a seleção de produtos, clique em  `Publicar selecionados`.  

3. No pop-up de confirmação do *matching*, confira os anúncios selecionados e clique em `Confirmar publicação`.  

![confirmação do matching Amazon](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/match-de-anuncios-amazon_4.png)

Quando confirmado, os seus anúncios serão enviados e enfileirados para processamento. Após aprovado, o anúncio aparecerá na aba __Anúncios__, onde você pode __“ver detalhes do seu anúncio”__, __“ver anúncio sugerido pela Amazon”__ e __pesquisar anúncios__ na barra de busca.  

Os anúncios que não possuem correspondências, deverão ser enviados novamente. Para isso, siga o [tutorial de envio de produtos](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).  

Antes de realizar um novo envio, certifique-se de que os campos `Categoria global` e `EAN` estejam configurados, seguindo o passo a passo da [Pré- configuração do catálogo](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#3-pre-configuracoes-no-catalogo), e que todos os produtos estejam cumprindo os requisitos de [atributos obrigatórios na Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon).
