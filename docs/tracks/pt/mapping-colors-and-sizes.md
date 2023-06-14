---
title: Mapeamento de cor e tamanho
id: HvbHUmSDbHe1io6XqvHS3
status: CHANGED
createdAt: 2019-11-18T13:40:10.167Z
updatedAt: 2020-11-27T19:39:37.276Z
publishedAt: 2020-03-19T22:03:12.923Z
firstPublishedAt: 2019-11-19T17:30:16.718Z
contentType: trackArticle
productTeam: Channels
slug: mapeamento-de-cor-e-tamanho
trackId: 50hbG4bzhSIhjz1lzqI1g4
trackSlugPT: integracao-com-a-wish
---

Depois de fazer as configurações iniciais para a integração com a Wish, agora vamos mapear as especificações de SKU. Dessa forma, será possível criar produtos com variações dentro da Wish (ex: camisa preta P, M, G).

O envio dessas informações é feito por meio do upload da planilha de mapeamento, que contém um de/para. O mapeamento só será feito uma vez para cada categoria. Isso significa que, já tendo feito o mapeamento uma vez, os novos produtos que forem criados vão ser integrados diretamente na categoria correta (e com suas respectivas variações e atributos).

<div class = "alert alert-info">
É preciso realizar o mapeamento de categoria para que a Wish possa diferenciar os seus SKUs corretamente. Exemplo: imagine que existam dois SKUs de um mesmo produto com cores diferentes e tamanhos iguais na VTEX, caso o mapeamento de categoria não seja realizado, a Wish reconhecerá os dois SKUs como um só. 
</div>

<div class = "alert alert-warning">
Produtos sem cor ou tamanho mapeados não serão enviados para a Wish. Caso alguma categoria não tenha estes campos na VTEX, será necessário <a href="https://help.vtex.com/pt/tutorial/criando-campo-de-sku--tutorials_119">criar um campo de SKU</a> no Catálogo e preencher com os valores adequados antes de realizar o mapeamento de cor e tamanho.
</div>

  - [Baixe aqui](https://drive.google.com/uc?export=download&id=1yJCgahkDhc4Gbvtxpe9kID1CwWsijdOf) a Planilha de Mapeamento da Wish no formato .xlsx.

## Campos

Siga o passo a passo, preenchendo os campos da planilha de mapeamento conforme as indicações abaixo:

  1. **VTEXCategory**: é o ID da categoria na VTEX. Você consegue encontrá-lo do lado do nome de cada categoria ao expandir a árvore.

Dadas essas informações, continue o preenchimento da planilha seguindo as orientações abaixo:

  1. **VTEXField**: é o nome do [campo de SKU](https://help.vtex.com/pt/tutorial/criando-campo-de-sku) usado na sua loja na VTEX.
_Ex: campos como "Tamanho", "Cor"._

  2. **WishField**: é o nome da especificação na Wish, que corresponde ao campo de SKU que você usou no campo VTEXField.
_Ex: se você usou "Cores" na coluna VTEXField, então o nome correspondente na Wish seria "Color"._

  3. **VTEXValue**: nome do valor usado no campo de SKU na VTEX.
_Ex: para uma especificação de "Cor", os valores desse campo seriam as próprias cores usadas na loja, como "Vermelho", "Preto", "Branco", etc._

  4. **WishValue**: nessa coluna você deve preencher valores aceitos pelo Wish, correspondentes aos valores usados no campo VTEXValue. Siga a documentação da Wish sobre os valores aceitos de [cor](https://merchant.wish.com/documentation/colors) e de [tamanho](https://merchant.wish.com/documentation/sizes) para preencher a planilha.
_Ex: se você preencheu o VTEXField com "Tamanho" e o VTEXValue com "Pequeno", verá que a Wish aceita "P", por exemplo._

## Exemplos

Abaixo estão alguns exemplos de como montar a planilha.

### Roupas

Neste exemplo, estamos mapeando uma **camisa**.

Repare que na VTEX o nome dos campos é "Cores" e "Tamanhos", mas a Wish chama de "Color" e "Size", respectivamente.

Na VTEX, os produtos dessa categoria possuem duas cores possíveis: vermelho e gelo. 
Deve-se escolher a cor disponível mais próxima que, no caso da Wish, "Gelo" poderia ser "White/Ice Glaze" (baseado na [lista de cores aceitas](https://merchant.wish.com/documentation/colors)). E "Vermelho" poderia ser "Red".

<div class = "alert alert-info">
  OBS: o cabeçalho da tabela deve ser preenchida exatamente como está no exemplo abaixo. Lembre-se de não adicionar caracteres especiais como enter ou espaço no preenchimento dessa tabela. 
  </div>

![PT - Tabela Wish](//images.ctfassets.net/alneenqid6w5/5fvuqSjSRGHwbFVNUSTM3T/6f8f13054b1be01cbd1340d7b5b90bbd/Tabela_Wish.png)

## Fazendo o upload

Depois de preencher a planilha, acesse o app na seção de "apps instaladas" do Admin.

  1. Clique em "Carregar planilha";
  2. Escolha a planilha com os dados e clique em "Enviar Arquivo".
  
Finalizando este passo, basta salvar a integração e seus produtos serão enviados!

