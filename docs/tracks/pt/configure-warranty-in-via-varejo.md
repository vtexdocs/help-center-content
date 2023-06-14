---
title: 'Configurar garantia da Via Varejo'
id: 3FFcVmL5Aod6tkFIz9vJmX
status: PUBLISHED
createdAt: 2020-10-01T19:13:10.864Z
updatedAt: 2022-01-24T20:11:25.306Z
publishedAt: 2022-01-24T20:11:25.306Z
firstPublishedAt: 2020-10-01T20:32:16.599Z
contentType: trackArticle
productTeam: Channels
slug: configurar-garantia-da-via-varejo
locale: pt
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugPT: configurar-garantia-da-via-varejo
---

O cadastro da garantia da Via é obrigatório para algumas [categorias do produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf) na plataforma VTEX. Estas categorias de produto são identificáveis na planilha de referência da Via pela presença do atributo `Garantia` na coluna **Nome do atributo**.

O cadastro da garantia é feito através de uma [especificação de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-produto) com o nome específico: `viavarejogarantia`. Não é necessário incluir o atributo Garantia na planilha de mapeamento da Via - a especificação `viavarejogarantia` é enviada diretamente para o marketplace.

Para cadastrar a garantia, siga os passos a seguir:

1. [Criar um grupo de categoria](https://help.vtex.com/pt/tutorial/criando-grupo-de-categoria--tutorials_246) na categoria principal. 
    - Dessa forma, suas subcategorias poderão herdá-lo. Orientamos que preencha com o nome `Via Marketplace`.

2. [Cadastrar uma especificação de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin). 
     - Preencha os seguintes campos de acordo com suas respectivas orientações:
   * **Nome:** preencha com `viavarejogarantia`.
   * **Texto:** preencha com `Garantia Via Marketplace`.
   * **Tipo:** escolha a opção `Número`.
   * **Grupo:** sugerimos selecionar o grupo que foi criado chamado `Via Marketplace`.
   * **Ativo:** Marque a caixinha.

Com a especificação `viavarejogarantia` disponível para todos os produtos da categoria selecionada, será possível [vincular valores a essa especificação](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin#vincular-as-especificacoes-a-um-produto). Esse valor será o tempo de garantia em meses que serão oferecidos na Via Marketplace, digite um valor numérico entre 1 e 60.

Feito isso, a garantia estará configurada em seus produtos e eles estarão disponíveis para venda no marketplace.
