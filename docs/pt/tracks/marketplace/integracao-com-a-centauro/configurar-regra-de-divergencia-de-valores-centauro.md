---
title: 'Configurar regra de Divergência de valores'
id: 7wPUgeKAXnXSTt3YPizuSp
status: PUBLISHED
createdAt: 2022-01-04T21:43:40.170Z
updatedAt: 2022-01-04T21:48:20.492Z
publishedAt: 2022-01-04T21:48:20.492Z
firstPublishedAt: 2022-01-04T21:48:20.492Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-price-divergence-rule-centauro
locale: pt
trackId: D8Qnjbr5lfLkUfMRhsfbj
trackSlugEN: integracao-com-a-centauro
order: 3
---

Na integração com marketplaces como a Centauro, por vezes há uma variação entre o preço definido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.

No Admin VTEX, em **PEDIDOS > Gerenciamento de pedidos > Autorização de pedidos**, a [regra de Divergência de valores](/pt/docs/tutorials/regra-de-divergencia-de-valores) permite o controle de pedidos com divergência de preço. Somente usuários com [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) Admin Super (_Owner_) ou OMS Full podem configurar essa funcionalidade, conforme o passo a passo descrito em [Configuração da regra de Divergência de valores](/pt/docs/tutorials/configuracao-da-regra-de-divergencia-de-valores).

A regra de Divergência de valores é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser configuradas para negar automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido. 

> ⚠️ Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você atue como seller. Podem ser marketplaces VTEX, marketplaces externos, [conectores certificados (parceiros)](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-conector-certificado-parceiro) ou outros [conectores nativos](/pt/docs/tutorials/estrategias-de-marketplace-na-vtex#integrado-a-conector-nativo-vtex) além da Centauro.

É recomendável que a configuração da regra de Divergência de valores seja feita antes de você seguir para a próxima etapa da configuração da integração com a Centauro. Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ficarão retidos até a criação da regra de Divergência de valores. Será possível acompanhá-los no Admin VTEX, em **MARKETPLACE > Integrações > Pedidos**.
