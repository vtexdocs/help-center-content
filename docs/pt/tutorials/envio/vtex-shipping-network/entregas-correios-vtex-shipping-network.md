---
title: 'VTEX Shipping Network: Entregas Correios'
id: 5CZRA0lq60EecmwZpsjvfq
status: PUBLISHED
createdAt: 2022-03-04T13:12:38.617Z
updatedAt: 2025-09-02T17:39:01.524Z
publishedAt: 2024-03-04T21:51:37.046Z
firstPublishedAt: 2022-03-04T13:17:13.380Z
contentType: tutorial
productTeam: Others
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: deliveries-progress-vtex-shipping-network
legacySlug: entregas-correios-vtex-log
locale: pt
subcategoryId: 5n5MnINzWTQUX1I2EZl4Ib
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Caso tenha interesse em adotar essa funcionalidade no seu negócio, acesse o site [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/).

> ⚠️ O [VTEX Shipping Network Correios](/pt/tutorial/vtex-shipping-network-correios-faq--2Wavf7Wie5GEUAEHKtn5oC) integra sua operação com os serviços PAC e SEDEX do contrato VTEX junto aos Correios, e o [VTEX Shipping Network](https://vtex.com/br-pt/shipping-network/) integra a sua operação com os Correios e outras transportadoras. Com ambas as soluções você pode usar as funcionalidades:<ul><li>[Pronto para envio](/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs)</li><li>[Painel VTEX Shipping Network](/pt/tutorial/painel-vtex-shipping-network--51e8tx1IehiN4ZtURRWU92)</li><li>Entregas Correios</li></ul>

**Entregas Correios** é a funcionalidade do [VTEX Shipping Network](https://vtex.com/br-pt/log/) que permite ao lojista acompanhar as informações e o andamento de pacotes postados nos [Correios](https://www.correios.com.br/). A solução permite solicitar um Pedido de Informação (PI) para entregas que estão atrasadas, extraviadas ou foram feitas indevidamente.

Depois de imprimir a etiqueta dos Correios e enviar o pacote, as informações de rastreio ficam disponíveis. Para visualizá-las no Admin VTEX, acesse **Envio >  digite *Entregas Correios* na barra de busca no topo da página.

Esse artigo apresenta as instruções para:

* [Acessar as informações dos pacotes postados nos Correios](#informacoes-dos-pedidos)
* [Conferir os detalhes de um pedido](#detalhes-de-um-pedido)
* [Realizar a busca de pacotes](#busca)
* [Exportar as informações dos pacotes em uma planilha CSV](#exportacao)
* [Solicitar informações dos pacotes aos Correios](#solicitar-informacoes-do-pedido-aos-correios)

Além disso, ao final do artigo você vai encontrar informações sobre:

* Conexão com agências dos Correios
* Serviço de Logística Reversa dos Correios

> ℹ️ Para imprimir etiquetas dos pacotes no Admin VTEX, utilize a ferramenta [**Pronto para envio**](/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs). Você também pode fazer isso por API. Saiba  mais na nossa documentação para desenvolvedores [VTEX Shipping Network Labels Integration](https://developers.vtex.com/docs/guides/vtex-shipping-network-labels-integration).

## Informações dos Pedidos

No Admin VTEX, em **Envio > Entregas Correios**, a página **Informações dos Pedidos** apresenta uma listagem de todos os pacotes postados. Na lista, é possível acompanhar as seguintes informações:

![order_information_shipping_network_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-shipping-network/entregas-correios-vtex-shipping-network_1.png)

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
   <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">*Coluna*
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">*Descrição*
 </th>
        </tr>
    </thead>
      <tbody>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Rastreio**

  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Código de rastreamento do pedido nos Correios.

  </td>
  </tr>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Pedido**

  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Número de identificação na VTEX do pedido que gerou o pacote.

  </td>
  </tr>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Serviço**

  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Serviço de entrega utilizado, por exemplo, Sedex ou Pac.

  </td>
  </tr>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Postagem**

  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Data de postagem do pacote.

  </td>
  </tr>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Previsão**

  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Data prevista para a  entrega do pacote ao destinatário.

  </td>
  </tr>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Entrega**

  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Data de recebimento do pacote pelo destinatário.

  </td>
  </tr>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Pedido de Informação **

  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Número do protocolo do pedido de informação solicitado aos Correios. Esse código é gerado quando uma nova solicitação é aberta.

  </td>
  </tr>
    <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">**Status**
  </td>
   <td class="t-body pa5" style="min-width: 15rem;">Status do pacote no processo de envio. Os possíveis status são: <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Postado</span>, <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Em curso</span>, <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Saiu para entrega</span>, <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Destinatário ausente</span>, <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Entregue em dia</span>, <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Entregue com atraso</span>, <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Extraviado</span>.
  </td>
  </tr>
 </tbody>
</table>

Ainda na página **Informações dos Pedidos,** você pode:

* [Buscar](#busca) na lista por um pacote específico.
* [Exportar](#exportacao) em formato CSV as **Informações de Pedidos** dos pacotes filtrados na busca.
* Navegar entre as páginas utilizando a seta para esquerda <i class="fas fa-angle-left"></i> e a seta para direta <i class="fas fa-angle-right"></i> no canto superior direito.

### Detalhes de um pedido

Para visualizar mais informações sobre os pacotes de um pedido enviado clique no menu <i class="fas fa-ellipsis-v"></i> na última coluna da lista, e então clique em <i class="fas fa-eye"></i> `Detalhes do pedido`.

![entregas_correios_detalhes_pedidos_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-shipping-network/entregas-correios-vtex-shipping-network_2.png)

Na nova página, você pode realizar as seguintes ações: 

* Acompanhar o histórico da solicitação do 
[Pedido de Informação](#solicitar-informacoes-do-pedido-aos-correios) (caso exista uma solicitação) em **Histórico de solicitação de informação.** Na solicitação, a loja sinaliza para os Correios os problemas com a entrega para que a empresa tome as medidas necessárias.

Para responder uma réplica de solicitação estiver em andamento, relaize os passos abaixo:

1. Na página de detalhes do pedido, clique em `Responder`.  
2. Escreva a mensagem na caixa de texto que ficará disponível.  
3. Clique em `Confirmar`.

Você pode consultar o andamento e os dados da entrega na seção **Rastreamento e entrega**. Isso é feito clicando na seta para direita <i class="fas fa-angle-right"></i> e maximizando as janelas de **Rastreamento**, **Informação da entrega** e **Dados do cliente final**, nas quais é possível:
    * Visualizar os dados de rastreio no site da transportadora, clicando em `Ver rastreio`.
    * Acessar o fluxo desse pedido em **Todos os Pedidos**, clicando em `Ver pedido`.

Ainda na página de detalhes do pedido, para solicitar aos Correios um [Pedido de Informação](#solicitar-informacoes-do-pedido-aos-correios), clique no botão `Solicitar Informação` no topo da página. 

### Busca

Para selecionar um pacote específico, é possível utilizar a barra de busca ou os filtros de busca: 

* **Barra de busca:** insira o número do pedido do pacote desejado ou o código de rastreamento da postagem. 
* **Filtros de busca:** utilize apenas um ou combine os filtros _Status_ e _Data de Postagem_.
    * **Status**: os status disponíveis são: `Postado`, `Em curso`, `Saiu para entrega`, `Destinatário ausente`, `Entregue em dia`, `Entregue com atraso`, `Extraviado`. 
    * **Data da Postagem**: selecione no calendário o período pelo qual deseja filtrar a busca.

### Exportação

É possível exportar os dados dos pacotes listados em formato CSV (valores separados por vírgulas). Para isso, no canto superior direito, clique em `Exportar CSV`. Será feito o download de um arquivo com informações sobre os pacotes organizadas como **[Informações dos Pedidos](#informacoes-dos-pedidos)**. 

> ℹ️ As informações exportadas são referentes aos pacotes apresentados na tela no momento da exportação.

## Solicitar Informações do Pedido aos Correios

O _Pedido de informações_ é um canal de ajuda dos Correios no qual os clientes podem solicitar as informações de pacotes sob responsabilidade de envio dos Correios. A funcionalidade **Solicitar Informações do pedido** permite abrir um pedido de informações aos Correios por meio do Admin VTEX.

Há duas formas de solicitar um pedido de informação:

* Pela página de [Detalhes de um pedido](#detalhes-de-um-pedido).
* Pela página de **Informações dos Pedidos**, que pode ser acessada da seguinte maneira:
    1. No Admin VTEX, acesse **Envio > Entregas Correios**, ou digite **Entregas Correios** na barra de busca no topo da página. 
    2. Selecione o pacote desejado. ´Você bode [buscar](#busca) por um pacote usando a barra de busca e filtros.
    3. Clique no menu <i class="fas fa-ellipsis-v"></i> referente ao pedido.
    4. Clique em <i class="far fa-plus-circle"></i> `Solicitar Informações`.
    5. No modal **Solicitar Informações do Pedido**, preencha os seguintes campos:
        * **Motivo:** selecione uma das seguintes opções: `Objeto entregue indevidamente`; `Correspondência Violada`; `Conteúdo Avariado`; `Objeto entregue com atraso`;`Objeto devolvido indevidamente`; `Remetente não recebeu o AR`; `Destinatário não recebeu a correspondência`; `Pagamento Não Realizado`; `AR Digital - Imagem não disponível`; `Entrega em Caixa de Correio Inteligente`.
        * **Justificativa:** descreva o problema com a sua encomenda e explique porque deseja obter informações.
    6. Clique em `Confirmar`.

Feito isso, a seguinte mensagem de confirmação deve aparecer: _Solicitação enviada com sucesso_. Você pode acompanhar o andamento da sua solicitação na página de [Detalhes do pedido](#detalhes-de-um-pedido).

## Conexão com agências dos Correios

Após contratar o **VTEX Shipping Network Correios**, caso você tenha uma operação com uma agência dos Correios, o seu processo permanece o mesmo. 

Caso você ainda não tenha uma operação com uma agência, acesse a [busca dos Correios](https://mais.correios.com.br/app/index.php) para encontrar a agência mais próxima e entre em contato com os Correios para combinar a coleta e o envio de pedidos na agência.

## Serviço de Logística Reversa dos Correios

Ao contratar o **VTEX Shipping Network Correios**, você pode utilizar o serviço [Logística Reversa dos Correios](https://www.correios.com.br/enviar/encomendas/logistica-reversa). A VTEX disponibiliza um login e uma senha para você utilizar no site dos Correios e gerar a autorização de postagem.

> ℹ️ Para solicitar login e senha para utilizar o serviço de **Logística Reversa dos Correios**, entre em contato com a VTEX pelo email *vtexlog@vtex.com.br*.

## Saiba mais

* [VTEX Shipping Network: Pronto para envio](/pt/tutorial/pronto-para-envio--5YOZV7Aotv3pap0fGNESDs)
* [VTEX Shipping Network: Painel](/pt/tutorial/painel-vtex-shipping-network--51e8tx1IehiN4ZtURRWU92)
* [VTEX Shipping Network Correios: FAQ](/pt/tutorial/vtex-shipping-network-correios-faq--2Wavf7Wie5GEUAEHKtn5oC)
