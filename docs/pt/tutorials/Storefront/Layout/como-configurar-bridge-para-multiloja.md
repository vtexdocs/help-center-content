---
title: 'Configurar marketplace para multiloja'
id: frequentlyAskedQuestions_672
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.416Z
updatedAt: 2023-03-29T00:45:09.386Z
publishedAt: 2023-03-29T00:45:09.386Z
firstPublishedAt: 2019-01-24T21:55:19.554Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: how-to-set-up-the-marketplace-for-multistores
locale: pt
legacySlug: como-configurar-bridge-para-multiloja
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

O Integrações é o módulo da VTEX que realiza a integração entre as suas lojas e marketplaces externos. Ele é um módulo que existe de forma independente para cada loja do seu account. 

Num cenário de __multilojas__, este conceito é de fundamental importância. Exemplificando, se o seu account possui três lojas, isso significa que cada loja pode ter o seu próprio Integrações. Dessa maneira, é necessário realizar algumas configurações para que o Integrações leia corretamente as informações de cada loja que existe no seu account. 

Para que seus produtos sejam enviados para o marketplace, é necessário que a política comercial usada esteja associada ao website binding. Siga os passos abaixo para realizar a configuração corretamente:

1. No admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta __CMS__ e depois em __Sites and Channels__.
3. Clique no Website desejado.
4. [Associe um account name e as políticas comerciais desejadas](/pt/tutorial/vincular-um-account-name-a-um-website-binding) a este website.

As políticas comerciais configuradas nos passos acima estarão disponíveis para o Integrações desta loja específica. Agora, basta acessar o Integrações com o account name desta loja (`https://{account-name}.vtexcommercestable.com.br/admin/bridge/`) e [realizar as configurações](/pt/tutorial/integrando-com-marketplace).
