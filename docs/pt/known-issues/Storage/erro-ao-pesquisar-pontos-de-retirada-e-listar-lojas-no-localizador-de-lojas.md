---
title: 'Erro ao pesquisar pontos de retirada e listar lojas no localizador de lojas'
id: Ycy0EPwfhPfDUx1abDMb2
status: PUBLISHED
createdAt: 2024-10-17T00:03:29.004Z
updatedAt: 2024-11-12T21:16:05.923Z
publishedAt: 2024-11-12T21:16:05.923Z
firstPublishedAt: 2024-10-17T00:03:29.895Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-searching-for-pickup-points-and-listing-stores-in-the-store-locator
locale: pt
kiStatus: Backlog
internalReference: 1118712
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao pesquisar um ponto de coleta em Logística, pode ocorrer o seguinte erro:
 ![](https://vtexhelp.zendesk.com/attachments/token/tGzdaXqZCHcgtcGaPagLU0yZu/?name=image.png)

    Ocorreu um erro ao carregar os pontos de coleta. Por favor, recarregue a página.


Além disso, nesse mesmo cenário, há um impacto na loja on-line, que usa o aplicativo Store Locator para listar suas lojas, então a lista de lojas não será exibida:
 ![](https://vtexhelp.zendesk.com/attachments/token/Dv85rVttxoEMwVXMsMmTxWoI1/?name=image.png)

## Simulação


**No administrador**

1. Acesse a lista de pontos de coleta na logística: https://accountname.myvtex.com/admin/pickup-points;
2. Digite um termo de pesquisa para o ponto de coleta, como "West";
3. Intermitentemente, o erro acima pode ocorrer, portanto, a mensagem de erro será exibida.

**Na loja on-line que usa o aplicativo Store Locator**

1. Acesse a loja on-line;
2. Vá para a página para ver todas as lojas;
3. Intermitentemente, as lojas não carregam

## Workaround


Como isso ocorre de forma intermitente, você pode tentar novamente em alguns instantes.
Você também pode listar todas as lojas de retirada (da API de logística), localizá-la na resposta e identificar seu **id**. Em seguida, adicione o ID ao URL do administrador. Para até 1.000 PUPs, você pode usar a API "List pickup points". Acima desse número, use a API "List paged pickup points" (lembrando-se de navegar pelas páginas):
 ![](https://vtexhelp.zendesk.com/attachments/token/EfD2BHKtWRI9FMXxDp8ne0Y0Y/?name=image.png)
 ![](https://vtexhelp.zendesk.com/attachments/token/FlXGbHMAa5B0jvIioHRPRsw0S/?name=image.png)





