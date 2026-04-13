---
title: 'Cartão de mensagem do WhatsApp'
id: 4IsU6gP2dUx1F1A5AMKN4D
status: PUBLISHED
createdAt: 2025-09-17T14:17:04.971Z
updatedAt: 2025-10-03T14:20:03.619Z
publishedAt: 2025-10-03T14:20:03.619Z
firstPublishedAt: 2025-10-03T14:20:03.619Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-message-card
legacySlug: cartao-de-mensagem-do-whatsapp
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

O cartão de mensagem do WhatsApp utiliza recursos oferecidos pela Meta para mudar a formatação das interações com os clientes. Você pode importar arquivos, solicitar localização, e usar respostas rápidas ou menus interativos com botões descritivos.

Para configurar o fluxo de mensagem do WhatsApp, siga os passos abaixo:

1. Dentro do seu projeto, clique em **Fluxo de automação** (em **Agent Builder**).
2. Escolha um fluxo existente ou crie um novo.
3. Clique no símbolo de `+ Criar bloco` para adicionar uma nova carta de ação.
4. Selecione **WhatsApp**.


## Mensagem Interativa

A escolha da mensagem interativa proporciona uma experiência aprimorada, permitindo opções como **respostas rápidas, lista de opções, solicitação de localização e botão de URL**. Essas funcionalidades são essenciais para tornar a comunicação mais engajadora.

### Respostas rápidas

  1. No **cabeçalho**, escolha enviar uma **mídia ou um texto.**
  2. Caso selecione a opção de texto para o cabeçalho, basta escrever no campo ao lado (texto do cabeçalho).
  3. Caso selecione a opção de mídia para o cabeçalho, basta usar sua mídia fazendo upload do seu dispositivo ou colando a URL. **Sua mídia pode ser uma imagem, vídeo, arquivo em pdf ou áudio.**

  1. Preencha os campos com **mensagens pré-definidas** para agilizar as respostas e proporcionar uma experiência mais fluida e eficiente para os usuários. Nesta etapa, você também pode **adicionar uma mensagem de rodapé.**

Cada campo de respostas rápidas tem um **limite de 20 caracteres**, e você pode incluir até 3 opções de texto, de acordo com as regras estabelecidas pela Meta. Além disso, as opções de mensagens rápidas precisam ser diferentes entre si.

  1. Depois de preencher os campos, clique no botão **Confirmar**. A seguir, veja um exemplo de como a mensagem será exibida no WhatsApp:

### Lista de opções

  1. Em **Interações** selecione a opção **Lista de Opções**. Aqui, você pode configurar até 10 botões com descrição. **Preencha os campos de cabeçalho, corpo e rodapé.**

A diferença entre as Respostas Rápidas e a Lista de Opções é que esta oferece mais variedade. Além disso, você pode definir um título e subtítulo para a lista, outra diferença é que para Lista de Opções **não** é suportado o envio de mídia no cabeçalho.

  1. Após isso, adicione **opções** e preencha os campos de **título e descrição (opcional)** para cada opção adicionada.

**Título:** Nome da opção, claro e conciso, refletindo seu conteúdo ou finalidade.
**Descrição (opcional):** Detalhes adicionais sobre a opção, informativos e relevantes, para ajudar os usuários a compreendê-la melhor.

  1. Preencha o **Botão de Ação (opcional)** com um **texto atrativo** que aparecerá na mensagem para incentivar os usuários a clicar nele. Esse botão serve para chamar a atenção e, ao ser clicado, abrirá a lista de opções disponíveis.

  1. Após terminar esta etapa, clique em **Confirmar**. Veja um exemplo de como a mensagem será exibida no WhatsApp:

### Solicitar localização

  1. Ainda em **Interações** é possível solicitar a localização do usuário de forma rápida e prática. Basta apenas selecionar a opção **Solicitar Localização** e preencher o campo de texto (mensagem).

Veja um exemplo de como a mensagem será exibida no WhatsApp:

Este cartão **não substitui** o envio do **template de mensagem.**

### Cartão de URL

1. Ainda em **Interações** você pode adicionar um **Botão de URL**, isso permite a criação de um botão que direciona para qualquer link de sua escolha. Além disso, essa funcionalidade também oferece a possibilidade de incluir cabeçalhos e rodapés personalizados em texto.

É possível adicionar uma variável na sua URL caso seja necessário.

Veja um exemplo de como a mensagem será exibida no WhatsApp:

Utilize este cartão **apenas para URN no WhatsApp.**
