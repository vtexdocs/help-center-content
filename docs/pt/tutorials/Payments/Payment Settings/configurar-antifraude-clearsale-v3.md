---
title: 'Configurar antifraude ClearSale v3'
id: 2pPORygesIqQOa6cIG6agg
status: PUBLISHED
createdAt: 2017-10-30T14:10:20.822Z
updatedAt: 2024-11-08T18:13:21.419Z
publishedAt: 2024-11-08T18:13:21.419Z
firstPublishedAt: 2017-10-30T14:26:53.089Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: configuring-clearsale-v3-antifraud
locale: pt
legacySlug: configurar-antifraude-clearsale-v3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o [antifraude](http://help.vtex.com/pt/tutorial/como-configurar-antifraude) ClearSaleV3. Por meio deste sistema, é possível aumentar o nível de segurança em transações de pagamento realizadas em sua loja utilizando análises de risco que identificam possíveis fraudes.

Para configurar o ClearSaleV3, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __ClearSaleV3__ na barra de busca e clique sobre o nome do provedor.
4. Caso deseje modificar o nome de identificação a ser exibido para o antifraude ClearSaleV3 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
5. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
6. Preencha as informações abaixo conforme suas configurações no ClearSale:
<br>
<ul>
<br>
  <li><b>Login</b>: login.</li>
  <li><b>Password</b>: senha.</li>
  <li><b>SLA personalizado em minutos (opcional)</b>: período em que o ClearSale terá para processar a análise de fraude.</li>
  <li><b>Produto (opcional)</b>: valor numérico. Correspondente ao ID do produto contratado na ClearSale.</li>
  <li><b>Transaction currency</b>: moeda na qual a transação é realizada.</li>
  <li><b>Observation (opcional)</b>: texto para enviar ao ClearSale como observação.</li>
  <li><b>Enviar transações autenticadas?</b>: indica se as transações de pagamento devem ser autenticadas com senha no programa 3DSecure.</li>
</ul>
7. Clique em `Salvar`.

<div class="alert alert-info">
<p>Caso possua uma aplicação mobile que utilize as APIs da VTEX na finalização da compra é necessário realizar a implementação da coleta de dados do fingerprint a serem enviados para Clearsale, de acordo com a plataforma utilizada pelo aplicativo. Saiba mais em <a href="https://api.clearsale.com.br/docs/behavior-analytics" target="_blank">Clearsale Behavior Analytics</a>.</p>
<p>Com a implementação do SDK é necessário coletar o valor de <span class="bg-muted-4">sessionId</span> e enviá-lo no campo <span class="bg-muted-4">deviceFingerprint</span> via <a href="https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments">API na criação do pagamento</a>.</p>  
</div>

## Criando a tag do Google Tag Manager

A configuração do antifraude ClearSale v3 exige a criação de uma tag no Google Tag Manager, como se mostra nos passos a seguir:

1. Acesse sua conta do [Google Tag Manager](https://tagmanager.google.com/).
2. Clique na opção __Tag__ e depois em __Novo__.
3. Escolha o produto __Tag HTML Personalizada__.
4. Insira o seguinte script, substituindo `seu-app` pelo seu identificador enviado pela ClearSale (entre aspas simples):

  ```
    var deviceFingerprintIdCSV4 = 10000000 + Math.floor(Math.random() * 99999999);
    (function (a, b, c, d, e, f, g) {
    a['CsdpObject'] = e; a[e] = a[e] || function () {
    (a[e].q = a[e].q || []).push(arguments)
    }, a[e].l = 1 * new Date(); f = b.createElement(c),
    g = b.getElementsByTagName(c)[0]; f.async = 1; f.src = d; g.parentNode.insertBefore(f, g)
    })(window, document, 'script', '//device.clearsale.com.br/p/fp.js', 'csdp');
    csdp('app', 'seu-app');
    csdp('sessionid', deviceFingerprintIdCSV4);
    window.vtex.deviceFingerprint = deviceFingerprintIdCSV4;
  ```

5. Marque a opção __Suporte para document.write__.
6. Em __Dispara Em__, selecione a opção __Mais__ e clique em __Novo__.
7. Insira um nome para este acionador e escolha o evento tipo __Evento Personalizado__.
8. Em __Disparar Em__, defina o nome do evento como __payment__.
9. Salve o acionador.
10. Clique no botão __Criar Tag__, insira um nome para esta tag e salve.
11. No canto superior direito, clique em __Publicar__.

![Pasted image at 2017 10 20 01 11 PM](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-antifraude-clearsale-v3_1.png)

## Detalhes do campo customSLA

O valor definido no campo **Custom SLA em minutos** da configuração do antifraude é um dos três possíveis para  o campo `customSLA` da transação. Caso o carrinho esteja vazio, o valor de `customSLA` será o valor de `shippingEstimate` do carrinho da transação. Se o carrinho possuir pelo menos um item, o valor de `customSLA` será o menor entre o valor de `deliverySlaInMinutes` do primeiro item do carrinho e o valor de **Custom SLA em minutos** usado na configuração de antifraude.

Os valores de `shippingEstimate` e `deliverySlaInMinutes` correspondem ao tempo de entrega e são gerados no Checkout a partir de informações do módulo de Logística. O cálculo do tempo de entrega é explicado no artigo [Como é calculado o prazo de entrega do pedido](/pt/tutorial/como-e-calculado-o-prazo-de-entrega-do-pedido--1TOuKCIjGQmqOqQkEqCg82).

O valor de `shippingEstimate` é obtido a partir de um cálculo feito pelo módulo de Logística. O valor é acompanhado de uma letra, que representa a unidade de tempo utilizada. As letras de unidade de tempo são:

- `d` para dias corridos ou `bd` para dias úteis se o tempo for zero ou de pelo menos 24 horas.
- `h` para horas se o tempo for menor que 24 horas e de pelo menos 2 horas.
- `m` para minutos se o tempo for menor que 2 horas.

O `shippingEstimate` pode ser obtido nos itens de `shippingData.logisticsInfo[]` na resposta do endpoint <a href="https://developers.vtex.com/vtex-rest-api/reference/orders#getorder" target="_blank">Get Order</a>.

O valor de `deliverySlaInMinutes` é a conversão de `shippingEstimate` em minutos. Se a unidade for `m` (minutos) será o mesmo valor, se a unidade for `h` (horas) o valor é multiplicado por 60 e se a unidade for `d` (dias corridos) ou `bd` (dias úteis) o valor é multiplicado por 1440. Por exemplo, três dias corridos ou `3d` é representado como `4320`. O `deliverySlaInMinutes` é utilizado em cada item do `minicart` no request body dos endpoints <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifraudpreanalysisdata" target="_blank">Send Antifraud Pre-Analysis Data</a> e <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifrauddata" target="_blank">Send Antifraud Data</a>.

<div class="alert alert-info">
Apesar de a conversão do tempo em dias corridos (<code>d</code>) e dias úteis (<code>bd</code>) para minutos  ser a mesma no campo <code>deliverySlaInMinutes</code>, a data da entrega pode divergir dependendo do calendário (quando há finais de semana e feriados dentro do período de entrega).
</div>
