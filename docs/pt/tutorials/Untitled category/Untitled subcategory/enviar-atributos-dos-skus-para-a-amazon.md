---
title: 'Enviar atributos dos SKUs para a Amazon'
id: 3KTNjHRtVmWWe02my8suEo
status: ARCHIVED
createdAt: 2018-06-21T17:09:05.337Z
updatedAt: 2020-05-25T18:47:37.861Z
publishedAt: 
firstPublishedAt: 2018-06-21T19:25:22.139Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slugEN: sending-sku-attributes-to-amazon
locale: pt
legacySlug: enviar-atributos-dos-skus-para-a-amazon
subcategoryId: unknown-subcategory
---

Feitas as configurações iniciais para a [integração com a Amazon](/pt/tutorial/integrar-com-a-amazon), agora vamos enviar os dados dos atributos dos SKUs para o marketplace. O envio destas informações será feito por __upload da planilha de mapeamento__.

O mapeamento só será feito uma vez para cada categoria. Desta forma, mesmo já tendo feito um mapeamento, quando novos produtos forem criados, eles serão integrados diretamente. Será feito um __de/para__ dos atributos cadastrados na VTEX com os atributos aceitos pela Amazon.

1. Crie uma __planilha de upload__ no formato `.xlsx` e preencha o título das colunas conforme a imagem abaixo.![Modelo Atributos Amazon](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Untitled%20category/Untitled%20subcategory/enviar-atributos-dos-skus-para-a-amazon_1.png)

2. Preencha os campos da planilha de mapeamento de acordo com as indicações abaixo:

>❗ OBS: se **nenhum** dos atributos da sua categoria for exigido obrigatoriamente pela Amazon, então **não é necessário fazer o mapeamento**. Basta reindexar seus produtos para que eles sejam enviados diretamente pela integração.

>❗ Atenção: caso as colunas não forem nomeadas **tal qual** a forma que é ilustrada na imagem, as SKUs **não** serão enviadas corretamente para a Amazon. Qualquer **pequeno erro de digitação** pode afetar o processo.

1. __ID categoria:__ é o ID da categoria na VTEX. Você consegue encontrá-lo ao lado do nome de cada categoria ao expandir a árvore.
2. __VariationTheme:__ é a maneira que o SKU varia no marketplace. Você deve preencher com os Variations Themes que se adequam à categoria de seus produtos e respectivos PTDs.
>Ex: se o produto varia por tamanho e cor, deve-se usar "SizeColor".
>Ex2: se o produto varia apenas por cor, deve-se usar "Color".
3. __Type:__ é o tipo de especificação que será usado e deve ser preenchido com um dos valores abaixo:
  - `Variation`: tipo destinado para diferenciar os SKUs (assim como [campos de SKUs na VTEX](/pt/tutorial/criando-campo-de-sku)). Caso a coluna `VariationTheme` tenha sido preenchida, então a coluna `Type` sempre será preenchida como Variation.
  - `Information`: tipo destinado para complementar informações sobre os produtos (assim como [campos de produtos na VTEX](/pt/tutorial/criando-um-campo-de-produto)). Caso a coluna `VariationTheme` tenha sido deixada em branco, então a coluna `Type` sempre será preenchida como Information.
- __VtexEspc:__ é o nome do [campo de SKU](/pt/tutorial/criando-campo-de-sku) usado na sua loja na VTEX.
>Ex: campos como "Tamanho", "Cor", "Material"...
- __AmzEspec:__ é o nome da especificação aceito pela Amazon que corresponde ao campo de SKU que você usou no campo `VtexEspec`.
>EX: se você usou "Tamanho" na coluna `VtexEspc`, então o nome correspondente na Amazon seria "Size".
- __VtexValue:__ nome do valor usado no campo de SKU na VTEX.
>Ex: para uma especificação de "Cor", os valores deste campo seriam as próprias cores usadas na loja, como "Vermelho", "Preto", "Branco"...
- __AmazValue:__ nessa coluna você deve preencher valores aceito pela Amazon correspondentes aos valores usados no campo `VtexValue`.
>Ex: se você preencheu o `AmzEspec` com ColorMap e o `VtexValue` com "Vermelho", verá que o valor aceito pela Amazon é "Red". 

Planilha de exemplo usando a categoria Clothing & Accessories:

![Amazon Mapeamento ](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Untitled%20category/Untitled%20subcategory/enviar-atributos-dos-skus-para-a-amazon_2.png)

>❗ Lembre-se que estes valores devem estar de acordo com os valores aceitos pela Amazon. Consulte os termos aceitos e faça o De/Para entre o que está cadastrado no seu campo de SKU na VTEX e os valores permitidos na Amazon.

Após preencher a planilha, acesse __Integrações__ no menu do Admin:

1. Clique em __Configurações__.
2. Busque pela caixa da Amazon e clique no __botão de engrenagem__.
3. Em seguida, clique em __Upload de Mapeamento__.
4. Escolha a planilha com os dados e clique em __Enviar Arquivo__.
