---
title: 'Configurar o conector para aceitar pagamentos com Adyen na VTEX'
id: tutorials_2337
status: ARCHIVED
createdAt: 2017-04-27T21:55:10.101Z
updatedAt: 2024-03-18T17:52:42.714Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:52.166Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-set-up-the-connector-to-accept-payments-with-adyen-at-vtex
locale: pt
legacySlug: como-configurar-o-gateway-adyen-na-vtex
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

>⚠️ As configurações documentadas neste artigo são realizadas em um ambiente externo à VTEX. Portanto, podem ser descontinuadas sem prévio aviso.

Caso o seu processador de pagamentos escolhido seja a Adyen, siga o passo a passo abaixo com a configuração necessária para que a comunicação entre VTEX e Adyen funcione perfeitamente.

## Configurações na Adyen

Essa configuração para aceitar pagamentos depende que configurações sejam feitas na VTEX e também na Adyen. Você encontra abaixo as instruções de como configurar e como obter as informações necessárias para a posterior configuração na VTEX.

<ui>1. Acesse o painel da Adyen:

  - Ambiente Test Adyen: https://ca-test.adyen.com/ca/ca/login.shtml.
  - Ambiente Live Adyen: https://ca-live.adyen.com/ca/ca/login.shtml.</ui>

<ui>2. Clique em **Developers** no menu lateral.</ui>

<ui>3. Clique em  **Webhooks**.</ui>

<ui>4. Clique no botão **+ Webhook** no canto superior da tela.</ui>

<ui>5. Clique no botão **Add** ao lado de **Standard Notification**.</ui>

<ui>6. Preencha o campo **URL** com o valor `https://{accountName}.vtexpayments.com.br/adyen/panel-notification`.

  - Note que `{accountName}` deve ser substituído pelo nome da sua loja na VTEX.</ui>

<ui>7. Acesse **Additional Settings** e faça as configurações necessárias:

  - A versão SSL deve ser TLSv1.2
  - Os campos "Accept expired", "Accept self-signed" e "Accept untrusted Root Certificates" devem estar desmarcados
  - Certificate Alias é `signed.adyen.com`
  - O campo Active deve estar selecionado
  - Service Version = 1
  - Method = JSON
  - "Populate SOAP Action header" não deve estar selecionado
  - Expandir as caixas "Additional Settings", em seguida selecionar **apenas** os seguintes campos:
    - Add Acquirer Result
    - Add Raw Acquirer Result
    - Include Acquirer Reference
    - Include Card Bin</ui>

<ui>8. Clique em **Save Configuration**.</ui>

Com essa configuração, criamos a conexão do endpoint do módulo de Pagamentos da VTEX com a Adyen. Sua loja está mais segura.

Em seguida, é só recolher as informações da Adyen para cadastrar na VTEX. Ainda no painel da Adyen:

1. Acesse **Developers** no menu lateral.

2. Clique em **API credentials**.

3. Clique no botão **Create new credential**.

4. No campo **User Type**, clique no usuário do tipo **Webservice**.

5. Lembre-se de anotar o nome de usuário e a senha que aparecerá no campo Password, uma vez que ela não poderá ser visualizada novamente!

6. Clique no botão **Save**, que está no rodapé da página.

7. Depois destes passos, seu usuário deverá ter sido criado com sucesso. O número 1 (indicado na imagem em vermelho) é o username. Já o número 2 é a senha (password) que deverá ser inserida no ambiente VTEX.

    ![Adyen - Image 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-o-conector-para-aceitar-pagamentos-com-adyen-na-vtex_1.png)

8. Envie um e-mail para o suporte da Adyen (suporte@adyen.com) solicitando as habilitações listadas no modelo abaixo:

> Assunto: Configuração das permissões do usuário webservice da VTEX para `{accountName}`
>
> Corpo do e-mail: Suporte Adyen, envio este e-mail para pedir que concedam as permissões necessárias para o usuário `nomedousuário@Company.nomedacompany` para que possamos usá-lo na plataforma da VTEX. Obrigado desde já pela atenção!

Somente após a confirmação da Adyen é que você estará pronto para fazer as configurações na VTEX.

### Passos adicionais para análise antifraude com revisão manual de pedidos

Se você pretende usar a plataforma da Adyen para fazer análise antifraude com revisão manual de pedidos é muito importante fazer os passos abaixo:

<ui>1. Vá até o painel da Adyen.</ui>

<ui>2. Procure pelo menu **Risk** e clique em **Risk settings**.</ui>

<ui>3. Na seção **Case Management behavior** marque **Send notification** para:

  - Accept
  - Reject</ui>

<ui>4. No expire selecione **Reject** no campo **Notification**.</ui>

<ui>5. A configuração deverá parecer conforme abaixo. Não esqueça de clicar em **Save configuration** após concluir as alterações.</ui>

![Adyen - Image 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-o-conector-para-aceitar-pagamentos-com-adyen-na-vtex_2.png)

## Configurações na VTEX

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Adyen__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos do formulário com os dados obtidos na Adyen e clique no botão **Salvar**:

- **username** - username Adyen (instrução 5 das **Configurações na Adyen**)
- **password** - password Adyen (instrução 5 das **Configurações na Adyen**)
- **account** - nome da Merchant Account na Adyen (você pode consultar esse nome indo no painel da Adyen, clicando no menu _Accounts_ > _Merchant Accounts_)
- **currency** - moeda
- **banco de boleto bancário** - banco emissor de boleto
- **instruções do boleto** - instruções que serão aplicadas no boleto
- **código do Skin HPP** - deve ficar em branco`*`
- **idioma** - preencha com o idioma de seu checkout
- **chave para firma HMAC HPP** - deve ficar em branco`*`
- **captura de segurança antecipada** - captação antecipada
- **usa antifraude** - opção que possibilita o uso de antifraude

`*` - Estes campos serão usados somente para integrações com HPP, como o caso do Multibanco, usado em Portugal. Veja a [documentação da Adyen](https://docs.adyen.com/payments-fundamentals/payment-glossary#hosted-payment-pages-hpp) para mais informações.
