---
title: 'Configurar cadastro do conector Carrefour'
id: 2AhqcmRN1mseCsGuGIe6GK
status: PUBLISHED
createdAt: 2018-10-08T23:26:55.073Z
updatedAt: 2024-07-02T19:27:42.975Z
publishedAt: 2024-07-02T19:27:42.975Z
firstPublishedAt: 2018-10-08T23:51:59.055Z
contentType: trackArticle
productTeam: Channels
slugEN: registering-the-carrefour-integration
locale: pt
trackId: 2wYlj07cNuA8k8mmwY86K2
trackSlugEN: configurar-integracao-com-o-carrefour
order: 6
---

O cadastro do conector é feito no Admin da VTEX. Para realizá-la, siga as instruções abaixo.

1. No Admin VTEX, acesse **MARKETPLACE > Integrações**.
2. Selecione a opção `Configuração`.
3. Busque pelo box do Carrefour e clique em `Integrar`.
4. Preencha os campos da tela descritos logo abaixo e, em seguida, clique no botão `Salvar Configuração` (campos marcados com o símbolo * são obrigatórios).

- __Integração Ativada*:__ marque `Sim` para que a integração comece a operar.
- __E-mail de notificação*:__ preencha com o e-mail do responsável da sua loja VTEX. Caso ocorra algum erro na integração do pedido, será enviada uma mensagem para o e-mail cadastrado.
- __ShopKey*:__ preencha com Token enviado pelo Carrefour na etapa [Configuração no Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/4ixukTWxz7PsN2fdNOZUue).
- __ShopId:__ preencher com ID da sua loja enviado pelo Carrefour na etapa [Configuração no Carrefour](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-carrefour--2wYlj07cNuA8k8mmwY86K2/4ixukTWxz7PsN2fdNOZUue).
- __Título do produto*:__ nesse campo, você deve escolher qual o formato do anúncio que seu produto terá no Carrefour Marketplace. As opções são:
  * Nome do produto - Nome do SKU
  * Marca - Nome do produto - Nome do SKU
  * Marca -Nome do produto
  * Nome do produto - Nome do SKU - Marca
  * Nome do produto - Marca
  * Nome do produto
- __Estoque mínimo:__ determina o valor mínimo de estoque de segurança. Se a quantidade de itens de um produto em estoque estiver abaixo do valor escolhido, seu anúncio é pausado para evitar que sejam feitas vendas sem estoque durante o tempo de atualização do Carrefour pela VTEX. O valor de estoque mínimo é aplicado a todos os produtos, portanto verifique se algum produto deixaria de ser anunciado devido ao seu estoque inicial.
- __Enviar KIT*:__ ao escolher `Não`, SKUs [cadastrados como kit](https://help.vtex.com/pt/tutorial/cadastrando-kit--tutorials_215) não são enviados para o Carrefour. Ao habilitar `Sim`, todos os itens da sua política comercial são enviados para o marketplace, sem filtrar SKUs cadastrados como kit. Mudanças na configuração do conector podem ser feitas a qualquer momento, sendo que isso não afeta SKUs que já tenham sido enviados. Por exemplo, se você mudasse sua configuração de `Sim` para `Não`, SKUs enviados anteriormente para o Carrefour não seriam removidos ou sofreriam qualquer alteração. Se você mudar sua configuração de `Não` para `Sim`, você precisará [reindexar a base](https://help.vtex.com/pt/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802) para que a configuração seja aplicada.

> ℹ️ Com a opção *Não* ativada, tentativas de envio para o Carrefour de SKUs cadastrados como kit resultarão no seguinte aviso: *O conector está configurado para não enviar SKUs do tipo Kit*. Esta mensagem pode ser visualizada no Admin, no módulo ** MARKETPLACE > Integrações > Produtos**, ao se clicar sobre o SKU.

- **Mapeamento de Certificados de Homologação (Opções aceitas pelo marketplace: ANATEL, INMETRO, ANVISA, MAPA e Não Se Aplica):** devido a uma definição do Carrefour, produtos de determinadas categorias deverão possuir obrigatoriamente uma [especificação de produto](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) cadastrada com o código de homologação de cada agência reguladora para serem comercializados no marketplace. Por isso, para as [categorias elegíveis](#categorias-elegiveis), é necessário preencher este campo com o nome da especificação de produto criada e o código de homologação do produto disponibilizado pelas agências reguladoras.

Caso a categoria de produtos não exija o mapeamento de certificados, o campo deverá ser preenchido com `Não se aplica`. Se nada  for preenchido no campo, o produto será mapeado pelo próprio Carrefour, fazendo com que a integração dos produtos demore mais para ocorrer.

  Exemplo: `CERTIFICADO_1 > ANATEL`

- __Política comercial*__: ID da [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que será utilizada para a integração com o Carrefour. São os produtos dessa política comercial que serão enviados para o marketplace.

> ℹ️ Preencha ao menos um dos campos do **mapeamento de SLA** mesmo que eles não sejam obrigatórios. Caso nenhum deles seja preenchido, não será possível simular o frete na VTEX e, consequentemente, os pedidos feitos no Carrefour não serão integrados.

- __Mapeamento de SLA de tipo Normal*:__ preencha com o nome do [Método de Envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126) cadastrado na [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_1400). Por exemplo, se você cadastrou como `Normal`, então, deve preencher esse campo o nome exatamente igual.
- __Mapeamento de SLA de tipo Expressa*:__ preencha com o nome do [Método de Envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126) cadastrado na [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_1400). Por exemplo, se você cadastrou como `Expressa`, então, deve preencher esse campo o nome exatamente igual.
- __Mapeamento de SLA de tipo Econômica*:__ preencha com o nome do [Método de Envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126) cadastrado na [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_1400). Por exemplo, se você cadastrou como `Entrega econômica`, então, deve preencher esse campo o nome exatamente igual.
- __Mapeamento de SLA de tipo Agendada*:__ preencha com o nome do [Método de Envio](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126) cadastrado na [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_1400). Por exemplo, se você cadastrou como `Agendada`, então, deve preencher esse campo o nome exatamente igual.
- **Mapeamento de Campos Customizados (Nome e descrição):**  Para utilizar esse mapeamento é necessário criar um campo customizado. Para saber como criar campos customizados, acesse a documentação [Cadastrar especificações ou campos de produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto--tutorials_106).  

> ℹ️ O mapeamento de campos customizáveis está disponível apenas para **nome do produto** e **descrição do produto**. **Exemplo de nome para o novo campo:** `CRF_ProductName` para nome do produto e `CRF_ProductDescription` para descrição do produto.  

Para o mapeamento funcionar, é necessário o seller seguir os seguintes passos:  

1. Criar um campo do tipo `Texto grande`.  
2. Desativar a opção  `Exibe especificação`.  
3. Preencher os campos criados em cada produto cadastrado.  

O preenchimento desse campo deve ser realizado da seguinte maneira:

1. Preencha o campo DE com o nome do campo de origem.   
Obrigatoriamente `ProductName` para título do produto ou Obrigatoriamente `ProductDescription` para descrição do produto.  
2. Preencha o campo PARA com o nome do novo campo.   
`CRF_ProductName` para nome do produto e `CRF_ProductDescription` para descrição do produto.    
3. Clique no botão e uma regra de mapeamento será adicionada a sua integração.  

> ℹ️ Cada regra cadastrada mapeia apenas um campo. Caso o campo mapeado não tenha um valor preenchido, será enviado o valor padrão de `Título` ou `Descrição` cadastrados no catálogo.  

### Categorias elegíveis

Exemplos de categorias que exigem o mapeamento de certificados em suas respectivas agências reguladoras:

#### INMETRO

- Acessórios de Informática
- Produtos Infantis e para Bebês
- Beleza e Perfumaria
- Brinquedos e Jogos
- Cama, Mesa e Banho
- Casa e Decoração
- Esportes
- Farmácia
- Ferramentas e Segurança
- Equipamentos de Ginástica
- Instrumentos Musicais
- Artigos Automotivos
- Papelaria
- Materiais para Reforma e Construção
- Produtos de Saúde e Bem Estar
- Suplementos Alimentares
- Utilidades Domésticas

#### ANVISA

- Alimentos infantis
- Suplementos Alimentares
- Medicamentos
- Materiais de limpeza e Lavanderia
- Produtos de Higiene e Beleza

#### MAPA

- Produtos de origem animal
- Bebidas alcoólicas e não alcoólicas
- Bebidas fermentadas
- Vegetais in natura
