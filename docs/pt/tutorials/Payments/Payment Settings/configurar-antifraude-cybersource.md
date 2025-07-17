---
title: 'Configurar antifraude CyberSource'
id: 2Z88QmpRAsWmI0qaCo4aQg
status: PUBLISHED
createdAt: 2018-04-30T18:08:44.396Z
updatedAt: 2024-03-15T15:29:09.166Z
publishedAt: 2024-03-15T15:29:09.166Z
firstPublishedAt: 2018-04-30T20:25:40.199Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-cybersource-antifraud
locale: pt
legacySlug: configurar-antifraude-cybersource
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A CyberSource é uma empresa que oferece diversas soluções para auxiliar a gestão de pagamentos da sua loja. Entre elas estão um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) e um [antifraude](/pt/tutorial/o-que-e-antifraude), ambos com integrações disponíveis na VTEX.

Se você estiver procurando mais detalhes sobre o __gateway__ CyberSource, leia [este artigo do Help](/pt/tutorial/configurar-gateway-cybersource). Para configurar o __antifraude__ da CyberSource, siga os passos abaixo:

## Configurar antifraude CyberSource

<div class="alert alert-info">
Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de efetuar o Passo 6. desta seção.
</div>

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Cybersource__ na barra de busca e clique sobre o nome do provedor.
4. Caso deseje modificar o nome de identificação a ser exibido para o antifraude Cybersource na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
5. Configure a URL `https://{store}.vtexpayments.com.br/api/pub/cybersource/antifraud/notification` no site da CyberSource, substituindo `{store}` pelo store name da sua loja. Isso vai habilitar as notificações quando houver alteração de status de um pedido.
6. Configure o device fingerprint no Google Tag Manager usando [este artigo do Help](/pt/faq/como-configurar-o-device-finger-print-para-braspag-cybersource).
7. Preencha os campos __ID do comerciante no Cybersource__, __Nome de usuário no CyberSource__ e __Sua senha no Cybersource__ de acordo com os dados fornecidos pela CyberSource.
8. Em __Nome da sua empresa__, informe a razão social da sua loja.
9. Em __CNPJ da sua empresa__, insira o número do CNPJ da sua loja.
10. Em __Certificado privado (.p12)__, faça o upload de um certificado privado válido (gerado por você, usando uma certificadora ou um software especializado), com extensão .p12 e chave.
11. Em __Senha do certificado privado__, informe a senha criada para acessar o certificado.
12. Em __Merchant Key ID__ e __Merchant Secret Key__, informe os dados fornecidos pela CyberSource para acessar a API de relatórios.
13. Em __Documento Opcional__, selecione se é necessário enviar o documento para a análise de fraude.
14. Em __Enviar transações autenticadas?__, escolha se deseja enviar para análise do antifraude todas as transações ou somente aquelas que não são autenticadas.
15. Clique em `Salvar`.

## Associar antifraude a uma condição de pagamento

Depois de configurar o antifraude da CyberSource, ele vai estar disponível para ser usado na sua loja. Para isso, você deve associá-lo às condições de pagamento, seja as que já estão configuradas ou aquelas que você ainda vai disponibilizar.

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre a condição desejada ou [crie uma nova condição de pagamento](/pt/tutorial/condicoes-de-pagamento).
5. Marque a opção __Usar antifraude__.
6. Selecione a CyberSource.
7. Clique em `Salvar`.

<div class="alert alert-warning">
Para que uma transação passe pela análise do antifraude, <strong>a condição de pagamento utilizada pelo cliente precisa estar associada a ele</strong>.
</div>
