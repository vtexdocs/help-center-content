---
title: "Erro ao tentar exportar uma grande quantidade de vales"
id: 1IGraA4i3GkEMow4iaO6MI
status: PUBLISHED
createdAt: 2017-04-03T19:51:03.949Z
updatedAt: 2022-12-22T20:45:07.101Z
publishedAt: 2022-12-22T20:45:07.101Z
firstPublishedAt: 2017-04-03T20:08:14.092Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: erro-ao-tentar-exportar-uma-grande-quantidade-de-vales
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A exportação de vale (/admin/Site/Vale.aspx), hoje, não utiliza o processamento assíncrono (com envio do arquivo por e-mail) e isso acaba fazendo com que exportações grandes retornem erro para o usuário.

## Simulação

1. No admin, acessar o módulo Catalog;
2. Navegar pelo menu Controle de Campanhas > Vales;
3. Exportar uma grande quantidade de vales (mais de 1000, aproximadamente).

## Workaround

- __Opção 1__: Na própria listagem, aplicar filtros (por data/status), reduzindo a quantidade de registros.
- __Opção 2__: Resgatar os vales através de API.

