---
title: 'Inserir e configurar placeholders'
id: mWRZsbb2vbSxFQxeSmpLb
status: ARCHIVED
createdAt: 2020-01-09T15:09:14.661Z
updatedAt: 2022-01-10T22:33:37.755Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:29:41.300Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: inserting-and-configuring-placeholders
locale: pt
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugPT: cms
---

Os placeholders permitem à loja inserir quatro tipos de elementos na página:
- Banner
- Banner DHTML
- Coleção
- HTML

Na prática, um placeholder é um trecho de código configurável, que atende a condições definidas pela loja.

Por exemplo, você pode inserir um placeholder na homepage e defini-lo como um banner; e então escolher três imagens diferentes para esse banner, cada uma ativada em uma faixa de datas específica.

### Inserindo o placeholder no template

Antes de mais nada, para criar um novo placeholder, é preciso inserir o controle que vai defini-lo no template.

Este é o controle de placeholders: `<vtex:contentPlaceHolder id="" />`

O que ele faz é criar um elemento configurável no local do código onde for inserido.

É importante inserir um valor de `id`. Este será o identificador desse placeholder no sistema.

![6 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/inserir-e-configurar-placeholders_1.png)

### Configurando o placeholder

Agora que o controle de placeholder foi inserido no template, vamos configurá-lo.

Isso é feito nas configurações do layout que usa esse template.

1. Abra o layout e depois clique na aba **Settings**. O novo placeholder deve aparecer aí, com o nome igual ao valor do id definido no controle. Por enquanto, esse placeholder está vazio, ou seja, não há nenhum objeto dentro dele.![6 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/inserir-e-configurar-placeholders_2.png)
2. Para inserir um objeto, clique em **add object**. 
3. Em seguida, escolha o tipo de objeto e clique em **Adicionar**.
4. Por fim, clique no botão **Save Settings**, no alto da página.

Agora você já pode editar o objeto inserido no placeholder.

Para isso, clique no lápis dentro do objeto e, em seguida, clique em **add content**.

![6 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/inserir-e-configurar-placeholders_3.png)

Agora você pode definir o nome desse objeto, subir imagens para ele e configurar as condições em que ele vai ser renderizado, tais como o período. 

Ao final, clique em __Add Content List__ e depois salve o conteúdo.
