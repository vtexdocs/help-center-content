---
title: 'Configurar geolocalização no checkout'
id: tutorials_4345
status: PUBLISHED
createdAt: 2017-04-27T21:50:59.353Z
updatedAt: 2023-03-24T14:20:33.982Z
publishedAt: 2023-03-24T14:20:33.982Z
firstPublishedAt: 2017-04-27T23:11:15.960Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: geolocation-at-checkout
locale: pt
legacySlug: geolocalizacao-no-checkout
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

O objetivo deste tutorial é ensinar os passos necessários para utilizar a geolocalização no checkout da sua loja. 

Por meio desta funcionalidade, é possível fazer com que as entregas usem como base um ponto geográfico (latitude e longitude) em vez de um código postal.

### Como isso melhora a minha loja?

A funcionalidade de geolocalização permite ao seu cliente a autogestão na busca pelo endereço de entrega desejado. 

Ou seja, no momento do checkout, ele tem à disposição uma ferramenta com a habilidade de geolocalizar endereços do Google Maps com um ícone marcador de posição num mapa. 

Isto dá ao usuário a segurança visual de que o pedido chegará ao local que ele escolheu. As informações de localização se completarão automaticamente assim que o ponto seja carregado no mapa.

Essa funcionalidade é especialmente útil em regiões com uma estrutura de códigos postais mal-definida.

### Configurando a logística

Para utilizar essa funcionalidade, siga os passos abaixo.

Antes de mais nada, é necessário obter uma Javascript API Key do Google Maps que permita a integração com o serviço de geolocalização do Google. Você pode ler mais sobre como obtê-la em:

[https://developers.google.com/maps/documentation/javascript/get-api-key](https://developers.google.com/maps/documentation/javascript/get-api-key)

Com a API Key em mãos, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Envio > Envio por geolocalização__, ou digite __Envio por geolocalização__ na barra de busca no topo da página.
2. Insira a API Key no campo disponível e clique em __Cadastrar chave__.

![Geolocalizacao 1 PT](//images.ctfassets.net/alneenqid6w5/1WnSV74cA82WY8kGscAiy2/68eeec258fd124695047187dc5e15b51/Geolocalizacao_1_PT.png)

>ℹ️ Em alguns países, o Google Maps não realiza um mapping de alta qualidade. Com isso, pode acontecer de certos endereços serem mal escritos ou de o Google indicar um endereço incorreto. Nestes casos, deve-se corrigir o endereço diretamente no mapa.

### Configurando o polígono

Para que essa funcionalidade trabalhe corretamente, é necessário cadastrar os polígonos correspondentes às áreas de entrega desejadas no mapa. 

Em seguida, deve-se associá-los às transportadoras que farão as entregas, por meio da inclusão dos IDs desses polígonos na tabela de frete. Saiba como fazer isso no artigo [Cadastrando geolocalização](/pt/tutorial/gerenciar-geolocalizacao/).

### Configurando o Checkout

Após criar o polígono e inserir seu ID na planilha de frete, você precisará inserir a API Key do Google nas configurações do Checkout:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__.
4. No campo __Google Maps API Key__, insira a mesma API Key informada na etapa de logística.

![Google map keys](//images.ctfassets.net/alneenqid6w5/5Fly0uJ3DE9SmlK6I1oRNx/31ccb9fd38c90109da5d9dfb9a825c71/google_maps_api_key_pt.PNG)

Assim que a API Key for informada nas configurações do Checkout, a geolocalização já estará visível no checkout da sua loja.

### Como funciona a consulta do frete?

Com a geolocalização ativada no checkout, o cálculo do frete sempre dará prioridade para esse recurso, usando os polígonos que englobam as coordenadas do destino selecionado. 

Portanto, mesmo que seu cliente queira usar o CEP, a geolocalização vai ter a preferência do sistema na hora de simular o valor da entrega. 
