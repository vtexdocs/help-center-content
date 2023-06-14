---
title: 'Cheatsheet VTEX IO'
id: 7CjVGlI1Lqu8M4muAWamQK
status: DRAFT
createdAt: 2018-02-22T02:15:58.079Z
updatedAt: 2020-03-06T13:59:38.892Z
publishedAt: 
firstPublishedAt: 2018-02-22T02:18:00.508Z
contentType: frequentlyAskedQuestion
productTeam: VTEX IO
author: authors_24
slug: cheatsheet-vtex-io
locale: pt
legacySlug: cheatsheet-vtex-io
---

### Ver opções de comando na CLI

`vtex` ou `vtex -h` ou `vtex --help`

### Mostrar informações de debug

Adicionar `--verbose` após qualquer comando, como em `vtex link --verbose`

### Linkar uma app

`vtex link`

### Desfazer um link de uma app

`vtex unlink {app}`

### Desfazer todos os links de um workspace

`vtex unlink --all`

### Publicar a app no Registro da conta atual

`vtex publish`

### Publicar a app no Registro público

`vtex publish --public` ou `vtex publish -p`

### Publicar um path contendo uma app

`vtex publish {path}`

### Instalar uma app

`vtex install {app}`

O padrão (sem o argumento `{app}`) é instalar a app da pasta atual.

### Instalar uma app de um Registro privado

`vtex install -r {conta}` ou `vtex install --registry {conta}`

### Desinstalar uma app

`vtex uninstall {app}`

O padrão (sem o argumento `{app}`) é desinstalar a app da pasta atual.

### Listar apps instaladas no workspace

`vtex list`

### Fazer login em conta VTEX

`vtex  login` ou `vtex login -a {conta} -w {workspace}`

### Fazer logout de conta VTEX

`vtex  logout`

### Mudar para outra conta VTEX

`vtex switch {conta}`

### Ver seu usuário, a conta em que está logado e o workspace atual

`vtex whoami`

### Mudar de workspace

`vtex use {workspace}`

### Listar workspaces da conta

`vtex workspace list`

### Criar workspace

`vtex workspace create {nome}`

### Deletar um workspace

`vtex workspace delete {nome}`

### Promover um workspace para master

`vtex promote`

### Colocar um workspace em modo de produção

`vtex production`

### Tirar um workspace do modo de produção

`vtex production false`

### Deletar e recriar um workspace

`vtex workspace reset {nome}`

### Listar dependências do workspace

`vtex deps list`

### Atualizar dependências do workspace

`vtex deps update`

### Atualizar uma app@version específica

`vtex deps update {app}`

### Configurar um ambiente eslint local

`vtex local eslint`

### Gerar um package.json a partir do manifest.json

`vtex local package`

### Gerar um manifest.json a partir do package.json

`vtex local manifest`

### Executar uma função Colossus localmente

`vtex local debug`

### Exibir o token de autenticação do usuário e copiá-lo para a área de transferência

`vtex local token`

### Criar estrutura básica de arquivos e pastas para sua app VTEX

`vtex init`

### Listar serviços de infraestrutura instalados

`vtex infra list`

### Instalar serviço de infraestrutura

`vtex infra install {nome}`

### Atualizar todos os serviços de infraestrutura instalados

`vtex infra update`
