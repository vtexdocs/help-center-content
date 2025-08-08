---
title: 'Campos customizáveis de produto para Mercado Livre'
id: 6tJOSJ2o9phVIb8XXG6QSk
status: PUBLISHED
createdAt: 2024-07-23T19:44:34.554Z
updatedAt: 2024-08-19T17:39:24.164Z
publishedAt: 2024-08-19T17:39:24.164Z
firstPublishedAt: 2024-07-23T20:17:01.358Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: custom-product-fields
legacySlug: campos-customizaveis-de-produto
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Os campos customizáveis permitem adaptar os atributos do produto conforme necessário, melhorando as informações dos produtos enviados para o Mercado Livre.  
Nessa documentação você encontra **quais campos podem ser customizados**, **como criar um novo campo** e **quais valores são aceitos**.  

## Campos customizáveis

Veja na tabela abaixo quais campos podem ser customizados e qual a descrição do campo:

| **Nome do campo** | **Descrição** |
|:---:|:---:|
| meli_title | Envia o nome cadastrado neste campo ao invés do nome que consta no campo `title`. |
| meli_shipping_mode | Define o [tipo logístico](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy) utilizado pelo seller: [me1](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-1-me1) ou [me2](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-2-me2). |
| officialstoreid_meli | Define qual a loja oficial do seller no Mercado Livre. |
| plaintext_description_meli | Envia a descrição de produto cadastrada neste campo ao invés da descrição que consta no campo `productDescription`. |
| free_shipping | Informa ao Mercado Livre se o produto é oferecido com a opção de frete grátis.  |

## Criando novo campo de produto 

Para criar um campo de produto, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo**, ou digite **Catálogo** na barra de busca no topo da página.  
2. Clique em **Categorias.**  
3. Clique na categoria associada ao grupo de especificações em que você deseja criar um campo de produto.  
  Observe que ao criar um campo em um nível de categoria mais alto, a especificação será apresentada em todos os níveis de categoria abaixo dela.  
4. Clique em Ações<i class="fas fa-angle-down" aria-hidden="true"></i>.  
5. Clique em **Campo (Produto).**  
6. Clique em **Novo Campo.**  
7. Preencha as informações referentes ao campo que está sendo criado:  
<div class="alert alert-warning">
O nome do campo deve ser preenchido exatamente como um dos nomes apresentados na tabela da seção <a href="#campos-customizaveis">Campos customizáveis</a>.
</div>  

  **Nome:** nome da especificação (campo) de produto.  
  **Texto:** descrição sobre o campo.  
  **Tipo:** tipo de campo, que pode variar entre **Texto, Texto Grande, Número, Combo, Radio, CheckBox, Texto Indexado e Texto Grande Indexado.** [Leia a seção Tipos de campo de produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106#tipos-de-campo-de-produto) para mais informações sobre cada opção.  
  **Valor Padrão:** valor de preenchimento já definido na criação do campo.  
  **Grupo:** nome do [grupo de especificações](https://help.vtex.com/pt/tutorial/criando-grupo-de-categoria) criado anteriormente, do qual esse campo fará parte.  
  **Filtro:** define se a especificação será utilizada como filtro na navegação do site.  
  **Obrigatório:** define se o valor obrigatoriamente precisa ser preenchido no cadastro do produto ou não. Caso o campo seja obrigatório, o produto só poderá ser ativado após o preenchimento desta especificação.  
  **Exibe Especificação:** define se o campo é mostrado na página de detalhes do produto, na aba **Especificações.**  
  **Link no Menu Superior:** define se o link para os valores do campo é mostrado no menu principal do site.  
  **Link no Menu Lateral:** define se o link para os valores do campo é mostrado no menu lateral do site.  
  **Ativo:** insere ou remove este campo no cadastro do produto (aba Especificações).  
8. Clique em **Salvar.**  

## Cadastrar valores para o campo de produto

Os valores dos campos de produto irão variar conforme o tipo do campo. Para os campos de tipo de **Texto** e **Número,** não há valores pré-definidos criados, os valores serão preenchidos livremente durante o cadastro do produto, na aba **Especificações.**  

Já para os campos de tipo **Combo**, **Radio** e **CheckBox**, é necessário cadastrar valores pré-definidos para seleção durante o cadastro do produto. Confira na tabela abaixo os valores aceitos para cada campo customizável:  

| **Nome do campo** | **Tipo do campo** | **Descrição do tipo de campo** | **Valor do campo** |
|:-:|:--:|:----:|:--:|
| meli_title | Texto grande | Preenchimento do conteúdo como texto livre, indicado para grandes estruturas de HTML. | Texto livre |
| meli_shipping_mode | Combo | Conteúdo com dois ou mais valores pré-definidos, para seleção de uma opção em uma lista suspensa (dropdown). | me1 e me2 |
| officialstoreid_meli | Texto | Preenchimento do conteúdo como texto livre, indicado para textos pequenos e de formatação simples. Não é indicado para grandes estruturas de HTML. | Texto alfanumérico. Ex: 8457 |
| plaintext_description_meli | Texto grande | Preenchimento do conteúdo como texto livre, indicado para grandes estruturas de HTML. | Texto livre |
| free_shipping | Checkbox | Opção que tem apenas valores equivalentes a verdadeiro ou falso. | Se a checkbox estiver marcada, o frete é grátis, se a checkbox estiver desmarcada, o frete não é grátis. |

Confira as instruções a seguir:  

1. No Admin VTEX, acesse **Catálogo**, ou digite **Catálogo** na barra de busca no topo da página.  
2. Clique em **Categorias.**  
3. Clique na categoria em que o campo de produto está salvo.  
4. Clique no botão **Ações**<i class="fas fa-angle-down" aria-hidden="true"></i>.  
5. Clique em **Campo (Produto)**.  
6. Clique na seta para baixo <i class="fas fa-angle-down" aria-hidden="true"></i>.  
7. Clique em **Valores**.  
  Nesta página é possível criar um **Novo valor** ou **Editar** os valores estabelecidos anteriormente.  
8. Preencha o campo **Nome** com os valores que você deseja criar para aquele campo. Insira um valor por linha e tecle `Enter` entre cada valor.  
9. Clique em **Salvar**.  

Os valores criados serão exibidos na aba **Especificação** no cadastro de Produto.  

