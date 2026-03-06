---
title: 'Contratos B2B'
createdAt: '2025-02-12T10:00:00.000Z'
updatedAt: '2025-02-12T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: b2b-contracts
locale: pt
---

Um contrato estabelece as condições comerciais entre um cliente B2B e sua loja. Ele centraliza o gerenciamento de acordos de compra, definindo quais produtos os compradores podem acessar, quais preços se aplicam a eles e quais métodos de pagamento podem usar.

>⚠️ Contratos estão disponíveis apenas para B2B Buyer Portal. É necessária autorização do Commerce Engineer da conta para uso.

Os contratos são armazenados na entidade de dados `CL` do [Master Data v1](https://help.vtex.com/pt/docs/tutorials/master-data). Esta é a mesma entidade que armazena dados de compradores em cenários B2C, mas para contratos B2B, ela segue especificações que habilitam a funcionalidade do B2B Buyer Portal.

## Dados

O contrato contém as informações básicas sobre o comprador B2B, incluindo informações de contato (email e números de telefone) e informações corporativas (nome fantasia e documento corporativo, entre outras). Também contém especificações de condições comerciais.

### Condições comerciais

O contrato define as condições comerciais que se aplicam ao comprador B2B. Você pode configurar:

* **Tabelas de preço:** associe uma ou mais [tabelas de preço](https://help.vtex.com/pt/docs/tracks/tabelas-de-preco-definicao-de-conceito) ao contrato.
* **Coleções de produtos:** selecione quais [coleções de produtos](https://help.vtex.com/pt/docs/tracks/collections-concept-definition) o contrato tem acesso, limitando quais produtos os compradores podem visualizar e comprar.
* **Meios de pagamento:** especifique quais meios de pagamento os compradores podem usar para transações.
* **Cartões de crédito:** defina quais cartões de crédito os compradores têm permissão para usar durante o checkout.

## Gerenciamento de contratos

Operadores de lojas B2B podem criar, editar e excluir contratos por meio da [API de Contratos B2B](https://developers.vtex.com/docs/api-reference/b2b-contracts-api). Cada contrato é identificado por um ID de contrato único que é gerado automaticamente pela VTEX quando o contrato é criado.

> ⚠️ Ao criar ou atualizar contratos, você deve enviar cada campo de acordo com as especificações fornecidas. Caso contrário, o módulo Checkout não conseguirá preencher automaticamente os dados durante o fluxo de compra. Saiba mais sobre [Preenchimento automático de dados do cliente](https://help.vtex.com/pt/tutorial/smartcheckout-preenchimento-automatico-de-dados-do-cliente--2Nuu3xAFzdhIzJIldAdtan#).

> ℹ️ Membros da organização compradora podem gerenciar algumas informações de contrato (como email e número de telefone) por meio da interface [Organization Account]().
