---
title: Configurar logística para o Mercado Livre
id: 4551ZlEQI8qmiSWieigoKy
status: PUBLISHED
createdAt: 2018-08-13T12:53:57.008Z
updatedAt: 2023-03-28T13:36:16.191Z
publishedAt: 2023-03-28T13:36:16.191Z
firstPublishedAt: 2018-08-13T14:27:58.483Z
contentType: trackArticle
productTeam: Channels
slug: configurar-logistica-para-o-mercado-livre
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugPT: configurar-integracao-do-mercado-livre
---

A configuração da logística para atender aos pedidos realizados no Mercado Livre possui algumas particularidades, principalmente porque é o Mercado Livre quem determina o tipo de frete que sua loja deve configurar.

Essa escolha ocorre em função do acordo comercial que sua loja realizou com o Mercado Livre e a sua localização e a sua experiência como vendedor. Por isso, você deve consultar o Mercado Livre para saber qual tipo de modalidade de envio que sua loja deve configurar.

Os modos de envio podem ser de dois tipos:

- [Mercado Envios 1 (ME1)](#mercado-envios-1-me1)
- [Mercado Envios (ME2)](#mercado-envios-2-me2)

## Mercado Envios 1 (ME1)

O modo de envios ME1 é destinado a produtos que possuem mais de 30 kg ou tem mais 200 cm no total, somando altura, largura e comprimento, ou em que um dos lados do produto exceda 70 cm.

Os sellers que desejam utilizar este formato, precisam entrar em contato com seu consultor do Mercado Livre, que irá analisar se o seller atende aos critérios necessários para a ativação deste modo.

No Mercado Envios (ME1), o seller cuida de todo o ciclo de envio do produto para o cliente. Não é necessário envio de nota fiscal para o Mercado Livre, mas caso queira enviar, você poderá fazer a configuração no [faturador](https://www.mercadolivre.com.br/emitir-nota-fiscal/) do Mercado Livre. Dessa forma, uma nota fiscal será emitida toda vez que seu produto for faturado na plataforma. 

Nessa modalidade de envio, seus anúncios não terão tanta relevância nas buscas do Mercado Livre. 

No ME1, a cotação do frete pode ser feita de duas formas: 
- [Planilha de frete enviada para o Mercado Livre](#planilha-de-frete)
- [Frete Dinâmico](#frete-dinamico)

### Planilha de frete

O seller é responsável por enviar uma [planilha de frete](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127) no formato de excel para o seu consultor comercial do Mercado Livre. 

### Frete dinâmico

Na VTEX, sellers configuram as opções e valores de frete por meio de [políticas de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140). O frete dinâmico é uma configuração do Mercado Envios 1 (ME1) que tem a função de verificar em tempo real os melhores preços e condições de frete para os usuários, calculando a partir das informações cadastradas nas políticas de envio na VTEX. 

O Mercado Livre realiza simulações de frete em tempo real no momento do fechamento da compra, e quase que simultaneamente, a VTEX disponibiliza uma URL no qual o Mercado Livre fará a requisição para obter as informações de frete que serão exibidas na plataforma no momento da compra. 

#### Configuração de frete dinâmico

Para ativar a configuração de frete dinâmico, é necessário enviar a URL abaixo para seu representante comercial do Mercado Livre solicitando a liberação dessa funcionalidade, para que seja feita a configuração.

`https://portal.vtexcommercestable.com.br/api/meliintegration/freight`

## Mercado Envios 2 (ME2)

No modo de envio ME2, a entrega do pedido é de responsabilidade do Mercado Livre. O Mercado Livre já prepara a etiqueta de envio, ficando sob responsabilidade do seller apenas imprimir a etiqueta e postar o pacote.

O rastreamento é feito inteiramente pelo Mercado Livre, através de uma transportadora predefinida para cada localização, portanto, o seller não precisará se preocupar em escolher a transportadora e em gerenciar o rastreamento.

Alguns tipos logísticos possuem a obrigatoriedade de envio de nota fiscal ou configuração do [faturador](https://www.mercadolivre.com.br/emitir-nota-fiscal/). No ME2, existem 5 tipos logísticos, e eles são determinados pelo seu acordo comercial, sua localização e experiência como seller no Mercado Livre. São eles:

- [Drop Off](#drop-off)
- [Crossdocking (Coletas)](#crossdocking-coletas)
- [Places](#places)
- [Flex](#flex)
- [Mercado Envios Full](#mercado-envios-full)

### Drop Off

<div class="alert alert-info">
A modalidade Drop Off é a única que não oferece possibilidade do cliente retirar o pedido em pontos de retirada.
</div>

Sempre que você inicia como vendedor no Mercado Livre, você começa obrigatoriamente pelo *Drop Off*, esse tipo logístico é utilizado por todos os clientes que estão começando a vender no Mercado Livre.

Quando o pedido é fechado no Mercado Livre, uma etiqueta é enviada para o seller, constando endereço de entrega do pedido. O seller precisa imprimir essa etiqueta, colar no pacote do pedido e despachá-lo em alguma agência dos Correios. 

O envio do código de rastreamento ao cliente, atualização de status e qualquer problema que venha acontecer são responsabilidade do Mercado Livre.

Todas as configurações são feitas dentro da plataforma do Mercado Livre.

### Crossdocking (Coletas)

O *Crossdocking*, ou Coleta, também, é o tipo de envio em que um caminhão de coleta do Mercado Livre passa por [lojas físicas vinculadas](https://envios.mercadolivre.com.br/agenciesList/showAgenciesMap?NZXRrf9zzJ?utm_source=vendedores&utm_medium=referral&utm_campaign=ME_AgenciasMercadoLivre&utm_content=pertodoseuendereco) ao Mercado Livre todos os dias, em um horário agendado e faz a coleta dos pedidos dos clientes. 

Quando o pedido é fechado no Mercado Livre, uma etiqueta é enviada para o seller. O seller precisa imprimir essa etiqueta, colar no pacote do pedido e aguardar a coleta do caminhão.

Depois de coletados, os pedidos são enviados para um Centro de Distribuição do Mercado Livre onde são processados e é escolhida a melhor transportadora para envio do pedido. 

Todas as configurações são feitas dentro da plataforma do Mercado Livre.

### Places

No tipo de envio *Places*, o seller despacha o pedido etiquetado na [agência Mercado Livre](https://vendedores.mercadolivre.com.br/nota/agencias-mercado-livre-envie-suas-vendas-rapidamente/) mais próxima, o caminhão de coleta retira os pedidos na agência todos os dias e encaminha para um centro de distribuição do Mercado Livre.

Quando o pedido é fechado no Mercado Livre, uma etiqueta é enviada para o seller. Ele precisa imprimir essa etiqueta, colar no pacote do pedido e despachar o pedido na agência Mercado Livre.

No centro de distribuição, o pedido é processado e é escolhida a melhor transportadora para envio.

Todas as configurações são feitas dentro da plataforma do Mercado Livre.

### Flex

No tipo *[Flex](https://envios.mercadolivre.com.br/mercado-envios-flex)*, quando o pedido é fechado no Mercado Livre, uma etiqueta é enviada para o seller. Ele precisa imprimir essa etiqueta, colar no pacote do pedido e despachar o produto para algum motoboy. 

A contratação do motoboy é de responsabilidade do seller e o entregador precisa utilizar o aplicativo do Mercado Livre para que o pedido seja rastreado.

Todas as configurações são feitas dentro da plataforma do Mercado Livre.

<div class="alert alert-info">
Essa modalidade só está disponível para pedidos feitos na mesma cidade do seller. 
</div>

### Mercado Envios Full

[Mercado Envios Full](https://envios.mercadolivre.com.br/mercado-envios-full) é um serviço oferecido pelo Mercado Livre no qual o estoque e o envio de produtos ao consumidor final fica sob responsabilidade do Mercado Livre. Cada vez que uma venda é completada, os produtos comprados são separados, empacotados e enviados dentro de 24hs.

É possível configurar esse serviço na sua loja através do [cadastro de um estoque](https://help.vtex.com/pt/tutorial/gerenciar-estoque) exclusivo para o  Mercado Envios Full. Essa configuração permite acompanhar o nível do estoque uma vez que a quantidade dos produtos dos pedidos feitos através do Mercado Envios Full é atualizada automaticamente conforme a venda é realizada.

#### Configurar o Mercado Envios Full

Para configurar, siga os passos a seguir: 

1. No Admin VTEX, acesse **Envio > Estratégia de Envio > Estoques**, ou digite *Estratégia de Envio* na barra de busca no topo da página e selecione a aba *Estoques*.     
2. [Cadastre](https://help.vtex.com/pt/tutorial/gerenciar-estoque) um estoque.    
3. Na aba **Estoques**, copie o ID do estoque que você criou.    
4. Acesse **Marketplace > Conexões > Integrações**, ou digite *Integrações* na barra de busca no topo da página.     
5. Na integração do Mercado Livre, clique na engrenagem <img class="shadow-4" src="https:https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />  e selecione a opção `Editar configuração`.    
6. Insira o ID do estoque selecionado no campo **Armazém Mercado Full**.  
7. Clique em `Salvar Configuração`.    

#### Consultar as notas fiscais do Mercado Livre por API

As notas fiscais dos pedidos [Mercado Envios Full](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4551ZlEQI8qmiSWieigoKy#mercado-envios-full) emitidas pelo Mercado Livre podem ser consultadas por meio de nossas chamadas de API. Para consultar a nota fiscal faturada pelo Mercado Livre para o pedido, você deverá utilizar a chamada de API [Get Order](https://developers.vtex.com/vtex-rest-api/reference/orders#getorder). 

Para cada pedido podem ser emitidos dois tipos de notas fiscais: nota fiscal e nota fiscal simbólica (utilizada para itens retornados). Confira em quais campos do corpo da resposta da chamada de API você pode encontrar informações sobre as diferentes notas fiscais:

- **Nota fiscal:** no objeto `embeddedInvoice`, você encontrará o arquivo em XML da nota fiscal.  
- **Nota fiscal simbólica:** o arquivo em XML não é incluído no corpo da resposta. Confira os campos `invoiceKey`, `invoiceNumber` e `issuanceDate` para obter informações básicas sobre a nota fiscal simbólica.
