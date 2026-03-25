---
title: 'Criar uma política comercial'
id: 563tbcL0TYKEKeOY4IAgAE
status: PUBLISHED
createdAt: 2019-01-24T20:45:49.369Z
updatedAt: 2025-08-27T17:00:49.320Z
publishedAt: 2025-08-27T17:00:49.320Z
firstPublishedAt: 2019-01-24T22:14:00.848Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: creating-a-trade-policy
legacySlug: o-que-e-uma-politica-comercial
locale: pt
subcategoryId: 6J3wx7KM4oysymsWuUACyY
---

[Políticas comerciais](/pt/docs/tutorials/como-funciona-uma-politica-comercial) são usadas na VTEX para agrupar configurações de catálogo, preços, promoções, inventário, logística, segmentação de clientes e pagamentos para diferentes canais de venda. Canais de venda podem incluir marketplaces, ecommerce próprio, lojas físicas, ou lojas B2B, por exemplo.

## Gerenciar políticas comerciais

A seção Políticas Comerciais do seu admin apresenta uma tabela com todas as políticas comerciais já cadastradas. Também é possível filtrar os resultados, fazer uma busca por palavra chave, e ordenar na tabela as políticas comerciais já cadastradas. O ID da política comercial é determinado automaticamente pelo sistema, a partir da ordem cronológica de criação de novas políticas.

Para definir as configurações de logística aplicadas a essa política comercial, é preciso [criar ou editar uma doca](/pt/docs/tutorials/gerenciar-doca), relacionada às transportadoras desejadas, inserindo o ID da política comercial no formulário de cadastro.

Para utilizar o mesmo catálogo em mais de uma política comercial, acesse a documentação [Associate Product with Trade Policy](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/product/-productId-/salespolicy/-tradepolicyId-).

## Adicionar uma política comercial

Para adicionar uma nova política comercial, acesse o Admin da VTEX. Usuários com o perfil Owner (admin) podem criar novas políticas.

Para criar uma nova política comercial:

1. No Admin da VTEX, acesse **Configurações da Loja**.
2. Clique em políticas comerciais.
3. Clique em `Nova política comercial`.
4. Revise as informações exibidas no aviso e confirme para prosseguir.
5. Preencha os campos da política comercial:

    * **Nome:** nome de identificação interna da política comercial.  
    * **Coleção:** este campo foi descontinuado e não está disponível para uso.  
    * **Sellers:** define os sellers associados à política comercial. Se nenhum seller for selecionado, todos os sellers da conta serão considerados automaticamente.  
    * **Código da moeda:** código da moeda usado na política comercial, como USD ou EUR. Esse campo é usado na internacionalização de preços. Quando o **locale** do usuário não corresponde ao da política comercial, os preços são exibidos com o código ISO da moeda, e não com o símbolo local.  
    * **Símbolo da moeda:** símbolo da moeda, como $ ou €. Ele é exibido para usuários cujo **locale** corresponde ao configurado na política. Se esse campo não for preenchido, o sistema usa o símbolo padrão do código de moeda selecionado.  
    * **Casas decimais da moeda:** número de casas decimais da moeda. Use esse campo apenas para sobrescrever o padrão definido pelas normas ISO. Se ele não for preenchido, o sistema usa o padrão do código de moeda selecionado.  
    * **Código do país:** país associado à política comercial.  
    * **Informações culturais:** idioma e região da política comercial, como en-US. Esse campo é usado em conjunto com o **Código da moeda** para a internacionalização de preços.  
    * **Fuso horário:** fuso horário da política comercial.  
    * **Ativo?:** define se a política comercial está ativa.  
    * **Regra condicional:** campo opcional que permite restringir a política comercial a clientes específicos com base em dados do Master Data. Quando preenchido, somente usuários que atendem à condição definida têm acesso à política. Por exemplo, isPremium=true aplica a política apenas a clientes marcados como premium. Deixe o campo em branco se não quiser restringir o acesso.  
    * **Herdar catálogo de política comercial:** permite herdar o catálogo de outra política comercial existente.

6. Clique em `Salvar`.

> ℹ️ A criação de uma nova política comercial pode gerar custos adicionais, conforme previsto no contrato de cada cliente. Em caso de dúvidas, consulte seu contrato ou entre em contato com o [suporte](https://supporticket.vtex.com/support). Todas as criações são registradas nos logs de auditoria do Admin, permitindo identificar qual usuário realizou a ação. Para mais informações, consulte [Como funciona o relatório de segurança](https://help.vtex.com/pt/docs/tutorials/entendendo-o-relatorio-de-seguranca).

## Saiba mais

- [Como funciona uma política comercial](/pt/docs/tutorials/como-funciona-uma-politica-comercial)    
- [Política comercial para marketplace](/pt/docs/tutorials/configurando-a-politica-comercial-para-marketplace)
- [Contratação de política comercial adicional](/pt/docs/tutorials/contratacao-de-politica-comercial-adicional)
- [Cadastrar doca](/pt/docs/tutorials/gerenciar-doca)

