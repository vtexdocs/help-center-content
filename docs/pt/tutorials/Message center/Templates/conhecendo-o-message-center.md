---
title: 'Como funciona a Central de mensagens'
id: tutorials_84
status: PUBLISHED
createdAt: 2017-04-27T22:20:04.874Z
updatedAt: 2025-01-24T15:17:44.604Z
publishedAt: 2025-01-24T15:17:44.604Z
firstPublishedAt: 2017-04-27T23:00:42.423Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-message-center
locale: pt
legacySlug: conhecendo-o-message-center
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

**Central de mensagens** é o módulo responsável pelas configurações e envio dos e-mails transacionais na VTEX. Nele é possível editar o conteúdo (template) das mensagens e o remetente.

## Templates

Os templates são as mensagens em si. As mensagens estão categorizadas conforme o módulo responsável e destinam-se a um conteúdo específico. Dentro de cada um temos o título/assunto do e-mail, o código HTML, o remetente que vai fazer o envio e o destinatário, com possibilidades de especificar “CC” e “CCO”.

<div class="alert alert-warning">
  <p>Por questões de segurança, nem todos templates podem ser enviados com “CC” e “CCO”.</p>
</div>

Entenda as informações que cada _card_ do template traz:

![message center - card templates](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Message%20center/Templates/conhecendo-o-message-center_1.png)

- Nome do template, para identificação interna (não se trata do assunto do e-mail enviado).
- Aplicação/módulo ao qual ele pertence (em verde).
- Indica se a mensagem é a padrão, fornecida pela VTEX, ou se foi alterada pela loja.
- Breve descritivo sobre a função do template.
- Remetente ao qual o template está associado.

Para facilitar a navegação a interface disponibiliza, além do campo de busca por texto livre, filtros por aplicações (módulos) e tipo (mensagem padrão ou personalizada/alterada).

![busca-templates-central-mensagens pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Message%20center/Templates/conhecendo-o-message-center_2.png)

Depois de entender o básico sobre os templates, você já pode ver como editá-los. Esse passo não é obrigatório, pois a VTEX fornece um layout básico e responsivo para todas as mensagens, com os dados necessários para uma boa comunicação com seu cliente, mas é natural que as lojas os adequem ao padrão de comunicação já usado para a marca.

## Remetentes

O remetente é quem envia a mensagem, mas neste caso trazendo também o cadastro do nome e e-mail que será exibido ao cliente, e configurações do servidor de envio (SMTP).

![message center - card remetentes](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Message%20center/Templates/conhecendo-o-message-center_3.png)

- Nome do remetente, para identificação interna.
- Tipo de servidor SMTP, que pode ser da VTEX ou da própria loja.
- Indica qual é o remetente definido como padrão para a loja.
- Endereço de e-mail usado no envio.
- Botão para executar um teste de envio de mensagem.
- Ícone que indica se o remetente passou ou não no teste de envio (não exibido se nenhum teste recente foi realizado).

É importante que você personalize seu remetente para que o cliente receba as mensagens com o nome e e-mail da sua empresa, caso contrário os e-mails recebidos serão em nome de “noreply@vtexcommerce.com.br”. Para tal, veja [como alterar o servidor SMTP](http://help.vtex.com/pt/tutorial/personalizando-o-smtp-da-vtex) de sua loja.
