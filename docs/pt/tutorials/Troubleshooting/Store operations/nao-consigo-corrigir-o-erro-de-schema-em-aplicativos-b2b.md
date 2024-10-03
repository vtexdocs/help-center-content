---
title: 'Não consigo corrigir o erro de schema em aplicativos B2B'
id: WkjJZSnGXCiqmLhg4b0OR
status: PUBLISHED
createdAt: 2024-09-11T18:54:34.611Z
updatedAt: 2024-09-11T19:43:31.830Z
publishedAt: 2024-09-11T19:43:31.830Z
firstPublishedAt: 2024-09-11T19:42:01.055Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: i-cant-fix-the-schema-error-in-b2b-apps
locale: pt
legacySlug: nao-consigo-corrigir-o-erro-de-schema-em-aplicativos-b2b
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags / Palavras-chave:** B2B apps, Schema issue, Master Data.

Em ambientes que utilizam aplicativos B2B, os usuários podem encontrar o alerta `schema is invalid` relacionado a problemas de schema. Esse tipo de alerta geralmente ocorre devido a uma configuração incorreta na entidade CL (cliente) dentro do Master Data.

A situação mais comum envolve a adição de campos obrigatórios ao schema que define os dados para essa entidade no Master Data. Quando um aplicativo da B2B Suite tenta criar um usuário sem fornecer os campos obrigatórios, o alerta de schema inválido é exibido. Esse problema pode ocorrer ao acessar a página de **Organização** no Admin VTEX ou a página **Solicitar Organização** na vitrine da loja.

## Solução
A correção do alerta schema is invalid em aplicativos B2B envolve ajustes na configuração dos campos obrigatórios no Master Data.

### Resolvendo o alerta schema is invalid em aplicativos B2B
Para corrigir o alerta Schema is invalid, siga os passos abaixo para garantir a configuração correta:

<ol>
  <li>No Admin VTEX, acesse <strong>Configurações da Loja > Storefront > Master Data</strong>, ou digite <strong>Master Data</strong> na barra de busca no topo da página.</li>
  <li>Faça o login.</li>
  <li>Clique em <strong>Configurações Avançadas</strong>.</li>
  <li>Clique em <strong>Estrutura de Dados</strong>.</li>
  <li>Clique em <strong>Entidades de Dados</strong>.</li>
  <li>Selecione a linha <strong>CL</strong>, e clique em <strong>Editar</strong>.</li>
  <li>Revise todos os campos na lista e identifique aquele em que a opção <strong>É anulável</strong> não está marcada e marque-o.</li>
</ol>

<div>
  <p>Apenas o campo de email deve permanecer com a opção <strong>"É anulável"</strong> desmarcada.</p>
</div>

<ol start="8">
  <li>Clique em <strong>Salvar</strong>.</li>
  <li>Na lista de <strong>Entidades de Dados</strong>, clique em <strong>Publicar</strong>.</li>
</ol>

A imagem abaixo ilustra os passos necessários para corrigir a configuração dos campos obrigatórios no Master Data, solucionando o alerta `schema is invalid`.

![B2B Suite - troubleshooting - PT](https://images.ctfassets.net/alneenqid6w5/4s3sJXwHYCAkyGiYzWzOyE/50739ef8ed7ab1cadcc55298c20ff14a/B2B_Suite_-_troubleshooting.gif)
