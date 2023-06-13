---
title: Adicionar Seller (Beta)
id: 6q4G4RNqVENr5YMJyindwL
status: DRAFT
createdAt: 2022-02-02T16:27:52.880Z
updatedAt: 2022-10-20T00:54:43.579Z
publishedAt: 
firstPublishedAt: 2022-02-02T18:34:51.208Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slug: adicionar-seller-beta
legacySlug: adicionar-seller-beta
subcategory: 2xWRgEIlR2ookieEmm4KQu
---

[Gerenciamento de Sellers](link) é a página onde operadores de marketplace adicionam sellers, registram suas informações e administram seus status. Este artigo orienta sobre os passos necessários para se adicionar um novo seller. As informações inseridas na criação de um seller não ficam visíveis no storefront do marketplace, e são visualizadas apenas por usuários do marketplace, em seu Admin VTEX em **Marketplace > Sellers > Gerenciamento de Sellers.** 

Para adicionar um seller não identificável, também chamado de [seller white label](https://help.vtex.com/pt/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa), é necessário ter esse modelo previsto no contrato com a VTEX. Uma vez ajustado o contrato com o representante comercial da VTEX responsável por seu marketplace, solicite a [adição de uma conta franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) por meio do nosso Suporte. Toda conta franquia é criada como seller white label e não é possível mudar o tipo de seller após a sua criação. 

<div class="alert alert-info">
Se quiser encontrar novos parceiros para venderem em seu marketplace, utilize o Marketplace Network, que facilita a identificação e contato entre marketplaces e sellers que operam no ecossistema VTEX, além de conectores certificados (parceiros).
</div>

1. No seu Admin VTEX, acesse *MARKETPLACE > Sellers > Gerenciamento*.
2. Clique em `Adicionar Seller`.
3. Escolha um tipo de integração entre **Seller VTEX** e **Seller Externo**.  
4. Preencha os campos, conforme descrição abaixo.   
5. Clique em `Salvar`.   

**Integração**
- **Conta VTEX do seller:** preencha com a [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) do seller.    
- **ID do afiliado:** código identificador do [afiliado](https://help.vtex.com/pt/tutorial/como-configurar-afiliado--tutorials_187), definido pelo seller ao cadastrar seu marketplace. Este código deve ser informado pelo seller e sempre é composto por três consoantes, sejam elas repetidas ou não. Vogais não são aceitas.    
- **Pausar o seller após a criação:** marque a caixa de seleção para que o seller seja criado com o status `Pausado`. Marcando esse campo, é possível adicionar o seller, catalogar seus anúncios e fazer todos os testes necessários antes de disponibilizá-lo no seu storefront, para que receba pedidos.  

**Campos exclusivos para integração de seller externo**
- **Url de fulfillment:** url da API responsável por realizar o fulfillment dos pedidos do seller. Deve ser informada pelo seller ao marketplace.  
- **Usuário:** nome de usuário, caso utilize um hub para integrar-se ao seller externo.     
- **Senha:** senha de usuário, caso utilize um hub para integrar-se ao seller externo.

**Informações básicas do seller**
- **Nome do seller:** nome da loja que venderá em seu marketplace.
- **ID do seller:** código para identificação interna desse seller. Ele pode criar o padrão que for melhor pra ele nesse caso, mas o código não será editável após a criação. Regras para criação do código:  
    - Não inserir espaços ou caracteres especiais.  
    - Preferencialmente usar somente letras minúsculas, pois o campo é “_case sensitive_”.  
    - Utilizar até 50 caracteres.    
    - Evitar utilizar somente a palavra "list" como ID.    
    - Para sellers whitelabel, o ID precisa começar com o [account name](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) do marketplace, seguido da identificação da sua escolha. Ex. marketplaceseller1
- **Grupos do seller:** palavra-chave que identifica o grupo a que este seller pertence, para ser filtrado na lista de sellers. Defina uma palavra-chave nova para criar um grupo novo, ou repita uma já usada para vincular o seller a um ou mais grupos existentes. Você pode criar grupos para sellers abrangentes, contas franquia, sellers third party, parceiros premium, ou qualquer outra categoria que se aplique ao seu negócio. Saiba mais em [Gerenciamento de Sellers (Beta)](link).  

**Acordos comerciais**
- **Políticas comerciais do marketplace:** selecione as [políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) válidas para o seller, para associar seus produtos e condições de venda a contextos diferentes. Por exemplo, política comercial usada no site e política comercial usada em um app.  
- **Comissão em produto:** defina a porcentagem de comissão aplicada aos produtos do seller.
- **Comissão em frete:** defina a porcentagem de comissão aplicada ao frete dos pedidos do seller.  
- **Adicionar comissões por categoria:** ao marcar essa opção, selecione categorias do seu catálogo que terão comissões específicas associadas ao seller. É possível definir a porcentagem de comissão por produtos e/ou frete para a categoria selecionada.   
- **Habilitar participação em carrinhos com vale-compra:** campo que permite o uso de vale compras do marketplace em produtos do seller, quando sellers processam pagamentos. Identifica compras feitas com um vale e apenas o valor da compra abatido do vale é repassado ao seller. Quando somente o marketplace processa pagamentos, este campo não é aplicável.   

**Informações complementares**
- **Adicionar logo:** faça o upload da imagem do logo do seller em PNG, JPG ou JPEG. O tamanho aceitável é até 500kb.    
- **CNPJ:** Cadastro Nacional da Pessoa Jurídica do seller.    
- **Email:** endereço eletrônico do administrador responsável.    
- **Descrição:** texto que caracteriza o seller. Deve ser feito com tom comercial, pois o conteúdo pode aparecer na vitrine do marketplace, ao customizar o CMS, ou storefront no VTEX IO.    
- **Política de entrega:** descrição da política de entrega acordada previamente entre marketplace e seller.    
- **Trocas e devoluções:** descrição da política de trocas e devoluções acordadas previamente entre marketplace e seller.     
- **Política de Privacidade de Segurança:** descrição da política de segurança acordada previamente entre marketplace e seller.  

<div class="alert alert-info">
Com a nova versão da página, lançada em 2022, retiramos da tela o campo Endpoint de Catálogo, pois não é mais necessário para a integração com um novo seller. Caso necessário, ainda é possível realizar o gerenciamento do campo por meio de API.
</div>

Uma vez preenchido o formulário e clicado em **Salvar**, seu seller será adicionado ao marketplace. Para que a configuração da sua loja como marketplace seja concluída, é preciso também [Mapear marcas, categorias e especificações do catálogo do seller](https://help.vtex.com/pt/tutorial/mapeando-categorias-e-marcas-para-marketplace/) e [Aprovar anúncios recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/).

## Saiba mais

- [Criar política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)  
- [Gerenciamento de sellers (Beta)](https://help.vtex.com/pt/tutorial/gerenciamento-de-sellers-beta--6eEiOISwxuAWJ8w6MtK7iv)
- [Configurar marketplace VTEX](https://help.vtex.com/pt/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb)  
- [Ações para a operação de marketplaces VTEX](https://help.vtex.com/pt/tutorial/acoes-para-a-operacao-de-marketplaces-vtex--2SdIflvwywiOqCpczKCfev)  
