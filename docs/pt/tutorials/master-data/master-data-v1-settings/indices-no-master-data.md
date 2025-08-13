---
title: 'Índices no Master Data'
id: tutorials_785
status: PUBLISHED
createdAt: 2017-04-27T21:58:03.173Z
updatedAt: 2024-07-17T13:57:12.010Z
publishedAt: 2024-07-17T13:57:12.010Z
firstPublishedAt: 2017-04-27T23:03:42.760Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slugEN: indexes-in-master-data
legacySlug: configurando-indice-no-master-data
locale: pt
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

Um índice no Master Data é uma referência a um ou mais campos, utilizada para otimização das consultas em uma entidade de dados. O uso de índices possibilita uma busca mais rápida de registros.

Para ilustrar, imagine o índice de um livro, que contém a indicação dos temas contidos no livro e a página de cada tema. Para fazer uma pesquisa, em vez de ter que passar por todas as páginas do livro para encontrar o resultado desejado, é possível acessar o índice e ir direto ao tema que deseja. Da mesma forma, o índice no Master Data fornece um método mais eficiente para encontrar documentos.

## Configurar índice

Siga o passo a passo para definir um ou mais campos como índices no Master Data:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Master Data**.
2. Clique no ícone de engrenagem <i class="fas fa-cog"></i> na aplicação em que deseja adicionar o índice.
3. Clique em **Estrutura de dados**.
4. Clique na aba **Índice**.
5. Clique em `Adicionar`.
6. Preencha os campos a seguir:
    * **Nome:** nome do índice.
    * **Valores únicos:** opção que permite bloquear novos registros com valores repetidos para o(s) índice(s) criados. Leia a seção [Restrição de valores por documento (chave alternativa)](#restricao-de-valores-por-documento-chave-alternativa) para mais detalhes.
    * **Entidade de dados:** nome da entidade de dados que contém os campos a serem configurados como índices.
    * **Campos:** nome de um ou mais campos que serão configurados como índices. Se for adicionar mais de um nome de campo, separe-os por vírgula. Exemplo: `firstName,document`.
7. Clique em `Salvar`.

## Casos de uso

Saiba mais sobre os principais cenários de uso de índices no Master Data nas seções a seguir.

### Consultas de até mil documentos

O uso de índices é recomendado para buscas com resultados de até mil documentos. Se as buscas por um índice frequentemente retornarem mais de mil documentos, você pode obter uma performance melhor na busca ao indexar o campo, isto é, [configurá-lo como um filtro na entidade de dados](https://help.vtex.com/pt/tutorial/filtrando-dados-no-master-data--tutorials_778).

### Restrição de valores por documento (chave alternativa)

A configuração de índices permite bloquear um ou mais campos para evitar registros com valores repetidos. Esses campos funcionam como chaves alternativas, ou seja, valores alternativos para identificar um registro.

A chave alternativa é configurada pelo campo **Valores Únicos** na [configuração do índice](#configurar-indice) e funciona de maneiras diferentes dependendo da quantidade de campos inseridos no índice. Confira nas seções a seguir o funcionamento em cada caso.

#### Um só campo no índice

Se houver somente um campo configurado como índice, a chave alternativa não vai permitir que um valor que já foi cadastrado nesse campo seja cadastrado novamente.

Por exemplo, a tabela **Cliente** possui duas colunas: **ID** e **Nome**. Para facilitar a busca, o campo **Nome** (`firstName`) pode ser configurado como índice e marcado como **Valores únicos**, conforme ilustrado a seguir:

![indices-1-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/master-data-v1-settings/indices-no-master-data_1.png)

Com isso, não será possível inserir um nome que já tenha sido cadastrado em __Cliente__:

![indices-2-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/master-data-v1-settings/indices-no-master-data_2.png)

No exemplo acima, como já existe um registro com o **Nome** igual a **Maria**, não é possível cadastrar outro com o mesmo valor.

> ⚠️ Use a opção **Valores Únicos** com cautela. Se um valor que você deseja permitir se repetir for configurado como único, o sistema bloqueará a inserção de registros duplicados, impedindo seu cadastro.

#### Vários campos no índice

Se houver mais de um campo no índice, a chave alternativa vai impedir que um conjunto de valores se repita nos campos selecionados.

Por exemplo, imagine que a entidade **Cliente **possui três campos: **ID**, **Nome** e **Documento**. Na configuração do índice, em **Campos**, foram inseridos Nome (`firstName`) e Documento (`document`), conforme ilustrado abaixo:

![indices-3-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/master-data-v1-settings/indices-no-master-data_3.png)

Nesse caso, o valor do **Nome** pode se repetir ou o valor do **Documento** pode se repetir. Porém, a combinação dos dois valores não pode se repetir, ou seja, não pode existir nenhum registro que repita o mesmo par (**Nome** e **Documento **iguais).

![indices-4-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/master-data-v1-settings/indices-no-master-data_4.png)

No exemplo acima, já existe um registro com o **Nome** igual a **Maria**. É possível incluir outro registro com o mesmo **Nome**, desde que o valor do **Documento** seja diferente.

> ⚠️ Se a mesma combinação de valores se repetir, o registro não será salvo. Utilize a opção **Valores únicos** somente quando não existir a possibilidade de um conjunto de valores se repetir em registros diferentes.
