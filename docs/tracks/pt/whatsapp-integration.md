---
title: 'Integração com o WhatsApp'
id: 33sM0SVrwffWhAhAgiGrZb
status: DRAFT
createdAt: 2022-08-23T15:11:28.551Z
updatedAt: 2024-01-05T17:14:09.083Z
publishedAt: 
firstPublishedAt: 2022-08-23T17:47:05.529Z
contentType: trackArticle
productTeam: Shopping
slug: integracao-com-o-whatsapp
locale: pt
trackId: 5UZ9BdvwwtZm2t9QTXcbZs
trackSlugPT: conversational-commerce
---

Atualmente, o Conversational Commerce VTEX se integra apenas ao aplicativo de mensagens WhatsApp. Para começar a utilizá-lo, é necessário criar uma integração com o aplicativo de mensagens. A loja necessita de um número de telefone centralizado para interagir com seus clientes, disponível apenas para uma conta Business. Será necessário também criar uma conta [WhatsApp Business](https://business.whatsapp.com/). 

Recomendamos que a sua loja tenha um número de telefone do WhatsApp Business dedicado à venda, pois é possível ter mais de um número associado a uma conta, dedicado ao relacionamento com o cliente, por exemplo. Caso a sua loja não tenha ainda uma conta WhatsApp Business ou tenha mas esteja sendo gerenciada por outro parceiro, será necessária a criação de uma nova conta, o que pode ser feito pela [própria VTEX em nome da loja (OBO)](#criacao-pela-vtex) ou [pelo cliente](#criacao-pelo-cliente-via-admin-vtex). 

Para criar uma conta WhatsApp Business é necessário:

* Ter uma conta no [Gerenciador de Negócios](https://pt-br.facebook.com/business/tools/business-manager), plataforma que gerencia todas as as atividades de publicidade e marketing no Facebook. Essa informação é obrigatória.
* Criar um número de telefone que será associado ao WhatsApp Business e utilizado pelos clientes que quiserem entrar em contato via WhatsApp. Essa informação é obrigatória. Esse número deverá respeitar os critérios abaixo: 
    * Ter código de país e de área, como um telefone fixo ou celular.
    * Pertencer a empresa.
    * Ser habilitado para receber chamadas de voz ou SMS.
    * Não ser um código curto, como números usados para contato por SMS com poucos números.
    * Não tenha sido usado na Plataforma do WhatsApp Business anteriormente.

## Criação pela VTEX

Para que a VTEX realize a integração com o WhatsApp Business em nome da loja, além das informações descritas acima, é necessário enviar os seguintes dados [em um ticket de suporte](https://support.vtex.com/hc/pt-br/requests):

* Identificação da sua empresa no [Gerenciador de Negócios](https://pt-br.facebook.com/business/tools/business-manager) que será associada à conta do WhatsApp Business. Para encontrar a identificação, siga os passos descritos neste [artigo](https://www.facebook.com/business/help/1181250022022158?id=180505742745347). O administrador deste perfil precisará estar disponível para fazer as aprovações de criação de WhatsApp Business que chegarão via Gerenciador de Negócios. O processo costuma demorar em média 3 dias úteis. 
* Nome do WhatsApp Business e do perfil que será exibido para os clientes e do logo a ser utilizado.
* Número de telefone a ser usado.

Além de enviar essas informações, o administrador deve autorizar via [Gerenciador de Negócios](https://pt-br.facebook.com/business/tools/business-manager) os seguintes dados:

* Permissão para VTEX enviar mensagens em nome da empresa.
* Nome que será utilizado para a conta e que aparecerá na conversa com o cliente.
* Número de telefone.

Recomendamos também [verificar a sua loja junto à Meta](https://www.facebook.com/business/help/1095661473946872?id=180505742745347). Essa etapa é opcional para a integração, mas é obrigatória caso:

* Você deseje iniciar conversas, como aviso de rastreio de produtos, para seus clientes pelo WhatsApp.
* Você deseje que sua conta comercial seja [oficial](https://developers.facebook.com/micro_site/url/?click_from_context_menu=true&country=BR&destination=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Foverview%2Fbusiness-accounts%2F%3Ftranslation%23official-business-account&event_type=click&last_nav_impression_id=0txQ0CoZfJfxi7cez&max_percent_page_viewed=44&max_viewport_height_px=869&max_viewport_width_px=1794&orig_http_referrer=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fwhatsapp%2Foverview%2Fbusiness-accounts%2F%3Ftranslation&orig_request_uri=https%3A%2F%2Fdevelopers.facebook.com%2Fajax%2Fdocs%2Fnav%2F%3Ftranslation%26path1%3Dwhatsapp%26path2%3Doverview%26path3%3Dbusiness-accounts&region=latam&scrolled=true&session_id=2nAsnwfEzmFrzLZoM&site=developers), que permite exibir o nome da loja em vez do número de telefone na lista e com o selo <img src="//images.ctfassets.net/alneenqid6w5/4DNjQiVYTI24Wjt3t9CRfG/8e1ec0ab6bb167b4ff0de2547243354f/101835379_284952909300321_643050663994982400_n.png" alt="selo oficial whatsapp" width="25"/>.

## Criação pelo cliente via Admin VTEX

Caso a criação do WhatsApp Business necessite ser feita pelo Admin VTEX, contate o suporte da VTEX para instalar o aplicativo do Conversational Commerce VTEX na conta da sua loja. Para isso será preciso:

* Confirmar a conta a ser usada para o canal.
* Autorizar a instalação do aplicativo.

Após a instalação do aplicativo, a VTEX compartilhará a URL do Admin do Conversational Commerce VTEX para criação do WhatsApp Business. Para realizar a configuração, é importante ter disponível as seguintes informações :

* Conta do [Gerenciador de Negócios](https://pt-br.facebook.com/business/tools/business-manager) associado ao WhatsApp Business.
* Número de telefone criado para o Conversational Commerce VTEX. É preciso que o número esteja em um celular para a validação.

Com essas informações, siga os passos abaixo:

1. Acesse o Admin VTEX via URL enviada pelo time de suporte. Você será encaminhado para a tela abaixo:
![Track 101 - Conversational Commerce 1 - PT](//images.ctfassets.net/alneenqid6w5/Zg2VTR41pSMleFi6bpcLT/cf9fb66691f9ec8f18a184099c70f3bf/Screenshot_2022-10-04_at_18-05-46_Track_101_-_Conversational_Commerce.png)
2. Clique no botão `Configurar conta WhatsApp Business`.
3. Uma janela do Facebook será aberta para configuração. Efetue o login com o perfil de Administração do Business Manager desejado.
4. Selecione a opção `Criar uma conta WhatsApp Business`.
5. Insira o nome da conta que será exibido como nome do perfil no WhatsApp.
6. Selecione a categoria e cadastre a descrição da conta. 
![Track 101 - Conversational Commerce 2 - PT](//images.ctfassets.net/alneenqid6w5/1DbUwuYgXSleNYBzDnS72n/e935883f195905d78f9c2209b1cc324b/Screenshot_2022-10-04_at_18-07-00_Track_101_-_Conversational_Commerce.png)
7. Verifique o número de telefone a ser associado à conta por meio do código enviado para o telefone.
8. Notifique o suporte da VTEX para finalizar a configuração.

Uma vez que a configuração seja concluída, o alerta abaixo será exibido no Admin. 

![Track 101 - Conversational Commerce 3 - PT](//images.ctfassets.net/alneenqid6w5/3RkQDfGaL3r5KV7j8uTXRH/6f32bb6973f7762a6eb06f12cd596e32/Screenshot_2022-10-04_at_18-07-47_Track_101_-_Conversational_Commerce.png)
