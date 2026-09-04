---
title: 'Configurar o Shopping Assistant'
createdAt: 2025-09-15T14:12:38.155Z
updatedAt: 2026-09-04T20:05:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-shopping-assistant
locale: pt
---

O canal de Web Chat da VTEX CX Platform, identificado na plataforma como **Shopping Assistant**, permite atender os visitantes do seu site com um agente de IA. Você personaliza o visual e o comportamento do widget e, em seguida, instala o chat no site com um script gerado pela plataforma.

Este tutorial explica como acessar o canal, personalizar a aparência, configurar as preferências e instalar o script no site.

## Acessar o canal

Para abrir as configurações do Shopping Assistant, siga os passos a seguir:

1. No projeto, acesse **Configurações > Canais**.
2. Clique na aba **Meus aplicativos**.
3. Na seção **Aplicativos configurados**, clique no card **Shopping Assistant** que deseja configurar.

> ℹ️ Se o Shopping Assistant ainda não estiver em **Aplicativos configurados**, use a aba **Descoberta** para adicioná-lo ao projeto.

Ao clicar no card, a janela de configuração do **Shopping Assistant** é aberta, com as abas **Aparência**, **Preferências** e **Código Script**. Uma prévia do widget é exibida para você conferir o resultado das alterações.

## Personalizar a aparência

A aba **Aparência** define o visual do widget de chat. Para personalizar a aparência, siga os passos a seguir:

1. Clique na aba **Aparência**.
2. Em **Título do chat**, insira o nome exibido no cabeçalho do widget.
3. Em **Texto do placeholder**, insira o texto exibido no campo de mensagem.
4. (Opcional) Clique em `+ Mais` para ver outras opções de aparência.
5. Em **Personalização**, configure os seguintes campos:
   - **Cor principal:** cor do widget.
   - **Imagem do avatar:** envie um arquivo PNG, JPG ou JPEG para o avatar do agente.
   - **CSS customizado:** envie um arquivo CSS para aplicar estilos próprios ao widget.
6. Clique em `Salvar alterações`.

## Configurar as preferências

A aba **Preferências** define o comportamento do chat. Para configurar as preferências, siga os passos a seguir:

1. Clique na aba **Preferências**.
2. Ative ou desative as opções de cada seção, conforme a necessidade da loja.
3. Clique em `Salvar alterações`.

As opções estão agrupadas nas seções a seguir.

### Comportamento

A seção **Comportamento** reúne as opções de exibição do widget:

- **Modo incorporado**
- **Mostrar botão de tela cheia**
- **Iniciar chat em tela cheia**
- **Indicador de mensagens não lidas**
- **Usar otimização da conexão**

### Varejo

A seção **Varejo** reúne as opções específicas para lojas. Confira as opções disponíveis:

| Opção | Descrição |
| --- | --- |
| **Perguntas sugeridas por IA (Novo)** | Exibe botões de interação rápida na página do produto. A IA analisa o SKU para sugerir automaticamente as perguntas mais relevantes para os clientes. |
| **Permitir que o Shopping Assistant redirecione automaticamente a página (Beta)** | Quando habilitado, o Shopping Assistant pode redirecionar automaticamente o usuário para outra página quando um link é enviado durante a conversa. |
| **Adicionar ao carrinho da loja (Beta)** | Os compradores podem adicionar produtos sugeridos pela IA diretamente ao carrinho nativo da loja, em vez de usar um carrinho gerenciado pelo Shopping Assistant. Recomendado para lojas com fluxos de carrinho ou checkout personalizados. |

> ⚠️ As opções marcadas como **Beta** podem sofrer alterações.

### Mídia

A seção **Mídia** controla os botões de captura no widget:

- **Mostrar botão de gravação de voz**
- **Mostrar botão de câmera**

### Histórico de chats e inatividade

A seção **Histórico de chats e inatividade** define o que acontece com a conversa ao longo do tempo:

- **Manter histórico de mensagens**
- **Reiniciar conversa por inatividade do contato**

Em **Tempo entre as mensagens**, escolha o **Intervalo entre mensagens do agente**.

## Instalar o script no site

A aba **Código Script** gera o código para instalar o Shopping Assistant no site. Para instalar o chat, siga os passos a seguir:

1. Clique na aba **Código Script**.
2. Copie o código exibido.
3. Cole o código acima da última tag `</body>` do seu site.

(Opcional) Clique em `Baixar script` para baixar o arquivo do script.

> ℹ️ Use o código gerado para o seu projeto. Não reutilize o script de outro canal ou de outra loja.
