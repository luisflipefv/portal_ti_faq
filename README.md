# Portal de Apoio ao Usuário (Portal de Ajuda)

Este é um projeto simples para um Portal de FAQ (Perguntas Frequentes), desenvolvido com **React**, **Vite** e **TailwindCSS**. O objetivo desta aplicação é ajudar os usuários a encontrarem soluções rápidas para problemas comuns do dia a dia antes de precisarem abrir um chamado no suporte (SOS Águia Branca).

## Recursos

- **Busca Rápida**: Barra de pesquisa para filtrar perguntas e respostas instantaneamente.
- **Acordeão de Dúvidas**: As dúvidas são organizadas em um formato de acordeão, expandindo para mostrar a resposta, dicas adicionais e um botão direto para abrir um chamado.
- **Design Responsivo**: O layout do portal é adaptável para diferentes tamanhos de tela.
- **Interface Amigável**: Utilização de TailwindCSS para um visual limpo e moderno.

## Tecnologias Utilizadas

- **React 19**
- **Vite**
- **TailwindCSS 4**
- **JavaScript (ESModules)**

## Como Executar o Projeto Localmente

1. **Instale as dependências**:
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

3. Acesse a aplicação no seu navegador pelo endereço fornecido no terminal (geralmente `http://localhost:5173/`).

## Como Fazer o Build para Produção

Para gerar os arquivos otimizados para produção, execute o seguinte comando:

```bash
npm run build
```
Os arquivos prontos para deploy estarão na pasta `dist/`. Para visualizar o build de produção localmente, utilize:

```bash
npm run preview
```

## Estrutura de Arquivos Principal

- `src/App.jsx`: Componente principal que gerencia o estado de busca e renderiza o layout.
- `src/components/FaqItem.jsx`: Componente de acordeão responsável por exibir cada dúvida suportando informações de resposta, dicas e abertura de chamado.
- `src/data/questions.js`: Objeto contendo todas as perguntas configuradas.
- `src/index.css`: Importação do TailwindCSS e estilos globais estáticos.
