---
title: 'Envio de produtos para a Casas Bahia Marketplace'
id: 5QVZFYNfuRIQKdq34MbTxz
status: PUBLISHED
createdAt: 2020-03-30T18:51:30.236Z
updatedAt: 2024-07-26T19:30:35.060Z
publishedAt: 2024-07-26T19:30:35.060Z
firstPublishedAt: 2020-03-30T23:08:05.849Z
contentType: trackArticle
productTeam: Channels
slug: envio-de-produtos-para-a-via-marketplace
locale: pt
trackId: 3E9XylGaJ2wqwISGyw4GuY
trackSlugPT: configurar-integracao-da-via-varejo
---

Após cadastrar sua loja ao conector da Casas Bahia Marketplace, será possível enviar os produtos para o catálogo da Casas Bahia Marketplace. Para enviar seus produtos, você precisará realizar o mapeamento entre as características dos produtos na sua loja VTEX e as características dos mesmos produtos na sua loja Casas Bahia Marketplace. 

Para fazer o mapeamento, você seguir os seguintes passos:

1. [Fazer download do modelo de planilha de referência da Casas Bahia Marketplace](#1-planilha-de-referencia-da-casas-bahia-marketplace)
2. [Fazer download do modelo de planilha de mapeamento](#2-planilha-de-mapeamento)
3. [Preencher a planilha de mapeamento](#3-preenchimento-da-planilha-de-mapeamento)
4. [Fazer upload da planilha de mapeamento](#4-upload-da-planilha-de-mapeamento)

## 1. Planilha de referência da Casas Bahia Marketplace

A Casas Bahia Marketplace tem valores de referência para determinados atributos de produtos que devem ser levados em consideração durante o mapeamento de produtos. 

Para conhecer os valores aceitos pela Casas Bahia Marketplace é necessário fazer download da [Planilha de Referência da Casas Bahia Marketplace.csv](https://s3.amazonaws.com/vtex-channels/viavarejointegration/categories/viavarejo-categories.csv). Essa planilha será utilizada somente para fins de consulta.

## 2. Planilha de mapeamento

Nessa etapa você precisará mapear os atributos dos produtos e enviá-los para o marketplace. O envio dessas informações é feito por meio da planilha de mapeamento, ela tem o objetivo de indicar à Casas Bahia Marketplace a correspondência entre os valores cadastrados na sua loja e os valores aceitos na Casas Bahia Marketplace.

Faça o download do arquivo da [Planilha de Mapeamento da Casas Bahia Marketplace.xlsx](https://vtex-channels.s3.amazonaws.com/viavarejointegration/categories/vvj_map.xlsx) e utilize o arquivo baixado como modelo para preenchimento. Esta é a planilha que será preenchida e enviada posteriormente para a Casas Bahia Marketplace.

## 3. Preenchimento da planilha de mapeamento

A planilha de mapeamento da Casas Bahia Marketplace Varejo contém as seguintes colunas:

| Nome da coluna | Descrição  |
| :-------:| :--------:|
| VTEX Category Id| ID da Categoria na VTEX |
| VV Category Id | ID da Categoria na Casas Bahia Marketplace  |
| Is Variation | Indica se especificação é variação (`true`) ou atributo (`false`) |
| VTEX Specification Name  | Nome do campo de especificação na VTEX |
| VV Specification Name  | Nome da variação / atributo na Casas Bahia Marketplace  |
| VTEX Specification Value | Valor do campo de especificação na VTEX |
| VV Specification Value | Nome da variação / atributo na Casas Bahia Marketplace |

Para cada produto, siga os passos a seguir: 

1. Preencha a coluna **VTEX Category Id** com o ID da Categoria na VTEX. Você consegue encontrá-lo ao lado do nome da Categoria, ao navegar pela árvore de categorias disponível em **Produtos > Catálogo > Categorias**.
2. Preencha a coluna **VV Category Id** com o ID da Categoria na Casas Bahia Marketplace. Você deve procurar a melhor correspondência possível na [Planilha de Referência da Casas Bahia Marketplace](#1-planilha-de-referencia-da-casas-bahia-marketplace).
3. Preencha a coluna **Is variation** com o valor `true`, quando se tratar da variação do produto, ou o valor `false`, quando se tratar da especificação do produto.
4. Preencha a coluna **VTEX Specification Name** com o nome das especificações do produto na VTEX.
5. Preencha a coluna **VV Specification Name** com o nome dos atributos do produto na Casas Bahia Marketplace.
6. Preencha a coluna **VTEX Specification Value** com o valor das especificações do produto na VTEX.
7. Preencha a coluna **VV Specification Value** com o valor do atributo do produto naCasas Bahia Marketplace.
8. Repita os passos acima.
9. Salve a planilha em seu computador.

>⚠️ Variações obrigatórias para uma categoria precisam ser mapeadas, caso contrário seus produtos não serão integrados. Caso o campo de especificação correspondente não exista na sua loja, ele precisará ser criado e preenchido para todos os SKUs da categoria.

### Exemplo de preenchimento

Neste exemplo, faremos o mapeamento de uma categoria de Freezer.

**VTEX:** Eletrodomésticos > Freezer > Vertical (157)
**Casas Bahia Marketplace:** Eletrodomésticos > Freezer > Freezer Vertical (3391)

Na planilha de referência da Casas Bahia Marketplace, busque por `Freezer` na coluna **Nome da categoria**, você encontrará o ID da categoria de *Freezer Vertical* na Via.

| VTEX Category Id | VV Category Id | Is Variation | VTEX Specification Name | VV Specification Name | VTEX Specification Value | VV Specification Value |
| ---- | ---- | ----| -----| ----|----|----|
| 157 | 3391 |    |    |     |     |     |

Ainda na planilha de referência da Casas Bahia Marketplace, busque pelos atributos obrigatórios da categoria `Freezer Vertical` observando a coluna **É Obrigatório**. Você encontrará o atributo `Voltagem` como atributo obrigatório. 

| VTEX Category Id | VV Category Id | Is Variation | VTEX Specification Name | VV Specification Name | VTEX Specification Value | VV Specification Value |
| ---- | ----- | ----- | ----- | ---- | ---- | ---- |
| 157| 3391 | true | Voltagem | Voltagem | 127 volts | 110V |
| 157 | 3391 | true | Voltagem | Voltagem | 220 volts | 220V |

Ainda é possível mapear atributos não obrigatórios para serem usados no enriquecimento da descrição dos seus produtos no marketplace. Neste exemplo, mapearemos os atributos `Capacidade total` e `Cor`.

As especificações `Cor` e `Capacidade total` serão mapeadas duas vezes, porque o mapeamento como variação é o que habilita a seleção de cor e capacidade total do produto na página do anúncio. Já o mapeamento como atributo é o que faz com que a cor e a capacidade total sejam listados nas características e especificações técnicas.

| VTEX Category Id | VV Category Id | Is Variation | VTEX Specification Name | VV Specification Name | VTEX Specification Value | VV Specification Value |
| ----- | ----- | ----- | -----| ---- | ----- | ----- |
| 157| 3391 | true | Voltagem | Voltagem | 127 volts | 110V |
| 157 | 3391 | true | Voltagem | Voltagem | 220 volts | 220V |
| 157| 3391 | true | Capacidade total | Capacidade (Litros)| 246l | 246L |
| 157 | 3391 | true | Capacidade total | Capacidade (Litros) | 565l | 565L |
| 157 | 3391 | true | Cor | Cor | Branco | Branco |
| 157 | 3391 | true | Cor | Cor | Branco | Branco |
| 157 | 3391 | false | Capacidade total | Capacidade (Litros)| 246l | 246L |
| 157 | 3391 | false | Capacidade total | Capacidade (Litros)| 565l | 565L |

## 4. Upload da planilha de mapeamento

Depois de preencher a planilha de mapeamento, faça o seu upload:

1. Acesse o Admin VTEX.
2. No módulo MARKETPLACE, selecione a opção **Integrações**.
3. Clique em **Configurações**.
4. Clique no ícone de engrenagem (<i class="fas fa-cog"></i>)
5. Clique em `Upload de mapeamento`.
6. Clique no botão `Escolher um arquivo`.
7. Selecione a planilha de mapeamento preenchida.
8. Clique no botão `Enviar arquivo`

Não tendo ocorrido nenhum erro com o envio, os produtos serão enviados para a Casas Bahia Marketplace com seus respectivos atributos.
