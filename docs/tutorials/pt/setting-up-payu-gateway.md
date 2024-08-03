---
title: 'Configurar gateway PayU'
id: 36zWOAFHmwIAoWIEU2Y08q
status: DRAFT
createdAt: 2018-03-27T15:25:04.654Z
updatedAt: 2024-03-18T20:27:28.378Z
publishedAt: 
firstPublishedAt: 2018-03-27T22:13:40.899Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-payu
locale: pt
legacySlug: configurar-gateway-payu
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-danger">Essa integração de pagamento não pode ser mais configurada na plataforma devido ao <a href="https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14">processo de remoção de provedores legados</a> e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.</div>

A PayU é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) que oferece uma série de soluções para facilitar (e deixar mais seguras) as transações realizadas na sua loja. Com certificação [PCI](/pt/faq/o-que-e-o-pci-ssc), essa solução é exclusiva para Argentina, Brasil, Chile, Colômbia, México, Panamá e Peru.

Para configurar a PayU, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PayU__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos de cadastro com os dados fornecidos pela PayU (campos _API Login_, _API Key_, _Account Id_ e _Merchant Id_).
5. No campo __Forma de Autorização__, escolha o modo como quer autorizar as transações.
6. Em __Moeda__, selecione a moeda que será usada nas transações.
7. Em __Idioma__, defina a língua de preferência.
8. No campo __País do Pagamento__, escolha o país da sua loja.
9. Em __Validade do boleto em dias__, defina o tempo que seu cliente terá para pagar o boleto.
10. O campo __Usa Banco Referenciado__ é de preenchimento exclusivo para lojas da Colômbia.
11. Em __Tipo de Estorno__, escolha entre o processo automático ou a notificação por e-mail (neste caso, um e-mail vai ser enviado, avisando de que você deverá solicitar o estorno pendente no painel de controle da PayU).
12. O campo __PartnerId__ já vem preenchido com o ID da VTEX na PayU.
13. Em __Usa cartão protegido__, selecione _Sim_ caso sua loja tenha contratado o JustClick (serviço de compra em um clique da PayU).
14. No campo __Primeira retentativa para consulta__, defina o intervalo de tempo (em minutos) para a realização da nova consulta na PayU.
15. Em __Financiamento por Operadora__, escolha entre não aplicar ou deixar o cálculo para a instituição financeira.
16. No campo __Boleto Registrado__, informe se o boleto tem ou não registro.
17. Em __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Você também pode desativar a função.
18. No campo __Usa Antifraude__, informe se deseja usar um antifraude.
19. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, a PayU vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a PayU). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
