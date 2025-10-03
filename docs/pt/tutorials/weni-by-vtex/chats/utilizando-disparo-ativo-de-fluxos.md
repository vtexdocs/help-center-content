---
title: 'Utilizando disparo ativo de fluxos'
id: 2G7HPM4mD3vuxPHUgtexb7
status: PUBLISHED
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2025-10-03T14:22:54.202Z
publishedAt: 2025-10-03T14:22:54.202Z
firstPublishedAt: 2025-10-03T14:22:54.202Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-active-triggering-of-flows
legacySlug: utilizando-disparo-ativo-de-fluxos
locale: pt
subcategoryId: 6Jkw23mYV23p4V33O1Hjdh
---

### Guia de uso do disparo ativo

O disparo ativo de fluxos permite que um agente envie um fluxo para um ou mais
contatos e para grupos de contatos, possibilitando também iniciar uma conversa
com os contatos desejados através dos modelos de mensagens do Whatsapp.

Nesse artigo trataremos um pouco sobre:

- [Habilitando um fluxo existente para envio no chats](#habilitando-um-fluxo-existente-para-envio-no-chats)
- [Criando um fluxo que envie um modelo de mensagem](#criando-um-fluxo-que-envie-um-modelo-de-mensagem)
- [Ativando a função de disparo de fluxos em configuração de chats](#ativando-a-função-de-disparo-de-fluxos-em-configurações-de-chats)
- [Disparando um fluxo de chats](#disparando-um-fluxo-no-chats)

##### Habilitando um fluxo existente para envio no Chats

Qualquer fluxo já existente pode ser disparado através do chats, para isso
basta acessar **Fluxos;**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_1.png) 

Em seguida selecione o fluxo desejado e clique no botão **rótulo**:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_2.png) 

Para que o fluxo fique disponível em chats precisa ter um rótulo de nome **“chats”**, caso não esteja disponível crie um novo rótulo de nome **“chats”** como no exemplo:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_3.png) 

Ao clicar em **criar**, seu fluxo ficará automaticamente com o rótulo criado e estará disponível para ser usado em chats.

#### Criando um fluxo que envie um modelo de mensagem

A criação do fluxo é reservada para usuários gestores, ou seja, apenas usuários
com permissão de administrador, moderador e colaborador é que podem criar os
fluxos.

Para enviar modelos de mensagens é necessário que os mesmos já tenham sido
cadastrados e aprovados pelo Whatsapp, veja [este
artigo](https://docs.weni.ai/l/pt/m-dulo-integra-es/mensagens-modelos-template-messages) caso
haja dúvidas.

Acesse seu projeto, em seguida o módulo de **Fluxos**:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_4.png) 

Clique no botão **Criar fluxo:**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_5.png) 

Em seguida informe os dados sobre seu fluxo:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_6.png) 

Insira os cards de acordo com as ações que desejar no seu fluxo, para que o fluxo seja de envio de modelo de mensagens, selecione o card do tipo enviar mensagem e clique em **whatsapp.**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_7.png) 

Seus modelos cadastrados devem aparecer, selecione o desejado e insira a variável caso houver, clique em ok e finalize seu fluxo.

#### Ativando a função de disparo de fluxos em Configurações de Chats

Para que a função de disparo de fluxos esteja disponível aos agentes, primeiro
é necessário habilitar a mesma em configurações, no setor desejado.

Acesse **configurações \> Chats \> Abrir**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_8.png) 

Na primeira tela do setor será possível ver o botão de ativar o disparo de fluxos, ele estará desativado, **ative** e clique em **salvar.**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_9.png)

#### Disparando um fluxo no Chats

Acesse o Chats

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_10.png) 

Na tela de chats clique no**botão** abaixo de preferências, como no exemplo:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_11.png) 

Selecione os contatos desejados e clique em continuar:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_12.png) 

Selecione o fluxo desejado, em seguida clique no botão de enviar:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/utilizando-disparo-ativo-de-fluxos_13.png) 

Pronto! Os contatos que receberam os fluxos irão aparecer em uma lista em espera, assim que o contato responder será possível iniciar o chat normalmente com o contato.
