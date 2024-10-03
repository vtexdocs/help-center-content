---
title: 'Importar dados de clientes'
id: 2zWYVOyj0sISYQmeUwCsI0
status: PUBLISHED
createdAt: 2017-06-22T20:55:49.745Z
updatedAt: 2023-10-09T20:34:05.165Z
publishedAt: 2023-10-09T20:34:05.165Z
firstPublishedAt: 2017-06-27T14:40:29.106Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slugEN: import-customer-data-brazil
locale: pt
legacySlug: importando-dados-de-clientes-brasil
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

A importação de dados de clientes deve ser feita no Master Data. Para o envio de dados, use o artigo [Importando dados no Master Data](/pt/tutorial/importando-dados-no-master-data).

>❗ Este artigo se refere aos campos do Master Data v1 especificamente para as lojas do **Brasil**.
>
> Você também pode conferir o guia sobre como [importar dados de clientes programaticamente com a API do Master Data v2](https://developers.vtex.com/docs/guides/import-customer-data).

O checkout trabalha com os dados das entidades CL (cliente) e AD (endereço).

Mas é importante notar que, para que o checkout já traga os dados do cliente no carrinho com base no e-mail, chave primária do Master Data, é fundamental garantir que todos os dados a seguir estejam corretamente cadastrados na plataforma.

Dito isso, as tabelas a seguir representam os dados e os formatos necessários para a importação.

### Cliente

| Nome do campo | Descrição | Formato |
|---------------|-----------|---------|
| firstName | Nome do cliente | Texto |
| lastName | Sobrenome | Texto |
| email | Email do cliente | Email |
| documentType | Tipo do documento | Para clientes do Brasil, deve ser "cpf". |
| document | Documento (CPF, no caso do Brasil) | 11 dígitos, sem máscara. |
| homePhone | Telefone | No formato "+5511999999999", sendo +55 para o país e sucedido pelo telefone com DDD. |

O campo `id` é gerado pelo sistema logo após a importação, e será usado como `userId` na importação do endereço.

O campo `userId` dos clientes deve ser deixado em branco, e não será usado neste momento. Será gerado pelo sistema após a primeira compra do cliente.

Se o cliente for **pessoa jurídica**, `document` e `documentType` deixam de ser obrigatórios e os seguintes campos adicionais devem ser preenchidos:

| Nome do campo | Descrição | Formato |
|---------------|-----------|---------|
| isCorporate | Define se o cliente é pessoa jurídica | Deve ser "true". |
| corporateName | Razão social | Texto |
| tradeName | Nome fantasia | Texto |
| stateRegistration | Inscrição estadual | Deve ser "Isento" ou texto, valor alfanumérico. |
| corporateDocument | CNPJ | 14 dígitos, sem máscara. |

### Endereço

É obrigatório que os clientes possuam pelo menos um endereço.

| Nome do campo | Descrição | Formato |
|---------------|-----------|---------|
| id | ID do endereço | Em branco |
| userId | ID do cliente | Campo `id`, gerado após importação de clientes |
| addressName | Nome do endereço | Texto/alfanumérico |
| addressType | Tipo do endereço | Deve ser "residential" ou "commercial" |
| country | Código do país | "BRA" para Brasil |
| state | Estado (UF) | Duas letras |
| city | Cidade | Texto |
| neighborhood | Bairro | texto |
| postalCode | CEP | 8 ou 9 dígitos, com hífen |
| street | Endereço | Texto |
| number | Número | alfanumérico |
| complement | Complemento e referência | Texto |
| reference | Campo deprecado | Em branco |
| receiverName | Destinatário | Texto |

---

Caso os dados (cliente ou endereço) não estejam consistentes, incluindo CPF/CNPJ válidos, o checkout não irá completar os dados do cliente e ele fará a compra como um novo usuário.
