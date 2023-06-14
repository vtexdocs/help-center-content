---
title: 'Configurar recuperação de senha por SMS'
id: 4MBZmPN2GSBNFooa9la555
status: PUBLISHED
createdAt: 2019-03-07T21:02:11.023Z
updatedAt: 2020-09-17T21:00:30.654Z
publishedAt: 2020-09-17T21:00:30.654Z
firstPublishedAt: 2019-03-07T21:04:24.196Z
contentType: tutorial
productTeam: Post-purchase
author: 5mp4SUVpZYa02A8QOqYySu
slug: configurar-recuperacao-de-senha-por-sms
legacySlug: 
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

Em casos de [perda de senha](https://help.vtex.com/pt/faq/como-recuperar-senha-de-acesso "perda de senha"), é preciso enviar um código temporário para que o usuário acesse a plataforma e cadastre uma nova senha. O envio dessa mensagem pode ser feito por email, mas também por SMS. 

No módulo Central de Mensagens, é possível personalizar templates de SMS com o conteúdo da escolha do usuário. 

Contudo, é importante ressaltar que cada tipo de template tem as suas particularidades. Os templates de SMS, por sua vez, não aceitam título, imagens, tampouco quebra de linha.

Dito isso, confira o passo a passo de como configurar essa modalidade:

1. Acesse __Central de Mensagens__.
2. Clique em __Templates__.

  ![5NrtBpFRTxInFl4aY2FrVz-pt](//images.ctfassets.net/alneenqid6w5/1l0OsDNW7teR6iaGoNgei0/554312ca709ec61b03aee1fed2f16e24/5NrtBpFRTxInFl4aY2FrVz-pt.png)

3. Clique no template __Password Recovery__.
4. Clique na aba __SMS__.
5. Selecione a opção __“Ativar envio de SMS?”__

  ![password-recovery-sms-tab-pt](//images.ctfassets.net/alneenqid6w5/6bGbc4Wo9IJcKld5wBXYoi/9199293f8290a94fbc4cf47c9cc2dd4a/password-recovery-sms-tab-pt.gif)

  *No momento em que o usuário clica em “Ativar envio de SMS”, a plataforma apresenta as demais configurações de envio.*

6. Escolha o __remetente__ Movile SMS.
7. Preencha o campo __Destination__ com a variável `{{_accountInfo.Telephone}}`.
8. Preencha o campo __Message Text__ com o conteúdo da mensagem. As informações `Nome:{{name}}`, `Login:{{login}}` e `Senha: {{senha}}` são essenciais.

  ![password-recovery-sms-fields-pt](//images.ctfassets.net/alneenqid6w5/7D17OjBCwC4FWnpMJ5hlys/ec001c43cf655f023b30db5a0bba2b29/password-recovery-sms-fields-pt.png)

9. Revise o conteúdo do SMS em __Preview__.
10. Clique em __Salvar __.

Pronto, SMS configurado! Não esqueça de clicar em salvar para preservar as alterações recém-feitas.
