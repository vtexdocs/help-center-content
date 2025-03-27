---
title: 'Verificando o usuário que está autenticado'
id: 4vLALC0yrsJydfaY56Zshq
status: ARCHIVED
createdAt: 2019-01-23T19:19:30.635Z
updatedAt: 2022-08-04T22:36:12.402Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:29:51.891Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: checking-which-user-is-currently-authenticated
locale: pt
legacySlug: verificando-o-usuario-que-esta-autenticado
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Quando um usuário faz login na loja são criados cookies que armazenam o token de autorização. A partir desse momento, qualquer requisição aos servidores da VTEX irão carregar estes cookies automaticamente, identificando o usuário que está fazendo determinada ação.

Em diversos contextos que não sejam requisições às nossas APIs, pode ser necessário verificar se o usuário está logado ou mesmo obter algo que o identifique, como seu e-mail ou ID, e os cookies também permitem este tipo de ação.

Porém, note que estes cookies possuem as opções "HTTP Only" e "Secure" ativas, o que significa que eles não são acessíveis por nenhum método de JavaScript, e que serão enviados somente em requisições HTTP seguras (ou seja, por trás do protocolo HTTPS).

Dessa forma, a verificação do usuário que está autenticado deve ser através da seguinte API:

- método: `GET`
- rota: `/api/vtexid/pub/authenticated/user`

Exemplo: `GET https://www.site.com/api/vtexid/pub/authenticated/user`

A resposta seguirá este padrão:
```
{
    "userId": "88888888-8888-8888-8888-888888888888",
    "user": "user@mail.com",
    "userType": "F"
}
```

O `userId` é o ID do usuário dentro dos serviços da VTEX, o `user` sempre será seu e-mail, e o `userType` é de uso interno.

Caso o usuário não esteja autenticado, a resposta desta API será vazia (_body response_ = `null`), com um status HTTP 200 (OK) ou 401 (Unauthorized).
