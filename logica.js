// Base de datos de preguntas por categoría
const questionsDatabase = {
    puntos_criticos: [
        "Encuentra los puntos críticos de la función \( f(x) = x^2 - 4x + 3 \) y determina si son máximos o mínimos.",
        "Determina los puntos críticos de \( f(x) = -x^2 + 2x \) y clasifícalos como máximos o mínimos.",
        "Halla los puntos críticos de \( f(x) = x^3 - 3x^2 + 2 \) e indica su naturaleza.",
        "Encuentra y clasifica los puntos críticos de \( f(x) = x^4 - 8x^2 \).",
        "Determina los puntos críticos de \( f(x) = \\ln(x^2 + 1) \).",
        "Encuentra los puntos críticos de \( f(x) = \\frac{x}{x^2 + 1} \).",
        "Halla los puntos críticos de \( f(x) = xe^{-x} \).",
        "Determina los puntos críticos de \( f(x) = \\cos(x) \) en el intervalo \([0, 2\\pi]\).",
        "Encuentra y clasifica los puntos críticos de \( f(x) = x^2 e^{-x} \).",
        "Determina los puntos críticos de \( f(x) = \\frac{x^2 - 1}{x^2 + 1} \)."
    ],
    asintotas: [
        "Halla las asíntotas verticales, horizontales y oblicuas de \( f(x)=\\frac{x^{2}+3}{\\sqrt{x^{2}-4}} \) si existen.",
        "Encuentra las asíntotas de \( f(x)=\\frac{x^{2}+4x}{x^{2}-1} \).",
        "Determina si \( f(x)=\\frac{2x^{2}-3}{x^{2}-4} \) tiene asíntotas verticales, horizontales u oblicuas.",
        "Halla las asíntotas de \( f(x)=\\frac{x^{3}+2x^{2}+x}{x^{2}-1} \).",
        "Encuentra los valores de las constantes \(a\) y \(b\) tal que la función \( f(x) \) sea continua en todo \( \\mathbb{R} \)."
    ],
    rectas: [
        "Determina la ecuación de la recta que pasa por los puntos \( A(2,3) \) y \( B(4,7) \).",
        "Halla la ecuación de la recta que pasa por el punto \( P(-1,4) \) y tiene pendiente \( m = -\\frac{1}{2} \).",
        "Encuentra la ecuación de la recta que pasa por \( P(2,1) \) y es perpendicular a \( 2x - y = 4 \).",
        "Determina la ecuación de la recta que pasa por \( A(1,2) \) y \( B(-3,-1) \).",
        "Dados \( A(3,5) \) y \( B(6,9) \), determina la ecuación de la recta que pasa por estos puntos.",
        "Si la recta \( r_1 \) tiene pendiente \( m_1 = 2 \) y pasa por \( P_1(1,1) \), encuentra su ecuación.",
        "Determina la ecuación de la recta que pasa por \( P(0,4) \) y es paralela a \( 3x - y = 7 \).",
        "Encuentra la ecuación de la recta que pasa por \( P(3,-1) \) y es perpendicular a \( x - 2y = 4 \).",
        "Halla la ecuación de la recta que pasa por \( P(1,-1) \) y tiene pendiente \( m = -3 \).",
        "Verifica si las rectas \( 2x + y = 3 \) y \( 4x + 2y = 6 \) son paralelas."
    ],
    limites: [
        "Calcula \( \\lim_{x \\to 2^-} \\frac{3x^2 - 7x + 6}{x^2 - x - 6} \).",
        "Determina \( \\lim_{x \\to 3^-} \\frac{x^3 + 9x^2 + 20x}{x^2 + x - 12} \).",
        "Calcula \( \\lim_{x \\to 0^+} \\frac{1}{x} + \\ln(x) \).",
        "Encuentra \( \\lim_{x \\to -1^+} \\frac{x - 2}{x + 1} \).",
        "Determina \( \\lim_{x \\to 0^-} \\frac{1}{\\sqrt{x + 1}} - \\frac{1}{\\sqrt{x + 2}} \).",
        "Calcula \( \\lim_{x \\to +\\infty} \\sqrt{x^2 + x - 1} - \\sqrt{x^2 - 2x} \).",
        "Encuentra \( \\lim_{x \\to -\\infty} \\frac{2x^2 - 2x + 3}{x^2 - 6x - 2} \).",
        "Calcula \( \\lim_{x \\to 0} \\frac{x^2 - 1}{x - 1} \).",
        "Determina \( \\lim_{x \\to 0} \\frac{e^x - 1}{x} \)."
    ],
    funciones_complejas: [
        "Deriva la función \( f(x) = \\sin\\left(\\sqrt{\\ln(x^2 + 1)}\\right) \).",
        "Encuentra la derivada de \( f(x) = \\ln^2\\left(\\cos(\\sqrt{x^2 + 1})\\right) \).",
        "Deriva \( f(x) = \\sqrt[3]{\\tan^2(e^{-x^2})} \).",
        "Calcula la derivada de \( f(x) = \\tan\\left(\\sqrt{\\ln(\\cos^2(3x))}\\right) \).",
        "Deriva \( f(x) = \\ln\\left(\\sqrt{\\arccos(x^2)}\\right) \).",
        "Encuentra la derivada de \( f(x) = \\cos\\left(\\arcsin\\left(e^{-x^2}\\right)\\right) \).",
        "Deriva \( f(x) = \\sqrt[4]{\\ln^2\\left(\\sqrt{1 + x^4}\\right)} \).",
        "Calcula la derivada de \( f(x) = \\arctan\\left(\\cos\\left(\\sqrt{x^2 + 1}\\right)\\right) \).",
        "Deriva \( f(x) = \\sec^2\\left(\\sqrt{\\ln(x^2 + 2)}\\right) \).",
        "Encuentra la derivada de \( f(x) = \\frac{\\ln\\left(\\arcsin(e^{-x^2})\\right)}{x^2 + 1} \)."
    ],
    graficas: [
        "Para \( f(x) = x^3 - 3x^2 + 2 \), determina dominio, asíntotas, intervalos de crecimiento/decrecimiento, concavidad y puntos críticos. Luego representa la gráfica.",
        "Analiza \( f(x) = x^4 - 4x^2 \): dominio, asíntotas, monotonía, concavidad y puntos críticos. Dibuja su gráfica.",
        "Para \( f(x) = x^3 + 6x^2 + 9x \), encuentra dominio, asíntotas, intervalos de crecimiento, concavidad y puntos críticos. Representa gráficamente.",
        "Analiza \( f(x) = 2x^5 - 5x^3 \): dominio, asíntotas, monotonía, concavidad y puntos críticos. Dibuja su gráfica.",
        "Para \( f(x) = x^3 - 6x + 1 \), determina dominio, asíntotas, intervalos de crecimiento/decrecimiento, concavidad y puntos críticos. Luego representa la gráfica.",
        "Analiza \( f(x) = x^4 - 2x^2 + 1 \): dominio, asíntotas, monotonía, concavidad y puntos críticos. Dibuja su gráfica.",
        "Para \( f(x) = x^3 - 9x^2 + 27x \), encuentra dominio, asíntotas, intervalos de crecimiento, concavidad y puntos críticos. Representa gráficamente.",
        "Analiza \( f(x) = -x^4 + 4x^3 \): dominio, asíntotas, monotonía, concavidad y puntos críticos. Dibuja su gráfica.",
        "Para \( f(x) = x^3 - x \), determina dominio, asíntotas, intervalos de crecimiento/decrecimiento, concavidad y puntos críticos. Luego representa la gráfica."
    ],
    derivadas_implicitas: [
        "Encuentra \( \\frac{dy}{dx} \) si \( x^2 + y^2 = 25 \).",
        "Halla \( \\frac{dy}{dx} \) si \( \\sin(xy) = x + y \).",
        "Determina \( \\frac{dy}{dx} \) para \( x^3 + y^3 = 6xy \).",
        "Si \( x^2y + y^3 = x + 5 \), encuentra la derivada implícita.",
        "Deriva implícitamente: \( e^{xy} + x^2 = y \).",
        "Para \( x \\cos y + y \\cos x = 1 \), halla \( \\frac{dy}{dx} \).",
        "Encuentra \( \\frac{dy}{dx} \) si \( x^2 + y^2 + xy = 1 \).",
        "Si \( \\ln(x + y) = xy \), obtén la derivada implícita.",
        "Halla \( \\frac{dy}{dx} \) para \( x^2y + y^2x = \\sin x \)."
    ],
    regla_cadena: [
        "Deriva \( f(x) = \\sin(x^2) \) usando la regla de la cadena.",
        "Encuentra la derivada de \( f(x) = e^{\\tan(x)} \) aplicando la regla de la cadena.",
        "Deriva \( f(x) = \\ln(1 + x^2) \) usando la regla de la cadena.",
        "Calcula la derivada de \( f(x) = \\sqrt{\\cos(x)} \) aplicando la regla de la cadena.",
        "Deriva \( f(x) = \\arctan(x^3) \) usando la regla de la cadena.",
        "Encuentra la derivada de \( f(x) = (2x^3 + 1)^5 \) aplicando la regla de la cadena.",
        "Deriva \( f(x) = \\cos(x^2 + 3x) \) usando la regla de la cadena.",
        "Calcula la derivada de \( f(x) = \\ln(\\sqrt{1 + x^2}) \) aplicando la regla de la cadena.",
        "Deriva \( f(x) = \\tan(\\ln x) \) usando la regla de la cadena.",
        "Encuentra la derivada de \( f(x) = \\sqrt[3]{e^{x^2}} \) aplicando la regla de la cadena."
    ],
    inecuaciones: [
        "Resuelve \( \\frac{x^2 - 1}{x + 1} + \\frac{x^2 - 4}{x - 2} \\geq 0 \).",
        "Resuelve la inecuación \( \\frac{x^2 - 3x + 2}{x - 1} < x + 1 \).",
        "Encuentra el conjunto solución de \( \\frac{2x^2 + 3x - 5}{x^2 - 1} \\geq \\frac{x - 2}{x + 1} \).",
        "Resuelve \( (x^2 + 2x - 3)(x - 1) > \\frac{x^2 + x - 2}{x + 1} \).",
        "Determina el conjunto solución de \( \\frac{x^2 + 3x - 4}{x + 2} - \\frac{x^2 - 5x + 6}{x - 3} \\leq 0 \).",
        "Resuelve \( \\frac{x^2 + x - 6}{x^2 - x - 12} > \\frac{x + 1}{x - 4} \).",
        "Encuentra el conjunto solución de \( \\frac{3x^2 - 5x + 1}{x^2 - 4x + 3} \\leq 2 \).",
        "Resuelve \( (x^2 - 1)(x + 3) < \\frac{x^2 + 2x + 3}{x - 1} \).",
        "Determina el conjunto solución de \( \\frac{x^2 - 3x + 2}{x + 1} \\geq \\frac{x^2 + 5x - 6}{x - 2} \).",
        "Resuelve \( (x^2 - 4)(x - 1) > \\frac{3x^2 - 7x + 4}{x + 2} \)."
    ],
    razon_cambio: [
        "Una empresa tiene una función de costo \( C(x)=500+20x+0.1x^{2} \). a) Halla el costo marginal cuando se producen 50 unidades. b) Interpreta el resultado en términos económicos.",
        "Si la función de demanda es \( p(x)=100-0.5x \), encuentra la función de ingreso \( R(x) \) y calcula el ingreso marginal cuando \( x=20 \).",
        "La producción de una fábrica está dada por \( P(t)=100t-3t^{2} \). a) Encuentra la tasa de cambio de la producción al día 5. b) ¿Cuándo comienza a disminuir la producción?",
        "Sea \( V(t)=1000e^{-0.05t} \). Calcula la razón de cambio del valor en \( t=10 \) años e interpreta.",
        "Si \( x(p)=500-10p \) y el precio aumenta a razón de 2 unidades por día, ¿cuál es la razón de cambio de la cantidad vendida cuando \( p=30 \)?",
        "Dada \( D(p)=200-4p \), calcula la elasticidad en \( p=30 \).",
        "La curva de aprendizaje es \( T(x)=100x^{-0.3} \). Calcula \( T'(20) \) e interpreta.",
        "Para la función de utilidad \( U(x)=\\ln(x+1) \), calcula \( U'(x) \) y analiza su significado para \( x=50 \)."
    ],
    optimizacion: [
        "¿Qué dimensiones debe tener un rectángulo con perímetro 100 cm para que su área sea máxima?",
        "Determina el punto de un paraboloide \( y = x^2 \) más cercano al punto (0,1).",
        "Encuentra el volumen máximo de una caja sin tapa hecha a partir de una lámina cuadrada de 20 cm por lado.",
        "Un agricultor desea cercar un campo rectangular de área máxima usando 240 m de cerca, con un lado junto a un río. ¿Cuáles son las dimensiones óptimas?",
        "Se lanza un proyectil con \( h(t) = -5t^2 + 40t + 10 \). ¿En qué momento alcanza la altura máxima?",
        "Diseña un cilindro de volumen fijo \( V = 500 \\, \\text{cm}^3 \) de forma que el área de superficie sea mínima.",
        "¿Cuál es el área mínima de un triángulo rectángulo cuyo perímetro es 36 cm?",
        "Se desea construir un corral con tres lados de cerca (uno junto a una pared). ¿Cómo deben ser las dimensiones para maximizar el área si se tienen 60 metros de cerca?",
        "¿Qué ángulo debe formar una escalera con el suelo para que, al estar apoyada en un muro de 4 m, tenga la menor longitud posible?"
    ]
};

// Base de datos de preguntas (pegada directamente aquí)


// Obtén las categorías de la base de datos
const categorias = Object.keys(questionsDatabase);

function getRandomElementsFromArray(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateExam() {
  const preguntas = [];
  while (preguntas.length < 4 || preguntas.length < 5 && Math.random() < 0.5) {
    const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    const preguntasCategoria = questionsDatabase[categoriaAleatoria];
    const preguntaAleatoria = preguntasCategoria[Math.floor(Math.random() * preguntasCategoria.length)];
    if (!preguntas.includes(preguntaAleatoria)) {
      preguntas.push({ categoria: categoriaAleatoria, texto: preguntaAleatoria });
    }
  }
  return preguntas;
}

document.getElementById('generarBtn').addEventListener('click', () => {
  const preguntas = generateExam();
  const form = document.getElementById('certamenForm');
  form.innerHTML = ''; // limpiar

  preguntas.forEach((pregunta, index) => {
    const div = document.createElement('div');
    div.classList.add('question-block');
    div.innerHTML = `
      <p><strong>Pregunta ${index + 1} (${pregunta.categoria}):</strong><br>${pregunta.texto}</p>
      <textarea rows="4" cols="80" name="respuesta${index}"></textarea>
    `;
    form.appendChild(div);
  });

  form.classList.remove('oculto');
  document.getElementById('enviarBtn').classList.remove('oculto');
  document.getElementById('resultado').classList.add('oculto');
  form.dataset.preguntas = JSON.stringify(preguntas);
});

document.getElementById('enviarBtn').addEventListener('click', () => {
  const form = document.getElementById('certamenForm');
  const preguntas = JSON.parse(form.dataset.preguntas);
  const respuestas = Array.from(form.elements)
    .filter(el => el.tagName === 'TEXTAREA')
    .map(el => el.value.trim());

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<h2>Preguntas y Respuestas:</h2>';

  preguntas.forEach((preg, i) => {
    const p = document.createElement('div');
    p.innerHTML = `
      <div class="question-block">
        <p><strong>${i + 1}. ${preg.texto}</strong></p>
        <p><em>Tu respuesta:</em> ${respuestas[i] || '(Sin respuesta)'}</p>
      </div>
    `;
    resultadoDiv.appendChild(p);
  });

  resultadoDiv.classList.remove('oculto');
});

