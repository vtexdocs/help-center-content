---
title: 'Envio de produtos para o Facebook'
id: 41qzoa7TWIYTyIhABHdgzI
status: PUBLISHED
createdAt: 2021-02-08T19:45:07.202Z
updatedAt: 2025-04-30T16:59:50.365Z
publishedAt: 2025-04-30T16:59:50.365Z
firstPublishedAt: 2021-02-08T20:10:14.152Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-products-to-facebook
locale: pt
trackId: 7h8KvIC4DbRRc8VlyJ8PFc
trackSlugPT: integracao-com-o-facebook
---

Concluída a etapa de autenticação da sua conta, o envio de produtos para o Facebook é um processo automático. Os dados enviados são:

- Nome de exibição do produto
- Imagem
- Categoria
- Preço
- Moeda
- Descrição
- Marca
- Condição do Produto
- Disponibilidade

A atualização é automática, realizada sempre que há modificação em algum dos dados. Vale ressaltar que o valor _moeda_ é definido na política comercial, e que _disponibilidade_ se refere apenas se há produtos disponíveis ou não, pois não há controle de estoque. Para mais informações, veja [Como funciona a disponibilidade de estoque na página de produto](/pt/tutorial/como-funciona-a-disponibilidade-de-estoque-na-pagina-de-produto--gyVfuG5dTyUyGA02iiU0y).

Caso você queira enviar atributos de produtos para o Facebook, existe uma etapa adicional a ser realizada. Atributos são [especificações](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) de produto, ou seja, propriedades que podem tanto estar cadastradas para produto, quanto para SKU.

A etapa adicional é a realização de um mapeamento das especificações dos produtos. O mapeamento é o que faz a correspondência entre os atributos cadastrados na sua loja VTEX e os padrões adotados pelo Facebook.

<div class="alert alert-warning">
O mapeamento de atributos por planilha é opcional,  mas se você escolher realizá-lo, ele deve ser feito seguindo todos os passos descritos no artigo. Caso contrário, podem ocorrer erros na integração.
</div>

## Envio de atributos para o Facebook

Se for do seu interesse enviar os atributos dos seus produtos para o Facebook, você deve realizar as seguintes etapas:

1. [Fazer o download da planilha de mapeamento](#download-da-planilha-de-mapeamento).
2. [Preencher a planilha de mapeamento](#preenchimento-da-planilha-de-mapeamento).
3. [Realizar o upload da planilha de mapeamento](#upload-da-planilha-de-mapeamento).

### Download da planilha de mapeamento

O mapeamento por planilha é o que permite estabelecer a correspondência entre os atributos dos seus produtos na plataforma VTEX e os padrões utilizados pelo Facebook.

O primeiro passo para realizar o mapeamento é fazer o download do arquivo [Planilha de Mapeamento Facebook.xlsx](https://assets.ctfassets.net/alneenqid6w5/52pBgj6plpcSAp1X2DqgJ9/0c9f805ca9e7bc03b0e5cea8212a03ad/Planilha_de_Mapeamento_Facebook.xlsx).

### Preenchimento da planilha de mapeamento

O segundo passo para o mapeamento é preencher o arquivo baixado. Trata-se de uma planilha, constituída de uma única aba, na qual é possível identificar cinco colunas.

<div class="alert alert-info">
A planilha de mapeamento do Facebook é <i>case sensitive</i>, ou seja, é sensível para o uso de letras maiúsculas e minúsculas.
</div>

- **Primeira coluna, _ID Category_:** deve ser preenchida com o número de identificação da categoria do produto na plataforma VTEX. Você encontra o ID de uma categoria no Admin, no módulo _Produtos > Catálogo > Categorias_. O ID da categoria é o número à esquerda do nome da categoria.
- **Segunda coluna, _VTEX attribute name_:** deve conter o nome do atributo cadastrado na VTEX.
> Exemplo: o campo relativo à tonalidade dos produtos na sua loja VTEX está cadastrado como _Cor._ Então, você deve preencher a coluna  _VTEX attribute name_ com a palavra _Cor_.

- **Terceira coluna, _Facebook attribute name:_** deve ser preenchida com o termo correspondente utilizado pelo Facebook para um atributo.
> Exemplo: a correspondência no Facebook para o atributo _Cor_ é _color_.

  <div class="alert alert-info">
Para saber os nomes de atributos e valores de referência, consulte a documentação do Facebook <a href="https://developers.facebook.com/docs/commerce-platform/catalog/fields?locale=pt_BR#universal-basic-attributes">Universal Basic Attributes</a>. Se não houver correspondência para um atributo ou valor, preencha a coluna Facebook attribute name com o mesmo termo utilizado na VTEX.
</div>

- **Quarta coluna, _VTEX attribute value_:** deve ser preenchida com os valores dos seus atributos na VTEX.
> Exemplo: digamos que na sua loja VTEX, para o atributo _Gênero_ exista o valor _Feminino._ Portanto, você deve preencher a coluna _VTEX attribute value_ com a palavra _Feminino_.

- **Quinta coluna, _Facebook attribute value_:** deve conter os termos utilizados para valores de atributos no Facebook.
> Exemplo: para o valor _Feminino_, o termo correspondente no Facebook é _female_.

Veja um exemplo de planilha preenchida:

| **CategoryId** | **VTEX attribute name** | **Facebook attribute name** | **VTEX attribute value** | **Facebook attribute value** | 
| ---------- | ---------- | ---------- | ---------- | ---------- | 
| 23 | Cor | Color | Amarelo | Yellow |
| 23 | Tamanho | Size | Pequeno | P |
| 23 | Tamanho | Size | Grande | G |
| 23 | Gênero | Gender | Feminino | female |

### Upload da planilha de mapeamento

O terceiro e último passo para concluir o mapeamento é fazer o upload da planilha preenchida. Esta ação é realizada no Admin, através dos seguintes passos:

1. Acesse o Admin.
2. No módulo Marketplace, clique em Marketplace e integrações.
4. Procure Facebook na barra de busca.
5. Clique em `Editar`
6. Escolha a opção `Mapeamento de categorias`.
7. Clique em `Escolher um arquivo`.
8. Selecione a planilha de mapeamento preenchida.
9. Clique em `Enviar arquivo`.

Feito isso, você terá concluído o mapeamento de categorias e atributos dos seus produtos. O tempo para isso se refletir no Facebook vai depender da extensão do seu catálogo.

## Uso de custom labels

Além das informações básicas dos produtos, você pode enviar rótulos personalizados para o Facebook Business Manager. Esse recurso é chamado de *custom labels* e permite classificar ofertas com base em critérios definidos por você, como campanhas promocionais, sazonalidade, margens ou público-alvo.  
Essas *labels* são úteis para:  

- Agrupar produtos por campanhas específicas (ex: Black Friday, Frete grátis).  
- Criar relatórios por grupos de produtos com comportamentos semelhantes.  

### Como configurar 

É necessário criar as *custom labels* no Facebook Business Manager. Após criar as *custom labels*, siga o tutorial [Cadastrar especificações ou campos de produto](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106) para associá-las a uma oferta específica utilizando **especificações de produtos.**  

Ao criar o novo campo de especificação de produto preencha-os com os seguintes valores:

| **Campo** | **Valor** |
|:---: | :---: |
| Nome do campo da especificação | `facebook-labels`|
|Tipo de campo | Radio |

Após criar o novo campo de especificação é necessário associar as labels à ofertas. Para esta etapa, siga as instruções abaixo:

1. No Admin VTEX, acesse **Catálogo > Todos os produtos** ou digite **Todos os produtos** na barra de busca no topo da página.
2. Na linha do produto, clique em `Alterar`.
3. Acesse a aba **Especificações.**
4. Preencha o campo `facebook-labels` com valores desejados, separando-os por ponto e vírgula`;`.
5. Clique em `Salvar`.

<div class=”alert alert-warning”>
Cada oferta pode ter no máximo cinco labels associadas. 
</div>

