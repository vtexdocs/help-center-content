---
title: 'Pagamentos em marketplaces VTEX'
id: 2kYOfWCZYweJkYl18bw9yD
status: PUBLISHED
createdAt: 2022-01-26T20:27:07.040Z
updatedAt: 2023-03-22T19:01:11.613Z
publishedAt: 2023-03-22T19:01:11.613Z
firstPublishedAt: 2022-01-26T21:27:07.735Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: pagamentos-em-marketplaces-vtex
legacySlug: pagamentos-em-marketplaces-vtex
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Neste artigo, abordaremos os diferentes cenários relacionados a pagamentos em [marketplaces VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#ser-um-marketplace-vtex) e as configurações envolvidas. 

Para clientes VTEX no Brasil, tanto o seller quanto o marketplace podem processar pagamentos, o que depende das condições comerciais negociadas entre ambos e o provedor de pagamentos. 

Confira abaixo as opções para Split de pagamentos e as configurações necessárias para que o seller ou o marketplace processem pagamentos.

## Split de pagamentos

Pedidos realizados em um marketplace podem conter itens de múltiplos sellers, que são pagos numa experiência unificada de checkout no _storefront_ (frente da loja) do marketplace. A VTEX oferece a solução [Split de pagamentos](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) para que a divisão do valor de um pedido seja feita automaticamente, com base nas comissões configuradas ao [Adicionar seller](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392).

Caso o seller seja o processador de pagamentos, ele deve operar sob as condições determinadas em nosso [Split de transação](https://help.vtex.com/pt/tutorial/split-payment#split-de-transacao). Da mesma forma, se o marketplace VTEX processar pagamentos, deve seguir o fluxo de [Split de recebíveis](https://help.vtex.com/pt/tutorial/split-payment--6k5JidhYRUxileNolY2VLx#split-de-recebiveis), ou realizar as suas transferências fora do ambiente da VTEX. 

<div class="alert alert-info">
Clientes VTEX no Brasil podem utilizar tanto o split de transação quanto o split de recebíveis. Já clientes VTEX em outros países devem utilizar somente o split de transação. Note que alguns países impõem restrições sobre o repasse de valores entre sellers e marketplaces. Informe-se sobre as restrições com as autoridades financeiras do seu país antes de construir sua arquitetura de pagamentos.
</div>

Para definir os valores para repasse externo ao ambiente da VTEX, utilize os [relatórios do OMS](https://help.vtex.com/pt/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY) para calcular comissões. No Brasil, a movimentação ou repasse de valores em ambiente externo, sem a participação da plataforma VTEX, somente poderá ser realizada por instituições financeiras.

## Configurações de pagamentos

Confira abaixo as configurações necessárias no seu Admin VTEX para criar comissões sobre pedidos de sellers e para tornar o seller ou marketplace o processador de pagamentos.

<div class="alert alert-info">
Caso a sua integração com sellers externos ou sellers VTEX seja feita por meio de API, confira <a href = "https://developers.vtex.com/vtex-rest-api/docs/external-seller-processing-payments">External seller processing payment</a>. 
</div>

### Configurar comissões para seller

Ao [Adicionar seller](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392), o marketplace configura as comissões por produto, frete ou categoria para os pedidos daquele seller. Para configurar as comissões para seus sellers, no Admin VTEX:

1. No Admin VTEX, acesse **Marketplace** > **Gerenciamento**, ou digite **Gerenciamento** na barra de busca no topo da página.  
2. Escolha um seller da lista e clique em `Alterar/Visualizar`.     
_Se você utiliza outra versão da página Gerenciamento, basta clicar no nome do seller desejado._  
3. Altere os campos da seção **Comissionamentos**.   
_Se você utiliza outra versão da página Gerenciamento, altere os campos da seção **Acordos Comerciais**._  
4. Clique em `Salvar`.  

### Marketplace VTEX processando pagamentos 

Para que o sistema do marketplace processe pagamentos, é preciso acessar a seção de [Pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) no ambiente VTEX e configurar: 

- [Afiliações de gateway](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway)  
- [Condições de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3)   
- [Conector de pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)  
- [Antifraude](https://help.vtex.com/pt/tutorial/como-configurar-antifraude--tutorials_446)   

Para finalizar a configuração que torna o marketplace o processador de pagamentos, ao [Configurar afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187), o seller precisa deixar a opção **Usar meu meio de pagamento** desmarcada.  

### Seller VTEX processando pagamentos

Para que o sistema do seller processe pagamentos, o seller precisa acessar a seção de [Pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) no ambiente VTEX e configurar as etapas descritas abaixo. Esta opção também vale para lojas físicas cadastradas como sellers white label.   

- [Política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace--tutorials_404)  
- [Afiliações de gateway](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway)  
- [Condições de pagamento](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/6bzGxlz4inf8sKmvZ1c7i3)   
- [Conector de pagamentos](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/7pAEMAo4iqNHwYOarZ3zgm)  
- [Antifraude](https://help.vtex.com/pt/tutorial/como-configurar-antifraude--tutorials_446)  

Uma vez configurado o sistema de Pagamentos, ao [Configurar afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187) para o marketplace em questão, o seller precisa marcar a opção **Usar meu meio de pagamento**.

## Saiba mais

- [Configurar marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)

