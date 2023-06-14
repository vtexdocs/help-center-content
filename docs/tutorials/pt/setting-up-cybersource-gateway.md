---
title: 'Configurar gateway CyberSource'
id: 6nhvUTrLxeacsoYG6GkGM
status: PUBLISHED
createdAt: 2018-04-30T17:34:57.517Z
updatedAt: 2023-03-29T00:33:54.554Z
publishedAt: 2023-03-29T00:33:54.554Z
firstPublishedAt: 2018-04-30T20:20:44.704Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-cybersource
legacySlug: configurar-gateway-cybersource
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A CyberSource é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que oferece diversas soluções para ajudar sua loja a gerenciar pagamentos. Entre elas está um __gateway__, que oferece integração com a plataforma VTEX. Se você estiver procurando mais detalhes sobre o __antifraude__ CyberSource, leia [este artigo do Help](/pt/tutorial/configurar-antifraude-cybersource).

Para configurar o __gateway__ da CyberSource, siga os passos abaixo:

## Configurar afiliação de gateway CyberSource
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __CyberSource__.
4. Preencha os campos de cadastro com os dados fornecidos pela CyberSource (campos _Id do Merchant / Id do comerciante CyberSource_, _Username / Nome do Usuário usado no painel da Cybersource_ e _Password / Senha usada no painel da Cybersource_).
5. No campo __Nome da Empresa__, informe a razão social da sua loja.
6. Em __CNPJ da Empresa__, diga o número do CNPJ da sua loja.
7. No campo __Moeda__, escolha a moeda que será usada nas transações da sua loja.
8. Em __Certificado privado (.p12)__, faça o upload de um certificado privado válido (gerado por você, usando uma certificadora ou um software especializado), com extensão .p12 e chave.
9. No campo __Senha do certificado privado__, informe a senha (isto é, o seu _Id do Merchant / Id do comerciante CyberSource_).
10. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o gateway da CyberSource estará configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele estará disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a CyberSource). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
