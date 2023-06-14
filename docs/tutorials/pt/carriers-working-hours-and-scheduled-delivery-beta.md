---
title: Horário de funcionamento de transportadoras e entrega agendada (Beta)
id: 5QjTT3ICL2HdEcVIguJiMI
status: DRAFT
createdAt: 2021-01-13T19:28:43.514Z
updatedAt: 2021-05-24T17:44:03.764Z
publishedAt: 
firstPublishedAt: 2021-01-13T22:14:49.093Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: horario-de-funcionamento-de-transportadoras-e-entrega-agendada-beta
legacySlug: horario-de-funcionamento-de-transportadoras-e-entrega-agendada-beta
subcategory: 32vrn4K2ZscjUaIBe6w5fm
---

<div class = "alert alert-info">
  <p>Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href = "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

O módulo *Estoque & Entrega* é onde você faz todo o gerenciamento da logística da sua loja. A aba *Estratégia de Envio* permite que você cadastre sua rota logística, incluindo as **Políticas de Envio** ou transportadoras. Pensando em melhorar a experiência do módulo, atualizamos essa funcionalidade.

Algumas seções da página de cadastro de **Política de Envio** mudaram, para te dar mais flexibilidade ao configurar sua estratégia de entrega. Na versão anterior, havia uma seção chamada *Configuração de Tempo*, na qual era possível selecionar *Horário de Funcionamento*, *Horário de Corte* ou *Entrega Agendada* para cada transportadora. 

**Versão anterior**
![PT Configurações de tempo versão antiga](https://images.ctfassets.net/alneenqid6w5/2n9RGrhtYEYrGsnsBN3Qlj/853e5c8125a87076697643bbb62848a0/PT_Configura____es_de_tempo_vers__o_antiga.jpg)

Na nova versão:
- Mudamos os nomes das opções para facilitar seu entendimento.   
- Separamos a configuração de Entrega Agendada em outro espaço, para que você possa configurar essa funcionalidade para seu cliente final independente das configurações de tempo da transportadora.  
- Adicionamos a opção de configurar capacidade de entrega, para que a entrega agendada seja feita com base na realidade da sua operação.   

**Versão Beta**
![PT Horário de funcionamento transportadora beta](https://images.ctfassets.net/alneenqid6w5/7p1pOc8ng4KJCVIUUOZMtJ/e5ae82ee60854de23f4b3142720c3aa7/PT_Hor__rio_de_funcionamento_transportadora_beta.jpg)

## Horário de coleta

Na versão anterior da página, se chamava *Horário de Corte*. Mesmo com a mudança no nome, a funcionalidade permanece a mesma: é onde você cadastra os horários em que a transportadora coleta pacotes em seu estoque ou centro de distribuição, para em seguida enviá-los aos clientes finais.

## Período de envio

Na versão anterior do módulo, essa configuração se chamava *Horário de Funcionamento*. Apesar da mudança no nome, o comportamento da seção é o mesmo: é onde você cadastra os períodos de funcionamento da transportadora, ou seja, os horários em que ela envia pacotes aos clientes.

Assim como na versão anterior, não é possível configurar as opções de *Período de Envio* e *Horário de coleta* ao mesmo tempo. Selecione a opção que mais se adequa à operação da transportadora cadastrada, e sua estratégia de envio. 

## Entrega Agendada

Antes só era possível optar pela funcionalidade de *Entrega Agendada* abrindo mão do *Horário de Funcionamento*. Agora é possível configurar a opção de *Entrega Agendada* juntamente com o *Horário de Funcionamento* para que seu cliente opte por esse método de entrega durante o checkout de seu pedido. Confira os campos de preenchimento para configurar essa opção.

**Versão Beta**
![PT entrega agendada](https://images.ctfassets.net/alneenqid6w5/5NEf2aJHHPmQTIFgvDt19H/2de3b092c9265fce7aa6d5478f2de5dd/PT_entrega_agendada.jpg)

- **Tempo máximo de entrega**: esse campo deve ser preenchido de acordo com a sua operação logística. Defina qual é o maior período de tempo que aquela transportadora gasta para realizar uma entrega agendada, entre a confirmação do pedido e a confirmação da entrega.
- **Configurar capacidade de entrega**: dependendo das características da sua operação, e de como a transportadora envia os seus produtos, pode fazer mais sentido definir uma capacidade de entrega em número de itens, ou em número de pedidos. Se sua loja for do segmento de supermercado, por exemplo, e o meio de transporte para a entrega agendada for por moto, existe um número limite de itens que cabem na armazenagem daquele veículo, portanto sugerimos que selecione `itens` como unidade. Já se sua operação tiver poucos itens por pedido, fará mais sentido determinar `pedidos` como unidade, por exemplo.
- **Dias da semana:** selecione o dia da semana em que irá operar a entrega agendada. Os campos a seguir serão aplicados a esse dia da semana selecionado. 
- **Capacidade de entrega**: defina, para aquele dia da semana, qual é o número máximo de itens ou pedidos que podem ser enviados. 
- **Valor Adicional**: defina custos logísticos extras que se aplicam a esse dia da semana.
- **Início:** horário em que se inicia o período de entrega agendada naquele dia da semana.
- **Fim:** horário em que se finaliza o período de entrega agendada naquele dia da semana.

