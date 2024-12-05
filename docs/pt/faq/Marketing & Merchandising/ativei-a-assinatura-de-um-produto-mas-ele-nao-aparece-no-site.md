---
title: 'Ativei a assinatura de um produto, mas ele não aparece no site. Por quê?'
id: 4HTtsuhjckHBgkBIyrH8tz
status: PUBLISHED
createdAt: 2019-01-28T19:20:20.661Z
updatedAt: 2021-04-30T14:35:48.244Z
publishedAt: 2021-04-30T14:35:48.244Z
firstPublishedAt: 2019-01-28T19:20:54.475Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: i-ve-activated-a-product-subscription-but-it-doesnt-appear-on-the-site
locale: pt
legacySlug: ativei-a-recorrencia-de-um-produto-mas-ele-nao-aparece-no-site
---

>⚠️ **Atenção:** existem duas formas de configurar coleções, por meio do CMS ou utilizando o módulo de Coleções Beta. Este artigo refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do CMS</a>.

Sempre que você alterar ou criar uma assinatura, é preciso reindexar seus SKUs para que ela funcione corretamete. Ao fazer isso, você estará salvando a informação de que aquele SKU tem um anexo (neste caso, a assinatura) e deve ser tratado de forma diferente.

Para reindexar apenas os SKUs da assinatura, e não toda a sua base, você pode criar uma coleção dos SKUs que fazem parte da assinatura e incluí-los manualmente para que somente eles sejam reindexados.

_Para fazer a inclusão manual de SKUs específicos, siga o passo a passo abaixo._

1. No Admin, entre no __CMS__.
2. Clique na pasta __CMS__.
3. Depois, em __Product Clusters (Collections)__.
4. Clique em __New collection__.
5. Dê um nome à sua Coleção (os demais campos não devem ser preenchidos).
6. Insira os SKUs no campo informado e __separe-os com vírgulas__.

![recurrence-specific-skus](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Marketing%20&%20Merchandising/ativei-a-assinatura-de-um-produto-mas-ele-nao-aparece-no-site_1.png)

Por fim, dê um nome ao __Grupo__ da sua Coleção e clique em __Save Group__.
