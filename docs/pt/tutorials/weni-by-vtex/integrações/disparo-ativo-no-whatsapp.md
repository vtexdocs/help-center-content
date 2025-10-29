---
title: 'Disparo Ativo no WhatsApp'
id: 20E0eUtogj84N0vf6nZeia
status: PUBLISHED
createdAt: 2025-09-15T15:27:41.354Z
updatedAt: 2025-10-03T14:20:32.448Z
publishedAt: 2025-10-03T14:20:32.448Z
firstPublishedAt: 2025-10-03T14:20:32.448Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: active-message-dispatch-on-whatsapp
legacySlug: disparo-ativo-no-whatsapp
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Antes de tudo, é importante entender a diferença entre *disparo ativo* e *passivo*.

O **disparo passivo** ocorre quando o usuário final entra em contato com a empresa de forma voluntária. Nesse momento, um fluxo de conversa é iniciado a partir da primeira mensagem enviada pelo usuário à empresa.

Por outro lado, o **disparo ativo** ocorre quando a empresa toma a iniciativa de iniciar uma conversa com o usuário. Para que o disparo ativo seja realizado, a mensagem a ser enviada precisa passar por um processo de validação guiado pela Meta e, somente após sua pré-aprovação, é possível enviá-la aos usuários. Na Plataforma Weni, chamamos esse modelo de mensagem de Template Message.

#### **Disparando pelo módulo de fluxos**

Após a pré-aprovação da Template Message, o fluxo conversacional pode começar a ser construído. O primeiro passo é adicionar o cartão/ card de ""Atualizar Contato"" e escolher a opção ""Channel"" (Canal), pois ela definirá de qual canal será feito o disparo. Nesta etapa, escolha o seu canal do WhatsApp.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/disparo-ativo-no-whatsapp_1.png)

![](https://lh6.googleusercontent.com/dnDuAc3qT99XfkIlRIdry_Wlcvgzx6DyhDGNowh99nx8edb-JIzp4qPYNXX82I6n0DmwuXkfrXisgdKsQvFx3o32YDJX0ODZziw1PsUmkd_VeK8V7fGSKngIcZ5xee4sufwC_QhjLO_cH2nq0iWs5nU)

O **segundo passo** é adicionar o cartão enviar mensagem, na caixa de texto basta apenas digitar a seguinte expressão: @(“”). Veja a imagem abaixo:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/disparo-ativo-no-whatsapp_3.png)

A expressão acima indica que um Template Message (modelo de mensagem) será enviado e que este campo não será levado em consideração, pois o modelo de mensagem a ser enviado aos clientes pode ser selecionado na aba ""WhatsApp"", localizada no mesmo cartão de ""Enviar Mensagem"", conforme mostrado na imagem acima. Ao clicar na aba ""WhatsApp"", é possível acessar as mensagens que foram pré-aprovadas e selecioná-las para envio, como ilustrado na imagem seguinte.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/disparo-ativo-no-whatsapp_4.png)

Neste momento, também é possível adicionar variáveis que tornarão a mensagem mais personalizada, como, por exemplo, a variável *@contact.name*, que chama o usuário pelo nome registrado no próprio WhatsApp.

Este processo é sempre realizado para a primeira mensagem e é exclusivo para o canal WhatsApp. Após a entrega da Template Message, se o usuário responder, a empresa pode seguir o fluxo de mensagens de forma livre com os demais cartões/ cards de ação. Toda a construção do fluxo pode ser planejada normalmente após o primeiro cartão de Template Message. Para que o usuário possa responder, é necessário adicionar um cartão ""*Aguarde por Resposta*"", criando assim uma experiência de atendimento contínua.

Após selecionar a mensagem, basta clicar no botão ""*Disparar Fluxo*"", localizado no canto superior direito da tela, e fazer o disparo para um contato específico ou um grupo de contatos.

Por fim, para verificar se tudo ocorreu corretamente, basta acessar o módulo ""*Estúdio*"" e, na aba ""*Fluxo*"", é possível acompanhar o histórico de envio, tendo acesso a informações importantes como erros, fluxos iniciados e muito mais. Esse gerenciamento é essencial, principalmente para a implementação de melhorias no seu chatbot.

#### **Disparando fluxo pelo módulo estúdio**

Também é possível enviar uma Template Message pelo módulo ""*Estúdio*"", selecionando o contato para o qual deseja fazer o envio e clicando no menu de opções, localizado no canto superior direito. Depois, basta selecionar ""*Iniciar no Fluxo*"", escolher o fluxo e enviar. Esta é mais uma possibilidade que a Weni Plataforma oferece para realizar o disparo ativo. Veja na imagem abaixo:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/disparo-ativo-no-whatsapp_5.png)

O processo de **disparo ativo** é o mesmo para todos os canais de comunicação, porém a criação da Template Message é **exclusiva** para o canal WhatsApp. Isso significa que, enquanto o uso da Template Message não é necessário para outros canais, no WhatsApp só é possível enviar um modelo de mensagem (início do fluxo). Nos demais canais, é possível enviar mais de uma mensagem, sem limitações prévias.
