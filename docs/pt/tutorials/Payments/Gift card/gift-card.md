---
title: 'Configurar Vale-presente'
id: tutorials_995
status: CHANGED
createdAt: 2017-04-27T21:57:54.816Z
updatedAt: 2024-01-19T19:16:50.349Z
publishedAt: 2024-01-12T12:46:20.978Z
firstPublishedAt: 2017-04-27T23:03:42.674Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: gift-card
locale: pt
legacySlug: gift-card
subcategoryId: 3qWeS7abxCyC0G0GMq42gA
---

O GiftCard ou vale-presente é um dos recursos do módulo de Pagamentos que pode funcionar de duas formas:

- Meio de pagamento para compras; 
- Programa de fidelidade que o lojista pode conectar com o sistema VTEX. 

Para saber mais detalhes sobre a segunda opção de uso, verifique nossa documentação técnica sobre [como integrar com o GiftCard](https://help.vtex.com/pt/tutorial/integrando-com-gift-card?locale=pt "como integrar com o GiftCard").   

## Como criar o Vale-presente pelo Admin

Por padrão VTEX, o vale-presente é considerado como uma forma de pagamento. Esse produto conta com um valor nominal que pode ser utilizado no ato da compra para abater parte do valor de um pedido.

Para criar um novo vale-presente, confira o passo a passo:
<ol>
  <li>No Admin VTEX, acesse <b>Promoções > Vales-presente</b>, ou digite <b>Vales-presente</b> na barra de busca no topo da página.</li> 
  <br>
  <li>Clique no botão azul <b>Criar vale</b>.</li>  
  <br>
>ℹ️ Na tela de criação do vale, o campo **Vale-presente** é automaticamente preenchido pelo sistema VTEX com o código ID do novo vale. Esse é o código a ser inserido pelo cliente na tela do checkout para aplicar o vale-presente no carrinho e reduzir o valor de pagamento do pedido.
<br>
  <li>Preencha os demais campos apresentados conforme as orientações abaixo:</li>
  <br>
<ul>
  <li><b>Valor</b>: valor nominal que será concedido para o uso do vale.</li>
  <li><b>Código da moeda</b>: moeda na qual o vale será criado. As opções disponíveis para seleção são apresentadas de acordo com as políticas comerciais de cada loja.</li>
  <li><b>Data de expiração</b>: trata-se da data de vigência da utilização do vale.</li>
  <li><b>CPF/CNPJ Cliente</b>: dado que identifica e define o vale para um específico cliente.</li>
  <li><b>Coleção</b>: determina a coleção de produtos que define os itens em que o vale poderá ser aplicado.</li>
</ul><br>

>⚠️ **Atenção**: o preenchimento dos campos “Valor” e “Data de expiração” é **obrigatório**. Caso o contrário, o vale-presente não será salvo.

>❗ A funcionalidade de criação de vales-presente limitados por coleções de produtos não está funcionando. Mais informações sobre este problema podem ser encontrados no artigo [Restricting the use of GiftCards to a collection of products does not work](https://help.vtex.com/en/known-issues/restricting-the-use-of-giftcards-to-a-collection-of-products-does-not-work--7kdbZUdscJLo1sGY6bo1jp" target="_blank).

Depois de preencher os campos corretamente, o usuário poderá assinalar até três opções de configuração: 
<ul>
  <li><b>Restrito</b>: somente o cliente referente ao CPF ou CNPJ informado acima poderá utilizar este vale.</li>
  <li><b>Recarregável</b>: enquanto esse vale estiver disponível, seu saldo poderá ser alterado.</li>
  <li><b>Reutilizável</b>: será possível realizar novas compras com este vale até que seu valor seja totalmente utilizado.</li></ul>
<br>
  <li>Por fim, clique no botão <b>Salvar</b>.</li>
<br>
>ℹ️ Não há limite para a criação de vales, porém apenas 8000 vales podem ser exportados por vez.

</ol>

## Como criar um lote de Vales-presente pelo Admin

Para criar mais de um vale-presente ao mesmo tempo (um lote), confira o passo a passo:
<ol>
  <li>No Admin VTEX, acesse <b>Promoções > Vales-presente</b>, ou digite <b>Vales-presente</b> na barra de busca no topo da página.</li> 
  <br>
  <li>Clique no botão azul <b>Criar vales em massa</b>.</li>  
  <br>  
  <li>Preencha os campos apresentados conforme as orientações abaixo:</li>  
<br>
<ul>
  <li><b>Quantidade de vales-presente</b>: este é o número de vales que você deseja criar em um mesmo lote. Um número máximo de 500 (quinhentos) vales podem ser criados por lote.</li>
  <li><b>Valor</b>: valor nominal que será concedido para todos os vales do lote.</li>
  <li><b>Código da moeda</b>: moeda na qual os vales serão criados em lote. As opções disponíveis para seleção são apresentadas de acordo com as políticas comerciais de cada loja.</li>
  <li><b>Data de expiração</b>: trata-se da data de vigência da utilização de todos os vales do lote.</li>
  <li><b>Coleção</b>: determina a coleção de produtos que define os itens em que os vales poderão ser aplicados.</li>
  <br>
  >⚠️ **Atenção**: o preenchimento dos campos “Quantidade de vales-presente”, “Valor” e “Data de Validade” é **obrigatório**. Caso o contrário, os vales-presente não serão salvos.
<br>
  >❗ A funcionalidade de criação de vales-presente limitados por coleções de produtos não está funcionando. Mais informações sobre este problema podem ser encontrados no artigo [Restricting the use of GiftCards to a collection of products does not work](https://help.vtex.com/en/known-issues/restricting-the-use-of-giftcards-to-a-collection-of-products-does-not-work--7kdbZUdscJLo1sGY6bo1jp" target="_blank).
<br>
  <li><b>Recarregável</b>: enquanto estes vales estiverem disponíveis, seus saldos poderão ser alterados.</li>
  <li><b>Reutilizável</b>: será possível realizar novas compras com estes vales até que seus valores sejam totalmente utilizados.</li>
</ul><br>  
  <li>Clique no botão <b>Salvar</b>.</li>
<br>
Uma nova tela irá aparecer confirmando que foram gerados o número de vales-presentes solicitados e os respectivos códigos de identificação serão apresentados.<br> 
<br>
  <li>Por fim, clique no botão <b>Voltar</b>.</li>
<br>
>ℹ️ Não há limite para a criação de vales, porém apenas 8000 vales podem ser exportados por vez.
</ol>

## Como configurar o Vale-presente como meio de pagamento

Após a criação do vale-presente, é necessário configurá-lo como meio de pagamento. Desta forma, seus clientes poderão utilizá-lo no Checkout.

Siga os passos abaixo para configurar o vale-presente:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de pagamento__, clique no botão `+`.
3. Clique no conector __Vale__.
4. No topo da página, crie um __nome__ para essa condição de pagamento.
5. Ative a condição no campo __Status__.
6. Em __Processar com afiliação__, selecione o provedor de giftcard desejado.
7. Clique em `Salvar`.

Além disso, você ainda pode definir condições especiais de pagamento para o vale-presente. Não há limite de condições de podem ser aplicadas a um meio de pagamento e especificamos como configurar cada uma delas [aqui](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456?locale=pt "aqui."). 

Por fim, clique no botão azul Salvar.

## Como gerenciar o vale

Uma vez que o vale for criado, é possível gerenciá-lo de algumas formas pelo Admin. Desse modo, o usuário pode: 

- Adicionar ou remover valor, desde que o vale seja “Recarregável”;
- Visualizar o extrato;
- Conferir em qual compra o vale foi utilizado;
- Cancelar um vale.
