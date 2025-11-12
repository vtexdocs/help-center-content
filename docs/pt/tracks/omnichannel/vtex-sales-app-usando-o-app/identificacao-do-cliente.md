---
title: 'Identificação do cliente'
id: 2l56Bc2V1Xjv93JddsdEMi
status: PUBLISHED
createdAt: 2021-08-05T13:45:29.981Z
updatedAt: 2023-05-31T15:56:36.034Z
publishedAt: 2023-05-31T15:56:36.034Z
firstPublishedAt: 2021-08-05T14:45:44.463Z
contentType: trackArticle
productTeam: Shopping
slugEN: customer-identification
locale: pt
trackId: 4BYzQIwyOHvnmnCYQgLzdr
trackSlugEN: vtex-sales-app-using-the-app
order: 5
---

Ao fazer o login, o vendedor é levado diretamente para a tela de identificação do cliente.

O VTEX Sales App é um aplicativo que auxilia os vendedores a realizarem vendas na loja física. E ter informações sobre o cliente desde a interação inicial é um recurso valioso, especialmente considerando que o contexto mostrado pelo VTEX Sales App diz respeito não somente às interações do cliente com aquela loja específica, mas com todos os canais de venda da marca.

O cliente pode ser identificado por um destes métodos:
- Email
- CPF (no Brasil)
- QR Code

Você pode [configurar quais métodos de identificação deseja habilitar](https://developers.vtex.com/vtex-rest-api/docs/customize-instore-login-options), e em que ordem devem aparecer.

No exemplo da imagem abaixo, estão habilitados Email e CPF.

![31. VTEX Sales App - Product Overview - 2 - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/instore-usando-o-app/identificacao-do-cliente_1.PNG)

Basta inserir um desses dados no campo e clicar em `Confirmar`.

Alternativamente, caso você tenha habilitado Usuário Anônimo, é possível avançar sem identificar o cliente. Para isso, basta clicar em `Continuar sem identificação`.

> ℹ️ Embora seja possível atender clientes sem identificá-los, recomendamos sempre fazer a identificação, uma vez que isso dá ao vendedor uma série de informações contextuais que aumentam as chances de conversão.

