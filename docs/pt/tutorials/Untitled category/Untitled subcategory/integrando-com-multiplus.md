---
title: 'Integrar com Multiplus'
id: 6lR8FzZLB6QimieEWGeq8U
status: ARCHIVED
createdAt: 2017-05-12T17:20:20.887Z
updatedAt: 2019-12-31T15:24:42.846Z
publishedAt: 
firstPublishedAt: 2017-05-12T17:47:29.932Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: wow-to-integrate-with-multiplus
locale: pt
legacySlug: integrando-com-multiplus
subcategoryId: unknown-subcategory
---

### Como configurar a integração

Para configurar a integração da sua loja com a Multiplus, siga os passos abaixo:

1. Acesse o módulo Bridge;
2. Clique na aba **Marketplaces**;
3. Procure o card da Multiplus;
4. Clique no botão **Integrar**.

Uma alternativa para os passos acima é acessar o painel de configuração de marketplaces da sua loja diretamente pelo link a seguir: https://STORENAME.vtexcommercestable.com.br/admin/bridge/#/settings

Substitua STORENAME pelo accountName da sua loja.

![Multiplus1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Untitled category/Untitled subcategory/integrando-com-multiplus_1.png)

Após clicar em **Integrar**, será aberto um formulário com alguns campos a serem preenchidos. Atente-se aos campos obrigatórios: são aqueles em que aparece um “\*” ao lado da caixa de texto.


#### Informações dos campos

- **Integração**: Quando estiver marcado como “Ativar”, os processos de disponibilizar produtos, preço, estoque e serviços estarão funcionais. Caso esteja marcado como “Desativar”, o afiliado será deletado, e os processos serão finalizados;
- **Afiliado**: Deve conter somente 3 letras, e todas elas devem ser consoantes. Serve para a integração ser notificada das alterações de preço, estoque e produto da loja;
- **Política comercial**: Deve ser preenchido com a política configurada em seu admin para a Multiplus, funcionando em conjunto com o ID do Afiliado. Todos os produtos que estiverem nessa política comercial serão disponibilizados para consumo da Multiplus;
- **Código Parceiro que será utilizado na Multiplus**: Este código deve conter de 1 a 30 dígitos, de sua escolha. Para habilitar suas vendas você deverá informar esse código à Multiplus após realizar a configuração no Bridge. Caso você altere esse código, o novo também deverá ser informado à Multiplus, que modo que seja feita a atualização. Caso isso não ocorra, a loja ficará impedida de realizar vendas;
- **E-mails para a criação do Afiliado**: Depois que a configuração for salva, a integração criará o Afiliado na VTEX e inserirá essa informação no cadastro.

![Multiplus2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Untitled category/Untitled subcategory/integrando-com-multiplus_2.png)


Após as informações estarem preenchidas, clique em **Salvar** e espere a mensagem de sucesso aparecer.

Caso, em vez disso, apareça uma mensagem de erro, revise os campos preenchidos e tente novamente. Se o erro persistir, entre em contato com o atendimento da VTEX para informar o problema.

### Como funciona a integração

A Multiplus busca a catalogação do cliente e realiza o fechamento de compra via integração.

#### Catalogação

Após a loja estar habilitada a se integrar com o parceiro Multiplus, a integração irá disponibilizar toda a Árvore de Categoria da loja, além de todos os produtos e preços que estão na política comercial configurada, informando se estão disponíveis para venda.

A Multiplus irá realizar o consumo dos registros em duas etapas:

1. Consumo total aos domingos;
2. Consumo parcial, realizado uma vez por dia.

O consumo parcial serve para consultar as atualizações do dia em relação à disponibilidade de venda do produto (Availability), suas informações de preço e características como nome, descrição, imagem, especificações etc.

##### _Regras_:

- Os SKUs que não tiverem imagens e especificações não serão disponibilizados;
- Os produtos que não tiverem especificações não serão disponibilizados.

#### Fechamento de compra

A integração de pedido ocorre em todo o processo de fechamento de compra do cliente. Caso o cliente finalize o pedido e ocorra um erro no processo, o pedido não será fechado.

Existem quatro passos no fechamento de compra:

- Consultar disponibilidade do produto na VTEX: ocorre mais de uma vez no fechamento de compra. Serve para verificar se o produto pode ser vendido.
- Validar o pedido: serve para verificar se o pedido tem todos os requisitos para fechamento;
- Submeter o pedido na VTEX: o pedido é inserido na loja;
- Confirmar o pedido na VTEX: serve para cancelar ou aprovar o pedido na VTEX.

Por meio da integração, a Multiplus pode rastrear o status do pedido na loja.

Os lojistas que têm integrações nativas com outros Marketplaces estão familiarizados com o erro de divergência de valor que ocorre na descida do pedido à VTEX. A integração com a Multiplus não tem tolerância de valor aceito no fechamento de compra. Com isso, sempre que um produto for vendido na Multiplus por um valor menor que o esperado pela VTEX, o pedido será fechado.

Em relação ao SLA de entrega do pedido, será considerado o SLA mais barato.


#### Críticas e sucessos de integração

As críticas e sucessos de integração poderão ser visualizadas na página principal do módulo **Bridge**:
https://STORENAME.vtexcommercestable.com.br/admin/bridge


#### Artigos relacionados

- Como configurar uma política comercial para Marketplace: http://help.vtex.com/tutorial/configurando-a-politica-comercial-para-marketplace/
- Gerenciar doca: http://help.vtex.com/tutorial/gerenciar-doca/
- Simulação de frete: http://help.vtex.com/tutorial/simulacao-de-frete/
- Gerenciar valores de frete: http://help.vtex.com/tutorial/gerenciar-valores-de-frete/
