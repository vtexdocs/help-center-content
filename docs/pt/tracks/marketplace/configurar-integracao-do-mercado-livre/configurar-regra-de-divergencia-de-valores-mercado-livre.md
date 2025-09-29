---
title: 'Configurar regra de Divergência de valores'
id: 1ivH7sJoS771wZFMkaFdpt
status: PUBLISHED
createdAt: 2022-01-05T16:18:22.558Z
updatedAt: 2024-03-27T20:43:18.424Z
publishedAt: 2024-03-27T20:43:18.424Z
firstPublishedAt: 2022-01-05T16:22:48.459Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-mercado-libre
locale: pt
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugEN: configurar-integracao-do-mercado-livre
order: 5
---

Na integração com marketplaces como o Mercado Livre, por vezes há uma variação entre o preço definido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.

No Admin VTEX, em **Configurações da loja > Pedidos > Autorização de pedidos**, a [regra de Divergência de valores](/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) permite o controle de pedidos com divergência de preço. Somente usuários com [perfil de acesso](/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (_Owner_) ou OMS Full podem configurar essa funcionalidade, conforme o passo a passo descrito em [Configuração da regra de Divergência de valores](/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

A regra de Divergência de valores é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser configuradas para negar automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido. 

> ⚠️ Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você atue como seller. Podem ser marketplaces VTEX, marketplaces externos, [conectores certificados (parceiros)](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outros [conectores nativos](/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex) além do Mercado Livre.

É recomendável que a configuração da regra de Divergência de valores seja feita antes de você seguir para a próxima etapa da configuração da integração com o Mercado Livre. Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ficarão retidos até a criação da regra de Divergência de valores. Será possível acompanhá-los no Admin VTEX, em **Marketplace > Conexões > Pedidos**.
