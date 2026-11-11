---
title: 'Configurar alertas de volta ao estoque'
createdAt: 2026-11-11T12:00:00.000Z
updatedAt: 2026-11-11T21:50:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-back-in-stock-alerts
locale: pt
seeAlso:
  - "/pt/docs/tutorials/shopping-assistant-perguntas-sugeridas"
  - "/pt/docs/tutorials/configurar-a-opcao-avise-me"
---

Os **alertas de volta ao estoque** permitem que os compradores solicitem um aviso por WhatsApp quando um item em falta estiver disponível novamente. Os compradores se inscrevem pelo Shopping Assistant informando nome e número de WhatsApp, sem precisar de uma conta na loja. Quando o SKU estiver ativo e disponível novamente, o template **Back in stock** é enviado ao número informado.

> ℹ️ As páginas de produtos em falta também permitem que os compradores explorem produtos semelhantes com o **Shopping Assistant**. Isso pode iniciar uma conversa com o agente e ajudar o comprador a encontrar outro produto que atenda às suas necessidades, em vez de sair da página sem encontrar outra opção.

> ⚠️ O alerta por WhatsApp é independente da opção de email [Avise-me](https://help.vtex.com/pt/docs/tutorials/configurar-a-opcao-avise-me). As duas opções podem aparecer na mesma página de produto, mas a inscrição por email não inscreve o comprador nos alertas de WhatsApp.

## Antes de começar

Antes de configurar o alerta, verifique se:
- Sua loja usa **FastStore** ou **Store Framework**, e o **Shopping Assistant** está ativo e configurado. O alerta aparece somente quando o Shopping Assistant está configurado.
    - No **FastStore**, adicione o componente **Shopping Assistant** em **Global Sections** no [CMS](https://help.vtex.com/pt/docs/tutorials/cms-visao-geral). Esse componente adiciona o script `agentic-cx` à loja. Depois, ative o **Shopping Assistant** no aplicativo VTEX CX.
- O WhatsApp está conectado ao aplicativo VTEX CX.
- A automação **WhatsApp Back in Stock** está conectada.
- A Meta aprovou o template de WhatsApp **Back in stock**. Aguarde até que o status do template mude para **Approved** antes de ativar o alerta, pois não é possível enviar mensagens enquanto o template estiver com o status **Pending** ou **Rejected**.

## Exibir o alerta nas páginas de produto

Para exibir a janela de inscrição nas páginas de produtos em falta, siga estas etapas:

1. No Admin VTEX, acesse **Storefront > VTEX CX Platform > CX Dashboard**.
2. Acesse **Settings > Shopping Assistant**.
3. Em **Back in stock alert**, ative **Show on out-of-stock product pages**.

O status de **Back in stock alert** muda para **Active**, e os compradores podem se inscrever nas páginas de produto elegíveis.

Para parar de exibir a janela, desative **Show on out-of-stock product pages**.

> ⚠️ Desconectar a automação **WhatsApp Back in Stock** também desativa o alerta.

## Editar o template do WhatsApp

O template **Back in stock** define a mensagem de WhatsApp que os compradores recebem quando um produto fica disponível novamente. Você pode personalizar o conteúdo, mas não pode alterar o nome do template.

Para editar o template, siga estas etapas:

1. No aplicativo VTEX CX, acesse **Settings > WhatsApp > WhatsApp Back in Stock**.
2. Clique em `View details`.
3. No template **Back in stock**, clique em `Edit template`.
4. Atualize qualquer um dos seguintes elementos do template:
    - Idioma da mensagem.
    - Texto da mensagem.
    - Mídia do cabeçalho.
    - Rodapé.
    - Rótulos dos botões. O template inclui um botão que abre o produto e outro que interrompe mensagens promocionais.
    - URL do botão do produto. A URL contém uma seção editável seguida pela variável fixa `{{1}}`.
5. Avalie as variáveis listadas no editor. Cada variável inclui seu significado e um texto alternativo.
6. Mantenha a condição de início preenchida. Essa condição determina quando a mensagem é enviada.
7. Clique em `Salvar`.

> ⚠️ Mantenha o texto da mensagem com até 1.024 caracteres, o rodapé com até 60 caracteres e cada rótulo de botão com até 25 caracteres. A URL do botão não pode conter espaços. O editor não valida esses limites antes de salvar, mas a Meta rejeita templates que os excedam.

O texto da mensagem é obrigatório, e o botão `Salvar` fica indisponível quando esse campo está vazio. Não é possível adicionar mais botões, pois `Add element` não está disponível para esse template.

Depois de salvar as alterações, o template é enviado para avaliação da Meta, o que pode levar até 24 horas. Durante esse período, o template tem o status **Pending**. Quando a avaliação for concluída, o status muda para **Approved** ou **Rejected**. Se a Meta rejeitar o template, a lista de templates exibe o status **Rejected** sem o motivo.

## Comportamento do alerta

Em uma página de produto em falta, o Shopping Assistant exibe a janela **Get notified when it's back in stock**. A janela explica que o comprador receberá uma mensagem de WhatsApp quando o produto estiver disponível. A inscrição não inicia o processo de checkout.

Depois de informar o **Name** e o **WhatsApp number**, o comprador pode:

- Clicar em `Notify me` para se inscrever no alerta.
- Clicar em `Not now` para fechar a janela sem se inscrever.

> ⚠️ Os compradores recebem um alerta somente depois de enviar o formulário de inscrição. Ter uma conta na loja ou um número de WhatsApp salvo no perfil não os inscreve automaticamente.

Cada número de telefone recebe um alerta para cada inscrição de produto. Enviar o formulário novamente para o mesmo produto não cria outro alerta, enquanto se inscrever em um produto diferente cria um alerta separado para esse produto.
