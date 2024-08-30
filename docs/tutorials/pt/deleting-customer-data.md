---
title: 'Exclusão de dados de clientes'
id: 1R9Fn7A06Ifj4R9YD4JTKU
status: PUBLISHED
createdAt: 2022-04-14T13:28:53.209Z
updatedAt: 2022-10-20T17:56:13.393Z
publishedAt: 2022-10-20T17:56:13.393Z
firstPublishedAt: 2022-04-14T13:50:08.688Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: exclusao-de-dados-de-clientes
locale: pt
legacySlug: exclusao-de-dados-de-clientes
subcategory: 6uJgdHqWf1Mo0rUfgxseTn
---

De acordo com regulações de proteção de dados como [LGPD e GDPR](https://vtex.com/us-en/privacy-and-agreements/vtex-commitment/), empresas que utilizam dados pessoais de clientes devem aceitar seus pedidos de exclusão de cadastro. Portanto, a VTEX permite que você solicite a exclusão de dados dos clientes da sua loja.

## Antes de solicitar a exclusão de dados

Antes de [solicitar a exclusão via suporte](#solicitar-exclusao-via-suporte), é importante que você confira quais entidades de dados do Master Data armazenam dados de clientes na sua operação.

### Entidades nativas do Master Data

Com a sua [solicitação via suporte](#solicitar-exclusao-via-suporte), a VTEX excluirá os dados das entidades de dados nativas **CL** e **AD**. É importante que você não exclua dados destas entidades.

### Outras entidades de dados

Se a sua loja armazena informações de clientes em outras entidades de dados, você precisa fazer a exclusão manual destes dados antes de fazer a solicitação via suporte. Para fazer isso, use a API do Master Data:

1. Busque o documento com o endpoint [Search document](https://developers.vtex.com/vtex-rest-api/reference/searchdocuments-1)

2. Utilize a requisição [Delete document](https://developers.vtex.com/vtex-rest-api/reference/deletedocument-1)

>❗ Não realize esse processo para as entidades **CL** e **AD**.

## Solicitar exclusão via suporte

Você deverá solicitar a extensão da exclusão de dados pessoais de seus clientes nos sistemas da VTEX via abertura de ticket no [Suporte VTEX](https://help.vtex.com/pt/support).

<div class="alert alert-warning" role="alert">
Solicite a exclusão de dados de apenas uma conta, ou seja, um email do shopper a ser excluído por ticket. Caso você inclua mais de um email, o ticket será retornado. </div>

Para formalizar o pedido, siga os passos:

1. Acesse o [Suporte VTEX](https://help.vtex.com/pt/support).
2. Preencha seu nome completo no campo **Nome** e selecione no campo **Loja** o nome da loja que deseja solicitar o chamado.
3. Clique na opção `Continuar`.
4. Selecione a opção `Técnico`.
5. No campo **Tipos de problema**, selecione a opção `Gostaria de solicitar uma configuração`.
6. No campo **Assunto da solicitação**, você deverá preencher as seguintes informações:
   * Solicitação de Data Subject Request
   * VTEX accounts
   * Email vinculado a contas VTEX cujos dados devem ser excluídos.
7. Selecione no campo **Sua experiência com a plataforma** a opção que corresponde à sua experiência como usuário da plataforma VTEX.
8. Preencha o campo **Descreva o que aconteceu detalhadamente** com detalhes da sua solicitação.
9. Clique em `Enviar`.

Sua solicitação será enviada à nossa equipe de suporte. Na conclusão do chamado, será emitido um certificado para o email em que o ticket foi aberto comprovando a veracidade da conclusão da exclusão dos dados.
