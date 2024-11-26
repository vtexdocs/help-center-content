---
title: 'Configurar Redirecionamentos'
id: 4Gd2wLQFbCwTsh8RUDwSoL
status: ARCHIVED
createdAt: 2019-11-22T23:40:25.940Z
updatedAt: 2024-09-06T20:14:13.631Z
publishedAt: 
firstPublishedAt: 2019-11-25T17:36:44.905Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configuring-redirect
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

Para configurar um redirecionamento, você precisa seguir os passos a seguir:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Em **Intelligent Search**, clique em **Redirecionamentos**.
3. Clique no botão <i class="fas fa-plus"></i> `Adicionar`.
4. Preencha os campos referentes às [informações gerais](#informacoes-gerais) do redirecionamento detalhadas na seção abaixo.
5. Clique em <i class="fa-solid fa-plus"></i> `Adicionar condição`.
6. Preencha os campos de [Regras de ativação](#regras-de-ativacao).
7. Para finalizar, clique em `Aplicar`.

Você deve preencher os seguintes campos:

![redirecionamentos-adminv4-PT](https://images.ctfassets.net/alneenqid6w5/69CWrwXk38Qxwb9fNNzYyc/ff394f626cfa64b037bdf652ec07ca38/Screenshot_2022-04-04_at_15-15-42_Intelligent_Search_-_Redirecionamentos.png)

### Informações gerais

Esta seção apresenta as seguintes informações gerais sobre o redirecionamento:

- **Nome**: nome do conjunto de regras do redirecionamento criado.
- **URL de redirecionamento**: endereço de destino que o cliente será encaminhado. Precisa ser cadastrado de forma absoluta - endereço completo - e não relativo. Exemplo: `https://www.loja.com.br/_secure/account/#/orders` ao invés de `_secure/account/#/orders`.
- **Idiomas:** idiomas aos quais o redirecionamento será aplicado. Campo disponível apenas para lojas que utilizam [Configurações Multi-idioma (Beta)](https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).

### Regras de ativação

Conjunto de condições de termos ou filtros que serão aplicados a cada pesquisa realizada. É necessário ter pelo menos uma condição cadastrada, seja por termo ou por filtro. 

Selecione o tipo do escopo das regras, seja por termo ou por filtro.

- **Termo**: palavra pesquisada pelo cliente que será relacionada à regra. O termo apresenta duas opções:
    - `é`: precisa ser uma pesquisa com palavras exatas. Exemplo: se você cadastrar “black friday” e o cliente pesquisar por “black friday” o redirecionamento seria acionado. Caso ele pesquise por “promoção black friday”, ele não é ativado.
    - `contém`: não precisa ser uma pesquisa com palavras exatas. Exemplo: se você cadastrar “black friday” e o cliente pesquisar por “black friday” o redirecionamento seria acionado. Caso ele pesquise por “promoção black friday”, ele também é ativado.
- **Filtro**: atributo pesquisável já definido que restringe os resultados de busca. Apenas selecionar o filtro já cadastrado ativa o redirecionamento criado. O filtro apresenta duas opções:
    - `é`: essa opção possibilita que não somente o filtro da regra seja selecionado. Exemplo: se a regra for ``é``: Filtro _marca_, valor Nike. Mesmo o cliente tendo selecionado também adidas, o redirecionamento seria acionado.
    - `somente`: Essa opção possibilita apenas que o filtro cadastrado seja selecionado. Exemplo: se a regra for ``somente``: Filtro _marca_, valor Nike. Se o cliente já tiver selecionado adidas, o redirecionamento não seria acionado. Só funcionaria se o primeiro filtro de marca fosse Nike.

Caso você deseje criar mais de uma regra, é preciso adicionar uma condição de interação entre as regras. Elas podem ser:

- `ou`: qualquer uma das regras cadastradas ativam o redirecionamento.
- `e`: é preciso atender a todas as regras juntas para ativar o redirecionamento.

Ao clicar em <i class="fas fa-ellipsis-v"></i> você terá as seguintes opções:

- <i class="fas fa-clone"></i> **Duplicar**: cria uma cópia da regra selecionada.
- <i class="far fa-trash-alt"></i> **Deletar**: deleta a regra selecionada.

Para apagar todas as regras configuradas, clique em `Limpar Regras`.

### Importar CSV

Caso existam muitos redirecionamentos a serem cadastrados, você pode fazer um arquivo CSV e depois importá-lo no Admin. O arquivo deve seguir o seguinte formato para cada redirecionamento criado: `<Nome>;<URL>;<Tipo>;<Ativo>;<Tópico>;<Verbo>;<Valor>`.

- **Nome**: define o título do redirecionamento. Os possíveis valores são `termo` ou `filtro`.
- **URL:** URL do redirecionamento.
- **Tipo:**  regra de ativação. Os possíveis valores são `and` ou `or`.
- **Ativo:** condição de ativação do redirecionamento. Os possíveis valores são `true` ou `false`.
- **Tópico:** atributo pesquisável. Os possíveis valores são `term` para redirecionamento de termo ou `brand`, `category`, `department`, `sellername` e `subcategory` para redirecionamento de filtro.
- **Verbo:** opção de inclusão do **Tópico**. Os possíveis valores são `is` ou `contains`.
- **Valor:** valor do termo ou do filtro.

Para importar o arquivo, siga as instruções abaixo.

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Em **Intelligent Search**, clique em **Redirecionamentos**.
3. Clique no botão `Importar`.
