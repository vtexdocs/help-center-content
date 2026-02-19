---
title: 'Adicionar seller'
id: tutorials_392
status: PUBLISHED
createdAt: 2017-04-27T22:07:15.357Z
updatedAt: 2025-01-06T15:48:19.897Z
publishedAt: 2025-01-06T15:48:19.897Z
firstPublishedAt: 2017-04-27T23:03:22.826Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: adding-a-seller
legacySlug: configurando-seller
locale: pt
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

[Gerenciamento de Sellers](/pt/docs/tutorials/gerenciamento-de-sellers) é a página onde operadores de marketplace adicionam sellers, registram suas informações e administram seus status. Este artigo orienta sobre os passos necessários para se adicionar um novo seller. As informações inseridas na criação de um seller não ficam visíveis no storefront do marketplace, e são visualizadas apenas por usuários do marketplace, em seu Admin VTEX em **Marketplace > Gerenciamento.** 

Para adicionar um seller não identificável, também chamado de [seller white label](/pt/docs/tutorials/seller-white-label), é necessário ter esse modelo previsto no contrato com a VTEX. Uma vez ajustado o contrato com o representante comercial da VTEX responsável por seu marketplace, solicite a [adição de uma conta franquia](/pt/docs/tutorials/o-que-e-conta-franquia) por meio do nosso Suporte. Toda conta franquia é criada como seller white label e não é possível mudar o tipo de seller após a sua criação. 

> ℹ️ Se quiser encontrar novos parceiros para venderem em seu marketplace, utilize o **Encontrar sellers,** que facilita a identificação e contato entre marketplaces e sellers que operam no ecossistema VTEX, além de conectores certificados (parceiros).

1. No seu Admin VTEX, acesse **Marketplace > Gerenciamento.**
2. Clique em `Adicionar Seller`.
3. Escolha um tipo de integração entre **Seller VTEX** e **Seller Externo**.  
4. Preencha os campos, conforme descrição abaixo.   
5. Clique em `Salvar`.   

**Integração**
- **Conta VTEX do seller:** preencha com a [account name](/pt/docs/tutorials/o-que-e-account-name) do seller.    
- **ID do afiliado:** código identificador do [afiliado](/pt/docs/tutorials/como-configurar-afiliado), definido pelo seller ao cadastrar seu marketplace. Este código deve ser informado pelo seller e sempre é composto por três consoantes, sejam elas repetidas ou não. Vogais não são aceitas.    
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
    - Para sellers whitelabel, o ID precisa começar com o [account name](/pt/docs/tutorials/o-que-e-account-name) do marketplace, seguido da identificação da sua escolha. Ex. marketplaceseller1
- **Grupos do seller:** palavra-chave que identifica o grupo a que este seller pertence, para ser filtrado na lista de sellers. Defina uma palavra-chave nova para criar um grupo novo, ou repita uma já usada para vincular o seller a um ou mais grupos existentes. Você pode criar grupos para sellers abrangentes, contas franquia, sellers third party, parceiros premium, ou qualquer outra categoria que se aplique ao seu negócio. Saiba mais em [Gerenciamento de Sellers](/pt/docs/tutorials/gerenciamento-de-sellers).  

**Acordos comerciais**
- **Políticas comerciais do marketplace:** selecione as [políticas comerciais](/pt/docs/tutorials/como-funciona-uma-politica-comercial) válidas para o seller, para associar seus produtos e condições de venda a contextos diferentes. Por exemplo, política comercial usada no site e política comercial usada em um app.  
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

> ℹ️ Com a nova versão da página, lançada em 2022, retiramos da tela o campo Endpoint de Catálogo, pois não é mais necessário para a integração com um novo seller. Caso necessário, ainda é possível realizar o gerenciamento do campo por meio de API.

Uma vez preenchido o formulário e clicado em **Salvar**, seu seller será adicionado ao marketplace. Para que a configuração da sua loja como marketplace seja concluída, é preciso também [Mapear marcas, categorias e especificações do catálogo do seller](/pt/docs/tutorials/mapeando-categorias-e-marcas-para-marketplace/) e [Aprovar anúncios recebidos](/pt/docs/tutorials/sugerindo-e-aprovando-skus/).

## Saiba mais

- [Criar política comercial](/pt/docs/tutorials/criar-uma-politica-comercial)  
- [Gerenciamento de sellers](/pt/docs/tutorials/gerenciamento-de-sellers)
- [Configurar marketplace VTEX](/pt/docs/tutorials/configurar-marketplace-vtex)  
- [Ações para a operação de marketplaces VTEX](/pt/docs/tutorials/acoes-para-a-operacao-de-marketplaces-vtex)  
