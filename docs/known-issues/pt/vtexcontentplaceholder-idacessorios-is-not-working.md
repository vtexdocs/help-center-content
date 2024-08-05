---
title: "<vtex:contentPlaceHolder id='Acessorios'/> não está funcionando"
id: 7x8f0vGaunX1P3EFJGCYaz
status: PUBLISHED
createdAt: 2022-01-23T02:24:12.606Z
updatedAt: 2022-11-25T22:09:44.078Z
publishedAt: 2022-11-25T22:09:44.078Z
firstPublishedAt: 2022-03-16T21:44:24.602Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: vtexcontentplaceholder-idacessorios-nao-esta-funcionando
locale: pt
kiStatus: Backlog
internalReference: 466147
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O controle `<vtex:contentPlaceHolder id="Acessorios"/>` deve trazer uma visão dos produtos relacionados definidos como o tipo `acessorios` para a página do produto.
No entanto, atualmente, este controle não está exibindo esta visão, portanto, o conjunto de produtos relacionados não será exibido.



## Simulação



- Use o controle em um modelo. (Para ajudar nisso, você poderia criar o `vtex:contentPlaceHolder' seguindo a documentação: Lista de controles para gabaritos)
- Verifique se há algum produto com produtos relacionados definidos como "acessórios". O CrossSeling API poderia ser utilizado para verificar esta informação para um produto específico - Obter Busca de Produtos de Acessórios.
- Além disso, no Portal, carregue a página de desembarque que utiliza o layout com este controle.
- Veja que os produtos relacionados não serão exibidos.



## Workaround


Use outros controles CrossSellings ou customização com o API Response.

