---
title: 'O campo "Trocas e devoluções" não está atualizando a interface de gestão do vendedor após salvar'
id: 1z8LrsbGk5B2ejZ1PV9vaB
status: PUBLISHED
createdAt: 2022-11-01T17:47:30.359Z
updatedAt: 2022-11-25T22:00:22.743Z
publishedAt: 2022-11-25T22:00:22.743Z
firstPublishedAt: 2022-11-01T17:47:31.132Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: o-campo-trocas-e-devolucoes-nao-esta-atualizando-a-interface-de-gestao-do-vendedor-apos-salvar
kiStatus: Backlog
internalReference: 689886
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Após salvar o campo "Trocas e devoluções" na IU, a informação é primeiramente atualizada, mas se tentarmos deixar a área de gerenciamento ou atualizar a página, a informação é perdida.



As informações mostradas na IU são as mesmas do campo "Política de embarque".



Entretanto, isto parece estar acontecendo somente na IU, via API as informações estão corretas.




## Simulação



1. Entre com um vendedor na área de gerenciamento de vendas;
2. Alterar as informações no campo "Trocas e devoluções" e salvar;
3. Digite novamente o mesmo vendedor e verifique se as informações não estão corretas.



## Workaround


Não há necessidade de trabalhar em conjunto, as informações estão corretas no backend do sistema.

