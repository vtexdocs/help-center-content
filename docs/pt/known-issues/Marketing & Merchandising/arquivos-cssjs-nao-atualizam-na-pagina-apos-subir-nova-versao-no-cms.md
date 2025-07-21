---
title: "Arquivos (CSS/JS) não atualizam na página após subir nova versão no CMS"
id: 4qNIpSPGo8a8ugyemwYAuK
status: PUBLISHED
createdAt: 2018-02-09T19:04:53.387Z
updatedAt: 2022-12-22T20:45:29.669Z
publishedAt: 2022-12-22T20:45:29.669Z
firstPublishedAt: 2018-02-09T21:44:00.676Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: arquivos-cssjs-nao-atualizam-na-pagina-apos-subir-nova-versao-no-cms
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Após fazer upload da versão atualizada de algum arquivo pertinente ao layout de seu site (CSS, JS ou mesmo imagens), a versão apresentada no front-end pode permanecer não sendo a mais recente.

Isso ocorre enquanto o template estiver em cache. A requisição a estes arquivos é feita com um parâmetro de versionamento, na qual o seu valor é um *timestamp* do arquivo original - exemplo, `/arquivos/style.css?v=636492689128330000`. Enquanto o *timestamp* for o mesmo, o arquivo será o mesmo.

A principal causa do cenário é que o template não sabe que um arquivo foi alterado, então seu cache não expira apenas com a atualização dos arquivos.

## Simulação

Em determinado template, atualizar um arquivo de CSS ou Javascript, fazendo novo upload com o mesmo nome, para que sobrescreva o antigo.

Observar que o parâmetro de *timestamp* na requisição não irá se alterar, e o conteúdo do arquivo será o mesmo.

## Workaround

Alterar os templates que chamam os arquivos atualizados é suficiente para revisar o *timestamp*, que então irá trazer a versão mais recente dos arquivos.

Uma sugestão, para facilitar o workaround toda vez em que se altera um arquivo do layout, é criar um subtemplate de controle de versão, que esteja presente em todos os templates usados na loja. Para o conteúdo deste subtemplate será suficiente um comentário HTML, com informações que serão atualizadas a cada versão de arquivos.

Ao alterar o subtemplate, todos os templates que fazem sua leitura serão atualizados, e junto disso, os arquivos.

