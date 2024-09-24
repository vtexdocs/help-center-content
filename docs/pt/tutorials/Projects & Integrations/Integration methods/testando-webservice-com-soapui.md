---
title: 'Testar Web Service com SoapUI'
id: tutorials_750
status: ARCHIVED
createdAt: 2017-04-27T21:58:40.425Z
updatedAt: 2020-06-04T01:32:10.116Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.147Z
contentType: tutorial
productTeam: Others
author: authors_84
slugEN: testing-webservice-using-soapui
locale: pt
legacySlug: testando-webservice-com-soapui
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

>❗ Atenção: somente os métodos SOAP pertinentes ao **catálogo** são válidos.
>
> **Todos os outros métodos do Web Service serão descontinuados no dia 28/02/2017.**
>
> Use as APIs REST equivalentes, disponíveis em nosso [Developer Docs](//help.vtex.com/developer-docs/).

>⚠️ As configurações documentadas neste artigo são realizadas em um ambiente fora da VTEX, portanto podem ser descontinuadas sem prévio aviso.

SoapUI é uma ferramenta que pode ser utilizada para simular conexão e execução de métodos de um determinado webservice, sem ter a necessidade de fazer isso apenas via programação.

**Nota:** É recomendado o uso da versão 3.6.1, que não tem tantos requisitos de segurança (requisitos estes que fazem com que você tenha que digitar várias vezes sua senha de acesso).

O passo a passo de utilização é o seguinte:
1. Já com a ferramenta instalada, acesse o menu **File** -> **New SoapUI Project**;
2.  Na janela que será aberta, adicione o endereço referente ao seu Web Service:

`http://webservice-{NOMEDALOJA}.vtexcommerce.com.br/Service.svc?singleWsdl`

Substitua o valor {NOMEDALOJA} pelo nome de sua loja.

![](//images.contentful.com/alneenqid6w5/WMZnCJCLg2WGSIesMOMKu/efed51a5c0e151d1ac1f7902600e522a/1.png)

Efetue o login com os dados do Web Service desejado. Após efetuar o login, você visualizará todos os métodos existentes no [manual do Web Service](/pt/tutorial/manual-das-classes-e-metodos-usados-no-webservice/).

1. Localize o método desejado. Ex.: o método ImageInsertUpdate, que é o método utilizado para adicionar imagens;
2. Preencha os campos referentes ao método (estes campos são do tipo ImageDTO, referências estão no manual);
3. Localize o botão **Auth** e repita a autenticação antes de executar o método;
4. Execute o método.

![](//images.contentful.com/alneenqid6w5/3TBC8YgtvyQ6sMQAyQACOg/5e14a72feaa3bf0d00a8b245d56788d1/2.png)

>❗ Atenção: somente os métodos SOAP pertinentes ao **catálogo** são válidos.
>
> **Todos os outros métodos estão descontinuados.**
>
> Use as APIs REST equivalentes, disponíveis em nosso [Developer Docs](//help.vtex.com/developer-docs/).
