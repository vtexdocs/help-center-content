---
title: 'Habilitar verificação em duas etapas (2FA)'
id: 1ccQYubR9DvRJ08RgO8JW8
status: PUBLISHED
createdAt: 2020-01-07T21:12:36.958Z
updatedAt: 2024-08-22T14:02:07.053Z
publishedAt: 2024-08-22T14:02:07.053Z
firstPublishedAt: 2020-01-13T14:33:33.691Z
contentType: trackArticle
productTeam: Identity
slugEN: enabling-2-factor-authentication-login
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
---

Com a verificação em duas etapas (também conhecida como autenticação de dois fatores ou 2FA) você adiciona uma camada a mais de segurança à sua conta, para protegê-la caso sua senha seja revelada para terceiros.

Depois de habilitar o 2FA, você fará login na sua loja usando:

- Sua senha (*algo que você sabe*)
- Seu telefone celular (*algo que você possui*)

Seu celular será usado para gerar uma chave de curta validade no instante do login. Assim, torna-se quase impossível que alguém não autorizado acesse sua loja com seus dados.

## Como habilitar o 2FA

Sempre solicitamos a configuração da verificação em duas etapas, caso esta não esteja habilitada, quando um usuário faz login usando e-mail e senha.

Há duas opções de autenticação:

- __App Google__ (chave gerada por aplicativo de autenticação)
- __Mensagem SMS__ (chave enviada por mensagem de texto)

![2FA - Select - PT](https://images.ctfassets.net/alneenqid6w5/3WRZKKU8LuW00UkeoUoIEY/d7db18f01bf30d5c5838f27b24f08e32/2FA_-_Select_-_PT.png)

> ⚠️ Recomendamos o uso de [aplicativo de autenticação](#habilitar-o-2fa-por-aplicativo), para que falhas na sua operadora de telefonia não inviabilizem seu login. Pelo aplicativo, a chave de acesso estará sempre disponível para uso.

> ℹ️ Como algumas empresas restringem o uso de celular por operadores de televendas, usuários com o [perfil de acesso de televendas](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#call-center-operator) não são obrigados a habilitar 2FA quando fazem login usando e-mail e senha.

## Habilitar o 2FA por aplicativo

Para usar uma chave gerada por aplicativo de autenticação:

1. Baixe o aplicativo **Google Autenticator** ([App Store](https://itunes.apple.com/br/app/google-authenticator/id388497605?mt=8) / [Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR)). 

  ![2FA - App Download - PT](https://images.ctfassets.net/alneenqid6w5/icTTRRH1WH7FiiH0gLnxb/c0bc298cb4c870e271da368bb765e146/2FA_-_App_Download_-_PT.png)

2. Use o aplicativo para ler o QR Code com a câmera do seu celular.

  ![2FA - App QR Code - PT](https://images.ctfassets.net/alneenqid6w5/1Nyt9wLnfYG5z75tUhinQ6/48d5047d5959b95f938efe35d7fa0983/2FA_-_App_QR_Code_-_PT.png)

3. Sua conta da VTEX será adicionada ao aplicativo, com um código de 6 dígitos. Insira o código para concluir seu login.

  *O código do app é atualizado periodicamente. Não será necessário memorizá-lo, basta consultar o aplicativo sempre que precisar.*

  ![2FA - App Insert Code - PT](https://images.ctfassets.net/alneenqid6w5/NUKFyLNA9fWsBewD445Uy/58da9e3065ebec81f1528554808eee56/2FA_-_App_Insert_Code_-_PT.png)

> ℹ️ Se você fizer login usando e-mail e senha no mesmo computador, a chave de acesso será solicitada **a cada 3 dias**. Quando isso acontecer, basta consultar o código no aplicativo.

## Habilitar o 2FA por SMS

Para usar uma chave enviada por mensagem de texto:

1. Insira seu número de celular para enviarmos o código por SMS - não se esqueça de colocar o código de país e área.

  ![2FA - SMS Insert Phone - PT](https://images.ctfassets.net/alneenqid6w5/116sok6Zd8sq69UPSSzs1w/d57d2ea05bb88182ab5b9df700fdadb2/2FA_-_SMS_Insert_Phone_-_PT.png)

2. Você receberá uma mensagem de texto da VTEX no celular indicado. Insira a chave de 6 dígitos para concluir seu login.

   ![2FA - SMS Insert Code - PT](https://images.ctfassets.net/alneenqid6w5/6KbuUvMFupmJEMN6kTOZ4E/bf998e866456c232965f4bd845b65db1/2FA_-_SMS_Insert_Code_-_PT.png)

> ⚠️ Não podemos garantir que sua operadora de telefonia conseguirá entregar a chave de acesso sempre que necessário. Caso a mensagem de texto da VTEX não chegue, tente reenviar o código ou [habilitar o 2FA por aplicativo](#habilitar-o-2fa-por-aplicativo).

## Modificar configurações de 2FA

Para modificar as configurações de verificação em duas etapas:

1. Acesse suas configurações de usuário, clicando no círculo com suas iniciais no canto superior-direito do Admin.

  ![2FA - User Initials - PT](//images.ctfassets.net/alneenqid6w5/3ktWD1KvDLV499l40SxUc2/09b0b09ce0766a877961adaeadb3d273/2FA_-_User_Initials_-_PT.png)

2. Clique em **Verificação em 2 passos** para visualizar suas configurações.

  ![2FA - My User - PT](//images.ctfassets.net/alneenqid6w5/O4jBeKN2RTMS0bKOWVJVK/f2f91e3154f9392fe1c96207101a627f/2FA_-_My_User_-_PT.png)

3. Você poderá então alterar suas configurações seguindo passos similares aos apresentados nas seções acima para habilitar 2FA por [SMS](#habilitar-o-2fa-por-sms) e [aplicativo](#habilitar-o-2fa-por-aplicativo). 
