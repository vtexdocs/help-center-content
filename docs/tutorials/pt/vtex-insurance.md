---
title: 'VTEX Insurance'
id: 2aF3SDIj5t2qGe3bWKCjLD
status: DRAFT
createdAt: 2023-05-23T20:15:25.639Z
updatedAt: 2024-01-11T20:01:57.317Z
publishedAt: 
firstPublishedAt: 2023-05-26T17:46:59.436Z
contentType: tutorial
productTeam: B2B
author: 5l3eEiSz8MpcppCxcnijGz
slug: vtex-insurance
locale: pt
legacySlug: vtex-insurance
subcategory: 
---

O **VTEX Insurance** é um aplicativo que possibilita o lojista vincular os produtos da loja com ofertas de seguro fornecidas pela seguradora parceira [Assurant](https://www.assurant.com.br/). Essa funcionalidade permite que sua loja ofereça seguros personalizados ao seu cliente, oferecendo proteção financeira em caso de falhas ou defeitos do produto ou serviço adquirido. Com uma garantia estendida, é possível ofertar uma camada a mais de segurança ao consumidor. 

Assim que o pagamento for aprovado, seu cliente receberá do nosso suporte um email com o documento do seguro comprado. Esse documento é o comprovante que o produto comprado está assegurado e contém todas as informações de descrição do seguro adquirido, e também as instruções para acionar a seguradora.

Confira na tabela abaixo os tipos de seguro oferecidos pelo VTEX Insurance.

Código   | Tipo de seguro
--------- | ------
EW | Garantia Estendida
TH | Roubo e Furto Qualifiado
RQ | Roubo e Dano Acidental
QA | Dano Acidental

Para configurar o VTEX Insurance em sua loja, será necessário:

1. <a href="#pre-requisito-para-o-vtex-insurance">Instalar o aplicativo do VTEX Insurance.</a>
2. <a href="#preparar-o-catalogo">Preparar o catálogo.</a>
3. <a href="#configurar-insurance">Configurar Insurance.</a>

## Pré-requisito para o VTEX Insurance
Para iniciar a configuração do VTEX Insurance, siga os passos abaixo:

1. Entre em contato com o [nosso suporte](https://support.vtex.com/hc/pt-br/requests) para realizar a instalação do Insurance.
2. No Admin VTEX, acesse **Gerenciamento de conta> Usuários** ou digite **Usuários** na barra de busca no topo da página.
3. Clique em `Novo`. 
4. Insira o email da loja responsável pela instalação do VTEX Insurance no campo **Email**.
5. Caso o email inserido não seja identificado, clique em  ́Adicionar Perfis´. Nessa página, será necessário selecionar um [perfil](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete) já cadastrado como **Owner** ou **Desenvolvedor**.
6. Clique em `Salvar`. 

O email cadastrado receberá do nosso suporte um email com o acesso ao aplicativo do VTEX Insurance.
## Preparar o catálogo
Após a instalação do VTEX Insurance, é necessário realizar a preparação do Catálogo para incluir os planos de seguro junto com os seus produtos. Para realizar essas configurações, siga os passos abaixo:

1. Cadastre a [Assurant como um seller da sua loja](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392?&utm_source=autocomplete).
2. [Crie uma coleção](https://help.vtex.com/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye)para agrupar um conjunto de produtos para você vincular os seguros. É necessário criar uma coleção específica para cada tipo de seguro, pois essa coleção será usada para definir em qual apólice de seguro os produtos irão se encaixar.
3. [Crie um grupo de especificações de categoria](https://help.vtex.com/pt/tutorial/criando-grupo-de-especificacoes-em-uma-categoria--tutorials_246) para incluir as garantias do fabricante no seu catálogo, como Garantia, por exemplo.
4. [Crie uma especificação de produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#criar-um-campo-de-produto) com as informações do seguro que você quer oferecer, como _Garantia Estendida_, por exemplo.
5. Após a criação do campo **Garantia do Fabricante**, defina o período desejado de garantia. No campo **Valor Padrão**, é recomendado o valor 12, representando um período de 12 meses.
6. [Crie uma categoria](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3UYjVS03JbleGPh0Ckpic1?&utm_source=autocomplete) específica para o produto de seguro.
7. [Crie o produto](https://help.vtex.com/pt/tutorial/produtos-e-skus-beta--2ig7TmROlirWirZjFWZ3By?&utm_source=autocomplete#criar-produto) de seguro.
8. [Crie SKUs](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY) de seguro. É recomendada a criação de mais de três SKUs para cada seguro.![Insurance - SKUs](//images.ctfassets.net/alneenqid6w5/7z6EX1cFT3l5wmnlX5LQk1/763ed10aa72e1f453bca4e858b4347e1/image1.png)
9. [Vincule os SKUs criados](https://help.vtex.com/pt/tutorial/vinculos-de-sku--1SmrVgNwjJX17hdqwLa0TX?&utm_source=autocomplete) com o seller da Assurant.
10.  [Vincule o seguro com o produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#preencher-especificacoes-de-produto) desejado.

<div class="alert alert-info" role="alert">
<p> É preciso replicar esse processo em todas as categorias e produtos em que algum seguro será oferecido. </p>
</div>

## Configurar Insurance
Após a preparação do catálogo, sua loja já tem o vínculo do seguro com os produtos. Em **Seguro** > **Configuração**, você realizará as configurações de cadastro do VTEX Insurance. 

Siga os passos abaixo para configurar seu app VTEX Insurance.

### Company Information
1. ![Insurance Configuration](//images.ctfassets.net/alneenqid6w5/27tKnogbpFLSaeGPW4OnkZ/343aefaafe713ae74ab488f87caf4b55/image5.png)
1. Preencha a seção com as seguintes informações:

- **Email**: email da loja.
- **Name**: nome da loja.
- **Phone**: telefone da loja.
- **Mark-Up Value**: margem de lucro a ser obtida. Deve ser preenchida com valor 0 (zero). 
- **Street Name**: rua da loja ou do seu escritório.
- **City**: cidade da loja ou do seu escritório.
- **State**: Estado da loja ou do seu escritório.
- **Postal Code**: CEP da sua loja ou do seu escritório.
- **Country**: país de sua loja ou do seu escritório.

2. Clique em `Submit`.

### Items bound to insurance items
![Items Bound to Source Items](//images.ctfassets.net/alneenqid6w5/6E68A1BaKeUzAgZuzD7KIY/e55e7f2af44167b5885af398cfda7637/image6.png)

1. Selecione os códigos que representam os tipos de seguro desejados para a coleção criada. 
2. Vincule os SKUs criados com os planos de seguro: você deverá incluir o plano de seguro seguido pelo SKU ID.
_Exemplo_: Ao vincular o Tipo de Seguro **Garantia Estendida** (Código **EW**) com o SKU criado para esse mesmo tipo de seguro (ID **357**), o vínculo será representado da seguinte maneira: **EW|357** (sem espaçamento).
Se desejar vincular mais de um plano de seguro, como o de **Roubo e Furto Qualificado** (Código **TH**) com o SKU criado (ID **358**), vínculo **TH|358**, O campo deverá ser preenchido da seguinte maneira: **EW|357, TH|358**.
3. Clique em `Submit`.      

### Warranty field name
![Warranty Field Name](//images.ctfassets.net/alneenqid6w5/215SqlxeJ3yFSZjfGnuJRl/441c24ddc67aa0182fbaad41b6ca4f86/image2.png)

1. Especifique o campo de garantia do fabricante, indicando o nome da garantia utilizada no catálogo.
2. Clique em `Submit`.

### Insurance attachment setup
![Attachement Setup](//images.ctfassets.net/alneenqid6w5/7wpyDOdmdsK2VqOOUbqrfr/976dc38542cfe701e45e8ce0eec936b1/image7.png)

1. [Crie um anexo](https://help.vtex.com/pt/tutorial/cadastrar-um-anexo) para a Assurant com as informações recebidas pelo suporte na contratação do serviço.
2. Em **Seguro > Configuração**, clique em `Add attachment` na seção **Insurance** **attachment setup**.
3. Na página **Anexo**, clique no botão `Alterar` referente ao anexo **assurant.insurance**.
4. Para cada item da tabela, clique em `Alterar` e apague todos os valores do campo **Valores Permitidos**.
5. Clique em `Salvar`.

### Manual pricing setup
![Manual Pricing](//images.ctfassets.net/alneenqid6w5/a1wDUYo5UhkR09keQU6WG/59f5683a077151a789969ff64b7b5aac/image4.png)

1. Ative o manual pricing na sua loja.
2. Clique em `Done, next`.

