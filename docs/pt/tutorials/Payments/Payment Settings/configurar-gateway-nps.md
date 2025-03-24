---
title: 'Configurar gateway Ingenico ePayments (NPS)'
id: 4DtjieyNQIQeI2O2kymEgq
status: ARCHIVED
createdAt: 2018-04-18T13:22:00.721Z
updatedAt: 2024-03-18T19:00:20.612Z
publishedAt: 
firstPublishedAt: 2018-04-18T15:09:45.694Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-nps-gateway
locale: pt
legacySlug: configurar-gateway-nps
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

O Ingenico ePayments (NPS) é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) com forte atuação na América Latina e que permite que sua loja aceite diversas condições de pagamento.

Para configurar o Ingenico ePayments (NPS), siga os passos abaixo:

## Configurar afiliação de gateway Ingenico ePayments (NPS)
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __NPS__.
4. Preencha o campo __Id de la Tienda__ ("Id da Loja") com o dado fornecido pelo NPS.
5. Em __Pais__, escolha o país em que sua loja atua.
6. No campo __Moneda de transaccion__ ("Moeda da Transação"), defina qual será a moeda que vai ser usada nas transações da sua loja.
7. Em __Llave secreta__ ("Chave secreta"), informe a sua senha cadastrada no NPS.
8. No campo __Método__, escolha o tipo de integração que será usada.
9. Em __Tipo de Comercio__, indique em qual categoria seu negócio mais se encaixa.
10. No campo __Dias para captura de seguridad después de Autorizado__("Dias de captura de segurança depois de autorizado"), informe em quanto tempo você deseja que a captura de segurança seja realizada depois da autorização.
11. Em __Change Margin__("Mudança de Margem"), defina a margem percentual em que será permitida a alteração do valor do pagamento.
12. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
13. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o Ingenico ePayments (NPS) vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o NPS). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
