---
title: 'Configurar recuperação de senha por SMS'
id: 4MBZmPN2GSBNFooa9la555
status: ARCHIVED
createdAt: 2019-03-07T21:02:11.023Z
updatedAt: 2024-05-22T13:29:09.953Z
publishedAt: 
firstPublishedAt: 2019-03-07T21:04:24.196Z
contentType: tutorial
productTeam: Post-purchase
author: 5mp4SUVpZYa02A8QOqYySu
slugEN: setting-up-sms-password-recovery
locale: pt
legacySlug: 
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Em casos de [perda de senha](https://help.vtex.com/pt/faq/como-recuperar-senha-de-acesso "perda de senha"), é preciso enviar um código temporário para que o usuário acesse a plataforma e cadastre uma nova senha. O envio dessa mensagem pode ser feito por email, mas também por SMS. 

No módulo Central de Mensagens, é possível personalizar templates de SMS com o conteúdo da escolha do usuário. 

Contudo, é importante ressaltar que cada tipo de template tem as suas particularidades. Os templates de SMS, por sua vez, não aceitam título, imagens, tampouco quebra de linha.

Dito isso, confira o passo a passo de como configurar essa modalidade:

1. Acesse __Central de Mensagens__.
2. Clique em __Templates__.

  ![5NrtBpFRTxInFl4aY2FrVz-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Account%20management/Users/configurar-recuperacao-de-senha-por-sms_1.png)

3. Clique no template __Password Recovery__.
4. Clique na aba __SMS__.
5. Selecione a opção __“Ativar envio de SMS?”__

  ![password-recovery-sms-tab-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Account%20management/Users/configurar-recuperacao-de-senha-por-sms_2.gif)

  *No momento em que o usuário clica em “Ativar envio de SMS”, a plataforma apresenta as demais configurações de envio.*

6. Escolha o __remetente__ Movile SMS.
7. Preencha o campo __Destination__ com a variável `{{_accountInfo.Telephone}}`.
8. Preencha o campo __Message Text__ com o conteúdo da mensagem. As informações `Nome:{{name}}`, `Login:{{login}}` e `Senha: {{senha}}` são essenciais.

  ![password-recovery-sms-fields-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Account%20management/Users/configurar-recuperacao-de-senha-por-sms_3.png)

9. Revise o conteúdo do SMS em __Preview__.
10. Clique em __Salvar __.

Pronto, SMS configurado! Não esqueça de clicar em salvar para preservar as alterações recém-feitas.
