---
title: 'Mapeamento de categorias e atributos da Centauro'
id: 5Lc42XVVABaidvEjm4Ki9
status: PUBLISHED
createdAt: 2020-10-20T19:20:09.544Z
updatedAt: 2025-01-06T15:53:22.872Z
publishedAt: 2025-01-06T15:53:22.872Z
firstPublishedAt: 2020-10-20T19:53:25.808Z
contentType: trackArticle
productTeam: Channels
slugEN: mapping-centauro-categories-variations-and-attributes
locale: pt
trackId: D8Qnjbr5lfLkUfMRhsfbj
trackSlugEN: mapeamento-de-categorias-e-atributos-da-centauro
---

Depois de fazer as configurações iniciais para a Integração com a Centauro, vamos categorizar e enviar as variações e atributos de produto para o marketplace. O envio dessas informações é feito por meio do **upload da planilha de mapeamento**, que faz a correspondência entre as categorias, variações e atributos da sua loja e os padrões adotados pela Centauro.

Esta funcionalidade agiliza o processo de catalogação dos seus produtos na Centauro, permitindo que estes fiquem disponíveis para venda nos marketplaces em menos tempo.

<div class="alert alert-info">
Esta integração não suporta SKUs do tipo <b>kit.</b> Caso sejam enviados SKUs deste tipo, o mesmo não será integrado ao marketplace Centauro.
</div>

## Entendendo a planilha de mapeamento

Em primeiro lugar, faça download da [Planilha de Mapeamento da Centauro](//assets.ctfassets.net/alneenqid6w5/4Noj0QVEUM1rTcVI79I7DD/cfe7580fb53a899b93c4739509cd1502/planilhademapeamento_centauro.xlsx) no formato `.xlsx`. Após preenchê-la conforme a [Planilha de referência Centauro](//assets.ctfassets.net/alneenqid6w5/5ANncY3Q0KZuVVcIxmGhOx/fbaea2fb4409c9de0981ba404eb3a5eb/Varia__es_Centauro__1_.xlsx), basta fazer o upload do mapeamento para a VTEX.

O objetivo da planilha de mapeamento é indicar para a integração a correspondência entre os padrões adotados pela sua loja e pelo marketplace. A Planilha de Referência da Centauro contém a listagem de todas as combinações de categorias e variações/atributos aceitas pela Centauro. Nas seções a seguir, indicamos como fazer esta correspondência.

O mapeamento só precisa ser feito uma vez para cada categoria. Novos produtos criados dentro de categorias previamente mapeadas serão integrados corretamente, com suas respectivas.

<div class="alert alert-info">
A planilha de mapeamento é case sensitive, ou seja, é sensível para o uso de letras maiúsculas e minúsculas.
</div>

## Categorização

A primeira etapa de preenchimento da planilha de mapeamento começa na primeira coluna chamada ID Categoria que possui a finalidade de fazer a correspondência entre as categorias da sua loja e as categorias da Centauro:

- **ID Categoria**: é o ID da categoria na VTEX. 

Para descobrir a ID Categoria do produto na sua loja, acesse no admin *Produtos > Catálogo > Categorias*.

## Atributos

A segunda etapa de preenchimento da planilha de mapeamento é fazer a correspondência entre as especificações de SKU da sua loja chamados de atributos no marketplace. Os atributos deverão ser preenchidos na planilha exatamente do modo como estão preenchidos na VTEX, incluindo letras maiúsculas e minúsculas.

| Campo | Definição  | Exemplo |
| ---------- | ---------- | ---------- |
| Loja Atributo Nome | É o nome do [campo de SKU](https://help.vtex.com/pt/tutorial/criando-campo-de-sku) usado na sua loja na VTEX. | Tamanho, Cor |
| Centauro Atributo | É o nome da especificação, mapeado na Centauro, que corresponde ao campo de SKU que você usou no campo `Loja Atributo Nome`. | Se você usou `Cores` na coluna `Loja Atributo Nome`, então o nome correspondente na Centauro seria `COR`. |
| Loja Atributo Valor | Nome do valor usado no campo de SKU na VTEX. | Para uma especificação de "Cor", os valores desse campo seriam as próprias cores usadas na loja, como "Vermelho", "Preto", "Branco" etc. |
| Centauro Atributo Valor | Essa coluna você deve preencher valores aceitos pela Centauro, correspondentes aos valores usados no campo `Loja Atributo Valor`. Na Planilha de Variações da Centauro, busque pelos valores aceitos para cada especificação que você preencheu na coluna `Loja Atributo Valor`. | Se você preencheu o `Loja Atributo Nome` com Cores e o `Loja Atributo Valor` com "Preto", verá que o valor aceito pela Centauro é "02”. |
