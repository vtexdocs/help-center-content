---
title: 'Criar ou editar template de e-mail transacional'
id: 335JZKUYgvYlGOJgvJYxRO
status: PUBLISHED
createdAt: 2020-01-10T13:13:48.069Z
updatedAt: 2024-06-11T19:54:28.554Z
publishedAt: 2024-06-11T19:54:28.554Z
firstPublishedAt: 2020-01-13T14:38:32.506Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: how-to-create-and-edit-transactional-email-templates
locale: pt
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugPT: e-mails-transacionais
---

### Editar um template de e-mail

Para editar um template de e-mail transacional, siga os passos abaixo.

1. No menu lateral do Admin, acesse a Central de Mensagens e clique em __Templates__.
2. Busque o template desejado e clique no card correspondente.
3. Altere o título do e-mail e o destinatário (os valores entre chaves duplas são variáveis; vamos aprender no próximo artigo como lidar com elas). Você pode incluir destinatários em cópia (`CC`) e cópia oculta (`CCO`).
4. Deixe a flag __Usar o remetente padrão__ para usar o endereço de e-mail cadastrado como padrão, conforme explicado no artigo anterior desta trilha.

>ℹ️ A lista de templates está disponível no artigo [Templates de emails transacionais referentes ao pedido](https://help.vtex.com/pt/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my).

É no campo __HTML__ que você encontra o código HTML do template. Você pode editar o código no próprio campo ou copiá-lo para o editor de sua preferência, editar e depois colar novamente no campo do template.

O __preview__ renderizado por esse código é mostrado no box logo abaixo. Você pode selecionar três tamanhos de tela diferentes para testar a responsividade do código.

O campo __JSON Data__ mostra um *exemplo* de objeto JSON contendo informações referentes ao assunto do e-mail. As chaves desse objeto podem ser usadas como variáveis no código HTML do template. Vamos aprender a fazer isso no próximo artigo.

>⚠️ Atenção: para customizar o layout do e-mail, você deve inserir **código CSS inline**. <u>Não</u> insira o CSS no head do template, pois e-mails não lidam bem com isso.

Ao final, clique no botão __Salvar__.

### Criar um template de e-mail

O método para criar um template de e-mail transacional é similar ao que você usou para editar um template. Basta seguir os passos abaixo:

1. No menu lateral do Admin, acesse a Central de Mensagens e clique em __Templates__.
2. Clique no botão __Novo template__.
3. Marque a flag __Ativar envio de e-mail__.
4. Preencha os dados de Título, Remetente e Destinatário.
5. Insira o código do template no campo __HTML__.
6. Teste a visualização no __preview__.
7. Clique em __Salvar__.
