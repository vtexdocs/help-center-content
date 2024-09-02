---
title: 'Configurar regra de Divergência de valores'
id: 4rGMP9mEVOKCZCM71yzxnj
status: PUBLISHED
createdAt: 2022-01-05T16:09:05.484Z
updatedAt: 2023-08-11T18:26:09.918Z
publishedAt: 2023-08-11T18:26:09.918Z
firstPublishedAt: 2022-01-05T16:11:57.454Z
contentType: trackArticle
productTeam: Channels
slug: configurar-regra-de-divergencia-de-valores-dafiti
locale: pt
trackId: 4wF4RBx9ygEkimW6SsKw8i
trackSlugPT: configurar-integracao-da-dafiti
---

Na integração com marketplaces como a Dafiti, por vezes há uma variação entre o preço definido pelo seller e aquele oferecido pelo marketplace, resultando em pedidos fechados com valores diferentes do esperado. Isso pode ocasionar pedidos com erro de divergência de preço.

No Admin VTEX, em **Configurações da loja > Pedidos > Autorização de pedidos**, a [regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) permite o controle de pedidos com divergência de preço. Somente usuários com [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (_Owner_) ou OMS Full podem configurar essa funcionalidade, conforme o passo a passo descrito em [Configuração da regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe).

A regra de Divergência de valores é composta de uma ou mais regras de autorização, sendo que cada uma delas corresponde a um intervalo percentual do preço do pedido. As regras de autorização podem ser configuradas para negar automaticamente, aprovar automaticamente, ou exigir autorização manual do pedido. 

>⚠️ Para que a regra de Divergência de valores seja válida, após a conﬁguração é
> necessário enviar o campo `isCreatedAsync` na API [Place fulfillment order](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders), independente do tipo de conector utilizado, seja ele, marketplace externo, [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outros [conectores nativos](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex) além da Dafiti.  

É recomendável que a configuração da regra de Divergência de valores seja feita antes de você seguir para a próxima etapa da configuração da integração com a Dafiti. Descumprir esta recomendação não impede que a integração seja concluída, mas pedidos com divergência de preço ficarão retidos até a criação da regra de Divergência de valores. Será possível acompanhá-los no Admin VTEX, em **Marketplace > Conexões > Pedidos,** ou digite **Pedidos** na barra de busca.
