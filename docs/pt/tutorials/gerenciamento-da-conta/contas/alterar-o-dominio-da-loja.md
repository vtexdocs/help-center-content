---
title: 'Alterar o domínio da loja'
id: frequentlyAskedQuestions_626
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.032Z
updatedAt: 2025-01-21T21:49:12.366Z
publishedAt: 2025-01-21T21:49:12.366Z
firstPublishedAt: 2019-01-24T22:02:37.712Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: change-the-store-domain
legacySlug: o-que-preciso-fazer-para-mudar-o-dominio-da-minha-loja
locale: pt
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Mudar o [domínio](/pt/docs/tutorials/configurar-o-dominio-da-loja) de uma loja após o go-live exige atenção cuidadosa para minimizar problemas de SEO, evitar indisponibilidade (downtime) e garantir uma transição transparente, sem impacto na experiência dos clientes.

> ⚠️ Não remova nem altere o domínio existente até que a migração esteja totalmente concluída e validada. Isso garante que a loja permanecerá acessível durante a transição, evitando indisponibilidade.

## Pré-requisitos

Antes de começar, certifique-se de:

* Ter o novo domínio registrado e acessível.
* Possuir acesso ao provedor de DNS do domínio.
* Manter o domínio antigo ativo durante todo o processo de migração.

## Visão geral

O processo de migração de domínio segue estas etapas:

1. [Cadastrar o novo domínio](#1-cadastrar-o-novo-domínio) sem remover o anterior, mantendo o domínio antigo ativo no License Manager.
2. [Solicitar migração interna à VTEX](#2-solicitar-migração-interna-à-vtex), garantindo que todos os registros DNS e configurações internas sejam propagados corretamente.
3. [Atualizar URLs e validar o novo domínio](#3-atualizar-urls-e-validar-o-novo-domínio) somente após confirmar que todas as alterações de DNS foram aplicadas.
4. [Remover o domínio antigo](#4-remover-o-domínio-antigo) quando o novo domínio estiver totalmente funcional e validado.
5. [Configurar redirecionamento](#5-configurar-redirecionamento) do domínio antigo para o novo.

## 1. Cadastrar o novo domínio

Adicione o novo domínio no License Manager sem remover o domínio anterior:

1. Crie o novo host no Admin VTEX, seguindo o passo a passo descrito em [Cadastrar um novo host](/pt/docs/tutorials/configurar-o-dominio-da-loja#cadastrar-um-novo-host). Nesse momento, o DNS do novo domínio ainda não deve estar apontado para a VTEX.

2. No Admin VTEX, verifique as configurações do Checkout em **Configurações da Loja > Storefront > Checkout**, conforme descrito em [Configurar template no SmartCheckout](/pt/faq/configurar-template-no-smartcheckout/).

   Esse passo é fundamental para que o Checkout continue funcionando após a mudança.

   É necessário conferir se os sites configurados estão relacionados à conta cadastrada em **Configurações da conta > Contas**. Confira [Gerenciamento da conta](/pt/docs/tutorials/gerenciamento-da-conta) para mais detalhes.

> ⚠️ Não exclua o domínio antigo e não altere o DNS ainda.

## 2. Solicitar migração interna à VTEX

Se a sua loja utiliza [VTEX IO - Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) ou [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), entre em contato com o [suporte VTEX](https://supporticket.vtex.com/support) e solicite a migração interna de domínio, informando o novo domínio desejado.

A VTEX realizará a migração interna garantindo que todos os registros DNS e configurações internas sejam propagados corretamente.

Saiba mais sobre [apontamento interno](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-apontamento-io).

Uma vez aberto o chamado, o time de suporte tem até três dias úteis para analisar as configurações e realizar o apontamento.

Após a confirmação do apontamento interno, realize o apontamento de DNS para a CDN da VTEX. Para isso, siga as instruções do guia [Go-live](/pt/docs/tracks/go-live).

## 3. Atualizar URLs e validar o novo domínio

Somente após confirmar que todas as alterações de DNS foram corretamente aplicadas, realize as seguintes validações:

1. Confirme que o DNS do novo domínio está totalmente propagado.
2. Valide a navegação completa da loja no novo domínio.
3. Atualize as URLs no codebase (quando aplicável).
4. Verifique integrações externas (gateways, antifraude, webhooks, APIs, etc.).

> ⚠️ Somente prossiga para o próximo passo após confirmar que o novo domínio está totalmente funcional e estável.

## 4. Remover o domínio antigo

Após validar que o novo domínio está totalmente funcional, remova o domínio antigo:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique no botão **Configurações da conta**.
3. Clique em **Conta**.
4. Clique na aba **Lojas**.
5. Na linha da loja em que deseja excluir o host, clique no menu de ações ⁝ e, em seguida, clique em `Editar`.
6. Na linha do host antigo, clique no menu de ações ⁝ e, em seguida, clique em `Excluir`.

É possível manter ambos os domínios (o antigo e o novo) funcionando simultaneamente durante o período de transição, mas é importante ter cautela para evitar problemas como:

* Confusão de clientes sobre qual é o domínio oficial, que pode afetar negativamente a confiança e as vendas.
* Impacto negativo no SEO, pois os motores de busca podem interpretar que os domínios competem entre si.

## 5. Configurar redirecionamento

Para garantir que todos os acessos ao domínio antigo sejam direcionados para o novo domínio, siga as instruções abaixo:

* Configure um redirecionamento HTTP 302, que instruirá os navegadores a encaminhar as requisições para o novo domínio.
* Recomendamos o uso de ferramentas como [direcionar.com.br](https://direcionar.com.br) e [redirect.center](https://redirect.center) para criar o redirecionamento.
* No painel DNS, evite usar CNAME para redirecionamento, pois essa configuração não garante um redirecionamento adequado.

> ⚠️ É comum que as primeiras navegações no novo domínio sejam mais lentas do que o esperado devido à criação inicial do cache. Esse impacto é temporário e se normaliza com o tempo.
