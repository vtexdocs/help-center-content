---
title: Adicionar suporte a 3DS na integração com a Adyen
id: 3DNZeC9qJaC2GMIw4mawYk
status: PUBLISHED
createdAt: 2017-07-25T18:20:05.681Z
updatedAt: 2023-03-26T22:04:52.559Z
publishedAt: 2023-03-26T22:04:52.559Z
firstPublishedAt: 2017-08-01T16:58:04.306Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: adicionando-suporte-a-3ds-na-integracao-com-a-adyen
legacySlug: adicionando-suporte-a-3ds-na-integracao-com-a-adyen
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Para adicionar suporte ao [3DS](https://help.vtex.com/pt/tutorial/o-que-e-3d-secure--1eWPdop8mECuaEomQgkAIa) (solução de segurança que permite ao comprador ser autenticado no banco emissor) na integração com a Adyen, primeiro é necessário configurar o conector. Para isso, siga o passo a passo abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Acesse a aba **Afiliações de Gateways**.
3. Clique no card da afiliação da Adyen.
4. Vá até __Live Endpoint URL Prefix__ e siga [este tutorial](https://www.adyen.help/hc/pt-br/articles/360014322079-Como-posso-encontrar-a-URL-do-endpoint-da-minha-conta-LIVE-) da Adyen para obter a informação.
5. No campo __Ativar 3d Secure?__, selecione __Sim__.
6. Escolha o modo do 3DS (3DS, 3DS2 ou 3DS2 Data only) que foi acordado no momento da parceria comercial junto à Adyen.
7. Finalize o preenchimento dos campos seguintes de acordo com [este tutorial](https://help.vtex.com/pt/tutorial/como-configurar-o-gateway-adyen-na-vtex--tutorials_2337?&utm_source=autocomplete).
8. Clique em __Salvar__

### Habilitar as respostas do 3DS

Depois de configurar o conector na VTEX, é necessário acessar o painel da Adyen para habilitar o 3DS nas transações da sua loja.

<div class="alert alert-warning">
  Recomendamos que as configurações sejam feitas primeiramente em ambiente Test. Somente após as devidas validações, acesse o ambiente <b>Live</b> para para as configurações finais.
  </div>

1. Clique nos links abaixo para acessar o ambiente Test e Live, da Adyen

      - __Ambiente Test Adyen:__ https://ca-test.adyen.com/ca/ca/login.shtml
      - __Ambiente Live Adyen:__ https://ca-live.adyen.com/ca/ca/login.shtml

2. Clique em __Risk__ e depois clique em __Dynamic 3D Secure__.
3. Clique em __Create new rule__ para criar uma nova regra de ativação do 3DS e siga [esta documentação da Adyen](https://docs.adyen.com/risk-management/dynamic-3d-secure) para mais detalhes.
4. Finalizada a criação da regra, clique em __Save__.

Feito isso, o módulo de segurança 3DS estará configurado e pronto para ser utilizado junto à Adyen.
