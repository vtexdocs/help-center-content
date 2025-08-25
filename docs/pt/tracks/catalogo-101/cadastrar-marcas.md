---
title: 'Cadastrar Marcas'
id: 7lEGOSpAlQJCs5eUc5XFmR
status: PUBLISHED
createdAt: 2019-05-16T20:24:10.456Z
updatedAt: 2023-03-28T18:18:49.018Z
publishedAt: 2023-03-28T18:18:49.018Z
firstPublishedAt: 2019-05-22T18:19:34.194Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: create-brands
locale: pt
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalogo-101
---

Existem duas formas de cadastrar uma marca na plataforma VTEX: pelo Admin VTEX ou por API.

Siga as instruções abaixo para criar e atualizar as marcas dos produtos disponibilizados na sua loja:

## Admin VTEX

1. Clique em __Catálogo__.
2. Clique em __Marcas__.
3. Clique em `Nova Marca`.
4. Preencha os campos do formulário de marca. Para entender melhor o significado de cada campo, veja abaixo a descrição completa de cada um deles.
  - __Nome__: nome da marca que deseja cadastrar para identificação num produto. Esse campo é obrigatório e deve respeitar o limite de 150 caracteres. 
  - __Palavras Substitutas__: termos alternativos que levam à marca cadastrada. O objetivo é facilitar o usuário a encontrar a marca, mesmo que escreva de diferentes formas. Normalmente essas palavras são diferenças ou erros ortográficos e/ou formas genéricas e estrangeiras de chamar a marca.   
  - __Descrição da Marca (Meta Tag Description)__: breve descrição da marca para contextualizar os buscadores. O recomendável é não ultrapassar 150 caracteres para que os motores de busca possam mostrá-lo de forma assertiva nas páginas de pesquisas (ex: google).
  - __Título da Página da Marca (Tag Title)__: é o texto que aparece na aba do navegador e corresponde ao título da sua página. É considerado pelos motores de busca um dos elementos mais importantes para otimização de resultado.
  - __Adwords Remarketing Code__: também conhecido como Google Remarketing Tag, é o código usado para campanha do Google Adwords. O preenchimento desse campo com o código permite o acompanhamento de métricas de remarketing associados a essa marca. Normalmente,a sua agência de marketing digital tem acesso e pode fornecer código.
  - __Lomadee Campaing Code__: código usado para campanhas do Buscapé. O preenchimento desse campo com o código permite o acompanhamento de métricas de remarketing associados a essa marca.
  - __Score (usado para ordenação da busca)__: valor usado para definir a prioridade da marca na página de resultado de busca. Para entender mais sobre o campo e a ordenação da busca, acesse o nosso artigo sobre [como funciona o campo Score](https://help.vtex.com/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).
  - __Exibir no menu da Home__: ao selecionar essa caixa, a marca aparecerá no menu da sua loja por meio do controle *Menu de Departamentos* (<vtex.cmc:departmentNavigator/>). Para entender mais sobre o uso de controles, acesse nosso artigo com a [lista de controles](https://help.vtex.com/pt/tutorial/lista-de-controles-para-templates--tutorials_563) para as páginas da sua loja. 
  - __Ativar a marca__: ao selecionar essa caixa, a marca fica visível e pronta para o uso nos produtos cadastrados.
5. Clique em  `Salvar `.

As informações preenchidas no cadastro podem ser atualizadas a qualquer momento através do módulo de Catálogo. Para editar as informações de uma marca, basta clicar no botão  `Alterar `. 

Para excluir o cadastro de alguma marca, você deve clicar na seta ao lado de  `Alterar ` e selecionar a opção `Excluir`. 

![editar-marca pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/catalogo-101/cadastrar-marcas_1.png)

## API

Utilize a chamada [Create Brand](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-brand#catalog-api-post-brand) para criar uma nova Marca por meio da API do Catálogo.
