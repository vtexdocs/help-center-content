---
title: Usando o controle de resumo do carrinho
id: frequentlyAskedQuestions_625
status: DRAFT
createdAt: 2017-04-27T22:31:48.529Z
updatedAt: 2019-12-31T14:23:47.786Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:25.310Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_84
slug: o-controle-de-resumo-do-carrinho
legacySlug: usando-o-controle-de-resumo-do-carrinho
---

O controle de resumo do carrinho é utilizado para exibir um resumo de quantidades e valores que já foram inseridos no carrinho de compras. O controle vai renderizar na página a quantidade de items, quantidade de produtos, quantidade de kits e valor total do carrinho. Na implantação do css é possível definir quais informações serão usadas para o layout(display:block) e quais não serão exibidas(display:none).

Abaixo o resultado do controle sem aplicação de CSS e o HTML completo gerado pelo controle:

![controle-amount-items](/wp-content/uploads/help-antigo/2014/02/controle-amount-items.png)

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

Veja também alguns exemplos do controle com CSS aplicado:

[![controle-busca-exemplo2](/wp-content/uploads/help-antigo/2014/02/controle-busca-exemplo2.png)](/wp-content/uploads/help-antigo/2014/02/controle-busca-exemplo2.png "![controle-busca-exemplo2](/wp-content/uploads/help-antigo/2014/02/controle-busca-exemplo2.png)")

[![controle-resumo-carrinho](/wp-content/uploads/help-antigo/2014/02/controle-resumo-carrinho.png)](/wp-content/uploads/help-antigo/2014/02/controle-resumo-carrinho.png "![controle-resumo-carrinho](/wp-content/uploads/help-antigo/2014/02/controle-resumo-carrinho.png)")
