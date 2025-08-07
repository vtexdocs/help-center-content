---
title: 'Configurar remessa'
id: tutorials_118
status: PUBLISHED
createdAt: 2017-04-27T22:18:51.290Z
updatedAt: 2023-03-28T13:20:14.467Z
publishedAt: 2023-03-28T13:20:14.467Z
firstPublishedAt: 2017-04-27T23:00:43.407Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: setting-up-shipment
legacySlug: como-funciona-a-remessa
locale: pt
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

Esta é uma configuração amplamente utilizada quando um fluxo muito grande de pedidos acaba gerando uma demanda logística considerável, pois possibilita que um pacote aguarde o tempo de preparo de outro para ser enviado em grupo, por uma mesma transportadora, a um destinatário final.

<div class="alert alert-warning">
Os grupos de remessa são criados pela somatória do tempo de custo do Estoque até a Doca e do tempo de custo da Doca.
</div>

Na imagem abaixo vemos a configuração de remessa de __6 dias.__ Cada caixinha representa o custo em dias de um pacote, considerando apenas o __custo de estoque e o custo da doca.__

A primeira caixinha com tempo total de __2 dias__ irá esperar o item representado pela segunda caixinha com tempo total de __5 dias.__ Pois definimos que o tempo da remessa é de até __6 dias__, ou seja, itens com tempo de entrega dentro de um período de __6 dias__ __serão agrupados__. A terceira caixinha irá seguir em uma entrega diferente pois excede o tempo da remessa.

O período considera T = 0 como a data do pedido.

![Configuração em estoque e entrega ](//images.ctfassets.net/alneenqid6w5/2lvFxIIkeZtgpqm66yRiyf/3dd5e11e0c89ad2285777f6a0a8eadc5/Configura____o_em_estoque_e_entrega_PT.png)

## Como configurar a remessa
1. No Admin VTEX, acesse **Configurações da loja > Envio > Configurações**, ou digite *Envio* na barra de busca no topo da página e selecione *Configurações da loja / Envio*.  
2. Em **Agrupar produtos na mesma remessa**, preencha o campo **Criar grupos de remessa com intervalos de X dia(s)**.  
3. Clique no botão **Salvar**.  
