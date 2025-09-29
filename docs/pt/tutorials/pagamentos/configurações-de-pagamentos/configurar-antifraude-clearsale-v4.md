---
title: 'Configurar antifraude ClearsaleV4'
id: 6NB6ks5BSvMERqCvQESK9Z
status: PUBLISHED
createdAt: 2024-11-08T18:21:22.485Z
updatedAt: 2024-11-08T20:25:06.541Z
publishedAt: 2024-11-08T20:25:06.541Z
firstPublishedAt: 2024-11-08T20:21:39.742Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configuring-clearsale-v4-antifraud
legacySlug: configurar-antifraude-clearsale-v4
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o [antifraude](/pt/tutorial/como-configurar-antifraude) ClearSaleV4. Por meio deste sistema, é possível aumentar o nível de segurança em transações de pagamento realizadas em sua loja utilizando análises de risco que identificam possíveis fraudes.

Para configurar o ClearSaleV4, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __ClearsaleV4__ na barra de busca e clique sobre o nome do provedor.
4. Caso deseje modificar o nome de identificação a ser exibido para o antifraude ClearSaleV4 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
5. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
6. Preencha os campos __Application Key__ e __Application Token__ com o seu login e senha configurados na Clearsale.
7. Em __Enable Risk Pre-Analysis__, selecione a opção __No__.
8. Em __Enable Analysis on debit payments__, selecione a opção desejada.
9. Em __Product__, insira __4__.
10. Em __B2BB2C__, selecione a opção desejada.
11. Em __AbsoluteSlaValue__, insira o tempo em minutos para SLA de análise.
12. O campo __CustomObservation__ não é necessário preencher.
13. Clique em `Salvar`.

## Associar antifraude a uma condição de pagamento

Depois de configurar o antifraude da Clearsale, ele vai estar disponível para ser usado na sua loja. Para isso, você deve associá-lo às condições de pagamento, seja as que já estão configuradas ou aquelas que você ainda vai disponibilizar.

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre a condição desejada ou [crie uma nova condição de pagamento](/pt/tutorial/condicoes-de-pagamento).
5. Marque a opção __Usar antifraude__.
6. Selecione __ClearsaleV4__.
7. Clique em `Salvar`.

> ⚠️ Para que uma transação passe pela análise do antifraude, **a condição de pagamento utilizada pelo cliente precisa estar associada a ele**.
