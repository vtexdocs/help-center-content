---
title: 'Como funciona o Message Center'
id: 5uvq01BDu6nnDEJpseR1aH
status: CHANGED
createdAt: 2020-01-10T12:36:32.085Z
updatedAt: 2020-11-27T19:40:22.331Z
publishedAt: 2020-02-13T14:58:16.503Z
firstPublishedAt: 2020-01-13T14:38:21.495Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: how-message-center-works
locale: pt
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugEN: e-mails-transacionais
---

O Message Center é o módulo responsável pelas configurações e envio dos e-mails transacionais. Estes são os e-mails automáticos enviados pela loja para o cliente sempre que eventos importantes do fluxo do cliente na loja são concluídos, tais como o cadastro na loja, a confirmação de pagamento e o envio dos produtos.  

Esse módulo é dividido em duas seções: 
- __Templates__: aqui você pode editar o conteúdo dos e-mails. 
- __Remetentes__: aqui é possível alterar as informações dos remetentes desses e-mails.

### Templates

Como mencionamos anteriormente, os templates são os conteúdos dos e-mails transacionais em si. 

Eles estão categorizados de acordo com o módulo da plataforma VTEX ao qual estão relacionadas.

Por exemplo, caso um cliente opte por cancelar o seu pedido, o sistema enviará uma mensagem para esse destinatário informando o status da compra. Visto que essa transação está relacionada ao módulo de Pagamentos, esse template será agrupado junto aos demais templates do módulo de Pagamentos.

Cada template contém as seguintes configurações a serem definidas pela loja: 
- Título do e-mail.
- Opção de ativar ou não o envio do e-mail.
- Opção de usar um remetente padrão.
- Código HTML.
- Remetente.
- Destinatário, com possibilidade de especificar Cópia (CC) e Cópia Oculta (CCO).
- Prévia do e-mail.

Toda loja VTEX já nasce com uma série de templates pré-configurados, bastando customizar seu conteúdo e layout. Além disso é possível criar novos templates.

Ao entrar no Message Center e clicar em __Templates__, você encontra a lista de todos os templates da sua loja. Cada card representa um template diferente.

Vamos entender as informações presentes nesses cards.

![Emails 1 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/e-mails-transacionais/como-funciona-o-message-center_1.png)

- Nome do template para identificação interna. Este *não* é o assunto do e-mail.
- Aplicação ou módulo ao qual o template pertence, sinalizado em verde.
- Label indicando se a mensagem é __padrão__ - ou seja, fornecida pela VTEX - ou se foi __personalizada__ pela loja.
- Descrição sobre a funcionalidade do template, para uso interno.
- Remetente ao qual o template está associado.

Para buscar templates, você pode usar filtros por aplicação (módulo) e tipo (mensagem padrão ou personalizada).

![Emails 1 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/e-mails-transacionais/como-funciona-o-message-center_2.png)

### Remetentes

Aqui, o usuário confere e edita as informações - nome, e-mail e dados do servidor de envio (SMTP) - dos remetentes dos e-mails transacionais que serão enviados pelo sistema.

Estas são as informações apresentadas nos cards dos remetentes:

![Emails 1 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/e-mails-transacionais/como-funciona-o-message-center_3.png)

- Nome do remetente, para identificação interna.
- Tipo de servidor SMTP, que pode ser da VTEX ou da própria loja.
- Label indicando qual é o remetente definido como __padrão__ para a loja.
- Endereço de e-mail usado no envio.
- Botão para executar um teste de envio de mensagem.
- Ícone indicando se o remetente passou ou não no teste de envio (não exibido se nenhum teste recente foi realizado). Mostra um check verde se passou e um "x" vermelho se não passou.

Vale ressaltar que é imprescindível personalizar o remetente. Assim, seus clientes  receberão as mensagens com o nome e o endereço de e-mail da sua empresa. Para saber mais sobre esse assunto, confira o [artigo sobre como editar o servidor de e-mails VTEX](https://help.vtex.com/pt/tutorial/personalizando-o-smtp-da-vtex).

Até que sua loja faça essa configuração, os e-mails serão enviados com o remetente padrão “noreply@vtexcommerce.com.br”.
