---
title: 'SmartCheckout - Preenchimento automático de dados do cliente'
id: 2Nuu3xAFzdhIzJIldAdtan
status: PUBLISHED
createdAt: 2022-05-26T11:11:00.643Z
updatedAt: 2025-02-18T14:57:12.649Z
publishedAt: 2025-02-18T14:57:12.649Z
firstPublishedAt: 2022-06-01T16:54:34.605Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: smartcheckout-customer-information-automatic-fill-in
legacySlug: smartcheckout-preenchimento-automatico-de-dados-do-cliente
locale: pt
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

O SmartCheckout permite que os dados do cliente possam ser preenchidos no Checkout de forma automática, sendo necessário apenas informar o seu email cadastrado na loja. Esta função reduz o tempo de compra e elimina a necessidade de inserir dados novamente a cada compra realizada na mesma loja.

> ℹ️ Para que o SmartCheckout reutilize os dados do cliente no Checkout, é necessário que o mesmo já tenha realizado uma compra anteriormente ou criado um perfil cadastrado na loja.

## Dados de cadastro do cliente

Os dados do cliente utilizados no Checkout têm origem nas informações cadastradas no [Master Data](/pt/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629#). A lista abaixo apresenta uma relação padrão destes dados. Entrentanto, podem ocorrer variações de um país para outro:

- Cliente (CL)
   - email
   - firstName
   - lastName
   - homePhone
   - document
   - documentType

- Endereço (AD)
   - addressName
   - addressType
   - country
   - state
   - postalCode or geoCoordinates
   - street
   - receiverName

> ⚠️ Caso um ou mais dados não estiverem preenchidos corretamente no Master Data, o SmartCheckout não irá trazer nenhuma informação do cliente de forma automática na tela do Checkout. Nesta situação, será necessário que o cliente preencha todos os dados de identificação manualmente em cada compra a ser realizada.

## Procedimento de compra com o SmartCheckout

O fluxo de preenchimento automático de dados do cliente no Checkout ocorre da seguinte forma:

1. O cliente acessa a loja VTEX, escolhe os produtos que deseja comprar e os adiciona no carrinho.
2. Ao selecionar `Fechar pedido` em **Meu Carrinho**, é solicitado ao cliente que informe o seu email.
3. O Checkout verifica se o email inserido pertence a algum cliente cadastrado na loja. 
4. Caso seja localizado o email, o checkout preenche automaticamente os campos de identificação do cliente com os dados recebidos do Master Data.

> ⚠️ Para a proteção dos dados do cliente, as informações de identificação serão exibidas apenas parcialmente na tela do Checkout (parte dos dados são mascarados conforme padrão [PCI-DSS](/pt/tutorial/what-is-the-pci-ssc--4jo3Vkox3amSO2w4qIWa0E) de segurança em pagamentos). Este procedimento permite que o cliente possa identificar se os seus dados atuais estão corretos e também selecionar diferentes endereços cadastrados para a entrega, caso necessário.
<ul>
5. O cliente seleciona os meios de entrega e pagamento, e conclui o pedido de compra.
</ul>
> ⚠️ Caso o cartão de crédito ou débito seja selecionado como meio de pagamento, os seguintes critérios adicionais de segurança são adotados: <ul> <li>Solicitação do CVV (Card Verification Value) para a validação final e conclusão do pedido de compra.</li> <li>Impossibilidade de realizar compras com cartões utilizando um endereço diferente daquele cadastrado no perfil do cliente.</li> </ul>

Qualquer tipo de alteração nos dados cadastrados, como endereço e telefone, será permitida somente após o cliente realizar a sua [autenticação na loja](/pt/tutorial/como-meu-cliente-pode-fazer-login-na-minha-loja--3FCNpwbpZe0U4auiI4CC0C#). 

Para maiores informações sobre proteção de dados, acesse [Segurança do SmartCheckout](/en/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB#).

### Saiba mais

 * [Importar dados de clientes](/pt/tutorial/importando-dados-de-clientes--2zWYVOyj0sISYQmeUwCsI0)
 * [`orderForm` fields](https://developers.vtex.com/docs/guides/orderform-fields#clientprofiledata)
