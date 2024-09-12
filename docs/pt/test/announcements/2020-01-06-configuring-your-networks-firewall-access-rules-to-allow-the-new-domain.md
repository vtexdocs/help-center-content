---
title: 'Liberação de novo domínio nas regras do firewall da sua rede'
id: 1ib1hW8UJlR7SniuFTHzx4
status: PUBLISHED
createdAt: 2020-01-06T17:05:54.548Z
updatedAt: 2020-01-08T19:28:41.329Z
publishedAt: 2020-01-08T19:28:41.329Z
contentType: updates
productTeam: Reliability
author: authors_31
slug: liberacao-de-novo-dominio-nas-regras-do-firewall-da-sua-rede
locale: pt
legacySlug: liberacao-de-novo-dominio-nas-regras-do-firewall-da-sua-rede
announcementImageID: ''
announcementSynopsisPT: 'A VTEX mudará o domínio que carrega arquivos. Revise suas regras de firewall para garantir a liberação do domínio.'
---

No dia __20 de janeiro de 2020__ a VTEX fará uma alteração no domínio responsável pelo carregamento dos arquivos de imagem, javascript e CSS dentro da plataforma.

Verifique se a rede da sua operação, através do firewall, possui alguma regra que impede o carregamento do novo domínio.

## O que mudará?

O domínio `vteximg.com.br`, responsável por entregar os arquivos de imagem, javascript e CSS da sua loja será substituído pelo novo domínio `vtexassets.com`, tanto para o contexto de compra, ou seja, navegação do consumidor no seu site, quanto para o painel administrativo.

## Por que estamos realizando esta mudança?

O novo domínio `vtexassets.com` utiliza um algoritmo de compactação de arquivo mais eficaz, o que garante um carregamento com maior performance e, consequentemente, uma experiência mais agradável para o usuário.

## O que precisa ser feito?

Entre em contato com a equipe de TI da sua operação, responsável pelas configurações de rede, firewall e infraestrutura, encaminhando esta mensagem. 

Esta equipe precisará __revisar e ajustar as regras de firewall, garantindo a liberação para o domínio vtexassets.com__.

>ℹ️ OBS: Não será necessário realizar qualquer ajuste no front-end, uma vez que o domínio `vteximg.com.br` continuará funcionando para customizações.

## Quais impactos sua operação poderá sofrer caso não ocorra a adequação?

Caso esta adequação não ocorra, a partir da data mencionada neste e-mail, o painel administrativo da sua loja poderá se comportar de maneira inesperada, fazendo com que a navegação e as ações apresentem erros diversos.
