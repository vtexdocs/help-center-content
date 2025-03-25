---
title: 'Criando contas no Customer Credit'
id: 7FHLd0cmxqqGeEUuc8uioU
status: PUBLISHED
createdAt: 2018-11-06T20:24:28.924Z
updatedAt: 2024-11-04T18:08:56.036Z
publishedAt: 2024-11-04T18:08:56.036Z
firstPublishedAt: 2018-11-06T21:15:02.053Z
contentType: trackArticle
productTeam: Financial
slugEN: creating-accounts
locale: pt
trackId: 1hCRg21lXYy2seOKgqQ2CC
trackSlugPT: customer-credit-como-comecar
---

O próximo passo é criar contas para os clientes que você deseja oferecer crédito em sua loja. As contas podem ser criadas de três diferentes formas:

- [Conta individual (Admin VTEX)](#criar-contas-individualmente)
- [Múltiplas contas em massa (Admin VTEX)](#criar-multiplas-contas-importacao-em-massa)
- [Conta individual (Customer Credit API)](#criar-conta-via-api)

>ℹ️ As contas criadas na app do Customer Credit não tem relação ou compartilham dados com a base de clientes cadastrada nas [entidades do Master Data](https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#entidades-de-dados) da loja. Para que um cliente possa utilizar o Customer Credit como meio de pagamento, a sua conta deve ser cadastrada pelo lojista na app mesmo que o cliente já possua uma conta na loja.

## Criar contas individualmente

Para cadastrar um novo cliente no Customer Credit, siga os passos abaixo:

1. No Admin VTEX, acesse __Aplicativos > Customer Credit > Contas__, ou digite __Contas__ na barra de busca no topo da página.
2. Na tela de __Contas__, clique no botão `NOVO`.
3. Em __Identificação__, selecione o __Tipo de documento__ e preencha os campos __Documento__ e __Email__ com as informações do cliente que deseja cadastrar.
4. Em __Crédito__, insira em os valores de __Limite de crédito (BRL)__ e da __Tolerância__ que deseja disponibilizar ao cliente.
5. Clique em `Confirmar`.

>⚠️ O preenchimento do campo **Email** é obrigatório, pois a plataforma VTEX utiliza essa informação apra realizar a autenticação de acesso do cliente aos limites de crédito da sua conta. Para mais informações sobre proteção de dados, acesse [Segurança do SmartCheckout](https://help.vtex.com/pt/tutorial/seguranca-do-smartcheckout--3SrJuuhrqwePUg1rp1exfB).

A partir deste momento, a nova conta criada será exibida na tela de __Contas__.

![CC_criar_conta_1_PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/customer-credit-getting-started/criando-contas_1.JPG)

## Criar múltiplas contas (importação em massa)

Para criar múltiplas contas ao mesmo tempo (em massa) no Customer Credit, você pode utilizar uma planilha modelo no formato CSV (Comma Separated Value) contendo as informações de cada cliente. Siga os passos abaixo para criar múltiplas contas:

1. No Admin VTEX, acesse __Aplicativos > Customer Credit > Contas__, ou digite __Contas__ na barra de busca no topo da página.
2. Na tela de __Contas__, clique no botão `IMPORTAR`.
3. Em __Deseja criar ou atualizar contas?__, selecione a opção __Criar__ e clique em `CONTINUAR`.
4. Clique em `BAIXAR MODELO`. Um modelo de planilha no formato .csv será enviado para o seu dispositivo (computador, celular ou tablet).
5. Preencha em cada linha:
<br>
<ul>
  <li>Colunas <b>Email</b>, <b>Document</b> e <b>Document Type</b>:  informações dos clientes.</li>
  <li>Colunas <b>Credit limit</b> e <b>Tolerance rate</b>: valores disponibilizados para cada cliente. O <b>Tolerance rate</b> deve ser inserido em formato decimal, por exemplo, uma tolerância de 5% deve ser indicada como 0.05.</li>
</ul>

![CC_criar_conta_2_ALL](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/customer-credit-getting-started/criando-contas_2.JPG)

<blockquote><ui>6. Salve a planilha .csv.</ui>

<blockquote><ui>7. Retorne à tela de <b>Contas</b> e clique novamente no botão <b>IMPORTAR</b>.</ui>

<blockquote><ui>8. Em <b>Deseja criar ou atualizar contas?</b>, selecione a opção <b>Atualizar</b> e clique em <b>CONTINUAR</b>.</ui>

<blockquote><ui>9. Insira ou selecione a planilha .csv no espaço <b>Solte aqui seu CSV ou escolha ou arquivo</b>.</ui>

<blockquote><ui>10. Clique no botão <b>IMPORTAR ARQUIVO</b>.</ui>

A partir deste momento, as novas contas criadas via a planilha .csv estarão disponíveis na tela de __Contas__.

>⚠️ Também é possível rastrear processos anteriores de criação de múltiplas contas, identificando se as contas foram criadas de forma correta. Para verificar estas informações, clique em **Histórico de Importação** na tela de **Contas**.  

### Atualizar múltiplas contas (importação em massa)

Para atualizar informações, tais como, documento, tipo de documento, email, limite de crédito e tolerância, em múltiplas contas ao mesmo tempo,você pode também pode utilizar a funcionalidade de importação em massa.  

O procedimento é semelhante ao de [criar múltiplas contas](#criar-multiplas-contas-importacao-em-massa). Entretanto, você já deve ter a planilha .csv baixada e preenchida em seu dispositivo (computador, celular ou tablet). Siga os passos abaixo para atualizar as informações dos clientes:  

1. No Admin VTEX, acesse __Aplicativos > Customer Credit > Contas__, ou digite __Contas__ na barra de busca no topo da página.
2. Na tela de __Contas__, clique no botão `IMPORTAR`.
3. Em __Deseja criar ou atualizar contas?__, selecione a opção __Atualizar__ e clique em `CONTINUAR`.
4. Insira ou selecione a planilha .csv no espaço __Solte aqui seu CSV ou escolha ou arquivo__.
5. Clique no botão __IMPORTAR ARQUIVO__.
6. Após a planilha ser carregada no Admin, verifique na tela de __Contas__ se as informações foram atualizadas corretamente nas contas de cada cliente.   

## Criar conta via API

Você também pode criar contas para seus clientes no Customer Credit por meio do endpoint [POST - Open an account](https://developers.vtex.com/docs/api-reference/customer-credit-api#post-/api/creditcontrol/accounts).

Para mais informações sobre os endpoints da API de Customer Credit , acesse [Customer Credit API - Overview](https://developers.vtex.com/docs/api-reference/customer-credit-api#overview).  
