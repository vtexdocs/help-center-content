---
title: 'Não consigo corrigir o erro de schema em aplicativos B2B'
id: WkjJZSnGXCiqmLhg4b0OR
status: PUBLISHED
createdAt: 2024-09-11T18:54:34.611Z
updatedAt: 2024-11-08T19:31:33.438Z
publishedAt: 2024-11-08T19:31:33.438Z
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

### Resolvendo o alerta schema is invalid em aplicativos B2B
Para corrigir o alerta Schema is invalid, siga os passos abaixo para garantir a configuração correta:

<ol>
  <li>No Admin VTEX, acesse **Configurações da Loja > Storefront > Master Data**, ou digite **Master Data** na barra de busca no topo da página.</li>
  <li>Faça o login.</li>
  <li>Clique em **Configurações Avançadas**.</li>
  <li>Clique em **Estrutura de Dados**.</li>
  <li>Clique em **Entidades de Dados**.</li>
  <li>Selecione a linha **CL**, e clique em **Editar**.</li>
  <li>Revise todos os campos na lista e identifique aquele em que a opção **É anulável** não está marcada e marque-o.</li>
</ol>

<div>
  Apenas o campo de email deve permanecer com a opção **"É anulável"** desmarcada.
</div>

<ol start="8">
  <li>Clique em **Salvar**.</li>
  <li>Na lista de **Entidades de Dados**, clique em **Publicar**.</li>
</ol>

A imagem abaixo ilustra os passos necessários para corrigir a configuração dos campos obrigatórios no Master Data, solucionando o alerta `schema is invalid`.

![B2B Suite - troubleshootingv2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/store-operations/nao-consigo-corrigir-o-erro-de-schema-em-aplicativos-b2b_1.gif)
