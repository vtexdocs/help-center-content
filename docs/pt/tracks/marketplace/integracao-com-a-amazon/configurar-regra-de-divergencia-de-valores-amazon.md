---
title: 'Configurar regra de Divergência de valores'
id: 4iQ0d6wkLzCqhMXBKFWgI7
status: PUBLISHED
createdAt: 2022-01-04T19:43:43.162Z
updatedAt: 2022-01-05T15:47:12.676Z
publishedAt: 2022-01-05T15:47:12.676Z
firstPublishedAt: 2022-01-04T20:33:45.370Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-amazon
locale: pt
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: configurar-integracao-com-a-amazon
order: 5
---

Na integração com marketplaces como a Amazon, por vezes há uma variação entre o preço definido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.

No Admin VTEX, em **PEDIDOS > Gerenciamento de pedidos > Autorização de pedidos**, a [regra de Divergência de valores](/pt/docs/tutorials/regra-de-divergencia-de-valores) permite o controle de pedidos com divergência de preço. Somente usuários com [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) Admin Super (_Owner_) ou OMS Full podem configurar essa funcionalidade, conforme o passo a passo descrito em [Configuração da regra de Divergência de valores](/pt/docs/tutorials/configuracao-da-regra-de-divergencia-de-valores).

A regra de Divergência de valores é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser configuradas para negar automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido. 

> ⚠️ Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você atue como seller. Podem ser marketplaces VTEX, marketplaces externos, [conectores certificados (parceiros)](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outros [conectores nativos](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex) além da Amazon.

É recomendável que a configuração da regra de Divergência de valores seja feita antes de você seguir para a próxima etapa da configuração da integração com a Amazon. Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ficarão retidos até a criação da regra de Divergência de valores. Será possível acompanhá-los no Admin VTEX, em **MARKETPLACE > Integrações > Pedidos**.
