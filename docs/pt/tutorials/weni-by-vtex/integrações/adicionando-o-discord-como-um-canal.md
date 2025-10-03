---
title: 'Adicionando o Discord como um canal'
id: 2s5uqsnula0RiNQXXJDDrL
status: PUBLISHED
createdAt: 2025-09-15T14:27:46.594Z
updatedAt: 2025-10-03T14:20:32.891Z
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

A Infraestrutura necessária para o proxy não é fornecida pela Weni#### Registre seu aplicativo seguindo as instruções oficiais

- **Discord tem documentação oficial sobre como registrar seu bot.**

https://discord.com/developers/docs/getting\-started

- **Acesse o painel do desenvolvedor e clique em New Application e crie seu aplicativo:**

https://discord.com/developers/applications

1. Go to the ""Bot"" tab and click ""Add Bot"". You will have to confirm by clicking ""Yes, do it!""

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/adicionando-o-discord-como-um-canal_1.png)

2. Mantenha as configurações padrão para Bot público (marcada) e Exigir concessão de código OAuth2 (desmarcada).
3. O próximo passo é copiar o token.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/adicionando-o-discord-como-um-canal_2.png)

4. Clique em ""Redefinir Token"" e obtenha seu token.

### Adicione o canal à plataforma Weni

1. Dentro do projeto, vá em: Aplicativos \-> Descoberta \-> Adicione o Discord

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/adicionando-o-discord-como-um-canal_3.png)

2. Após adicionar em ""Meus Aplicativos"", insira o seu discord\_bot\_token fornecido pela página Discord Developer e a URL do Proxy, que é a URL onde o proxy do Discord está rodando.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/adicionando-o-discord-como-um-canal_4.png)

3. Salve Alterações.
