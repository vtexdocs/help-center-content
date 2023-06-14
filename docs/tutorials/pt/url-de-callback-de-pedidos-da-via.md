---
title: 'URL de Callback de Pedidos da Via'
id: Ku1ksxfDIiCKj6qSUrwZ1
status: PUBLISHED
createdAt: 2021-09-30T20:52:56.898Z
updatedAt: 2021-10-01T17:39:20.744Z
publishedAt: 2021-10-01T17:39:20.744Z
firstPublishedAt: 2021-09-30T23:00:08.773Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: url-de-callback-de-pedidos-da-via
locale: pt
legacySlug: url-de-callback-de-pedidos-da-via
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Para reduzir o tempo na integração de novos pedidos da Via na plataforma VTEX, a Via oferece uma API chamada URL [Callback de Pedido](https://suportemarketplace.viavarejo.com.br/lojista/artigo/?kbid=KA-01266&title=Cadastrar/alterar%20URL%20de%20Callback%20de%20Pedido). Ao ativar essa API, todos os novos pedidos vindos da Via serão notificados com mais rapidez na plataforma VTEX.

Caso ela não seja configurada, o tempo de integração de novos pedidos é mais lento, podendo variar entre minutos ou até horas. 

Para ativar a API de importação de pedidos , é necessário entrar em contato com o [Suporte da Via](https://suportemarketplace.viavarejo.com.br/lojista/) enviando as seguintes informações:

- **Tipo:** selecione a opção `Pedido`
- **Solicitação:** selecione a opção `Cadastrar Alterar URL de Callback de Pedido`

Em seguida, preencha o formulário com as seguintes informações:

- **Descrição:** Insira URL da API, substituindo o `{{accountname}}` pelo nome da sua loja.

`https://{{accountName}}.vtexcommercestable.com.br/api/viavarejointegration/pub/order/notification`

- **Qual a sua integradora:** preencha com VTEX
- **Qual o access token:** preencha com a chave de acesso usada na etapa de [Cadastro da integração da Via](https://help.vtex.com/pt/tracks/configurar-integracao-da-via-varejo--3E9XylGaJ2wqwISGyw4GuY/1okse2MybWk04AQoueu88O).
- **Informe a URL de callback:** insira novamente a URL da API, substituindo o `{{accountname}}` pelo nome da sua loja.

Após enviar o formulário para ativação da URL de Callback de Pedidos, você receberá em até 2 dias úteis a confirmação de que ela foi cadastrada com sucesso.

