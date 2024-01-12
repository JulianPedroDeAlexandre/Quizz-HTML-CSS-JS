export default [
  {
    question: "Qual é o nome do arquivo principal de um site em HTML, criado no momento em que iniciamos um arquivo novo?",
    answers: [
      { option: "novo.html", correct: false },
      { option: "www.htmlww", correct: false },
      { option: "index.html", correct: true },
      { option: "head.html", correct: false },
      { option: "body.html", correct: false },
      { option: "p.html", correct: false },
    ],
  },
  {
    question: "Qual a tag usada para criar um parágrafo?",
    answers: [
      { option: "&lt;pt-br&gt;", correct: false },
      { option: "&lt;void&gt;", correct: false },
      { option: "p", correct: false },
      { option: "&lt;html&gt;", correct: false },
      { option: "&lt;p&gt;", correct: true },
      { option: "&lt;p.html&gt;", correct: false },
    ],
  },
  {
    question: "Dentro de qual outra tag fica a tag &lt;title&gt;?",
    answers: [
      { option: "&lt;p&gt;", correct: false },
      { option: "&lt;body&gt;", correct: false },
      { option: "&lt;!DOCTYPE&gt;", correct: false },
      { option: "&lt;html&gt;", correct: false },
      { option: "&lt;title&gt;", correct: false },
      { option: "&lt;head&gt;", correct: true },
    ],
  },
  {
    question: "Qual o símbolo de fechamento de tag?",
    answers: [
      { option: "&lt;!-&gt;", correct: false },
      { option: "&lt;/&gt;", correct: true },
      { option: "&lt;\\&gt;", correct: false },
      { option: "&lt;-&gt;", correct: false },
      { option: "&lt;_&gt;", correct: false },
      { option: "&lt;//&gt;", correct: false },
    ],
  },
  {
    question: "Qual código escrevemos para que o VsCode nos forneça o comando padrão do HTML?",
    answers: [
      { option: "&lt;html&gt;", correct: false },
      { option: "&lt;html!&gt;", correct: false },
      { option: "&lt;html:5&gt;", correct: false },
      { option: "html:5", correct: true },
      { option: "html", correct: false },
      { option: "html5", correct: false },
    ],
  },
  {
    question: "Na tag &lt;html lang='en'&gt;, substituímos o 'en' por?",
    answers: [
      { option: "in", correct: false },
      { option: "yang", correct: false },
      { option: "br", correct: false },
      { option: "pt", correct: false },
      { option: "html", correct: false },
      { option: "pt-br", correct: true },
    ],
  },

  {
    question: "Qual o maior tamanho de tag &lt;h&gt;?",
    answers: [
      { option: "6", correct: false },
      { option: "3", correct: false },
      { option: "2", correct: false },
      { option: "5", correct: false },
      { option: "1", correct: true },
    ],
  },

  {
    question: "A tag &lt;hr&gt; é fechada?",
    answers: [
      { option: "sim", correct: false },
      { option: "não", correct: true },
    ],
  },

  {
    question: "Como fizemos para uma lista ser ordenada por números romanos?",
    answers: [
      { option: "type\"1\"", correct: false },
      { option: "type\"\"", correct: false },
      { option: "type\"a\"", correct: false },
      { option: "type\"i\"", correct: true },
      { option: "type\"A\"", correct: false },
    ],
  },

  {
    question: "Funcionaria utilizar a tag &lt;ul&gt; com o type\"i\"?",
    answers: [
      { option: "sim", correct: false },
      { option: "não", correct: true },
    ],
  },

  {
    question: "Qual tag deixa um círculo vazado na lista?",
    answers: [
      { option: "type\"circle\"", correct: true },
      { option: "type\"square\"", correct: false },
      { option: "type\"disc\"", correct: false },
    ],
  },

  {
    question: "Como criamos uma lista ordenada em HTML?",
    answers: [
      { option: "&lt;ul&gt;", correct: false },
      { option: "&lt;ol&gt;", correct: true },
      { option: "&lt;li&gt;", correct: false },
      { option: "&lt;dl&gt;", correct: false },
      { option: "&lt;dt&gt;", correct: false },
    ],
  },

  {
    question: "Qual tag usamos para criar um item de lista em HTML?",
    answers: [
      { option: "&lt;ol&gt;", correct: false },
      { option: "&lt;li&gt;", correct: true },
      { option: "&lt;ul&gt;", correct: false },
      { option: "&lt;dl&gt;", correct: false },
      { option: "&lt;dt&gt;", correct: false },
    ],
  },

  {
    question: "Como criamos uma lista não ordenada em HTML?",
    answers: [
      { option: "&lt;ul&gt;", correct: true },
      { option: "&lt;ol&gt;", correct: false },
      { option: "&lt;li&gt;", correct: false },
      { option: "&lt;dl&gt;", correct: false },
      { option: "&lt;dt&gt;", correct: false },
    ],
  },


  {
    question: "A tag &lt;td&gt; serve para que?",
    answers: [
      { option: "(a) Criar uma tabela", correct: false },
      { option: "(b) Criar uma linha na tabela", correct: false },
      { option: "(c) Criar um cabeçalho de tabela", correct: false },
      { option: "(d) Criar uma célula na tabela", correct: true },
      { option: "(e) Nenhuma das alternativas", correct: false },
    ],
  },
  {
    question: "A tag &lt;th&gt; faz o quê?",
    answers: [
      { option: "(a) Cria um título na tabela", correct: false },
      { option: "(b) Cria uma célula na tabela", correct: false },
      { option: "(c) Não faz nada", correct: false },
      { option: "(d) Cria um cabeçalho de tabela", correct: true },
      { option: "(e) Cria uma linha na tabela", correct: false },
    ],
  },
  {
    question: "A tag &lt;tr&gt; serve para que?",
    answers: [
      { option: "(a) Nada", correct: false },
      { option: "(b) Criar uma linha na tabela", correct: true },
      { option: "(c) Alinhar ao centro", correct: false },
      { option: "(d) Criar uma célula na tabela", correct: false },
      { option: "(e) Alterar a largura da linha", correct: false },
    ],
  },
  {
    question: "Border serve para quê?",
    answers: [
      { option: "(a) Deixar a tabela mais bonita", correct: false },
      { option: "(b) Colocar borda na tabela", correct: true },
      { option: "(c) Dividir a tabela", correct: false },
      { option: "(d) Define quantas linhas tem a tabela", correct: false },
      { option: "(e) Define quantas células tem a tabela", correct: false },
    ],
  },
  {
    question: "Rowspan e colspan significam o quê?",
    answers: [
      { option: "(a) Linha e Coluna", correct: false },
      { option: "(b) Alcance", correct: false },
      { option: "(c) Alcance da coluna e alcance da linha", correct: false },
      { option: "(d) Alcance da linha e alcance da coluna", correct: true },
      { option: "(e) Coluna e linha", correct: false },
    ],
  },
  {
    question: "&lt;td colspan=\"2\"&gt; faz o quê?",
    answers: [
      { option: "(a) Define que a célula dessa coluna terá alcance = 2, ocupando duas colunas", correct: true },
      { option: "(b) Nenhuma das alternativas", correct: false },
      { option: "(c) Define 2 colunas na célula da tabela", correct: false },
      { option: "(d) Coloca o número 2 dentro dessa célula", correct: false },
      { option: "(e) Faz com que essa célula ocupe mais de uma coluna", correct: false },
    ],
  },
  {
    question: "&lt;td rowspan=\"2\"&gt; faz o quê?",
    answers: [
      { option: "(a) Nenhuma das alternativas", correct: false },
      { option: "(b) Faz com que essa célula ocupe duas colunas", correct: false },
      { option: "(c) Define 2 linhas na tabela", correct: false },
      { option: "(d) Coloca o número 2 dentro dessa célula", correct: false },
      { option: "(e) Define que a célula dessa linha terá alcance = 2, ocupando duas linhas", correct: true },
    ],
  },
  {
    question: "width = Largura e height = Altura. Como definimos que a largura da tabela será 10 e altura será 5?",
    answers: [
      { option: "(a) &lt;table width=\"10\" height=\"5\"&gt;", correct: true },
      { option: "(b) width \"10\" height \"5\"", correct: false },
      { option: "(c) &lt;table width=10 height=5&gt;", correct: false },
      { option: "(d) &lt;table width=5 height=10&gt;", correct: false },
      { option: "(e) &lt;table width=\"5\" height=\"10\"&gt;", correct: false },
    ],
  },
  {
    question: "O que faz a tag &lt;tr align=\"center\"&gt;?",
    answers: [
      { option: "(a) Alinha tudo", correct: false },
      { option: "(b) Alinha os textos que estão na tr", correct: false },
      { option: "(c) Alinha no centro os textos da tr", correct: true },
      { option: "(d) Coloca o texto no centro", correct: false },
      { option: "(e) Alinha no centro da coluna", correct: false },
    ],
  },

  {
    question: "Qual atributo é usado para identificar exclusivamente um elemento na página HTML?",
    answers: [
      { option: "for", correct: false },
      { option: "name", correct: false },
      { option: "id", correct: true },
      { option: "src", correct: false },
      { option: "alt", correct: false },
    ],
  },
  {
    question: "Qual atributo é usado para identificar os dados inseridos em um campo de formulário quando o formulário é enviado?",
    answers: [
      { option: "name", correct: true },
      { option: "for", correct: false },
      { option: "id", correct: false },
      { option: "src", correct: false },
      { option: "alt", correct: false },
    ],
  },
  {
    question: "Qual tag HTML é usada para criar rótulos descritivos para campos de entrada em um formulário?",
    answers: [
      { option: "&lt;input&gt;", correct: false },
      { option: "&lt;form&gt;", correct: false },
      { option: "&lt;label&gt;", correct: true },
      { option: "&lt;button&gt;", correct: false },
      { option: "&lt;select&gt;", correct: false },
    ],
  },
  {
    question: "Qual atributo está associado ao elemento label e ajuda a identificar qual campo de entrada do formulário está sendo rotulado?",
    answers: [
      { option: "&lt;input&gt;", correct: false },
      { option: "&lt;for&gt;", correct: true },
      { option: "&lt;label&gt;", correct: false },
      { option: "&lt;button&gt;", correct: false },
      { option: "&lt;select&gt;", correct: false },
    ],
  },
  {
    question: "Qual tag é usada para criar um botão de envio em um formulário?",
    answers: [
      { option: "&lt;button&gt;", correct: false },
      { option: "&lt;label&gt;", correct: false },
      { option: "&lt;input type='text'&gt;", correct: false },
      { option: "&lt;input type='submit'&gt;", correct: true },
      { option: "&lt;input type='image'&gt;", correct: false },
    ],
  },
  {
    question: "O que o atributo alt em uma imagem usada como botão de envio em um formulário fornece?",
    answers: [
      { option: "Texto alternativo para a imagem.", correct: true },
      { option: "Nome do campo de entrada.", correct: false },
      { option: "Cor de fundo da imagem.", correct: false },
      { option: "Tamanho da imagem.", correct: false },
      { option: "Tipo de entrada do formulário.", correct: false },
    ],
  },
  {
    question: "Qual tag HTML é usada para programar campos de entrada em um formulário?",
    answers: [
      { option: "&lt;input&gt;", correct: true },
      { option: "&lt;form&gt;", correct: false },
      { option: "&lt;label&gt;", correct: false },
      { option: "&lt;button&gt;", correct: false },
      { option: "&lt;select&gt;", correct: false },
    ],
  },
  {
    question: "Qual tag é usada para criar caixas de seleção em um formulário?",
    answers: [
      { option: "&lt;input type='text'&gt;", correct: false },
      { option: "&lt;input type='submit'&gt;", correct: false },
      { option: "&lt;input type='checkbox'&gt;", correct: true },
      { option: "&lt;input type='image'&gt;", correct: false },
      { option: "&lt;input type='radio'&gt;", correct: false },
    ],
  },
  {
    question: "Qual atributo é usado para criar uma conexão entre um rótulo e um campo de entrada em um formulário?",
    answers: [
      { option: "alt", correct: false },
      { option: "name", correct: false },
      { option: "src", correct: false },
      { option: "for", correct: true },
      { option: "id", correct: false },
    ],
  },
  {
    question: "Qual é a finalidade principal do uso da tag label e atributos for em formulários HTML?",
    answers: [
      { option: "Realçar a imagem de fundo.", correct: false },
      { option: "Adicionar estilos de CSS aos campos de entrada.", correct: false },
      { option: "Tornar o formulário mais acessível e amigável.", correct: true },
      { option: "Fornecer valores padrão para campos de entrada.", correct: false },
      { option: "Enviar automaticamente os dados do formulário.", correct: false },
    ],
  },




];
