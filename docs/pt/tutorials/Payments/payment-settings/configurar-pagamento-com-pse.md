---
title: 'Configurar pagamento com PSE'
id: 7dRChubn7TqdEyWrHQEQp6
status: PUBLISHED
createdAt: 2022-05-18T17:13:25.207Z
updatedAt: 2024-09-30T16:31:19.626Z
publishedAt: 2024-09-30T16:31:19.626Z
firstPublishedAt: 2023-03-14T14:51:46.607Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pse
legacySlug: configurar-pagamento-com-pse
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O sistema de débito online PSE é uma das opções da VTEX para receber pagamentos na Colômbia.

Para habilitar o PSE em sua loja são necessárias as seguintes ações:
- [Instalar e configurar o aplicativo Banks for PSE](#instalando-o-banks-for-pse-app).
- [Configurar o PSE como condição de pagamento](#configurando-a-condição-de-pagamento-pse).

> ⚠️ Para configurar o PSE app em sua loja, você deve ter permissão para acessar o módulo de Pagamentos. Caso ainda não tenha este acesso, solicite-o através do [VTEX Support](https://help.vtex.com/support).

## Instalando o Banks for PSE App

1. Acesse o **Admin VTEX**.
2. Na seção **Configurações da Conta**, acesse **Aplicativos > Loja de aplicativos**.
3. No campo **Todos Aplicativos**, digite **Banks for PSE**.
4. Clique em `Instalar` no Banks for PSE app.
5. Na tela da VTEX APP Store, clique em `GET APP`.
6. Digite em letras minúsculas e sem espaço o nome de sua loja.
7. Clique em `Confirmar`.
8. Clique em `Instalar` para finalizar.

## Configurando o Banks for PSE App

1. Acesse o **Admin VTEX**.
2. Na seção **Configurações da Conta**, acesse **Aplicativos > Meus aplicativos**.
3. No campo **Loja de Aplicativos**, digite **Banks for PSE**.
4. Clique em `Configurações` no Banks for PSE app.
5. Em **Connector used to process the PSE payment**, selecione a opção desejada.
6. Caso utilize a GlobalPay como conector, preencha os campos **Application Code** e **Application Key** com os dados fornecidos pela GlobalPay.
7. Clique em `Salvar`.

## Configurando a condição de pagamento PSE

1. Acesse o **Admin VTEX**.
2. Clique em **Pagamentos**.
3. Em seguida, clique em **Configurações**.
4. Na aba **Condições de pagamento**, clique no botão `+`. 
5. Clique em **PSE**.
6. Preencha o campo **Nome da regra** com um nome de sua preferência para identificação.
7. Ative a condição de pagamento no campo **Status**.
8. Em **Processar com a afiliação**, escolha o conector que irá processar os pagamentos com o PSE. Somente estarão disponíveis para seleção os conectores que suportem este meio de pagamento.
9. Se desejar, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
10. Clique em `Salvar`.

> ℹ️ Você também pode criar uma promoção regular que pode ser aplicada especificamente a pagamentos realizados por meio do PSE. Saiba mais em [Criar promoção para pagamentos com o PSE](https://help.vtex.com/pt/tutorial/criar-promocao-para-pagamentos-com-o-pse--6YIp1fJ76gq667PQWjuj5T).

