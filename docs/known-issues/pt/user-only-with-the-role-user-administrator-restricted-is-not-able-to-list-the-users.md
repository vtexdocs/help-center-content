---
title: 'O usuário apenas com a função "User Administrator - RESTRICTED" não consegue listar os usuários'
id: ifXUAzgJ1xr8ezhqKpRUI
status: PUBLISHED
createdAt: 2023-11-08T18:07:14.508Z
updatedAt: 2023-11-08T18:07:15.030Z
publishedAt: 2023-11-08T18:07:15.030Z
firstPublishedAt: 2023-11-08T18:07:15.030Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: o-usuario-apenas-com-a-funcao-user-administrator-restricted-nao-consegue-listar-os-usuarios
locale: pt
kiStatus: Backlog
internalReference: 932666
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se um usuário administrador tiver apenas a função "**User Administrator - RESTRICTED**" (recurso "**Save user**"), a lista de usuários não estará disponível e não será possível fazer as edições ou exclusões necessárias.

## Simulação



- Tenha um usuário com apenas a função "**User Administrator - RESTRICTED**";
- Acesse a página "**Admin Users**" com esse usuário (por exemplo, https://my-account-here.myvtex.com/admin/users);
- Você pode notar que a lista está vazia, mesmo com usuários já registrados ("_No users found :: The user search returned an empty list. Tente remover qualquer filtro de pesquisa ou adicionar novos usuários a essa conta."):
 ![](https://vtexhelp.zendesk.com/attachments/token/fZ2k11R3xPrhNv5yHVkv9alam/?name=image.png)

- É possível adicionar o usuário desejado e incluir as funções necessárias, mas não podemos acessar os usuários para adicionar/editar/remover funções ou mesmo excluir o usuário por meio do registro, mas somente por meio da função

## Workaround


Você pode adicionar ou remover o usuário da função acessando a função diretamente.

Você também pode criar uma função personalizada somente com os recursos "**Get paged roles**" e "**Get paged users**":
 ![](https://vtexhelp.zendesk.com/attachments/token/yjNfjlnfFaBrXZE6gx97OaxHy/?name=image.png)
Em seguida, adicione-a ao usuário que pode salvar usuários.





