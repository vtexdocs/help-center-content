---
title: 'Gerenciando placeholders'
id: 29Y7r9JqcWIqmGipReGLQI
status: PUBLISHED
createdAt: 2022-01-10T22:19:18.057Z
updatedAt: 2022-01-10T22:27:37.181Z
publishedAt: 2022-01-10T22:27:37.181Z
firstPublishedAt: 2022-01-10T22:26:52.895Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1DedyaVUPp5wLAvjY7wKKv
slug: gerenciandoplaceholders
legacySlug: gerenciandoplaceholders
subcategory: 2g6LxtasS4iSeGEqeYUuGW
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

![6 1](//images.ctfassets.net/alneenqid6w5/5TcE6FWxp9xwmSl2fQCYMa/bb0a3544af3d95d1d59e9f484ba61984/6_1.png)

### Configurando o placeholder

Agora que o controle de placeholder foi inserido no template, vamos configurá-lo.

Isso é feito nas configurações do layout que usa esse template.

1. Abra o layout e depois clique na aba **Settings**. O novo placeholder deve aparecer aí, com o nome igual ao valor do id definido no controle. Por enquanto, esse placeholder está vazio, ou seja, não há nenhum objeto dentro dele.![6 2](//images.ctfassets.net/alneenqid6w5/3sr9POkZJdqXMiUC45nIeZ/440a22c2e88050d9b1e82cfe155938e9/6_2.png)
2. Para inserir um objeto, clique em **add object**. 
3. Em seguida, escolha o tipo de objeto e clique em **Adicionar**.
4. Por fim, clique no botão **Save Settings**, no alto da página.

Agora você já pode editar o objeto inserido no placeholder.

Para isso, clique no lápis dentro do objeto e, em seguida, clique em **add content**.

![6 3](//images.ctfassets.net/alneenqid6w5/4Mgr9vmPRKmzTGu7ntH6u6/201c7b83ce8cef556a4a802b5a457359/6_3.png)

Agora você pode definir o nome desse objeto, subir imagens para ele e configurar as condições em que ele vai ser renderizado, tais como o período. 

Ao final, clique em __Add Content List__ e depois salve o conteúdo.
