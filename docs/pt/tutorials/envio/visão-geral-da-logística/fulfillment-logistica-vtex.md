---
title: 'Fulfillment e logística na VTEX'
id: 53udnvI5eBy8DKo8FOjMoP
status: PUBLISHED
createdAt: 2022-01-05T21:24:22.705Z
updatedAt: 2023-03-29T20:29:49.016Z
publishedAt: 2023-03-29T20:29:49.016Z
firstPublishedAt: 2022-01-05T21:37:17.296Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: fulfillment-logistics-vtex
legacySlug: logistica
locale: pt
subcategoryId: 63f22GypJIBLnMGh1QZUi0
---

A logística ou fulfillment é o processo de planejamento, transporte e armazenagem das mercadorias da loja, e envio de pedidos aos clientes. Assim, ela está diretamente ligada à experiência do cliente e à estratégia de negócio da loja. Por isso, as [configurações logísticas](/pt/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP#configuracao-do-processo-logistico) da sua loja são fundamentais. 

A VTEX possibilita o cadastro e controle dos estoques, o gerenciamento das tarifas de envio, o controle da disponibilidade dos itens e o acompanhamento das entregas. 

> ℹ️ Se a sua loja não trilhou os primeiros passos do módulo **Envio**, confira o artigo [Primeiros passos da Logística](/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx/6Y8C1JuPtO5E61Ew91tq1a).</b> Confira o artigo [Glossário de logística](/pt/docs/tutorials/glossario-de-logistica), para conhecer os significados de termos logísticos utilizados na VTEX. Há também as configurações de logística disponíveis via [API](https://developers.vtex.com/vtex-rest-api/reference/logistics-api-overview).

Para saber quais configurações logísticas são necessárias e como são realizadas, primeiro é preciso entender as etapas do fluxo de compra de um produto:

1. O processo é iniciado na frente da loja: o cliente seleciona os produtos desejados e segue para o checkout.
2. No checkout, o cliente insere sua localização e a plataforma verifica as formas de envio disponíveis. É nessa etapa da compra que a plataforma calcula a melhor [estratégia de envio](/pt/docs/tutorials/estrategia-de-envio) para o cliente. Para isso, a VTEX: 
    * Confere a disponibilidade de itens e onde serão retirados ([estoque](/pt/docs/tutorials/estoque));
    * Seleciona a [doca](/pt/docs/tutorials/doca) e quando a retirada dos itens pela transportadora deve ser feita;
    * Analisa as [políticas de envio](/pt/docs/tutorials/politica-de-envio) que satisfazem as condições de envio do cliente. Através da política de envio a plataforma analisa as transportadoras que podem realizar a entrega do pedido e os [pontos de retirada](/pt/docs/tutorials/pontos-de-retirada) disponíveis. 
3. Depois do cálculo, a plataforma apresenta as formas de entrega disponíveis para o cliente (com prazos e valores). O cliente escolhe um tipo de envio (retirada ou entrega) e finaliza o pedido. 

    Após a finalização do pedido, os produtos têm sua [reserva autorizada](/pt/tutorial/como-a-reserva-funciona--tutorials_92?&utm_source=autocomplete#reserva-autorizada). Assim, a plataforma garante que os itens não podem ser vendidos novamente. 

4. Quando o [pagamento ](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB)é confirmado, a[ reserva também é confirmada](/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-confirmada).
5. Depois da confirmação do pagamento e da expiração do [tempo de carência para cancelamento](/pt/docs/tutorials/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido), a plataforma espera o lojista realizar o manuseio dos itens. Quando o lojista[ inicia o manuseio,](/pt/docs/tutorials/passar-pedido-para-o-status-preparando-entrega) ele sinaliza para a plataforma que os itens do pedido e suas notas fiscais estão sendo preparados. A partir desse estágio a [reserva passa a ser reconhecida](/pt/tutorial/como-a-reserva-funciona--tutorials_92?&utm_source=autocomplete#reserva-reconhecida).
6. A loja inclui a [nota fiscal](/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) do pedido na plataforma.  
7. É iniciado o processo de envio:
    * Para os pedidos que são enviados para o endereço do cliente (entrega), a loja encaminha os pacotes à [doca ](/pt/docs/tutorials/doca)onde a [transportadora ](/pt/docs/tutorials/transportadoras-na-vtex)deve retirá-los. A transportadora (escolhida através das [políticas de envio](/pt/docs/tutorials/politica-de-envio)) realiza a entrega do pedido.
    * Para os pedidos que são enviados para os [pontos de retirada](/pt/docs/tutorials/pontos-de-retirada) (retirada), a loja deve deixar os pacotes disponíveis para o cliente retirar. Para isso, os pacotes são retirados do [estoque](/pt/docs/tutorials/estoque) e transportados até o ponto de retirada. O transporte da doca até o ponto de retirada é definido por uma[ política de envio](/pt/docs/tutorials/politica-de-envio).
8. Após o faturamento e envio, a loja é responsável por atualizar o inventário, que, para a plataforma, significa também a baixa dos itens no estoque.

> ℹ️ Note que o processo de envio dependerá das configurações realizadas na plataforma. Aqui apresentamos  os cenários para cada tipo de envio (entrega e retirada), mas há outros fluxos possíveis no processo de envio. Por exemplo, quando o envio é por retirada e o estoque coincide com o ponto de retirada, não é necessário o transporte dos pacotes entre esses locais.

![Envio PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/visão-geral-da-logística/fulfillment-logistica-vtex_1.svg)

## Configuração do processo logístico

O processo logístico deve ser configurado conforme as necessidades da sua loja. Essas configurações são feitas no módulo **Envio**. Confira as funcionalidades disponíveis no módulo e como cada uma impacta o seu negócio:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Estratégia de Envio](/pt/docs/tutorials/estrategia-de-envio)</span>
   </td>
    <td class="t-body pa5" style="min-width: 15rem;">
      Gerenciamento de estoques, docas e políticas de envio. A partir das estratégias de envio configuradas, a plataforma calcula as possibilidades de envio e as apresenta para o cliente no checkout.
     <body>
    <ul>
    <li>[Estoque](/pt/docs/tutorials/estoque);</li>
      <li>[Doca](/pt/docs/tutorials/doca);</li>
    <li>[Política de envio](/pt/docs/tutorials/politica-de-envio).</li>
    </ul>
    </body>
   </td>
  </tr>
 <tr class="bb b--muted-3">
<td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Capacidade de entrega](/pt/docs/tutorials/gerenciar-capacidade-de-entrega)</spain>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gerenciamento de entregas agendadas. É possível acompanhar as entregas que já estão agendadas e conferir os períodos de entrega que ainda estão disponíveis para agendamento.
<body>
 <ul>
<li>[Entrega Agendada](/pt/docs/tutorials/entrega-agendada).</li>
</ul>
     </body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Tarifas de envio](/pt/docs/tutorials/tarifas-de-envio)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gerenciamento dos custos de envio da sua loja.
<body>
     <ul>
<li>[Gerenciar tarifas de envio](/pt/docs/tutorials/gerenciar-tarifas-de-envio);</li>
<li>[Custo final do envio](/pt/docs/tutorials/custo-final-do-envio);</li>
<li>[Adicionais de frete](/pt/docs/tutorials/adicionais-de-frete).</li>
</ul>
     </body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Gerenciar Inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gerenciamento da disponibilidade dos itens cadastrados no estoque. É possível acompanhar as movimentações e reservas de itens.
<body>
<ul>
<li>[Acessar as reservas de um produto](/pt/tutorial/como-a-reserva-funciona--tutorials_92#como-acompanhar-o-status-da-reserva);</li>
<li>[Como a reserva funciona](/pt/docs/tutorials/como-a-reserva-funciona).</li>
</ul>
</body>
 </td>
 </tr>
 <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Simulador de envio](/pt/docs/tutorials/simulador-de-envio)</span>
   </td>
    <td class="t-body pa5" style="min-width: 15rem;">Ferramenta de simulação de envio, que possibilita a reprodução de cenários de envio (disponibilidade de itens, tipos de entrega e retirada). 
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Envio por geolocalização](/pt/docs/tutorials/gerenciar-geolocalizacao)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cadastro dos locais de entrega utilizando a latitude e longitude dos endereços.

Normalmente essa funcionalidade é utilizada em endereços de zonas rurais e industriais (onde há divisão por lotes) ou áreas de risco (onde é preciso excluir determinados locais de entrega dentro de uma região).
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Feriados](/pt/docs/tutorials/cadastrar-feriados)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Cadastro de dias que não devem ser considerados úteis para a sua loja. Os dias cadastrados como feriados não são contabilizados no prazo de entrega dos pedidos.
<body>
<ul>
<li>[Cadastrar feriado.](/pt/tutorial/cadastrar-feriados)</li>  
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Configurações</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gerenciamento de configurações específicas das rotas logísticas. Estas configurações permitem detalhar as condições de entrega que ficarão disponíveis para o cliente. As possíveis configurações desta seção são:
<body>
 <ul>
<li>[Adicional de frete](/pt/tutorial/adicionais-de-frete--2vqGwMn0LabkOHY6zSHYNV?&utm_source=autocomplete#adicional-de-frete): custo extra sobre o valor da [tarifa de envio](/pt/docs/tutorials/tarifas-de-envio);</li>
<li>[Remessa](/pt/tutorial/como-funciona-a-remessa): envio de um grupo de pacotes reunidos;</li>
<li>[Modal](/pt/tutorial/como-funciona-o-modal): modalidade de itens aceitos para entrega. </li>
<li>[Divisão de carga](/pt/tutorial/como-funciona-a-divisao-de-carga): como os produtos devem ser divididos para a entrega do pedido.</li>
<li>[Alerta de estoque crítico](/pt/tutorial/configurar-o-alerta-de-estoque-critico): alerta para quando a quantidade de itens está abaixo do previsto. </li>
</ul>
</body>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;">[<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Pontos de retirada](/pt/docs/tutorials/pontos-de-retirada)</span>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Gerenciamento de pontos de retirada. Esta funcionalidade permite que a loja ofereça aos clientes a retirada de pedidos em pontos físicos.
<body>
     <ul>
<li>[Configurar Pontos de retirada](/pt/tutorial/configurar-pontos-de-retirada-pickup-points)</li>
</ul>
     </body>
   </td>
  </tr>
</table>

