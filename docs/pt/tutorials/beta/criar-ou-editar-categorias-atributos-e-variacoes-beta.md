---
title: 'Criar ou editar categorias, atributos e variações (Beta)'
id: 1lzs3fHjM9N7CKFOxCCYQi
status: PUBLISHED
createdAt: 2025-07-09T19:53:44.834Z
updatedAt: 2025-07-14T20:16:34.071Z
publishedAt: 2025-07-14T20:16:34.071Z
firstPublishedAt: 2025-07-14T18:56:57.453Z
contentType: tutorial
productTeam: Management
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: creating-or-editing-categories-attributes-and-variations-beta
legacySlug: criar-ou-editar-categorias-atributos-e-variacoes-beta
locale: pt
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://supporticket.vtex.com/support).

No Admin VTEX, em **Catálogo > Categorias**, você encontra a página de gerenciamento da árvore de categorias da sua loja. Este artigo orienta sobre como criar e configurar suas categorias, [atributos e variações](#terminologia), e está dividido nas seguintes seções:

* [Terminologia](#terminologia)
* [Apresentação da interface de categorias, atributos e variações](#apresentacao-da-interface-de-categorias-atributos-e-variacoes)
* [Ações em categorias](#acoes-em-categorias)
    * [Adicionar categoria](#adicionar-categoria)
    * [Editar categoria](#editar-categoria)
    * [Buscar categoria por nome](#buscar-categoria-por-nome)
    * [Esconder categorias](#esconder-categorias)
* [Ações em grupos de atributos ou variações](#acoes-em-grupos-de-atributos-ou-variacoes)
    * [Adicionar grupo](#adicionar-grupo)
    * [Editar grupo](#editar-grupo)
    * [Identificar grupos e atributos herdados](#identificar-grupos-e-atributos-herdados)
* [Ações em atributos](#acoes-em-atributos)
    * [Adicionar atributo](#adicionar-atributo)
    * [Editar atributo](#editar-atributo)
    * [Ver status de ativação do atributo e seus valores](#ver-status-de-ativacao-do-atributo-e-seus-valores)
    * [Esconder atributos inativos](#esconder-atributos-inativos)
* [Ações em variações](#acoes-em-variacoes)
    * [Adicionar variação](#adicionar-variacao)
    * [Editar variação](#editar-variacao)
    * [Ver status de ativação da variação e seus valores](#ver-status-de-ativacao-da-variacao-e-seus-valores)
    * [Esconder variações inativas](#esconder-variacoes-inativas)

> ❗ Após criar uma categoria, atributo ou variação, eles não podem ser deletados, apenas editados, desativados ou ocultados na interface.

## Terminologia 

Na fase beta, utilizaremos uma nova nomenclatura para os seguintes termos:

| **Nome atual** | **Nome no beta** |
| :---: | :---: |
| [Especificações de produto](/pt/docs/tracks/especificacoes-definicao-de-conceito#especificacao-de-produto) | Atributos |
| [Especificações de SKU](/pt/docs/tracks/especificacoes-definicao-de-conceito#especificacao-de-sku) | Variações |
| [Grupos (de especificações de produtos ou de SKUs)](/pt/docs/tutorials/criando-grupo-de-especificacoes-em-uma-categoria) | Grupos (de atributos ou de variações) |

## Apresentação da interface de categorias, atributos e variações

No Admin VTEX, ao acessar **Catálogo > Categorias**, por padrão, você visualiza a interface de **Categorias** e **Atributos**, conforme a imagem abaixo:

![category_attributes_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/criar-ou-editar-categorias-atributos-e-variacoes-beta_1.png)

Nesta página, você pode visualizar informações e realizar as seguintes ações:

* **A - Buscar categoria:** após [adicionar categorias](#adicionar-categoria), é possível [usar a barra de busca](#buscar-categoria-por-nome) para pesquisar por nome a opção desejada.
* **B / C - Criar categoria:** existem duas formas de [adicionar uma nova categoria](#adicionar-categoria), clicando no ícone + ao lado da barra de busca, ou posicionando o mouse em **Todos os produtos** e clicando no ícone + que será exibido.
* **D - Ocultar categorias:** ao clicar no ícone no topo da página ao lado do nome da categoria da página, você [oculta a lista de categorias](#esconder-categoria).
* **E - Criar subcategoria:** ao posicionar o mouse sobre o nome de uma categoria, surge o ícone `+`, que permite criar uma categoria aninhada, ou seja, uma subcategoria.
* **F - Editar categoria:** ao posicionar o mouse sobre o nome de uma categoria, surge o menu três pontos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>, que possibilita [editar a categoria](#editar-categoria).
* **G - Atributo herdado:** a presença do ícone de compartilhamento ao lado de um atributo [significa que ele foi herdado](#identificar-grupos-e-atributos-herdados) como uma configuração da categoria aplicada a **Todos os produtos**. As subcategorias têm todos os atributos que são configuradas na categoria pai, ou seja, elas “herdam” essas configurações.
* **H - Status do atributo:** o [atributo pode ter status ativo](#ver-status-de-ativacao-do-atributo-e-seus-valores) e ter um círculo verde, significando que ele foi ativado e pode refletir na frente de loja, ou status inativo, que corresponde a um círculo branco.
* **I - Tipo do atributo:** o ícone ao lado do nome do atributo representa o tipo desse atributo, que pode ser "Texto livre", "Texto longo", "Seleção única" ou "Seleção múltipla". 
* **J - Editar atributo:** após adicionar um atributo, você pode [editá-lo](#editar-atributo), clicando no ícone lápis <i class="fas fa-pencil-alt" aria-hidden="true"></i> na linha do atributo desejado.
* **K - Adicionar atributo:** clicando no ícone + no nome do grupo de atributos, você pode [adicionar um atributo](#adicionar-atributo). 
* **L - Esconder atributos inativos:** [atributos inativos podem ser ocultados](#esconder-atributos-inativos) na interface, clicando no ícone olho <i class="fas fa-eye" aria-hidden="true"></i>. 
* **M - Adicionar grupo de atributos:** clicando no ícone + no topo direito da página, é possível [criar um grupo de atributos](#adicionar-grupo).
* **N - Editar categoria:** clicando no menu três pontos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> no topo direito da página, você pode [editar a categoria](#editar-categoria) selecionada.
* **O - Selecionar opção:** ao acessar a página **Categorias**, você pode escolher entre visualizar seus `Atributos` (relacionados a produtos) ou as suas `Variações` (relacionadas a SKUs).

Quando você seleciona a opção **Variações**, você visualiza uma interface como a imagem abaixo:

![category_variations_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/criar-ou-editar-categorias-atributos-e-variacoes-beta_2.png)

Nesta página, você pode visualizar informações e realizar as seguintes ações:

* **P - Status da variação:** a [variação pode ter status ativo](#ver-status-de-ativacao-da-variacao-e-seus-valores) e ter um círculo verde, significando que ela foi ativada para aparecer na frente de loja, ou status inativo, que corresponde a um círculo branco.
* **Q - Tipo da variação:** o ícone ao lado do nome do atributo representa o tipo da variação, que pode ser “Single Selection” ou “Multi Selection”.
* **R - Adicionar variação:** clicando no ícone + no nome do grupo, você pode [adicionar uma variação](#adicionar-variacao) a esse grupo. 
* **S - Esconder variações inativas:** [variações inativas podem ser ocultadas](#esconder-variacoes-inativas) na interface, clicando no ícone olho <i class="fas fa-eye" aria-hidden="true"></i>. 
* **T - Adicionar grupo de variações:** clicando no ícone + no topo direito da página, é possível [criar um grupo de variações](#adicionar-grupo).
* **U - Editar categoria:** clicando no menu três pontos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> no topo direito da página, você pode [editar a categoria](#editar-categoria) selecionada.
* **V - Editar variação:** após adicionar uma variação, você pode [editá-la](#editar-variacao), clicando no ícone lápis <i class="fas fa-pencil-alt" aria-hidden="true"></i> na linha correspondente à variação desejada.

## Ações em categorias

No Admin VTEX, acesse **Catálogo > Categorias**, ou digite **Categorias** na barra de busca no topo da página. A interface de edição de categorias é sempre apresentada à esquerda, seja a opção selecionada `Atributos` ou `Variações`. 

As ações possíveis com relação a categorias são:

* [Adicionar categoria](#adicionar-categoria)
* [Editar categoria](#editar-categoria)
* [Buscar categoria por nome](#buscar-categoria-por-nome)
* [Esconder categorias](#esconder-categorias)

> ⚠️ Quando uma categoria é adicionada, ela não pode ser removida, apenas [editada](#editar-categoria) ou desativada.

### Adicionar categoria

Para criar uma categoria, siga os passos abaixo:

> ❗ Uma vez que uma categoria seja criada como categoria pai, ela não pode ser editada como subcategoria. A mesma regra é aplicada para subcategorias, que não podem se tornar categorias ou mudar sua vinculação de categoria pai.

1. No canto esquerdo da página, ao lado da barra de busca, clique no ícone +, ou posicione o mouse em **Todos os produtos** e clique no + que aparece. Também é possível clicar no ícone + ao lado do nome de uma categoria.
2. No modal que surge, preencha o nome da categoria. Este é o único campo obrigatório.

  > ⚠️ O nome da categoria é importante para [SEO](/pt/docs/tutorials/melhorando-o-seo-das-paginas-de-lista-de-produtos) (Search Engine Optimization), por isso recomendamos:<ul><li>Usar palavras simples.</li><li>Evitar outros idiomas.</li><li>Evitar escrita complexa.</li><li>Utilizar até 150 caracteres.</li></ul>

3. Se deseja ativar na loja a categoria sendo criada, marque a caixa de seleção **Ativo.** Para mantê-la desativada, deixe a opção desmarcada.
4. Na seção **Informações básicas**, você pode preencher os seguintes campos:
    * **Categoria pai:** caso a categoria sendo criada seja uma subcategoria, ou seja, que esteja aninhada à outra categoria, preencha com o código numérico da categoria principal à qual ela pertence.
    * **Categoria global VTEX:** a [categoria global](/pt/docs/tutorials/configurando-a-categoria-global) é uma taxonomia criada pelo Google para o [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=pt-BR), pré-definida como uma árvore única na plataforma VTEX.
5. Na seção **Frente de loja e SEO**, você pode preencher os seguintes campos:
    * **Palavras similares:** sinônimos dos nomes da categoria. Este campo é importante para que as buscas sejam mais abrangentes. Você pode incluir diversas palavras, que devem ser separadas por vírgula, até o limite de 200 caracteres.
    * **Título da página:** texto que aparece na aba do navegador e corresponde ao título da página da categoria no site. Este campo é especialmente importante para SEO, não admite o uso de tags HTML e deve conter até 150 caracteres.
    * **Descrição:** breve resumo da categoria. Recomendamos usar até 200 caracteres, para que os mecanismos de busca apresentem corretamente a descrição nas páginas de resultados. O campo suporta apenas texto simples e não permite o uso de tags HTML.
    * **Prioridade na busca da loja:** números inteiros utilizados para definir a prioridade da categoria nos resultados de buscas no site. O valor mais alto significa a prioridade mais alta nos resultados, e o valor 0 ou o campo deixado em branco significam nenhuma prioridade. Saiba mais no artigo [Como funciona o campo score](/pt/docs/tutorials/como-funciona-o-campo-score).
6. Na seção **Frente de loja**, se desejar, você pode marcar as seguintes opções:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Mostrar no menu:** torna a categoria ou departamento visível no menu superior e no menu lateral da loja.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Menu com link ativo:** determina se a categoria visível na loja é do tipo clicável, que redireciona para uma página da categoria.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Filtro de marca:** define se a página da categoria ou departamento deve apresentar a opção filtrar por [marcas](/pt/docs/tracks/marcas-definicao-de-conceito).
7. Em **Modo de exibição dos produtos**, você determina como os SKUs dos produtos da categoria serão apresentados na vitrine da loja, sendo que existem as seguintes opções:
    * **Lista de SKUs:** itens organizados no formato de lista. Esta é a escolha padrão, caso você não selecione outra.
    * **Caixas de seleção (combo box):** itens selecionados a partir de caixas de seleção.
    * **Ícones com seleção radio:** itens selecionados a partir de uma lista na qual é possível selecionar um único item por vez.
    * **Segue a definição da variação:** a apresentação do produto é ditada pela configuração a nível de SKU, ou seja, definido pela variação.
8. Clique em `Criar`.

Feito isso, aparecerá a mensagem de confirmação _"Categoria criada"_.

### Editar categoria

Para alterar uma categoria, siga os passos abaixo:

1. Posicione o mouse sobre a categoria desejada e clique no menu três pontos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
2. Clique em <i class="fas fa-pencil-alt" aria-hidden="true"></i> **Editar categoria**.
3. Altere os dados desejados. 

  > ❗ As configurações que não podem ser editadas são:<ul><li>Nível de hierarquia da categoria, se é uma categoria pai ou subcategoria.</li><li>Relação de vinculação entre categorias e subcategorias.</li></ul>

4. Clique em `Atualizar`.

Feito isso, aparecerá a mensagem de confirmação _"Categoria atualizada"_.

### Buscar categoria por nome

Depois de criar suas categorias, você pode localizá-las usando a barra de busca sinalizada pelo ícone lupa <i class="fas fa-search" aria-hidden="true"></i>. A busca considera somente o nome das categorias e subcategorias.

> ℹ️ Você pode utilizar um atalho para essa pesquisa. Clicando no caractere `/`, o seu cursor é movido para o campo de busca para digitar o nome da categoria desejada.

### Esconder categorias

Na página de **Categorias**, é possível ocultar a visualização da lista de categorias. Para isso, no topo da página, clique no ícone ao lado do nome da categoria. Para voltar a exibir a lista de categorias, clique novamente no mesmo ícone.

## Ações em grupos de atributos ou variações

Em **Catálogo**, um grupo é um conjunto de atributos ou variações relacionados entre si. Para gerenciar seus grupos, acesse **Catálogo > Categorias**, na opção `Atributos` ou `Variações`. As ações possíveis para grupos são:

* [Adicionar grupo](#adicionar-grupo)
* [Editar grupo](#editar-grupo)
* [Identificar grupos e atributos herdados](#identificar-grupos-e-atributos-herdados)

Todo grupo criado na página **Atributos** é refletido na página de **Variações**, e vice-versa. No entanto, cada grupo apresenta somente os atributos ou variações nele configurados, e eles são visualizados de acordo com a página selecionada. 

### Adicionar grupo

Para criar um grupo, siga os passos abaixo:

1. No topo da página **Atributos** ou **Variações**, clique no ícone +.
2. Digite o nome do grupo, até o limite de 100 caracteres.
3. Clique fora da área de escrita para ver a opção de salvar.
4. Clique em `Salvar`.

Feito isso, aparecerá a mensagem de confirmação “*Grupo da categoria salva com sucesso*”. O grupo adicionado será automaticamente listado em ordem alfabética.

> ℹ️ Para saber como incluir atributos a um grupo, veja a seção [Adicionar atributo](#adicionar-atributo), e para descobrir como incluir variações em um grupo, acesse [Adicionar variação](#adicionar-variacao).

### Editar grupo

É possível editar um grupo alterando seu nome, [incluindo atributos](#adicionar-atributo) ou [incluindo variações](#adicionar-variacao), como será visto nas próximas seções. 

Para renomear o grupo, siga os passos abaixo:

1. Na página **Atributos** ou **Variações**, dê um duplo clique sobre o nome do grupo desejado.
2. Altere o nome.
3. Clique fora da área de escrita para ver a opção de salvar.
4. Clique em `Salvar`.

Feito isso, aparecerá a mensagem de confirmação _"Grupo da categoria salvo com sucesso"_.

### Identificar grupos e atributos herdados

Quando um grupo de atributos é criado na categoria pai, ele se torna obrigatório para todas as subcategorias, por isso dizemos que ele é "herdado". 

Na interface de **Atributos**, é possível identificar grupos e atributos herdados a partir do ícone de compartilhamento, localizado à esquerda do nome, como na imagem abaixo:

![inherited_atribute_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/criar-ou-editar-categorias-atributos-e-variacoes-beta_3.png)

> ℹ️ Caso queira saber sobre status de atributos, confira a seção [Ver status de ativação do atributo e seus valores](#ver-status-de-ativacao-da-variacao-e-seus-valores).

## Ações em atributos

Na fase Beta, *atributos* é a terminologia para o que era chamado de [especificações de produto](/pt/docs/tracks/especificacoes-definicao-de-conceito#especificacao-de-produto), ou seja, as propriedades informativas que podem ser cadastradas em produtos. Em **Catálogo > Categorias**, a página **Atributos** permite realizar as seguintes ações:

* [Adicionar atributo](#adicionar-atributo)
* [Editar atributo](#editar-atributo)
* [Ver status de ativação do atributo e seus valores](#ver-status-de-ativacao-do-atributo-e-seus-valores)
* [Esconder atributos inativos](#esconder-atributos-inativos)

Para conferir sua interface, veja a seção [Apresentação da interface de categorias, atributos e variações](#apresentacao-da-interface-de-categorias-atributos-e-variacoes).

### Adicionar atributo

Para cadastrar um atributo, siga os passos abaixo:

> ❗ Uma vez que um atributo seja adicionado a um grupo, ele não pode ser removido, apenas editado, desativado ou ocultado na interface. O tipo do atributo não pode ser editado.

1. Na página **Atributos**, após ter [adicionado um grupo](#adicionar-grupo), clique no sinal + ao lado do nome do grupo desejado, ou clique na seta para baixo ao lado do nome do grupo e, em seguida, clique em `Cadastrar primeiro atributo`.
2. Clique sobre o tipo do atributo desejado, que pode ser:
    - **Texto livre:** digitação livre de caracteres, tipo indicado para textos pequenos. O campo não admite o uso de tags HTML. Exemplo: descrição de ingredientes.
    - **Texto longo:** digitação livre de caracteres, tipo indicado para textos grandes. O campo não admite o uso de tags HTML. Exemplo: tabelas de medidas de lojas de moda.
    - **Seleção única:** existem dois ou mais valores pré-definidos, mas é possível selecionar uma única opção. Exemplo: a numeração de um sapato, utilizando valores como 34, 35, 36, etc.
    - **Seleção múltipla:** existem pelo menos dois valores pré-definidos e é possível selecionar mais de uma opção. Exemplo: gênero ao qual um produto se destina, que pode ser uma combinação de Masculino, Feminino e Unissex.
3. No modal aberto, preencha o campo título com o nome do atributo. Este é o único campo obrigatório.
4. Se deseja ativar o atributo sendo criado, marque a caixa de seleção **Ativo**. Para mantê-lo desativado, deixe a opção desmarcada.
5. Em **Configurações**, preencha os seguintes campos:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Obrigatório:** para tornar obrigatório o preenchimento deste atributo, marque a caixa de seleção. Para manter opcional, deixe a opção desmarcada. Caso o atributo seja obrigatório, o produto só poderá ser ativado após o seu preenchimento.
    * **Valor padrão:** valor de preenchimento comum para o atributo. Exemplo: em uma loja de camisetas, para o atributo "Material" o valor padrão seria "Algodão", que é o tipo mais utilizado. 
    * **Descrição:** descrição do significado do atributo e seus valores.
6. Em **Frente de loja**, todos os campos se referem à experiência de compra dos clientes, e você pode escolher selecionar ou não as seguintes opções:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Exibir especificação:** determina se o atributo aparece na frente de loja.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Usar como filtro:** define se o atributo pode ser utilizado como filtro na busca de produtos.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link no menu superior:** define se o atributo aparece como um link clicável na menu superior do site.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link no menu lateral:** define se o atributo aparece como um link clicável no menu lateral do site.
7. Clique em `Criar`.

Feito isso, aparecerá a mensagem de confirmação _"Atributo criado"_.

### Editar atributo

Para editar um atributo, siga os passos abaixo:

1. Na página **Atributos**, posicione o mouse sobre o nome do atributo que você deseja editar e clique no <i class="fas fa-pencil-alt" aria-hidden="true"></i> ícone lápis que será exibido.
2. No modal aberto, altere as configurações do atributo conforme desejado. Caso queira informações sobre **Configurações** ou **Frente de loja**, consulte a seção [Adicionar atributo](#adicionar-atributo).

  > ⚠️ O tipo do atributo é a única configuração que não pode ser alterada.

3. (Opcional). Este passo não é aplicável aos tipos de atributos **Texto livre** e **Texto longo**. No entanto, para o **Seleção única** e o **Seleção múltipla**, existe a seção **Valores**, na qual você determina os valores exatos para o atributo.
    - 3.1 Para criar um valor, clique no ícone +, ou clique na seta para baixo ao lado de **Valores** e selecione `Cadastrar primeiro valor`.
    - 3.2 Digite o texto do valor e, em seguida, clique em algum ponto na tela fora da linha do valor.
    - 3.3 O valor é criado como ativo, o que é identificado pelo ícone verde ao lado do nome. Para desativá-lo, deixe a caixa de seleção **Ativar** desmarcada.
    - 3.4 Os valores são listados pela ordem de criação. Para alterar a posição de um valor na lista, clique no ícone à esquerda do nome do valor do atributo e arraste-o para a posição desejada.

4. Clique em `Atualizar`.

Feito isso, aparecerá a mensagem de confirmação _"Atributo atualizado"_.

### Ver status de ativação do atributo e seus valores

Com relação a sua ativação, o atributo e o seus valores podem ter dois status, conforme apresentado na tabela abaixo:

| **Status** | **Atributo** | **Valor do atributo** | **Cor do ícone** |
| :---: | :--- | :--- | :---: |
| Ativo | O atributo pode ser refletido na frente de loja, apresentando somente os valores ativados. | O valor do atributo pode ser refletido na frente de loja, desde que o atributo em si esteja ativado. | 🟢 Verde |
| Inativo | O atributo não é refletido na frente de loja, independente do status dos valores. | O valor do atributo não é refletido na frente de loja, independente do atributo estar ativo ou não. | ⚪ Branco |

Para ativar ou desativar um atributo ou seus valores, veja a seção [Editar atributo](#editar-atributo).

> ℹ️ Caso queira informações sobre o ícone que pode aparecer ao lado do status do atributo, confira a seção [Identificar grupos e atributos herdados](#identificar-grupos-e-atributos-herdados).

### Esconder atributos inativos

Um atributo criado não pode ser excluído do seu catálogo, mas você pode ocultar sua visualização na interface após [desativá-lo](#ver-status-de-ativacao-do-atributo-e-seus-valores). 

Para isso, no topo direito da página **Atributos**, clique no ícone olho <i class="fas fa-eye" aria-hidden="true"></i> para **Esconder atributos inativos**. Para voltar a exibir os atributos inativos, clique novamente no mesmo ícone.

## Ações em variações

Na fase Beta, *variações* é a terminologia para o que era chamado de [especificações de SKU](/pt/docs/tracks/especificacoes-definicao-de-conceito#especificacao-de-sku), ou seja, as opções de SKUs nas quais os produtos podem ser comprados. Em **Catálogo > Categorias**, a página **Variações** permite realizar as seguintes ações:

* [Adicionar variação](#adicionar-variacao)
* [Editar variação](#editar-variacao)
* [Ver status de ativação da variação e seus valores](#ver-status-de-ativacao-da-variacao-e-seus-valores)
* [Esconder variações inativas](#esconder-variacoes-inativas)

Para conferir sua interface, veja a seção [Apresentação da interface de categorias, atributos e variações](#apresentacao-da-interface-de-categorias-atributos-e-variacoes).

### Adicionar variação

Para criar uma variação, siga os passos abaixo:

> ❗ Uma vez que uma variação seja adicionada a um grupo, ela não pode ser removida, apenas editada, desativada ou ocultada na interface. O tipo da variação não pode ser editado.

1. Na página **Variações**, após ter [adicionado um grupo](#adicionar-grupo), clique no sinal + ao lado do nome do grupo desejado, ou clique na seta para baixo ao lado do nome do grupo e, em seguida, clique em `Criar primeira variação`.
2. Clique sobre o tipo de variação desejada, que pode ser:
    - **Seleção única:** existem dois ou mais valores pré-definidos, mas o cliente pode escolher somente uma opção. Exemplo: voltagem do eletrodoméstico de 110v ou 220v.
    - **Seleção múltipla:** existem dois ou mais valores pré-definidos e o cliente pode escolher mais de uma opção. Exemplo: definição das cores de um produto (vermelho, amarelo, azul e/ou preto).
3. No modal aberto, preencha o campo título com o nome da variação. Este é o único campo obrigatório.
4. Se deseja ativar a variação sendo criada, marque a caixa de seleção **Ativo**. Para mantê-la desativada, deixe a opção desmarcada.
5. Em **Configurações**, preencha os seguintes campos:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Obrigatório:** para tornar obrigatório o preenchimento desta variação, marque a caixa de seleção. Para manter opcional, deixe a opção desmarcada. Caso a variação seja obrigatória, o SKU só poderá ser ativado após o seu preenchimento.
    * **Valor padrão:** valor de preenchimento para o tipo de padrão escolhido.
    * **Descrição:** descrição do significado da variação e seus valores.
6. Em **Frente de loja**, todos os campos se referem à experiência de compra dos clientes, e você pode escolher selecionar ou não as seguintes opções:
    * <a class="far fa-check-square" aria-hidden="true"></a> **Exibir especificação:** determina se a variação aparece na frente de loja.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Usar como filtro:** define se a variação pode ser utilizada como filtro na busca de produtos.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link no menu superior:** define se a variação aparece como um link clicável na menu superior do site.
    * <a class="far fa-check-square" aria-hidden="true"></a> **Link no menu lateral:** define se a variação aparece como um link clicável no menu lateral do site.
7. Clique em `Criar`.

Feito isso, aparecerá a mensagem de confirmação _"Variação criada com sucesso"_.

### Editar variação

Para editar uma variação, siga os passos abaixo:

1. Na página **Variações**, posicione o mouse sobre o nome da variação que deseja editar e clique no <i class="fas fa-pencil-alt" aria-hidden="true"></i> ícone lápis que será exibido.
2. No modal aberto, altere as configurações da variação conforme desejado. Caso queira informações sobre **Configurações** ou **Frente de loja**, consulte a seção [Adicionar variação](#adicionar-variacao).

  > ⚠️ O tipo de variação é a única configuração que não pode ser alterada.

3. Na edição, existe a seção **Valores**, na qual você determina os valores pré-definidos para a variação. 
    - 3.1 Para criar um valor, clique no ícone +, ou clique na seta para baixo ao lado de **Valores** e selecione `Cadastrar primeiro valor`.
    - 3.2 Digite o texto do valor e, em seguida, clique em algum ponto na tela fora da linha do valor.
    - 3.3 O valor é criado como ativo, o que é identificado pelo ícone verde ao lado do nome. Para desativá-lo, deixe a caixa de seleção  **Ativar** desmarcada.
    - 3.4 Os valores são listados pela ordem de criação e isso se reflete na frente de loja. Para alterar a posição de um valor na lista, clique no ícone à esquerda do nome e arraste o valor para a posição desejada.

4. Clique em `Atualizar`.

Feito isso, aparecerá a mensagem de confirmação _"Variação atualizada"_.

### Ver status de ativação da variação e seus valores

Com relação a sua ativação, a variação e o valor da variação podem ter dois status, conforme apresentado na tabela abaixo:

| **Status** | **Variação** | **Valor da variação** | **Cor do ícone** |
| :---: | :--- | :--- | :---: |
| Ativo | A variação está é refletida na frente de loja e apresenta somente os valores ativados. | O valor da variação pode ser refletido na frente de loja, desde que a variação em si esteja ativada. | 🟢 Verde |
| Inativo | A variação não é refletida na frente de loja, independente do status dos valores. | O valor da variação não é refletido na frente de loja, independente da variação estar ativa ou não. | ⚪ Branco |

> ℹ️ Para ativar ou desativar uma variação ou seus valores, veja a seção [Editar variação](#editar-variacao).

### Esconder variações inativas

Uma variação criada não pode ser excluída do seu catálogo, mas você pode ocultar sua visualização na interface após [desativá-la](#ver-status-de-ativacao-da-variacao-e-seus-valores). 

Para isso, no topo direito da página **Variações**, clique no ícone olho <i class="fas fa-eye" aria-hidden="true"></i> para **Esconder variações inativas**. Para voltar a exibi-las, clique novamente no mesmo ícone.

