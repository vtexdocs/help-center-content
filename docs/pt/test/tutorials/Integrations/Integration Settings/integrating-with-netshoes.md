---
title: 'Integrar com a Netshoes'
id: 3hnIjBAOkM2moqkG86kmsU
status: ARCHIVED
createdAt: 2017-11-29T15:03:17.240Z
updatedAt: 2020-03-06T13:58:00.166Z
publishedAt: 
firstPublishedAt: 2017-12-01T14:11:11.825Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrar-com-a-netshoes
locale: pt
legacySlug: integrar-com-a-netshoes
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A Netshoes é um dos maiores marketplaces de artigos esportivos e está disponível para integração através de funcionalidade nativa VTEX.

## Cadastro da integração

1.	No menu do Admin, clique em __Integrações__.
2.	Acesse __Configurações__.
3.	Busque pela caixa da __Netshoes__ e clique em __Integrar__.
4.	Preencha os __campos__ exibidos na tela. Abaixo, vamos detalhar como preencher cada um deles.
5.	Com tudo preenchido corretamente, clique no botão __Salvar Configuração__.

### Detalhamento dos campos

- __Integração*:__ marque `Ativada` para que a integração comece a operar. Se você marcar `Desativada`, toda a configuração da integração será apagada, incluindo o afiliado.

- __Id do afiliado*:__ esse campo deve ser preenchido com um ID de [afiliado](/pt/faq/o-que-e-afiliado) que ainda não exista no cadastro de afiliados em Gestão de pedidos. O ID aceita apenas três dígitos (todos devem ser consoantes). Sugestão: `NTS`. Caso você tenha configurações de [integração para multidomínios](/pt/tutorial/como-criar-multiloja-multidominio), dê uma atenção especial ao ID do afiliado, porque esse campo deve ter um valor diferente para cada domínio. 

- __Política comercial*:__ ID da política comercial que será utilizada para a integração com a Netshoes. São os produtos dessa política comercial que serão enviados para o marketplace.

- __Chave de acesso a API da Netshoes*:__ esse campo deve ser preenchido com o __token__ de identificação da sua loja no marketplace. Essa informação é fornecida diretamente pela Netshoes, após a contratação.

- __Nome do SKU*:__ determina o formato como serão enviados os nomes de marcas, produtos e skus da sua loja. 

- __Percentual de tolerância na divergência do valor do pedido*:__ é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda do marketplace e o preço determinado pelo seller [será comparado com esse valor](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado). Se a divergência, em percentual, for menor que o valor definido nesse campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos (dentro da seção de integrações no Admin)](/pt/tutorial/verificando-integracao-no-bridge).

- __E-mails para criação do Afiliado*:__ preencha com um e-mail.

- __Mapeamento de Tipo de Entrega (SLA) -> Normal:__ aqui deve ser inserido o [tipo de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega) que você deseja usar para entrega __normal__.
_`Ex:` imagine que você usa o Correios (PAC) como transportadora e seu Tipo de transportadora no painel de transportadoras da VTEX se chama "Comum". Então, você deve escrever no campo o nome __Comum__. Lembre-se que a palavra deve ser exatamente igual à cadastrada na seção de Estoque & entrega._

>⚠️ **OBS:** se o campo for deixado em branco, a integração usará a transportadora **mais barata disponível** no momento de integrar o pedido.

- __Mapeamento de Tipo de Entrega (SLA) -> Expressa:__ o [tipo de transportadora](/pt/tutorial/como-funciona-o-tipo-de-entrega) que você deseja usar para entrega __expressa__.
- 
_`Ex:` imagine que você usa a transportadora XPTO, que entrega mais rápido, mas é mais cara. Seu Tipo de transportadora no painel de transportadoras da VTEX se chama "Entrega Rápida". Então, você deve escrever no campo o nome __Entrega Rápida__. Lembre-se que a palavra deve ser exatamente igual à cadastrada na seção de Estoque & entrega._

>⚠️ **OBS:** se o campo for deixado em branco, a integração usará a transportadora <strong>mais barata disponível<strong> no momento de integrar o pedido.

_Legenda:_<br />
`*` Campos obrigatórios.<br />

Essa é a _primeira etapa_ da integração. No próximo passo, vamos realizar o cadastro de APIs fundamentais para o funcionamento dela.


## Cadastro de APIs

Para funcionar, a integração com a Netshoes exige que a API de frete seja cadastrada no painel do marketplace. 

### API de Notificação de Produtos Aprovados

Para que a integração possa enviar preço e estoque de um produto aprovado pela Netshoes, é recomendável habilitar a API de Notificação Produto Aprovado no painel deles. Basta seguir os passos descritos nesta [documentação da Netshoes](https://developers.netshoes.com.br/api-portal/content/notificacao) e usar a URL abaixo (substituindo `{AccountName}` pelo nome do ambiente de sua loja):

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/product/approved/notification`


### API de Importação de Pedidos

Para ativar a importação de pedidos da Netshoes para a VTEX, é recomendável habilitar a API abaixo (substituindo `{AccountName}` pelo nome do ambiente de sua loja). Basta seguir os passos descritos nesta [documentação da Netshoes](https://developers.netshoes.com.br/api-portal/content/notificacao).

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/order/notification`


### API de Frete

A implementação dessa API permite que a Netshoes consulte, em tempo real, preço e prazo de um frete para seus produtos (de acordo com o CEP). Para isso, você deve ir ao painel da Netshoes e seguir os passos descritos nesta [documentação](https://developers.netshoes.com.br/api-portal/content/apidefrete). A URL abaixo (substituindo `{AccountName}` pelo nome do ambiente de sua loja) será cadastrada:

`http://{accountName}.vtexcommercestable.com.br/api/netshoesintegration/freight`

>⚠️ **OBS:** se os Mapeamentos de Entrega não estiverem feitos, não haverá retorno de informações de entrega e frete para essa API. 

>⚠️ **OBS 2:** para que a consulta da API seja feita com sucesso, o ID da transportadora e o ID da doca na VTEX deve ser um valor que contenha somente números.

Esse é o _segundo passo_ da integração. Para concluir o processo, é necessário realizar o envio das especificações dos seus produtos à Netshoes.


## Envio das especificações de produtos para a Netshoes

Feitas as configurações iniciais para a integração com a Netshoes, agora vamos enviar os dados dos __atributos__ dos produtos para o marketplace. O envio dessas informações será feito por __upload da planilha de mapeamento__. 

Com essa feature, é possível categorizar corretamente seus produtos na Netshoes e também criar variações e atributos para eles.

O mapeamento deve ser feito sempre que um produto for enviado pela primeira vez à Netshoes. Isso significa que, já tendo feito o mapeamento uma vez, os produtos que já foram integrados não precisam passar por esse processo novamente. Da mesma forma, produtos novos devem sempre passar pelo mapeamento.

1. [Baixe aqui](https://s3.amazonaws.com/Marketplace-Integration/NetshoesIntegration/Template/Mapeamento.xlsx) a __Planilha de Mapeamento da Netshoes__ no formato `.xlsx`.
2. [Baixe aqui](https://s3.amazonaws.com/Marketplace-Integration/NetshoesIntegration/Template/Atributos.xlsx) a __Planilha de Consulta da Netshoes__ para verificar os valores aceitos de acordo com cada coluna da Planilha de Mapeamento do passo anterior. Essa planilha é __exclusivamente para consulta__.


### Preenchendo a Planilha de Mapeamento

Siga o passo a passo abaixo, fazendo o de/para na __Planilha de Mapeamento__ entre o que está cadastrado no seu produto na VTEX e os valores especificados de acordo com a __Planilha de Consulta__ da Netshoes.

>⚠️ **OBS:** qualquer valor usado que não esteja na Planilha de Consulta vai ocasionar em um erro de integração.

1. __ID do SKU:__ é o ID do SKU na VTEX. Esse é o Id do SKU que você deseja enviar para a Netshoes.

2. __Departamento:__ preencha com o valor do Departamento ao qual seu SKU pertence na Netshoes.
<br/>_`Ex:` se um produto está cadastrado na VTEX no departamento `Moto`, na Planilha de Mapeamento o valor correspondente na coluna __Departamento__ deve ser `Motociclismo`._

3. __Tipo de Produto:__ preencha com o valor do Tipo de Produto do seu SKU. De acordo com o departamento escolhido no passo anterior, verifique na planilha os Tipos de Produto possíveis para esse departamento.
<br/>_`Ex:` você está mapeando um tênis casual. De acordo com a Planilha de Consulta, ele entraria no Departamento "Casual" e a coluna __Tipo de Produto__ seria preenchida com o valor `Tênis`._

4. __Marca:__ preencha com o valor correspondente à Marca do Produto na VTEX. 
<br/>_`Ex:` você está mapeando uma camisa da Nike. De acordo com a Planilha de Consulta, a coluna __Marca__ deve ser preenchida com o valor `Nike`._
<br/>
>⚠️ **OBS:** se a marca que você tem em seus produtos não está na Planilha de Consulta, entre em contato com a Netshoes solicitando a inclusão dela no sistema. Assim que eles confirmarem o cadastro, você poderá usar a marca no mapeamento. Caso eles não tenham cadastrado ainda, o produto vai sofrer um erro de integração.

5. __Cor__: preencha com o valor da Cor do SKU.
<br/>_`Ex:` você está mapeando um short azul e branco. De acordo com a Planilha de Consulta, a coluna __Cor__ deve ser preenchida com o valor `Azul+Branco`._

6. __Sabor__: preencha com o valor do Sabor do SKU.
<br/>_`Ex:` você está mapeando um suplemento vitamínico sabor morango. De acordo com a Planilha de Consulta, a coluna __Sabor__ deve ser preenchida com o valor `Morango`._

7. __Tamanho__: preencha com o valor do Tamanho do SKU.
<br/>_`Ex:` você está mapeando uma bermuda pequena. De acordo com a Planilha de Consulta, a coluna __Tamanho__ deve ser preenchida com o valor `P`._

8. __Gênero__: preencha com o valor do Gênero do SKU.
<br/>_`Ex:` você está mapeando um sapato feminino. De acordo com a Planilha de Consulta, a coluna __Gênero__ deve ser preenchida com o valor `Mulher`._


### Outras Especificações

Existem alguns __outros__ atributos de produtos listados na aba "Atributos" da Planilha de Consulta que são __obrigatórios__, mas que __não__ são enviados através da Planilha de Mapeamento explicada no passo anterior.

Para enviar esses atributos, é necessário ter cadastrado na VTEX as [especificações do produto](/pt/tutorial/criando-um-campo-de-produto) indicadas como obrigatórias na Planilha de Consulta.

_`Ex:` um produto do Departamento __Basquete__, do Tipo de Produto __Tênis__, deve ter o Atributo `Altura do Cano` cadastrado como especificação de produto na VTEX. Nesse exemplo, os valores permitidos para o atributo são `Cano Alto`, `Cano Médio` e `Cano Baixo`. Se a especificação na VTEX não tiver os valores esperados pela Netshoes, o produto será rejeitado na integração._

### Fazendo o upload

Depois de preencher a planilha, acesse __Integrações__ no menu do Admin:

1. Clique em __Configurações__.
2. Busque pelo card da Netshoes e clique no __ícone de engrenagem__.
3. Em seguida, clique em __Upload de Mapeamento__.
4. Escolha a planilha com os dados e clique em __Enviar Arquivo__.

Com o upload concluído, a integração envia automaticamente todos os produtos da planilha para a Netshoes.

Depois de cumprir mais essa etapa, sua loja já está completamente integrada com a Netshoes.

