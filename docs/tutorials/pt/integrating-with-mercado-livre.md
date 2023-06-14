---
title: Integrar com Mercado Livre
id: tutorials_416
status: DRAFT
createdAt: 2017-04-27T22:06:05.698Z
updatedAt: 2020-03-06T13:56:49.727Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:24.390Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: integrando-com-mercado-livre
legacySlug: integrando-com-mercado-livre
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Este tutorial vai ensinar passo a passo como configurar a integração da sua loja com o __Mercado Livre__.

O tutorial está dividido em quatro etapas: 

1. [Configuração da integração](/pt/tutorial/integrando-com-mercado-livre#configuracao-da-integracao)
2. [Configuração do template](/pt/tutorial/integrando-com-mercado-livre#configuracao-do-template)
3. [Configuração da logística](/pt/tutorial/integrando-com-mercado-livre#configuracao-da-logistica)
4. [Autorização da integração no painel da VTEX](/pt/tutorial/integrando-com-mercado-livre#autorizar-integracao-no-painel-da-vtex)

Siga, em ordem, cada uma dessas etapas para que a integração seja realizada corretamente.

## Configuração da integração

### Primeiros passos

As etapas iniciais são essenciais para que as configurações sejam realizadas com sucesso:

1. Configure uma [política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/) para integrar com o Mercado Livre.
2. Configure a [logística](/pt/tutorial/configurando-logistica-para-marketplace/) para essa política comercial. Ela será a responsável pelas entregas de pedidos realizados no Mercado Livre.
3. Você deve entrar em contato com o e-mail `comercial@mercadolivre.com` para criar sua conta no Mercado Livre e acertar os detalhes comerciais.

### Configurar o painel do Mercado Livre na VTEX

1.	No menu do Admin, clique em __Integrações__.
2.	Acesse a aba __Configurações__.
3.	Busque pela caixa do __Mercado Livre__ e clique em __Integrar__.
4.	Preencha os __campos__ exibidos na tela. Abaixo, vamos detalhar como preencher cada um deles.
5.	Clique no botão __Salvar Configuração__.

### Detalhamento dos campos

&bull; __Id do afiliado__: esse campo deve ser preenchido com um ID de [afiliado](/pt/faq/o-que-e-afiliado) que ainda não exista no cadastro de afiliados do OMS. O ID aceita apenas três dígitos (todos devem ser consoantes). Sugestões: `MLB`, `MML` ou `MRC`. Caso você tenha configurações de [integração para multidomínios](/pt/tutorial/como-criar-multiloja-multidominio), dê uma atenção especial ao ID do afiliado, porque esse campo deve ter um valor diferente para cada domínio. 

&bull; __Política comercial__: ID da política comercial que será utilizada para a integração com o Mercado Livre. São os produtos dessa política comercial que serão enviados para o marketplace.

&bull; __Tipo de anúncio__: nesse campo, você precisa escolher se quer que seus produtos tenham anúncios do tipo _Clássico_ ou _Premium (12x sem juros)_. Cada um deles possui valores de comissão a serem pagos ao Mercado Livre e, para consultá-los, você deve entrar em contato direto com o marketplace.

&bull; __Título do anúncio__: nesse campo, você deve escolher qual o formato do nome que seu produto terá no Mercado Livre. É importante ter atenção ao tamanho do título, já que o Mercado Livre tem uma restrição de 60 caracteres.

Caso deseje usar um formato diferente, ou até títulos diferentes dos que estão cadastrados no catálogo da VTEX, você tem a opção de [criar um campo de produto](/pt/tutorial/criando-um-campo-de-produto) de tipo _Texto Grande_ que deve ter o nome `meli_title`. Com esse campo preenchido, a integração vai priorizar o envio dos valores usados aqui ao invés do título original do produto/SKU.

<div class="alert alert-danger">
<strong>OBS:</strong> preste atenção às configurações na criação desse novo campo, para que as novas informações criadas <strong>não</strong> sejam exibidas no seu site.
</div>

&bull; __Descrição do produto__: esse campo indica como a descrição de seus produtos no catálogo da VTEX será enviada ao Mercado Livre. As opções são _plain/text_ ou _html_.

<div class="alert alert-danger">
<strong>OBS:</strong> apesar de existir a opção, descrições com HTML <strong>não são mais aceitas</strong> pelo Mercado Livre, sendo obrigatória a escolha da opção <em>plain/text</em>. Em breve, também descontinuaremos essa opção da interface. Veja na seção <strong>Configuração do Template</strong> as tags aceitas pelo Mercado Livre.
</div>

&bull; __Associar produtos aos pick-up points cadastrados__: marque essa flag se você deseja que suas configurações de Pontos de Retirada sejam refletidas no Mercado Livre. Vale lembrar que só estão elegíveis as configurações feitas na seção [Pontos de Retirada](/pt/tutorial/configurar-pontos-de-retirada-pickup-points) do módulo __Logistics__.

&bull; __Taxa de divergência de preço (Percentual)__: é a taxa de aceitação da diferença de valor de um pedido. Qualquer pedido que possua uma diferença entre o preço de venda do marketplace e o preço determinado pelo seller [será comparado com esse valor](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado). Se a divergência, em percentual, for menor que o valor definido nesse campo, o pedido será integrado normalmente. Caso contrário, o pedido não será integrado e você poderá visualizá-lo na [aba de pedidos (dentro da seção de integrações no Admin)](/pt/tutorial/verificando-integracao-no-bridge).

&bull; __Id da loja oficial no mercado livre__: se a sua loja for elegível para ser loja oficial no Mercado Livre, você deve preencher esse campo com o ID dela no marketplace. Essa informação pode ser obtida no seu contrato comercial com o Mercado Livre. O ID geralmente é composto por três ou quatro números. Ex.: `160` ou `1406`.

&bull; __Taxa de confiabilidade da categorização automática__: a integração dá a opção de categorizar automaticamente os seus anúncios através de uma __ferramenta do Mercado Livre__. Essa ferramenta depende de informações (como nome do produto e preço) e, se não consegue inferi-las corretamente, seu produto pode ser categorizado errado. Por isso, é necessário definir uma taxa de confiabilidade na configuração da integração. Ou seja, o produto só vai ser integrado se a taxa retornada pela ferramenta do Mercado Livre estiver acima da que você configurou. Preencha com a taxa que você deseja.

<div class="alert alert-danger">
<strong>OBS:</strong> a VTEX <strong>não</strong> recomenda fazer a categorização de maneira automática. Indicamos usar o mapeamento de planilha explicado <a href="http://help.vtex.com/pt/tutorial/mapeamento-de-categorias-e-variacoes#categorizacao">neste artigo</a>.
</div>

&bull; __Estoque mínimo__: como a comunicação entre os sistemas da VTEX e do Mercado Livre não atualiza algumas das informações em tempo real, o estoque exibido no marketplace pode ficar defasado em relação ao estoque real do produto na sua loja. Para que não ocorram vendas de produtos sem estoque, você deve preencher esse campo com um valor mínimo de estoque de segurança. Assim, quando o estoque no Mercado Livre chegar a esse valor, o anúncio será pausado para que a venda de um produto sem estoque não aconteça.

&bull; Os campos abaixo são referentes à feature de __Mensageria__ no Mercado Livre. Para conhecer melhor, [clique aqui](/pt/announcement/nova-feature-para-usar-a-mensageria-do-mercado-livre). O preenchimento desses campos é opcional, o que significa que, se qualquer um deles for deixado em branco, a respectiva mensagem não será enviada. Vale destacar que __não é possível__ usar HTML ou variáveis nessas mensagens.

  - __Mensagem de aprovação do pedido__: insira nesse campo a mensagem que você deseja enviar ao cliente __quando o pedido for integrado com sucesso na VTEX__.

  - __Mensagem de envio de tracking__: insira nesse campo a mensagem que você deseja enviar ao cliente __quando o pedido tiver sido enviado__ e a __URL de rastreio estiver disponível para consulta__. Vale destacar que a VTEX vai preencher automaticamente esse campo com a URL de rastreio logo ao lado da sua mensagem. Então, caso a URL não esteja disponível ainda, recomendamos faturar o pedido sem ela. Assim que a URL estiver disponível, é só inseri-la no pedido.
>Ex: "Olá! Você já pode acompanhar o status da sua entrega através da URL a seguir: http://status.transportadora.com.br/tracking/nº-do-pedido"

  <div class="alert alert-danger">
<strong>OBS:</strong>caso a URL de rastreio não seja preenchida na fatura do pedido, essa mensagem <strong>não</strong> será enviada.
  </div>

  - __Mensagem de pedido entregue__: insira nesse campo a mensagem que você deseja enviar ao cliente __quando o pedido tiver sido entregue pela transportadora__.  

&bull; __Atributos omitidos no template do produto__: veremos mais à frente que, na configuração do template para o Mercado Livre, você pode incluir os atributos do produto que deseja exibir. A configuração desse campo permite omitir atributos que você não deseja que apareçam no template do Mercado Livre.

<div class="alert alert-warning">
Os campos <code>Atualizar descrição do anúncio</code>, <code>Texto para avaliação automática do comprador</code> e <code>E-mail do afiliado</code> serão descontinuados na UI. Por essa razão, eles não precisam ser preenchidos. As APIs, no entanto, vão continuar ativas.
</div>

## Configuração do template

<div class="alert alert-danger">
Para as lojas do Brasil e da Argentina, <strong>o Mercado Livre não aceita customizações de template em HTML ou CSS</strong> (com exceção da tag &lt;br&gt; para quebras de linha). As tags de Iframes, Scripts, Forms, Inputs, Meta, Object e Embed não são permitidas para nenhum país.
</div>

Para que seu produto fique disponível no Mercado Livre, é necessário configurar o template do anúncio em que ele será exibido. Para fazer isso, siga o passo a passo abaixo:

1. Na seção __Cliente__ do menu lateral do Admin, clique em __Central de Mensagens__.
2. Nas opções que se abrem, clique em __Templates__.
3. Clique no ícone de filtro e selecione apenas a opção __VTEX Bridge__. Você também pode usar a busca para pesquisar por __Mercado Livre__.
4. Insira as variáveis do produto que você deseja exibir no template (veja abaixo todas as que estão disponíveis).
5. Clique no botão __Salvar__.

Conheça as variáveis disponíveis para serem exibidas no template do seu anúncio no Mercado Livre:

``{{DESCRICAO}}``: variável que retorna a __descrição do produto__ cadastrada na VTEX.

``{{IMAGENS}}``: essa variável contém o link com a __imagem principal do produto__ cadastrada na VTEX.

``{{TITULO}}``: variável que contém o __nome do produto__. Ele será exibido de acordo com o formato escolhido no campo __Título do anúncio__, configurado na primeira etapa deste tutorial, na __configuração da integração__.

``{{NOME_ATRIBUTO_PRODUTO}}``: essa variável insere no template o __valor__ de um atributo específico do produto. Dessa forma, é preciso informar qual atributo você deseja exibir. Exemplo: para exibir o valor de um atributo chamado “Detalhe técnico”, você deve inserir a variável `{{DETALHE_TECNICO}}` no template. A variável deve ser escrita sempre em letras maiúsculas, sem acentos e substituindo os espaços do nome do atributo por underscore (\_).

Caso deseje incluir todos os atributos e valores dos atributos no template, você deve adicionar no seu template o código descrito abaixo. Esta é a estrutura que deve ser utilizada para renderizar todos os atributos do produto e seus respectivos valores no template:

``{{#each ATRIBUTOS}} {{NOME}} – {{VALOR}} <br> {{/each}}``

<div class="alert alert-info">
Caso deseje omitir algum atributo no template, você pode fazer isso na <strong>configuração da integração</strong>. Basta preencher o campo <strong>Atributos omitidos no template do produto</strong>, conforme explicado na seção <strong>Configurar o painel do Mercado Livre na VTEX</strong> da etapa anterior.
</div>

Feito isso, você concluiu a _segunda etapa_. Agora, vamos configurar a logística para as entregas de pedidos feitos no Mercado Livre.


## Configuração da logística

A configuração da logística para atender aos pedidos realizados no Mercado Livre possui algumas particularidades. Principalmente porque __é o Mercado Livre quem determina o tipo de frete que sua loja deve configurar__. Essa escolha ocorre em função do acordo comercial que sua loja realizou com eles. Por isso, você deve consultar o Mercado Livre para saber qual tipo de frete sua loja deve configurar.

Os fretes podem ser de __dois tipos__:

### Mercado Envios 1 (ME1)

Na modalidade ME1, __é o lojista quem realiza a entrega do pedido__. Isso significa que você fica completamente responsável pelo envio dos produtos vendidos no marketplace. Veja como configurar corretamente o ME1 na VTEX:

1. No momento do fechamento da compra, o Mercado Livre não realiza simulações de frete em tempo real na VTEX. O cálculo do frete é feito a partir de uma planilha que você deve enviar ao Mercado Livre. __Esse envio não é feito pela plataforma VTEX.__ Por isso, você precisa entrar em contato com o Mercado Livre para saber como mandar a planilha de frete para eles.
2. Sempre que um pedido for fechado no Mercado Livre, a VTEX vai tentar fazer a integração dele no Orders (antigo OMS). Como parte da rotina de integração, nosso sistema realiza uma __simulação de frete__ própria para saber qual transportadora deverá entregar o pedido. __Sem o dado da transportadora, o pedido não pode ser integrado__. 
3. Como você percebeu, essa modalidade de envio acaba gerando duas simulações de frete: uma do próprio Mercado Livre e outra da VTEX. Por causa disso, é possível que haja __diferenças de valor, que geram erros de integração nos pedidos__. Para evitar esse problema, __recomendamos fortemente o cadastro de uma promoção de frete grátis__ para o afiliado do Mercado Livre. Para saber como criar esta promoção, [veja nosso tutorial](/pt/tutorial/configurando-promocao-para-marketplace/). 
4. Com o frete grátis, __não haverá concorrência entre o valor do frete calculado pela VTEX e o valor do frete calculado pelo Mercado Livre__. Assim, a informação da transportadora que realizará a entrega será salva no pedido e a integração vai ocorrer com sucesso.

Cumprindo essas etapas, você vai ter na VTEX __todas as informações necessárias__ para fazer a entrega do pedido.

### Mercado Envios 2 (ME2)

Na modalidade ME2, __a entrega do pedido é de responsabilidade do Mercado Livre__. Portanto, quando um pedido for realizado com o frete ME2, __o pedido será integrado na VTEX sem o valor do frete__. 

Como a entrega do pedido não será feita pela sua loja, o campo do __tipo de entrega__ no JSON do pedido será preenchido com o valor `vtex:fob_xxxx`, onde `xxxx` é o ID do estoque do qual o SKU foi reservado. `FOB` é a sigla para _Free on board_. Esse tipo de entrega indica que o processo de envio do pedido será de responsabilidade do marketplace. Saiba mais detalhes sobre [como funciona o frete do Mercado Envios](/pt/tutorial/como-funciona-o-frete-do-mercado-livre-quando-o-mercado-envios-e-usado).

No ME2, __há duas formas de o pedido ser entregue__. Essas formas de entrega __são determinadas pelo seu acordo comercial com o Mercado Livre__. Siga os passos abaixo para que o pedido seja entregue corretamente pelo marketplace:

#### Lojista leva o pacote ao ponto de entrega determinado pelo Mercado Livre

1. Depois que o pedido for integrado com a VTEX, acesse-o no módulo __Pedidos__ (antigo OMS).
2. Na tela do pedido, busque pela caixa com o título __ETIQUETA DE ENTREGA__ e clique no link com o nome da transportadora que vai fazer o envio. Esse link abre uma aba com a etiqueta que contém todas as informações de entrega.
3. Imprima a etiqueta e cole no pacote. 
4. Leve o pacote ao ponto de entrega determinado pelo Mercado Livre.
5. O Mercado Livre vai fazer o envio do pedido para o cliente final. 

#### Mercado Livre busca o pedido no CD da sua loja (Mercado Envios Coleta)

Nesse cenário, o Mercado Livre busca o pedido diretamente nos Centros de Distribuição da sua loja e realiza a entrega ao cliente final.

<div class="alert alert-warning">
Não recomendamos a utilização do tipo de entrega <strong>Entrega a combinar</strong>. Como pedidos fechados assim não oferecem a informação do endereço do destinatário, <strong>a integração com a VTEX não consegue ser realizada</strong>. Para que um pedido seja integrado corretamente, é necessário que ele tenha as informações de entrega. Por isso, recomendamos sempre a utilização do <strong>Mercado Envios</strong>.
</div>

### Convivência Logística

Visando melhorar a experiência logística com a integração do Mercado Livre, vendedores que usam a modalidade ME1 também podem trabalhar com a ME2.

_`Ex:` sua loja vende eletrodomésticos. A entrega de itens grandes, como geladeiras e fogões, é feita por você (modalidade ME1). Mas você quer que o Mercado Livre entregue (modalidade ME2) itens menores, como torradeiras, liquidificadores, mixers etc._

<div class="alert alert-warning">
<strong>OBS:</strong> somente lojas que já são ME1 poderão ter ME2 também.
</div>

<div class="alert alert-warning">
<strong>OBS2:</strong> para poder usar as duas opções, primeiro deverá haver um acordo diretamente com o assessor comercial do Mercado Livre, já que essa ainda não é uma funcionalidade pública.
</div>

Então, é necessário segmentar seus produtos indicando para a integração quais serão atribuídos à modalidade ME2. Para fazer isso, siga o passo a passo abaixo:

1. Crie uma [especificação de produto](/pt/tutorial/criando-um-campo-de-produto) na categoria desejada, obrigatoriamente com o nome `meli_shipping_mode`.
2. Essa especificação deverá receber o valor `me2`.
3. Depois de cadastrar a especificação, você deve acessar o cadastro de cada produto e atribuir o valor à especificação. Você também pode fazer isso de maneira massiva através [deste tutorial](/pt/tutorial/importando-e-exportando-especificacao-de-produto-e-sku).

<div class="alert alert-warning">
<strong>OBS:</strong> confira se a categoria na qual você está enviando os produtos está apta a usar ME2. Para isso, acesse a seguinte URL no navegador (substituindo a variável entre chaves <code>{CategoryId}</code> pelo ID da categoria do Mercado Livre):
<br></br>
api.mercadolibre.com/categories/{CategoryId}
<br></br>
Você poderá ver essa informação no campo <strong>shipping_modes</strong>. Se o campo tiver o valor "me2", significa que a categoria aceita essa modalidade de entrega.
</div>


Concluindo essas instruções, você vai ter completado a _terceira etapa_ da integração. Agora, você já tem as informações necessárias para lidar com o frete de pedidos realizados no Mercado Livre. Vamos para o próximo passo.


## Mapeamento de categorias e variações

Para realizar este passo, acesse [este artigo](/pt/tutorial/mapeamento-de-categorias-e-variacoes). Depois retorne para o passo adiante.


## Autorizar integração no painel da VTEX

Depois de realizar as configurações acima, você precisa autorizar sua integração com o Mercado Livre. Para isso, basta seguir os passos abaixo:

<div class="alert alert-warning">
O Mercado Livre exige que a autorização seja efetuada pelo <strong>Usuário Master</strong> da conta no Mercado Livre.
</div>

1. No menu do Admin, clique em __Integrações__.
2. Acesse o item __Configurações__.
3. No cartão do Mercado Livre, clique em __Autorização__.
4. Clique em __Desejo me autenticar__.
5. Você será redirecionado para o ambiente do Mercado Livre. Faça o login com o __usuário Master__ da conta no marketplace.
6. Ainda no ambiente do Mercado Livre, clique no botão __Permitir__.
7. Você será redirecionado novamente para a página de __Integrações__ da VTEX.

__Pronto! Agora sua loja já está integrada com o Mercado Livre.__
