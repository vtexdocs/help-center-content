---
title: 'Configurar boleto registrado Bradesco'
id: bbnXBjvKOkWYiOosmASiA
status: DRAFT
createdAt: 2018-03-20T22:08:43.187Z
updatedAt: 2022-12-23T20:13:39.299Z
publishedAt: 
firstPublishedAt: 2018-03-21T17:27:23.026Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-boleto-registrado-bradesco
locale: pt
legacySlug: configurar-boleto-registrado-bradesco
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Para configurar o boleto registrado do Bradesco, é necessário utilizar o conector do __Bradesco Registrado__ e configurar a condição de pagamento de boleto bancário. Desta forma, os boletos emitidos serão registrados pelo Bradesco.

<div class="alert alert-info">
Atenção: antes de configurar o meio de pagamento no Admin VTEX, é preciso cadastrar a URL de notificação no <a href="https://meiosdepagamentobradesco.com.br/gl/login.jsp"> Internet Banking Bradesco</a>. Para isso, basta inserir o valor https://meiosdepagamentobradesco.com.br/notification no campo em questão.
</div>

Para realizar a configuração, siga os passos abaixo:

## Configurar afiliação de gateway Bradesco Registrado

1. Acesse o módulo __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __Bradesco Registrado__.
5. Sigas as orientações do primeiro campo, __Cadastro Url de Notificações__.
6. Preencha os campos de cadastro com os dados fornecidos pelo Bradesco (Campos *Merchant ID, Login (email), Chave de Segurança*).
7. Em __Beneficiário__, preencha com a razão social da empresa beneficiária.
8. Em __Carteira__, verifique com o Bradesco se você é um *cliente antigo (25)* ou um *cliente novo (26)*.
9. No campo __Nosso numero prefixo__, preencha com um número para identificar os códigos gerados pela VTEX.
10. Em __Agência__, digite com o dado fornecido pelo __Bradesco__.
11. No campo __Dias__, preencha com o número de dias para pagamento até a expiração do boleto.
12. Em __Instruções__, preencha com orientações para o pagamento do boleto.
13. Em __Boleto registrado__, marque *Sim* para exigir a autenticação do comprador.

## Configurar a condição de pagamento Boleto Bancário

1. Acesse o módulo __PCI Gateway__.
2. Clique em __Configurações__.
3. Na aba __Condições de Pagamento__, clique no botão __+__.
4. Na seção __Boleto__, selecione a opção __Boleto Bancário__.
5. Preencha o nome da condição de pagamento e selecione a afiliação de gateway configurada acima (__Bradesco Registrado__).
6. Caso deseje, você pode configurar uma [condição especial](/pt/tutorial/condicoes-especiais/) para essa condição de pagamento.
7. Clique no botão __Salvar__.
