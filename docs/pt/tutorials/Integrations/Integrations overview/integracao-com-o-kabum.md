---
title: 'Integração com o KaBuM!'
id: DM0uQeFIXOk7CY9oAPrf0
status: PUBLISHED
createdAt: 2022-11-11T16:52:59.397Z
updatedAt: 2022-11-18T20:02:45.329Z
publishedAt: 2022-11-18T20:02:45.329Z
firstPublishedAt: 2022-11-11T18:05:29.647Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: kabum-integration
locale: pt
legacySlug: integracao-com-o-kabum
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

O [KaBuM!](https://www.kabum.com.br/) é o maior ecommerce do segmento de tecnologia na América Latina e faz parte do grupo Magazine Luiza. 

Por meio da integração da Plataforma VTEX com o KaBuM!, você pode aumentar a visibilidade dos seus produtos e alavancar suas vendas. São mais de 20 mil produtos no catálogo do marketplace e 8 milhões de usuários cadastrados.

Este artigo orienta como configurar a integração com o Kabum!. Dividimos esse artigo em 3 etapas:

1. [Cadastro na plataforma do KaBuM!](#cadastro-na-plataforma-do-kabum)
2. [Configurações na plataforma VTEX](#configuracoes-na-plataforma-vtex)
3. [Envio de informações para o KaBuM!](#envio-de-informacoes-para-o-kabum)

## Cadastro na plataforma do KaBuM!

Para integrar a sua loja VTEX com o KaBuM!, antes é necessário ter um cadastro ativo como seller do KaBuM!. Caso não possua, realize  o cadastro no [formulário de interesse](https://docs.google.com/forms/d/17AkLuoggIdNQX-9nWPzYO2fsP7usWehQCnS53CDIK9s/edit). 

Em seguida, o time Kabum entrará em contato para tratativas comerciais podendo, eventualmente, levar à contratação e criação da conta. Caso queira mais informações sobre o marketplace, acesse o [Portal para parceiros](https://kabum.com.br/hotsite/sejaparceiro-off/).

Feito isso, você pode dar continuidade às etapas da integração.

## Configurações na plataforma VTEX

Para integrar a sua loja VTEX com o KaBuM!, é necessário realizar as seguintes etapas:

1. [Definir política comercial](#definir-politica-comercial-opcional)
2. [Criar nova chave de acesso e segredo](#criar-nova-chave-de-acesso-e-segredo)
3. [Criar afiliado](#criar-afiliado)

### Definir política comercial (opcional)

A [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) é o que determina o sortimento de produtos, preços e estratégia de envio da sua loja VTEX em um canal de venda. Se você deseja que as mesmas configurações da sua loja sejam utilizadas para seus produtos no KaBuM!, não é necessário [criar uma política comercial nova](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE), pois uma mesma política comercial pode ser usada para diferentes canais de venda.

Caso seja do seu interesse ter configurações específicas para vender no KaBuM!, você pode [configurar uma política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace). Não existe cobrança para a contratação de políticas comerciais adicionais para integrar sua loja VTEX com [conectores nativos ou conectores certificados](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex).

### Criar nova chave de acesso e segredo

A chave de integração, chamada de chave de acesso, é o que possibilita o fluxo de envio e atualização de informações entre sua loja VTEX e o KaBuM!.

Para configurar uma nova chave, siga os passos abaixo:

1. No Admin VTEX, no módulo *CONFIGURAÇÕES DA CONTA*, clique em **Gerenciamento da conta**.
2. Clique em **Conta**.
3. Em Segurança, clique em `Gerar chave de acesso e segredo`.
4. Preencha com um nome para o novo par de chave de acesso e segredo. 
5. Clique em `Gerar novo segredo`.

Aguarde a chave porque ela será utilizada na etapa [Envio de informações para o KaBuM!](#envio-de-informacoes-para-o-kabum)

>⚠️ A chave de acesso gerada só aparece para o usuário esta única vez, não é possível recuperar a informação pelo sistema posteriormente. Portanto, tenha a certeza de guardá-lo em um local seguro.

### Criar afiliado

O [afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) é o identificador de uma loja VTEX em um marketplace, sendo necessário que o seller tenha um ID do afiliado diferente para cada marketplace onde venda seus produtos. Isso significa que, para integrar com o KaBuM!, é preciso [configurar um afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187) exclusivo. Para criar um novo afiliado, siga os passos abaixo:

1. No Admin VTEX, no módulo *PEDIDOS*, clique em **Gerenciamento de pedidos**.
2. Clique em **Configurações**.
3. No topo da página, selecione a opção **Afiliados**.
4. Clique em `+ Novo afiliado`.
5. Preencha os campos da tela, descritos abaixo:
   * **Nome:** designação do novo afiliado.
   * **ID:** código identificador do afiliado, deve ser composto de três consoantes, sejam elas repetidas ou não. Vogais não são aceitas. A sugestão para integrar com o KaBuM! é usar `KBM`.
   * **Política Comercial:** número da política comercial que definirá o sortimento de catálogo, preço e estratégia de envio dos itens utilizados na integração com o KaBuM!.
   * **E-mail de Follow Up:** endereço eletrônico que receberá notificações sobre a integração.
   * **Endpoint de Search:** URL da aplicação que receberá notificações de produtos, preço, estoque, dentre outras. Você será informado sobre este dado pelo próprio parceiro.
   * **Versão do Endpoint de Search:** só existe a opção padrão 1.x.x.
   * Deixe desmarcada a opção <i class="fas fa-toggle-on"></i> `Usar meu meio de pagamento`.
6. Clique em `Salvar`.

## Envio de informações para o KaBuM!

>ℹ️ O processo de onboarding com conectores certificados é responsabilidade dos próprios parceiros.

Após concluir as configurações na plataforma VTEX, para dar prosseguimento a integração com o KaBuM!, você precisará possuir uma **chave de API da KaBuM!**. Caso não possua, saiba como obtê-la lendo o artigo da KaBuM! [Geração de chave de API](https://kabum.movidesk.com/kb/article/269610/geracao-de-chave-de-api).

A chave será utilizada para configuração no KaBuM!. Além desta chave, será necessário enviar para o marketplace as informações abaixo, relativas ao seu ambiente VTEX:

* **Nome da conta:** identificador da sua empresa no sistema da VTEX. Para encontrá-lo, acesse o Admin no módulo *CONFIGURAÇÕES DA CONTA > Gerenciamento da conta > Conta > Dados da empresa*.
* **Dados de autenticação do sistema:** appKey e appToken definidos na etapa [Criar nova chave de acesso e segredo](#criar-nova-chave-de-acesso-e-segredo).
* **ID do afiliado:** identificador do afiliado dedicado ao KaBuM!, configurado na etapa [Criar afiliado](#criar-afiliado).
* **Política comercial:** número da política comercial determinada na etapa [Definir política comercial](#definir-politica-comercial).
* **ID do Seller:** se você estiver integrando a partir da sua conta principal, o valor a ser informado é `1`. Caso sua loja possua contas franquia e você esteja realizando a integração a partir de uma delas, é necessário enviar o `ID do Seller` dessa conta. Para encontrá-lo, acesse o Admin VTEX, no módulo *MARKETPLACE > Sellers > Gerenciamento > ID do Seller*.

Uma vez que você tenha reunido esses dados, você deverá enviá-los no portal da KaBuM!, e a integração será concluída pelo parceiro. 

O KaBuM! também disponibiliza documentação sobre a integração  com a VTEX. Para consultá-la, basta acessar o [Guia de Integração com a VTEX](https://kabum.movidesk.com/kb/article/295830/integracao-com).

Para verificar se seus produtos foram enviados para o marketplace, entre em contato com o [Suporte do KaBum!](https://www.kabum.com.br/cgi-local/site/atendimento/chat/chat.cgi).

### Condições para o envio de produtos o KaBuM!

O KaBuM! possui algumas [especificações](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) obrigatórias para o envio de produtos. Por isso, é necessário verificar se os itens a serem integrados atendem às seguintes exigências:

* Campo `EAN` no cadastro de SKU preenchido. Caso seja um kit, pode-se gerar um EAN fictício usando o padrão de `KBM + ID LOJA + SKU` do item tendo que conter exatamente 13 dígitos.
* Informações sobre Garantia.
* Peso em gramas.
* Dimensões como profundidade, largura, altura devem ser em centímetros e possuir valores inteiros.
* Imagens devem ser nítidas em fundo branco, sem logotipos, sem marca d'água.

Em caso de erros no envio dos produtos para o KaBuM!, leia o artigo [Entendendo o rejeito de seus produtos e como corrigir cada um deles](https://kabum.movidesk.com/kb/article/279827/entendendo-o-rejeito-de-seus-produtos-e-como-corrigir-cada-um-de).

