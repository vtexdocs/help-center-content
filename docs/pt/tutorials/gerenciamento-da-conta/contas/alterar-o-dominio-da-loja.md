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

Mudar o [domínio](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450) de uma loja após o go-live exige atenção cuidadosa para minimizar problemas de SEO e garantir uma transição transparente, sem impacto na experiência dos clientes.

Saiba mais sobre o processo completo para mudar o domínio na VTEX nas seções a seguir:

1. [Pré-requisitos](#pré-requisitos)  
2. [Configurar o novo domínio](#configurar-o-novo-domínio)  
3. [Excluir o domínio antigo](#excluir-o-domínio-antigo)  
4. [Redirecionar o domínio antigo](#redirecionar-o-domínio-antigo)  

## Pré-requisitos

Antes de começar, certifique-se de:

* Ter o novo domínio registrado e acessível.  
* Possuir acesso ao provedor de DNS do domínio.

## Configurar o novo domínio

Siga as etapas abaixo para realizar a mudança de domínio:

1. Crie o novo host no Admin VTEX, seguindo o passo a passo descrito em [Cadastrar um novo host](/pt/tutorial/configurar-o-dominio-da-loja--tutorials_2450#cadastrar-um-novo-host). Nesse momento, o DNS do novo domínio ainda não deve estar apontado para a VTEX.

2. No Admin VTEX, verifique as configurações do Checkout em **Configurações da Loja > Storefront > Checkout**, conforme descrito em [Configurar template no SmartCheckout](/pt/faq/configurar-template-no-smartcheckout/). 

   Esse passo é fundamental para que o Checkout continue funcionando após a mudança.

   É necessário conferir se os sites configurados estão relacionados à conta cadastrada em **Configurações da conta > Contas**. Confira [Gerenciamento da conta](/pt/tutorial/gerenciamento-da-conta--2vhUVOKfCaswqLguT2F9xq) para mais detalhes.

3. Se a sua loja utiliza [VTEX IO \- Store Framework](https://developers.vtex.com/docs/guides/storefront-implementation) ou [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), entre em contato com o [suporte VTEX](https://supporticket.vtex.com/support) e solicite apontamento interno, informando o novo domínio. Saiba mais sobre [apontamento interno](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/7sM5IMx02zaHvAFTm0OxiJ#solicitar-apontamento-io).

   Uma vez aberto o chamado, o time de suporte tem até três dias úteis para analisar as configurações e realizar o apontamento. 

4. Realize o apontamento de DNS para a CDN da VTEX. Para isso, siga as instruções do guia [Go-live](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM/12bQlMbJ68Ot0LIaO6Btkj). 

## Excluir o domínio antigo

Após o período de transição, é recomendado desativar o domínio antigo para garantir que todos os clientes utilizem o novo endereço e evitar confusões.

É possível manter ambos os domínios (o antigo e o novo) funcionando simultaneamente durante o período de transição, mas é importante ter cautela para evitar problemas como:

* Confusão de clientes sobre qual é o domínio oficial, que pode afetar negativamente a confiança e as vendas.  
* Impacto negativo no SEO, pois os motores de busca podem interpretar que os domínios competem entre si.

Após a confirmação de apontamento interno e propagação de DNS do novo host, siga o passo a passo para excluir os hosts antigos, mantendo apenas o novo:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.  
2. Clique no botão **Configurações da conta**.  
3. Clique em **Conta**.  
4. Clique na aba **Lojas**.  
5. Na linha da loja em que deseja excluir o host, clique no botão de ações ⁝ e, em seguida, clique em `Editar`.  
6. Na linha do host antigo, clique no botão de ações ⁝ e, em seguida, clique em `Excluir`.  

## Redirecionar o domínio antigo

Para garantir que todos os acessos ao domínio antigo sejam direcionados para o novo domínio, siga as instruções abaixo:

* Configure um redirecionamento HTTP 302, que instruirá os navegadores a encaminhar as requisições o novo domínio.  
* Recomendamos o uso de ferramentas como [direcionar.com.br](https://direcionar.com.br) e [redirect.center](https://redirect.center) para criar o redirecionamento.  
* No painel DNS, evite usar CNAME para redirecionamento, pois essa configuração não garante um redirecionamento adequado.

> ⚠️ É comum que as primeiras navegações no novo domínio sejam mais lentas do que o esperado devido à criação inicial do cache. Esse impacto é temporário e se normaliza com o tempo.
