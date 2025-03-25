---
title: 'Configurar o adquirente Pagar.me para o inStore'
id: 1obqdkoH82yFWtaMbwcJKx
status: DRAFT
createdAt: 2020-06-28T15:32:06.737Z
updatedAt: 2021-02-23T15:39:04.382Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:34:21.331Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-pagar-me-acquirer-for-instore
locale: pt
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugPT: configurar-o-adquirente-pagar-me-para-o-instore
---

Para permitir transações por meio de máquinas de cartão usando o inStore, você precisa de um adquirente ou sub-adquirente que processe seus pagamentos.

__Pagar.me__ é um sub-adquirente homologado pelo inStore no Brasil.

>⚠️ Se você deseja usar o Pagar.me em um país diferente ou se deseja usar outro adquirente que atualmente não é certificado, precisará criar a integração com o aplicativo desse adquirente. Para fazer isso, consulte o artigo [Integrar o inStore a um novo adquirente de pagamento](https://help.vtex.com/pt/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod).

>ℹ️ Atualmente, o Pagar.me é suportado apenas por sistemas **Android**, com máquinas de cartão **Gertec MOBIPIN**.

Antes de instalar o aplicativo do Pagar.me, verifique se você concluiu a etapa anterior da configuração do módulo de Pagamentos. Se tiver concluído, siga as etapas abaixo para instalar e configurar o adquirente Pagar.me para o inStore.


## O que é o Pagar.me

O Pagar.me é um sub-adquirente homologado pelo inStore que aceita diversas marcas de cartões (Visa, Mastercard, Elo, Amex, Diners, Discover, JBC, Aura, Hipercard, Hiper, VR, Alelo, Sodexo, Ticket). Para mais informações, visite o [site da Pagar.me](https://pagar.me)


## Faça o download do aplicativo Pagar.me inStore

- **Android**: você pode baixar o aplicativo diretamente da Google Play Store ou por meio do seguinte link: https://play.google.com/store/apps/details?id=me.pagar.helix

## Como configurar o aplicativo no seu dispositivo

- **Android**: o fluxo de instalação do aplicativo é igual a qualquer outro aplicativo instalado em um smartphone ou tablet. Para configurá-lo, você precisará escolher a opção **Parear a máquina de cartão** e selecionar a máquina que deseja usar.

## Parear a máquina de cartão

Se você estiver usando uma máquina de cartão Bluetooth, será necessário parear a máquina com o dispositivo no qual o inStore e o aplicativo do adquirente estão sendo executados, permitindo que eles se comuniquem com a máquina.

O modo de pareamento pode variar dependendo da máquina, mas, em geral, é necessário pressionar o botão "0" (zero) para que a máquina entre no "modo de pareamento" e exiba a senha de pareamento. Em seguida, basta acessar as configurações de Bluetooth do dispositivo (tablet ou smartphone) e clicar no nome da máquina. O sistema deve solicitar a senha de pareamento.
