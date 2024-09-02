---
title: 'Configurar pagamentos para o inStore'
id: 5Fo72INzO06MCGoMm6u0uk
status: DRAFT
createdAt: 2018-04-26T22:17:23.559Z
updatedAt: 2020-08-03T19:57:13.887Z
publishedAt: 
firstPublishedAt: 2018-04-27T18:04:34.910Z
contentType: trackArticle
productTeam: Shopping
slug: configurar-pagamentos-para-o-instore
locale: pt
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugPT: instore-setup
---

A configuração de pagamentos no inStore depende de dois fatores:

- Configurar o módulo de Pagamentos 
- Instalar e configurar o aplicativo da adquirente
- Parear a máquina de cartão

Caso você ainda não tenha escolhido um adquirente para processar seus pagamentos, na etapa "__Instalar e configurar aplicativo da adquirente__" desse passo você poderá encontrar uma lista de adquirentes homologados.

## Configurar o módulo de Pagamentos para uso do inStore

1. Acesse o módulo de __Pagamentos__.
2. Clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __inStore__.
5. No campo __Acquirer__, escolha a adquirente que irá processar os pagamentos.
6. Em __Tipo de parcelamento__, escolha se os juros do parcelamento serão de responsabilidade da Administradora, banco ou da sua loja.
7. Preencha os campos específicos com as informações fornecidas pela adquirente escolhida no __passo 5__.

### Configurar Venda Direta Débito

Caso deseje receber seus pagamentos na modalidade __débito__, siga os passos abaixo:

1. Já dentro das __Configurações__ do módulo de Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __Venda Direta Debito__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Caso queira, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
6. Após realizar as configurações, clique em __Salvar__.

### Configurar Venda Direta Crédito

Caso deseje receber seus pagamentos na modalidade __crédito__, siga os passos abaixo:

1. Já dentro das __Configurações__ do módulo de Pagamentos, clique na aba __Condições de pagamento__.
2. Clique no botão __+__.
3. Clique no meio de pagamento __Venda Direta Crédito__.
4. Clique no botão __Status__, para ativar esta condição de pagamento.
5. Você pode escolher [configurar a condição de pagamento à vista ou parcelado](/pt/tutorial/condicoes-de-pagamento).
6. Caso queira, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
7. Após realizar as configurações, clique em __Salvar__.


## Instalar e configurar aplicativo da adquirente

Para transacionar recebendo pela máquina de cartão você precisa de um adquirente ou sub-adquirente para processar seus pagamentos.
Assumindo que você já finalizou o passo anterior configurando o módulo de Pagamentos com os dados referentes a sua adquirente, o próximo passo é __instalar o aplicativo da adquirente no mesmo dispositivo em que você vai utilizar o inStore__.

### Cappta

A Cappta é uma sub-adquirente homologada pelo inStore e que pode transacionar por várias adquirentes (Stone, Cielo, Rede,...). Para mais informações acesse: http://www.cappta.com.br

Atualmente a integração funciona para os sistemas __Android__ e __Windows__.
Caso você tenha escolhido a Cappta para processar seus pagamentos, o processo de instalação e configuração é o seguinte:

#### Download da app Cappta Pague
- __Android__: Você pode baixar a app buscando diretamente na Google Play Store ou através do link https://play.google.com/store/apps/details?id=com.cappta.gpandroid

- __Windows__: Você pode baixar o executável __CapptaGpPlus__ no link https://github.com/Cappta/Homologa/tree/master/Instalador

#### Configuração da app no dispositivo
- __Android__: O fluxo de configuração da app é o mesmo de qualquer outro aplicativo instalado em um smartphone ou tablet, basta abrir o aplicativo e inserir as informações de acesso (CNPJ, PDV, Senha). Caso você não saiba alguma dessas informações, entre em contato com a Cappta.

- __Windows__: Para configurar basta executar o arquivo .exe e preencher com as informações de acesso (CNPJ, PDV, Senha). Caso você não saiba alguma dessas informações, entre em contato com a Cappta.

> __IMPORTANTE__: é preciso garantir junto à Cappta que a opção __checkout web__ está habilitada na sua conta.

### Cielo LIO

A Cielo LIO é uma máquina de cartão digital da Cielo que está homologada pelo inStore e pode ser utilizada para transacionar suas vendas. Para mais informações acesse: https://www.cielo.com.br/comprar-maquina-de-cartao/


#### Detalhes de configuração

Para ter o inStore disponível em sua Cielo LIO é necessário abrir um chamado na Cielo solicitando a associação de sua máquina à loja privada da VTEX e o envio da app `UriAppClient`, passando o número de seu Estabelecimento Comercial (EC) e número lógico da LIO.

O fluxo de configuração no VTEX Pagamento é o padrão como já descrito acima, com atenção aos seguintes detalhes:

1- Os campos de `Access Token` e `Client ID` devem ser preenchidos com dados que você consegue diretamente com a VTEX.

2- Atenção para o `Tipo de parcelamento` selecionado, ele deve estar de acordo com o configurado em sua Cielo LIO. Caso não saiba qual opção foi contratada, basta simular uma venda na LIO (no sistema padrão da máquina, fora do inStore) e selecionar a opção de Crédito que serão listadas as opções de parcelamento disponíveis (Administradora, Lojista ou Banco) na sua máquina. É preciso garantir que a opção ativa na máquina seja a mesma configurada no VTEX Pagamentos.

### Pagar.me

A Pagar.me é uma sub-adquirente homologada pelo inStore e que aceita diversas bandeiras de cartão (Visa, Mastercard, Elo, Amex, Diners, Discover, JBC, Aura, Hipercard, Hiper, VR, Alelo, Sodexo, Ticket). Para mais informações acesse: https://pagar.me

Atualmente a integração funciona para o sistema __Android__.
Caso você tenha escolhido a Pagar.me para processar seus pagamentos, o processo de instalação e configuração é o seguinte:

#### Download da app Pagar.me inStore
- __Android__: Você pode baixar a app buscando diretamente na Google Play Store ou através do link https://play.google.com/store/apps/details?id=me.pagar.helix

#### Configuração da app no dispositivo
- __Android__: O fluxo de instalação da app é o mesmo de qualquer outro aplicativo instalado em um smartphone ou tablet. Para configurar, basta abrir seguir os passos de __Parear a máquina de cartão__ disponível mais abaixo nesse tutorial, e selecionar a máquina que deseja utilizar.

### Stone

A Stone é uma adquirente homologada pelo inStore que você pode utilizar para transacionar suas vendas. Para mais informações acesse: https://www.stone.com.br

Atualmente a integração funciona para o sistema __Android__.

#### Download da app Stone/Pagar.me

- __observação__: Grupo Stone tem a solução __pagar.me__ para pagamento móvel, com isso, para o inStore o lojista irá usar o app da pagar.me __(citado logo acima)__ para transacionar vendas. Qualquer dúvida, solicite apoio ao time comercial e suporte do Grupo Stone.

### SiTef

A SiTef é uma sub-adquirente homologada pelo inStore e que pode transacionar por várias adquirentes (Stone, Cielo, Rede,...).

Atualmente a integração funciona para os sistemas __Android__ e __iOS__.
Caso você tenha escolhido a SiTef para processar seus pagamentos, o processo de instalação e configuração é o seguinte:

#### Download da app VTEX SiTef
- __Android__: Você pode baixar a app buscando diretamente na Google Play Store ou através do link https://play.google.com/store/apps/details?id=com.vtex.sitef

- __iOS__: Você pode baixar a app buscando diretamente na App Store da Apple ou através do link https://itunes.apple.com/us/app/vtex-sitef/id1214909778?mt=8

#### Configuração da app no dispositivo

A instalação da app tanto no __Android__ quanto no __iOS__ é a mesma que a de qualquer outro aplicativo instalado em um smartphone ou tablet, porém a configuração depende de um passo extra além de abrir o aplicativo e inserir as informações de acesso (Store Id e Operator Id).

Antes é necessário definir qual o servidor da SiTef você deseja utilizar, atualmente existem duas opções:

- GSURF
- Servidor Local

##### GSURF
A GSURF é uma empresa que oferece um servidor SiTef via VPN. Isso facilita muito a configuração de pagamentos utilizando SiTef, já que o cliente passa a não precisar ter toda uma infraestrutura dedicada a isso. Portanto, se você quer receber transações utilizando esse sistema, essa é a opção mais recomendada.

Ao configurar o conector SiTef, disponível no VTEX Pagamentos, você vai precisar especificar "__GSURF.SSL__" como protocolo para que a app VTEX SiTef envie as transações para o servidor remoto.

<div class="alert alert-danger">
<strong>IMPORTANTE</strong>: ao utilizar a GSURF como protocolo, certifique-se de que sua rede permite os seguintes acessos:
<p>
  <div><strong>Liberações no Firewall (apenas tráfego de saída):</strong></div>
  <div><strong>Range de IP’s:</strong> 187.103.176.0/20 189.85.171.160/28 18.231.194.64/26</div>
  <div><strong>Portas:</strong> UDP-443; TCP-443; TCP-55844; TCP-55845</div>
  <div><strong>DNS LOCAL:</strong> UDP-53 (resolução de nomes em gsurfnet.com)</div>
</p>
</div>

##### Servidor Local
Também é possível utilizar um servidor local SiTef para receber as transações, montando uma infraestrutura dedicada a isso. Nesse caso é necessário entrar em contato com a SiTef para definir os requisitos dessa configuração local.

No conector da SiTef no VTEX Pagamentos você precisará especificar o IP desse servidor local para que a app VTEX SiTef envie as transações pra ele.


## Parear a máquina de cartão

Caso você esteja utilizando uma máquina de cartão bluetooth, será necessário realizar o pareamento da máquina com o dispositivo em que o inStore e a app da adquirente estão rodando, permitindo que eles se comuniquem com a maquininha.

O modo de pareamento pode variar dependendo da maquininha, porém de forma geral é necessário __pressionar o botão "0" (zero)__ para que a máquina entre no "__modo de pareamento__" e exiba a __senha de pareamento__. Depois basta acessar as configurações de bluetooth do dispositivo (tablet ou smartphone) e clicar no nome da maquininha que ele pedirá a senha de pareamento.
