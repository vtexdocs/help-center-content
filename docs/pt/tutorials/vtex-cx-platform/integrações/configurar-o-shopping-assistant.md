---
title: 'Configurar o Shopping Assistant'
createdAt: 2025-09-15T14:12:38.155Z
updatedAt: 2026-09-04T20:05:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-shopping-assistant
locale: pt
---

O Shopping Assistant é o canal de web chat do VTEX CX Platform que permite atender os visitantes do seu site com um agente de IA. Você personaliza o visual e o comportamento do widget e, em seguida, instala o chat no site com um script gerado pela plataforma.

Este tutorial explica como acessar o canal, personalizar a aparência, configurar as preferências e instalar o script no site.

## Instalar o aplicativo

Para instalar o aplicativo na sua loja, siga os passos a seguir:

1. No projeto desejado, acesse **Configurações > Canais**.
2. Clique na aba **Descoberta**.
3. Digite **Shopping Assistant** no campo de busca ou procure pelo card do aplicativo.
4. Clique no botão de <i class="fas fa-plus" aria-hidden="true"></i> para adicionar o aplicativo ao seu projeto.

## Acessar o aplicativo

Para abrir as configurações do Shopping Assistant, siga os passos a seguir:

1. No projeto, acesse **Configurações > Canais**.
2. Clique na aba **Meus aplicativos**.
3. Na seção **Aplicativos instalados**, clique no card **Shopping Assistant** que deseja configurar.

Ao clicar no card, a janela de configuração do **Shopping Assistant** é aberta, com as abas **Aparência**, **Preferências** e **Código Script**. Uma prévia do widget é exibida para você conferir o resultado das alterações.

## Personalizar o aplicativo

### Aparência

A aba **Aparência** define o visual do widget de chat. Nela, você pode configurar os seguintes campos:

- **Título do chat**: nome exibido no cabeçalho do widget.
  - Ao clicar em <i class="fas fa-plus" aria-hidden="true"></i>`Mais`, você pode adicionar campos opcionais:
    - **Subtítulo do chat:** texto que fica abaixo do título.
    - **Mensagem de notificação do chat:** mensagem que aparece na notificação do chatbot.
    - **Texto do placeholder:** placeholder do campo de mensagem. 
- **Cor principal:** cor principal do chat.
- **Imagem do avatar:** avatar do agente no chat.
- **CSS customizado:** envie um arquivo CSS para aplicar estilos próprios ao widget.

### Preferências

A aba **Preferências** define o comportamento do chat. Nela, você pode configurar os seguintes campos:

| Seção | Funcionalidade | Descrição |
|---|---|---|
| **Comportamento** | Modo incorporado | Ative esse botão para exibir o chat incorporado na página da loja. Se preferir o chat como uma janela flutuante, desligue o botão. |
| **Comportamento** | Mostrar botão de tela cheia | Exibe um botão que permite ao usuário expandir o chat para tela cheia. |
| **Comportamento** | Iniciar chat em tela cheia | Abre o chat diretamente em tela cheia quando o usuário inicia uma conversa. |
| **Comportamento** | Indicador de mensagens não lidas | Exibe um indicador visual quando há mensagens não lidas pelo usuário. |
| **Comportamento** | Usar otimização de conexão | Ative esse botão para conectar o chat com o Socket apenas quando o usuário abre um chat ou quando a última mensagem do usuário tiver sido enviada há menos de 24 horas (tempo de inicialização automática do Socket). Se preferir que o chat conecte-se automaticamente com o Socket, desligue o botão. |
| **Varejo** | Perguntas sugeridas por IA (Novo) | Exibe botões de interação rápida na página do produto. A IA analisa o SKU para sugerir automaticamente as perguntas mais relevantes dos clientes. |
| **Varejo** | Permitir que o Shopping Assistant redirecione automaticamente a página **(Beta)** | Permite que o Shopping Assistant redirecione automaticamente o usuário para outra página quando um link é enviado durante a conversa. Esta funcionalidade está atualmente em beta e pode mudar. |
| **Varejo** | Adicionar ao carrinho da loja **(Beta)** | Permite que os usuários adicionem produtos sugeridos pela IA diretamente ao carrinho nativo da loja, em vez de usar um carrinho gerenciado pelo Shopping Assistant. Recomendado para lojas com carrinho ou fluxos de checkout personalizados. Esta funcionalidade está atualmente em beta e pode mudar. |
| **Mídia** | Mostrar botão de gravação de voz | Exibe um botão que permite ao usuário enviar mensagens de voz no chat. |
| **Mídia** | Mostrar botão de câmera | Exibe um botão que permite ao usuário enviar imagens no chat. |
| **Histórico de chats e inatividade** | Manter histórico de mensagens | Preserva o histórico de mensagens da conversa entre sessões do usuário. |
| **Histórico de chats e inatividade** | Reiniciar conversa por inatividade do contato | Reinicia a conversa automaticamente após um período de inatividade do usuário. Quando habilitado, você pode delimitar esse período de inatividade no campo seguinte, no formato HH:mm. |
| **Histórico de chats e inatividade** | Tempo entre as mensagens | Define o intervalo entre mensagens enviadas pelo agente. |

## Código Script

A aba **Código Script** gera o código para instalar o Shopping Assistant no site. Para instalar o chat, siga os passos a seguir:

1. Após finalizar as configurações do Shopping Assistant, clique em `Salvar alteraçõe`. Isso gera o código script com suas preferências salvas. 
2. Clique na aba **Código Script**.
3. Copie o código exibido ou clique em `Baixar script`.
4. No código do seu site, cole esse script acima da última tag `</body>`.
