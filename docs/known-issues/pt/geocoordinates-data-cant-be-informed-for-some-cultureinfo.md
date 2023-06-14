---
title: Os dados GeoCoordinates não podem ser informados para alguma culturaInfo
id: 4MjLbyrniWsPKpFBHgn8sG
status: PUBLISHED
createdAt: 2022-05-19T16:19:45.245Z
updatedAt: 2022-11-25T21:52:55.550Z
publishedAt: 2022-11-25T21:52:55.550Z
firstPublishedAt: 2022-05-19T16:19:45.749Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: os-dados-geocoordinates-nao-podem-ser-informados-para-alguma-culturainfo
kiStatus: Backlog
internalReference: 582065
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Algumas opções "cultureInfo", como "en-ZA" (África do Sul) estão gerando problemas junto com a propriedade "geoCoordinates" do serviço de checkout.
Estas informações são utilizadas desde o cálculo das opções de envio até a definição de uma "regionId" (os vendedores que cobrem um endereço).
As informações enviadas serão recusadas, gerando erros ou simplesmente sendo ignoradas, dependendo do API.
Parece estar relacionado com o separador decimal e de milhares para certos "cultureInfo" - para "en-ZA" parece estar relacionado com o separador de milhares sendo um espaço em branco, embora seu separador decimal seja uma vírgula, como usado em outros países.



## Simulação


- ter uma loja configurada com "en-ZA" como "cultureInfo" (definido na política comercial)
- para tentar calcular uma regiãoId em seu API ou mesmo recuperar SLAs (opções de envio) em um pedido de simulação



## Workaround


Não há uma alternativa direta para usar o "cultureInfo" correto, mas você pode tentar encontrar opções alternativas que se comportem como a opção esperada.
Observe que o "cultureInfo" define principalmente o idioma, mas também a formatação para números, datas e curvatura, incluindo a posição do símbolo de curvatura.

