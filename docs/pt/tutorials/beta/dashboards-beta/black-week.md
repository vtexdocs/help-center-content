---
title: 'Black Week'
id: GdrEBWiI6VYKI9q9kRfdC
status: DRAFT
createdAt: 2022-11-09T17:06:27.132Z
updatedAt: 2022-11-22T19:11:08.458Z
publishedAt: 
firstPublishedAt: 2022-11-11T21:43:37.865Z
contentType: tutorial
productTeam: Management
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: black-week
legacySlug: black-week
locale: pt
subcategoryId: QPnz120TdtLcXSh65c4Gs
---

# Black Week (Beta)

<div class="alert alert-warning">
O painel Black Week é uma página temporária, e só estará disponível durante a Black Week dos dias 21 a 27 de novembro de 2022, exclusivamente para clientes no Brasil.
</div>

A black week é uma das semanas mais importantes para a VTEX e para nossos clientes, dado que uma parte considerável da receita do varejo vem das estratégias de promoção durante esse período. A tomada rápida de decisões e análise em tempo real dos resultados são essenciai para o sucesso da black week. 

A página _Black Week_ é um dashboard temporário em seu Admin VTEX, disponível entre os dias 21 e 27 de novembro de 2022, que traz dados de vendas em tempo real para auxiliar sua equipe a monitorar os resultados obtidos, comparando com os anos anteriores. 

Caso você utilize o novo Admin VTEX, para acessá-la, vá para **Dashboards > Black Week**. Em versões anteriores do Admin, a página encontra-se em **Insights > Black Week**. 

Para ter acesso à pagina, é necessário conter o [recurso](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) *Insights Metrics* com a chave `view_metrics` em seu [perfil de acesso](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc). Sem esse recurso configurado em seu perfil de acesso, você receberá um erro *403 - Não autorizado* ao tentar visualizar a página. 

![Black Week](//images.ctfassets.net/alneenqid6w5/3IM9M6IwfycwTmUzJDEzem/2ce38a00422d16e12016eb0ba58edd9b/Screen_Shot_2022-11-18_at_16.11.09.png)

Este artigo inclui as seguintes seções:

- [Benefícios](#beneficios)
- [Dados](#dados)
- [Analisando os gráficos](#analisando-os-graficos)
- [Limitações da página](#limitacoes-da-pagina)

## Benefícios

A página apoia operação do seu negócio para a black week ao permitir:

* **Monitoramento em tempo real:** permite que lojistas detectem problemas e o impacto das suas campanhas de forma instantânea.
* **Métricas de negócio:** mensure seus resultados analisando o número absoluto de pedidos e sessões em seu ecommerce.
* **Comparação com anos anteriores:** permite comparar dados da Black Week de 2022 com o mesmo período dos anos anteriores, para avaliar a evolução de suas vendas. 

Assista um vídeo para saber mais sobre a página:

<video width="320" height="240" controls>
  <source src="//videos.ctfassets.net/alneenqid6w5/1f4Q2e1yN2GCJuTqQlegv8/ecc24665257eaf5c1095bb4cc443a871/Screenshare_-_2022-11-18_4_17_34_PM.mp4" type="video/mp4">
</video>

## Dados

Os dados da página são atualizados em tempo-real, com uma frequência de atualização a cada minuto. É possível ver a frequência de atualização de todos os dados da tela no ícone de círculo. Esse círculo azul indica o tempo até o carregamento dos dados. 

Os gráficos da página incluem as seguintes métricas:

* **Pedidos:** total de novos pedidos captados para aquele [account name](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC), dentro do período selecionado. Os dados sobre pedidos vêm do OMS, ou [sistema de Gerenciamento de Pedidos](https://help.vtex.com/tracks/orders--2xkTisx4SXOWXQel8Jg8sa)  da VTEX e incluem pedidos realizados em todos os seus canais de venda. 
* **Sessões:** total de sessões iniciadas dentro do período selecionado. Os dados de navegação vêm do sistema interno da plataforma que capta sessões dos usuários no storefront de lojas VTEX. Sessões são representadas pelo conjunto de visualizações das páginas acessadas por um mesmo comprador ao navegar em seu ecommerce, desconsiderando marketplaces, apps, inStore e qualquer outro canal de venda.  

Não captamos dados de navegação para storefronts que não são VTEX, ou de sellers que somente anunciam produtos em marketplaces externos. Por isso os tipos de gráficos presentes na Black Week podem variar, dependendo se captamos dados de navegação da sua loja ou não.

<div class="alert alert-info">
  É possível que exista uma diferença de até 3% entre o número de pedidos no OMS e na página Black Week, já que o painel é em tempo real.  
  </div>

### Selecionar anos

O menu seletor de anos permite incluir nos gráficos os dados da Black Week dos anos anteriores, de 2018 até 2022. Assim, é possível entender como as métricas se desenvolveram quando comparadas com períodos anteriores. Se o histórico de pedidos e sessões de anos anteriores não estiver armazenado na VTEX, não será possível filtrar dados para esses anos - saiba mais em  [Limitações da página](#limitacoes-da-pagina).

Para filtrar dados por anos:

1. Em seu Admin, acesse **Dashboards > Black Week**. 
> Em algumas versões do Admin, a página se encontra em **Insights > Black Week**.
2. No topo da página, clique no botão **Comparar com:**.
3. Selecione as caixas correspondentes aos anos que deseja incluir nos gráficos.   
> A opção `2022` estará sempre selecionada por padrão.
4. Clique fora do menu, em qualquer lugar da página, para ocultá-lo.

A visualização de dados será atualizada automaticamente para incluir os anos selecionados.

## Analisando os gráficos

A Black Week inclui os seguintes gráficos para a análise dos resultados do seu negócio:  

- [Total de Pedidos](#total-de-pedidos): ideal para comparar resultados absolutos de pedidos da Black Week 2022 com anos anteriores.  
- [Monitoramento](#monitoramento): inclui gráficos que apresentam métricas de pedidos e sessões, incluindo duas visualizações possíveis, descritas abaixo.  
    - [Total do dia](#total-do-dia): ideal para acompanhar horários de pico de pedidos e sessões a cada dia.   
    - [Últimas 2 horas](#ultimas-2-horas):ideal para acompanhar a saúde da sua campanha para Black Week em tempo real, controlando se as estratégias de venda estão convertendo em resultados.  

### Total de pedidos

![Total de pedidos](//images.ctfassets.net/alneenqid6w5/7mYLy1HXJVjiBm923PRQmm/d6eaef3b046627bca6fa55147221b1d2/Screen_Shot_2022-11-18_at_16.00.21.png)

O gráfico _Total de Pedidos_ apresenta a quantidade de pedidos captados pela loja, agregado por dia e comparado com os anos anteriores selecionados. Saiba mais em [Dados](#dados).

Para ler o gráfico, note que:

* Cada barra corresponde a um ano, e é possível identificar a sua cor por meio da legenda, ao lado do título do gráfico.  
* O eixo Y representa o total de pedidos no ano de 2022, e o eixo X representa os dias da semana da Black Week. 
* O número disposto em cima dos gráficos, para cada dia, representa o número total de pedidos captados de 2022. 
* Passando o seu cursor no gráfico, você visualiza o número absoluto de pedidos em cada ano selecionado, para aquele dia da semana.

### Monitoramento

O gráfico _Monitoramento_ apresenta o comportamento das métricas de pedidos e sessões a cada minuto do dia atual ou das últimas duas horas. As métricas presentes são: 

* **Pedidos:** total de novos pedidos captados dentro do período selecionado. Saiba mais em [Dados](#dados).
* **Sessões:** total de sessões iniciadas para cada período selecionado. Saiba mais em [Dados](#dados).

Para ler os gráficos, note que:

* Cada linha corresponde a um ano, e é possível identificar a sua cor por meio da legenda. Os gráficos da aba _Últimas 2 horas_ só apresentam a linha de 2022.
* O eixo X representa o tempo em minutos, e o eixo Y representa o número absoluto de Pedidos ou Sessões. 
* A linha pontilhada se refere à média de cada métrica no período anterior.
* Passando o seu cursor no gráfico, você visualiza a métrica de Pedidos ou Sessões para cada minuto dos anos selecionados.

É possível alterar a visualização desses gráficos entre as opções 
[Total do dia](#total-do-dia) e [Últimas 2 horas](#ultimas-2-horas).

#### Total do dia 

![Total do dia](//images.ctfassets.net/alneenqid6w5/3PMiZmAt84euZIrmu7gy35/77de595d36fab0672ba75d626acae658/Screen_Shot_2022-11-18_at_16.00.40.png)

A visualização _Total do Dia_ indica na tela:

* O número absoluto de Pedidos e Sessões até o momento atual do dia. 
* Um gráfico de linhas com o valor de Pedidos e Sessões por minuto, para cada ano selecionado.

Essa visualização é útil para acompanhar o somatório de vendas no dia, sendo possível identificar horários de picos de venda ou inflexão expressiva nos números.

#### Últimas 2 horas

![Últimas 2 horas](//images.ctfassets.net/alneenqid6w5/7tBr0SR2wP9lD9SvJF6jpj/5be2166e0dd369b2a3b980ccfb90cf47/Screen_Shot_2022-11-18_at_16.00.54.png)

A visualização _Últimas 2 horas_ indica na tela:

* A média do número de Pedidos e Sessões nas últimas duas horas.  
* Um gráfico de linha com o valor de Pedidos e Sessões por minuto para as últimas duas horas do dia atual em 2022.   

Essa visualização é útil como gráfico de controle, para conferir se sua operação ocorre como o esperado no momento presente. É um feedback em tempo real para verificar se sua loja está passando por algum problema que impede seus compradores de realizarem pedidos ou acessarem sua loja. A média de pedidos por minuto indica se a variação das últimas duas horas se aproxima do esperado. 

## Limitações da página
A página apresenta as seguintes limitações:

* Não é possível exportar um relatório com as métricas da página.
* A página só inclui métricas de número absoluto de pedidos e sessões. Não incluiremos outras métricas para este lançamento, e nem é possível customizar a página para incluir outras métricas. Para monitorar outras métricas como receita ou ticket médio, sugerimos usar a página [Performance de Vendas](https://help.vtex.com/pt/tutorial/performance-de-vendas--3DMube0sEsK9vPcRYGas72), apesar de não trazer dados em tempo real. 
* A página só estará disponível em seu Admin até dia 27 de novembro de 2022.
* A página inclui métricas da loja somente durante o período da Black Week, do dia 21/11/2022 ao dia 27/11/2022, sendo possível comparar o mesmo período com anos anteriores. Não é possível selecionar outro período para comparar dados, mesmo se a Black Week do seu negócio tenha sido em outra semana, em anos anteriores. Para analisar dados de outros períodos sugerimos usar a página [Performance de Vendas](https://help.vtex.com/pt/tutorial/performance-de-vendas--3DMube0sEsK9vPcRYGas72).
* Ao analisar anos anteriores, só incluímos dados que já estavam presentes na VTEX. Portanto, se sua loja utilizava outra plataforma em Black Weeks anteriores, e dados de Pedidos Captados e Sessões não foram migrados para a VTEX, essa informação não estará disponível no painel da Black Week.
