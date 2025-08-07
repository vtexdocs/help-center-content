---
title: 'Configurar o adquirente Cappta para o inStore'
id: 5FuKPBLD27Izx6Ou40CI6F
status: DRAFT
createdAt: 2020-06-28T15:24:26.367Z
updatedAt: 2021-02-23T15:46:54.731Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:26:52.495Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-cappta-acquirer-for-instore
locale: pt
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: configurar-o-adquirente-cappta-para-o-instore
---

Para permitir transações por meio de máquinas de cartão usando o inStore, você precisa de um adquirente ou sub-adquirente que processe seus pagamentos.

A __Cappta__ é um sub-adquirente homologado pelo inStore no Brasil.

<div class="alert alert-warning">
Se você deseja usar a Cappta em um país diferente ou se deseja usar outro adquirente que não está homologado atualmente, precisará criar a integração com o aplicativo desse adquirente. Para fazer isso, consulte o artigo <a href="https://help.vtex.com/pt/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod"> Integrar o inStore a um novo adquirente de pagamento</a>.
</div>

<div class="alert alert-info">
Atualmente, a Cappta é suportada pelas seguintes plataformas e dispositivos:
<ol>
<li>Windows 8 ou superior, com máquina de cartão Ingenico USB</li>
<li>Android</li>
</ol>
</div>

Antes de instalar o aplicativo da Cappta, verifique se você concluiu a etapa anterior de configuração do módulo de Pagamentos. Se tiver concluído essa etapa, siga os passos abaixo para instalar e configurar o adquirente Cappta para o inStore.


## O que é Cappta

A Cappta é um sub-adquirente homologado pelo inStore que pode realizar transações por meio de vários adquirentes (Stone, Cielo, Rede etc.) Para obter mais informações, visite o [site da Cappta](http://www.cappta.com.br).

Atualmente, a integração funciona para sistemas Android e Windows. Se você escolheu a Cappta para processar seus pagamentos, o processo de instalação e configuração é o seguinte:


## Faça o download do aplicativo Cappta Pague

- **Android**: você pode baixar o aplicativo diretamente da Google Play Store ou por meio do seguinte link: https://play.google.com/store/apps/details?id=com.cappta.gpandroid
- **Windows**: é possível baixar o executável **CapptaGpPlus** no seguinte link: https://github.com/Cappta/Homologa/tree/master/Instalador

## Como configurar o aplicativo no seu dispositivo
- **Android**: o fluxo de configuração do aplicativo é igual a qualquer outro aplicativo instalado em um smartphone ou tablet. Abra o aplicativo e inserir as informações de acesso (CNPJ, POS, Senha). Se você não souber essas informações, entre em contato com a Cappta.
- **Windows**: Para configurar, execute o arquivo .exe e preencher as informações de acesso (CNPJ, POS, Senha). Se você não souber essas informações, entre em contato com a Cappta.

<div class="alert alert-warning">
Você deve se certificar de que a opção <strong>web checkout</strong> esteja ativada na sua conta Cappta.
</div>

## Parear a máquina de cartões

Se você estiver usando uma máquina de cartão Bluetooth, será necessário parear a máquina com o dispositivo no qual o inStore e o aplicativo do comprador estão sendo executados, para permitir que eles se comuniquem com a máquina.

O modo de pareamento pode variar dependendo da máquina, mas, em geral, é necessário pressionar o botão "0" (zero) para que a máquina entre no "modo de pareamento" e exiba a senha de pareamento. Em seguida, basta acessar as configurações de Bluetooth do dispositivo (tablet ou smartphone) e clicar no nome da máquina. O sistema deve solicitar a senha de pareamento.
