---
title: 'Simulador de envio'
id: tutorials_144
status: PUBLISHED
createdAt: 2017-04-27T22:16:36.879Z
updatedAt: 2023-03-29T19:24:17.032Z
publishedAt: 2023-03-29T19:24:17.032Z
firstPublishedAt: 2017-04-27T23:00:45.450Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: simulador-de-envio
legacySlug: simulacao-de-frete
subcategory: 1O8AEORWOcgIiMosGoousQ
---

O **Simulador de envio** está disponível no Admin VTEX para simular e analisar as opções de entrega disponíveis. A simulação verifica as condições de entrega dando ao lojista a capacidade de verificar disponibilidade de itens, formas de entrega, custos e prazos. 

O simulador pode ser utilizado também para validar as configurações das  **[Estratégia de Envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3)** antes de se habilitar o processo logístico (Estoque, Doca e [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140)) considerando:

* **Disponibilidade de um item:** o simulador verifica se o item existe em estoque e se sua entrega é possível (se há transportadoras cadastradas para aquela região, por exemplo). Se pelo menos um dos critérios não for atendido, o simulador entende que o item está indisponível.

* **Disponibilidade de Sellers White Label:** o simulador seleciona o franqueado mais próximo ao endereço de entrega (a configuração logística é calculada através do ambiente do _Seller White Label_, e não no Main Account).

<div class="alert alert-warning"> 
Pode haver divergência entre o preço final apontado pelo simulador, e o preço real em sua loja, visto que a simulação não leva em consideração:
<body>
<ul>
<li>Promoções aplicadas àqueles itens.</li>
<li>Descontos de frete configurados através de promoções.</li>
<li>O Prazo de Entrega Total apresentado no resultado da simulação não considera o campo <b>Data Previsão Chegada (pré-venda)</b> <a href="https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY">do cadastro do item.</a></li>
</ul></body></div>

Nesse artigo contém:

* Como [simular o envio](#simular-o-envio);
* Como entender os [detalhes da simulação](#detalhes-da-simulacao);
* Motivos de [transportadoras desconsideradas](#transportadoras-desconsideradas).

## Simular o envio
1. No Admin VTEX, acesse **Envio > Estratégia de Envio** ou digite *Estratégia de envio* na barra de busca no topo da página.    
 2. Clique em `Simulador de envio`.    
 3. Preencha o `País`.    
 4. Preencha a `Política Comercial` desejada.    
 5. Selecione o `produto` por nome ou ID.    
 6. Selecione a `quantidade`do SKU.    
 7. Determine o `Preço`. Este campo é aberto, e opcional.  

	> O simulador não leva em consideração o preço cadastrado no módulo Catálogo. Portanto, o custo indicado pelo simulador não considera qualquer promoção vigente para aqueles SKUs, podendo indicar um custo diferente do valor real na sua loja. Sugerimos que insira manualmente o valor exato do SKU já com as promoções aplicadas, para que o simulador retorne um cálculo preciso.    

 8. Clique no ícone `+` para adicionar mais de um produto na simulação. 
Se desejar, pode preencher o box `Simular itens individualmente`.    

 > Essa funcionalidade é útil quando os itens não tem configurações logísticas compatíveis para que a entrega seja feita pela mesma transportadora.  

 9. Digite o **CEP** que deseja realizar a simulação, ou preencha o **Endereço**.  

  > Para que a simulação seja feita com base nas coordenadas de um **Endereço**, é  preciso configurar uma chave de geolocalização do Google. Obtenha essa chave através do [Portal de desenvolvedores do Google.](https://developers.google.com/maps/documentation/javascript/get-api-key)  Uma vez com a chave, acesse **Configurações da loja > Envio > Configurações**, ou digite *Envio* na barra de busca no topo da página e selecione *Configurações da loja / Envio*. Preencha o campo **Google Geolocation API** com a chave obtida. 

 10. Clique no botão `Simular Frete`.

<div class = "alert alert-info">
No resultado da simulação, as medidas dos itens aparecem em centímetros e gramas, mas o valor real considerado no Checkout são as unidades de medida cadastradas nos <a href="https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke">campos de cadastro do produto</a> e do SKU.
</div>

## Detalhes da Simulação

A simulação de frete indica todas as possibilidades de envio e disponibilidade dos itens incluídos na simulação e descreve os [detalhes de entrega de um pedido](https://help.vtex.com/tutorial/ver-detalhes-de-entrega-de-um-pedido?locale=pt), o custo de frete e o tempo de entrega considerando as particularidades abaixo.

* **Transportadoras desconsideradas:** ao realizar a simulação, algumas transportadoras podem estar indisponíveis por não atenderem os critérios da [ Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) (veja [transportadoras desconsideradas](#transportadoras-desconsideradas) para mais informações).
* **Compartilhamento de simulação**: é possível o compartilhamento da simulação clicando em `compartilhar a simulação` no canto superior direito da página em. Ao clicar, um link de compartilhamento é copiado para a sua área de transferência. Essa funcionalidade facilita o acionamento da equipe VTEX, ou da sua loja, para resolver problemas em pedidos específicos. Somente quem tem acesso ao ambiente VTEX consegue visualizar o link gerado pelo compartilhamento.
* **Valor do frete**: para simulações feitas com mais de um SKU, o `valor do frete` é dividido proporcionalmente ao peso de cada SKU no pacote. Por exemplo, considere uma simulação feita com 2 SKUs (um pesando 2kg, e o outro pesando 3kg). Vamos supor que o frete com a transportadora A custa 10 reais ao total. Nesse cenário, o SKU mais leve custará 4 reais, e o mais pesado 6 reais. Para saber mais, confira [Como é feito o rateio de frete](https://help.vtex.com/pt/tutorial/como-e-feito-o-rateio-de-frete--frequentlyAskedQuestions_155).
* **Dimensões do pacote**: para simulações com SKUs contendo mais de 1 unidade, as `dimensões` descritas ao lado do SKU na página de simulação não mudarão. O sistema levará em consideração que aumentou a dimensão total do pacote.

### Transportadoras Desconsideradas

 Os motivos  mais comuns que fazem com que uma transportadora não esteja disponível para simulação estão relacionados abaixo juntamente com sua solução. 

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i"><strong>Motivo</strong></em>
            </th>
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
                <em class="i">Solução</em>
            </th>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">Peso total do carrinho excedeu o limite da transportadora
   </td>
    <td class="t-body pa5" style="min-width: 15rem;">É possível atender ao limite através da divisão de carga. Veja a <a href="https://help.vtex.com/pt/tutorial/como-funciona-a-divisao-de-carga--tutorials_109"> divisão de carga</a> para maiores informações. Confira também se há erro nas <a href="https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru">configurações do produto no catálogo</a>.
   </td>
  </tr>
 <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">O peso ou dimensão do item não é suportado pela transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Confira as configurações da <a href="https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127">planilha de frete</a>  através dos campos <strong><em>WeightStart, WeightEnd </em></strong>e<strong><em> MaxVolume. </em></strong> Confira também se há erro nas <a href="https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru">configurações do produto no catálogo</a>.
   </td>
  </tr>
  <tr class="bb b--muted-3">
     <td class="t-body pa5" style="min-width: 15rem;">O peso do kit ultrapassou o aceito pela transportadora. 
       <p>
       <i>Obs.: itens que compõem um kit ou promoção não podem ser separados em pacotes diferentes.</i>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Confira as configurações da <a href="https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127">planilha de frete</a> através dos campos <strong><em>WeightStart </em></strong>e <strong><em>WeightEnd. </em></strong>Confira também se há erro nas <a href="https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1wmX3QvQVxbKVmalhIE5Ru">configurações do produto no catálogo</a>.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">Opções de agendamento de entrega não disponíveis.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Confira as configurações das janelas de <a href="https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi">entrega agendadas</a> e o horário de funcionamento da <a href="https://docs.google.com/document/u/0/d/1xr-jEYEB-0_pYTJ_SZEx38fKvC0jEUrY_MbMyPnVpws/edit">política de envio</a>. É possível que janelas de entrega agendadas estejam bloqueadas, verifique se as janelas corretas estão ativas.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">O CEP não é atendido pela transportadora.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Confira as configurações da <a href="https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127">planilha</a> de frete através dos campos <strong><em>ZipCodeStart</em></strong> e <strong><em>ZipCodeEnd. </em></strong>Confira também as <a href="https://help.vtex.com/pt/tutorial/gerenciar-valores-de-frete--tutorials_141">Tarifas de Envio</a> no menu de <b>Envio</b>.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">Transportadora  foi desconsiderada pelos quesitos de prioridade.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Os quesitos de prioridade calculados pelo sistema no checkout são:
<ul>
<li>Entrega mais econômica.
<li>Entrega mais rápida.
<li>Combinação da melhor custo-benefício e tempo de entrega.
</li>
</ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">Transportadora está como <strong>Inativa</strong>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Confira o cadastro da <a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">política de envio</a> para verificar se a transportadora está ativa.
   </td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">O preço dos itens não atende às especificações da transportadora.
   </td>
  <td class="t-body pa5" style="min-width: 15rem;">Veja as configurações na <a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">política de envio</a> para  o preço limite  aceitado.
   </td>
  </tr>
   <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;">O horário de funcionamento da transportadora não atende o horário de entrega.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Confira as configurações do <a href="https://help.vtex.com/pt/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS?&utm_source=autocomplete"> horário de funcionamento </a> da <a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">política de envio</a>.
   </td>
  </tr>
</table>

