---
title: 'Cadastro de pontos de retirada'
id: 2R5ClQiwe4KoSQgsuiOw4E
status: PUBLISHED
createdAt: 2017-10-25T17:20:03.898Z
updatedAt: 2023-03-29T20:26:32.719Z
publishedAt: 2023-03-29T20:26:32.719Z
firstPublishedAt: 2017-10-30T18:28:31.695Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: creating-pickup-points
legacySlug: como-importar-pontos-de-retirada-pickup-points-por-planilha, configurar-pontos-de-retirada-pickup-points
locale: pt
subcategoryId: 1c5Btie9ou2Gg2iUo0ggqM
---

Pontos de retirada são locais físicos onde clientes podem retirar pedidos feitos no seu ecommerce. É uma etapa opcional da [estratégia de envio](https://help.vtex.com/pt/tutorial/estrategia-de-envio--58vLBDbjYVQzJ6rRc5QNz3) da sua loja. 

Você pode cadastrar pontos de retirada utilizando a requisição de API [Create/Update Pickup Point](https://developers.vtex.com/vtex-rest-api/reference/pickup-points-1#createupdate) ou via Admin VTEX. Este artigo explica como realizar o segundo processo.

Há duas formas de cadastrar pontos de retirada pelo Admin:

* [Cadastro individual](#cadastro-individual).
* [Cadastro por planilha](#cadastro-por-planilha).

<div class="alert alert-warning">
O cadastro dos pontos de retirada é um dos passos para o funcionamento correto da funcionalidade. Confira o artigo <a href="https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R">Pontos de retirada</a> e veja as demais <a href="https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#como-configurar">configurações necessárias</a> para disponibilizar os pontos de retirada para os seus clientes.
</div>

## Cadastro individual

1. No Admin VTEX, acesse **Envio > Pontos de retirada**, ou digite *Pontos de retirada* na barra de busca no topo da página.    
2. Clique em <i class="fas fa-plus"></i> `Adicionar`.  
3. Preencha os [campos de cadastro](#campos-de-cadastro).  
4. Clique em `Salvar modificações`.  

### Campos de cadastro

#### Informações Gerais

* **Nome:** nome do ponto de retirada que será exibido no checkout.
* **ID:** identificação do ponto de retirada. Se não for preenchido, o sistema escolherá um ID automaticamente. Não utilize caracteres de espaço.
* **Ponto de retirada de terceiros:** marque com <i class="far fa-check-square"></i>  se o ponto de retirada não for um endereço relacionado à sua loja. Endereços de terceiros são sugeridos com menos relevância do que pontos da própria loja.

  <div class="alert alert-danger">
A configuração <b>Ponto de retirada de terceiros</b> atualmente não está disponível. 
</div>

Selecione <i class="fas fa-toggle-on"></i> para que o ponto de retirada fique ativo.

#### Endereço do ponto de retirada

* **País:** escreva o país onde está localizado o ponto de retirada.
* **Procure um endereço:** insira as informações do endereço para busca. Você pode utilizar o código postal, a rua, a cidade, o número e o complemento do local. 
* Para editar alguma informação do endereço, clique em `Editar`. 
* Para adicionar um endereço diferente, clique em `Limpar` e refaça a busca.

<div class = "alert alert-info">
As informações de endereço e a localização no mapa serão exibidas no checkout. 
</div>

#### Informações adicionais

* **Instruções de retirada:** insira informações que ajudarão seu cliente na retirada dos pacotes no ponto de retirada. Como, por exemplo, em qual portão a retirada dos itens é feita, ou quais documentos o cliente deve apresentar na retirada dos pedidos. Essas instruções serão exibidas no checkout, no momento da escolha do ponto de retirada. 
* **Tags:** adicione _tags_ para agrupar pontos de retirada. Estas _tags_ são úteis no momento de relacionar as [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) com os pontos de retirada.  

#### Horário de funcionamento

* **Dias da semana:** 
    1. Marque com <i class="far fa-check-square"></i> os dias em que seu ponto de retirada estará disponível para seus clientes retirarem pedidos. 
    2. Selecione também os horários de funcionamento do ponto de retirada para cada dia.
    <div class = "alert alert-info">Caso esse campo não seja preenchido, a plataforma considera o horário de funcionamento de 24 horas por dia.</div>
* **Exceções ou feriados:** para adicionar dias específicos em que o ponto de retirada não funcionará:
    3. Clique em `Adicionar exceção`;
    4. Preencha **Dia** e **Horário;**
    5. Clique em`Adicionar`.

<div class="alert alert-warning">
O horário de funcionamento cadastrado no ponto de retirada é apenas informativo para o cliente, mas não é utilizado para o cálculo do SLA. Para alterar as configurações que influenciam no prazo de entrega, é preciso estabelecer o horário de funcionamento na <a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">política de envio</a> relacionada ao ponto de retirada. No caso do cadastro de feriados, as configurações devem ser feitas pela seção de <a href="https://help.vtex.com/pt/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk">feriados</a> para que influenciem no cálculo de prazo.
</div>

## Cadastro por planilha

É possível cadastrar pontos de retirada via importação de planilha (arquivo XLS). Dessa forma, você cadastra mais de um ponto de retirada de uma única vez.

<div class = "alert alert-info">
O arquivo XLS não deve ultrapassar 10MB (aproximadamente 50 mil pontos de retirada). Se preciso, cadastre mais de uma planilha. 
</div>

1. No Admin VTEX, acesse **Envio > Pontos de retirada**, ou digite *Pontos de retirada* na barra de busca no topo da página.    
2. Clique em <i class="fas fa-upload"></i> `Subir um XLS`.
3. Baixe o modelo e preencha os [campos da planilha](#campos-da-planilha).<div class = "alert alert-info">Note que a planilha modelo já vem com valores de exemplo, que devem ser substituídos pelos dados dos pontos de retirada da sua loja.</div>
4. Ao final do upload, clique em `OK`. Os pontos de retirada já estão cadastrados. 

### Campos da planilha

Preencha a planilha de acordo com as informações da tabela abaixo:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 2px; border-collapse: collapse;">
    <thead class="w-100 center mv7 bb b--gray" style="border-spacing: 2px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
            <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl"><strong>Coluna da planilha </strong>
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl"><strong>Preenchimento</strong>
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl"><strong>Preenchimento obrigatório</strong>
   </th>
   <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl"><strong>Exemplo de preenchimento</strong>
   </th>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Id</strong>
   </td>
   <td>Código identificador do ponto de retirada.
   </td>
    <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">123</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Name</strong>
   </td>
   <td>Nome do ponto de retirada exibido para o cliente no checkout.
   </td>
   <td><center>Sim</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Ponto de retirada A</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Description</strong>
   </td>
   <td>Descrição do ponto de retirada exibida no checkout.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Loja do Shopping Mall</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Instructions</strong>
   </td>
   <td>Instruções do local para facilitar a retirada do cliente.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Retire seu pacote na entrada principal, utilizando o número do pedido.</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>CountryName</strong>
   </td>
   <td>Nome do país onde está o ponto de retirada.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Brasil</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>City</strong>
   </td>
   <td>Cidade onde está o ponto de retirada.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Rio de Janeiro</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>PostalCode</strong>
   </td>
   <td>Código postal da localização do ponto de retirada. 
   </td>
   <td><center>Sim</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">24210000</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>CountryAcronym</strong>
   </td>
   <td>Abreviação de três letras do nome do país de acordo com a ISO 8601  (RFC 3339).
   </td>
   <td><center>Sim</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">BRA</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>State</strong>
   </td>
   <td>Nome abreviado do estado onde está o ponto de retirada.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">RJ</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Latitude</strong>
   </td>
   <td>Latitude do ponto de retirada.
   </td>
   <td><center>Sim</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">-22,94</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Longitude</strong>
   </td>
   <td>Longitude do ponto de retirada. 
   </td>
   <td><center>Sim</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">-43</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Neighborhood</strong>
   </td>
   <td>Bairro do ponto de retirada.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Botafogo</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Street</strong>
   </td>
   <td>Rua onde o ponto de retirada está localizado.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Praia de botafogo</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Number</strong>
   </td>
   <td>Número (endereço) do ponto de retirada.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">300</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Complement</strong>
   </td>
   <td>Complemento do endereço.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">segundo andar, loja 345</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>Reference</strong>
   </td>
   <td>Ponto de referência que ajude na localização do ponto de retirada.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Em frente à praia</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>IsActive</strong>
   </td>
   <td>Preencha com <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">true</span> para ativar o ponto de retirada ou <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">false</span>, para desativá-lo. Pontos de retirada ativos aparecem no checkout.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">true</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
            <td class="t-body pa5" style="min-width: 15rem;"><strong>BusinessHours</strong>
   </td>
   <td>Indica o horário de funcionamento do ponto de retirada. Deve ser preenchido da seguinte forma:
<body>
<ul>
<li>DiaDaSemana,HoraInício,HoraFinal, sem utilizar espaços, separados por vírgulas.</li> 
<li>Inclua cada dia da semana um a um, com seu respectivo horário de funcionamento, separados por ponto e vírgula (;).</li> 
<li>Os dias da semana devem ser preenchidos de acordo com os códigos: 0 = Domingo, 1 = Segunda, 2 = Terça, 3 = Quarta, 4 = Quinta, 5 = Sexta, 6 = Sábado.</li>
<li>As horas devem obedecer ao padrão 24h e devem estar no formato hh:mm, em que hh representam as horas e mm os minutos.</li>
</ul>
</body>
<p>Este campo não é utilizado no cálculo de tempo de SLA.  Para alterar as configurações que influenciam no prazo de entrega, é preciso estabelecer o horário de funcionamento na <a href="https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140">política de envio</a> relacionada ao ponto de retirada. No caso do cadastro de feriados, as configurações devem ser feitas pelo módulo de <a href="https://help.vtex.com/pt/tutorial/registrar-feriados--2ItOthSEAoyAmcwsuiO6Yk">feriados</a> para que influenciem no cálculo de prazo.</p>
   </td>
   <td><center>Não</center>
   </td>
   <td>Para o caso de funcionamento segunda-feira e terça-feira, das 9 da manhã às 18 horas, o preenchimento ficaria: <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">1,09:00:00,18:00:00;2,09:00:00,18:00:00;</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
  <td class="t-body pa5" style="min-width: 15rem;"><b>PickupHolidays</b>
   </td>
   <td>Preencha esse campo caso haja dias em que os pontos de retirada não estão disponíveis. O preenchimento deve ser feito da seguinte forma:
<body>
<ul>
<li>Data,HoraInício,HoraFinal, sem utilizar espaços, separados por vírgulas.</li>
<li>A data deve ser preenchida seguindo o formato yyyy-mm-dd, em que yyyy representa o ano, mm o mês, e dd o dia.</li>
<li>Os feriados devem ser incluídos um a um. Para adicionar mais de um feriado, separe-os usando ponto e vírgula (;) e sem espaços.</li>
<li>As horas devem obedecer ao padrão 24h e devem estar no formato hh:mm, em que hh representa as horas, e mm os minutos.</li>
</ul>
</body> 
   </td>
   <td><center>Não</center>
   </td>
   <td>Para um feriado no dia 28 de dezembro de 2018 o preenchimento ficaria:
<p><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">2018-12-28,00:00,00:00</span></p>
<p>Para um feriado no dia 25 de novembro de 2016 com funcionamento a partir das 13 horas</p>
<span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">2016-11-25,00:00, 13:00;2018-11-17T00:00:00Z,00:00,00:00</span>
   </td>
  </tr>
  <tr class="bb b--muted-3">
  <td class="t-body pa5" style="min-width: 15rem;"><b>Tags</b>
   </td>
   <td>Preencha com tags para  identificar um grupo de pontos de retirada.
   </td>
   <td><center>Não</center>
   </td>
   <td><span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">pickup1;pickup2;pickup3</span>
   </td>
  </tr>
</table>

