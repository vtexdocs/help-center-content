---
title: 'Como vincular duas promoções ao mesmo cupom'
id: 4xz45k6idaMF9nzTqOL9ik
status: PUBLISHED
createdAt: 2019-02-22T15:33:19.922Z
updatedAt: 2022-04-07T21:03:35.235Z
publishedAt: 2022-04-07T21:03:35.235Z
firstPublishedAt: 2019-02-22T15:36:33.971Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: tQE5om2IkUGJTtk7aX8Yl
slug: como-vincular-duas-promocoes-ao-mesmo-cupom
locale: pt
legacySlug: como-sincronizar-duas-promocoes-ao-mesmo-cupom
---

Caso seja necessário, é possível gerar um [cupom](https://help.vtex.com/pt/tutorial/como-criar-cupom "cupom") de desconto com o valor igual ao total de uma compra. Assim, o cliente pode realizar um novo pedido sem pagar nada a mais por isso. 

O mais comum é que esse valor seja relativo a duas quantias: o preço nominal do produto e o frete. 

Por conta disso, é preciso criar duas [promoções regulares](https://help.vtex.com/pt/tutorial/promocao-regular "promoções") relacionadas ao mesmo cupom:

- Uma promoção de frete grátis.
- Uma promoção de desconto de valor nominal.

Confira abaixo como realizar esse processo:

1. Acesse __Promoções e Taxas__.
2. Clique em `Promoções`.
3. Clique na primeira promoção regular que deseja configurar.
4. Vá para a seção __Quais as condições para a promoção ser válida?__.
5. Insira o código do cupom em __utm_source__.

  ![Sincronizar promoções no mesmo cupom - 1 - PT](https://images.ctfassets.net/alneenqid6w5/7yJhwPnclx3tCiJdgpcYyv/070d7f66702c0c4c71fa1431b3d896fc/7yJhwPnclx3tCiJdgpcYyv_-_PT.png)

6. Clique em `Criar cupom a partir das UTMs acima`.
7. Clique em `Salvar`.
8. Retorne para o painel __Promoções__.
9. Repita o processo com a segunda promoção regular.
10. Ao final, ambas as promoções devem apresentar a mesma UTM.

  ![Sincronizar promoções no mesmo cupom - 2 - PT](https://images.ctfassets.net/alneenqid6w5/5nhdQy1Y4YWs4pHHokSA44/4aebcc54458e4661a94360cf6d9f566a/5nhdQy1Y4YWs4pHHokSA44_-_PT.png)

Desse modo, o cliente pode abater os dois valores antes de finalizar a compra. 
