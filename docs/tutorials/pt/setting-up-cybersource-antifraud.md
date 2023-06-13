---
title: Configurar antifraude CyberSource
id: 2Z88QmpRAsWmI0qaCo4aQg
status: PUBLISHED
createdAt: 2018-04-30T18:08:44.396Z
updatedAt: 2023-03-26T21:48:46.023Z
publishedAt: 2023-03-26T21:48:46.023Z
firstPublishedAt: 2018-04-30T20:25:40.199Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-antifraude-cybersource
legacySlug: configurar-antifraude-cybersource
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A CyberSource é uma empresa que oferece diversas soluções para auxiliar a gestão de pagamentos da sua loja. Entre elas estão um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) e um [antifraude](/pt/tutorial/o-que-e-antifraude), ambos com integrações disponíveis na VTEX.

Se você estiver procurando mais detalhes sobre o __gateway__ CyberSource, leia [este artigo do Help](/pt/tutorial/configurar-gateway-cybersource). Para configurar o __antifraude__ da CyberSource, siga os passos abaixo:

## Configurar antifraude CyberSource

<div class="alert alert-info">
Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de efetuar o Passo 6. desta seção.
</div>

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __CyberSource__ que fica na seção _ANTIFRAUDES_.
4. Configure a URL `https://{store}.vtexpayments.com.br/api/pub/cybersource/antifraud/notification` no site da CyberSource, substituindo `{store}` pelo store name da sua loja. Isso vai habilitar as notificações quando houver alteração de status de um pedido.
5. Configure o device fingerprint no Google Tag Manager usando [este artigo do Help](/pt/faq/como-configurar-o-device-finger-print-para-braspag-cybersource).
6. Preencha os campos de cadastro com os dados fornecidos pela CyberSource (campos _ID da loja no Cybersource_ / _Nome de usuário no CyberSource_ e _Sua senha no Cybersource_).
7. No campo __Nome da sua empresa__, informe a razão social da sua loja.
8. Em __CNPJ da sua empresa__, diga o número do CNPJ da sua loja.
9. Em __Certificado privado (.p12)__, faça o upload de um certificado privado válido (gerado por você, usando uma certificadora ou um software especializado), com extensão .p12 e chave.
10. No campo __Senha do certificado privado__, informe a senha criada para acessar o certificado.
11. Em __Merchant Key ID__ e __Merchant Secret Key__, informe os dados fornecidos pela CyberSource para acessar a API de relatórios.
12. Em __Documento Opcional__, selecione se é necessário enviar o documento para a análise de fraude.
13. Em __Enviar transações autenticadas?__, escolha se deseja enviar para análise do antifraude todas as transações ou somente aquelas que não são autenticadas.
14. Clique em __Salvar__.

## Associar antifraude a uma condição de pagamento
Depois de configurar o antifraude da CyberSource, ele vai estar disponível para ser usado na sua loja. Para isso, você deve associá-lo às condições de pagamento, seja as que já estão configuradas ou aquelas que você ainda vai disponibilizar.

1. Já dentro das __Configurações__ do módulo Pagamentos, clique na aba __Condições de Pagamento__.
2. Clique sobre a condição desejada ou [crie uma nova condição de pagamento](/pt/tutorial/condicoes-de-pagamento).
3. Marque a opção __Usar antifraude__.
4. Selecione a CyberSource.
5. Clique no botão __Salvar__.

<div class="alert alert-warning">
Para que uma transação passe pela análise do antifraude, <strong>a condição de pagamento utilizada pelo cliente precisa estar associada a ele</strong>.
</div>
