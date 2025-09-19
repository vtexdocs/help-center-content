---
title: 'Como funciona a promoção Compre e ganhe'
id: tutorials_322
status: PUBLISHED
createdAt: 2017-04-27T22:08:41.148Z
updatedAt: 2025-02-24T16:17:50.979Z
publishedAt: 2025-02-24T16:17:50.979Z
firstPublishedAt: 2017-04-27T23:03:14.992Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: buy-one-get-one
legacySlug: compre-e-ganhe
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

A promoção Compre e Ganhe oferece frete grátis ou um brinde ao adicionar produtos ao carrinho. Quando os critérios são atendidos, esses benefícios são aplicados automaticamente. Por exemplo, ao comprar uma televisão, o frete pode ser gratuito, ou ao adquirir um videogame, um jogo extra pode ser adicionado ao pedido.

![Compre e Ganhe-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_1.gif)

Para configurar o **Compre e Ganhe** o seller precisa executar os seguintes passos:

- [Criar a promoção Compre e Ganhe](#criar-a-promocao-compre-e-ganhe)
- [Condições do Compre e Ganhe](#condicoes-do-Compre-e-Ganhe)
- [Condições para aplicar a promoção](#condicoes-para-aplicar-a-promoção)
- [Configurar restrições para o uso da promoção](#configurar-restrições-para-o-uso-da-promoção)
- [Configurar acúmulo e concorrência](#configurar-acumulo-e-concorrencia)
- [Exibir a promoção na página de produto](#exibir-a-promocao-na-pagina-de-produto)

## Criar a promoção Compre e Ganhe

1. No Admin VTEX, acesse **Promoções** > **Promoções** ou digite **Promoções** na barra de busca no topo da página.
2. Clique em `Criar promoção`.
3. Selecione a opção **Compre e Ganhe**.
4. Preencha os campos da página. Na tabela abaixo você encontra detalhes para preenchimento.
5. Clique em `Salvar`.

| **Campo**                                | **Descrição**                                                                                                                                                                                                                                    | **Exemplo**                                                                                                                                                                                                                  |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Nome**                                 | Escolha um nome claro e objetivo para a promoção (até 150 caracteres).                                                                                                                                                                                | Queima de Estoque de Verão: Compre e Ganhe Descontos!                                                                                                                                                                          |
| **Status**                               | Defina se a promoção estará **Ativa** ou **Inativa**. Configure como <i class="fas fa-toggle-on" aria-hidden="true"></i> para aplicar a promoção conforme as datas e horários configurados. Configure como <i class="fas fa-toggle-off" aria-hidden="true"></i> para pausá-la, mesmo que esteja dentro do período definido. | ![Habilitar Promoções-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_2.png) ![Desabilitar Promoções-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_3.png) |
| **Descrição**                            | A descrição interna da promoção deve ser usada para registrar informações destinadas à comunicação interna da loja. Este campo serve para especificar o motivo da promoção, como uma campanha específica ou uma queima de estoque. A descrição deve ter no máximo 10.000 caracteres. | Ao comprar um produto, você recebe um desconto no segundo produto.                                                                                                                   |
| **Data de início e horário de início**   | Selecione a data e o horário exatos para o início da promoção, garantindo que ela seja ativada no momento desejado. Certifique-se de ajustar conforme o planejamento da campanha para maximizar sua eficácia.                                        | ![Data e horário de início da Promoções-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_4.png)                                         |
| **Data de término e horário de término** | Defina o período de validade da promoção configurando a data e o horário exatos para sua desativação automática. A data deve ser posterior à data atual.                                                                                                                                  | ![Data de término e horário da Promoções-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_5.png)                                       |
| **Usar configurações de recorrência**    | Selecione esta opção para programar a repetição automática da promoção em dias e horários específicos. Configure os intervalos desejados para garantir recorrência conforme o planejamento.                                                        | ![Usar recorrência-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_6.png)                                            |

### Definir os sellers participantes 

Nesta seção, você pode definir se a promoção será aplicada a todos os sellers ou apenas a sellers específicos. Selecione uma das opções a seguir para a aplicação da promoção.
![Seller-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_7.png)

Selecione uma das opções para a aplicação da promoção.

- **Todos:** a promoção será aplicada a todos os sellers cadastrados. Use essa opção quando quiser que todos os produtos, de todos os sellers, façam parte da campanha.
- **Iguais a:** selecione esta opção para incluir apenas sellers específicos na promoção. Após selecionar "Iguais a", você poderá escolher os sellers desejados no campo abaixo. Somente os sellers selecionados terão seus produtos incluídos na campanha.
- **Diferentes de:** selecione esta opção para excluir sellers específicos da promoção. Após escolher "Diferentes de", você poderá selecionar os sellers que não deseja incluir na campanha. Todos os demais sellers estarão incluídos.

> ⚠️ Não é possível selecionar diretamente um seller white label. Para incluir um seller white na promoção, existem duas opções:<ol>1. Restringir os sellers à loja principal. Essa restrição adiciona todos os sellers white label da sua loja à promoção.</ol><ol>2. Deixar a seleção vazia, incluindo todos os sellers. Aqui, todos os tipos de sellers - white label ou não - serão adicionados à promoção.</ol>

### Selecionar políticas comerciais 
Nesta seção, você pode selecionar as políticas comerciais que serão aplicadas à sua promoção. As políticas comerciais definem as condições de venda e entrega dos produtos.

![Politica comercial-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promo%C3%A7%C3%B5es-e-taxas/promo%C3%A7%C3%B5es/compre-e-ganhe_8.png)

Você pode escolher entre as seguintes opções:

- **Todas:** aplica a promoção a todas as políticas comerciais cadastradas, sem restrições. Todos os produtos, independentemente da política comercial associada, estarão incluídos na promoção.
- **Iguais a:** selecione as políticas comerciais que você deseja incluir na promoção. Essa opção permite que você especifique quais políticas se aplicam aos produtos que receberão o desconto.
- **Diferentes de:** selecione as políticas comerciais que você deseja excluir da promoção. Essa opção remove determinadas políticas, garantindo que o desconto não seja aplicado a produtos que seguem essas regras comerciais.

# Condições do Compre e Ganhe
Nesta seção, você pode configurar promoções do tipo "Compre e Ganhe", permitindo oferecer benefícios ao comprar itens. A configuração ocorre em duas etapas:

- Definição dos itens que devem ser adquiridos.
- Escolha do benefício concedido.

Para começar, defina as coleções, SKUs e a quantidade mínima necessária para ativar a promoção:

**Na compra de:**
- **SKUs:** insira o nome ou ID dos SKUs elegíveis para a promoção.
- **Coleções:** adicione as coleções de produtos que farão parte da promoção.
- **Quantidade mínima:** defina a quantidade mínima de itens que o cliente deve adicionar ao carrinho para receber o benefício.
- **Considerar apenas itens iguais:** marque esta opção se desejar que a promoção só seja ativada com produtos idênticos.

> ⚠️ Uma promoção Compre e Ganhe permite configurar até 100 SKUs diferentes simultaneamente.

**O cliente ganha:**

Após definir os itens de compra, escolha o benefício que o cliente receberá:

- **Frete grátis:** escolha entre as seguintes opções de frete grátis:
  - **Todos os fretes:** aplica frete grátis a todas as modalidades de envio.
  - **Somente o frete mais barato:** oferece frete grátis apenas na opção mais econômica.
  - **Tipo de frete específico:** selecione um tipo específico de frete, como envio expresso ou transportadora particular.
- **Brinde:** desconto total sobre o valor do produto definido como brinde.
    - **SKUs:** permite a seleção dos SKUs (por nome ou ID) correspondentes ao brinde oferecido. 
    - **Quantidade de brindes:** estabelece um limite para a quantidade de brindes que o comprador pode receber, mesmo que haja múltiplos itens elegíveis no carrinho. Existem duas opções:
        - ** Um brinde:** permite receber um brinde, independentemente da quantidade de itens no carrinho.
        - **Um brinde para cada item elegível no carrinho:** permite receber um brinde para cada item elegível no carrinho.
- **Preço máximo:** define o valor máximo permitido para cada item da compra. Esse limite será aplicado aos produtos elegíveis para o benefício.

### Condições para aplicar a promoção
Nesta seção, detalharemos as condições em que você deve aplicar para que uma promoção seja considerada válida.

- **Meio de pagamento:** a promoção será aplicada quando você selecionar um dos métodos de pagamento especificados e o carrinho tiver apenas um método de pagamento.
- **Número do Bin do cartão:** a promoção só poderá ser aplicada se forem utilizados cartões de bandeiras, bancos ou categorias específicas, identificados por seus códigos BIN. É possível realizar a importação de uma lista de BINs, que deve estar salvo em um arquivo de texto (**.txt**) ou (**.csv**) com cada BIN descrito em uma linha diferente.
- **Cluster de clientes:** selecione um [cluster de clientes](/pt/tutorial/como-criar-um-cluster-de-clientes) já criado no Master Data, seguindo o formato `field=value` ou `field contains value`.
- **Tipo de frete:** permite escolher se a promoção será aplicada em um ou mais tipos de fretes selecionados.
- **Localização de entrega:** a promoção só será aplicada caso o endereço de entrega do pedido esteja de acordo com as seguintes definições abaixo:
  - **Países de entrega:** permite que você selecione os países onde a promoção será válida. Apenas pedidos com endereços de entrega localizados nos países selecionados poderão se beneficiar da promoção.
  - **Cep de entrega:** permite restringir a promoção a intervalos de CEP específicos, permitindo mais controle sobre as áreas onde a promoção será aplicada.
    - **Incluir:** a promoção será aplicada somente para os endereços dentro dos CEPs definidos.
    - **Excluir:** a promoção não será aplicada aos endereços dentro dos CEPs definidos.
    - **Campo "de":** insira o início do intervalo de CEP.
    - **Campo "até":** insira o final do intervalo de CEP.
  - **UTM:**  permite configurar a promoção para que seja aplicada quando o acesso ao site ocorrer por meio de uma URL com parâmetros UTM ou quando um cupom vinculado a esses parâmetros for utilizado. Defina os parâmetros UTM seguindo as regras de formatação, utilizando apenas letras, números, hífens e sublinhados. Se necessário, preencha os seguintes parâmetros:

    - **Utm_source:** o desconto será concedido caso a navegação seja realizada com a utm_source com o valor cadastrado.
    - **Utm_campaign:** o desconto será concedido caso a navegação seja realizada com a utm_campaign com o valor cadastrado.
    - **Criar cupom a partir dos parâmetros UTM acima:** permite gerar um cupom com base nos parâmetros UTM inseridos nos campos `UTM_source` e `UTM_campaign`. 
    - **Ver cupons vinculados:** permite visualizar os cupons que já foram associados aos parâmetros UTM definidos. Ao criar cupons a partir de UTMs, não use o nome `new`, pois isso gera uma URL inválida.

### Configurar restrições para o uso da promoção
A seção Restrições de Uso permite definir limites para o uso da promoção, seja para toda a loja ou por cliente individual. Marque as opções abaixo conforme necessário:

- **Limitar o uso da promoção na loja:** restringe a quantidade total de vezes que a promoção pode ser utilizada na loja.
- **Limitar o uso da promoção por cliente:** permite restringir o número de vezes que cada cliente pode utilizar a promoção.

### Configurar acúmulo e concorrência
Nesta seção, você pode definir se a promoção poderá ser combinada com outras promoções. Abaixo estão as opções disponíveis:

- **Permitir acumular com outras promoções:** a promoção poderá ser combinada com outras promoções ativas no momento. Note que, por padrão, a promoção já acumula descontos de frete ou brindes. Para mais informações acesse o artigo [Como funciona a concorrência de promoções](/pt/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270).

- **Permitir acumular com preços manuais:** a promoção será aplicada mesmo quando os preços forem ajustados manualmente, garantindo que a promoção funcione junto com ajustes individuais de preços no carrinho.

### Exibir a promoção na página de produto
Destaque a promoção na página de produtos e adicione dados personalizados para customizações na loja nesta seção.

- **Destacar nos produtos:** marque esta opção para exibir a promoção diretamente nas páginas de produtos. Lembre-se de configurar essa exibição no módulo CMS.

> ℹ️ Lembre-se configurar essa exibição no módulo <a href=https://help.vtex.com/pt/tutorial/configurando-promocao-com-destaque-flag--tutorials_2295>CMS.</a>

- **Informações adicionais:** clique em `Criar` para adicionar campos personalizados com nome e valor, que podem ser usados para customizações na loja.

