---
title: 'inStore'
id: 6eZyxCGns8hRp4DPzGuF1b
status: ARCHIVED
createdAt: 2021-08-05T14:48:43.638Z
updatedAt: 2021-08-05T14:59:55.412Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: Shopping
slugEN: instore
locale: pt
trackId: 
trackSlugPT: untitled-track
---

Este artigo tem o objetivo de demonstrar as fases da jornada de uso do inStore, depois de instalado e configurado, e apontar suas principais funcionalidades.

Aqui você pode ver o comportamento do aplicativo em cada etapa de interação com o vendedor. Algumas das etapas descritas são opcionais (como a captura de carrinho), mas elas representam o conjunto principal de funcionalidades do inStore.

## 1. Login

O primeiro contato do vendedor da loja física com o inStore acontece no momento de fazer o login no aplicativo.

Aqui devem ser usados o e-mail e a senha criados para o vendedor na etapa de [Basic Setup](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO). Lembre-se que não é permitido usar e-mails que já tenham acesso ao painel administrativo de lojas VTEX.

![31. inStore - Product Overview - 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.jpg)

Ao fazer o login, o vendedor acessa o inStore específico de uma conta VTEX. Embora não seja um cenário comum, um mesmo vendedor pode estar atrelado a mais de uma conta. Se precisar trocar de conta, basta fazer logout e, na tela de login, clicar em __Alterar Loja__.

Lembre-se também que, caso o vendedor ainda não possua credenciais para fazer o login, ele deve entrar em contato com os administradores da conta.

## 2. Identificação do cliente

Ao fazer o login, o vendedor é levado diretamente para a tela de identificação do cliente.

O inStore é um aplicativo que auxilia os vendedores a realizarem vendas na loja física. E ter informações sobre o cliente desde a interação inicial é um recurso valioso, especialmente considerando que o contexto mostrado pelo inStore diz respeito não somente às interações do cliente com aquela loja específica, mas com todos os canais de venda da marca.

O cliente pode ser identificado por um destes métodos:
- E-mail
- CPF (no Brasil)
- Telefone
- QR Code

Você pode [configurar quais métodos de identificação deseja habilitar](https://help.vtex.com/pt/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/3AU7dicoaj3OVaprS6Wh2W), e em que ordem devem aparecer.

No exemplo da imagem abaixo, estão habilitados E-mail e CPF.

![31. inStore - Product Overview - 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.jpg)

Basta inserir um desses dados no campo e clicar no botão __Confirmar__.

Alternativamente, caso você tenha habilitado Usuário Anônimo, é possível avançar sem identificar o cliente. Para isso, basta clicar em __Continuar sem identificação__.

>ℹ️ Embora seja possível atender clientes sem identificá-los, recomendamos sempre fazer a identificação, uma vez que isso dá ao vendedor uma série de informações contextuais que aumentam as chances de conversão.

## 3. Busca Omnichannel

A barra superior do aplicativo do inStore oferece algumas opções frequentemente usadas pelo vendedor. Uma delas é a da busca por SKUs, disponível no canto superior direito.

![31. inStore - Product Overview - 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

A busca do inStore é omnichannel. Ou seja, ao fazer uma busca no aplicativo, o vendedor está buscando tanto no estoque local (da loja física em si) quanto no catálogo de outras lojas físicas e do e-commerce.

![31. inStore - Product Overview - 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

As opções de disponibilidade de entrega e retirada serão mostradas depois, na etapa de entrega.

## 4. Leitura do código de barras

Após fazer a identificação do cliente, o vendedor é levado já diretamente para o carrinho. Lá, se estiver usando a versão para desktop do inStore, conectada a um leitor de código de barras, basta bipar os produtos para que eles apareçam no carrinho.

![31. inStore - Product Overview - 5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

Se o vendedor estiver usando um tablet ou smartphone, ele verá, na barra superior do aplicativo, um botão de leitura de código de barras.

![31. inStore - Product Overview - 6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

Ao clicar nele, o vendedor pode usar a câmera para bipar um produto e, com isso, ser levado automaticamente à tela de detalhes deste produto.

## 5. Carrinho Omnichannel

Uma vez que a consulta ao catálogo realizada pelo inStore traz produtos não apenas do estoque local, mas de todo o catálogo compartilhado entre canais, o carrinho montado com o inStore é omnichannel: ele pode conter produtos que existem no estoque da loja, mas também outros que existem em outros estoques.

É como se o vendedor tivesse acesso ao mesmo checkout do e-commerce, mas com acesso também aos estoques das lojas físicas. O checkout do inStore traz para o contexto do pedido na loja física os mesmos dados que você teria no e-commerce: 
- Dados de SKU do Catálogo
- Promoções e gift cards do módulo de promoções
- Preços e SLAs do fulfillment
- Parcelas do módulo de pagamentos
- SLAs de entrega do módulo de logística
- Taxas do serviço de taxas

## 6. Acesso ao último carrinho do cliente

Depois que o vendedor identifica o cliente, o inStore busca informações sobre esse cliente que possam auxiliar na venda. Uma dessas informações mostra o último carrinho montado mas não finalizado por esse cliente.

Ao ter acesso a essa informação, o vendedor pode tentar concluir a venda dos itens que estavam nesse carrinho, ou seja, pode tentar recuperar o carrinho abandonado.

Basta clicar em __Acessar__ para ver os produtos do carrinho abandonado.

## 7. Perfil do cliente

No carrinho, o vendedor pode clicar em __Resumo do Pedido__ e, em seguida, no nome do cliente. Com isso, ele tem acesso a informações sobre o cliente relevantes para a venda:
- Número de dias desde a última visita do cliente a uma loja da marca ou ao e-commerce (considerando, claro, que ele foi identificado nessa visita)
- Dados do cliente, como e-mail, telefone e número de documento
- Endereços do cliente
- Último carrinho criado pelo cliente no e-commerce
- Histórico de pedidos

Na caixa que mostra o último carrinho, o vendedor pode recuperar esse carrinho com apenas um botão: __Recuperar Carrinho__.

Já nas caixas de cada um dos últimos pedidos feitos pelo cliente, o vendedor pode copiar o carrinho, também apertando um único botão: __Copiar Carrinho__.

Todas essas informações, é bom lembrar, se referem não apenas à experiência do cliente na loja física atual, mas também às interações desse cliente no e-commerce ou em qualquer loja da marca onde um vendedor tenha atendido ao cliente com o inStore.

## 8. Detalhes do produto

Ao clicar nos detalhes de um produto que aparece nos resultados da busca do inStore, ou ao bipar um produto, o vendedor é direcionado à tela de detalhes do produto.

![31. inStore - Product Overview - 7](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

Essa tela mostra o nome do produto, sua galeria de fotos, variações, descrição e disponibilidade. O vendedor pode, nessa tela, adicionar o produto ao carrinho.

![31. inStore - Product Overview - 8](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)

Note que, se você configurou sua loja para [forçar disponibilidade de estoque](https://help.vtex.com/pt/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/2SgRUekV8FO4lg2aO6YTmh), mesmo que o produto esteja indisponível em todos os canais, o vendedor poderá adicioná-lo ao carrinho.

## 9. Sugestão de produtos

Tanto nos detalhes do produto quanto no carrinho, o inStore mostra por padrão sugestões de produtos. Essas recomendações são feitas de acordo com as características do produto que está sendo visto no momento ou dos itens que compõem o carrinho.

É possível desabilitar a sugestão de produtos. Para isso, veja o artigo [Habilitar recomendação de produtos](https://help.vtex.com/pt/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/321NRjb9YjABQPReJJ5wr2).

## 10. Transferência de carrinho

O inStore permite [habilitar uma funcionalidade de transferência de carrinho](https://help.vtex.com/pt/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/1PqUW2NuQzaVxTJp0lBK0r). Essa funcionalidade permite que uma compra iniciada em um dispositivo possa ser finalizada em qualquer outro dispositivo presente no fluxo da compra, sem a necessidade de re-bipar os produtos.

Uma vez no carrinho de um pedido, o vendedor tem acesso ao botão __Transferir__. Ao clicar nesse botão, o aplicativo mostra um QR Code e um código numérico de quatro dígitos.

![31. inStore - Product Overview - 9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)

Um outro vendedor logado na mesma loja pode, então, capturar esse carrinho e continuar a venda a partir do seu dispositivo.

Para capturar um carrinho, basta entrar no menu principal do inStore e clicar em __Capturar carrinho__. Alternativamente, na tela inicial do aplicativo, o vendedor pode simplesmente arrastar a tela para a direita.

Ele deve, então, digitar o código numérico mostrado no dispositivo do vendedor que transferiu o carrinho ou clicar em __Ler QR Code__ e então usar a câmera do seu dispositivo para ler o QR Code gerado no dispositivo do primeiro vendedor.

Feito isso, o carrinho será transferido para esse segundo dispositivo, de onde a venda poderá seguir normalmente.

## 11. Entrega

Ao clicar em __Ir para a entrega__, o inStore mostra os endereços disponíveis do cliente. Ou seja, se o cliente em algum momento cadastrou mais de um endereço de entrega, todas as opções de endereço já informadas aparecerão aqui.
Alternativamente, o vendedor pode inserir um CEP.

A tela seguinte mostra as opções de entrega. Como o inStore lida com o catálogo de múltiplas lojas, há diversas possibilidades de organização da entrega, dependendo de onde se encontram os produtos do carrinho.

O exemplo abaixo mostra duas opções: receber todos os itens em casa via entrega econômica ou retirar em outra loja física no prazo de 5 dias úteis.

![31. inStore - Product Overview - 10](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)

### Pontos de Retirada

Para opções de retirada em loja (pickup point), o sistema seleciona as lojas que têm os SKUs em estoque e mostra a loja mais próxima ao CEP do cliente, como sugestão. Se o vendedor quiser trocar a loja onde o cliente fará a coleta, basta clicar no botão __Alterar ponto de retirada__.

![31. inStore - Product Overview - 11](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_11.png)

Ao clicar em Alterar ponto de retirada, o vendedor primeiro tem acesso ao ponto de retirada sugerido pelo sistema. Para ver todos os pontos de retirada disponíveis, basta clicar em __Ver todos os pontos de retirada__.

![31. inStore - Product Overview - 12](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_12.png)

O aplicativo mostrará, então, a lista de pontos de retirada, ordenada por menor distância do CEP do cliente. Também é possível escolher o ponto de retirada pelo mapa.

![31. inStore - Product Overview - 13](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_13.png)

## 12. Pagamento

Na etapa de pagamento, aparecerão as [opções de pagamento que foram configuradas](https://help.vtex.com/pt/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) para sua loja.

Uma funcionalidade importante permitida pelo inStore são os múltiplos pagamentos. Por exemplo: escolhendo Dinheiro e depois clicando em __Adicionar outro pagamento__, o vendedor pode fazer parte da cobrança em dinheiro e outra parte em cartão de crédito ou débito.

![31. inStore - Product Overview - 14](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_14.png)

A barra superior da tela de pagamento permite adicionar cupom e vale-presente. Permite, ainda, alterar o número do CPF que constará na Nota Fiscal do pedido.

![31. inStore - Product Overview - 15](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_15.png)

## 13. Pedido finalizado

O vendedor pode ver essa mesma tela clicando em __Pedidos finalizados__, no menu principal do inStore, e buscando o pedido por número do pedido ou cliente.

![31. inStore - Product Overview - 16](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_16.png)

## 14. Impressão de NFC-e

Usando o inStore, você pode vender os produtos da sua loja física recebendo pagamentos com a máquina de cartão e gerando imediatamente a Nota Fiscal de Consumidor Eletrônica (NFC-e).

Se o dispositivo de impressão foi [configurado corretamente](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/12GPLA7JdjXEZFLV3HokZU), a NFC-e será impressa automaticamente assim que o pedido for concluido.

## 15. Impressão de resumo do pedido

Além da nota fiscal, é possível imprimir um resumo do pedido quando a venda é concluída.

Você pode [configurar o inStore para imprimir o resumo do pedido automaticamente](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/12GPLA7JdjXEZFLV3HokZU), assim que o pedido for finalizado. Mas, por padrão, isso não acontece.

No entanto, se o vendedor quiser imprimir o resumo do pedido ainda assim, basta clicar no botão __Imprimir Pedido__, na tela de pedido finalizado, desde que o dispositivo de impressão esteja corretamente configurado para imprimir pedidos.
