---
title: "O mapa do site não indexa as páginas de departamentos, marcas e/ou categorias"
id: 59AJOYBjpw23Ee8EXKOjUF
status: PUBLISHED
createdAt: 2024-08-06T19:23:18.073Z
updatedAt: 2024-08-06T19:28:46.754Z
publishedAt: 2024-08-06T19:28:46.754Z
firstPublishedAt: 2024-08-06T19:23:19.500Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: o-mapa-do-site-nao-indexa-as-paginas-de-departamentos-marcas-eou-categorias
locale: pt
kiStatus: Backlog
internalReference: 1076965
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Quando uma conta tem o aplicativo `search.resolver@1.x`, o mapa do site pode apresentar erros quando:

- Uma categoria tem seu primeiro produto proveniente de uma categoria semelhante;
- A página de marca/categoria/departamento não tem produtos; nesse caso, a página não é indexada no mapa do site e sua geração falha
Em ambos os casos, a página atual não é indexada no mapa do site, o que geralmente leva a um mapa do site sem um caminho de marca, categoria ou departamento.

## Simulação



Tente gerar o mapa do site para uma conta que tenha um dos cenários descritos acima e ele gerará um mapa do site incompleto.



## Workaround



- Crie um novo espaço de trabalho
- Instale o search-resolver@0.x `(vtex install vtex.search-resolver@0.x)`
- Gerar o novo mapa do site
- Agora você pode reverter o search-resolver para a versão 1.x (`vtex install vtex.search-resolver@1.x`)
- Promover o espaço de trabalho criado para mestre

Lembre-se de que atualizar a loja para resolver@0.x e gerar o mapa do site em um espaço de trabalho é a solução alternativa, pois alguns casos inválidos não ocorrem em nossa pesquisa herdada.



