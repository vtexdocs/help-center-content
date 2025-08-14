---
title: 'Meu anúncio não é exibido no Mercado Livre'
id: 2UpudfowEvG97e2lstj4qc
status: PUBLISHED
createdAt: 2024-06-13T16:38:00.931Z
updatedAt: 2024-11-08T15:28:30.286Z
publishedAt: 2024-11-08T15:28:30.286Z
firstPublishedAt: 2024-06-13T18:01:04.982Z
contentType: tutorial
productTeam: Channels
author: YRJ73j8mt38D5TUleocQB
slugEN: my-ad-is-not-displayed-on-mercado-livre
legacySlug: meu-anuncio-nao-e-exibido-no-mercado-livre
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Marketplace
  - Catálogo
  - Integração
  - Mercado Livre
  - Anúncio pausado
---

Quando um produto é removido ou desativado da política comercial utilizada na integração do Mercado Livre, a atualização dessa informação é enviada automaticamente para o marketplace, que, por sua vez, para de exibir o anúncio do produto.

Outra possibilidade é quando um produto atinge o [estoque mínimo](https://help.vtex.com/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D) estabelecido na configuração da integração com o marketplace. Se o estoque de um produto estiver abaixo do valor atribuído, o anúncio será pausado para evitar vendas de produtos sem estoque.

## Solução

Para resolver esse problema, existem duas soluções que você pode considerar: [verificar a política comercial do produto](#verificando-a-politica-comercial) e a [configuração de estoque limite](#verificando-o-estoque-limite) para pausa de anúncio.

### Verificando a política comercial

É por meio da [política comercial](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw) que são definidas as configurações aplicadas aos produtos enviados para o Mercado Livre. 

Para validar se a política comercial está configurada corretamente no cadastro do produto, acesse __Catálogo > Todos os Produtos__ no Admin VTEX ou digite __Todos os Produtos__ na barra de busca no topo da página, e siga as instruções abaixo:

1. Clique em __Buscar ou filtrar resultados__ e [busque pelo produto](https://help.vtex.com/pt/tutorial/produtos-e-skus-beta--2ig7TmROlirWirZjFWZ3By#buscar-produtos) cujo anúncio não está disponível no Mercado Livre.
2. Na linha do produto desejado, clique em `Editar`.
3. Na página de cadastro do produto, valide se a política comercial que atende o Mercado Livre está selecionada.
4. Caso não esteja, marque a flag da política comercial.

  ![politicas-comerciais-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/store-operations/meu-anuncio-nao-e-exibido-no-mercado-livre_1.png)

 5. Clique no botão `Salvar`.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Se sua loja está operando com o [Novo Admin VTEX](https://help.vtex.com/pt/announcements/bem-vindo-ao-novo-admin-vtex--5tLPBodp6Xu03vYdyBTGTa), consulte o artigo [Produtos e SKUs](https://help.vtex.com/pt/tutorial/produtos-e-skus-beta--2ig7TmROlirWirZjFWZ3By) para aprender como visualizar e gerenciar seu catálogo, incluindo a configuração de políticas comerciais.
</div>

### Verificando o estoque limite

Para validar a configuração do estoque limite, acesse Marketplace > Conexões > Marketplaces e Integrações no Admin VTEX ou digite Marketplaces e integrações na barra de busca no topo da página, e siga as instruções abaixo:

1. [Busque pelo card de integração](https://help.vtex.com/pt/tutorial/marketplaces-e-integracoes--5AcBO1t29nhq7rBHas9b6V#buscar-e-filtrar) do Mercado Livre.
2. Na linha do card de integração desejado, clique em `Editar`.
3. Em `Configurações`, verifique se há algum valor atribuído ao campo Estoque limite para pausa de anúncio.

  ![estoque-limite-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/store-operations/meu-anuncio-nao-e-exibido-no-mercado-livre_2.png)

 4. Certifique-se de que a configuração deste campo está correta, de acordo com o artigo [Controle de estoque mínimo para integrações](https://help.vtex.com/pt/tutorial/controle-de-estoque-minimo-para-integracoes--5hvUNIiSeJ5QCaZQYpYf1D). 

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Caso seu problema não seja resolvido por uma das soluções propostas, abra um ticket para o [suporte VTEX](https://help.vtex.com/support?/cultureInfo=pt-br).
</div>
