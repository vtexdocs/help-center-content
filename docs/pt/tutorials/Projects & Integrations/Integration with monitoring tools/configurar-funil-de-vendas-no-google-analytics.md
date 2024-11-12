---
title: 'Configurar funil de vendas no Google Analytics'
id: 4yM6QJumWs6iaEQuO42mu2
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.554Z
updatedAt: 2021-10-04T18:45:21.795Z
publishedAt: 2021-10-04T18:45:21.795Z
firstPublishedAt: 2019-01-24T22:10:10.005Z
contentType: tutorial
productTeam: Shopping
author: authors_4
slugEN: setting-up-the-sales-funnel-on-google-analytics
locale: pt
legacySlug: configuração-funil-de-vendas-no-google-analytics
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

As metas do **Google Analytics** servem para ajudar a avaliar se os objetivos de seu site estão sendo cumpridos. Esse artigo vai mostrar como configurar uma meta de conversão, conhecida como __Funil de Vendas__, em lojas que usam o SmartCheckout da VTEX. Para saber mais sobre metas acesse o tópico de conversão na ajuda do Google Analytics.

Com o funil de vendas configurado, é possível acompanhar e analisar os passos do cliente até a finalização de um pedido. Para configurar o funil de vendas vamos levar em conta que o processo de compra se inicia na tela do seu produto e passa pelo carrinho de compras, checkout (dados pessoais, entrega e frete, pagamento) e chega até a meta, que é a página de pedido confirmado.

>ℹ️ Para facilitar, toda a configuração apresentada neste artigo pode ser [importada diretamente para o Google Analytics](https://support.google.com/analytics/answer/1032415?hl=pt-BR" target="_blank) com [este modelo](https://analytics.google.com/analytics/web/template?uid=tTp2GkIJRiGodszJbq8RsA" target="_blank).

Para configuração manual ou edição de uma meta já existente, o primeiro passo é acessar o Analytics e clicar no botão __Administrador__ no canto inferior esquerdo. Em seguida, ir na opção __Metas__, da coluna "Vista".

![image](https://images.ctfassets.net/alneenqid6w5/1br6W1yFRuMWoO2wW8Iu04/de2c4c8938a856821b25fde18b2632a7/image.png)

Na tela de administração de metas, opte por criar uma nova ou editar uma já existente.

__No passo 1__ você pode seguir com uma meta de tipo personalizado:

![image](//images.ctfassets.net/alneenqid6w5/7GPxGfEoaA2GUqOGA48U2a/3b731dfd468a389813d0da16802df98f/image.png)

__No passo 2__ você pode definir o nome que preferir para a sua meta e um código de posição (de uso interno do Google Analytics). Em tipo, vamos usar "Destino":

![image](//images.ctfassets.net/alneenqid6w5/6Sdi6PJ4e4SKiuUSeEgMii/d0f1e7fb597333867e4d56453922847a/image.png)

__No passo 3__ temos as configurações mais sensíveis. Nele configuramos a página que determina a conclusão da meta e o caminho que os clientes vão percorrer para atingi-la.

No campo "Destino" selecione a opção expressão regular e insira a URL da página de pedido concluído: `^/checkout/orderPlaced`

![image](//images.ctfassets.net/alneenqid6w5/6lxVMRQt7GWcqqSiCGe40g/177d2cf23b65d5f2134fc389a5646b9b/image.png)

Depois configure o caminho que o cliente vai percorrer até finalizar um pedido. Neste caso, estamos levando em conta que o processo de compra inicia na tela do produto; então meu funil vai servir para medir a quantidade de clientes que acessam essa tela, quantos pedidos foram finalizados e em qual passo os clientes estão desistindo da compra.

Ainda __no passo 3__, então, ative a opção __Funil__ com as etapas a seguir:

1. __Produto:__ `/p($|\?)` (não obrigatório)
2. __Carrinho:__ `^/checkout/(\?.*)?(#/cart)$`
3. __Identificação:__ `^/checkout/(\?.*)?#/email$`
4. __Dados pessoais__: `^/checkout/(\?.*)?#/profile$`
5. __Entrega__: `^/checkout/(\?.*)?#/shipping$`
6. __Pagamento__: `^/checkout/(\?.*)?#/payment$`

![image](//images.ctfassets.net/alneenqid6w5/4gzupPXI4w0gYWISUaCUQS/efb5f7cd239cae3cfd992b2b649e58b9/image.png)

Uma forma de verificar se a meta está configurada corretamente é usar o link "Verifique essa meta". O Google vai gerar uma simulação da conversão da meta nos últimos 7 dias.

Agora é só salvar a meta e aguardar o tempo que o sistema leva para começar a contabilizar os dados. Normalmente esse tempo é de 24 horas.

Para visualizar seu funil, consulte os relatórios do Analytics e acesse o menu __Conversões__ e a opção __Metas__.

>⚠️ Se você tiver uma loja multilíngue com idiomas como [subdiretórios com gTLD](https://support.google.com/webmasters/answer/182192?hl=pt-BR#locale-specific-urls) você deve substituir cada [circunflexo](https://support.google.com/analytics/answer/1034376?hl=pt-BR&ref_topic=1034375) (`^`) por uma [regex ](https://support.google.com/analytics/answer/1034324?hl=en) que corresponda aos diferentes subdiretórios. Por exemplo, se o seu site estiver disponível em:
>
> * **Italiano: **`example.com/it`
>
> * **Espanhol: **`example.com/es`
>
> * **Francês: **`example.com/fr`
>
> Você teria que alterar seu destino:
>
> ***De: **`^/checkout/orderPlaced` 
>
> ***Para: **`^/(it|es|fr)/checkout/orderPlaced`
>
> Isso também precisaria ser feito para cada etapa do funil.

>⚠️ As configurações de funil deste artigo foram atualizadas para acompanhar a nova versão de [carrinho compartilhado do SmartCheckout](http://help.vtex.com/pt/tutorial/o-que-e-o-carrinho-compartilhado).
>
> Para efeito de comparação, abaixo temos a configuração antiga:
>
> Produto: `/p($|\?)` (não obrigatório)
>
> Carrinho: `^/checkout/(#/cart)?$`
>
> Identificação: `^/checkout/#/email`
>
> Dados Pessoais: `^/checkout/#/profile`
>
> Entrega: `^/checkout/#/shipping`
>
> Pagamento: `^/checkout/#/payment`
> 
