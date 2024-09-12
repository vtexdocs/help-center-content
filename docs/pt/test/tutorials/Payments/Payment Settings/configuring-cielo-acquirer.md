---
title: 'Configurar adquirente Cielo'
id: 3avjZ7q65WcM02K8K0eeWu
status: ARCHIVED
createdAt: 2018-05-02T19:02:05.427Z
updatedAt: 2023-09-19T14:27:20.410Z
publishedAt: 
firstPublishedAt: 2018-05-02T19:49:35.201Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-adquirente-cielo
locale: pt
legacySlug: configurar-adquirente-cielo
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A Cielo é um dos maiores [adquirentes](/pt/tutorial/o-que-e-um-adquirente) do Brasil e conta com os mais variados meios de pagamento em sua rede de adquirência. Na VTEX, você integra sua loja com esse adquirente usando o conector CieloV3.

Para configurar a Cielo, siga os passos abaixo:

## Configurar afiliação de gateway Cielo
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __CieloV3__.
4. Clique [aqui](https://developercielo.github.io/tutorial/habilitacao-meios-de-pagamento) para acessar o campo __Habilitação dos Meios de Pagamento na Cielo__. Nesse link, você encontra a documentação para habilitar pagamentos com boleto bancário e débito on-line.
5. Em *MerchantId* e *MerchantKey*, preencha com os dados fornecidos pela Cielo.
6. Em __SoftDescriptor__, escreva o que vai aparecer para identificar a transação realizada na sua loja.
7. No campo __Provedor de boleto__, escolha o provedor cadastrado no sistema da Cielo para pagamentos com boleto bancário.
8. Em __Provedor de débito__, indique o provedor cadastrado no sistema da Cielo para pagamentos com débito on-line.
9. No campo __Boleto Registrado__, informe se o boleto tem ou não registro.
10. Em __Suporte [3DS2](https://help.vtex.com/pt/announcements/3ds2-authentication-flow-accept-online-payments-more-securely-1--6UdTjjVU1AcEQ2aE3Ftxsl?&utm_source=autocomplete)__, selecione se deseja ou não ativá-lo. No caso de ativação, será necessário preencher os campos abaixo. Esses campos são obrigatórios e devem conter informações fornecidas pela Cielo. Para obter mais detalhes sobre esses campos, consulte [esta documentação da Cielo](https://developercielo.github.io/manual/3ds).

    - __EstablishmentCode:__ Código do estabelecimento do Cielo E-Commerce 3.0.
    - __MerchantName:__ Nome do estabelecimento registrado na Cielo.
    - __MCC:__ Código de categoria do estabelecimento.
    - __ClientId:__ [Chave ID](https://docscielo.github.io/Pilots/manual/appcielo3#cielo-oauth) para autenticação basic na API da Cielo.
    - __ClientSecret:__ Chave Secret para autenticação basic na API da Cielo.
    - __BpmpiAuth:__ Seleção de submissão para o processo de autenticação (por exemplo, se o BpmpiAuth não estiver ativo, a transação não será autenticada junto à Cielo). Escolha __Sim__ caso a transação deva ser submetida ao processo de autenticação e __Não__ caso ela não deva ser submetida ao processo de autenticação.
    - __BpmpiAuthNotifyOnly:__ Informar se a transação com cartão será submetida ou não no modo “somente notificação”. Este modo é válido somente para cartões Mastercard. Nele, o processo de autenticação não será acionado, porém os dados serão submetidos à bandeira.
    - __BpmpiAuthSuppresschallenge:__ Informar se ignora ou não o desafio quando houver. Se uma transação é autorizada após ignorar o desafio, o liability permanece com o estabelecimento.

>⚠️ **Atenção**: Para que o fluxo 3DS2 funcione corretamente, é necessário a instalação da payment app cielo-authentication-app.

11. Em __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
12. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Cielo vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__. 

Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
