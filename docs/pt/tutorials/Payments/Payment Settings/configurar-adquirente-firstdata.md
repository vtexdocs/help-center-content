---
title: 'Configurar adquirente FirstData'
id: 4mW6gU343eWY6c8m6ocO0i
status: ARCHIVED
createdAt: 2018-04-26T21:04:20.319Z
updatedAt: 2024-03-18T18:23:46.570Z
publishedAt: 
firstPublishedAt: 2018-04-26T22:08:51.029Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-firstdata-acquirer
locale: pt
legacySlug: configurar-adquirente-firstdata
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

Na VTEX, é possível realizar a integração com a FirstData. Com este provedor, sua loja pode realizar vendas por meio de cartões de crédito, débito e Plan Ahora (sistema de pagamento argentino).

Para configurar a FirstData, siga as etapas abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __FirstData__ na barra de busca e clique sobre o nome do provedor.
4.  Preencha os campos solicitados com as seguintes informações:

- __Nome de usuário__: ID do usuário que tem permissão de acesso ao Web Service API. Essa informação é necessária para realizar a autorização básica.  
- __Senha para autorização básica__: Senha geral do usuário do FirstData (o mesmo citado no campo “Nome de usuário”), que será usada na autorização.  
- __ID da loja__: Código que é enviado no arquivo .xml das chamadas. 
- __País__: País de origem.  
- __Moeda__: Moeda do país de origem. 
- __Descrição da transação__: Texto que identificará a compra no extrato do seu cliente. 
- __Senha do certificado privado__: Senha do certificado na sua loja. 
- __Certificado privado (.p12)__: Faça o upload de um certificado privado válido (gerado por você, usando uma certificadora ou um software especializado), com extensão .p12 e chave.
- __Plan Ahora__: Se você ativou as opções de plano de governo Ahora com a FirstData, escolha "True",caso contrário, escolha "False". Para mais detalhes sobre o plano Ahora, [clique aqui](http://planesahora.gob.fiservargentina.com/).

  - __Plan Ahora 3__: Para descontos em parcelamentos realizados em 3X.
  - __Plan Ahora 6__: Para descontos em parcelamentos realizados em 6X.
  - __Plan Ahora 10__: Para descontos em parcelamentos realizados em 10X.
  - __Plan Ahora 12__: Para descontos em parcelamentos realizados em 12X.
  - __Plan Ahora 18__: Para descontos em parcelamentos realizados em 18X.
  - __Plan Ahora 24__: Para descontos em parcelamentos realizados em 24X.
  - __Plan Ahora 30__: Para descontos em parcelamentos realizados em 30X.

- __Auto Settle__: Configure essa opção para definir quando será realizada a captura automática do pagamento.

  - __Imediatamente__: A captura será realizada logo após a autorização do pagamento.
  - __1 a 30 dias__: A captura será realizada após a autorização do pagamento, levando em conta o número de dias selecionado.
  - __Desativado__: A captura automática será desligada e não terá o comportamento padrão da plataforma (4 dias para captura). Dessa forma, o pedido somente será capturado no momento em
que for faturado, ou se a [captura manual](https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/settlement-request) for acionada.

- __Change Margin__: Defina a margem percentual para um pagamento ser modificado para um valor maior do que o inicialmente autorizado. Se a compra foi fechada e autorizada por BRL 100,00, por exemplo, mas houver uma [mudança no pedido](https://help.vtex.com/pt/tutorial/change-mudanca-em-pedidos--3d1XLIgPQcwaKGyMiWaYog?&utm_source=autocomplete) para um valor maior antes da captura, este conector permite que o aumento seja de até 20% do inicialmente autorizado.

<ul>
5. Clique em <b>Salvar</b>.
  </ul>

Para configurar os métodos de pagamento a serem processados pela FirstData, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector FirstData pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

