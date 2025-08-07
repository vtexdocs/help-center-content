---
title: 'Configurar o adquirente SiTef para o inStore'
id: 1Vr97VGNNWpaoyXe0rKV8U
status: DRAFT
createdAt: 2020-06-28T15:39:28.422Z
updatedAt: 2021-02-23T15:47:12.481Z
publishedAt: 
firstPublishedAt: 2020-06-28T15:42:37.386Z
contentType: trackArticle
productTeam: Shopping
slugEN: setting-up-the-sitef-acquirer-for-instore
locale: pt
trackId: 43B4Nr7uZva5UdwWEt3PEy
trackSlugEN: configurar-o-adquirente-sitef-para-o-instore
---

<div class="alert alert-warning">
É importante ressaltar que a integração com a SiTef é uma solução homologada, mas ainda não testada em larga escala.
</div>

Para permitir transações por meio de máquinas de cartão usando o inStore, você precisa de um adquirente ou sub-adquirente que processe seus pagamentos.

A __SiTef__ é um sub-adquirente homologado pelo inStore no Brasil.

<div class="alert alert-warning">
Se você deseja usar o SiTef em um país diferente ou se deseja usar outro adquirente que atualmente não é certificado, precisará criar a integração com o aplicativo desse adquirente. Para fazer isso, consulte o artigo <a href="https://help.vtex.com/pt/tracks/instore-integration--6NTqymtXmL9cNy8w1ouAod">Integrar o inStore a um novo adquirente de pagamento</a>.
</div>

<div class="alert alert-info">
Atualmente, a SiTef é suportada por sistemas <b>Android</b> e <b>iOS</b>, com máquinas de cartão Ingenico ou qualquer outra máquina certificada pela SiTef.
</div>

Antes de instalar o aplicativo da SiTef, certifique-se de que você concluiu a etapa anterior da configuração do módulo de Pagamentos.

## O que é a SiTef

A SiTef é um sub-adquirente homologado pelo inStore que pode realizar transações por meio de vários adquirentes (Stone, Cielo, Rede etc.)

## Baixe o aplicativo VTEX SiTef

- **Android**: você pode baixar o aplicativo diretamente da Google Play Store ou por meio do seguinte link: https://play.google.com/store/apps/details?id=com.vtex.sitef
- **iOS**: você pode baixar o aplicativo diretamente da Apple Store ou por meio do seguinte link: https://itunes.apple.com/us/app/vtex-sitef/id1214909778?mt=8

## Como configurar o aplicativo no seu dispositivo

A instalação do aplicativo no Android e no iOS é igual à de qualquer outro aplicativo instalado em um smartphone ou tablet. No entanto, a configuração depende de uma etapa extra além de abrir o aplicativo e inserir as informações de acesso (`Store Id` e `Operator Id`).

Antes de inserir essas informações, você precisa definir qual servidor SiTef deseja usar. Atualmente, existem duas opções:
- GSURF
- Servidor local

### GSURF

A GSURF é uma empresa que oferece um servidor SiTef via VPN. Isso facilita muito a configuração de pagamentos usando a SiTef, já que o cliente não precisa de infraestrutura dedicada. Portanto, se você deseja receber transações usando esse sistema, esta é a opção mais recomendada.

Ao configurar o conector SiTef, disponível no VTEX Payments, você precisará especificar `GSURF.SSL` como o protocolo para o aplicativo VTEX SiTef enviar transações ao servidor remoto.

<div class="alert alert-warning">
<strong>Importante:</strong>: ao usar o GSURF como um protocolo, verifique se sua rede permite os seguintes acessos:<br>
<b>Liberações de firewall (somente tráfego de saída):</b>
<ol>
<li><b>Intervalo de IPs:</b> 187.103.176.0/20 189.85.171.160/28 18.231.194.64/26</li>
<li><b>Portas:</b> UDP-443; TCP-443; TCP-55844; TCP-55845</li>
<li><b>DNS LOCAL: </b> UDP-53 (resolução de nomes em gsurfnet.com)</li>
</ol>
</div>

### Servidor local

Também é possível usar um servidor SiTef local para receber transações, configurando uma infraestrutura dedicada a isso. Nesse caso, é necessário entrar em contato com a SiTef para definir os requisitos para essa configuração local.

No conector SiTef no VTEX Payments, você precisará especificar o IP desse servidor local para que o aplicativo VTEX SiTef possa enviar transações para ele.

## Parear a máquina de cartões

Se você estiver usando uma máquina de cartão Bluetooth, será necessário parear a máquina com o dispositivo no qual o inStore e o aplicativo do comprador estão sendo executados, permitindo que eles se comuniquem com a máquina.

O modo de pareamento pode variar dependendo da máquina, mas, em geral, é necessário pressionar o botão "0" (zero) para que a máquina entre no "modo de pareamento" e exiba a senha de pareamento. Em seguida, basta acessar as configurações de Bluetooth do dispositivo (tablet ou smartphone) e clicar no nome da máquina. O sistema deve solicitar a senha de pareamento.
