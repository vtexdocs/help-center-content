---
title: 'Definições de arquitetura para o VTEX Sales App'
status: PUBLISHED
createdAt: 2026-09-17T00:00:00.000Z
updatedAt: 2026-09-17T00:00:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: XXX
locale: pt
---

## TEXTO DA BIBA - Definições Fundamentais de Projeto

`https://docs.google.com/document/d/1_NfEwrVMQltM1E9JvyU9z0QrCQOs6CNI6VIUWnAGH3M/edit?tab=t.0`

Antes de configurar o **Sales App**, o sucesso da operação depende de uma base sólida de decisões de negócio antes mesmo da configuração técnica. Este artigo apresenta o roteiro para que diferentes perfis de clientes entendam o que precisam decidir e configurar.

## Definições Fundamentais de Projeto

Antes de iniciar a implementação, sua empresa precisa passar por estas quatro etapas decisórias:

1. **Casos de uso:** Em que situações o Sales App será utiizado?
2. **Definições de Negócio (Arquitetura):** Determine como será sua estrutura de lojas e estoques. Isso inclui definir o uso de contas franquia, centros de distribuição (CDs) e quais estoques estarão ativos para o Sales App. Defina também qual será a política comercial em uso e se haverá oferta de produtos de marketplace (3P). É vital estabelecer quais estoques ficarão disponíveis para o vendedor e configurá-los corretamente.  
3. **Definições de Operação (Engajamento):** Como os vendedores irão usar o app? Defina os níveis de acesso, quais funcionalidades estarão liberadas e como será o plano de treinamento. Um ponto crucial é o modelo de comissionamento para lojas: em operações omnichannel, o engajamento depende de como a venda feita na loja (mas entregue pelo e-commerce) será creditada para motivar a equipe.  
4. **Definições de Pagamento:** Decida quais bandeiras e tipos de pagamento (PIX, Cartão, Link, Dinheiro) serão aceitos. Lembre-se que isso pode exigir a contratação e homologação de provedores e adquirentes específicos para a operação física.

**Suporte Especializado:** Se a sua arquitetura for complexa ou exigir recursos customizados, não hesite em acionar o time de **Professional Services da VTEX** para garantir a segurança e eficiência da implementação.

### Casos de uso

Definir como quer usar o Sales App é crucial para o próximo passo. Os casos de uso mais frequentes são:

- Apenas como app para casos de ruptura de estoque.
- Como primeira opção para vendedores checarem o estoque local e remoto e fecharem compras com mobilidade.
- Como única ferramenta da loja física.
- **Atendimento remoto:** vendedores utilizando o app para fechar vendas assistidas via canais digitais.
- **Eventos e Pop-up Stores:** o Sales App é versátil e pode ser levado para onde seu cliente estiver, como vendas rápidas em feiras ou quiosques temporários.

> ℹ️ Certifique-se de seguir o **Playbook para Eventos** da VTEX para evitar surpresas operacionais.  

Avalie se sua operação precisa de **Extensões** (como para programas de fidelidade, serviços adicionais ou formulários customizados). Note que a funcionalidade de extensões pode exigir requisitos específicos de desenvolvimento. Independente do seu caso de uso, é importante ter em mente que para funcionalidades que o Sales App não oferece nativamente, a capacidade de extensões geralmente pode ser a resposta, permitindo que você ou seu parceiro desenvolva módulos em pontos estratégicos da jornada de vendas, para recursos que são cruciais para estratégia. Acesse a documentação de extensões.

### Definição de arquitetura Técnica

#### A. Prateleira Infinita (Endless Aisle)

**Para quem é:** Empresas que buscam vendas incrementais, evitando a ruptura de estoque local ao oferecer o catálogo do e-commerce.

**O que decidir:** Modelo de estoques e arquitetura de lojas, franquias e retirada.

**Configuração:** Pode ser implementada sem Omni (conta principal), com Multiestoque (lojas como warehouses) ou com Contas Franquia (gestão logística independente).

**Configuração Técnica:**

* **Sem Omni:** Configure o Sales App na conta principal usando as mesmas políticas comerciais e estoques do e-commerce.  
* **Com Omni (Multiestoque):** Cadastre cada loja física como um *warehouse* (estoque) na conta principal. Recomendado para quem não precisa de gestão separada de preços por loja.  
* **Com Conta Franquia:** Crie contas franquia para cada loja. Elas herdam o catálogo, mas possuem gestão própria de logística.

#### B. Estoque Local e Carrinhos Mistos (Carry Out)

**Para quem é:** Lojas que já possuem o ship from store habilitado ou que  querem permitir que o cliente "leve agora" o produto ou misture itens de retirada e entrega no mesmo pedido.

**O que decidir:** Como será feita a integração com o ERP para garantir que o inventário da loja esteja sempre atualizado?

**Configuração:** Exige arquitetura de **Conta Franquia** para vincular o estoque local ao ponto de retirada, além de integração em tempo real com o ERP para inventário e emissão de nota fiscal (NFC-e).

**Configuração Técnica:**

* **Arquitetura de Franquia:** Essencial para vincular a loja ao ponto de retirada e ao estoque local.  
* **Vínculo Logístico:** Configure o ponto de retirada com o endereço da loja e ative o estoque para "instore".  
* **Faturamento:** Integre com o sistema de Nota Fiscal (NFC-e/SAT) via PDV ou ERP para permitir a saída imediata do produto, por meio do protocolo de integração.
* **Conciliação:** Ajuste sistêmico e operacional para garantir o fluxo correto de faturamento de acordo com suas definições junto ao financeiro.

#### C. Ferramenta Única de Venda (POS-like)

**Para quem é:** Operações que desejam substituir o PDV tradicional pelo Sales App para 100% das vendas.

* **Configuração:** Camada de integração com o ecossistema para módulos adicionais para loja física como gestão de caixa (sangrias, fechamento), relatórios de conciliação e fluxos avançados de troca e devolução por meio de pontos de extensão e integrações  
* **O que decidir:** Quais módulos são necessários e quais parceiros do ecossistema serão utilizado?  
* **Configuração Técnica mais comum :**  
  * **Módulos de Gestão:** Implementar camadas de *Cash Management* (sangrias, suprimentos e fechamento de turno).  
  * **Pós-Venda:** Configurar módulos de troca e devolução integrados ao OMS e ERP para reorquestração de estoque.  
  * Mapeamento de mais requisitos irão variar de acordo com o projeto de cada cliente&nbsp;

**Extensões:** Se você possui casos como venda de serviços adicionais, programas de fidelidade, ou quer trazer alguma informação da sua operação para dentro da jornada do Sales App, considere o uso de Extensões \[Link\], permitindo que seu time ou parceiros desenvolvam módulos específicos integrados à jornada.&nbsp;

### Definições de Operação

1. Para acompanhar a performance das vendas de cada colaborador e loja, você pode:  
   1. Acompanhar pelo próprio Sales App, ativando a performance de vendas e recomendando ao seus colaboradores acompanhem pelo próprio app suas métricas básica  
   2. Utilize os campos no pedido \[link\] para integrar os pedidos com seus sistemas internos e cálculo de comissionamento.&nbsp;  
2. Defina com as áreas internas, lojas próprias e franquias como será o comissionamento pelas vendas omni e como elas entrarão nas metas e repasse de lojas, franquias, gerentes e vendedores.&nbsp;  
   1. Essa definição não impacta na configuração na VTEX ou nas capacidades oferecidas pelo Sales App, mas ter uma definição clara é essencial tanto para o setup correto de sua operação, modelo de repasse e também impacta no engajamento do time com a plataforma&nbsp;  
3. Defina como será o uso da plataforma nas lojas e pelos vendedores: Uso no mobile ou no desktop, um login único por loja ou por usuário?&nbsp;  
   1. De acordo com essas definições registre os usuários e lojas de acordo com a definição e registro o formato do código do vendedor, decidindo se é opcional ou obrigatório no fluxo.&nbsp;  
4. Defina o que vendedores podem fazer com o Sales App em mãos. Existem configurações que você pode habilitar/desabilitar durante o uso do app. Cada uma delas possui uma forma de ativação diferente, mas que podem ajudar na sua operação, essa configurações como:  
   1. Aplicar preço manual  
   2. Forçar estoque local  
   3. Cancelar pedido  
   4. Visualizar a sua performance de vendas  
   5. Visualizar a performance de vendas dos demais vendedores

**Definições de Pagamento

5. Antes de instalar o Sales App, você precisa definir os métodos de pagamentos que irá habilitar no seu fluxo. Importante que parte desses fluxos;  
6. **Definições de Pagamento:**
   1. Irá operar com social selling / link compartilhado?&nbsp;  
      1. Esse método utiliza o checkout do seu ecommerce e deve ser configurado seguindo o tutorial \[link\]  
   2. Irá operar com PIX?  
      1. Esse método usará o mesmo gateway do ecommerce.&nbsp;  
   3. Irá operar com dinheiro?  
      1. Controle de pagamentos por fora da solução, utilizando promissória como método.  
   4. Pagamentos com adquirentes já homologados  
      1. Necessário contratação do parceiro disponível na sua região , configuração das máquinas, configuração do provedor na sua conta principal, e testes&nbsp;  
   5. Pagamentos não integrados, com promissória.  
      1. Exige integração com sistema externos (PDVs, ERPs) para receber a confirmação do pagamento&nbsp;&nbsp;  
         1. Quando usar: casos de cartão private label, métodos de pagamentos já consolidados na sua loja. Esse modelo está em Closed Beta. Para saber mais procure o time de Sales App.&nbsp;

### Próximos passos

Se você tem um caso de uso específico ou quer acelerar seu faturamento com vendas assistidas, **abra um ticket no suporte**. Nossa equipe ajudará você a entender como o Sales App pode alavancar o seu negócio.

________________________________________________________________________________________________
