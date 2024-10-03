---
title: 'Preencher campos de cadastro de produto'
id: 4dYXWIK3zyS8IceKkQseke
status: PUBLISHED
createdAt: 2017-09-21T14:48:54.657Z
updatedAt: 2023-02-24T20:32:34.623Z
publishedAt: 2023-02-24T20:32:34.623Z
firstPublishedAt: 2017-09-21T15:09:23.192Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: product-registration-fields
locale: pt
legacySlug: campos-de-cadastro-de-produto
subcategoryId: pwxWmUu7T222QyuGogs68
---

Para entender como preencher o formulário de [cadastro de um novo produto](https://help.vtex.com/pt/tutorial/cadastrando-produtos--tutorials_2567), veja abaixo a descrição completa dos campos dessa página, divididos em duas abas: __Produto__ e __Especificações__.

## Produto

__Nome:__ relacionado ao produto que estiver cadastrando. Use palavras simples e evite outros idiomas ou escrita complexa. Esse campo é importante para SEO e deve respeitar o limite de 150 caracteres. Campo obrigatório.

__Palavras Substitutas:__ sinônimos de termos relacionados ao nome dado para seu departamento ou categoria. "Televisão", por exemplo, pode ter como palavra substituta "TV" ou "Tevê".  Esse campo é importante para tornar suas buscas mais abrangentes e deve respeitar o limite de 8000 caracteres.

__TextLink:__ utilizado para criar a URL do produto. Campo obrigatório. Para mais informações, confira o artigo [Como definir a URL de um produto](https://help.vtex.com/pt/tutorial/como-a-url-de-produto-e-montada--frequentlyAskedQuestions_368).

>❗ Ao preencher o **textLink** do produto, evite utilizar as seguintes palavras reservadas, pois isso pode prejudicar o desempenho da sua loja e interferir no funcionamento de páginas definidas no Admin VTEX. Veja a lista de palavras reservadas abaixo.
>
> *`a`
>
> *`meta`
>
> *`api`
>
> *`admin`
> 

__Título da Página (Tag Title):__ texto que fica na aba do navegador e corresponde ao título da página do produto. Este campo é importante para SEO.

__Descrição do Produto:__ descrição das principais informações relacionadas ao produto. Um resumo simples e de fácil entendimento para o cliente. Para incluir quebras de linha e outros recursos de formatação na descrição do produto, é necessário utilizar HTML.

__Descrição (Meta Tag Description):__ breve descrição da categoria. É recomendável não ultrapassar 150 caracteres para que os mecanismos de busca possam mostrá-lo de forma correta nas páginas de resultado.

__Marca:__ digitar ou buscar o nome da marca depois adicioná-la ao cadastro. Para que isso seja possível, é obrigatório que a marca já tenha sido cadastrada e esteja ativa na sua loja. Campo obrigatório.

__Categoria:__ selecionar a categoria a que o produto pertence. Para que isso seja possível, é obrigatório que a categoria em questão já tenha sido cadastrada e esteja ativada na sua loja. Campo obrigatório.

__Categoria Global VTEX:__ é uma árvore de categorias única, já definida pelo sistema, que será utilizada na integração dos produtos com o Google Shopping, Buscapé e marketplaces. Um bom mapeamento faz com que os produtos da sua loja também sejam encontrados nos parceiros de forma mais eficaz.

__Políticas Comerciais:__ você deve marcar as políticas comerciais a que o produto se destina, para definir a quais marketplaces o produto será disponibilizado. Caso nenhuma política comercial seja selecionada, o produto vai ser considerado para todas elas.

__Data de lançamento no mercado:__ campo utilizado para auxiliar na ordenação do resultado de busca do site. Por meio da querystring `O=OrderByReleaseDateDESC` é possível puxar esse valor e mostrar a ordem de exibição por data de lançamento. Além disso, pode ser uma forma de criar coleção automática.

__Exibir no site:__ essa função ativa ou inativa a visibilidade de um produto na sua loja.

__Mostrar produto esgotado:__ essa função faz com que um produto, mesmo quando esgotado, apareça na sua loja, no formato de __Avise-me__, campo em que o cliente informa o seu email para ser avisado quando o produto estiver disponível.

__Código de referência do produto:__ combinação única de letras, números ou ambos para identificação interna da loja.

__Nome complemento:__ descrição curta do produto. Essa informação é renderizada pelo controle `$product.DescriptionShort` e pode ser exibida tanto na página do produto quanto na prateleira.

__Código fiscal:__ número de identificação do produto.

__Fornecedor:__ digitar ou buscar o nome da marca para adicioná-la ao cadastro.

__Score (usado para ordenação de busca):__ valor utilizado para definir a prioridade na página de resultado de busca. Para mais detalhes sobre este campo, leia [Como funciona o campo Score?](https://help.vtex.com/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).

## Especificações

Dependendo da categoria do produto criado, podem aparecer campos para você preencher na aba __Especificações__. Esses campos são propriedades que você pode adicionar aos seus SKUs para atribuir características específicas aos produtos da sua loja.

Veja como criar as [especificações do seu Produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto?locale=pt).

Se você tiver criado algum campo de produto obrigatório, o produto só poderá ser ativado após o preenchimento desta especificação.

>ℹ️ Se o seu produto não aparecer no site da sua loja após o cadastro, confira o artigo [Por que o produto não aparece no site?](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382) para entender como resolver esse problema.

### Saiba mais
- [Produtos - Definição de conceito](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru)
- [Cadastrar produtos](https://help.vtex.com/pt/tutorial/cadastrando-produtos--tutorials_2567)
- [Preencher campos de cadastro de SKU](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku?locale=pt)
- [Preencher campos da Planilha de Importação](https://help.vtex.com/pt/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI)
