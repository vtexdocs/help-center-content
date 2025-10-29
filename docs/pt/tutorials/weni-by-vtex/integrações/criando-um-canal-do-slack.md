---
title: 'Criando um Canal do Slack'
id: 6At6Ne3yXdVJqEVR8mUzC8
status: PUBLISHED
createdAt: 2025-09-15T14:30:28.340Z
updatedAt: 2025-10-03T14:20:32.860Z
publishedAt: 2025-10-03T14:20:32.860Z
firstPublishedAt: 2025-10-03T14:20:32.860Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-a-slack-channel
legacySlug: criando-um-canal-do-slack
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Iniciando

1. Com sua conta e seu workspace já criado, acesse <https://api.slack.com/apps> e acione o botão para criar um novo app.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_1.png)

2. Selecione a opção `From scratch`.

 ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_2.png)

3. Em `Basic Information` acesse a feature de Bots. 

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_3.png)

4. Acione o Botão `Review Scopes to Add`, para adicionar os escopos do token do bot necessários para a integração.

 ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_4.png)

5. Desça a página até o bloco de conteúdo Scopes e clique em Add an OAuth Scopes.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_5.png)

6. Para o ""Bot Token Scopes"" adicione os escopos de `chat:write`, `files:read`, `files:write`, `users:read`. Para o ""User Token Scopes"" adicione os escopos de `files:read` e `files:write`.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_6.png)

7. Suba a página até encontrar o botão `Install to Workspace` e o acione para instalar o app do bot para o seu workspace.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_7.png)

8. Copie os tokens ""User OAuth Token"" e ""Bot User OAuth Token"" para inserir no formulário de criação do canal para o bot do Slack na plataforma Weni.

 ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_8.png)

9. Na página de apps do Slack, acesse o menu Basic Information para copiar o `Verification Token`.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_9.png) 

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_10.png)

10. Vá em **Aplicativos > Descoberta** e adicione o app do Slack. Depois de adicionar o app, você poderá preencher os tokens.
11. Após preencher todos os campos do formulário abaixo, User OAuth Token, Bot User OAuth Token e Verification Token, acione o botão ""Salvar alterações"" para finalizar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_11.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_12.png)

12. Após a finalização do formulário de cadastro, copie a URL que aparecerá na tela de configuração do canal criado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_13.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_14.png) 

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_15.png)

13. Volte para a página de apps do Slack, acesse o item do menu de `Event Subscriptions` e ative.

 ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_16.png)

14. Em seguida cole a URL e aguarde um instante até aparecer a palavra `Verified` na cor verde ao lado do título Request URL.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_17.png)

15. Desça a página e adicione os eventos indicados na imagem.

 ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_18.png)

16. Salve as modificações.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_19.png)

17. Após salvar aparecerá uma barra de notificação amarela pedindo para reinstalar o app para o seu workspace, clique no link indicado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_20.png)

Após esses passos o bot poderá interagir nos Channels do workspace do Slack que for inserido, mas ainda não pode trocar mensagens diretas com os usuários, para permitir isso também, siga as próximas instruções.

1. Para ativar a permissão de troca de mensagens diretas acesse App Home e marque o check box indicado na imagem.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_21.png) 

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_22.png)

# **Como ativar quick replies/botões no Slack**

No Slack, você precisa habilitar o envio de quick replies. Vá em **Features > Interactivity \& Shortcuts**, e na aba **Interactivity**, adicione a URL que você copiou das configurações do canal no campo **Request URL**. Depois, salve as alterações.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/criando-um-canal-do-slack_23.png)

Com todos esses passos o seu canal com bot do Slack estará integrado e apto a enviar e receber mensagens nos canais do Slack que o bot está adicionado ou em mensagens diretas.
