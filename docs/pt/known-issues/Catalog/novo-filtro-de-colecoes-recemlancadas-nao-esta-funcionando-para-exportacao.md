---
title: "Novo filtro de coleções 'Recém-lançadas' não está funcionando para Exportação"
id: 7n6JZhsHxN8k27DUHOhgYg
status: PUBLISHED
createdAt: 2022-05-11T13:58:31.689Z
updatedAt: 2024-07-01T18:48:19.827Z
publishedAt: 2024-07-01T18:48:19.827Z
firstPublishedAt: 2022-05-11T13:58:32.282Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: new-collections-newly-released-filter-is-not-working-for-exports
locale: pt
kiStatus: No Fix
internalReference: 576760
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O filtro de produtos "Recentemente Lançado" no novo módulo de coleções busca produtos que foram definidos com a variável data de lançamento no passado recente. Ele está presente no seguinte componente da IU:

 ![](https://vtexhelp.zendesk.com/attachments/token/pFLlcE3tDbGcA0bgmlAhPNccB/?name=image.png)

No entanto, ao combinar esta funcionalidade com a exportação de chapas, este filtro é ignorado, trazendo todos os produtos dentro da coleção.






## Simulação


1 - Vá para o novo módulo de coleções e escolha uma coleção

2 - Na listagem da coleção principal, use o filtro "Recém-liberado", observe que você precisa ter pelo menos 1 produto com o valor "Data de liberação" definido na faixa filtrada. Este valor pode ser definido na página de Configuração do Produto.

3 - Um dado valor de produtos "recém-lançados" será filtrado e listado na interface de usuário.

4 - Selecione a funcionalidade "Exportar

5 - Exportar uma folha SKU para esta coleção

6 - Tcheca o número de registros exportados, será a quantidade total de produtos da coleção, não os recém-libertados.






## Workaround


Utilize filtros alternativos para sua exportação.

