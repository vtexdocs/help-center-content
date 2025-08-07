---
title: "Produtos indisponíveis com mensagens conflitantes no novo catálogo de administração de produtos (Facelift)"
id: 637P8whSEQWtERrXtndWsH
status: PUBLISHED
createdAt: 2024-09-10T13:40:10.557Z
updatedAt: 2024-09-10T13:40:11.642Z
publishedAt: 2024-09-10T13:40:11.642Z
firstPublishedAt: 2024-09-10T13:40:11.642Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: produtos-indisponiveis-com-mensagens-conflitantes-no-novo-catalogo-de-administracao-de-produtos-facelift
locale: pt
kiStatus: Backlog
internalReference: 1095510
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Na página de produto `/admin/catalog-products`, um produto indisponível terá as mensagens `"Ative o produto para torná-lo visível na loja"` e `"Produto pendente. Verifique se esse produto tem todas as informações necessárias, preços, estoque e configurações de logística."`.
Isso não significa que o produto esteja pendente de indexação ou inativo.

## Simulação



- Criar um produto
- Tornar esse produto indisponível
- Veja a mensagem no admin `/admin/catalog-products`

## Workaround


Use o administrador legado `{account}.vtexcommercestable.com.br/admin/site/Produto.aspx`




