---
title: 'Criar feed de produto XML com HTTPS'
id: 4iiyqi9V9YigaCs8MWEA2C
status: ARCHIVED
createdAt: 2017-06-20T16:08:41.297Z
updatedAt: 2019-12-31T15:18:18.079Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5V92cmF9jG8KG600EwUgEg
tag: Catalog
slugEN: untitled-entry-2017-06-20-at-04-08-41
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Ao se criar um XML, são geradas URLs de produtos com HTTP, o que para alguns parceiros que recebem o XML pode causar problemas, especialmente em dois cenários:
- Quando a loja tem toda a sua estrutura em HTTPS e o parceiro utiliza o XML em HTTP, é exibida a mensagem de página insegura, pois a URL do XML não está em HTTPS.
- Quando se utiliza o Google: ao enviar a URL com HTTP, o Google retorna a página no redirect para HTTPS, o que causa a perda de alguns parâmetros de métrica na URL.

## Simulação

Criar um XML de produto. 
Este XML será gerado com HTTP, mesmo se a loja estiver habilidada para HTTPS.

## Workaround

É possível criar um serviço em outro domínio que funcione em HTTPS (fora da VTEX). Este serviço irá renderizar o XML. 
OBS: esse serviço deverá buscar, em tempo real, o XML oficial na VTEX, como um proxy, para manter a integridade do conteúdo apresentado, uma vez que o conteúdo do XML pode ser modificado pelo lojista.
Se necessário, converse com o responsável técnico da sua loja.

