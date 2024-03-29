---
title: 'Envio de produtos para o Facebook'
id: 41qzoa7TWIYTyIhABHdgzI
status: PUBLISHED
createdAt: 2021-02-08T19:45:07.202Z
updatedAt: 2021-07-09T22:04:10.786Z
publishedAt: 2021-07-09T22:04:10.786Z
firstPublishedAt: 2021-02-08T20:10:14.152Z
contentType: trackArticle
productTeam: Channels
slug: envio-de-produtos-para-o-facebook
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

A atualização é automática, realizada sempre que há modificação em algum dos dados. Vale ressaltar que o valor _moeda_ é definido na política comercial, e que _disponibilidade_ se refere apenas se há produtos disponíveis ou não, pois não há controle de estoque. Para mais informações, veja [Como funciona a disponibilidade de estoque na página de produto](https://help.vtex.com/pt/tutorial/como-funciona-a-disponibilidade-de-estoque-na-pagina-de-produto--gyVfuG5dTyUyGA02iiU0y).

Caso você queira enviar atributos de produtos para o Facebook, existe uma etapa adicional a ser realizada. Atributos são [especificações](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) de produto, ou seja, propriedades que podem tanto estar cadastradas para produto, quanto para SKU.

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

O primeiro passo para realizar o mapeamento é fazer o download do arquivo [Planilha de Mapeamento Facebook.xlsx](https://drive.google.com/uc?export=download&id=1XD8AO0VEzLXxmb8yjjkFQCNce1IfufkN).

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
2. No módulo _MARKETPLACE_, clique em `Integrações`.
3. Selecione a opção `Configurações`.
4. No card do Facebook, clique na <i class="fas fa-cog"></i>
5. Escolha a opção `Upload de mapeamento`.
6. Clique em `Escolher um arquivo`.
7. Selecione a planilha de mapeamento preenchida.
8. Clique em `Enviar arquivo`.

Feito isso, você terá concluído o mapeamento de categorias e atributos dos seus produtos. O tempo para isso se refletir no Facebook vai depender da extensão do seu catálogo.
