---
title: 'Utilizando el control de resumen del carrito'
id: frequentlyAskedQuestions_625
status: DRAFT
createdAt: 2017-04-27T22:31:48.529Z
updatedAt: 2019-12-31T14:23:47.786Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:25.310Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slug: el-control-de-resumen-del-carrito
locale: es
legacySlug: utilizando-el-control-de-resumen-del-carrito
---

El control de resumen del carrito se utiliza para exhibir un resumen de cantidades y valores que ya fueron insertados en el carrito de compras. El control va a renderizar en la página la cantidad de ítems, cantidad de productos, cantidad de kits y valor total del carrito. En la implantación del css es posible definir cuál información será usada para el layout (display:block) y cuál no será exhibida (display:none).

Abajo el resultado del control sin aplicación de css y el html completo generado por el control:

[![controle-amount-items](/wp-content/uploads/help-antigo/2014/02/controle-amount-items.png)](/wp-content/uploads/help-antigo/2014/02/controle-amount-items.png "![controle-amount-items](/wp-content/uploads/help-antigo/2014/02/controle-amount-items.png)")

```
&lt;p&gt;Resumo do Carrinho&lt;/p&gt;
&lt;ul&gt;
&lt;li class="amount-products"&gt;&lt;strong&gt;&lt;span id="MostraTextoXml2"&gt;Total de Produtos:&lt;/span&gt;&lt;/strong&gt; &lt;em class="amount-products-em"&gt;0&lt;/em&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt; &lt;/p&gt;
&lt;ul&gt;
&lt;li class="amount-items"&gt;&lt;strong&gt;&lt;span id="MostraTextoXml3"&gt;Itens:&lt;/span&gt;&lt;/strong&gt; &lt;em class="amount-items-em"&gt;0&lt;/em&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt; &lt;/p&gt;
&lt;ul&gt;
&lt;li class="amount-kits"&gt;&lt;strong&gt;&lt;span id="MostraTextoXml4"&gt;Total de Kits:&lt;/span&gt;&lt;/strong&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt; &lt;/p&gt;
&lt;ul&gt;
&lt;li class="total-cart"&gt;&lt;strong&gt;&lt;span id="MostraTextoXml5"&gt;Valor Total:&lt;/span&gt;&lt;/strong&gt; &lt;em class="total-cart-em"&gt;R$ 0,00&lt;/em&gt;&lt;/li&gt;
&lt;/ul&gt;
```

Vea también algunos ejemplos del control con CSS aplicado:

[![controle-busca-exemplo2](/wp-content/uploads/help-antigo/2014/02/controle-busca-exemplo2.png)](/wp-content/uploads/help-antigo/2014/02/controle-busca-exemplo2.png "![controle-busca-exemplo2](/wp-content/uploads/help-antigo/2014/02/controle-busca-exemplo2.png)")

[![controle-resumo-carrinho](/wp-content/uploads/help-antigo/2014/02/controle-resumo-carrinho.png)](/wp-content/uploads/help-antigo/2014/02/controle-resumo-carrinho.png "![controle-resumo-carrinho](/wp-content/uploads/help-antigo/2014/02/controle-resumo-carrinho.png)")
