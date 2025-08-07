---
title: "A exportação de valores de anexos do SKU não funcionam corretamente para sistemas operacionais em espanhol"
id: 75FXMEc3L2kI0JaFjyyZuU
status: PUBLISHED
createdAt: 2022-04-25T20:26:43.281Z
updatedAt: 2022-11-25T21:46:06.902Z
publishedAt: 2022-11-25T21:46:06.902Z
firstPublishedAt: 2022-04-25T20:26:44.068Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: a-exportacao-de-valores-de-anexos-do-sku-nao-funcionam-corretamente-para-sistemas-operacionais-em-espanhol
locale: pt
kiStatus: Backlog
internalReference: 566393
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o idioma do sistema operacional é o espanhol (Peru), a exportação dos valores dos anexos da SKU gera uma planilha com as colunas "Valor" e "Custo" incorretamente preenchidas



## Simulação


- Mude o idioma de seu sistema operacional para espanhol (Peru)
- Exportar a planilha de valores de serviço por URL: `/admin/Site/SkuVincularValorServico.aspx`
- Comparar o valor da planilha com o valor registrado ou com o valor do PDP



## Workaround


Alterar o idioma do sistema operacional para inglês/português para exportar ou alterar o valor na planilha

