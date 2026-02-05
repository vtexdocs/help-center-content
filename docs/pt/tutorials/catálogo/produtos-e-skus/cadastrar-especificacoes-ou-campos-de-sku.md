---
title: 'Cadastrar especificações ou campos de SKU'
id: tutorials_119
status: PUBLISHED
createdAt: 2017-04-27T22:18:08.662Z
updatedAt: 2025-05-20T20:29:30.252Z
publishedAt: 2025-05-20T20:29:30.252Z
firstPublishedAt: 2017-04-27T23:00:44.181Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: adding-sku-specifications-or-fields
legacySlug: criando-campo-de-sku
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

A especificação de SKU é um campo obrigatório no cadastro de SKU onde se inserem as características específicas de cada variação do produto.

Na VTEX, uma especificação sempre faz parte de um [grupo de especificações](/pt/tutorial/criando-grupo-de-categoria), que é associado a uma [categoria](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf). Por isso, para criar uma especificação (campo) de SKU, é necessário ter cadastrado previamente pelo menos uma categoria e um grupo de especificações.

Exemplo: uma loja no setor de moda pretende vender o produto **Camisa Polo** nos tamanhos P, M ou G. Na categoria **Camisetas**, o grupo de especificações pode receber o nome de **Características**. Nesse caso, o tamanho é a característica que vai diferenciar cada SKU. Portanto, o lojista deve criar um campo de SKU chamado **Tamanho**, com **P**, **M** e **G** como opções de valor.

Neste artigo, explicamos como funciona a herança das especificações que você vai cadastrar e descrevemos como criar um campo de SKU, atribuir valores para esse campo e preencher as especificações no cadastro do SKU no Admin VTEX. Confira as seguintes seções:

* [Herança de especificações de SKU](#heranca-de-especificacoes-de-sku)
* [Passo a passo no Admin VTEX](#passo-a-passo-no-admin-vtex)
    1. [Criar um campo de SKU](#criar-um-campo-de-sku)
        * [Tipos de campo de SKU](#tipos-de-campo-de-sku)
    2. [Cadastrar valores para o campo de SKU](#cadastrar-valores-para-o-campo-de-sku)
        * [Acessar ou editar valores cadastrados](#acessar-ou-editar-valores-cadastrados)
    3. [Preencher especificações de SKU](#preencher-especificacoes-de-sku)
        * [Cadastro do SKU](#cadastro-do-sku)
        * [Planilha](#planilha)

> ℹ️ Para criar uma especificação de SKU utilizando a **Catalog API**, siga o guia para desenvolvedores [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification).

## Herança de especificações de SKU

Antes de criar especificações, é importante compreender que elas seguem uma lógica de “herança”, ou seja, ao criar uma especificação em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela. Portanto, se for necessário criar uma especificação de SKU que se aplique apenas aos SKUs presentes em uma categoria, a especificação deve ser criada no nível dessa categoria.

Exemplo: considere o produto **Camisa Masculina**. Em __Catálogo > Produtos e SKUs > SKU > Especificações__, página ilustrada a seguir, podemos ver que o grupo de especificações chamado **Características** está associado à categoria da camisa. Esse grupo inclui um campo de nome **Cor** e um campo de nome **Tamanho**.

![heranca-especificacoes-sku-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/cadastrar-especificacoes-ou-campos-de-sku_1.png)

Por se tratar de uma especificação de SKU, as informações selecionadas nessa página valerão somente para essa variação do produto **Camisa Masculina**. Todos os SKUs cadastrados no produto **Camisa Masculina** e todos os SKUs de produtos da mesma categoria devem ter essas especificações preenchidas também.

## Passo a passo no Admin VTEX

Para que as especificações apareçam no cadastro de SKUs, além de ter criado anteriormente um [grupo de especificações](/pt/tutorial/criando-grupo-de-categoria) associado a uma [categoria](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), é preciso criar os campos de SKU e cadastrar seus valores. Em seguida, você poderá preencher essas especificações no cadastro dos SKUs.

Veja o passo a passo completo nas seções a seguir.

### Criar um campo de SKU

> ⚠️ Uma vez criados, campos de SKU não podem ser apagados. Se você tornar o campo inativo, todos os SKUs que estão na categoria ficarão inativos, até que o campo fique ativo novamente. Não preencher uma especificação no cadastro do SKU pode ser uma das causas para que o SKU não apareça no site, pois ele fica inativo.

Para criar um campo de SKU, siga as instruções abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Categorias**.
3. Clique na categoria associada ao grupo de especificações em que você deseja criar um campo de SKU.

    > ⚠️ Observe que ao criar um campo em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela.

4. Clique em `Ações` <i class="fas fa-angle-down"></i>.
5. Clique em `Campo (SKU)`.
6. Clique em `Novo Campo`.
7. Preencha as informações referentes ao campo que está sendo criado:

    > ℹ️ O preenchimento de campos marcados com asterisco ( * ) é obrigatório. Não é possível alterar as definições sobre quais campos são obrigatórios ou não.

    * **Nome** *: nome da especificação (campo) de SKU.
    * **Texto** *: descrição sobre o campo.
    * **Tipo**:  tipo de campo de SKU, que pode variar entre **Combo** ou **Radio**. Leia a seção [Tipos de campo de SKU](#tipos-de-campo-de-sku) para mais informações sobre cada opção.
    * **Grupo**: nome do [grupo de especificações](/pt/tutorial/criando-grupo-de-categoria) do qual esse campo fará parte.
    * **Filtro**: define se a especificação será utilizada como filtro na navegação do site.
    * **Obrigatório**: define se o valor obrigatoriamente precisa ser preenchido no cadastro do SKU ou não. Caso o campo seja obrigatório, o SKU só poderá ser ativado após o preenchimento desta especificação.
    * **Mostrar especificação**: define se o campo é mostrado na página de cadastro do SKU, na aba **Especificações**.
    * **Link no menu superior**: define se o link para os valores do campo é mostrado no menu principal do site.
    * **Link no menu lateral**: define se o link para os valores do campo é mostrado no menu lateral do site.
    * **Ativo**: ativa o campo.
8. Clique em `Salvar`.

![sku-spec-1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/cadastrar-especificacoes-ou-campos-de-sku_2.gif)

#### Tipos de campo de SKU

Existem dois tipos de campo de SKU – **Combo** e **Radio**. As especificações de SKU têm como objetivo diferenciar as variações do mesmo produto a partir de características objetivas e pré-definidas para seleção, como tamanho, cor, entre outras. Para apresentar campos de texto e estruturas HTML mais complexas, como descrições ou tabelas de medidas, é necessário utilizar a funcionalidade de [campo de produto](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto)

Confira a tabela a seguir para obter detalhes sobre os tipos de campo de SKU que você pode selecionar na opção **Tipo** ao [criar um campo de SKU](#criar-um-campo-de-sku):

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Tipo de campo</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descrição</th>
  </tr>
</thead>
<tbody>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">**Combo**</td>
    <td class="t-body pa5" style="min-width: 15rem;">Conteúdo com dois ou mais valores pré-definidos, para seleção de uma opção em uma lista suspensa (dropdown). Exemplo: voltagem de um eletrodoméstico, que pode ser 110v ou 220v.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">**Radio**</td>
    <td class="t-body pa5" style="min-width: 15rem;">Conteúdo com dois ou mais valores pré-definidos, para marcação de uma opção a partir de uma grade de valores. Exemplo: definição de cor dos componentes de um produto (vermelho, amarelo, azul, preto…).</td>
  </tr>
</tbody>
</table>

### Cadastrar valores para o campo de SKU

Os **Valores** dos campos de SKU irão variar de acordo com o tipo do campo escolhido: **Combo** ou **Radio**. Siga os passos abaixo para cadastrar valores pré-definidos:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Categorias**.
3. Clique na categoria em que o campo de produto está salvo.
4. Clique em `Ações` <i class="fas fa-angle-down"></i>.
5. Clique em `Campo (SKU)`.
6. Clique na seta para baixo <i class="fas fa-angle-down"></i>.
7. Clique em **Valores**.

    Nesta página é possível criar um **Novo valor** ou **Editar** os valores estabelecidos anteriormente.

7. Preencha o campo **Nome** com os valores que você deseja criar para aquele campo.

    Insira um valor por linha e tecle `Enter` entre cada valor, conforme ilustrado na imagem a seguir.

    ![valores-campo-sku-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/cadastrar-especificacoes-ou-campos-de-sku_3.png)

8. Clique em `Salvar`.

    Os valores cadastrados serão exibidos na [interface do cadastro de SKU](#preencher-especificacoes-de-sku).

![sku-spec-2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/cadastrar-especificacoes-ou-campos-de-sku_4.gif)

> ℹ️ Caso esteja cadastrando os primeiros valores de um campo, é necessário voltar no formulário daquele campo específico e marcar a opção **Ativo**.

#### Acessar ou editar valores cadastrados

Para acessar ou editar valores cadastrados para um campo de SKU, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Categorias**.
3. Clique na categoria em que o campo de SKU está salvo.
4. Clique no botão **Ações **<i class="fas fa-angle-down"></i>.
5. Clique em **Campo (SKU)**.
6. Clique na seta para baixo <i class="fas fa-angle-down"></i>.
7. Clique em **Valores**.

    Nesta página, você pode visualizar os valores cadastrados e escolher entre as seguintes opções:

    * **Ordernar alfabeticamente:** organizar a lista de valores por ordem alfabética.
    * **Novo valor**: criar um novo valor.
    * **Editar**: permite alterar o texto do valor e optar por ativá-lo ou desativá-lo.
    * <i class="fas fa-angle-down"></i> > **Excluir**: excluir um valor.

### Preencher especificações de SKU

Após criar um campo de SKU e cadastrar valores, é necessário preencher as especificações de cada SKU a partir dos campos e valores que você criou. Você pode fazer isso individualmente pela página de [cadastro do SKU](#cadastro-do-sku) ou massivamente por [planilha](#planilha).

#### Cadastro do SKU

Para preencher as especificações de cada SKU de forma individual, siga as instruções abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Todos os produtos**.
3. Na linha do produto que contém o SKU desejado, clique na seta para baixo <i class="fas fa-angle-down"></i>.
4. Clique em **SKU**.
5. No SKU desejado, clique em `Alterar`.
6. Acesse a aba **Especificações**.
7. Preencha os [campos que você criou](#criar-um-campo-de-sku) com os [valores](#cadastrar-valores-para-o-campo-de-sku) desejados.

    Campos obrigatórios estarão marcados com `*`.

8. Clique em `Salvar`.

![sku-spec-3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/cadastrar-especificacoes-ou-campos-de-sku_5.gif)

#### Planilha

Para preencher especificações de SKUs em massa por planilha, você precisa exportar a planilha padrão VTEX, preenchê-la e importá-la na plataforma. Para fazer isso, siga as instruções abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Importação e exportação**.
3. Clique na aba **Especificações de SKU**.
4. Clique com o botão direito na categoria desejada.
5. Clique em **Exportar**.

    Um retângulo verde aparecerá na tela.

6. Clique em **Clique aqui para baixar o arquivo** para exportar a planilha.
7. Abra o arquivo da planilha e preencha as linhas com os dados da especificação do SKU.

    Apenas altere a coluna `ValoreEspecificaCao` da planilha com o valor a ser preenchido para o campo listado em cada linha. As demais colunas deverão permanecer inalteradas pois seus valores serão utilizados para validação dos dados.

8. No Admin VTEX, ainda em **Catálogo** > **Importação e Exportação** > **Especificação de SKU**, desça a página até **Upload de arquivo para importação**.
9. Clique em **Selecionar** para selecionar o arquivo com a planilha preenchida no seu computador.
10. Clique em `Importar`.

![sku-spec-4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/cadastrar-especificacoes-ou-campos-de-sku_6.gif)

## Saiba mais
- [Cadastrar especificações ou campos de produto](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto)
- [Especificações de produto e de SKU](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)

