---
title: 'Comentário O campo vtexcrm não está mostrando seu conteúdo'
id: 2jI4W9GOzuxyWbHApDVtI5
status: PUBLISHED
createdAt: 2022-04-25T14:19:28.685Z
updatedAt: 2022-11-25T22:12:58.716Z
publishedAt: 2022-11-25T22:12:58.716Z
firstPublishedAt: 2022-04-25T14:19:29.153Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: comment-vtexcrm-field-is-not-showing-its-content
locale: pt
kiStatus: Backlog
internalReference: 565919
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, ao salvar dados no campo "Comentar" em um formulário de Dados Mestres, os comentários inseridos não estão sendo mostrados ao salvar e refrescar a página.









## Simulação





1. Ir para mystore.vtexcrm.com.br
2. Abra um documento CL (qualquer um serve)
3. Abra o campo de comentários


 ![](https://vtexhelp.zendesk.com/attachments/token/tUX7c40L6Mucgl7J60Ba4Ysn5/?name=image.png)


4. Tente inserir qualquer dado nele e salvar
5. Atualize a página, nada estará lá, embora a API esteja mostrando conteúdo.








## Workaround



Criar um novo campo para esta entidade de dados como um tipo de texto e nomeá-lo Comente.

Então insira-o no formulário e você terá um campo de comentário "clone" que é funcional.

