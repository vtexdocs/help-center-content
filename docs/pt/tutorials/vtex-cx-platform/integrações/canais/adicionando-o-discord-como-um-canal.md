---
title: "Adicionando o Discord como um canal"
id: 2s5uqsnula0RiNQXXJDDrL
status: PUBLISHED
createdAt: 2025-09-15T14:27:46.594Z
updatedAt: 2026-11-12T12:00:00.000Z
publishedAt: 2025-10-03T14:20:32.891Z
firstPublishedAt: 2025-10-03T14:20:32.891Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-discord-as-a-channel
legacySlug: adicionando-o-discord-como-um-canal
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Seus usuários precisarão de uma conta Discord e um dispositivo compatível para enviar/receber mensagens. Esse tipo de canal só está disponível se sua instância tiver sido configurada com o aplicativo [proxy](https://github.com/releaseplatform/RapidPro-Discord-Proxy) Discord.

A infraestrutura necessária para o proxy não é fornecida pelo VTEX CX Platform.

## Registrar o aplicativo no Discord

- **Discord tem documentação oficial sobre como registrar seu bot.**

[Documentação de primeiros passos do Discord](https://discord.com/developers/docs/getting-started)

- **Acesse o painel do desenvolvedor e clique em New Application e crie seu aplicativo:**

[Discord Developer Portal](https://discord.com/developers/applications)

1. Acesse a aba “Bot” e clique em “Add Bot”. Confirme clicando em “Yes, do it!”
2. Mantenha as configurações padrão para Bot público (marcada) e Exigir concessão de código OAuth2 (desmarcada).
3. O próximo passo é copiar o token.
4. Clique em “Redefinir Token” e obtenha seu token.

## Adicionar o canal ao VTEX CX Platform

1. Dentro do projeto, vá em: Configurações > Canais e adicione o Discord
2. Após adicionar o canal em **Canais**, insira o seu discord_bot_token fornecido pela página Discord Developer e a URL do Proxy, que é a URL onde o proxy do Discord está rodando.
3. Salve Alterações.
