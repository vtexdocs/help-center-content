---
title: 'Configurar formulários de cadastro de lojas e vendedores para o inStore'
id: 1KJ79RwmMcC4ymyEIYAeA4
status: ARCHIVED
createdAt: 2018-03-06T21:26:24.205Z
updatedAt: 2020-05-25T19:06:03.499Z
publishedAt: 
firstPublishedAt: 2018-03-06T21:44:16.041Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: cadastrar-lojas-e-vendedores-para-o-instore
locale: pt
legacySlug: cadastrar-lojas-e-vendedores-para-o-instore
subcategoryId: unknown-subcategory
---

No módulo __Master Data__ são realizadas as configurações da __aplicação__, da __loja__ e dos __vendedores__.

O inStore introduziu o conceito de __loja física__ e __vendedor__ para a plataforma VTEX. Para gerenciar esses cadastros, faz-se necessário configurar essas entidades no __Master Data (CRM)__.

A entidade `Stores` vem criada por *default* na sua loja. Para configurar a entidade `Vendors`, siga os passos abaixo:

## Acessar a estrutura de dados no Master Data

1. Acesse o módulo __Master Data__.
2. Na aba __Aplicações__, clique no botão de engrenagem da aplicação __Profile System__.
3. Na caixa __Configurações__, clique em __Estrutura de Dados__.
4. Clique na aba __Entidade de Dados__.

## Criar entidade Vendors (VN)

Já na aba __Entidade de Dados__, siga os passos abaixo:

1. No canto superior esquerdo da tela, clique em __Novo__.
2. Em __Sigla__, preencha com `VN`.
3. Em __Nome__, você deve escrever `Vendors`.
4. No campo __Tipo de chave primária__, selecione a opção __Gerar um GUID único__.
5. Deixe a opção __Permitir consultar todos os registros sem filtro__ desmarcada.
6. Em __Tempo de cache para consultas paginadas__, selecione __Sem cache__.

Na aba __Campo__, você deverá configurar os campos que devem fazer parte desta entidade de dados. Siga os passos abaixo para a criação de cada campo:

### Campo *name*

1. Em __Nome__, preencha com `name`.
2. Em __Nome de exibição__, preencha com `Name`.
3. Em __Tipo__, escolha `Varchar 750`.
4. Clique no __botão de engrenagem__ localizado no lado direito.
5. Na caixa __Configurações gerais__, marque apenas __Público Para Leitura__ e __Público Para Filtrar__.
6. Na caixa __Configurações de busca e filtro__, marque __É buscável__ e __É filtro__.
7. Na caixa __Configurações específicas deste tipo de campo__, marque apenas __Não usar normalização__.
8. Clique novamente no __botão de engrenagem__ localizado no lado direito.

### Campo *store*

1. Clique em __Novo campo__.
2. Em __Nome__, preencha com `store`.
3. Em __Nome de exibição__, preencha com `Store`.
4. Em __Tipo__, escolha `Relationship`.
5. Clique no __botão de engrenagem__ localizado no lado direito.
6. Na caixa __Configurações gerais__, marque apenas __Publico Para Leitura__ e __Publico Para Filtrar__.
7. Na caixa __Configurações específicas deste tipo de campo__, em __Entidade de Dados para relacionar__, selecione __Stores__.
8. Ainda na caixa __Configurações específicas deste tipo de campo__, em __Campo relacionado para visualização__, selecione `name`.
9. Clique novamente no __botão de engrenagem__ localizado no lado direito.

### Campo *user*

1. Clique em __Novo campo__.
2. Em __Nome__, preencha com `user`.
3. Em __Nome de exibição__, preencha com `User`.
4. Em __Tipo__, escolha `Varchar 100`.
5. Clique no __botão de engrenagem__ localizado no lado direito.
6. Na caixa __Configurações gerais__, marque apenas __Publico Para Leitura__ e __Publico Para Filtrar__.
7. Na caixa __Configurações de busca e filtro__, marque __É buscável__ e __É filtro__.
8. Na caixa __Configurações específicas deste tipo de campo__, marque apenas __Não usar normalização__.
9. Clique novamente no __botão de engrenagem__ localizado no lado direito.
10. Ao final deste cadastro, clique no botão __Salvar__ para gravar as configurações realizadas.

## Publicar entidades

Após salvar as configurações dos campos, você deve publicar a entidade __Vendors__. A entidade __Stores__ já se encontra publicada por *default*. Para realizar a publicação, siga os passos abaixo:

1. Na aba __Entidade de dados__, busque pela entidade __Vendors__.
2. No lado esquerdo da linha, clique no botão com um __disquete azul__.
3. Você verá uma mensagem de confirmação. Clique em __OK__ para publicar a entidade.
4. Você receberá uma mensagem do Master Data informando que a publicação foi realizada com sucesso. Clique __OK__ para prosseguir.

## Indexação da entidade Vendors

Depois de realizar os passos descritos acima, é necessário indexar a entidade `Vendors` para que elas fique disponível. Siga os passos abaixo:

1. Clique no botão __Novo__.
2. No campo __Nome__, preencha com `VendorsIndex`.
3. Marque a opção __Valores únicos__.
4. Em __Entidade de Dados__, selecione `Vendors`.
5. Em __Composição de campos__, escreva `user`.
6. Clique em __Salvar__.
7. Já na tela da aba __Índices__, clique no __disquete azul__ no lado esquerdo da linha do índice `VendorsIndex`.
8. Você receberá uma mensagem do Master Data confirmando que o índice foi configurado com sucesso. Clique em __OK__.

## Criação dos formulários no Master Data

Após criar as entidades e suas estruturas de dados, você poderá criar os formulários necessários no Master Data. Para isso, siga os passos abaixo:

### Formulário de Vendedores

1. Acesse o módulo __Master Data__.
2. Clique no botão __Criar aplicação__.
3. Na caixa __Configurações__, clique em __Formulários__.
4. Clique no botão __Novo__, no canto superior esquerdo da tela.
5. No campo __Nome__, preencha com `Vendedores`.
6. Em __Entidade de dados__, selecione `Vendor`.
7. A aba __Campo da Listagem__ será aberta. Selecione os campos __Id do Registro__, __Loja__ e __Usuário__.
8. Na aba __Schema de Layout__, clique no botão __Incluir nova seção__, no lado direito da tela.
9. No campo __Nome__ da Seção 1, escreva `Vendedor`.
10. Na caixa __Campos disponíveis__, clique e arraste os campos __Nome__, __Usuário__ e __Loja__ para os __Campos da coluna 1__.
11. Clique em __Salvar__.

### Formulário de Lojas

1. Acesse o módulo __Master Data__.
2. Clique no botão __Criar aplicação__.
3. Na caixa __Configurações__, clique em __Formulários__.
4. Clique no botão __Novo__, no canto superior esquerdo da tela.
5. No campo __Nome__, preencha com `Lojas`.
6. Em __Entidade de dados__, selecione `Stores`.
7. A aba __Campo da Listagem__ será aberta. Selecione os campos __Id do Registro__, __Name__, __Address__, __Number__, __Neighborhood__, __City__, __State__, __Longitude__, __Latitude__, __Trade Policy__, __ID da Loja__, __ID do Documento__, __Postal Code__, __Country__, __ecommerce Seller ID__, __Store Seller ID__.
8. Na aba __Schema de Layout__, clique no botão __Incluir nova seção__, no lado direito da tela.
9. No campo __Nome da Seção 1__, escreva `Loja`.
10. Na caixa __Campos disponíveis__, clique e arraste os campos __Name__, __Nome da Loja__, __Postal Code__, __Address__, __Number__, __Complement__, __Neighborhood__, __City__, __State__ e __Country__ para os __Campos da coluna 1__.
11. Na caixa __Campos disponíveis__, clique e arraste os campos __Trade Policy__, __Store Seller ID__ e __ecommerce Seller ID__ para os __Campos da coluna 2__.
12. Clique em __Salvar__.

<hr>

Esses formulários demoram alguns minutos para aparecer depois de serem criados. Clique na aba __Aplicações__ para verificar se os formulários já estão aparecendo na tela. Caso ainda não tenham aparecido, você pode clicar em __Recarregar Aplicações__ ou __Atualizar a página__ e verificar se os formulários já se encontram disponíveis. Assim que eles aparecerem, você já poderá cadastrar as lojas físicas e os vendedores.
