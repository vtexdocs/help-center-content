---
title: 'Adicionando campos de criação de ticket no Zendesk'
id: 7F2pd5FE5KWPQbgcGaWVSC
status: PUBLISHED
createdAt: 2025-09-15T14:25:44.625Z
updatedAt: 2025-10-03T14:20:32.927Z
publishedAt: 2025-10-03T14:20:32.927Z
firstPublishedAt: 2025-10-03T14:20:32.927Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-ticket-creation-fields-in-zendesk
legacySlug: adicionando-campos-de-criacao-de-ticket-no-zendesk
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Na criação de ticket no Zendesk podemos enviar algumas informações extras via body sobre o mesmo. Agora é possível adicionarmos **prioridade, assunto, descrição, campos personalizados, tags** e **message**.

### Campos:

- **Prioridade**: Existem quatro valores para prioridade: **Low, Normal, High** e **Urgent**. Por padrão, todos esses quatro valores estão disponíveis, mas você pode permitir que apenas os valores Normal e Alto apareçam. Para fazer isso, edite o campo de prioridade e altere a configuração em Valores de campo. Prioridade não é um campo obrigatório, portanto, nem sempre é necessário selecionar um valor.
- **Assunto**: O campo Assunto é obrigatório e pode ter até 150 caracteres. Se o título do ticket não aparecer no assunto do ticket, seu campo Assunto pode não estar visível para os usuários finais.
- **Descrição**: O campo Descrição é obrigatório. Este é o texto da solicitação de suporte. A descrição se torna o primeiro comentário no ticket.
- **Campos personalizados**: Os campos de ticket personalizados são normalmente usados ​​para coletar mais informações sobre o problema de suporte, produto ou serviço. Você pode adicionar campos personalizados aos seus tickets para agentes e também adicioná\-los ao formulário Enviar uma solicitação da Central de Ajuda se quiser que os usuários finais vejam o campo personalizado. Os campos de ticket personalizados podem ser obrigatórios ou opcionais. Para utilizar seus campos personalizados é necessário criá\-los na Zendesk. Siga os passos abaixo para criar seus campos:

1. Primeiramente, vá na sua Central de Administração, você a encontrará clicando no ícone superior direito

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/adicionando-campos-de-criacao-de-ticket-no-zendesk_1.png)

2. Agora no menu da esquerda clique em Objetos e regras > Campos.
3. No botão azul no canto superior direito, clique em Adicionar campo.
4. Selecione o tipo de campo que deseja criar, existem diversas opções se atente apenas a enviar o valor corretamente de acordo com a que escolher.
5. Após isto, adicione Nome de exibição do campo, Descrição caso queira, se o campo for obrigatório marque a caixa de seleção Obrigatório para resolver um ticket. Escolha a permissão adequada, geralmente a segunda opção, e clique em Salvar no canto inferior direito.
6. Pronto, agora você já possui um novo campo personalizado, irá precisar apenas do ID do campo dele, esse ID fica disponível ao lado do nome de exibição de seu campo criado.
- **Tags**: As tags são usadas para adicionar informações adicionais aos tickets, que podem ser usadas no fluxo de trabalho do ticket. São enviadas como uma lista de palavras, onde cada palavra é uma tag.
- **Message**: Mensagem inicial do Ticket caso seu ticket não possua descrição.

No JSON abaixo está um exemplo de como você deverá enviar no body do card de Open ticket da plataforma Weni:

```
{""message"" : ""Cookies"", ""priority"": ""high"", ""subject"": ""Where are my cookies?"", ""description"": ""I want to know where is my cookie."", ""custom_fields"": [{""id"":""11457109235981"",""value"":""field01""}], ""tags"": [""tag01"",""tag02""]}
```
