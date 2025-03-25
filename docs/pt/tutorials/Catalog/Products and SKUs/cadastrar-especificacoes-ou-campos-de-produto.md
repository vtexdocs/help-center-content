---
title: 'Cadastrar especificações ou campos de produto'
id: tutorials_106
status: PUBLISHED
createdAt: 2017-04-27T22:19:08.184Z
updatedAt: 2023-03-29T17:43:57.193Z
publishedAt: 2023-03-29T17:43:57.193Z
firstPublishedAt: 2017-04-27T23:00:43.197Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: adding-specifications-or-product-fields
locale: pt
legacySlug: criando-um-campo-de-produto
subcategoryId: pwxWmUu7T222QyuGogs68
---

A [especificação](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) de produto é um campo no cadastro de um produto onde se incluem características que são válidas para todas as suas variações (SKUs).

Na VTEX, uma especificação sempre faz parte de um [grupo de especificações](https://help.vtex.com/pt/tutorial/criando-grupo-de-categoria), que é associado a uma [categoria](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf). Por isso, para criar uma especificação (campo) de produto, é necessário ter cadastrado previamente pelo menos uma categoria e um grupo de especificações.

Exemplo: considere uma loja no setor de moda. Na categoria **Camisetas**, o grupo de especificações pode receber o nome de **Informações**, o campo de produto pode se chamar **Composição** e seus valores podem ser **Algodão** e **Poliéster**.

Neste artigo, explicamos como funciona a herança das especificações que você vai cadastrar, detalhamos o processo de cadastro de campos de produto e o preenchimento de especificações do produto no Admin VTEX. Confira as seguintes seções:

* [Herança de especificações de produto](#heranca-de-especificacoes-de-produto)
* [Passo a passo no Admin VTEX](#passo-a-passo-no-admin-vtex)
    1. [Criar um campo de produto](#criar-um-campo-de-produto)
        * [Tipos de campo de produto](#tipos-de-campo-de-produto)
    2. [Cadastrar valores para o campo de produto](#cadastrar-valores-para-o-campo-de-produto)
        * [Acessar ou editar valores cadastrados](#acessar-ou-editar-valores-cadastrados)
    3. [Preencher especificações de produto](#preencher-especificacoes-de-produto)
        * [Cadastro do produto](#cadastro-do-produto)
        * [Planilha](#planilha)

>ℹ️ Para criar uma especificação de produto utilizando a** Catalog API**, siga o guia para desenvolvedores [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification).

## Herança de especificações de produto

Antes de criar especificações, é importante compreender que as especificações seguem uma lógica de “herança”, ou seja, ao criar uma especificação em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela. Portanto, se for necessário criar uma especificação de produto que se aplique a apenas uma categoria, esta deve ser criada no nível dessa categoria.

Considere o produto **Televisão** como exemplo. Em **Catálogo > Todos os produtos > Alterar > Especificações**, página ilustrada a seguir, podemos ver que o grupo de especificações chamado **Características** está associado à categoria da televisão. Esse grupo inclui um campo de nome **Polegadas** e um campo de nome **Faixa etária**, que são obrigatórios.

![especificacoes-caracteristicas-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/cadastrar-especificacoes-ou-campos-de-produto_1.png)

Por se tratar de uma especificação de produto, as informações selecionadas nessa página valerão para todas as variações do produto __Televisão__. Todos os produtos cadastrados na mesma categoria da televisão precisam ter essas especificações preenchidas também, visto que os campos são obrigatórios.

## Passo a passo no Admin VTEX

Para que as especificações apareçam no cadastro de produtos, além de ter criado anteriormente um [grupo de especificações](https://help.vtex.com/pt/tutorial/criando-grupo-de-categoria) associado a uma [categoria](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), é preciso criar os campos de produto e cadastrar seus valores. Em seguida, você poderá preencher essas especificações nos seus produtos.

Veja o passo a passo completo nas seções a seguir.

### Criar um campo de produto

Para criar um campo de produto, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Categorias**.
3. Clique na categoria associada ao grupo de especificações em que você deseja criar um campo de produto.

    Observe que ao criar um campo em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela.

3. Clique em `Ações` <i class="fas fa-angle-down"></i>.
4. Clique em `Campo (Produto)`.
5. Clique em `Novo Campo`.
6. Preencha as informações referentes ao campo que está sendo criado:
    * **Nome**: nome da especificação (campo) de produto.
    * **Texto**: descrição sobre o campo.
    * **Tipo**: tipo de campo, que pode variar entre **Texto**, **Texto Grande**, **Número**, **Combo**, **Radio**, **CheckBox**, **Texto Indexado** e **Texto Grande Indexado**. Leia a seção [Tipos de campo de produto](#tipos-de-campo-de-produto) para mais informações sobre cada opção.
    * **Valor Padrão**: valor de preenchimento já definido na criação do campo.
    * **Grupo**: nome do [grupo de especificações](https://help.vtex.com/pt/tutorial/criando-grupo-de-categoria) criado anteriormente, do qual esse campo fará parte.
    * **Filtro**: define se a especificação será utilizada como filtro na navegação do site.
    * **Obrigatório**: define se o valor obrigatoriamente precisa ser preenchido no cadastro do produto ou não. Caso o campo seja obrigatório, o produto só poderá ser ativado após o preenchimento desta especificação.
    * **Exibe Especificação**: define se o campo é mostrado na página de detalhes do produto, na aba **Especificações**.
    * **Link no Menu Superior**: define se o link para os valores do campo é mostrado no menu principal do site.
    * **Link no Menu Lateral**: define se o link para os valores do campo é mostrado no menu lateral do site.
    * **Ativo**: insere ou remove este campo no cadastro do produto (aba **Especificações**).
7. Clique em `Salvar`. 

![product-spec-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/cadastrar-especificacoes-ou-campos-de-produto_2.gif)

#### Tipos de campo de produto

Confira a tabela a seguir para obter detalhes sobre os tipos de campo de produto que você pode selecionar na opção **Tipo**:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Tipo de campo</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Descrição</th>
  </tr>
</thead>
<tbody>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Texto</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Preenchimento do conteúdo como texto livre, indicado para textos pequenos e de formatação simples. Não é indicado para grandes estruturas de HTML.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Texto Grande</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Preenchimento do conteúdo como texto livre, indicado para grandes estruturas de HTML. Exemplo: tabelas de medidas, frequentemente utilizadas no segmento de moda.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Número</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Preenchimento do conteúdo apenas com números inteiros. Exemplo: especificar a numeração de um sapato (39, 41, 42…).</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Combo</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Conteúdo com dois ou mais valores pré-definidos, para seleção de uma opção em uma lista suspensa (dropdown). Exemplo: voltagem de um eletrodoméstico, que pode ser 110v ou 220v.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Radio</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Conteúdo com dois ou mais valores pré-definidos, para marcação de uma opção a partir de uma grade de valores. Exemplo: definição de cor dos componentes de um produto (vermelho, amarelo, azul, preto…).</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>CheckBox</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Opção que tem apenas valores equivalentes a <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">verdadeiro</span> (marcado) ou <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">falso</span> (não marcado). Exemplo: um campo chamado Outlet será marcado apenas quando o produto fizer parte da seleção da loja para outlet (queima de estoque). Se ele não fizer parte dessa seleção, o campo deve permanecer desmarcado.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Texto Indexado<br> <br>Texto Grande Indexado</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Seguem tecnicamente a mesma regra dos campos de Texto, com uma diferença: seus valores serão interpretados pelo <a href="https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256"  rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">indexador</a> do Catálogo e influenciam nos resultados de busca dos clientes na loja. Veja mais detalhes em <a href="https://help.vtex.com/pt/tutorial/como-funciona-a-busca-da-vtex/"  rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Como funciona a busca da VTEX?</a>.</td>
  </tr>
</tbody>
</table>

### Cadastrar valores para o campo de produto

Os valores dos campos de produto irão variar de acordo com o tipo do campo. Para os campos de tipo de **Texto** e **Número**, não há valores pré-definidos criados – os valores serão preenchidos livremente durante o cadastro do produto, na aba **Especificações**.

Já para os campos de tipo **Combo**, **Radio** e **CheckBox**, é necessário cadastrar valores pré-definidos para seleção durante o cadastro do produto. Confira as instruções a seguir:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Categorias**.
3. Clique na categoria em que o campo de produto está salvo.
4. Clique no botão **Ações** <i class="fas fa-angle-down"></i>.
5. Clique em **Campo (Produto)**.
6. Clique na seta para baixo <i class="fas fa-angle-down"></i>.
7. Clique em **Valores**.

    Nesta página é possível criar um **Novo valor** ou **Editar** os valores estabelecidos anteriormente.

7. Preencha o campo **Nome** com os valores que você deseja criar para aquele campo. Insira um valor por linha e tecle `Enter` entre cada valor.
8. Clique em `Salvar`.

    Os valores criados serão exibidos na aba **Especificação** no cadastro de Produto.

![product-spec-2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/cadastrar-especificacoes-ou-campos-de-produto_3.gif)

>ℹ️ Caso esteja cadastrando os primeiros valores de um campo, é necessário voltar no formulário daquele campo específico e marcar a opção **Ativo**.

#### Acessar ou editar valores cadastrados

Para acessar ou editar valores cadastrados para um campo de produto, siga os passos abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Categorias**.
3. Clique na categoria em que o campo de produto está salvo.
4. Clique no botão **Ações** <i class="fas fa-angle-down"></i>.
5. Clique em **Campo (Produto)**.
6. Clique na seta para baixo <i class="fas fa-angle-down"></i>.
7. Clique em **Valores**.

    Nesta página, você pode visualizar os valores cadastrados e escolher entre as seguintes opções:
      * **Ordernar Alfabeticamente:** organizar a lista de valores por ordem alfabética.
      * **Novo valor**: criar um novo valor.
      * **Editar**: permite alterar o texto do valor e optar por ativá-lo ou desativá-lo.
      * <i class="fas fa-angle-down"></i> > **Excluir**: excluir um valor.

### Preencher especificações de produto

Por fim, é necessário preencher as especificações de cada produto a partir dos campos e valores que você criou. Você pode fazer isso individualmente pela página de [cadastro do produto](#cadastro-do-produto) ou massivamente por [planilha](#planilha).

#### Cadastro do produto

Para preencher as especificações de cada produto de forma individual, siga as instruções abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Acesse **Todos os produtos**.
3. Na linha do produto, clique em `Alterar`.
4. Acesse a aba **Especificações**.
5. Preencha os [campos que você criou](#criar-um-campo-de-produto) com os [valores](#cadastrar-valores-para-o-campo-de-produto) desejados.

    Campos obrigatórios estarão marcados com `*`.

6. Clique em `Salvar`.

![product-spec-3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/cadastrar-especificacoes-ou-campos-de-produto_4.gif)

#### Planilha

Para preencher especificações de produtos em massa por planilha, é necessário exportar a planilha padrão VTEX, preenchê-la e importá-la na plataforma. Para fazer isso, siga as instruções abaixo:

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique em **Importação e Exportação**.
3. Clique na aba **Especificações de produto**.
4. Clique com o botão direito na categoria desejada.
5. Clique em **Export…**.

    Um retângulo verde aparecerá na tela.

6. Clique em **Clique aqui para baixar o arquivo** para exportar a planilha.
7. Abra o arquivo da planilha e preencha as linhas com os dados da especificação do produto.

    Apenas altere a coluna `ValoreEspecificaCao` da planilha com o valor a ser preenchido para o campo listado em cada linha. As demais colunas deverão permanecer inalteradas pois seus valores serão utilizados para validação dos dados.

8. No Admin VTEX, ainda em **Catálogo** > **Importação e Exportação** > **Especificações de produto**, desça a página até **Upload de Arquivo para Importação**.
9. Clique em **Select** para selecionar o arquivo com a planilha preenchida no seu computador.
10. Clique em `Importar`.

![product-spec-4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products%20and%20SKUs/cadastrar-especificacoes-ou-campos-de-produto_5.gif)

## Saiba mais
- [Cadastrar especificações ou campos de SKU](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119)
- [Especificações de produto e de SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
