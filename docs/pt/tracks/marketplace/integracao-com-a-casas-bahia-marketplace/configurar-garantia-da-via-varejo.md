---
title: 'Configurar garantia da Casas Bahia Marketplace'
id: 3FFcVmL5Aod6tkFIz9vJmX
status: PUBLISHED
createdAt: 2020-10-01T19:13:10.864Z
updatedAt: 2024-09-13T19:24:27.750Z
publishedAt: 2024-09-13T19:24:27.750Z
firstPublishedAt: 2020-10-01T20:32:16.599Z
contentType: trackArticle
productTeam: Channels
slugEN: configure-warranty-in-via-varejo
locale: pt
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugEN: integracao-com-a-casas-bahia-marketplace
order: 8
---

O cadastro da garantia da Casas Bahia Marketplace é obrigatório para algumas [categorias do produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf) na plataforma VTEX. Estas categorias de produto são identificáveis na planilha de referência da Casas Bahia Marketplace pela presença do atributo `Garantia` na coluna **Nome do atributo**.

O cadastro da garantia é feito através de uma [especificação de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#especificacao-de-produto) com o nome específico: `viavarejogarantia`. Não é necessário incluir o atributo Garantia na planilha de mapeamento da Casas Bahia Marketplace - a especificação `viavarejogarantia` é enviada diretamente para o marketplace.

Para cadastrar a garantia, siga os passos a seguir:

1. [Criar um grupo de categoria](/pt/tutorial/criando-grupo-de-categoria--tutorials_246) na categoria principal. 
    - Dessa forma, suas subcategorias poderão herdá-lo. Orientamos que preencha com o nome `Via Marketplace`.

2. [Cadastrar uma especificação de produto](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin). 
     - Preencha os seguintes campos de acordo com suas respectivas orientações:
   * **Nome:** preencha com `viavarejogarantia`.
   * **Texto:** preencha com `Garantia Via Marketplace`.
   * **Tipo:** escolha a opção `Número`.
   * **Grupo:** sugerimos selecionar o grupo que foi criado chamado `Casas Bahia Marketplace`.
   * **Ativo:** Marque a caixinha.

Com a especificação `viavarejogarantia` disponível para todos os produtos da categoria selecionada, será possível [vincular valores a essa especificação](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin#vincular-as-especificacoes-a-um-produto). Esse valor será o tempo de garantia em meses que serão oferecidos na Casas Bahia Marketplace, digite um valor numérico entre 1 e 60.

Feito isso, a garantia estará configurada em seus produtos e eles estarão disponíveis para venda no marketplace.
