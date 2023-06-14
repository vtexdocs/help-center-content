---
title: 'Integrar com SkyHub/B2W'
id: tutorials_408
status: DRAFT
createdAt: 2017-04-27T22:06:17.861Z
updatedAt: 2020-03-06T13:56:49.709Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:23.750Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: integrando-com-b2w
locale: pt
legacySlug: integrando-com-b2w
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

A integração com a B2W acontece através da SkyHub, uma integradora que intermedia as informações enviadas pela VTEX e repassa à B2W. Dessa maneira, a VTEX se integra com SkyHub, mas no final seus produtos são endereçados à B2W.

## Cadastro da integração da B2W

Siga os passos abaixo para iniciar a configuração da integração:

1.	No menu do Admin, clique em __Integrações__.
2.	Acesse a aba __Configurações__.
3.	Busque pela caixa da __B2W__ e clique em __Integrar__.
4.	Preencha os __campos__ exibidos na tela. Abaixo, vamos detalhar como preencher cada um deles.
5.	Com tudo preenchido corretamente, clique no botão __Salvar Configuração__.

### Detalhamento dos campos

&bull; __E-mail de acesso da SkyHub*:__ preencha esse campo com o seu e-mail da SkyHub.

&bull; __Chave de acesso da SkyHub*:__ esse campo deve ser preenchido com o __token__ de identificação da sua loja no marketplace. Essa informação deve ser obtida com a SkyHub.

&bull; __Id do afiliado*__: esse campo deve ser preenchido com um ID de [afiliado](/pt/faq/o-que-e-afiliado) que ainda não exista no cadastro de afiliados do Orders (antigo OMS). O ID aceita apenas três dígitos (todos devem ser consoantes). Sugestão: `BWW`. Caso você tenha configurações de [integração para multidomínios](/pt/tutorial/como-criar-multiloja-multidominio), dê uma atenção especial ao ID do afiliado, porque esse campo deve ter um valor diferente para cada domínio.

&bull; __Política comercial*__: ID da política comercial que será utilizada para a integração com a B2W. São os produtos dessa política comercial que serão enviados para o marketplace.

&bull; __URL da loja__: esse campo deve ser preenchido com a URL da sua loja.
<br />_`Ex:` www.minhaloja.com.br_

&bull; __Informe aqui o nome dos seus atributos utilizados para fazer a variação dos seus produtos__: inserir as especificações de SKUs utilizadas na loja.

&bull; __Taxa de Divergência de Preço*:__ é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda do marketplace e o preço determinado pelo seller [será comparado com esse valor](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado). Se a divergência, em percentual, for menor que o valor definido nesse campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos (dentro da seção de integrações no Admin)](/pt/tutorial/verificando-integracao-no-bridge).

&bull; __E-mails Para Notificação de Pedidos Não Integrados*:__ preencha com um e-mail. Lembre-se de clicar no botão `+` para inseri-lo.

_Legenda:_<br />
`*` Campos obrigatórios.<br />

Após salvar a configuração, a integração envia automaticamente todos os produtos associados à política comercial determinada para a SkyHub.

Essa é a _primeira etapa_ da integração. No próximo passo, vamos realizar o cadastro de uma API fundamental para o funcionamento dela.


## Cadastro de APIs

A integração fornece automaticamente a API para consulta de frete. No entanto, há situações específicas em que você vai precisar abrir um chamado com a B2W, solicitando a inserção manual da API no portal do marketplace. 

### API de Frete

A implementação da API permite que a B2W consulte, em tempo real, o preço e prazo de um frete para seus produtos (de acordo com o CEP). Note que o termo `{AccountName}` deve ser substituído pelo nome do ambiente de sua loja.

`http://simulation.vtexcommercestable.com.br/api/skyhubintegration/freight?an={accountName}`

Depois de cumprir mais essa etapa, sua loja já está completamente integrada com a B2W.



## Artigos relacionados

- [Como funciona a integração da SkyHub?](/pt/tutorial/como-funciona-a-integracao-da-skyhub)
- [Integrar com marketplace](/pt/tutorial/integrando-com-marketplace)
