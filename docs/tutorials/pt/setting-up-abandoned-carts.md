---
title: 'Configurar Carrinho Abandonado'
id: tutorials_740
status: PUBLISHED
createdAt: 2017-04-27T21:59:05.882Z
updatedAt: 2023-04-28T14:50:21.362Z
publishedAt: 2023-04-28T14:50:21.362Z
firstPublishedAt: 2017-04-27T23:03:41.572Z
contentType: tutorial
productTeam: Shopping
author: authors_3
slug: configurar-carrinho-abandonado
locale: pt
legacySlug: configurar-carrinho-abandonado
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

O carrinho abandonado é a funcionalidade da VTEX que envia e-mails aos clientes para lembrá-los de finalizar a compra em um carrinho que foi montado, mas não finalizado.

A configuração do carrinho abandonado pode ser realizada de duas formas diferentes, de acordo com o ambiente de operação da loja:
- [VTEX Legado](#configuracao-para-lojas-vtex-legado): por meio de diversos módulos da plataforma VTEX (CMS, Master Data e Central de Mensagens) e também em seu servidor de host.
- [VTEX IO](#configuracao-para-lojas-vtex-io): por meio da instalação do app “Abandoned Cart”, configuração do template de email na Central de Mensagens, e do Trigger no Master Data.

### Configuração para lojas VTEX Legado 

Nesta seção são apresentados os seguintes tópicos para configuração da funcionalidade carrinho abandonado nas lojas VTEX Legado:

- [Configurar template de email no CMS](#configurar-template-de-email-no-cms)
- [Configurar modelo de email na Central de Mensagens](#configurar-modelo-de-email-na-central-de-mensagens)
- [Liberação do SPF](#liberacao-do-spf)
- [Configuração da trigger](#configuracao-da-trigger)

#### Configurar template de email no CMS

Você pode criar o seu próprio template de email customizado ou utilizar a opção padrão de template para carrinho abandonado. Para criar um novo template, siga os passos abaixo:

1. No Admin VTEX, acesse __Storefront > Layout__, ou digite __Layout__ na barra de busca no topo da página.
2. Em __CMS > HTML Templates__, clique no ícone `new template`.
3. Adicione um nome no campo __Template Name__.
4. Preencha o campo __Template XHTML__ com os códigos do template.
5. Clique em `Save Template`.

![template xhtml](https://images.ctfassets.net/alneenqid6w5/44IZ7N3din2EELL15z5FeQ/5e4164dc9abd8f5139d7934cae41e44c/Template_XHTML.PNG)

<div class="alert alert-warning">
Recomendamos que a customização de template seja realizada por profissionais com experiência no módulo CMS, e preferencialmente, que já tenham realizado configurações de outros templates de página e prateleira.
</div>

Para utilizar uma opção padrão de template, siga os seguintes passos:

1. No Admin VTEX, acesse __Storefront > Layout__, ou digite __Layout__ na barra de busca no topo da página.
2. Em __CMS > HTML Templates__, clique em `CEM-Abandoned-Cart`.
3. Verifique as informações dos códigos de template presentes no campo __Template XHTML__.

![CEM-Abandoned-Cart](https://images.ctfassets.net/alneenqid6w5/5ZBXBk2KNJVjekmT7P7RqQ/0dd187775baec69f3deee305c05950cb/CEM-Abandoned-Cart.PNG)

#### Configurar modelo de email na Central de Mensagens

Uma vez criado o novo template de email ou utilizado os dados do template padrão, acesse a Central de Mensagens para configurar o modelo do email. Siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Templates de email > Templates__, ou digite __Templates__ na barra de busca no topo da página.
2. Clique no botão `Novo Template`.
3. Clique sobre __Novo template__ e digite o mesmo nome utilizado no template de email criado ou padrão no CMS (lojas Legado).
4. Selecione __Ativar envio de email?__ e __Usar o remetente padrão__.
5. Preencha o campo __Título do email__ conforme desejado.
6. Preencha o campo __Destinatário (To)__ com {{email}}.
7. Em __Html__, insira as informações do template de email criado ou padrão.
8. Clique em `Salvar`. 

<div class = "alert alert-info">
O campo JSON Data não deve ser preenchido ou seus dados utilizados no template do email. Ele contém apenas informações para permitir uma pré-visualização do formato em que os dados que serão visualizados no email.
</div>

![New template - message center](https://images.ctfassets.net/alneenqid6w5/7nX1YnaZoesV51yG24Z3ls/68a8a4f2f7ad9f9911598b3aab475817/Novo_template.PNG)

#### Liberação do SPF

A liberação do SPF é fundamental para evitar problemas de entregabilidade do e-mail, e deve ser realizada conforme o artigo [Configuração de SPF](https://help.vtex.com/pt/tutorial/configuracao-de-spf--42t0lkl2VyC6Yewc4wA6wI#).

Como boa prática de configuração de DNS de um domínio genérico (não obrigatório), segue o exemplo abaixo:

![Hostnames - SPF](https://images.ctfassets.net/alneenqid6w5/4txj9x3nVeN7Z3WEZmSpev/45230f3dbeda2d8ee040ec8a6ee39d31/Hostnames_-_SPF.PNG)

Saiba mais em [Configurar o apontamento de DNS para a VTEX](https://help.vtex.com/pt/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280?&utm_source=autocomplete).

#### Configuração da trigger

Nesta configuração será preciso criar uma [trigger no Master Data](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data?locale=pt). O processo consiste em preencher alguns valores que determinarão o disparo da trigger.

Entre eles, três filtros adicionais, como:

- Checkout
- Carrinho
- Último carrinho

O filtro “Checkout” estabelece uma das condições para que a trigger seja disparada. No exemplo abaixo, a trigger será acionada se o carrinho não for finalizado e for diferente de nulo. Ou seja, caso o cliente não conclua a compra e não tenha incluído nada no carrinho.

Além disso, temos ainda os filtros “Carrinho” e “Último Carrinho”. Por mais que ambos sejam semelhantes, os comportamentos são diferentes. O “Carrinho” é referente aos últimos produtos que o cliente incluiu no carrinho de compras propriamente dito. Já o “Último carrinho” consiste no registro de data e hora em que o carrinho foi criado.

<div class="alert alert-warning">Para que o disparo da trigger seja realizado, os três filtros precisam estar obrigatoriamente preenchidos de acordo com o exemplo abaixo.
</div>

<blockquote><ui>1. No Admin VTEX, acesse <b>Configurações da loja</b> > <b>Storefront</b> > <b>Master Data.</b></ui>

<blockquote><ui>2. No Master Data, clique em <b>Aplicações</b> > <b>Estrutura de dados.</b></ui>

<blockquote><ui>2. Clique na aba <b>Trigger</b>.</ui>

<blockquote><ui>3. Clique no botão <b>Add New</b>.</ui>

<blockquote><ui>4. Insira o nome da trigger.</ui>

<blockquote><ui>5. Em <b>Data Entity</b>, selecione o valor <b>Cliente</b>.</ui>

<blockquote><ui>6. Em <b>Status</b>, marque <b>Enabled</b>.</ui>

<blockquote><ui>7. Em <b>Trigger Rule</b>, selecione <b>O valor de um atributo for alterado</b>.</ui>

<blockquote><ui>8. Em <b>Field</b>, selecione <b>Última sessão</b>.</ui>

<blockquote><ui>9. Clique em <b>Add filter</b> (5x) para habilitar os campos. Selecione e preencha conforme indicação e ilustração abaixo.  

<blockquote><blockquote><ui>-> Checkout - Diferente - Finalizado - and</ui>

<blockquote><blockquote><ui>-> Checkout - Não está nulo - and</ui>

<blockquote><blockquote><ui>-> Carrinho - Não está nulo - and</ui>

<blockquote><blockquote><ui>-> Último Carrinho - Não está nulo</ui> 

![Filter master data 2](https://images.ctfassets.net/alneenqid6w5/6aME0zp72kjwJiulRdoRNl/d6c7e5d4e84c5d2b8b870de4ee0db4bc/Filter_Master_Data.PNG)

<div class="alert alert-warning">
  Além dos filtros indicados acima, é recomendável inserir um outro filtro no seguinte formato: <code>Receives newsletter? - Igual a - True</code>. Isso garante conformidade com os <a href="https://help.vtex.com/pt/tutorial/data-subject-rights--6imchxTx09icupKMbzHVIM">direitos de titulares de dados</a>, já que somente clientes inscritos na newsletter receberão emails de carrinho abandonado. A inscrição na newsletter da sua loja pode ser gerenciada no momento do checkout ou na seção <a href="https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#profile">Minha Conta</a> da sua loja.
</div>

<blockquote><ui> 10. Clique na aba <b>Schedule</b> e selecione se o envio do email deve ocorrer em uma data específica ou em uma data dinâmica.</ui>

![Schedule date](https://images.ctfassets.net/alneenqid6w5/3SiaNvXMctzVtBzSjzsg3E/840f17bdc08c9703fdc972b2c8793668/Schedule_date.PNG)

<blockquote><ui>11. Na aba <b>If positive</b>:</ui>

<blockquote><blockquote><ui>a. Em Action, selecione <b>Send an email</b>.</ui>

<blockquote><blockquote><ui>b. Em <b>Recipient</b>, para realizar um teste do sistema, digite o email e clique em <b>Add Static email</b>.</ui>

<div class="alert alert-warning">Uma vez efetuada as demais configurações abaixo e verificado que recebeu a mensagem do carrinho abandonado em seu email, retorne a este passo, selecione a opção <strong>CL</strong>: <strong>Email</strong>, clique em <strong>Add Dynamic email</strong>, e depois em <strong>Save</strong>.
</div>

<blockquote><blockquote><ui>c. Em <b>Email body format</b>, selecione <b>Html</b>.</ui>

<blockquote><blockquote><ui>d. Em <b>Sender's name</b>, insira o nome de sua loja.</ui>

<blockquote><blockquote><ui>e. Em <b>Reply to</b>, preencha com o endereço de email no qual o cliente poderá responder caso tenha dúvidas.</ui>

<blockquote><blockquote><ui>f. Em <b>Content type</b>, selecione <b>URL content</b>.</ui>

<blockquote><blockquote><ui>g. Preencha o campo <b>Subject</b>.</ui>

<blockquote><blockquote><ui>h. Em <b>URL</b>, insira o endereço de sua loja com as pastas em que o layout do carrinho abandonado foi configurado, com a tag do carrinho depois (?refs={!carttag_SCORE}). Ex.: nomedaloja.com.br/CEM/Abandoned-Cart?refs={!carttag_SCORE}.</ui>

  ![PastasCarrinhoAbandonado](https://images.ctfassets.net/alneenqid6w5/4DSsVaeDvWmaaw2iwySCOy/b579eb818e0bcda140dba0ae96ecc90f/PastasCarrinhoAbandonado.png)

<div class="alert alert-warning">O endereço da URL deve ser o real da loja, e não a URL com vtexcommercestable.
</div>

<blockquote><blockquote><ui>i. Em <b>Add utm_source to all links whose value is</b>, preencha com "CEM", para facilitar a identificação de compras pelo carrinho abandonado.</ui>

<blockquote><blockquote><ui>j. Selecione a opção <b>Overwrite utm_source</b>.</ui>

<blockquote><blockquote><ui>k. Clique no botão <b>Save</b>.</ui>

<div class="alert alert-warning">A sessão de uma página expira em 30 minutos. Somente depois desse tempo consideramos o agendamento do disparo da trigger de Carrinho Abandonado. Ou seja, o tempo a ser considerado é o tempo da sessão + o agendamento da trigger.
</div>

![If positive tab](https://images.ctfassets.net/alneenqid6w5/2GDAJ2St3ayiKjcWoONDRc/d863f83956f876035351cd222a0482ad/If_positive_Tab.PNG)

### Configuração para lojas VTEX IO

Para realizar a configuração da funcionalidade carrinho abandonado nas lojas VTEX IO, siga os seguintes passos:

1. Instale o app [Abandoned Cart Service](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service) em sua loja.
2. Configure o modelo de email na [Central de Mensagens](#configurar-modelo-de-email-na-central-de-mensagens). As especificações do JSON estão disponíveis em [Message Center Information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#message-center-information).
3. Realize a [liberação do SPF](#liberacao-do-spf).
4. [Configure a trigger](#configuracao-da-trigger) da mesma forma que nas lojas Legado até no Step 10. A partir do Step 11 (aba __If positive__), siga as instruções disponíveis em [Trigger configuration information](https://developers.vtex.com/vtex-developer-docs/docs/vtex-abandoned-cart-service#trigger-configuration-information).

![If positive tab IO](https://images.ctfassets.net/alneenqid6w5/4kuuU7JySZQVklXS2jtfsp/ce32f7997824f648690edefe77ad03c0/If_positive_Tab_IO.PNG)

## Dúvidas frequentes

### Minha trigger está configurada corretamente porém os e-mails não estão chegando para o e-mail de teste. O que verificar?

Para garantir o fluxo correto dos disparos, devemos conferir dois detalhes:

1. A URL do template está funcionando?

 Para garantir que a URL está funcionando, você deve testa-la diretamente no browser. Substitua o valor `{!carttag_SCORE}` pelo ID de algum SKU ativo e disponível no site. Se a URL retornar algum erro, os disparos não acontecerão de maneira correta.

2. O RC (Request Capture) está funcionando?

 Para verificar se o RC está funcionando, atualize a home do site monitorando os requests pela ferramenta de desenvolvedor do browser (no chrome, o F12). Localize o request **rc.js** e verifique se o mesmo está retornando conteúdo. Se o retorno estiver vazio, entre em contato com a VTEX.

### Os dados capturados pelo RC estão atualizando o registro no Master Data?

Para verificar, acesse o site da sua loja e coloque um produto no carrinho. Clique em finalizar compra, insira o e-mail e confirme. Feche o navegador em qualquer parte da finalização de compra (desde o preenchimento de dados pessoais até formas de pagamentos). Aguarde 30 minutos, acesse o módulo de Master Data e veja se o e-mail utilizado entrou como novo registro, com os campos de &#8220;Dados da última navegação&#8221; foram atualizados.

Caso já tenha registro na loja, basta se logar ao acessar o site, incluir um produto no carrinho e fechar um navegador. Aguarde os 30 minutos, acesse o módulo do Master Data e verifique se os campos de **Dados da última navegação** foram atualizados.

### Posso ter mais de um template de abandono?

O cliente pode ter a quantidade de emails que achar necessária, só precisa que sejam informadas todas as URLs e a periodicidade de cada uma.

### Posso dar desconto nesse email? Como fazer isso?

Sim, é possível oferecer um desconto para o cliente que retornar à loja através desse email. Para isso será necessário criar um cupom de desconto que será informado por email ao cliente ou a criação de uma promoção por UTM direto no template.

### Consigo um relatório de quantas compras foram recuperadas através dessa funcionalidade?

Por meio da sua ferramenta de Analytics, você conseguirá monitorar essas recuperações de vendas. 

### Existe algum pré-requisito para configurar essa funcionalidade na minha loja?

Para configurar a funcionalidade de carrinho abandonado é necessário que a sua loja esteja em produção para que os campos do Master Data sejam atualizados. Essa funcionalidade não está disponível para ambientes de desenvolvimento.
