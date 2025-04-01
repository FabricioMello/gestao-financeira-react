# Desafio Técnico: Sistema de Gestão Financeira com React 19

## Descrição do Desafio

Desenvolver uma aplicação web para gestão financeira pessoal ou empresarial utilizando as mais recentes tecnologias do ecossistema React. O candidato deverá criar um sistema com formulários MultiStep para cadastro e gestão de transações financeiras, demonstrando domínio das tecnologias especificadas e boas práticas de desenvolvimento.

## Tecnologias Obrigatórias

- React 19 + Vite
- TypeScript
- Zustand (para gerenciamento de estado)
- Server Functions do React 19
- Zod (para validação de schemas)
- ShadCN UI (para componentes de interface)
- Jest (para testes automatizados)
- JSON Server (para simular a API REST)

## Requisitos Funcionais

### 1. Dashboard Financeiro
- Visão geral de receitas e despesas
- Gráficos de fluxo de caixa
- Resumo de categorias financeiras
- Indicadores de saúde financeira

### 2. Cadastro de Transações (Formulário MultiStep)
- **Passo 1:** Tipo de transação (receita/despesa) e informações básicas
- **Passo 2:** Categorização e detalhamento
- **Passo 3:** Anexos e comprovantes (com preview)
- **Passo 4:** Agendamento e recorrência
- **Passo 5:** Revisão e confirmação

### 3. Gestão de Categorias
- CRUD completo de categorias financeiras
- Subcategorias e hierarquias
- Limites de orçamento por categoria

### 4. Relatórios
- Extrato de transações com filtros
- Análise comparativa por períodos
- Projeções financeiras baseadas em dados históricos

### 5. Configurações de Usuário
- Preferências de visualização
- Configuração de alertas e notificações
- Configuração de metas financeiras

## Requisitos Técnicos

### API com JSON Server
- Implementar um arquivo `db.json` completo com todas as entidades necessárias
- Configurar rotas para todas as operações CRUD
- Implementar relacionamentos entre entidades
- Criar delays simulados para testar loading states

### Gerenciamento de Estado
- Utilizar Zustand para todo o gerenciamento de estado global
- Implementar stores separadas para diferentes contextos (transações, categorias, usuário)
- Garantir persistência de dados críticos

### Formulários MultiStep
- Criar um componente reutilizável para formulários de múltiplas etapas
- Implementar navegação entre passos com validação condicional
- Salvar estado parcial durante o preenchimento

### Validação com Zod
- Definir schemas para todas as entidades do sistema
- Implementar validação em tempo real nos formulários
- Garantir consistência entre validação client-side e server-side

### Server Functions
- Utilizar Server Functions do React 19 para operações de dados
- Implementar tratamento de erros adequado
- Otimizar operações de fetching e mutations

### Interface de Usuário
- Utilizar componentes do ShadCN UI com customizações
- Garantir responsividade para diferentes dispositivos
- Implementar temas claro/escuro
- Criar micro-interações e feedback visual para ações do usuário

### Testes
- Implementar testes unitários para componentes críticos
- Criar testes de integração para fluxos completos
- Testar validações e tratamento de erros

## Critérios de Avaliação

1. **Qualidade do código:**
   - Organização e estrutura
   - Reutilização de componentes
   - Tipagem adequada com TypeScript
   - Comentários e documentação

2. **Implementação técnica:**
   - Uso correto das tecnologias especificadas
   - Performance e otimizações
   - Gerenciamento de estado eficiente
   - Tratamento de erros e edge cases

3. **Interface e experiência do usuário:**
   - Design consistente e intuitivo
   - Feedbacks visuais apropriados
   - Responsividade e acessibilidade
   - Fluxos de navegação coerentes

4. **Testes:**
   - Cobertura de testes
   - Qualidade e relevância dos testes
   - Mocks e simulações adequadas

## Entregáveis

1. Repositório Git com o código fonte completo
2. Arquivo README com:
   - Instruções detalhadas para execução do projeto
   - Explicação da arquitetura e decisões técnicas
   - Funcionalidades implementadas
   - Limitações conhecidas e possíveis melhorias

3. Arquivo `db.json` configurado para o JSON Server
4. Scripts de inicialização (front-end e JSON Server)
5. Suíte de testes implementada
## Dicas e Recursos

- Planeje a estrutura de dados antes de começar o desenvolvimento
- Crie componentes pequenos e reutilizáveis
- Utilize as Server Functions para operações complexas de dados
- Explore as capacidades do ShadCN UI para criar uma interface consistente
- Comece com testes simples e expanda gradualmente

---

**Boa sorte! Estamos ansiosos para ver sua solução para este desafio.**