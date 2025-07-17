---
title: "A seleção de sellers disponíveis na política comercial não está funcionando corretamente"
id: 1w656dzgvHG8yIvPfFdGBX
status: PUBLISHED
createdAt: 2022-02-01T20:55:24.960Z
updatedAt: 2022-11-25T21:49:00.089Z
publishedAt: 2022-11-25T21:49:00.089Z
firstPublishedAt: 2022-02-01T20:55:25.329Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-selecao-de-sellers-disponiveis-na-politica-comercial-nao-esta-funcionando-corretamente
locale: pt
kiStatus: Backlog
internalReference: 515480
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A mudança de disponibilidade de um vendedor em uma política comercial não está sendo corretamente reconhecida no catálogo. Isto pode causar dois cenários: um produto de um vendedor não selecionado torna-se disponível ou um produto de um vendedor selecionado torna-se indisponível.



## Simulação


Cenário 1
- Remover um vendedor de uma política comercial através do UI `/admin/Site/StoreForm.aspx?Id={{SC}}``.
- Verifique pela rota `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` se a política comercial foi removida do campo _availableSalesChannel_

Cenário 2
- Adicionar um vendedor de uma política comercial através da IU
- Verifique pela rota `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` se a política comercial está disponível no campo _availableSalesChannel_



## Workaround


Salvar novamente as configurações da política comercial da IU

