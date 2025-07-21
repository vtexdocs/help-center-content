---
title: "Os métodos de pagamento desativados continuam a ser exibidos."
id: eZNUFri2GvTOjzoxBXyXf
status: PUBLISHED
createdAt: 2025-05-30T11:58:40.599Z
updatedAt: 2025-05-30T18:27:02.037Z
publishedAt: 2025-05-30T18:27:02.037Z
firstPublishedAt: 2025-05-30T11:58:41.232Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: os-metodos-de-pagamento-desativados-continuam-a-ser-exibidos
locale: pt
kiStatus: Backlog
internalReference: 1235817
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



## Simulação



1. Configure um ambiente VTEX com uma conta principal (por exemplo, **myAccount**) e uma subconta que compartilha o mesmo sufixo da conta principal (por exemplo, sub**myAccount**), ambas ativas e reconhecidas pelo sistema.
2. Certifique-se de que ambas as contas tenham pelo menos um salesChannel configurado (por exemplo, salesChannel 4). Ambas as contas devem ter regras de pagamento ativas e configuráveis.
3. Modifique ou desative/ative os métodos de pagamento relevantes para a subconta.
4. Simule uma compra no checkout da subconta (submyAccount) e observe que a alteração feita na regra de pagamento da subconta não tem efeito no checkout; o comprador vê a configuração anterior, não a atualizada

## Workaround


Abra um tíquete para a equipe de suporte ao produto.





