---
title: 'Usuário recebe mensagem de erro no primeiro registro em Minha conta'
id: 1eFTt4iIxZsBPxd3UQ436r
status: PUBLISHED
createdAt: 2022-07-21T15:40:25.508Z
updatedAt: 2022-11-25T22:01:57.125Z
publishedAt: 2022-11-25T22:01:57.125Z
firstPublishedAt: 2022-07-21T15:40:26.082Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: usuario-recebe-mensagem-de-erro-no-primeiro-registro-em-minha-conta
locale: pt
kiStatus: Backlog
internalReference: 619909
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um novo usuário se registra em **Minha conta***, a página executa duas solicitações, uma enviando os dados e a outra consultando o `ide do usuário` desse usuário, mas nesta segunda solicitação o retorno é 404 não encontrado, e a página exibe uma mensagem de erro para o usuário.



## Simulação


** **

1. Entrar na casa
2. Acessar minha conta com um usuário não registrado.
3. Entrar
4. Neste momento, a IU exibirá uma mensagem de erro "Houve um erro na comunicação com o sistema, tente recarregar a página".
5. No console, será possível ver um _**graphql**_ pedido de retorno do sistema de perfis 404.



## Workaround


Não há nenhuma solução para evitar o erro.
OBSERVAÇÃO; no entanto, ao recarregar a página, o fluxo geralmente segue.

