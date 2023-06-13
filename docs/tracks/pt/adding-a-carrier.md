---
title: Cadastrar transportadora
id: 55MezrFTw2limlgT7KUg6l
status: DRAFT
createdAt: 2019-08-22T12:48:28.695Z
updatedAt: 2022-03-08T18:43:37.944Z
publishedAt: 
firstPublishedAt: 2019-10-21T12:51:47.591Z
contentType: trackArticle
productTeam: Post-purchase
slug: cadastrar-transportadora
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

As transportadoras são as empresas responsáveis por fazer a distribuição dos produtos vendidos por um e-commerce. É comum que uma loja tenha diversas transportadoras associadas a ela. No cadastro de transportadora, é possível configurar prazos, preços, modais e entregas diferentes, possibilitando uma logística altamente personalizada.   

## Como cadastrar
1. Acesse o módulo **Estoque & Entrega**.
2. Acesse a aba **Estratégia de Envio**.
3. Clique no botão **Nova Política de Envio**.
4. Preencha os campos listados abaixo.
5. Clique no botão **Salvar**.  

## Como excluir transportadora
1. Acesse o módulo **Estoque & entrega**.
2. Acesse a aba **Estratégia de Envio**.
3. Passe o mouse sobre a transportadora que deseja excluir.
4. Clique no ícone `x`.
5. Clique no botão **Confirmar**.  

## Como editar transportadora
1. Acesse o módulo **Estoque & entrega**.
2. Acesse a aba **Estratégia de Envio**.
3. Clique na **transportadora** que deseja alterar.
4. Altere as configurações desejadas. 

> Para alterar a [planilha de frete](https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=pt), basta fazer o download e subir a planilha atualizada.

5. Clique no botão **Salvar**.  

## Campos de cadastro de transportadoras
Para cadastrar uma política de envio, é preciso preencher uma série de campos.  
Os seguintes campos estão disponíveis:

### Dados Política de envio
- **Ativa**
Flag para indicar se a política de envio está ativa ou não.
- **Nome**
Nome interno da política de envio.
**Id**
Identificador interno e para integradores. Deve ser preenchido apenas com letras e números. Caso não seja preenchido, será criado um ID automaticamente.
- **Método de envio**
Tipo de entrega optada pelo cliente, serve para separar os diferentes serviços de entrega de uma  mesma transportadora. É o nome que será exibido na finalização de compra para o cliente. Ex. expresso vs. normal. Serve para definir a concorrência entre tipos de entrega de cada transportadora, para a escolha da melhor opção no Checkout. [Entenda mais sobre tipo de entrega](https://help.vtex.com/pt/tutorial/como-funciona-o-tipo-de-entrega--tutorials_126?locale=pt).

### Planilha de frete
- **Upload de tarifas de envio**
 É a tabela com os valores e prazos de frete assumidos pela transportadora. Entenda mais sobre a planilha de frete. Confira nossa documentação sobre  [planilha de frete](https://help.vtex.com/pt/tutorial/como-montar-a-planilha-de-frete--tutorials_127?locale=pt) para saber mais.

### Dimensões do Pacote
- **Soma das dimensões**
São os limites máximos das arestas do pacote, aceitos pela transportadora. Ao atingir esse valor, ou a entrega é divida em pacotes ou não é feita por esta transportadora. Dados que a transportadora passa quando fecham contrato. 
- **Maior aresta**
É a maior medida aceita pela transportadora. Ao atingir esse valor, ou a entrega é divida em pacotes ou não é feita por esta transportadora.
- **Fator de peso cúbico**
Fator que será utilizado para cálculo do peso cubado. Soma das medidas, dividida pelo fator cúbico. Entenda mais sobre o cálculo do peso cubado. 
- **Fator de peso mínimo**
Usar o peso cúbico apenas se este passar deste valor. Limite de peso onde, a partir dele, será considerado o cálculo do peso cubado para o frete.

### Dias de entrega
- **Fins de Semana e Feriados**
Marque as flags, para ativar a entrega nos seguintes cenários: `Entrega nos sábados`, `Entrega nos Domingos`, `Entrega nos Feriados`.

### Modais
- **Modais ativos**
Especificações de produtos que necessitam uma entrega especial. São as limitações de envio do produto que a transportadora permite. 
 Entenda mais sobre modais. Marque as flags, para ativar a entrega nos seguintes cenários: `químicos`, `eletrônicos`, `móveis`, `vidro`, `líquidos`, `colchões`, `refrigerados`, `pneus`, `linha branca` e `armas de fogo`. 

### Itens do Pacote
- **Mínimo de Itens**
Quantidade mínima de itens aceita por frete, pela transportadora.
- **Valor Mínimo**
Valor mínimo aceito pela transportadora, para realizar o frete.
- **Valor Máximo**
Valor máximo aceito pela transportadora, para realizar o frete. 

### Pontos de retirada
- **Relacionar pontos de retirada**
Marque esta flag, para abrir a opção de Pontos de retirada. Clique no dropdown e selecione entre `Tags`, `Pontos de Retirada` e `Sellers` previamente cadastrados.  

### Configuração de Tempo
Selecione o dia, e horários de abertura e fechamento nos seguintes cenários. É possível adicionar mais de um prazo por cenário. 

- **Horário de funcionamento**
Dias e horários em que a transportadora funcionará. É utilizado para definir a disponibilidade da transportadora para a operação logística da sua loja. [Entenda mais sobre a configuração dos horários de funcionamento de uma transportadora](https://help.vtex.com/pt/tutorial/horario-de-funcionamento-das-transportadoras--2oGpbInIgdxSWUi3TZjdCS).
- **[Entrega agendada](https://help.vtex.com/pt/tutorial/entrega-agendada--22g3HAVCGLFiU7xugShOBi)**
A entrega agendada é uma funcionalidade que permite definir períodos de entrega personalizados, podendo definir prazos e preços específicos, disponibilizando para o cliente a escolha do intervalo de horário em que deseja receber seu pedido. Entenda mais sobre entrega agendada.

