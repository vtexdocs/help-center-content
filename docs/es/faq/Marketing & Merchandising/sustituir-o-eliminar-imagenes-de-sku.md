---
title: 'Sustituir o eliminar imágenes de SKU'
id: 6ruEgCkljiW2cAC0Mok2Ig
status: ARCHIVED
createdAt: 2017-08-03T21:21:03.374Z
updatedAt: 2020-03-09T17:09:48.093Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 
slug: sustituir-o-eliminar-imagenes-de-sku
locale: es
legacySlug: sustituir-o-eliminar-imagenes-de-sku
---

En ocasiones, surge la necesidad de eliminar o sustituir imágenes de un grupo de SKUs masivamente.

- Eliminar las imágenes de la tienda y subir las nuevas antes del golive. 
- Sustituir las imágenes online por nuevas de mejor calidad o resolución.
- Quitar imágenes duplicadas, subidas a los SKUs por error.
- etc.

Sigue un proceso automático mediante el cual es posible realizar estas acciones.

## Eliminar imágenes masivamente

## Subir imágenes masivamente

Gostaria de saber se há alguma documentação para implementar essa eliminação em massa da plataforma por API ou de alguma forma automatizada.

segue o script. Vou postar aqui, que caso mais alguém queira utilizar está disponível.

Obs.: Tomem muito cuidado ao utilizar o script, pois qualquer ação é irreversível. Nem eu e nem a VTEX nos responsabilizamos pelo uso incorreto desta ferramenta. Só utilize se souber o que está fazendo.

Vou fazer um passo a passo para facilitar:
​
1 - Realize a configuração de um novo projeto seguindo o descrito neste link: http://help.vtex.com/pt/tutorial/testando-webservice-com-soapui
​
2 - Clique com o botão direito em cima do projeto e clique em "New TestSuite"
​
3 - Clique com o botão direito em cima do TestSuite criado e clique em "New TestCase"
​
4 - Na janela que irá abrir clique em "Setup Script". No campo que abrir cole o código abaixo e lembre-se de alterar o caminho para o arquivo csv que irá conter o ID dos SKU's. Obs.: Procure não utilizar caracteres especiais.

//Code by Mateus Saggin
//Lembre-se de alterar o caminho para o arquivo
//Usuários utilizando mac o caminho será semelhante ao que consta abaixo
//Para usuários windows o caminho deve ser algo semelhante a:
// "C:/Users/SeuUser/Documentos/VTEX/DeletarImagensSOAP/idImagens.csv"
context.fileReader = new BufferedReader(new FileReader("/Users/seuUser/Arquivos/VTEX/DeletarImagensSOAP/idImagens.csv"))
firstLine = context.fileReader.readLine()
String id = firstLine
testCase.setPropertyValue("ID",id)

5 - Clique no ícone que contém SOAP escrito (Create a new SOAP Request TestStep) e cole código abaixo:

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
<soapenv:Header/>
<soapenv:Body>
<tem:StockKeepingUnitImageRemove>
<!--Optional:-->
<tem:stockKeepingUnitId>${#TestCase#ID}</tem:stockKeepingUnitId>
</tem:StockKeepingUnitImageRemove>
</soapenv:Body>
</soapenv:Envelope>

6 - Por último clique no ícone da estrela azul (Create a new Groovy Script TestStep) e cole o código abaixo:

//Code by Mateus Saggin
nextLine = context.fileReader.readLine()
if(nextLine != null){
	String id = nextLine
	curTC = testRunner.testCase
	curTC.setPropertyValue("ID",id)
 	testRunner.gotoStep(0)
}

Com todos esses passos prontos e com o ​CSV preenchido com as ID's é só clicar duas vezes em cima do TestCase criado e clicar no botão de Play.
​
O SOAP iniciará o processo e realizará a exclusão das imagens para todas as ID's configuradas no CSV.
 
Em anexo coloco o arquivo CSV de modelo.
