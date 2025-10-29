---
title: 'Não consigo corrigir o erro de schema em aplicativos B2B'
id: WkjJZSnGXCiqmLhg4b0OR
status: PUBLISHED
createdAt: 2024-09-11T18:54:34.611Z
updatedAt: 2025-08-14T22:02:49.294Z
publishedAt: 2025-08-14T22:02:49.294Z
firstPublishedAt: 2024-09-11T19:42:01.055Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: i-cant-fix-the-schema-error-in-b2b-apps
legacySlug: nao-consigo-corrigir-o-erro-de-schema-em-aplicativos-b2b
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - B2B
  - Schema
  - Master Data
---

Em ambientes que utilizam aplicativos B2B, os usuários podem encontrar o alerta `schema is invalid` relacionado a problemas de schema. Esse tipo de alerta geralmente ocorre devido a uma configuração incorreta na entidade CL (cliente) dentro do Master Data.

A situação mais comum envolve a adição de campos obrigatórios ao schema que define os dados para essa entidade no Master Data. Quando um aplicativo da B2B Suite tenta criar um usuário sem fornecer os campos obrigatórios, o alerta de schema inválido é exibido. Esse problema pode ocorrer ao acessar a página de **Organização** no Admin VTEX ou a página **Solicitar Organização** na vitrine da loja.

## Solução
A correção do alerta schema is invalid em aplicativos B2B envolve ajustes na configuração dos campos obrigatórios no Master Data.

### Resolvendo o alerta *Schema is invalid* em aplicativos B2B
Para corrigir o alerta *Schema is invalid*, siga os passos abaixo para garantir a configuração correta:

1. No Admin VTEX, acesse **Configurações da Loja > Storefront > Master Data**, ou digite **Master Data** na barra de busca no topo da página.  
2. Faça o login.  
3. Clique em **Configurações Avançadas**.  
4. Clique em **Estrutura de Dados**.  
5. Clique em **Entidades de Dados**.  
6. Selecione a linha **CL** e clique em **Editar**.  
7. Revise todos os campos na lista e identifique aquele em que a opção **É anulável** não está marcada, e marque-a.

   > ⚠️ Apenas o campo de email deve permanecer com a opção **É anulável** desmarcada.
8. Clique em **Salvar**.  
9. Na lista de **Entidades de Dados**, clique em **Publicar**.

A imagem abaixo ilustra os passos necessários para corrigir a configuração dos campos obrigatórios no Master Data, solucionando o alerta `schema is invalid`.

![B2B Suite - troubleshootingv2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/nao-consigo-corrigir-o-erro-de-schema-em-aplicativos-b2b_1.gif)
