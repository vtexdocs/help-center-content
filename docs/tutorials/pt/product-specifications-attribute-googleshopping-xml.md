---
title: 'Atributo de especificações de produto - XML Google Shopping'
id: tutorials_100
status: PUBLISHED
createdAt: 2017-04-27T22:19:40.955Z
updatedAt: 2023-03-29T20:02:31.583Z
publishedAt: 2023-03-29T20:02:31.583Z
firstPublishedAt: 2017-04-27T23:00:42.099Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: atributo-de-especificacoes-de-produto-xml-googleshopping
locale: pt
legacySlug: atributo-de-especificacoes-de-produto-xml-googleshopping
subcategory: pwxWmUu7T222QyuGogs68
---

Após a [atualização feita pelo Google](/pt/tutorial/entendendo-a-atualizacao-do-xml) em setembro de 2015, algumas tags de atributo utilizadas no feed de produtos passaram a ter valores pré-definidos que são exigidos no idioma inglês e todo em letras minúsculas.

Isso para se poder integrar os produtos no Google Shopping e ter uma melhor aderência de categorização.

Como a plataforma da VTEX permite que cada cliente estruture e formule como desejar essa grade de atributos, não há como mapear todos e convergi-los em apenas uma variação de dois ou três valores.

Isto é, pensando na tag para o atributo de **gênero** (para o Google: **gender**), onde poderemos ter uma variação que vá desde "Masculino"/"Feminino" até "Meninos"/"Meninas", "Garotos"/"Garotas", entre outros.

Para feeds que possuem produtos da categoria **Vestuário e acessórios** será obrigatória a inserção dos atributos:

- `'gênero'[g:gender]`
- `'idade'[g:age_group]`
- `'disponibilidade'[g:availability]`
- `'condição'[g:condition]`

Atributos como `'tamanho'[g:size]` e `'cor' [g:color]` deverão ser preenchidos com o valor da própria especificação criada.

O tratamento dessa demanda deverá ser realizada por meios das especificações de produto.

Criando um Grupo abrangendo os atributos acima descritos de forma a atender o padrão de valor exigido para o XML do Google Shopping.

## Como fazer

### Grupo

Criaremos um grupo de nome **Atributos Google** na categoria raiz da Loja:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Categorias__.
3. Clique na categoria raiz.
  Ao fazer isso, a categoria selecionada aparece em destaque, acompanhada do botão `Ações`.
4. Clique no botão `Ações` e, nas opções que se abrem, clique em __Grupo__.
5. Clique no botão `Novo Grupo` para adicionar um novo grupo.
6. Você será redirecionado para uma tela, onde deve preencher o nome e confirmar a categoria em que está criando o grupo.
7. Clique em `Salvar`.

### Campo de Produto

Aqui será necessário criar quatro campo para cada seguinte atributo acima discutido: **gender**, **age\_group**, **availability** e **condition**.

#### Como criar um Campo de Produto

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em __Categorias__.
3. Clique na categoria raiz.
4. Clique na categoria raiz.
  Ao fazer isso, a categoria selecionada aparece em destaque, acompanhada do botão `Ações`.
5. Clique no botão  `Ações` e, nas opções que se abrem, clique em __Campo (Produto)__.
6. Clique no botão  `Novo campo ` para adicionar um novo campo de produto.

As seguintes opções aparecem:

- __Nome:__ gender/age\_group/availability/condition.
- __Texto:__ descrição sobre o campo.
- __Tipo:__ Radio.
- __Grupo:__ selecionar o grupo criado anteriormente "Atributos Google".
- __Filtro:__ será utilizado como filtro na navegação do site.
- __Obrigatório:__ não é necessário.
- __Exibe Especificação:__ não é necessário.
- __Link no Menu Superior:__ não é necessário.
- __Link no Menu Lateral:__ não é necessário.
- __Ativo:__ Ativa ou Inativa o campo no cadastro do produto.

### Valores de atributos

Aqui teremos que cadastrar os valores pré-definidos que irão compor o cadastro do produto:

Já com o campo acima criado, clique no botão de ação e logo em **Valores**. Neste, preencha os valores seguintes conforme o padrão abaixo:
- **gender**: só pode ser "male", "female" e "unisex";
- **age\_group**: só pode ser "newborn", "infant", "toddler", "kids" e "adult";
- **availability**: só pode ser "in stock", "out of stock" e "preorder";
- **condition**: só pode ser "new", "used" e "refurbished".

Os valores podem ser criados de uma vez só, basta quebrar linha para cada um.

Basta salvar e os valores virão listados.

Feito isso, basta definir no XML do Google Shopping os atributos seguindo o acima estruturado.

Confira o artigo [Como Configurar XML do Google Shopping](https://help.vtex.com/pt/tutorial/como-configurar-xml-do-google-shopping--frequentlyAskedQuestions_372) para detalhes sobre a configuração do XML.
