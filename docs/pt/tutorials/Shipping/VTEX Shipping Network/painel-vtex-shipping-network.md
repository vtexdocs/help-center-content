---
title: 'VTEX Shipping Network: Painel'
id: 51e8tx1IehiN4ZtURRWU92
status: PUBLISHED
createdAt: 2020-04-06T20:01:00.909Z
updatedAt: 2024-08-28T13:00:44.671Z
publishedAt: 2024-08-28T13:00:44.671Z
firstPublishedAt: 2020-04-16T21:37:18.831Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: vtex-shipping-network-dashboard
locale: pt
legacySlug: painel-vtex-log
subcategoryId: 5n5MnINzWTQUX1I2EZl4Ib
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Caso tenha interesse em adotar essa funcionalidade no seu negócio, acesse o site [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/).

>⚠️ O [VTEX Shipping Network Correios](https://help.vtex.com/pt/tutorial/vtex-shipping-network-correios-faq--2Wavf7Wie5GEUAEHKtn5oC) integra sua operação com os serviços PAC e SEDEX do contrato VTEX junto aos Correios, e o [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/) integra a sua operação com os Correios e outras transportadoras. Com ambas as soluções você pode usar as funcionalidades:
>
> * [Pronto para envio](https://help.vtex.com/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs)
>
> * [Entregas Correios](https://help.vtex.com/pt/tutorial/entregas-correios-vtex-shipping-network--5CZRA0lq60EecmwZpsjvfq)
>
> * Painel VTEX Shipping Network

O [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/) utiliza os dados de rastreio dos pedidos diretamente das transportadoras, mantendo você e seu cliente atualizados sobre o status de cada entrega.

Os painéis do [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/) fazem o gerenciamento de  todos os dados obtidos com o **VTEX Shipping Network**, para que você consiga extrair informação inteligente para a gestão da sua logística.

A plataforma VTEX gera diariamente relatórios sobre os pedidos da sua loja, com os quais calcula: 
- Valores de frete
- Valores recebidos pelos pedidos
- Pacotes enviados
- Status dos pacotes enviados (entregues ou não)
- Data estimada até a entrega ao cliente

Os painéis do **VTEX Shipping Network** permitem a você ter uma visão gerencial dos custos de frete com transportadoras e da receita com as taxas de frete cobradas dos seus clientes da sua loja. Além disso, mostram a saúde da operação logística da sua loja, e entregam análises de resultados da integrações da sua loja.

Para encontrar os painéis, no Admin VTEX, acesse **Envio > VTEX Shipping Network**, ou digite *VTEX Shipping Network* na barra de busca no topo da página.

## Aba Resumo Financeiro

A aba `Resumo Financeiro` é voltada para o acompanhamento e supervisão do resultado financeiro da sua configuração logística. Por meio dela é possível extrair informações para auemntar a eficiente da sua operação logística e também realizar as seguintes ações:

- **Filtrar a visualização de dados financeiros** por período desejado, ou ativando diretamente o botão de `Trimestre`. 
- **Exportar pedidos** em um arquivo CSV dentro do período filtrado, pelo botão no canto superior direito da tela.
- Visualizar um **gráfico dinâmico** com a relação entre evolução financeira ao longo do tempo, dentro do período filtrado. Passando o cursor em cima das linhas do gráfico, é possível ver com detalhes a movimentação de *custo* e *receita* por dia.
- Acompanhar vários **indicadores de performance financeira**, tais como:

| **Indicador Financeiro** | **Descrição** |
| :----------: | :---------- |
| **Custo do Frete x GMV** | Compara o custo do frete calculado no momento do checkout, com o GMV, que é o total que foi pago por pedido. |
| **Desempenho financeiro** | Mostra a relação entre o valor pago no checkout e o valor pago à transportadora. |
| **Receita Faturada Geral** | Soma de todos os fretes pagos no checkout. Quanto de fato seu cliente pagou pelo frete (independente de ser _VTEX Shipping Network_). Ou seja, é considerado se teve desconto no frete ou se foi frete grátis por exemplo. |
| **Receita Faturada VTEX Shipping Network** | Soma de todos os fretes pagos no checkout. Quanto de fato seu cliente pagou pelo frete, filtrando apenas por transportadoras VTEX Shipping Network. Ou seja, é considerado se teve desconto no frete ou se foi frete grátis por exemplo. |
| **Custo Projetado Geral** | Independente do VTEX Shipping Network ou não, é a soma dos valores de frete estimados pelo módulo de Estoque e Entrega para todos os pedidos. Acompanha setas que indicam a porcentagem de crescimento ou decrescimento de custos. A diminuição de custos nesse  (seta para baixo) card é uma medida positiva para os resultados de uma loja. |
| **Custo Projetado VTEX Shipping Network** | Soma dos valores de frete estimados pelo módulo Eenvio para todos os pedidos, filtrando apenas transportadoras _VTEX Shipping Network_. Acompanha setas que indicam a porcentagem de crescimento ou decrescimento de custos.  A diminuição de custos nesse (seta para baixo) card é uma medida positiva para os resultados de uma loja. |

* Estamos melhorando o **Custo Emitido via CTE** e a **Diferença de Custo apontada**, e eles estão temporariamente indisponíveis.

## Aba Performance

Pela aba `Performance`, é possível acompanhar o desempenho das transportadoras configuradas na logística da sua loja através de uma ferramenta analítica. Por meio dela, você visualiza a evolução da performance de cada transportadora e o aspecto geral das sua transportadoras _VTEX Shipping Network_.

No cálculo da performance, são considerados todos os pacotes que fazem parte das entregas. O painel de performance agrega resultados mensais ou trimestrais com base em pacotes ao invés de entregas, uma vez que em único pedido pode conter mais de um pacote que pode ser entregue por transportadoras diferentes.

A performance é o resultado em percentual do cálculo entre a relação dos pacotes entregues dentro do  prazo pelo total de pacotes entregues. Assim, o cálculo da performance só leva em consideração os pacotes que foram entregues. Veja:

![equation PT performance](//images.ctfassets.net/alneenqid6w5/24t2KA8ivoNmb4y3oaDDxf/5f190d7ed6439920a22dfbb5d86fe127/CodeCogsEqn.gif)

 A ferramenta de Performance do **VTEX Shipping Network** permite:

- **Verificar evolução da performance:** apresenta um gráfico dinâmico com a relação entre evolução da performance ao longo do tempo. 
- **Verificar pacotes VTEX Shipping Network:** apresenta os dados agrupados de todas as transportadoras VTEX Shipping Network.
- **Verificar total de pacotes:** apresenta o número absoluto dos pacotes de acordo com o período filtrado.
- **Verificar** [Desempenho das transportadoras](#desempenho-das-transportadoras): apresenta a tabela de desempenho de todas as transportadoras utilizadas no seu negócio.
- [Exportar relatório](#exportar-relatorio): exporta um arquivo no formato CSV com os dados das transportadoras.

Para realizar o acompanhamento de desempenho, no Admin VTEX, acesse **Envio > VTEX Shipping Network**, ou digite *VTEX Shipping Network* na barra de busca no topo da página. No painel **VTEX Shipping Network**, você encontrará a aba `Performance`, em que ficará disponível para consulta a performance trimestral. 

Para visualizar um mês específico, desabilite a função _Trimestre_ no início da página, e selecione na caixa lateral o mês da análise que deseja visualizar.

### Desempenho das transportadoras

Na tabela de desempenho das transportadoras, é possível acompanhar a performance de cada transportadora. No **VTEX Shipping Network**, a performance é considerada ideal quando o seu valor é maior que 95%. 

Também é possível visualizar os pedidos nas seguintes situações:
- Faturados
- A caminho (pedidos com número de rastreio cadastrado, que ainda não foram entregues e não estão atrasados)
- Atrasados (pedidos com número de rastreio cadastrado, que ainda não foram entregues e estão atrasados)
- Entregues 

Todas as transportadoras **VTEX Shipping Network** possuem selo de verificação o qual é visível na tabela de desempenho. O selo está na tabela de desempenho  sinalizando com uma marcação de cor rosa quais as transportadoras são **VTEX Shipping Network**.

>⚠️ É importante saber que, no caso em que a transportadora não teve a performance calculada na plataforma, os dados de rastreamento não foram integrados ao **VTEX Shipping Network**.

Para que o cálculo da performance seja feito em transportadoras que não são **VTEX Shipping Network**, os dados devem ser enviados pelo seller por uma API de tracking disponibilizada pela solução **VTEX Shipping Network**. Nestes casos, vale ressaltar que os dados do painel podem ser imprecisos, pois não há validação da entrega ser realizada no prazo indicado. 

Para saber mais como realizar essa integração, confira o [Overview VTEX Shipping Network](https://developers.vtex.com/docs/api-reference/vtex-shipping-network-api) das nossas APIs.

### Exportar relatório

É possível baixar o relatório com os dados das transportadoras e as entregas dos pacotes. Para exportar os dados das transportadoras em uma planilha, realize os passos abaixo:

1. No Admin VTEX, acesse **Envio > VTEX Shipping Network**, ou digite *VTEX Shipping Network* na barra de busca no topo da página.
2. Na aba `Performance`, clique em **EXPORTAR RELATÓRIO**.
4. Aguarde o recebimento do link para download por email. 
5. Baixe a planilha pelo link enviado por email.

## Saiba mais

* [VTEX Shipping Network: Entregas Correios](https://help.vtex.com/pt/tutorial/entregas-correios-vtex-shipping-network--5CZRA0lq60EecmwZpsjvfq)
* [VTEX Shipping Network: Pronto para envio](https://help.vtex.com/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs)
* [VTEX Shipping Network Correios: FAQ](https://help.vtex.com/pt/tutorial/vtex-shipping-network-correios-faq--2Wavf7Wie5GEUAEHKtn5oC)
