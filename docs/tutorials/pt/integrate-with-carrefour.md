---
title: 'Integrar com Carrefour'
id: 1Qgdsh2o0QAocUyoUaSqSW
status: DRAFT
createdAt: 2017-05-10T16:54:21.574Z
updatedAt: 2020-03-06T13:56:49.855Z
publishedAt: 
firstPublishedAt: 2017-05-10T19:07:44.997Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integrando-com-carrefour
locale: pt
legacySlug: integrando-com-carrefour
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este tutorial vai ensinar, passo a passo, como configurar a integração da sua loja com o Carrefour.

1.	No menu do Admin, clique em __Integrações__.
2.	Acesse a aba __Configurações__.
3.	Busque pela caixa do __Carrefour__ e clique em __Integrar__.
4.	Preencha os __campos__ exibidos na tela. Abaixo, vamos detalhar como preencher cada um deles.
5.	Com tudo preenchido corretamente, clique no botão __Salvar Configuração__.

## Detalhamento dos campos

&bull; __Integração Ativada*:__ marque `Sim` para que a integração comece a operar. Se você marcar `Não`, toda a configuração da integração será apagada, incluindo o afiliado.

&bull; __E-mail de notificação*:__ preencha com um e-mail.

&bull; __ShopKey*:__ esse campo deve ser preenchido com o __token/chave de acesso__ da sua loja no marketplace. Essa informação deve ser obtida com o Carrefour.

&bull; __ShopId:__ esse campo deve ser preenchido com ID da sua loja no marketplace. Essa informação deve ser obtida com o Carrefour.

&bull; __Título do produto*:__ nesse campo, você deve escolher qual o formato do nome que seu produto terá no Carrefour.

&bull; __Estoque mínimo:__ você deve preencher esse campo com um valor mínimo de estoque de segurança. Por mais que a comunicação entre os sistemas da VTEX e do Carrefour seja rápida, o estoque exibido no marketplace pode ficar defasado em relação ao estoque real do produto na sua loja mesmo que por alguns minutos. Assim, quando o estoque na VTEX chegar a esse valor, a integração irá zerar o estoque do pruduto para que a venda de um produto sem estoque não aconteça.

&bull; __Taxa de divergência de preço*:__ é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda do marketplace e o preço determinado pelo seller [será comparado com esse valor](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado). Se a divergência, em percentual, for menor que o valor definido nesse campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos (dentro da seção de integrações no Admin)](/pt/tutorial/verificando-integracao-no-bridge).

&bull; __Política comercial*__: ID da política comercial que será utilizada para a integração com o Carrefour. São os produtos dessa política comercial que serão enviados para o marketplace.

&bull; __Mapeamento de SLA de tipo Normal*:__ aqui deve ser inserido [tipo de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega) cadastrada na VTEX que você deseja usar para entrega `Normal`.

_`Ex:` imagine que você usa o Correios (PAC) como transportadora e seu Tipo de Transportadora no painel logístico da VTEX se chama "Comum". Então, você deve escrever no campo o nome __Comum__. Lembre-se que a palavra deve ser exatamente igual à cadastrada na logística._

&bull; __Mapeamento de SLA de tipo Expressa*:__ aqui deve ser inserido [tipo de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega) cadastrada na VTEX que você deseja usar para entrega `Expressa`.

_`Ex:` imagine que você usa a transportadora XPTO, que entrega mais rápido, mas é mais cara. Seu Tipo de Transportadora no painel logístico da VTEX se chama "Entrega Rápida". Então, você deve escrever no campo o nome __Entrega Rápida__. Lembre-se que a palavra deve ser exatamente igual à cadastrada na logística._

&bull; __Mapeamento de SLA de tipo Econômica*:__ aqui deve ser inserido [tipo de transportadora](http://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega) cadastrada na VTEX que você deseja usar para entrega `Econômica`.

_`Ex:` imagine que você usa a transportadora XPTO, que entrega mais devagar, porém é mais barata. Seu Tipo de Transportadora no painel logístico da VTEX se chama "Entrega Econômica". Então, você deve escrever no campo o nome __Entrega Econômica__. Lembre-se que a palavra deve ser exatamente igual à cadastrada na logística._

&bull; __Mapeamento de SLA de tipo Agendada*:__ aqui deve ser inserido [tipo de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega) cadastrada na VTEX que você deseja usar para entrega `Agendada`.

_`Ex:` imagine que você usa a transportadora XPTO, que entrega mais devagar, porém é mais barata. Seu Tipo de Transportadora no painel logístico da VTEX se chama "Agendada". Então, você deve escrever no campo o nome __Agendada__. Lembre-se que a palavra deve ser exatamente igual à cadastrada na logística._

<div class="alert alert-warning">
<strong>OBS:</strong> é necessário preencher pelo menos um dos campos do mapeamento de SLA. Caso nenhum deles seja prenchido, <strong>não</strong> será possível simular o frete na VTEX e, consequentemente, os pedidos feitos no Carrefour não serão integrados. Além disso, também não será possível salvar o cadastro da integração sem que algum dos campos esteja preenchido.
</div>

_Legenda:_<br />
`*` Campos obrigatórios.<br />

Após salvar a configuração, a integração envia automaticamente todos os produtos associados à política comercial determinada para o Carrefour.

## API de Frete

A implementação da API permite que o Carrefour consulte, em tempo real, o preço e prazo de um frete para seus produtos (de acordo com o CEP). Note que o termo `{AccountName}` deve ser substituído pelo nome do ambiente de sua loja.

`http://portal.vtexcommercestable.com.br/api/carrefourintegration/pub/{accountName}/freight`

__Pronto!__ Depois de cumprir esta etapa, sua loja já está completamente integrada com o Carrefour.

