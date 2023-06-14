---
title: 'Integrar com a Amazon'
id: 2w2vFtveNWcycooEGks2me
status: DRAFT
createdAt: 2017-10-24T19:22:17.213Z
updatedAt: 2020-03-06T13:56:49.869Z
publishedAt: 
firstPublishedAt: 2017-10-24T20:45:46.537Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrar-com-a-amazon
legacySlug: integrar-com-a-amazon
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

<div class="alert alert-warning"> 
Esta integração é válida apenas para as categorias <b>Atividades ao Ar Livre<b>, <b>Bagagens</b> <b>Computadores</b>, <b>Câmera e Foto</b>, <b>Casa e Jardim</b>, <b>Computadores</b>, <b>Eletrônicos</b>, <b>Esportes</b>, <b>Jóias</b>, <b>Livros</b>, <b>Materiais de Escritório</b>, <b>Ferragens</b>, <b>Games</b>, <b>Sapatos</b> e <b>Roupas</b>.
</div>

<div class="alert alert-warning">
Esta integração está disponível para Brasil, México, Estados Unidos, Canadá e Europa.
</div>

## Autorizar a VTEX no painel da Amazon

Para realizar a integração com o Marketplace da Amazon, é necessário que o lojista dê, através da sua conta Amazon Seller Central pelo mercado dos Estados Unidos (_www.amazon.com_), a autorização para VTEX. 

<div class="alert alert-warning">
No painel da Amazon, sempre verifique se você ainda está conectado ao mercado dos Estados Unidos (www.amazon.com). Caso não esteja, você receberá uma mensagem de erro durante o processo de autorização e será necessária a troca do mercado para EUA(www.amazon.com) novamente.
</div>

Quando na etapa de cadastro de developer da Amazon, preencha os campos da seguinte forma:
- Developer’s Name: VTEX  
- Developer Account Number: 2625-4263-7910  

__Durante todo o processo de autorização na Amazon, tenha sempre em mãos as credenciais e os identificadores fornecidos.__ O Seller ID e o MWS Auth Token, por exemplo, são imprescindíveis para configurar a integração dentro da plataforma da VTEX posteriormente.

## Pré-configurações na VTEX

Antes de configurar a integração, você deve verificar os seguintes pontos:

  - __Categoria Global:__ caso seus produtos não possuam categoria global cadastrada, é possível configurar a categoria global dentro das configurações de categoria, que os produtos associados irão herdar este valor. Para saber como configurar a categoria global, [acesse nosso artigo](/pt/tutorial/configurando-a-categoria-global).

  - __EAN:__ como o catálogo da Amazon é único, ela exige que os produtos enviados tenham o EAN para que eles possam mesclar os produtos de todos os sellers. A isenção do EAN na integração dos seus produtos deve ser configurada tanto na Amazon quanto na VTEX. Caso a Amazon tenha concedido a isenção de EANs para a sua loja, [abra um ticket](https://support.vtex.com/hc/pt-br) com o assunto "[Amazon] Isenção de EAN" para solicitar o procedimento do lado da VTEX.

 - __Tempo de Custo:__ na Amazon existe o campo `fulfillment latency`, que é __usado para configurar o tempo de preparo da entrega de determinado produto__. Para preenche-lo massivamente via integração, é necessário preencher o campo [Tempo de Custo](http://help.vtex.com/pt/tutorial/como-cadastrar-doca) no cadastro da doca associada à política comercial usada para a Amazon. Caso este campo não esteja preenchido, a Amazon usará o valor *default* deles (2 dias).
  
<div class="alert alert-warning">
OBS: é importante preencher este campo pois, se a sua loja não estiver perfomando conforme o tempo de preparo configurado, ou seja, atrasando na entrega, a sua conta pode ser bloqueada.
</div>

## Configuração da integração
  
Acesse o admin da sua conta VTEX e entre na seção de __Integrações__. Em __Configurações__, você encontrará uma caixa com o logo da Amazon. Clique em __Integrar__ e preencha os campos listados: 

1. __Afiliate Id__: Preencha o campo com três letras para identificar o afiliado. Vale destacar que neste campo apenas __consoantes__ são aceitas. Recomendamos preencher com `MZN`.
2. __Afiliate Email__: e-mail para notificação de pedidos não integrados.
3. __Sale Channel__: Id da política comercial utilizada para a integração da loja.
4. __Amazon Seller Id__: Id da sua loja na Amazon, obtido através da liberação do token da VTEX na sua conta da Amazon.
5. __Amazon Auth Token__: Token obtido na etapa de autorização da chave da VTEX na sua conta da Amazon. 
6. __Order Allowance Rate__: Taxa de aceitação da divergência de valor no pedido integrado.
7. __Name for the type of freight__: Nome do tipo de entrega cadastrado no painel da Amazon. Este nome do tipo de entrega está localizado na tela __Configurações de envio__ na aba __Modelos de Envio__, __embaixo__ da caixa _Modelo padrão da Amazon_.
8. __Don't send the variations of skus - Only for office category__: Caso sua loja seja do setor de __Office__,  recomendamos selecionar a opção `ON`. Atualmente, não é possível enviar os SKUs consolidados para a Amazon. __Esta flag deve ser utilizada somente para lojas do setor *Office*__  
9. __Not send price to Amazon:__ a Amazon dá a possibilidade de usar o próprio sistema deles para parametrização de preços nos produtos. __Para utilizar este serviço, marque a opção `ON` para que a integração não envie os preços da VTEX.__ Pois, se os preços forem enviados via integração, eles irão sobrescrever os do sistema da Amazon.
10. Clique em __Salvar configuração__.

## Envio dos atributos dos SKUs para a Amazon

Caso sua loja tenha que enviar atributos obrigatórios para a Amazon, acesse nosso artigo [Enviar atributos dos SKUs para a Amazon](/pt/tutorial/enviar-atributos-dos-skus-para-a-amazon) para completar sua integração.

Pronto! Sua integração com a Amazon agora está configurada!
