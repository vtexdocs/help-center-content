---
title: 'Configurar regra de Divergência de valores'
id: 6vQYuUfZVGDzDJjrvPczeh
status: PUBLISHED
createdAt: 2022-01-04T21:52:30.719Z
updatedAt: 2022-01-04T21:56:25.237Z
publishedAt: 2022-01-04T21:56:25.237Z
firstPublishedAt: 2022-01-04T21:56:25.237Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-netshoes
locale: pt
trackId: 5Ua87lhFg4m0kEcuyqmcCm
trackSlugPT: configurar-integracao-da-netshoes
---

Na integração com marketplaces como a Netshoes, por vezes há uma variação entre o preço definido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.

No Admin VTEX, em **PEDIDOS > Gerenciamento de pedidos > Autorização de pedidos**, a [regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) permite o controle de pedidos com divergência de preço. Somente usuários com [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (_Owner_) ou OMS Full podem configurar essa funcionalidade, conforme o passo a passo descrito em [Configuração da regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

A regra de Divergência de valores é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser configuradas para negar automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido. 

>⚠️ Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você atue como seller. Podem ser marketplaces VTEX, marketplaces externos, <a href= "https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro">conectores certificados (parceiros)</a> ou outros <a href= "https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex">conectores nativos</a> além da Netshoes.

É recomendável que a configuração da regra de Divergência de valores seja feita antes de você seguir para a próxima etapa da configuração da integração com a Netshoes. Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ficarão retidos até a criação da regra de Divergência de valores. Será possível acompanhá-los no Admin VTEX, em **MARKETPLACE > Integrações > Pedidos**.
