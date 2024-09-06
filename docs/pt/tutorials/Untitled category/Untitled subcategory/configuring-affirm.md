---
title: 'Configurar o Affirm'
id: 4VED6U3u1LYAJaIMCy5xlN
status: ARCHIVED
createdAt: 2021-06-07T19:54:24.353Z
updatedAt: 2022-12-23T19:52:41.014Z
publishedAt: 
firstPublishedAt: 2021-06-07T20:02:47.377Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-o-affirm
locale: pt
legacySlug: configurar-o-affirm
subcategoryId: unknown-subcategory
---

[Affirm](https://www.affirm.com/) é uma solução de pagamentos que opera com financiamento de empréstimos.

Ao realizar uma compra e escolher o Affirm como meio de pagamento, o comprador passará por uma análise de crédito e, com base no seu score, a ferramenta irá liberar o valor para pagamento daquela transação. Com isso, o cliente pagará o valor diretamente ao Affirm com os juros definidos no momento da adesão.

>⚠️ A instalação do **aplicativo** Affirm é feita utilizando o **VTEX IO**, uma plataforma de desenvolvimento <i>low-code</i> que permite programadores desenvolverem aplicações e novos componentes para lojas VTEX. Acesse a documentação [Installing VTEX IO's CLI](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-install) e baixe a plataforma e seus componentes antes de seguir para as próximas etapas.

Para configurar o Affirm, você precisa:

1.  [Instalar o aplicativo](#instalar-o-aplicativo)
2.  [Configurar o aplicativo](#configurar-o-aplicativo)    
3.  [Instalar e configurar o gateway](#instalar-e-configurar-o-gateway)   
4.  [Instalar o snippet](#instalar-o-snippet)
5.  [Configurar condição de pagamento](#configurar-condicao-de-pagamento)

## Instalar o aplicativo

Com o VTEX IO configurado, acesse a documentação [Installing Affirm Payment App](https://developers.vtex.com/vtex-rest-api/docs/installing-affirm-payment-app-1) e siga o passo a passo para instalar o aplicativo na sua loja.

## Configurar o aplicativo

Finalizada a instalação do aplicativo, siga as etapas abaixo para preenchimento dos campos de configuração:   

1.  Acesse o **Admin** VTEX.    
2.  No módulo **Configuraçõs da conta**, clique em *Aplicativos>Meus aplicativos*.    
3.  Em **Affirm Payment**, clique em **Configurações**.    
4.  Preencha os seguintes campos com as informações fornecidas pela Affirm.  

    - **Enable Katapult:**  Katapult é um recurso que oferece leasing para compradores não qualificados para o financiamento normal do Affirm. Caso queira utilizá-lo, entre em contato com a Affirm e solicite a liberação em sua conta antes de habilitá-lo.

    - **Company Name:** Caso você tenha mais de um site operando em uma única conta do Affirm, é possível substituir o nome da empresa / marca externa que o cliente vê. Deixe em branco para usar o nome padrão da loja armazenado em sua conta do Affirm.

    - **Public API Key for promotional components:** API Pública fornecida pela Affirm.

    - **Interval to use for the following three settings:** Defina a unidade de tempo (dias, horas, minutos) que serão aplicadas nas seguintes configurações:  

        - **Delay to auto-settle:** Minutos / horas / dias antes da liquidação automática dos pagamentos autorizados pelo Affirm.

        - **Delay to auto-settle after anti-fraud:** Minutos / horas / dias antes da liquidação automática dos pagamentos autorizados pelo Affirm após a aprovação do antifraude.

        - **Delay to cancel:** Minutos / horas / dias antes do cancelamento automático dos pagamentos.  

     -  **Katapult public token (optional):** Chave pública do Katapult fornecida pela Affirm, caso você opte pela utilização do recurso.

     -  **Katapult private token (optional):** Chave privada do Katapult fornecida pela Affirm, caso você opte pela utilização do recurso.

<ul>
5.  Clique em <b>Salvar</b>.
  </ul>

## Instalar e configurar o gateway

Com o aplicativo configurado, realize os passos a seguir para configurar o gateway na sua loja:

1.  Acesse o **Admin** VTEX.    
2.  Acesse o módulo **Pagamentos**.    
3.  Clique em **Configurações**.    
4.  Em **Afiliações de gateway**, clique no botão verde “**+**”.    
5.  Busque e selecione a opção **Affirm**.    
6.  Em **Nome da Afiliação**, altere para **Affirm**.    
7.  Nos campos **Application Key** e **Application Token**, Insira os dados fornecidos pela Affirm.
8. Em **Captura automática de pagamento**, selecione uma das opções a seguir:

   - **Use O Comportamento Recomendado Pelo Processador de Pagamentos:** a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).

   - **Imediatamente: Captura Automática Ao Autorizar O Pagamento:** a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.

   - **Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude:** a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento – Imediatamente: Captura Automática Ao Autorizar O Pagamento).

   - **Não Capturado Automaticamente:** a captura acontece somente quando o pedido for faturado. Cliente deve ter atenção ao escolher esse comportamento de captura pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor de pagamentos e levar à perda do pagamento.

<ul>
9. Clique em <b>Salvar</b>.
</ul>

## Instalar o snippet

Após a instalação do Affirm, é preciso inserir o snippet da solução na página do produto e no checkout da sua loja, por este motivo, recomendamos que a configuração seja realizada por um desenvolvedor.

[Clique aqui](https://docs.affirm.com/affirm-developers/docs/checkout-web) para acessar a documentação do Affirm com o código do Snippet e compartilhe com o desevolvedor ou agência responsável pela execução do serviço.

**![](https://lh5.googleusercontent.com/j4HQljuVCKh71Yd27JPeYVqiJQwhit8qEW7F_rKnYXQZvLsAgcM6e3oeaUPx7Um-4ClJtQKDfpe_UWxe_wzdKUDwu5AHV5rp-OdTuCcGrVjpVfT3T7OqraMvg_kkYX7Vxbskwc0D)**

 ## Configurar condição de pagamento

Depois de concluir todas as etapas, o Affirm estará configurado e pronto para ser utilizado em sua loja.

Caso queira associá-lo à uma condição de pagamento que seja compatível com o Affirm, siga o artigo [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).
