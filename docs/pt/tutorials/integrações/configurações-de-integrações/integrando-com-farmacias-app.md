---
title: 'Integrar com Farmácias App'
id: tutorials_6271
status: PUBLISHED
createdAt: 2017-04-27T21:49:03.087Z
updatedAt: 2023-03-29T16:32:52.066Z
publishedAt: 2023-03-29T16:32:52.066Z
firstPublishedAt: 2017-04-27T23:11:18.364Z
contentType: tutorial
productTeam: Channels
author: authors_24
slugEN: integrating-with-farmacias-app
legacySlug: integrando-com-farmacias-app
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

O Farmácias App é um marketplace mobile certificado pela VTEX. Está disponível para iOS e Android.

## Permissão de acesso

Para iniciar a integração, é preciso primeiro dar permissão à chave de integração do Farmácias App. Ela permite que o marketplace receba e envie as atualizações necessárias para o fluxo de vendas &#8211; relativas, por exemplo, a recebimento de catálogo, cálculo de frete e envio de pedidos.

Para configurar a chave, siga os passos abaixo:

1. Acesse o menu **Configuração da Conta**;
2. Clique na aba **Usuários**;
3. Clique no botão **Novo usuário**;
4. Preencha os campos **Email** e **Nome completo** da seguinte forma:

**Email**: `vtexappkey-farmaciasapp-ISBSVR`
**Nome**: `farmaciasapp`

_**Atenção**: é preciso preencher estes campos exatamente como descrito acima._

O **perfil de acesso** será: IntegrationProfile-Fulfillment_Oms, IntegrationProfile-Fulfillment_Gateway

Por fim, clique no botão **Salvar**.

Depois, será necessário:

1. [Criar coleção](/pt/tutorial/criando-colecao-de-produtos/) (apenas se sua loja ainda não possuir uma coleção que deseja atribuir ao marketplace);
2. Criar grupo por departamento, categoria ou subcategoria;
3. Criar grupo por marca;
4. [Configurar a política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/).

## Configurando afiliado

Por fim, deve ser realizado o cadastro do afiliado, que serve como identificação única do marketplace em sua loja. Para fazer isso, siga os passos abaixo:

1. Acesse o menu **Configurações da loja > Pedidos**;
2. Clique no botão **Conigurações**;![Farmacias2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integra%C3%A7%C3%B5es/configura%C3%A7%C3%B5es-de-integra%C3%A7%C3%B5es/integrando-com-farmacias-app_1.png)
3. Clique na aba **Afiliados**;
4. Clique no botão **Novo afiliado**;
5. Preencha os campos da seguinte forma:

**Nome**: Farmácias APP;
**ID**: FPP;
**Política comercial**: _preencha com o ID da política comercial_.
**E-mail de follow up**: _e-mail da pessoa responsável pela integração_;
**Endpoint de Search**: https://integrador.farmaciasapp.com.br/Vtex/api/notification

![Farmacias3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integra%C3%A7%C3%B5es/configura%C3%A7%C3%B5es-de-integra%C3%A7%C3%B5es/integrando-com-farmacias-app_2.png)

_Quando os pagamentos forem processados por meio do Farmácias App, a opção **Usar meu meio de pagamento** deve estar desmarcada. Marque essa opção apenas para pagamentos processados em ambientes diferentes, como pagamentos processados na plataforma VTEX._

Após realizar estes passos, você deve enviar os seguintes dados ao Farmácias App:

- Store Id Sales;
- Channel;
- Afiliate Id;
- E-mail do responsável pela integração;
- Telefone do responsável pela integração.

Para pagamentos processados em ambientes externos ao Farmácias App, também é necessário enviar os seguintes dados:

- Banco;
- Código do banco;
- Agência da conta do recebedor;
- Dígito da agência;
- Número da conta bancária do recebedor;
- Dígito verificador da conta do recebedor;
- CPF ou CNPJ do recebedor.

Após isso o Farmácias App fará as configurações e os testes necessários, publicando alguns produtos em seu catálogo para efetuar pedidos e testar o fluxo de ponta a ponta.
