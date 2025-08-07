---
title: "As tags XML <price> relacionadas não carregam o conteúdo de itens indisponíveis"
id: 7u2WDGV9FJl4fXwfOhRx8N
status: PUBLISHED
createdAt: 2024-01-31T19:11:20.119Z
updatedAt: 2024-01-31T19:11:20.846Z
publishedAt: 2024-01-31T19:11:20.846Z
firstPublishedAt: 2024-01-31T19:11:20.846Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: as-tags-xml-price-relacionadas-nao-carregam-o-conteudo-de-itens-indisponiveis
locale: pt
kiStatus: Backlog
internalReference: 974722
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A integração XML carrega qualquer tag relacionada ao preço, como minPrice, maxPrice, currentPrice, que são carregadas como uma tag de valor nulo (<![CDATA[]]>) quando o item não está disponível e também são definidas para serem exibidas se não estiverem disponíveis.

## Simulação


1 - Configure um SKU indisponível em sua loja para "mostrar mesmo se não estiver disponível".
2 - Para uma configuração de integração XML válida https://myaccountname.myvtex.com/admin/Site/XmlForm.aspx, configure a tag "Availability" e qualquer tag de disponibilidade para serem exibidas.
3 - Use uma solicitação GET ou carregue o URL XML criado em seu navegador.

O resultado será um item indisponível, ainda exibido no XML, mas sem nenhuma tag de preço:

 ![](https://vtexhelp.zendesk.com/attachments/token/1CzUarsM3O05aG9z5otDZZ1Yg/?name=image.png)



## Workaround


Não há solução alternativa. A única opção para não integrar itens sem preço é desativar a opção "showIfNotAvailable".





