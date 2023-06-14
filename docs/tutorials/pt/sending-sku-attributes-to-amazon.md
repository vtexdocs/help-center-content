---
title: Enviar atributos dos SKUs para a Amazon
id: 3KTNjHRtVmWWe02my8suEo
status: DRAFT
createdAt: 2018-06-21T17:09:05.337Z
updatedAt: 2020-05-25T18:47:37.861Z
publishedAt: 
firstPublishedAt: 2018-06-21T19:25:22.139Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: enviar-atributos-dos-skus-para-a-amazon
legacySlug: enviar-atributos-dos-skus-para-a-amazon
subcategory: 
---

Feitas as configurações iniciais para a [integração com a Amazon](/pt/tutorial/integrar-com-a-amazon), agora vamos enviar os dados dos atributos dos SKUs para o marketplace. O envio destas informações será feito por __upload da planilha de mapeamento__.

O mapeamento só será feito uma vez para cada categoria. Desta forma, mesmo já tendo feito um mapeamento, quando novos produtos forem criados, eles serão integrados diretamente. Será feito um __de/para__ dos atributos cadastrados na VTEX com os atributos aceitos pela Amazon.

1. Crie uma __planilha de upload__ no formato `.xlsx` e preencha o título das colunas conforme a imagem abaixo.![Modelo Atributos Amazon](https://images.ctfassets.net/alneenqid6w5/1oqAPItLPaMc8gYICU6oWa/7d54955d0c179a2fbcb036e62ede9dc3/Modelo_Atributos_Amazon.png)

2. Preencha os campos da planilha de mapeamento de acordo com as indicações abaixo:

<div class="alert alert-danger">
OBS: se <strong>nenhum</strong> dos atributos da sua categoria for exigido obrigatoriamente pela Amazon, então <strong>não é necessário fazer o mapeamento</strong>. Basta reindexar seus produtos para que eles sejam enviados diretamente pela integração.
</div>

<div class="alert alert-danger">
Atenção: caso as colunas não forem nomeadas <strong>tal qual</strong> a forma que é ilustrada na imagem, as SKUs <strong>não</strong> serão enviadas corretamente para a Amazon. Qualquer <strong>pequeno erro de digitação</strong> pode afetar o processo. 
</div>

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

![Amazon Mapeamento ](https://images.ctfassets.net/alneenqid6w5/5p6RrFb0T6my86cCOmW0c8/a5e93f7732929c9d9ea4cc0dd855b9a1/Amazon_Mapeamento.png)

<div class="alert alert-danger">
Lembre-se que estes valores devem estar de acordo com os valores aceitos pela Amazon. Consulte os termos aceitos e faça o De/Para entre o que está cadastrado no seu campo de SKU na VTEX e os valores permitidos na Amazon.
</div>

Após preencher a planilha, acesse __Integrações__ no menu do Admin:

1. Clique em __Configurações__.
2. Busque pela caixa da Amazon e clique no __botão de engrenagem__.
3. Em seguida, clique em __Upload de Mapeamento__.
4. Escolha a planilha com os dados e clique em __Enviar Arquivo__.
