---
title: Configurar antifraude ClearSale v3
id: 2pPORygesIqQOa6cIG6agg
status: PUBLISHED
createdAt: 2017-10-30T14:10:20.822Z
updatedAt: 2021-12-15T21:23:21.984Z
publishedAt: 2021-12-15T21:23:21.984Z
firstPublishedAt: 2017-10-30T14:26:53.089Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: configurar-antifraude-clearsale-v3
legacySlug: configurar-antifraude-clearsale-v3
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Para habilitar a afiliação do antifraude ClearSale v3, você precisa [adicionar a afiliação de gateway](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway--tutorials_444) na seção de Pagamentos, escolhendo a opção **ClearSaleV3**. A configuração da afiliação do antifraude ClearSale v3 contém os seguintes campos:

- **Login:** Login.
- **Password:** Senha.
- **Custom SLA em minutos (opcional):** O tempo que o ClearSale terá para processar a análise de fraude.
- **Produto (opcional):** Valor numérico. Correspondente ao ID do produto contratado na ClearSale.
- **Transaction currency**: Moeda.
- **Observation (opcional):** Texto para enviar à ClearSale como observação.
- **Enviar transações autenticadas?**: Possui as opções **Sim** e **Não**.  Transações autenticadas são aquelas onde todos os pagamentos foram autenticados com senha no programa 3DSecure.

<div class="alert alert-info">
A documentação da ClearSale sobre <a href="https://api.clearsale.com.br/docs/finger-print" target="_blank">FingerPrint</a> explica o script abaixo em detalhes.
</div>

<div class="alert alert-warning">
Se você deseja configurar o antifraude <strong>ClearSale T</strong>, basta seguir <a href="http://help.vtex.com/pt/tutorial/como-configurar-antifraude">este passo a passo</a>.
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

![Pasted image at 2017 10 20 01 11 PM](//images.contentful.com/alneenqid6w5/2kdI4xh9IYwKI2mSiU20yW/b850c070cc8de2ec09e690ffe6cc9c15/Pasted_image_at_2017_10_20_01_11_PM.png)

## Detalhes do campo customSLA

O valor definido no campo **Custom SLA em minutos** da configuração do antifraude é um dos três possíveis para  o campo `customSLA` da transação. Caso o carrinho esteja vazio, o valor de `customSLA` será o valor de `shippingEstimate` do carrinho da transação. Se o carrinho possuir pelo menos um item, o valor de `customSLA` será o menor entre o valor de `deliverySlaInMinutes` do primeiro item do carrinho e o valor de **Custom SLA em minutos** usado na configuração de antifraude.

Os valores de `shippingEstimate` e `deliverySlaInMinutes` correspondem ao tempo de entrega e são gerados no Checkout a partir de informações do módulo de Logística. O cálculo do tempo de entrega é explicado no artigo [Como é calculado o prazo de entrega do pedido](https://help.vtex.com/pt/tutorial/como-e-calculado-o-prazo-de-entrega-do-pedido--1TOuKCIjGQmqOqQkEqCg82).

O valor de `shippingEstimate` é obtido a partir de um cálculo feito pelo módulo de Logística. O valor é acompanhado de uma letra, que representa a unidade de tempo utilizada. As letras de unidade de tempo são:

- `d` para dias corridos ou `bd` para dias úteis se o tempo for zero ou de pelo menos 24 horas.
- `h` para horas se o tempo for menor que 24 horas e de pelo menos 2 horas.
- `m` para minutos se o tempo for menor que 2 horas.

O `shippingEstimate` pode ser obtido nos itens de `shippingData.logisticsInfo[]` na resposta do endpoint <a href="https://developers.vtex.com/vtex-rest-api/reference/orders#getorder" target="_blank">Get Order</a>.

O valor de `deliverySlaInMinutes` é a conversão de `shippingEstimate` em minutos. Se a unidade for `m` (minutos) será o mesmo valor, se a unidade for `h` (horas) o valor é multiplicado por 60 e se a unidade for `d` (dias corridos) ou `bd` (dias úteis) o valor é multiplicado por 1440. Por exemplo, três dias corridos ou `3d` é representado como `4320`. O `deliverySlaInMinutes` é utilizado em cada item do `minicart` no request body dos endpoints <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifraudpreanalysisdata" target="_blank">Send Antifraud Pre-Analysis Data</a> e <a href="https://developers.vtex.com/vtex-rest-api/reference/antifraud-flow#sendantifrauddata" target="_blank">Send Antifraud Data</a>.

<div class="alert alert-info">
Apesar de a conversão do tempo em dias corridos (<code>d</code>) e dias úteis (<code>bd</code>) para minutos  ser a mesma no campo <code>deliverySlaInMinutes</code>, a data da entrega pode divergir dependendo do calendário (quando há finais de semana e feriados dentro do período de entrega).
</div>
