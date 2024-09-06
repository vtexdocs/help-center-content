---
title: 'Configurar o gateway Spin Pay'
id: 3YuCJzFJV30COTjEs8Vyl3
status: PUBLISHED
createdAt: 2021-04-19T13:39:06.747Z
updatedAt: 2022-12-05T16:40:29.772Z
publishedAt: 2022-12-05T16:40:29.772Z
firstPublishedAt: 2021-04-19T14:13:34.952Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: configurar-o-gateway-spin-pay
locale: pt
legacySlug: configurar-o-gateway-spin-pay
subcategoryId: unknown-subcategory
---

Na VTEX, agora é possível oferecer o gateway [Spin Pay](https://spinpay.com.br/) para processar os pagamentos na sua loja. Com essa solução, você poderá receber via [PIX](https://help.vtex.com/pt/tutorial/pix-faq--3lx7zCU2lQroTEBCYKYbo3) e principais carteiras digitais disponíveis hoje no mercado.

>⚠️ Para utilizar o Spin Pay, na VTEX, é preciso que você tenha uma **Application Key (App Key)** e uma **Application Token (App Token)**. Esses dados são obtidos somente após a aprovação do seu cadastro pela Spin Pay e assinatura do contrato ou aceite do termo de adesão. Caso seu cadastro já tenha sido aprovado e o contrato assinado, siga as etapas a seguir.

Siga as etapas abaixo para configurar o Spin Pay na sua loja:

1. Acesse o __Admin__ VTEX.
2. Acesse o módulo __Pagamentos__.
3. Clique em __Configurações__.
4. Em __Afiliações de gateway__, clique no botão verde “__+__”.
5. Busque e selecione a opção __Spin Pay__.
6. Em Nome da afiliação, altere para apenas __Spin Pay__.
7. Nos campos __Application Key__ e __Application Token__, insira os dados que estão disponíveis no painel da sua conta Spin Pay. Siga [essa documentação](https://spinpay.zendesk.com/hc/pt-br/articles/5067562692247-Onde-encontro-as-credenciais-que-preciso-para-ativar-o-Pix-em-minha-Loja-Virtual-) para o passo a passo.
8. Clique em __Salvar__.

Feito isso, o Spin Pay estará pronto para processar os pagamentos em sua loja. Siga a próxima etapa para configurar a __condição de pagamento__.

### Configurar condição de pagamento

Com o gateway instalado em sua loja, é preciso configurar a [condição de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete) para que os pagamentos sejam processados de forma correta.

1. Acesse o __Admin__ VTEX.
2. Acesse o módulo __Pagamentos__.
3. Clique em __Configurações__.
4. Em __Condições de pagamento__, clique no botão verde “__+__”.
5. Busque e selecione a opção __Spin Pay__.
6. Em __Nome da regra__, defina um nome para identificação da condição de pagamento.
7. No campo __Status__, deixe a opção __Ativa__.
8. Em __Processar com afiliação__, selecione a opção __Spin Pay__ que você acabou de configurar.
9. Em __Usar Antifraude__, se você tiver uma solução contratada, habilite o campo e selecione a opção desejada.
10. Clique em __Salvar__.

>⚠️ O Spin Pay é uma solução brasileira para pagamento instantâneo onde o débito acontece diretamente na conta do consumidor. Por este motivo, não é possível oferecer parcelamento.

Com todas as etapas concluídas, o Spin Pay estará habilitado para processar os pagamentos em sua loja.

