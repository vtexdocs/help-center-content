---
title: 'Configurar adquirente FirstData'
id: 4mW6gU343eWY6c8m6ocO0i
status: PUBLISHED
createdAt: 2018-04-26T21:04:20.319Z
updatedAt: 2023-03-21T18:04:57.904Z
publishedAt: 2023-03-21T18:04:57.904Z
firstPublishedAt: 2018-04-26T22:08:51.029Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-adquirente-firstdata
legacySlug: configurar-adquirente-firstdata
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A FirstData, é uma [adquirente](https://help.vtex.com/pt/tutorial/o-que-e-um-adquirente) disponível exclusivamente para o mercado brasileiro e argentino.

Para configurar a solução, siga as etapas abaixo:

1.  Acesse o **Admin** VTEX.    
2.  No módulo **Pagamentos**, clique em **Configurações**.    
3.  Acesse **Afiliações de gateway** e clique no sinal verde “**+**”    
4.  Busque por **FirstData** e selecione o conector.    
5.  Preencha os campos solicitados com as seguintes informações:

-   **Nome de usuário:** ID do usuário que tem permissão de acesso ao Web Service API. Essa informação é necessária para realizar a autorização básica  
-   **Senha para autorização básica:** Senha geral do usuário do FirstData (o mesmo citado no campo “Nome de usuário”), que será usada na autorização.  
-   **StoreId:** Código que é enviado no arquivo .xml das chamadas. 
-   **País:** País de origem.  
-   **Moeda:** Moeda do país de origem. 
-   **SoftDescriptor:** Texto que identificará a compra no extrato do seu cliente.  
-   **Senha do certificado privado:** Senha do certificado na sua loja. 
-   **Certificado privado (.p12):** Faça o upload de um certificado privado válido (gerado por você, usando uma certificadora ou um software especializado), com extensão .p12 e chave.
- **Plan Ahora:** Se você ativou as opções de plano de governo Ahora com a FirstData, escolha "True",caso contrário, escolha "False". Para mais detalhes sobre o plano Ahora, [clique aqui](http://planesahora.gob.fiservargentina.com/).

  -   **Plan Ahora 3:** Para descontos em parcelamentos realizados em 3X.
  -   **Plan Ahora 6:** Para descontos em parcelamentos realizados em 6X.
  -   **Plan Ahora 10:** Para descontos em parcelamentos realizados em 10X.
  -   **Plan Ahora 12:** Para descontos em parcelamentos realizados em 12X.
  -   **Plan Ahora 18:** Para descontos em parcelamentos realizados em 18X.
  -   **Plan Ahora 24:** Para descontos em parcelamentos realizados em 24X.
  -   **Plan Ahora 30:** Para descontos em parcelamentos realizados em 30X.

- **Auto Settle:** Configure essa opção para definir quando será realizada a captura automática do pagamento.

  -   **Imediatamente:** A captura será realizada logo após a autorização do pagamento.
  -   **1 a 30 dias:** A captura será realizada após a autorização do pagamento, levando em conta o número de dias selecionado.
  -   **Desativado:**  A captura automática será desligada e não terá o comportamento padrão da plataforma (4 dias para captura). Dessa forma, o pedido somente será capturado no momento em
que for faturado, ou se a [captura manual](https://developers.vtex.com/docs/api-reference/payments-gateway-api#post-/api/pvt/transactions/-transactionId-/settlement-request) for acionada.

- **Change Margin:** Defina a margem percentual para um pagamento ser modificado para um valor maior do que o inicialmente autorizado. Se a compra foi fechada e autorizada por BRL 100,00, por exemplo, mas houver uma [mudança no pedido](https://help.vtex.com/pt/tutorial/change-mudanca-em-pedidos--3d1XLIgPQcwaKGyMiWaYog?&utm_source=autocomplete) para um valor maior antes da captura, este conector permite que o aumento seja de até 20% do inicialmente autorizado.

<ul>
6. Clique em <b>Salvar</b>.
  </ul>

### Configurar condições de pagamento

Depois de concluir todas as etapas, a FirstData estará configurada e pronta para ser utilizada em sua loja.

Para associá-la a uma condição de pagamento, leia o artigo [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).
