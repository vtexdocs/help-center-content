---
title: SkuServicoForm.aspx não listando Tabelas de Valores no início para um tipo de Valor
id: 2QrjRVvJXiWmRXTYf8DrMK
status: PUBLISHED
createdAt: 2022-06-28T16:55:32.216Z
updatedAt: 2022-11-25T21:50:15.511Z
publishedAt: 2022-11-25T21:50:15.511Z
firstPublishedAt: 2022-06-28T16:55:32.529Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: skuservicoformaspx-nao-listando-tabelas-de-valores-no-inicio-para-um-tipo-de-valor
kiStatus: Backlog
internalReference: 335819
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Ao associar um serviço para uma SKU no nosso catálogo, para uma loja que tem múltiplos tipos de serviço e valores de serviço (campo Tipo de Valor), no início, quando um utilizador entra na UI, a lista de opções para um dado "Tipo de Serviço" está atualmente apenas a listar as opções associadas na tabela de Valores do primeiro tipo de serviço selecionado.

Por exemplo, na imagem abaixo existem 3 tipos de serviço: "Garantia", "seguros" e "Plano Tigo":

 ![](https://vtexhelp.zendesk.com/attachments/token/Rdyzxu0tAANzE5KykiV0oMjzm/?name=inline2069937537.png)

Após selecionar a opção neste campo, não importa qual, o campo "Tabela de Valores" mostra apenas os valores de serviço associados à primeira opção mostrada na lista "Tipo de Serviço":

 ![](https://vtexhelp.zendesk.com/attachments/token/Oir3SDEuyyHpavfyvjWVvzloD/?name=inline-854668487.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/tacfiTTFBD2gaHDsIFFqQh5nx/?name=inline-89998349.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/MHHcoIPlLX1S6sFbR1qU4PUgs/?name=inline-213983669.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/R5mVI5AJWsyCRMLsq3AQHssC4/?name=inline-775900967.png)

O utilizador deve primeiro selecionar o tipo de serviço e guardar a configuração mesmo com uma tabela de valores incorreta e depois, ao revisitá-la, o primeiro valor será novamente listado, mas desta vez, uma vez que o primeiro valor será o previamente selecionado, listará as opções desejadas:

 ![](https://vtexhelp.zendesk.com/attachments/token/D4bKJTmOebjtNL9K8YkUuZdUC/?name=inline1891813417.png)

Esta é a seleção que atualmente não está a funcionar:
 ![](https://vtexhelp.zendesk.com/attachments/token/3jCJvZUdD88zwNiQMtQN6KKh0/?name=inline-1019394985.png)

Aqui: https://github.com/vtex/vcs.commerce/blob/blaster/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx#L88
voltar: https://github.com/vtex/vcs.commerce/blob/blaster/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx.cs#L186
o problema é mais provável aqui: https://github.com/vtex/vcs.commerce/blob/657c58015196fd3422b1972ed0b82b144049e238/src/Comercio/Comercio/AdminWebSite/Site/SkuServicoForm.aspx.cs#L387

## Simulação

1) No SkuServicoTipo.aspx UI criar 2+ tipos de serviços
2) Criar, no SkuServicoValor.aspx UI 2+ valores de serviço e associar cada um a um tipo de serviço diferente.
3) Ir para o SkuServicoForm.aspx?IdSku= UI para qualquer SKU da loja.
4) Seleccionar um tipo de serviço nesta lista que não seja o primeiro da lista:
 ![](https://vtexhelp.zendesk.com/attachments/token/rbcX4EHqomHdq6jbBLh6Ug9sN/?name=inline-260448758.png)
5) Verifique as tabelas de valores, os valores associados não serão os correctos, mas a listagem para o primeiro valor, que no nosso exemplo acima é "Serviço 1".


## Workaround


Guardar a tabela de valores incorreta para um tipo de serviço na UI, revisitando-a posteriormente, e depois alterando-a para a tabela de valores desejada.

Por exemplo, no exemplo na seção Sumário desta KI, selecionámos 'Seguros' no tipo de serviço e inicialmente, as tabelas de valores listados eram as de 'Garantia'.

Se a guardar como 'seguros', mesmo com um valor incorreto na Tabela de Valores:
 ![](https://vtexhelp.zendesk.com/attachments/token/MVgY0cQ8thPq7qyiHOk49fLw9/?name=inline-949921420.png)

Depois de guardar e depois rever esta UI, as tabelas de valores corretas para os 'seguros' devem agora ser listadas e selecionáveis:

 ![](https://vtexhelp.zendesk.com/attachments/token/DZPRFPWvxmgO7HICXgfeRodNU/?name=inline-1837217771.png)

