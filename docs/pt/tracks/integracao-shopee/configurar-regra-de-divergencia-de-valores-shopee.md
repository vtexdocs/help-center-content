---
title: 'Configurar Regra de divergência de valores'
id: 1JR54rlpud2f3BwQivSlem
status: PUBLISHED
createdAt: 2025-03-17T15:08:20.761Z
updatedAt: 2025-07-01T18:35:28.702Z
publishedAt: 2025-07-01T18:35:28.702Z
firstPublishedAt: 2025-03-17T15:36:11.730Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-shopee
locale: pt
trackId: 4CaZCzU9ZO1CByH0haZ9hA
trackSlugEN: integracao-shopee
---

Na integração com marketplaces como a Shopee, por vezes há uma variação entre o preço definido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.

No Admin VTEX, em **Configurações da loja > Pedidos > Autorização de pedidos,** a [Regra de divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) permite o controle de pedidos com divergência de preço. Somente usuários com [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (Owner) ou OMS Full podem configurar essa funcionalidade, conforme o passo a passo descrito em [Configuração da regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

A Regra de divergência de valores é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser configuradas para negar automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido.

> ℹ️ Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você atue como seller. Podem ser marketplaces VTEX, marketplaces externos, conectores certificados (parceiros) ou outros conectores nativos além da Shopee.

É recomendável que a configuração da regra de Divergência de valores seja feita antes de você seguir para a próxima etapa da configuração da integração com a Amazon.  
Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ficarão retidos até a criação da Regra de divergência de valores. É possível acompanhá-los no Admin VTEX, em **Marketplace > Conexões > Pedidos.**

