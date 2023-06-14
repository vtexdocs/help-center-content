---
title: Como funciona o tipo de entrega
id: tutorials_126
status: PUBLISHED
createdAt: 2017-04-27T22:18:17.250Z
updatedAt: 2023-05-31T14:45:20.914Z
publishedAt: 2023-05-31T14:45:20.914Z
firstPublishedAt: 2017-04-27T23:00:44.173Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-funciona-o-tipo-de-entrega
legacySlug: como-funciona-o-tipo-de-entrega
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

Tipo de entrega é um dado no cadastro de transportadora que fará o agrupamento de transportadores com o mesmo valor. Funciona como uma categoria e como uma identificação que será exibida no carrinho, na finalização de compra.

## Agrupar frete

O tipo de frete como agrupador será usado quando mais de uma transportadora realiza o mesmo tipo de entrega. Ou seja, deve ser utilizado o mesmo tipo quando as transportadoras possuem características parecidas.

> Exemplo: as transportadoras _EnglishGo_ e _Transportista_ fazem entregas do tipo **Normal**, a transportadora _TranspAgenda_ faz entrega do tipo **Agendado**, enquanto as transportadoras _Expressa_ e a _Ligeirinho_ realizam entregas do tipo **Expressa**.

## Exibir no fechamento de compra

No carrinho, não são exibidos os nomes das transportadoras e sim os tipos de frete. Por isso, é importante que as designações sejam amigáveis, e que cada transportadora exibida tenha um tipo diferente. Do contrário, será exibida a transportadora com menor prazo e valor dentro do tipo.

Segue uma imagem de como seriam exibidas as opções de frete no fechamento de compra de acordo com o exemplo citado:

![Transportadoras Checkout](//images.ctfassets.net/alneenqid6w5/1c85gOqY9uokEQ2UGI4YAI/87dd9e5eeb8d1a45233e80ce1b7b8de3/Transportadoras_Checkout.png)

Note que, mesmo tendo cinco transportadoras cadastradas, só aparecem duas opções de frete: **Agendado** e **Normal**. Isso acontece por dois motivos: 

1. O produto escolhido pertence a um estoque associado apenas a transportadoras que fazem entregas do tipo **Normal** e **Agendado**.
2. Mesmo que existam duas transportadoras cadastradas para entregas do tipo **Normal**, só é exibida aquela que faz o serviço com menor preço ou menor prazo.
