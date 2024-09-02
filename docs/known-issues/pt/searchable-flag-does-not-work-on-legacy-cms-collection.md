---
title: 'A bandeira pesquisável não funciona na coleção CMS herdada'
id: 47spDrddLoEmRbYmlj7wY2
status: PUBLISHED
createdAt: 2022-01-21T14:52:14.951Z
updatedAt: 2022-11-25T22:11:05.005Z
publishedAt: 2022-11-25T22:11:05.005Z
firstPublishedAt: 2022-03-16T16:36:34.866Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: a-bandeira-pesquisavel-nao-funciona-na-colecao-cms-herdada
locale: pt
kiStatus: Backlog
internalReference: 322552
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A bandeira pesquisável não funciona na Coleção CMS herdada. Nosso documento explica que quando usamos esta bandeira, se pesquisarmos o nome da coleção, ela deve retornar os itens associados a esta coleção.



## Simulação


- Criar uma coleção sobre o CMS legado;
- Usar a bandeira "pesquisável";
- Verificar na frente / resultado da busca que se pesquisarmos o nome da coleção, ela não renderá os itens da coleção.



## Workaround


Há 2 soluções:
- Use um redirecionamento para a URL das coleções;
- Criar uma página de destino e associá-la ao resultado da busca das coleções: https://help.vtex.com/pt/tutorial/como-criar-landing-pages-com-urls-customizadas--q0p2UU6sBaYcEMsq24YSi

