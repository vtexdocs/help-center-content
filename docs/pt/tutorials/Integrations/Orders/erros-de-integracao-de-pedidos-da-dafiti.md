---
title: 'Erros de integração de pedidos da Dafiti'
id: 4t8AIA9R671jGHY8MOwHhS
status: PUBLISHED
createdAt: 2021-09-08T14:37:11.608Z
updatedAt: 2023-03-29T23:37:09.005Z
publishedAt: 2023-03-29T23:37:09.005Z
firstPublishedAt: 2021-09-08T14:56:15.029Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-dafiti-integration
locale: pt
legacySlug: erros-de-integracao-de-pedidos-da-dafiti
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Há diversas razões pelas quais um pedido entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem, basta clicar sobre o pedido.

Na Dafiti, há erros de integração de pedidos que ocorrem com mais frequência que outros. Este artigo seleciona os mais comuns e indica como resolvê-los.

#### Mensagem de erro

`Não é possível integrar um pedido composto por produtos criados manualmente`

Este erro acontece quando um item do pedido foi cadastrado diretamente na plataforma da Dafiti. Mesmo que o item esteja também cadastrado na VTEX, essa duplicação de cadastro faz com que o ID do SKU não seja reconhecido pelo sistema VTEX, e o pedido não é integrado. A solução é deletar o cadastro do item na plataforma Dafiti, e, após se certificar de que o [SKU está cadastrado](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/17PxekVPmVYI4c3OCQ0ddJ) no seu ambiente VTEX, reprocessar o pedido manualmente. No seu Admin, no módulo **Marketplace > Conexões > Pedidos**, clique sobre o pedido com erro. Feito isso, o botão **Ações** se torna visível, clique sobre ele e escolha a opção **Reprocessar**.

____

#### Mensagens de erro

`Não foi possível integrar o pedido, pois um ou mais itens não possuem estoque suficiente para o canal de vendas do Marketplace`<br>
</br>`Não foi possível integrar o pedido, pois um ou mais itens não estão disponíveis`

Há diversas causas para erros relacionados à falta ou insuficiência de estoque. Para identificar a origem do erro e corrigi-lo, confira [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP).

____

#### Mensagem de erro

`Não foi possível integrar o pedido, pois um ou mais itens não possui preço vigente para o canal de vendas configurado`

Este erro indica inconsistência no preço do SKU, que pode estar com data de vigência expirada, ou ter algum erro de cadastro. Confira se é necessário [alterar o preço do SKU](https://help.vtex.com/pt/tutorial/alteracao-de-preco-de-sku--tutorials_95) e, em seguida, reprocesse manualmente o pedido. No seu Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**, clique sobre o pedido com erro, e depois clique em **Ações**. Selecione a opção **Reprocessar**.

____

#### Mensagem de erro

`This api call "SetStatusToShipped" is currently not allowed`

Na Dafiti, há uma configuração do sistema logístico que, por padrão, é marcada com o valor “sim” (verdadeira). Isso permite que os fretes tipo FOB e _Milk Run_ funcionem corretamente. No entanto, quando o seller não configurou nenhum destes fretes na Dafiti, é possível que este erro ocorra. Para corrigi-lo, é necessário entrar em contato com a Dafiti, que então muda a configuração do sistema de “sim” para “não”, resolvendo o problema.

____

#### Mensagem de erro

`Valor de variação inválido`

A mensagem indica que a planilha de mapeamento de categorias e atributos não foi preenchida corretamente, ou seja, em um ou mais campos foram inseridos valores incorretos. Por exemplo, preencher uma especificação de tamanho com o numeral zero, que não é um valor admissível. Se necessário, consulte a orientação de preenchimento da planilha de mapeamento em [Envio dos produtos para a Dafiti](https://help.vtex.com/pt/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/3b8BZfB1BC8G8SCe0ao46m).

____

#### Mensagens de erro

`Pedido não integrado pois o mesmo não está pendente`<br>
</br>`Não é possível integrar um pedido que ja tenha passado do status Pendente na Dafiti`

Os erros citados ocorrem quando o _status_ de um pedido foi alterado diretamente pelo portal da Dafiti. Isso faz com que o sistema da VTEX não mais consiga identificar o _status_ desse pedido, o que impossibilita sua integração, pois um pedido da Dafiti só é integrado quando está no _status Pending_ (pendente). Os outros _status_ que existem são _Ready to ship_ (pronto para despacho), _Shipped_ (despachado), _Delivered_ (entregue), _Return shipped by customer_ (devolvido pelo consumidor) e _Canceled_ (cancelado). Não existe uma solução para erros desta natureza, a orientação é que um pedido do marketplace nunca seja processado diretamente pela plataforma do marketplace, e sim pelo Admin VTEX.

____

#### Mensagem de erro

`OMS Api Error Occurred`

Na [configuração da integração com a Dafiti](https://help.vtex.com/pt/tracks/configurar-integracao-da-dafiti--4wF4RBx9ygEkimW6SsKw8i/3PV2OACP2E4O4uOKKW2sMg), existe a opção de ativar o campo FOB (_Free on Board_), um tipo de frete no qual a entrega do produto ao consumidor é realizada pelo marketplace. A mensagem de erro citada ocorre quando o usuário habilitou a opção FOB no conector, mas não tem esse tipo de frete cadastrado na Dafiti. A solução é primeiro desabilitar o campo FOB no conector. Para isso, acesse seu Admin VTEX, no módulo **Marketplace > Conexões > Integrações**. No card da Dafiti, clique sobre o ícone engrenagem e selecione a opção **Editar configuração**, o que vai abrir uma nova tela, na qual, o campo **FOB** deve ser marcado com a opção **Não**. Feito isso, clique no botão **Salvar configuração**. Com o campo FOB desabilitado no conector, o próximo passo é entrar em contato com a Dafiti, solicitando a habilitação do frete tipo FOB. A Dafiti então fornece as instruções sobre como o usuário deve proceder.

### Saiba mais

- [Erros de falta de estoque na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Erros de SLA na integração de pedidos de marketplace](https://help.vtex.com/pt/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X)
- [Resolução de erros de divergência de preço em pedidos de marketplace](https://help.vtex.com/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
