// Banco de ejercicios completo con los problemas reales del documento
const exerciseBank = {
   "INECUACIONES": [
       {
           question: "$$\\frac{x^2 - 1}{x + 1} + \\frac{x^2 - 4}{x - 2} \\geq 0$$",
           answer: "Para resolver esta inecuación racional:\n1. Factorizar numeradores: (x-1)(x+1)/(x+1) + (x-2)(x+2)/(x-2) ≥ 0\n2. Simplificar: (x-1) + (x+2) ≥ 0 para x ≠ -1, x ≠ 2\n3. 2x + 1 ≥ 0\n4. x ≥ -1/2\n5. Considerar restricciones: x ∈ [-1/2, 2) ∪ (2, +∞)",
           hint: "Factoriza los numeradores y simplifica las fracciones. No olvides las restricciones del denominador.",
           points: 20
       },
       {
           question: "$$\\frac{x^2 - 3x + 2}{x - 1} < x + 1$$",
           answer: "Para resolver:\n1. Factorizar numerador: (x-1)(x-2)/(x-1) < x + 1\n2. Simplificar: x - 2 < x + 1 para x ≠ 1\n3. -2 < 1 (siempre verdadero)\n4. La solución es x ∈ (-∞, 1) ∪ (1, +∞) = ℝ \\ {1}",
           hint: "Factoriza el numerador y simplifica la fracción antes de resolver la inecuación.",
           points: 20
       },
       {
           question: "$$\\frac{2x^2 + 3x - 5}{x^2 - 1} \\geq \\frac{x - 2}{x + 1}$$",
           answer: "Para resolver esta inecuación:\n1. Pasar todo al lado izquierdo\n2. Factorizar denominadores: x² - 1 = (x-1)(x+1)\n3. Encontrar común denominador\n4. Resolver la inecuación resultante\n5. Considerar las restricciones x ≠ ±1\n6. Usar tabla de signos para determinar los intervalos solución",
           hint: "Lleva todo a un lado, factoriza los denominadores y usa tabla de signos.",
           points: 20
       },
       {
           question: "$$(x^2 + 2x - 3)(x - 1) > \\frac{x^2 + x - 2}{x + 1}$$",
           answer: "Para resolver:\n1. Factorizar x² + 2x - 3 = (x+3)(x-1)\n2. Factorizar x² + x - 2 = (x+2)(x-1)\n3. La inecuación se convierte en: (x+3)(x-1)² > (x+2)(x-1)/(x+1)\n4. Simplificar y resolver usando tabla de signos\n5. Considerar la restricción x ≠ -1",
           hint: "Factoriza todos los polinomios cuadráticos y simplifica la expresión resultante.",
           points: 20
       },
       {
           question: "$$\\frac{x^2 + 3x - 4}{x + 2} - \\frac{x^2 - 5x + 6}{x - 3} \\leq 0$$",
           answer: "Para resolver:\n1. Factorizar numeradores:\n   - x² + 3x - 4 = (x+4)(x-1)\n   - x² - 5x + 6 = (x-2)(x-3)\n2. La inecuación se convierte en: (x+4)(x-1)/(x+2) - (x-2) ≤ 0\n3. Simplificar a común denominador\n4. Resolver usando tabla de signos\n5. Considerar restricciones x ≠ -2, x ≠ 3",
           hint: "Factoriza los numeradores y lleva a común denominador antes de resolver.",
           points: 20
       },
       {
           question: "$$\\frac{x^3 - 3x + 2}{x^2 - 1} \\leq \\frac{x + 3}{x^2 - 3x + 2}$$",
           answer: "Para resolver:\n1. Factorizar x³ - 3x + 2 = (x-1)²(x+2)\n2. Factorizar x² - 1 = (x-1)(x+1)\n3. Factorizar x² - 3x + 2 = (x-1)(x-2)\n4. Simplificar y encontrar común denominador\n5. Resolver la inecuación resultante considerando todas las restricciones",
           hint: "Factoriza completamente todos los polinomios antes de proceder.",
           points: 25
       },
       {
           question: "$$\\frac{x^2 - 1}{x - 1} + \\frac{x^2 + x - 2}{x + 1} \\geq 1$$",
           answer: "Para resolver:\n1. Factorizar x² - 1 = (x-1)(x+1)\n2. Factorizar x² + x - 2 = (x+2)(x-1)\n3. Simplificar: (x+1) + (x+2) ≥ 1 para x ≠ ±1\n4. 2x + 3 ≥ 1\n5. x ≥ -1\n6. Considerar restricciones: x ∈ [-1, 1) ∪ (1, +∞)",
           hint: "Simplifica las fracciones antes de sumar y considera las restricciones del dominio.",
           points: 20
       },
       {
           question: "$$\\frac{x^2 + 4x - 5}{x - 3} < \\frac{x^2 + 2x + 1}{x + 1}$$",
           answer: "Para resolver:\n1. Factorizar x² + 4x - 5 = (x+5)(x-1)\n2. Factorizar x² + 2x + 1 = (x+1)²\n3. La inecuación se convierte en: (x+5)(x-1)/(x-3) < (x+1)\n4. Llevar a común denominador y resolver\n5. Considerar restricciones x ≠ 3, x ≠ -1",
           hint: "Factoriza ambos numeradores y simplifica antes de resolver.",
           points: 25
       }
   ],
   "REGLA_CADENA": [
       {
           question: "$$f(x) = \\sin(x^2)$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = cos(x²) · (x²)'\nf'(x) = cos(x²) · 2x\nf'(x) = 2x cos(x²)",
           hint: "La derivada de sin(u) es cos(u)·u', donde u = x².",
           points: 20
       },
       {
           question: "$$f(x) = e^{\\tan(x)}$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = e^(tan(x)) · (tan(x))'\nf'(x) = e^(tan(x)) · sec²(x)\nf'(x) = sec²(x) · e^(tan(x))",
           hint: "La derivada de e^u es e^u · u', donde u = tan(x).",
           points: 20
       },
       {
           question: "$$f(x) = \\ln(1 + x^2)$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = 1/(1 + x²) · (1 + x²)'\nf'(x) = 1/(1 + x²) · 2x\nf'(x) = 2x/(1 + x²)",
           hint: "La derivada de ln(u) es u'/u, donde u = 1 + x².",
           points: 20
       },
       {
           question: "$$f(x) = \\sqrt{\\cos(x)}$$",
           answer: "Reescribiendo como f(x) = (cos(x))^(1/2) y aplicando la regla de la cadena:\nf'(x) = (1/2)(cos(x))^(-1/2) · (cos(x))'\nf'(x) = (1/2)(cos(x))^(-1/2) · (-sin(x))\nf'(x) = -sin(x)/(2√cos(x))",
           hint: "Reescribe la raíz como potencia fraccionaria y aplica la regla de la cadena.",
           points: 20
       },
       {
           question: "$$f(x) = \\arctan(x^3)$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = 1/(1 + (x³)²) · (x³)'\nf'(x) = 1/(1 + x⁶) · 3x²\nf'(x) = 3x²/(1 + x⁶)",
           hint: "La derivada de arctan(u) es u'/(1 + u²), donde u = x³.",
           points: 20
       },
       {
           question: "$$f(x) = e^{\\tan(x)}$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = e^(tan(x)) · d/dx[tan(x)]\nf'(x) = e^(tan(x)) · sec²(x)\nf'(x) = sec²(x) e^(tan(x))",
           hint: "Recuerda que d/dx[tan(x)] = sec²(x).",
           points: 20
       },
       {
           question: "$$f(x) = (2x^3 + 1)^5$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = 5(2x³ + 1)⁴ · (2x³ + 1)'\nf'(x) = 5(2x³ + 1)⁴ · 6x²\nf'(x) = 30x²(2x³ + 1)⁴",
           hint: "Usa la regla de la potencia junto con la regla de la cadena.",
           points: 20
       },
       {
           question: "$$f(x) = \\cos(x^2 + 3x)$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = -sin(x² + 3x) · (x² + 3x)'\nf'(x) = -sin(x² + 3x) · (2x + 3)\nf'(x) = -(2x + 3)sin(x² + 3x)",
           hint: "La derivada de cos(u) es -sin(u)·u'.",
           points: 20
       },
       {
           question: "$$f(x) = \\ln(\\sqrt{1 + x^2})$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = 1/√(1 + x²) · (√(1 + x²))'\nf'(x) = 1/√(1 + x²) · (1/2)(1 + x²)^(-1/2) · 2x\nf'(x) = 1/√(1 + x²) · x/√(1 + x²)\nf'(x) = x/(1 + x²)",
           hint: "Simplifica usando propiedades de logaritmos: ln(√u) = (1/2)ln(u).",
           points: 25
       },
       {
           question: "$$f(x) = \\tan(\\ln x)$$",
           answer: "Aplicando la regla de la cadena:\nf'(x) = sec²(ln x) · (ln x)'\nf'(x) = sec²(ln x) · (1/x)\nf'(x) = sec²(ln x)/x",
           hint: "La derivada de tan(u) es sec²(u)·u' y d/dx[ln x] = 1/x.",
           points: 20
       }
   ],
   "DERIVADAS_IMPLICITAS": [
       {
           question: "Encuentre $\\frac{dy}{dx}$ si $x^2 + y^2 = 25$",
           answer: "Derivando implícitamente ambos lados:\n2x + 2y(dy/dx) = 0\n2y(dy/dx) = -2x\ndy/dx = -x/y",
           hint: "Deriva ambos lados con respecto a x, recordando que d/dx(y²) = 2y·dy/dx.",
           points: 25
       },
       {
           question: "Halle $\\frac{dy}{dx}$ si $\\sin(xy) = x + y$",
           answer: "Derivando implícitamente:\ncos(xy) · d/dx(xy) = 1 + dy/dx\ncos(xy) · (y + x·dy/dx) = 1 + dy/dx\ny·cos(xy) + x·cos(xy)·dy/dx = 1 + dy/dx\nx·cos(xy)·dy/dx - dy/dx = 1 - y·cos(xy)\ndy/dx(x·cos(xy) - 1) = 1 - y·cos(xy)\ndy/dx = (1 - y·cos(xy))/(x·cos(xy) - 1)",
           hint: "Usa la regla del producto para derivar xy dentro del seno.",
           points: 25
       },
       {
           question: "Determine $\\frac{dy}{dx}$ para $x^3 + y^3 = 6xy$",
           answer: "Derivando implícitamente:\n3x² + 3y²(dy/dx) = 6y + 6x(dy/dx)\n3x² + 3y²(dy/dx) = 6y + 6x(dy/dx)\n3y²(dy/dx) - 6x(dy/dx) = 6y - 3x²\ndy/dx(3y² - 6x) = 6y - 3x²\ndy/dx = (6y - 3x²)/(3y² - 6x)\ndy/dx = (2y - x²)/(y² - 2x)",
           hint: "Deriva ambos lados y agrupa todos los términos con dy/dx en un lado.",
           points: 25
       },
       {
           question: "Si $x^2y + y^3 = x + 5$, encuentre la derivada implícita",
           answer: "Derivando implícitamente:\nd/dx(x²y) + d/dx(y³) = d/dx(x) + d/dx(5)\n2xy + x²(dy/dx) + 3y²(dy/dx) = 1\nx²(dy/dx) + 3y²(dy/dx) = 1 - 2xy\ndy/dx(x² + 3y²) = 1 - 2xy\ndy/dx = (1 - 2xy)/(x² + 3y²)",
           hint: "Usa la regla del producto para x²y y deriva y³ implícitamente.",
           points: 25
       },
       {
           question: "Derive implícitamente: $e^{xy} + x^2 = y$",
           answer: "Derivando implícitamente:\nd/dx(e^(xy)) + d/dx(x²) = d/dx(y)\ne^(xy) · d/dx(xy) + 2x = dy/dx\ne^(xy) · (y + x·dy/dx) + 2x = dy/dx\ny·e^(xy) + x·e^(xy)·dy/dx + 2x = dy/dx\nx·e^(xy)·dy/dx - dy/dx = -y·e^(xy) - 2x\ndy/dx(x·e^(xy) - 1) = -y·e^(xy) - 2x\ndy/dx = (-y·e^(xy) - 2x)/(x·e^(xy) - 1)",
           hint: "Recuerda que la derivada de e^u es e^u · u', donde u = xy.",
           points: 25
       },
       {
           question: "Para $x \\cos y + y \\cos x = 1$, halle $\\frac{dy}{dx}$",
           answer: "Derivando implícitamente:\nd/dx(x cos y) + d/dx(y cos x) = d/dx(1)\ncos y + x(-sin y)(dy/dx) + (dy/dx)(cos x) + y(-sin x) = 0\ncos y - x sin y (dy/dx) + cos x (dy/dx) - y sin x = 0\ndy/dx(cos x - x sin y) = y sin x - cos y\ndy/dx = (y sin x - cos y)/(cos x - x sin y)",
           hint: "Usa la regla del producto en ambos términos del lado izquierdo.",
           points: 30
       },
       {
           question: "Encuentre $\\frac{dy}{dx}$ si $x^2 + y^2 + xy = 1$",
           answer: "Derivando implícitamente:\n2x + 2y(dy/dx) + y + x(dy/dx) = 0\n2x + y + dy/dx(2y + x) = 0\ndy/dx(2y + x) = -2x - y\ndy/dx = -(2x + y)/(2y + x)",
           hint: "Aplica la regla del producto al término xy.",
           points: 25
       },
       {
           question: "Si $\\ln(x + y) = xy$, obtenga la derivada implícita",
           answer: "Derivando implícitamente:\nd/dx[ln(x + y)] = d/dx(xy)\n1/(x + y) · (1 + dy/dx) = y + x(dy/dx)\n(1 + dy/dx)/(x + y) = y + x(dy/dx)\n1 + dy/dx = (x + y)(y + x dy/dx)\n1 + dy/dx = y(x + y) + x(x + y)dy/dx\n1 + dy/dx = xy + y² + x(x + y)dy/dx\ndy/dx - x(x + y)dy/dx = xy + y² - 1\ndy/dx(1 - x(x + y)) = xy + y² - 1\ndy/dx = (xy + y² - 1)/(1 - x(x + y))",
           hint: "Aplica la regla de la cadena al logaritmo y la regla del producto al lado derecho.",
           points: 30
       },
       {
           question: "Halle $\\frac{dy}{dx}$ para $x^2y + y^2x = \\sin x$",
           answer: "Derivando implícitamente:\nd/dx(x²y) + d/dx(y²x) = d/dx(sin x)\n2xy + x²(dy/dx) + 2y(dy/dx)x + y² = cos x\n2xy + x²(dy/dx) + 2xy(dy/dx) + y² = cos x\ndy/dx(x² + 2xy) = cos x - 2xy - y²\ndy/dx = (cos x - 2xy - y²)/(x² + 2xy)\ndy/dx = (cos x - 2xy - y²)/(x(x + 2y))",
           hint: "Usa la regla del producto en ambos términos del lado izquierdo.",
           points: 30
       }
   ],
   "PUNTOS_CRITICOS": [
       {
           question: "$$f(x) = x^2 - 4x + 3$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = 2x - 4\n2. Igualamos a cero: 2x - 4 = 0\n3. x = 2\n4. f(2) = 4 - 8 + 3 = -1\n5. f''(x) = 2 > 0, por lo tanto (2, -1) es un mínimo local",
           hint: "Deriva la función e iguala a cero para encontrar puntos críticos.",
           points: 15
       },
       {
           question: "$$f(x) = -x^2 + 2x$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = -2x + 2\n2. Igualamos a cero: -2x + 2 = 0\n3. x = 1\n4. f(1) = -1 + 2 = 1\n5. f''(x) = -2 < 0, por lo tanto (1, 1) es un máximo local",
           hint: "La segunda derivada te ayuda a determinar si es máximo o mínimo.",
           points: 15
       },
       {
           question: "$$f(x) = x^3 - 3x^2 + 2$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = 3x² - 6x = 3x(x - 2)\n2. Puntos críticos: x = 0, x = 2\n3. f(0) = 2, f(2) = 8 - 12 + 2 = -2\n4. f''(x) = 6x - 6\n5. f''(0) = -6 < 0 → (0, 2) máximo local\n6. f''(2) = 6 > 0 → (2, -2) mínimo local",
           hint: "Factoriza la primera derivada para encontrar fácilmente los puntos críticos.",
           points: 20
       },
       {
           question: "$$f(x) = x^4 - 8x^2$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = 4x³ - 16x = 4x(x² - 4) = 4x(x - 2)(x + 2)\n2. Puntos críticos: x = -2, x = 0, x = 2\n3. f(-2) = 16 - 32 = -16\n4. f(0) = 0\n5. f(2) = 16 - 32 = -16\n6. f''(x) = 12x² - 16\n7. f''(-2) = 32 > 0 → (-2, -16) mínimo local\n8. f''(0) = -16 < 0 → (0, 0) máximo local\n9. f''(2) = 32 > 0 → (2, -16) mínimo local",
           hint: "Esta función tiene tres puntos críticos. Factoriza completamente.",
           points: 25
       },
       {
           question: "$$f(x) = \\ln(x^2 + 1)$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = 1/(x² + 1) · 2x = 2x/(x² + 1)\n2. Igualamos a cero: 2x/(x² + 1) = 0\n3. x = 0 (único punto crítico)\n4. f(0) = ln(1) = 0\n5. f''(x) = 2(x² + 1) - 2x(2x)/(x² + 1)² = 2(1 - x²)/(x² + 1)²\n6. f''(0) = 2 > 0 → (0, 0) es un mínimo local",
           hint: "Usa la regla de la cadena para derivar ln(x² + 1).",
           points: 20
       },
       {
           question: "$$f(x) = \\frac{x}{x^2 + 1}$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = [(x² + 1)(1) - x(2x)]/(x² + 1)² = (1 - x²)/(x² + 1)²\n2. Igualamos a cero: 1 - x² = 0\n3. x = ±1\n4. f(-1) = -1/2, f(1) = 1/2\n5. f''(x) = 2x(x² - 3)/(x² + 1)³\n6. f''(-1) = 4/8 = 1/2 > 0 → (-1, -1/2) mínimo local\n7. f''(1) = -4/8 = -1/2 < 0 → (1, 1/2) máximo local",
           hint: "Usa la regla del cociente para derivar esta función racional.",
           points: 25
       },
       {
           question: "$$f(x) = xe^{-x}$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = e^(-x) + x(-e^(-x)) = e^(-x)(1 - x)\n2. Como e^(-x) > 0 siempre, igualamos: 1 - x = 0\n3. x = 1\n4. f(1) = e^(-1) = 1/e\n5. f''(x) = -e^(-x)(1 - x) + e^(-x)(-1) = e^(-x)(x - 2)\n6. f''(1) = e^(-1)(-1) = -1/e < 0 → (1, 1/e) máximo local",
           hint: "Usa la regla del producto: d/dx(xe^(-x)) = e^(-x) + x(-e^(-x)).",
           points: 25
       },
       {
           question: "$$f(x) = \\cos(x) \\text{ en } [0, 2\\pi]$$",
           answer: "Para encontrar puntos críticos en [0, 2π]:\n1. f'(x) = -sin(x)\n2. Igualamos a cero: -sin(x) = 0\n3. x = 0, π, 2π\n4. f(0) = 1, f(π) = -1, f(2π) = 1\n5. f''(x) = -cos(x)\n6. f''(0) = -1 < 0 → (0, 1) máximo local\n7. f''(π) = 1 > 0 → (π, -1) mínimo local\n8. f''(2π) = -1 < 0 → (2π, 1) máximo local",
           hint: "Los puntos críticos de cos(x) ocurren donde sin(x) = 0.",
           points: 20
       },
       {
           question: "$$f(x) = x^2e^{-x}$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = 2xe^(-x) + x²(-e^(-x)) = e^(-x)(2x - x²) = xe^(-x)(2 - x)\n2. Como e^(-x) > 0, igualamos: x(2 - x) = 0\n3. x = 0, x = 2\n4. f(0) = 0, f(2) = 4e^(-2)\n5. f''(x) = e^(-x)[2 - 4x + x²] = e^(-x)(x - 2)²\n6. f''(0) = 4 > 0 → (0, 0) mínimo local\n7. f''(2) = 0 → se necesita análisis adicional para x = 2",
           hint: "Usa la regla del producto y factoriza cuidadosamente.",
           points: 30
       },
       {
           question: "$$f(x) = \\frac{x^2 - 1}{x^2 + 1}$$",
           answer: "Para encontrar puntos críticos:\n1. f'(x) = [2x(x² + 1) - (x² - 1)(2x)]/(x² + 1)²\n2. f'(x) = [2x³ + 2x - 2x³ + 2x]/(x² + 1)² = 4x/(x² + 1)²\n3. Igualamos a cero: 4x = 0\n4. x = 0\n5. f(0) = -1\n6. f''(x) = 4(x² + 1)² - 4x·2(x² + 1)·2x/(x² + 1)⁴ = 4(1 - 3x²)/(x² + 1)³\n7. f''(0) = 4 > 0 → (0, -1) mínimo local",
           hint: "Simplifica la derivada antes de igualar a cero.",
           points: 25
       }
   ],
   "LIMITES": [
       {
           question: "$$\\lim_{x \\to 2^-} \\frac{3x^2 - 7x + 6}{x^2 - x - 6}$$",
           answer: "Evaluando el límite:\n1. Factorizamos numerador: 3x² - 7x + 6 = (3x + 2)(x - 3) (error en factorización)\n2. Factorizamos correctamente: 3x² - 7x + 6 no se factoriza fácilmente\n3. Factorizamos denominador: x² - x - 6 = (x - 3)(x + 2)\n4. Como x → 2⁻, evaluamos directamente:\n5. lím = (12 - 14 + 6)/(4 - 2 - 6) = 4/(-4) = -1",
           hint: "Intenta factorizar, pero si no es posible, evalúa directamente el límite.",
           points: 20
       },
 {
           question: "$$\\lim_{x \\to 3^-} \\frac{x^3 + 9x^2 + 20x}{x^2 + x - 12}$$",
           answer: "Evaluando el límite:\n1. Factorizamos numerador: x³ + 9x² + 20x = x(x² + 9x + 20) = x(x + 4)(x + 5)\n2. Factorizamos denominador: x² + x - 12 = (x + 4)(x - 3)\n3. Simplificamos: x(x + 5)/(x - 3)\n4. Como x → 3⁻: lím = 3(8)/(0⁻) = 24/0⁻ = -∞",
           hint: "Factoriza completamente y observa el comportamiento cerca del punto de discontinuidad.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to -1^+} \\frac{x - 2}{x + 1}$$",
           answer: "Evaluando el límite:\n1. Como x → -1⁺, el numerador tiende a -3\n2. El denominador tiende a 0⁺\n3. Por lo tanto: lím = -3/0⁺ = -∞",
           hint: "Observa los signos del numerador y denominador al aproximarse al punto.",
           points: 15
       },
       {
           question: "$$\\lim_{x \\to +\\infty} \\sqrt{x^2 + x - 1} - \\sqrt{x^2 - 2x}$$",
           answer: "Para resolver este límite indeterminado ∞ - ∞:\n1. Multiplicamos por el conjugado:\n   (√(x² + x - 1) - √(x² - 2x)) · (√(x² + x - 1) + √(x² - 2x))/(√(x² + x - 1) + √(x² - 2x))\n2. = [(x² + x - 1) - (x² - 2x)]/(√(x² + x - 1) + √(x² - 2x))\n3. = (3x - 1)/(√(x² + x - 1) + √(x² - 2x))\n4. Dividimos por x: = (3 - 1/x)/(√(1 + 1/x - 1/x²) + √(1 - 2/x))\n5. Cuando x → +∞: lím = 3/(1 + 1) = 3/2",
           hint: "Usa la técnica del conjugado para eliminar la indeterminación ∞ - ∞.",
           points: 30
       },
       {
           question: "$$\\lim_{x \\to -\\infty} \\frac{2x^2 - 2x + 3}{x^2 - 6x - 2}$$",
           answer: "Para límites al infinito con funciones racionales:\n1. Dividimos numerador y denominador por x²:\n2. = (2 - 2/x + 3/x²)/(1 - 6/x - 2/x²)\n3. Cuando x → -∞: 2/x → 0, 3/x² → 0, 6/x → 0, 2/x² → 0\n4. Por lo tanto: lím = 2/1 = 2",
           hint: "Divide por la mayor potencia de x presente en el denominador.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to \\infty} \\left(\\frac{x^2}{x - 1} - \\frac{x}{3}\\right)$$",
           answer: "Para resolver este límite:\n1. Llevamos a común denominador: (3x² - x(x - 1))/(3(x - 1))\n2. = (3x² - x² + x)/(3(x - 1)) = (2x² + x)/(3(x - 1))\n3. = x(2x + 1)/(3(x - 1))\n4. Dividimos por x: = (2x + 1)/(3(1 - 1/x))\n5. Cuando x → ∞: lím = ∞",
           hint: "Lleva a común denominador antes de evaluar el límite.",
           points: 25
       },
       {
           question: "$$\\lim_{x \\to 0^+} \\frac{1 + \\ln(x)}{x}$$",
           answer: "Evaluando el límite:\n1. Cuando x → 0⁺: ln(x) → -∞\n2. Por lo tanto: 1 + ln(x) → -∞\n3. El denominador x → 0⁺\n4. Entonces: lím = -∞/0⁺ = -∞",
           hint: "Recuerda que ln(x) → -∞ cuando x → 0⁺.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to 0^-} \\frac{1}{\\sqrt{x + 1}} - \\frac{1}{\\sqrt{x + 2}}$$",
           answer: "Evaluando el límite:\n1. Cuando x → 0⁻:\n2. √(x + 1) → √1 = 1\n3. √(x + 2) → √2\n4. Por lo tanto: lím = 1/1 - 1/√2 = 1 - √2/2 = (2 - √2)/2",
           hint: "Este límite existe y es finito, evalúa directamente.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$$",
           answer: "Para resolver esta indeterminación 0/0:\n1. Factorizamos el numerador: x² - 1 = (x - 1)(x + 1)\n2. Simplificamos: (x - 1)(x + 1)/(x - 1) = x + 1\n3. Evaluamos: lím = 1 + 1 = 2",
           hint: "Factoriza el numerador para cancelar el factor común.",
           points: 15
       },
       {
           question: "$$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$$",
           answer: "Este es un límite fundamental:\n1. Es de la forma 0/0, podemos usar L'Hôpital:\n2. lím = lím (e^x)/1 = e⁰ = 1\n3. O reconocer que es la definición de la derivada de e^x en x = 0\n4. Por lo tanto: lím = 1",
           hint: "Este es un límite fundamental importante: lím(e^x - 1)/x = 1 cuando x → 0.",
           points: 20
       }
   ],
   "DERIVADAS_COMPLEJAS": [
       {
           question: "$$f(x) = \\sin\\left(\\sqrt{\\ln(x^2 + 1)}\\right)$$",
           answer: "Aplicando la regla de la cadena múltiples veces:\n1. Sea u = x² + 1, v = ln(u), w = √v\n2. f'(x) = cos(√(ln(x² + 1))) · d/dx[√(ln(x² + 1))]\n3. d/dx[√(ln(x² + 1))] = 1/(2√(ln(x² + 1))) · d/dx[ln(x² + 1)]\n4. d/dx[ln(x² + 1)] = 2x/(x² + 1)\n5. Por lo tanto: f'(x) = cos(√(ln(x² + 1))) · 1/(2√(ln(x² + 1))) · 2x/(x² + 1)\n6. f'(x) = x cos(√(ln(x² + 1)))/[(x² + 1)√(ln(x² + 1))]",
           hint: "Aplica la regla de la cadena paso a paso, identificando cada función compuesta.",
           points: 35
       },
       {
           question: "$$f(x) = \\ln^2\\left(\\cos\\left(\\sqrt{x^2 + 1}\\right)\\right)$$",
           answer: "Aplicando la regla de la cadena:\n1. f'(x) = 2ln(cos(√(x² + 1))) · d/dx[ln(cos(√(x² + 1)))]\n2. d/dx[ln(cos(√(x² + 1)))] = 1/cos(√(x² + 1)) · d/dx[cos(√(x² + 1))]\n3. d/dx[cos(√(x² + 1))] = -sin(√(x² + 1)) · d/dx[√(x² + 1)]\n4. d/dx[√(x² + 1)] = x/√(x² + 1)\n5. Combinando: f'(x) = 2ln(cos(√(x² + 1))) · (-sin(√(x² + 1))/cos(√(x² + 1))) · x/√(x² + 1)\n6. f'(x) = -2x ln(cos(√(x² + 1))) tan(√(x² + 1))/√(x² + 1)",
           hint: "Usa ln²(u) = [ln(u)]² y aplica la regla de la cadena sistemáticamente.",
           points: 40
       },
       {
           question: "$$f(x) = \\sqrt[3]{\\tan^2(e^{x^2})}$$",
           answer: "Reescribiendo f(x) = [tan²(e^(x²))]^(1/3) y aplicando la regla de la cadena:\n1. f'(x) = (1/3)[tan²(e^(x²))]^(-2/3) · d/dx[tan²(e^(x²))]\n2. d/dx[tan²(e^(x²))] = 2tan(e^(x²)) · d/dx[tan(e^(x²))]\n3. d/dx[tan(e^(x²))] = sec²(e^(x²)) · d/dx[e^(x²)]\n4. d/dx[e^(x²)] = e^(x²) · 2x\n5. Combinando: f'(x) = (1/3)[tan²(e^(x²))]^(-2/3) · 2tan(e^(x²)) · sec²(e^(x²)) · e^(x²) · 2x\n6. f'(x) = (4x tan(e^(x²)) sec²(e^(x²)) e^(x²))/(3[tan²(e^(x²))]^(2/3))",
           hint: "Reescribe la raíz cúbica como potencia fraccionaria y aplica la regla de la cadena paso a paso.",
           points: 40
       },
       {
           question: "$$f(x) = \\arctan\\left(\\cos\\left(\\ln(x^2 + 1)\\right)\\right)$$",
           answer: "Aplicando la regla de la cadena:\n1. f'(x) = 1/(1 + cos²(ln(x² + 1))) · d/dx[cos(ln(x² + 1))]\n2. d/dx[cos(ln(x² + 1))] = -sin(ln(x² + 1)) · d/dx[ln(x² + 1)]\n3. d/dx[ln(x² + 1)] = 2x/(x² + 1)\n4. Combinando: f'(x) = 1/(1 + cos²(ln(x² + 1))) · (-sin(ln(x² + 1))) · 2x/(x² + 1)\n5. f'(x) = -2x sin(ln(x² + 1))/[(x² + 1)(1 + cos²(ln(x² + 1)))]",
           hint: "La derivada de arctan(u) es u'/(1 + u²). Aplica esto con u = cos(ln(x² + 1)).",
           points: 35
       },
       {
           question: "$$f(x) = \\sec\\left(\\sqrt{1 + \\tan^2(\\ln(x^2 + 1))}\\right)$$",
           answer: "Aplicando la regla de la cadena:\n1. f'(x) = sec(√(1 + tan²(ln(x² + 1)))) tan(√(1 + tan²(ln(x² + 1)))) · d/dx[√(1 + tan²(ln(x² + 1)))]\n2. Nota: √(1 + tan²(u)) = sec(u), entonces √(1 + tan²(ln(x² + 1))) = sec(ln(x² + 1))\n3. f(x) = sec(sec(ln(x² + 1)))\n4. f'(x) = sec(sec(ln(x² + 1))) tan(sec(ln(x² + 1))) · d/dx[sec(ln(x² + 1))]\n5. d/dx[sec(ln(x² + 1))] = sec(ln(x² + 1)) tan(ln(x² + 1)) · 2x/(x² + 1)\n6. f'(x) = sec(sec(ln(x² + 1))) tan(sec(ln(x² + 1))) sec(ln(x² + 1)) tan(ln(x² + 1)) · 2x/(x² + 1)",
           hint: "Usa la identidad trigonométrica √(1 + tan²(u)) = sec(u) para simplificar.",
           points: 45
       }
   ],
  {
           question: "$$\\lim_{x \\to 3^-} \\frac{x^3 + 9x^2 + 20x}{x^2 + x - 12}$$",
           answer: "Evaluando el límite:\n1. Factorizamos numerador: x³ + 9x² + 20x = x(x² + 9x + 20) = x(x + 4)(x + 5)\n2. Factorizamos denominador: x² + x - 12 = (x + 4)(x - 3)\n3. Simplificamos: x(x + 5)/(x - 3)\n4. Como x → 3⁻: lím = 3(8)/(0⁻) = 24/0⁻ = -∞",
           hint: "Factoriza completamente y observa el comportamiento cerca del punto de discontinuidad.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to -1^+} \\frac{x - 2}{x + 1}$$",
           answer: "Evaluando el límite:\n1. Como x → -1⁺, el numerador tiende a -3\n2. El denominador tiende a 0⁺\n3. Por lo tanto: lím = -3/0⁺ = -∞",
           hint: "Observa los signos del numerador y denominador al aproximarse al punto.",
           points: 15
       },
       {
           question: "$$\\lim_{x \\to +\\infty} \\sqrt{x^2 + x - 1} - \\sqrt{x^2 - 2x}$$",
           answer: "Para resolver este límite indeterminado ∞ - ∞:\n1. Multiplicamos por el conjugado:\n   (√(x² + x - 1) - √(x² - 2x)) · (√(x² + x - 1) + √(x² - 2x))/(√(x² + x - 1) + √(x² - 2x))\n2. = [(x² + x - 1) - (x² - 2x)]/(√(x² + x - 1) + √(x² - 2x))\n3. = (3x - 1)/(√(x² + x - 1) + √(x² - 2x))\n4. Dividimos por x: = (3 - 1/x)/(√(1 + 1/x - 1/x²) + √(1 - 2/x))\n5. Cuando x → +∞: lím = 3/(1 + 1) = 3/2",
           hint: "Usa la técnica del conjugado para eliminar la indeterminación ∞ - ∞.",
           points: 30
       },
       {
           question: "$$\\lim_{x \\to -\\infty} \\frac{2x^2 - 2x + 3}{x^2 - 6x - 2}$$",
           answer: "Para límites al infinito con funciones racionales:\n1. Dividimos numerador y denominador por x²:\n2. = (2 - 2/x + 3/x²)/(1 - 6/x - 2/x²)\n3. Cuando x → -∞: 2/x → 0, 3/x² → 0, 6/x → 0, 2/x² → 0\n4. Por lo tanto: lím = 2/1 = 2",
           hint: "Divide por la mayor potencia de x presente en el denominador.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to \\infty} \\left(\\frac{x^2}{x - 1} - \\frac{x}{3}\\right)$$",
           answer: "Para resolver este límite:\n1. Llevamos a común denominador: (3x² - x(x - 1))/(3(x - 1))\n2. = (3x² - x² + x)/(3(x - 1)) = (2x² + x)/(3(x - 1))\n3. = x(2x + 1)/(3(x - 1))\n4. Dividimos por x: = (2x + 1)/(3(1 - 1/x))\n5. Cuando x → ∞: lím = ∞",
           hint: "Lleva a común denominador antes de evaluar el límite.",
           points: 25
       },
       {
           question: "$$\\lim_{x \\to 0^+} \\frac{1 + \\ln(x)}{x}$$",
           answer: "Evaluando el límite:\n1. Cuando x → 0⁺: ln(x) → -∞\n2. Por lo tanto: 1 + ln(x) → -∞\n3. El denominador x → 0⁺\n4. Entonces: lím = -∞/0⁺ = -∞",
           hint: "Recuerda que ln(x) → -∞ cuando x → 0⁺.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to 0^-} \\frac{1}{\\sqrt{x + 1}} - \\frac{1}{\\sqrt{x + 2}}$$",
           answer: "Evaluando el límite:\n1. Cuando x → 0⁻:\n2. √(x + 1) → √1 = 1\n3. √(x + 2) → √2\n4. Por lo tanto: lím = 1/1 - 1/√2 = 1 - √2/2 = (2 - √2)/2",
           hint: "Este límite existe y es finito, evalúa directamente.",
           points: 20
       },
       {
           question: "$$\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$$",
           answer: "Para resolver esta indeterminación 0/0:\n1. Factorizamos el numerador: x² - 1 = (x - 1)(x + 1)\n2. Simplificamos: (x - 1)(x + 1)/(x - 1) = x + 1\n3. Evaluamos: lím = 1 + 1 = 2",
           hint: "Factoriza el numerador para cancelar el factor común.",
           points: 15
       },
       {
           question: "$$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$$",
           answer: "Este es un límite fundamental:\n1. Es de la forma 0/0, podemos usar L'Hôpital:\n2. lím = lím (e^x)/1 = e⁰ = 1\n3. O reconocer que es la definición de la derivada de e^x en x = 0\n4. Por lo tanto: lím = 1",
           hint: "Este es un límite fundamental importante: lím(e^x - 1)/x = 1 cuando x → 0.",
           points: 20
       }
   ],
   "DERIVADAS_COMPLEJAS": [
       {
           question: "$$f(x) = \\sin\\left(\\sqrt{\\ln(x^2 + 1)}\\right)$$",
           answer: "Aplicando la regla de la cadena múltiples veces:\n1. Sea u = x² + 1, v = ln(u), w = √v\n2. f'(x) = cos(√(ln(x² + 1))) · d/dx[√(ln(x² + 1))]\n3. d/dx[√(ln(x² + 1))] = 1/(2√(ln(x² + 1))) · d/dx[ln(x² + 1)]\n4. d/dx[ln(x² + 1)] = 2x/(x² + 1)\n5. Por lo tanto: f'(x) = cos(√(ln(x² + 1))) · 1/(2√(ln(x² + 1))) · 2x/(x² + 1)\n6. f'(x) = x cos(√(ln(x² + 1)))/[(x² + 1)√(ln(x² + 1))]",
           hint: "Aplica la regla de la cadena paso a paso, identificando cada función compuesta.",
           points: 35
       },
       {
           question: "$$f(x) = \\ln^2\\left(\\cos\\left(\\sqrt{x^2 + 1}\\right)\\right)$$",
           answer: "Aplicando la regla de la cadena:\n1. f'(x) = 2ln(cos(√(x² + 1))) · d/dx[ln(cos(√(x² + 1)))]\n2. d/dx[ln(cos(√(x² + 1)))] = 1/cos(√(x² + 1)) · d/dx[cos(√(x² + 1))]\n3. d/dx[cos(√(x² + 1))] = -sin(√(x² + 1)) · d/dx[√(x² + 1)]\n4. d/dx[√(x² + 1)] = x/√(x² + 1)\n5. Combinando: f'(x) = 2ln(cos(√(x² + 1))) · (-sin(√(x² + 1))/cos(√(x² + 1))) · x/√(x² + 1)\n6. f'(x) = -2x ln(cos(√(x² + 1))) tan(√(x² + 1))/√(x² + 1)",
           hint: "Usa ln²(u) = [ln(u)]² y aplica la regla de la cadena sistemáticamente.",
           points: 40
       },
       {
           question: "$$f(x) = \\sqrt[3]{\\tan^2(e^{x^2})}$$",
           answer: "Reescribiendo f(x) = [tan²(e^(x²))]^(1/3) y aplicando la regla de la cadena:\n1. f'(x) = (1/3)[tan²(e^(x²))]^(-2/3) · d/dx[tan²(e^(x²))]\n2. d/dx[tan²(e^(x²))] = 2tan(e^(x²)) · d/dx[tan(e^(x²))]\n3. d/dx[tan(e^(x²))] = sec²(e^(x²)) · d/dx[e^(x²)]\n4. d/dx[e^(x²)] = e^(x²) · 2x\n5. Combinando: f'(x) = (1/3)[tan²(e^(x²))]^(-2/3) · 2tan(e^(x²)) · sec²(e^(x²)) · e^(x²) · 2x\n6. f'(x) = (4x tan(e^(x²)) sec²(e^(x²)) e^(x²))/(3[tan²(e^(x²))]^(2/3))",
           hint: "Reescribe la raíz cúbica como potencia fraccionaria y aplica la regla de la cadena paso a paso.",
           points: 40
       },
       {
           question: "$$f(x) = \\arctan\\left(\\cos\\left(\\ln(x^2 + 1)\\right)\\right)$$",
           answer: "Aplicando la regla de la cadena:\n1. f'(x) = 1/(1 + cos²(ln(x² + 1))) · d/dx[cos(ln(x² + 1))]\n2. d/dx[cos(ln(x² + 1))] = -sin(ln(x² + 1)) · d/dx[ln(x² + 1)]\n3. d/dx[ln(x² + 1)] = 2x/(x² + 1)\n4. Combinando: f'(x) = 1/(1 + cos²(ln(x² + 1))) · (-sin(ln(x² + 1))) · 2x/(x² + 1)\n5. f'(x) = -2x sin(ln(x² + 1))/[(x² + 1)(1 + cos²(ln(x² + 1)))]",
           hint: "La derivada de arctan(u) es u'/(1 + u²). Aplica esto con u = cos(ln(x² + 1)).",
           points: 35
       },
       {
           question: "$$f(x) = \\sec\\left(\\sqrt{1 + \\tan^2(\\ln(x^2 + 1))}\\right)$$",
           answer: "Aplicando la regla de la cadena:\n1. f'(x) = sec(√(1 + tan²(ln(x² + 1)))) tan(√(1 + tan²(ln(x² + 1)))) · d/dx[√(1 + tan²(ln(x² + 1)))]\n2. Nota: √(1 + tan²(u)) = sec(u), entonces √(1 + tan²(ln(x² + 1))) = sec(ln(x² + 1))\n3. f(x) = sec(sec(ln(x² + 1)))\n4. f'(x) = sec(sec(ln(x² + 1))) tan(sec(ln(x² + 1))) · d/dx[sec(ln(x² + 1))]\n5. d/dx[sec(ln(x² + 1))] = sec(ln(x² + 1)) tan(ln(x² + 1)) · 2x/(x² + 1)\n6. f'(x) = sec(sec(ln(x² + 1))) tan(sec(ln(x² + 1))) sec(ln(x² + 1)) tan(ln(x² + 1)) · 2x/(x² + 1)",
           hint: "Usa la identidad trigonométrica √(1 + tan²(u)) = sec(u) para simplificar.",
           points: 45
       }
   ],
   "OPTIMIZACION": [
       {
           question: "¿Qué dimensiones debe tener un rectángulo con perímetro 100 cm para que su área sea máxima?",
           answer: "Para maximizar el área:\n1. Sea x = ancho, y = largo\n2. Restricción: 2x + 2y = 100, entonces y = 50 - x\n3. Área: A(x) = xy = x(50 - x) = 50x - x²\n4. A'(x) = 50 - 2x\n5. Igualamos a cero: 50 - 2x = 0, x = 25\n6. A''(x) = -2 < 0, confirma que es máximo\n7. Las dimensiones óptimas son 25 cm × 25 cm (cuadrado)",
           hint: "Usa la restricción del perímetro para expresar el área en función de una sola variable.",
           points: 25
       },
       {
           question: "Determine el punto de un paraboloide $y = x^2$ más cercano al punto (0,1).",
           answer: "Para minimizar la distancia:\n1. Sea P(t, t²) un punto en la parábola\n2. Distancia² = (t - 0)² + (t² - 1)² = t² + (t² - 1)²\n3. D²(t) = t² + t⁴ - 2t² + 1 = t⁴ - t² + 1\n4. d/dt[D²(t)] = 4t³ - 2t = 2t(2t² - 1)\n5. Puntos críticos: t = 0, t = ±1/√2\n6. Evaluamos: D²(0) = 1, D²(±1/√2) = 1/4 - 1/2 + 1 = 3/4\n7. El punto más cercano es (1/√2, 1/2) o (-1/√2, 1/2)",
           hint: "Minimiza el cuadrado de la distancia para evitar la raíz cuadrada.",
           points: 30
       },
       {
           question: "Encuentre el volumen máximo de una caja sin tapa hecha a partir de una lámina cuadrada de 20 cm por lado.",
           answer: "Para maximizar el volumen:\n1. Sea x = altura de los lados doblados\n2. Base de la caja: (20 - 2x) × (20 - 2x)\n3. Volumen: V(x) = x(20 - 2x)² donde 0 < x < 10\n4. V(x) = x(400 - 80x + 4x²) = 400x - 80x² + 4x³\n5. V'(x) = 400 - 160x + 12x²\n6. Igualamos a cero: 12x² - 160x + 400 = 0\n7. 3x² - 40x + 100 = 0\n8. x = (40 ± √(1600 - 1200))/6 = (40 ± 20)/6\n9. x = 10 (no válido) o x = 10/3\n10. V(10/3) = (10/3)(20 - 20/3)² = (10/3)(40/3)² = 16000/27 cm³",
           hint: "La altura no puede ser mayor que la mitad del lado de la lámina original.",
           points: 30
       },
       {
           question: "Un agricultor desea cercar un campo rectangular de área máxima usando 240 m de cerca, uno de cuyos lados está junto a un río y no necesita cerca. ¿Cuáles son las dimensiones óptimas?",
           answer: "Para maximizar el área:\n1. Sea x = ancho (perpendicular al río), y = largo (paralelo al río)\n2. Restricción de cerca: 2x + y = 240, entonces y = 240 - 2x\n3. Área: A(x) = xy = x(240 - 2x) = 240x - 2x²\n4. A'(x) = 240 - 4x\n5. Igualamos a cero: 240 - 4x = 0, x = 60\n6. A''(x) = -4 < 0, confirma que es máximo\n7. y = 240 - 2(60) = 120\n8. Dimensiones óptimas: 60 m × 120 m\n9. Área máxima: 7200 m²",
           hint: "Solo tres lados necesitan cerca, no el lado junto al río.",
           points: 25
       },
       {
           question: "Se lanza un proyectil. ¿En qué momento alcanza la altura máxima si su función de altura es $h(t) = -5t^2 + 40t + 10$?",
           answer: "Para encontrar la altura máxima:\n1. h(t) = -5t² + 40t + 10\n2. h'(t) = -10t + 40\n3. Igualamos a cero: -10t + 40 = 0\n4. t = 4 segundos\n5. h''(t) = -10 < 0, confirma que es máximo\n6. Altura máxima: h(4) = -5(16) + 40(4) + 10 = -80 + 160 + 10 = 90 m\n7. El proyectil alcanza su altura máxima a los 4 segundos",
           hint: "La altura máxima ocurre cuando la velocidad (derivada) es cero.",
           points: 20
       },
       {
           question: "Diseñe un cilindro de volumen fijo $V = 500$ cm³ de forma que el área de superficie sea mínima.",
           answer: "Para minimizar el área de superficie:\n1. V = πr²h = 500, entonces h = 500/(πr²)\n2. Área superficie: A = 2πr² + 2πrh = 2πr² + 2πr(500/(πr²)) = 2πr² + 1000/r\n3. A'(r) = 4πr - 1000/r²\n4. Igualamos a cero: 4πr - 1000/r² = 0\n5. 4πr³ = 1000\n6. r³ = 1000/(4π) = 250/π\n7. r = ∛(250/π) ≈ 4.31 cm\n8. h = 500/(πr²) = 500/(π(250/π)^(2/3)) = 2∛(250/π) ≈ 8.62 cm\n9. Nota: h = 2r (relación óptima)",
           hint: "Usa la restricción del volumen para eliminar una variable de la función de área.",
           points: 35
       },
       {
           question: "¿Cuál es el área mínima de un triángulo rectángulo cuyo perímetro es 36 cm?",
           answer: "Para minimizar el área:\n1. Sean a, b los catetos, c la hipotenusa\n2. Restricciones: a + b + c = 36 y c² = a² + b²\n3. De la primera: c = 36 - a - b\n4. Sustituyendo: (36 - a - b)² = a² + b²\n5. 1296 - 72a - 72b + a² + 2ab + b² = a² + b²\n6. 1296 - 72a - 72b + 2ab = 0\n7. ab = 36a + 36b - 648 = 36(a + b) - 648\n8. Área: A = (1/2)ab = 18(a + b) - 324\n9. Para minimizar A, minimizamos a + b sujeto a las restricciones\n10. Por simetría, a = b minimiza el área\n11. Si a = b, entonces c = 36 - 2a y c² = 2a²\n12. (36 - 2a)² = 2a², resolviendo: a = 18 - 9√2\n13. Área mínima = (18 - 9√2)² ≈ 153.9 cm²",
           hint: "Usa el hecho de que el triángulo isósceles minimiza el área para perímetro fijo.",
           points: 40
       },
       {
           question: "Se desea construir un corral con tres lados de cerca. Uno de los lados está junto a una pared. ¿Cómo deben ser las dimensiones para maximizar el área si se tienen 60 metros de cerca?",
           answer: "Para maximizar el área:\n1. Sea x = ancho (perpendicular a la pared), y = largo (paralelo a la pared)\n2. Restricción: 2x + y = 60, entonces y = 60 - 2x\n3. Área: A(x) = xy = x(60 - 2x) = 60x - 2x²\n4. A'(x) = 60 - 4x\n5. Igualamos a cero: 60 - 4x = 0, x = 15\n6. A''(x) = -4 < 0, confirma que es máximo\n7. y = 60 - 2(15) = 30\n8. Dimensiones óptimas: 15 m × 30 m\n9. Área máxima: 450 m²",
           hint: "Solo necesitas cerca para tres lados, uno está junto a la pared existente.",
           points: 25
       },
       {
           question: "¿Qué ángulo debe formar una escalera con el suelo para que, al estar apoyada en un muro de 4 m, tenga la menor longitud posible?",
           answer: "Para minimizar la longitud de la escalera:\n1. Sea θ el ángulo con el suelo, L la longitud de la escalera\n2. Del triángulo rectángulo: sen(θ) = 4/L\n3. Por tanto: L = 4/sen(θ)\n4. Para minimizar L, maximizamos sen(θ)\n5. sen(θ) es máximo cuando θ = 90°\n6. Sin embargo, esto no es práctico\n7. Si consideramos estabilidad, típicamente θ ≈ 75°\n8. La longitud mínima teórica es L = 4 m (escalera vertical)\n9. En la práctica, se recomienda θ entre 70° y 80°",
           hint: "Matemáticamente, la escalera más corta sería vertical, pero considera aspectos prácticos.",
           points: 25
       }
   ],
   "RAZON_CAMBIO": [
       {
           question: "Un globo se eleva verticalmente desde el suelo a razón de 4 m/s. Un ciclista pasa por el punto de despegue a 8 m/s. ¿A qué velocidad cambia la distancia entre ellos cuando el globo está a 30 m del suelo?",
           answer: "Para encontrar la razón de cambio de la distancia:\n1. Sea h = altura del globo, x = distancia horizontal del ciclista, d = distancia entre ellos\n2. d² = h² + x²\n3. Derivando: 2d(dd/dt) = 2h(dh/dt) + 2x(dx/dt)\n4. dd/dt = [h(dh/dt) + x(dx/dt)]/d\n5. Datos: dh/dt = 4 m/s, dx/dt = 8 m/s\n6. Cuando h = 30 m, x = 8t (donde t es el tiempo desde que el ciclista pasó)\n7. En el momento que el globo está a 30 m: t = 30/4 = 7.5 s\n8. x = 8(7.5) = 60 m\n9. d = √(30² + 60²) = √(900 + 3600) = √4500 = 30√5 m\n10. dd/dt = [30(4) + 60(8)]/(30√5) = [120 + 480]/(30√5) = 600/(30√5) = 20/√5 = 4√5 m/s",
           hint: "Usa el teorema de Pitágoras para relacionar las variables y deriva implícitamente.",
           points: 30
       },
       {
           question: "Un tanque cónico se llena con agua. Si el radio aumenta a 2 cm/min y la altura se mantiene constante en 10 cm, ¿cómo cambia el volumen?",
           answer: "Para encontrar cómo cambia el volumen:\n1. V = (1/3)πr²h donde h = 10 cm (constante)\n2. V = (10π/3)r²\n3. Derivando: dV/dt = (10π/3) · 2r · dr/dt = (20πr/3) · dr/dt\n4. Dado: dr/dt = 2 cm/min\n5. dV/dt = (20πr/3) · 2 = (40πr/3) cm³/min\n6. La razón de cambio del volumen depende del radio actual\n7. Por ejemplo, cuando r = 5 cm: dV/dt = (40π·5/3) = 200π/3 ≈ 209.4 cm³/min",
           hint: "Como la altura es constante, el volumen solo depende del radio.",
           points: 25
       },
       {
           question: "La sombra de una persona de 1.8 m camina alejándose de un farol de 6 m de alto. ¿A qué velocidad crece su sombra si camina a 1.5 m/s?",
           answer: "Para encontrar la velocidad de crecimiento de la sombra:\n1. Sea x = distancia de la persona al farol, s = longitud de la sombra\n2. Por triángulos similares: 6/(x + s) = 1.8/s\n3. 6s = 1.8(x + s) = 1.8x + 1.8s\n4. 4.2s = 1.8x\n5. s = (1.8/4.2)x = (3/7)x\n6. Derivando: ds/dt = (3/7) · dx/dt\n7. Dado: dx/dt = 1.5 m/s\n8. ds/dt = (3/7) · 1.5 = 4.5/7 ≈ 0.64 m/s\n9. La sombra crece a una velocidad constante de 9/14 m/s",
           hint: "Usa triángulos similares para relacionar la posición de la persona con la longitud de su sombra.",
           points: 30
       },
       {
           question: "Dos coches se alejan desde un cruce, uno hacia el norte a 60 km/h y otro al este a 80 km/h. ¿Qué tan rápido se alejan uno del otro después de 2 horas?",
           answer: "Para encontrar la velocidad de separación:\n1. Sea x = distancia del coche que va al este, y = distancia del coche que va al norte\n2. d² = x² + y² (distancia entre los coches)\n3. Derivando: 2d(dd/dt) = 2x(dx/dt) + 2y(dy/dt)\n4. dd/dt = [x(dx/dt) + y(dy/dt)]/d\n5. Datos: dx/dt = 80 km/h, dy/dt = 60 km/h\n6. Después de 2 horas: x = 160 km, y = 120 km\n7. d = √(160² + 120²) = √(25600 + 14400) = √40000 = 200 km\n8. dd/dt = [160(80) + 120(60)]/200 = [12800 + 7200]/200 = 20000/200 = 100 km/h\n9. Los coches se alejan a 100 km/h",
           hint: "Usa el teorema de Pitágoras y deriva implícitamente respecto al tiempo.",
           points: 25
       },
      answer: "Para encontrar la razón de cambio del volumen:\n1. V = (4/3)πr³\n2. Derivando: dV/dt = (4/3)π · 3r² · dr/dt = 4πr² · dr/dt\n3. Dado: dr/dt = 3 cm/s\n4. dV/dt = 4πr² · 3 = 12πr² cm³/s\n5. La razón de cambio del volumen depende del radio actual\n6. Por ejemplo, cuando r = 5 cm: dV/dt = 12π(25) = 300π ≈ 942.5 cm³/s\n7. Cuando r = 10 cm: dV/dt = 12π(100) = 1200π ≈ 3770 cm³/s",
           hint: "El volumen de una esfera es V = (4/3)πr³. Deriva respecto al tiempo.",
           points: 25
       },
       {
           question: "Una escalera de 10 m se desliza por una pared. Si la base se aleja de la pared a 1 m/s, ¿con qué rapidez desciende la parte superior cuando está a 6 m de altura?",
           answer: "Para encontrar la velocidad de descenso:\n1. Sea x = distancia de la base a la pared, y = altura de la parte superior\n2. x² + y² = 100 (teorema de Pitágoras)\n3. Derivando: 2x(dx/dt) + 2y(dy/dt) = 0\n4. dy/dt = -x(dx/dt)/y\n5. Cuando y = 6 m: x² + 36 = 100, entonces x = 8 m\n6. Dado: dx/dt = 1 m/s\n7. dy/dt = -8(1)/6 = -4/3 m/s\n8. La parte superior desciende a 4/3 m/s ≈ 1.33 m/s",
           hint: "Usa el teorema de Pitágoras: x² + y² = L² donde L = 10 m es la longitud de la escalera.",
           points: 25
       },
       {
           question: "La longitud de un lado de un cuadrado aumenta a razón de 2 cm/s. ¿Con qué rapidez cambia el área?",
           answer: "Para encontrar la razón de cambio del área:\n1. A = x² donde x es el lado del cuadrado\n2. Derivando: dA/dt = 2x · dx/dt\n3. Dado: dx/dt = 2 cm/s\n4. dA/dt = 2x · 2 = 4x cm²/s\n5. La razón de cambio del área depende del lado actual\n6. Por ejemplo, cuando x = 5 cm: dA/dt = 4(5) = 20 cm²/s\n7. Cuando x = 10 cm: dA/dt = 4(10) = 40 cm²/s",
           hint: "El área de un cuadrado es A = x². Deriva respecto al tiempo.",
           points: 20
       },
       {
           question: "Un satélite gira en órbita circular. Si la distancia radial cambia, ¿cómo cambia la velocidad angular?",
           answer: "Para encontrar cómo cambia la velocidad angular:\n1. Para órbita circular: v = rω donde v = velocidad lineal, r = radio, ω = velocidad angular\n2. Si la velocidad lineal se mantiene constante: v = constante\n3. Entonces: rω = constante\n4. Derivando: r(dω/dt) + ω(dr/dt) = 0\n5. dω/dt = -ω(dr/dt)/r\n6. La velocidad angular cambia inversamente proporcional al cambio del radio\n7. Si r aumenta, ω disminuye y viceversa",
           hint: "Usa la relación v = rω y considera si alguna cantidad se mantiene constante.",
           points: 25
       },
       {
           question: "Un cilindro de radio r y altura h varía su volumen. Si r y h cambian, calcule $\\frac{dV}{dt}$",
           answer: "Para encontrar la razón de cambio del volumen:\n1. V = πr²h\n2. Derivando usando la regla del producto:\n3. dV/dt = π[2r(dr/dt)h + r²(dh/dt)]\n4. dV/dt = π[2rh(dr/dt) + r²(dh/dt)]\n5. dV/dt = πr[2h(dr/dt) + r(dh/dt)]\n6. Esta fórmula relaciona la razón de cambio del volumen con las razones de cambio del radio y la altura",
           hint: "Usa la regla del producto al derivar V = πr²h respecto al tiempo.",
           points: 25
       }
   ],
   "ASINTOTAS": [
       {
           question: "Hallar las asíntotas verticales, horizontales y oblicuas de $f(x) = \\frac{x^2 + 3}{\\sqrt{x^2 - 4}}$",
           answer: "Para encontrar las asíntotas:\n\nAsíntotas verticales:\n1. El denominador se anula cuando x² - 4 = 0\n2. x = ±2\n3. Verificamos los límites:\n   - lím(x→2⁺) f(x) = +∞\n   - lím(x→2⁻) f(x) = +∞\n   - lím(x→-2⁺) f(x) = +∞\n   - lím(x→-2⁻) f(x) = +∞\n4. Asíntotas verticales: x = 2, x = -2\n\nAsíntotas horizontales:\n1. lím(x→±∞) (x² + 3)/√(x² - 4)\n2. = lím(x→±∞) (x² + 3)/(|x|√(1 - 4/x²))\n3. Para x > 0: = lím(x→+∞) x(1 + 3/x²)/√(1 - 4/x²) = +∞\n4. No hay asíntotas horizontales\n\nAsíntotas oblicuas:\n1. m = lím(x→+∞) f(x)/x = lím(x→+∞) (x² + 3)/(x√(x² - 4)) = 1\n2. b = lím(x→+∞) [f(x) - mx] = 0\n3. Asíntota oblicua: y = x (para x > 0)\n4. Para x < 0: y = -x",
           hint: "Para funciones con raíces cuadradas, considera el dominio y el comportamiento en los extremos.",
           points: 35
       },
       {
           question: "Hallar las asíntotas de $f(x) = \\frac{x^2 + 4x}{x^2 - 1}$",
           answer: "Para encontrar las asíntotas:\n\nAsíntotas verticales:\n1. x² - 1 = 0 → x = ±1\n2. Verificamos:\n   - lím(x→1⁻) f(x) = 5/0⁻ = -∞\n   - lím(x→1⁺) f(x) = 5/0⁺ = +∞\n   - lím(x→-1⁻) f(x) = -3/0⁻ = +∞\n   - lím(x→-1⁺) f(x) = -3/0⁺ = -∞\n3. Asíntotas verticales: x = 1, x = -1\n\nAsíntotas horizontales:\n1. lím(x→±∞) (x² + 4x)/(x² - 1)\n2. Dividiendo por x²: lím(x→±∞) (1 + 4/x)/(1 - 1/x²) = 1/1 = 1\n3. Asíntota horizontal: y = 1\n\nAsíntotas oblicuas:\n1. Como existe asíntota horizontal, no hay oblicuas",
           hint: "Para funciones racionales donde los grados del numerador y denominador son iguales, hay asíntota horizontal.",
           points: 25
       },
       {
           question: "Determina si la función $f(x) = \\frac{2x^2 - 3}{x^2 - 4}$ tiene asíntotas verticales, horizontales u oblicuas",
           answer: "Para analizar las asíntotas:\n\nAsíntotas verticales:\n1. x² - 4 = 0 → x = ±2\n2. Como 2x² - 3 ≠ 0 en x = ±2:\n   - En x = 2: 2(4) - 3 = 5 ≠ 0\n   - En x = -2: 2(4) - 3 = 5 ≠ 0\n3. Asíntotas verticales: x = 2, x = -2\n\nAsíntotas horizontales:\n1. lím(x→±∞) (2x² - 3)/(x² - 4)\n2. Dividiendo por x²: lím(x→±∞) (2 - 3/x²)/(1 - 4/x²) = 2/1 = 2\n3. Asíntota horizontal: y = 2\n\nAsíntotas oblicuas:\n1. Como existe asíntota horizontal, no hay oblicuas",
           hint: "Cuando el grado del numerador iguala al del denominador, la asíntota horizontal es el cociente de los coeficientes principales.",
           points: 25
       },
       {
           question: "Hallar las asíntotas de $f(x) = \\frac{x^3 + 2x^2 + x}{x^2 - 1}$",
           answer: "Para encontrar las asíntotas:\n\nAsíntotas verticales:\n1. x² - 1 = 0 → x = ±1\n2. Verificamos si el numerador se anula:\n   - En x = 1: 1 + 2 + 1 = 4 ≠ 0\n   - En x = -1: -1 + 2 - 1 = 0\n3. En x = -1 hay indeterminación 0/0\n4. Factorizamos: x³ + 2x² + x = x(x² + 2x + 1) = x(x + 1)²\n5. f(x) = x(x + 1)²/[(x - 1)(x + 1)] = x(x + 1)/(x - 1) para x ≠ -1\n6. Solo hay asíntota vertical en x = 1\n\nAsíntotas horizontales:\n1. grado(numerador) = 3 > grado(denominador) = 2\n2. No hay asíntotas horizontales\n\nAsíntotas oblicuas:\n1. División polinómica: (x³ + 2x² + x)/(x² - 1) = x + 2 + (3x + 2)/(x² - 1)\n2. m = 1, b = 2\n3. Asíntota oblicua: y = x + 2",
           hint: "Realiza división polinómica cuando el grado del numerador supera al del denominador en exactamente 1.",
           points: 30
       },
       {
           question: "Hallar los valores de las constantes a y b tal que la función $f(x) = \\begin{cases} ax + b & x < 0 \\\\ x^2 + a & x \\geq 0 \\end{cases}$ sea continua en todo $\\mathbb{R}$",
           answer: "Para que la función sea continua en todo ℝ:\n\n1. La única posible discontinuidad está en x = 0\n2. Para continuidad en x = 0:\n   - lím(x→0⁻) f(x) = lím(x→0⁻) (ax + b) = b\n   - lím(x→0⁺) f(x) = lím(x→0⁺) (x² + a) = a\n   - f(0) = 0² + a = a\n\n3. Para continuidad: lím(x→0⁻) f(x) = lím(x→0⁺) f(x) = f(0)\n4. Por tanto: b = a\n\n5. La función es continua para cualquier valor de a, con b = a\n6. Ejemplo: a = 2, b = 2 da f(x) = {2x + 2 si x < 0; x² + 2 si x ≥ 0}",
           hint: "Para continuidad en el punto de unión, los límites laterales deben ser iguales al valor de la función.",
           points: 25
       }
   ],
   "GRAFICAS_FUNCIONES": [
       {
           question: "Determine dominio, asíntotas, intervalos de crecimiento/disminución, concavidad y puntos críticos. Represente la gráfica: $f(x) = x^3 - 3x^2 + 2$",
           answer: "Análisis completo:\n\nDominio: ℝ (todos los reales)\n\nDerivada primera: f'(x) = 3x² - 6x = 3x(x - 2)\nPuntos críticos: x = 0, x = 2\n\nDerivada segunda: f''(x) = 6x - 6 = 6(x - 1)\nPunto de inflexión: x = 1\n\nIntervalos:\n- Creciente: (-∞, 0) ∪ (2, +∞)\n- Decreciente: (0, 2)\n- Cóncava hacia arriba: (1, +∞)\n- Cóncava hacia abajo: (-∞, 1)\n\nMáximo local: (0, 2)\nMínimo local: (2, -2)\nPunto de inflexión: (1, 0)\n\nNo tiene asíntotas (función polinómica)",
           hint: "Encuentra f'(x) para puntos críticos y monotonía, f''(x) para concavidad y puntos de inflexión.",
           points: 30
       },
       {
           question: "Determine dominio, asíntotas, intervalos de crecimiento/disminución, concavidad y puntos críticos. Represente la gráfica: $f(x) = x^4 - 4x^2$",
           answer: "Análisis completo:\n\nDominio: ℝ\n\nDerivada primera: f'(x) = 4x³ - 8x = 4x(x² - 2) = 4x(x - √2)(x + √2)\nPuntos críticos: x = -√2, x = 0, x = √2\n\nDerivada segunda: f''(x) = 12x² - 8\nPuntos de inflexión: 12x² - 8 = 0 → x = ±√(2/3)\n\nEvaluación en puntos críticos:\n- f(-√2) = 4 - 8 = -4 (mínimo local)\n- f(0) = 0 (máximo local)\n- f(√2) = 4 - 8 = -4 (mínimo local)\n\nIntervalos:\n- Creciente: (-√2, 0) ∪ (√2, +∞)\n- Decreciente: (-∞, -√2) ∪ (0, √2)\n- Cóncava hacia arriba: (-∞, -√(2/3)) ∪ (√(2/3), +∞)\n- Cóncava hacia abajo: (-√(2/3), √(2/3))\n\nNo tiene asíntotas",
           hint: "Esta función es par, por lo que su gráfica es simétrica respecto al eje y.",
           points: 35
       },
       {
           question: "Analice y grafique: $f(x) = \\frac{x^2}{x^2 - 4}$",
           answer: "Análisis completo:\n\nDominio: ℝ \\ {-2, 2}\n\nAsíntotas:\n- Verticales: x = -2, x = 2\n- Horizontal: y = 1 (lím(x→±∞) f(x) = 1)\n\nDerivada primera: f'(x) = [(x² - 4)(2x) - x²(2x)]/(x² - 4)²\n= [2x³ - 8x - 2x³]/(x² - 4)² = -8x/(x² - 4)²\n\nPunto crítico: f'(x) = 0 cuando x = 0\nf(0) = 0/(0 - 4) = 0\n\nIntervalos de monotonía:\n- Creciente: (-∞, -2) ∪ (-2, 0)\n- Decreciente: (0, 2) ∪ (2, +∞)\n\nMáximo local: (0, 0)\n\nDerivada segunda: f''(x) = 8(3x² + 4)/(x² - 4)³\n\nConcavidad:\n- Hacia arriba: (-2, 2)\n- Hacia abajo: (-∞, -2) ∪ (2, +∞)",
           hint: "Analiza el comportamiento cerca de las asíntotas verticales y la asíntota horizontal.",
           points: 35
       },
       {
           question: "Analice y grafique: $f(x) = xe^{-x}$",
           answer: "Análisis completo:\n\nDominio: ℝ\n\nAsíntotas:\n- Horizontal: y = 0 (lím(x→+∞) xe^(-x) = 0, lím(x→-∞) xe^(-x) = -∞)\n\nDerivada primera: f'(x) = e^(-x) + x(-e^(-x)) = e^(-x)(1 - x)\nPunto crítico: 1 - x = 0 → x = 1\nf(1) = 1·e^(-1) = 1/e\n\nIntervalos de monotonía:\n- Creciente: (-∞, 1)\n- Decreciente: (1, +∞)\n\nMáximo absoluto: (1, 1/e)\n\nDerivada segunda: f''(x) = -e^(-x)(1 - x) + e^(-x)(-1) = e^(-x)(x - 2)\nPunto de inflexión: x - 2 = 0 → x = 2\nf(2) = 2e^(-2) = 2/e²\n\nConcavidad:\n- Hacia abajo: (-∞, 2)\n- Hacia arriba: (2, +∞)\n\nPunto de inflexión: (2, 2/e²)",
           hint: "Esta función tiene comportamiento asintótico diferente en +∞ y -∞.",
           points: 30
       },
       {
           question: "Analice y grafique: $f(x) = \\ln(x^2 + 1)$",
           answer: "Análisis completo:\n\nDominio: ℝ (x² + 1 > 0 siempre)\n\nNo hay asíntotas verticales\nNo hay asíntotas horizontales (lím(x→±∞) ln(x² + 1) = +∞)\n\nDerivada primera: f'(x) = 2x/(x² + 1)\nPunto crítico: 2x = 0 → x = 0\nf(0) = ln(1) = 0\n\nIntervalos de monotonía:\n- Decreciente: (-∞, 0)\n- Creciente: (0, +∞)\n\nMínimo absoluto: (0, 0)\n\nDerivada segunda: f''(x) = [2(x² + 1) - 2x(2x)]/(x² + 1)²\n= [2 - 2x²]/(x² + 1)² = 2(1 - x²)/(x² + 1)²\n\nPuntos de inflexión: 1 - x² = 0 → x = ±1\nf(1) = f(-1) = ln(2)\n\nConcavidad:\n- Hacia arriba: (-1, 1)\n- Hacia abajo: (-∞, -1) ∪ (1, +∞)\n\nPuntos de inflexión: (-1, ln(2)), (1, ln(2))",
           hint: "Esta función es par y tiene un mínimo global en el origen.",
           points: 30
       }
   ],
   "ECUACIONES_RECTA": [
       {
           question: "Determina la ecuación de la recta que pasa por los puntos A(2,3) y B(4,7)",
           answer: "Para encontrar la ecuación de la recta:\n1. Calculamos la pendiente: m = (y₂ - y₁)/(x₂ - x₁) = (7 - 3)/(4 - 2) = 4/2 = 2\n2. Usamos la forma punto-pendiente con A(2,3):\n   y - 3 = 2(x - 2)\n3. Simplificamos: y - 3 = 2x - 4\n4. Forma explícita: y = 2x - 1\n5. Forma general: 2x - y - 1 = 0\n\nVerificación:\n- Para A(2,3): y = 2(2) - 1 = 3 ✓\n- Para B(4,7): y = 2(4) - 1 = 7 ✓",
           hint: "Usa la fórmula de la pendiente y luego la forma punto-pendiente.",
           points: 20
       },
       {
           question: "Hallar la ecuación de la recta que pasa por el punto P(-1,4) y tiene pendiente m = -1/2",
           answer: "Para encontrar la ecuación:\n1. Usamos la forma punto-pendiente:\n   y - y₁ = m(x - x₁)\n2. Sustituyendo P(-1,4) y m = -1/2:\n   y - 4 = -1/2(x - (-1))\n3. y - 4 = -1/2(x + 1)\n4. y - 4 = -1/2 x - 1/2\n5. y = -1/2 x - 1/2 + 4\n6. y = -1/2 x + 7/2\n\nForma general: x + 2y - 7 = 0",
           hint: "Aplica directamente la forma punto-pendiente y simplifica.",
           points: 15
       },
       {
           question: "Encuentra la ecuación de la recta que pasa por el punto P(2,1) y es perpendicular a la recta 2x - y = 4",
           answer: "Para encontrar la ecuación:\n1. Reescribimos 2x - y = 4 en forma explícita: y = 2x - 4\n2. La pendiente de esta recta es m₁ = 2\n3. Para rectas perpendiculares: m₁ · m₂ = -1\n4. Por tanto: 2 · m₂ = -1 → m₂ = -1/2\n5. Usamos la forma punto-pendiente con P(2,1):\n   y - 1 = -1/2(x - 2)\n6. y - 1 = -1/2 x + 1\n7. y = -1/2 x + 2\n\nForma general: x + 2y - 4 = 0",
           hint: "Las pendientes de rectas perpendiculares son recíprocas y opuestas: m₁ · m₂ = -1.",
           points: 20
       },
       {
           question: "Determina la ecuación de la recta que pasa por los puntos A(1,2) y B(-3,-1)",
           answer: "Para encontrar la ecuación:\n1. Calculamos la pendiente:\n   m = (-1 - 2)/(-3 - 1) = -3/(-4) = 3/4\n2. Usamos la forma punto-pendiente con A(1,2):\n   y - 2 = 3/4(x - 1)\n3. y - 2 = 3/4 x - 3/4\n4. y = 3/4 x - 3/4 + 2\n5. y = 3/4 x + 5/4\n\nForma general: 3x - 4y + 5 = 0",
           hint: "Calcula primero la pendiente entre los dos puntos.",
           points: 20
       },
       {
           question: "Determina la ecuación de la recta que pasa por el punto P(0,4) y es paralela a la recta 3x - y = 7",
           answer: "Para encontrar la ecuación:\n1. Reescribimos 3x - y = 7 en forma explícita: y = 3x - 7\n2. La pendiente de esta recta es m = 3\n3. Las rectas paralelas tienen la misma pendiente\n4. Nuestra recta también tiene pendiente m = 3\n5. Usamos la forma punto-pendiente con P(0,4):\n   y - 4 = 3(x - 0)\n6. y - 4 = 3x\n7. y = 3x + 4\n\nForma general: 3x - y + 4 = 0",
           hint: "Las rectas paralelas tienen la misma pendiente.",
           points: 20
       },
       {
           question: "Verifica si las rectas 2x + y = 3 y 4x + 2y = 6 son paralelas",
           answer: "Para verificar si son paralelas:\n1. Escribimos ambas en forma explícita:\n   - Primera: 2x + y = 3 → y = -2x + 3\n   - Segunda: 4x + 2y = 6 → 2y = -4x + 6 → y = -2x + 3\n\n2. Comparamos:\n   - Pendiente de la primera: m₁ = -2\n   - Pendiente de la segunda: m₂ = -2\n   - Ordenada al origen de la primera: b₁ = 3\n   - Ordenada al origen de la segunda: b₂ = 3\n\n3. Como m₁ = m₂ y b₁ = b₂, las rectas son idénticas (coincidentes)\n\nConclusión: No son paralelas, son la misma recta",
           hint: "Dos rectas son paralelas si tienen la misma pendiente pero diferente ordenada al origen.",
           points: 20
       },
       {
           question: "Verifica si las rectas 3x + 2y = 5 y -2x + 3y = 7 son perpendiculares",
           answer: "Para verificar si son perpendiculares:\n1. Escribimos ambas en forma explícita:\n   - Primera: 3x + 2y = 5 → 2y = -3x + 5 → y = -3/2 x + 5/2\n   - Segunda: -2x + 3y = 7 → 3y = 2x + 7 → y = 2/3 x + 7/3\n\n2. Las pendientes son:\n   - m₁ = -3/2\n   - m₂ = 2/3\n\n3. Verificamos si m₁ · m₂ = -1:\n   (-3/2) · (2/3) = -6/6 = -1 ✓\n\nConclusión: Sí son perpendiculares",
           hint: "Dos rectas son perpendiculares si el producto de sus pendientes es -1.",
           points: 25
       }
   ]
};

// Configuración del sistema de puntuación
const pointsSystem = {
   easy: { min: 15, max: 20 },
   medium: { min: 20, max: 30 },
   hard: { min: 30, max: 45 }
};

// Sistema de logros
const achievements = {
   "Primer Paso": { description: "Resuelve tu primer ejercicio", points: 10, unlocked: false },
   "Matemático Novato": { description: "Acumula 100 puntos", points: 50, unlocked: false },
   "Especialista": { description: "Completa 10 ejercicios de una categoría", points: 100, unlocked: false },
   "Maestro": { description: "Acumula 500 puntos", points: 200, unlocked: false },
   "Perfeccionista": { description: "Responde 5 ejercicios consecutivos correctamente", points: 150, unlocked: false },
   "Explorador": { description: "Prueba todas las categorías", points: 75, unlocked: false }
};

// Variables globales del juego
let currentExercise = null;
let userScore = 0;
let exerciseHistory = [];
let currentStreak = 0;
let categoriesUsed = new Set();
let userStats = {
   totalExercises: 0,
   correctAnswers: 0,
   categoryStats: {}
};

// Función para inicializar la aplicación
function initializeApp() {
   loadUserData();
   updateUI();
   setupEventListeners();
   renderCategorySelector();
   
   // Configurar MathJax
   if (window.MathJax) {
       MathJax.typesetPromise();
   }
}

// Función para cargar datos del usuario (simulado con variables)
function loadUserData() {
   // En una implementación real, esto cargaría desde localStorage o una base de datos
   // Por ahora usamos las variables globales inicializadas
}

// Función para configurar event listeners
function setupEventListeners() {
   const generateBtn = document.getElementById('generateExercise');
   const showAnswerBtn = document.getElementById('showAnswer');
   const nextBtn = document.getElementById('nextExercise');
   // Continuación del código...

// Función para configurar event listeners
function setupEventListeners() {
  const generateBtn = document.getElementById('generateExercise');
  const showAnswerBtn = document.getElementById('showAnswer');
  const nextBtn = document.getElementById('nextExercise');
  const submitAnswerBtn = document.getElementById('submitAnswer');
  
  if (generateBtn) {
      generateBtn.addEventListener('click', generateExercise);
  }
  
  if (showAnswerBtn) {
      showAnswerBtn.addEventListener('click', showAnswer);
  }
  
  if (nextBtn) {
      nextBtn.addEventListener('click', nextExercise);
  }
  
  if (submitAnswerBtn) {
      submitAnswerBtn.addEventListener('click', submitUserAnswer);
  }
}

// Función para renderizar el selector de categorías
function renderCategorySelector() {
  const categorySelect = document.getElementById('categorySelector');
  if (!categorySelect) return;
  
  categorySelect.innerHTML = '<option value="">Selecciona una categoría</option>';
  
  Object.keys(exerciseDatabase).forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = formatCategoryName(category);
      categorySelect.appendChild(option);
  });
}

// Función para formatear nombres de categorías
function formatCategoryName(category) {
  const categoryNames = {
      'LIMITES': 'Límites',
      'DERIVADAS': 'Derivadas',
      'INTEGRALES': 'Integrales',
      'RAZONES_CAMBIO': 'Razones de Cambio',
      'ASINTOTAS': 'Asíntotas',
      'GRAFICAS_FUNCIONES': 'Gráficas de Funciones',
      'ECUACIONES_RECTA': 'Ecuaciones de la Recta'
  };
  return categoryNames[category] || category;
}

// Función para generar un ejercicio
function generateExercise() {
  const categorySelect = document.getElementById('categorySelector');
  const selectedCategory = categorySelect.value;
  
  if (!selectedCategory) {
      alert('Por favor selecciona una categoría');
      return;
  }
  
  const exercises = exerciseDatabase[selectedCategory];
  if (!exercises || exercises.length === 0) {
      alert('No hay ejercicios disponibles para esta categoría');
      return;
  }
  
  // Seleccionar un ejercicio aleatorio
  const randomIndex = Math.floor(Math.random() * exercises.length);
  currentExercise = exercises[randomIndex];
  currentExercise.category = selectedCategory;
  
  // Marcar categoría como usada
  categoriesUsed.add(selectedCategory);
  
  displayExercise();
  updateUI();
}

// Función para mostrar el ejercicio
function displayExercise() {
  const exerciseContainer = document.getElementById('exerciseContainer');
  const questionDiv = document.getElementById('currentQuestion');
  const hintDiv = document.getElementById('exerciseHint');
  const pointsDiv = document.getElementById('exercisePoints');
  
  if (!currentExercise) return;
  
  // Mostrar el ejercicio
  exerciseContainer.style.display = 'block';
  questionDiv.innerHTML = `<strong>Pregunta:</strong> ${currentExercise.question}`;
  hintDiv.innerHTML = `<strong>Pista:</strong> ${currentExercise.hint}`;
  pointsDiv.innerHTML = `<strong>Puntos:</strong> ${currentExercise.points}`;
  
  // Resetear botones y respuesta
  document.getElementById('showAnswer').style.display = 'inline-block';
  document.getElementById('nextExercise').style.display = 'none';
  document.getElementById('answerContainer').style.display = 'none';
  document.getElementById('userAnswerContainer').style.display = 'block';
  document.getElementById('userAnswer').value = '';
  
  // Renderizar matemáticas con MathJax
  if (window.MathJax) {
      MathJax.typesetPromise([exerciseContainer]);
  }
}

// Función para mostrar la respuesta
function showAnswer() {
  if (!currentExercise) return;
  
  const answerDiv = document.getElementById('currentAnswer');
  answerDiv.innerHTML = `<strong>Respuesta:</strong><br>${currentExercise.answer.replace(/\n/g, '<br>')}`;
  
  document.getElementById('answerContainer').style.display = 'block';
  document.getElementById('showAnswer').style.display = 'none';
  document.getElementById('nextExercise').style.display = 'inline-block';
  
  // Renderizar matemáticas con MathJax
  if (window.MathJax) {
      MathJax.typesetPromise([answerDiv]);
  }
}

// Función para enviar respuesta del usuario
function submitUserAnswer() {
  const userAnswer = document.getElementById('userAnswer').value.trim();
  
  if (!userAnswer) {
      alert('Por favor ingresa tu respuesta');
      return;
  }
  
  if (!currentExercise) return;
  
  // Simular evaluación de respuesta (en una implementación real sería más sofisticada)
  const isCorrect = evaluateAnswer(userAnswer, currentExercise.answer);
  
  // Actualizar estadísticas
  userStats.totalExercises++;
  if (isCorrect) {
      userStats.correctAnswers++;
      userScore += currentExercise.points;
      currentStreak++;
  } else {
      currentStreak = 0;
  }
  
  // Actualizar estadísticas por categoría
  if (!userStats.categoryStats[currentExercise.category]) {
      userStats.categoryStats[currentExercise.category] = { total: 0, correct: 0 };
  }
  userStats.categoryStats[currentExercise.category].total++;
  if (isCorrect) {
      userStats.categoryStats[currentExercise.category].correct++;
  }
  
  // Agregar al historial
  exerciseHistory.push({
      question: currentExercise.question,
      userAnswer: userAnswer,
      correctAnswer: currentExercise.answer,
      isCorrect: isCorrect,
      points: isCorrect ? currentExercise.points : 0,
      category: currentExercise.category,
      timestamp: new Date()
  });
  
  // Mostrar resultado
  showAnswerResult(isCorrect);
  
  // Verificar logros
  checkAchievements();
  
  // Actualizar UI
  updateUI();
}

// Función para evaluar respuesta (simplificada)
function evaluateAnswer(userAnswer, correctAnswer) {
  // Esta es una evaluación muy básica
  // En una implementación real se necesitaría un sistema más sofisticado
  const cleanUser = userAnswer.toLowerCase().replace(/\s+/g, '');
  const cleanCorrect = correctAnswer.toLowerCase().replace(/\s+/g, '');
  
  // Buscar palabras clave o patrones
  if (cleanUser.includes('no existe') && cleanCorrect.includes('no existe')) return true;
  if (cleanUser.includes('infinito') && cleanCorrect.includes('infinito')) return true;
  if (cleanUser.includes('discontinua') && cleanCorrect.includes('discontinua')) return true;
  
  // Verificar números simples
  const userNumbers = cleanUser.match(/\d+/g);
  const correctNumbers = cleanCorrect.match(/\d+/g);
  
  if (userNumbers && correctNumbers) {
      return userNumbers.some(num => correctNumbers.includes(num));
  }
  
  return cleanUser === cleanCorrect;
}

// Función para mostrar resultado de la respuesta
function showAnswerResult(isCorrect) {
  const resultDiv = document.getElementById('answerResult');
  
  if (isCorrect) {
      resultDiv.innerHTML = `
          <div class="alert alert-success">
              <strong>¡Correcto!</strong> Ganaste ${currentExercise.points} puntos.
              <br>Racha actual: ${currentStreak} ejercicios.
          </div>
      `;
  } else {
      resultDiv.innerHTML = `
          <div class="alert alert-danger">
              <strong>Incorrecto.</strong> La respuesta correcta es:
              <br><br>${currentExercise.answer.replace(/\n/g, '<br>')}
          </div>
      `;
  }
  
  resultDiv.style.display = 'block';
  document.getElementById('userAnswerContainer').style.display = 'none';
  document.getElementById('nextExercise').style.display = 'inline-block';
  
  // Renderizar matemáticas con MathJax
  if (window.MathJax) {
      MathJax.typesetPromise([resultDiv]);
  }
}

// Función para pasar al siguiente ejercicio
function nextExercise() {
  document.getElementById('exerciseContainer').style.display = 'none';
  document.getElementById('answerResult').style.display = 'none';
  currentExercise = null;
  
  // Resetear selector
  document.getElementById('categorySelector').value = '';
}

// Función para verificar logros
function checkAchievements() {
  // Primer Paso
  if (!achievements["Primer Paso"].unlocked && userStats.totalExercises >= 1) {
      unlockAchievement("Primer Paso");
  }
  
  // Matemático Novato
  if (!achievements["Matemático Novato"].unlocked && userScore >= 100) {
      unlockAchievement("Matemático Novato");
  }
  
  // Maestro
  if (!achievements["Maestro"].unlocked && userScore >= 500) {
      unlockAchievement("Maestro");
  }
  
  // Perfeccionista
  if (!achievements["Perfeccionista"].unlocked && currentStreak >= 5) {
      unlockAchievement("Perfeccionista");
  }
  
  // Explorador
  if (!achievements["Explorador"].unlocked && categoriesUsed.size >= Object.keys(exerciseDatabase).length) {
      unlockAchievement("Explorador");
  }
  
  // Especialista
  Object.keys(userStats.categoryStats).forEach(category => {
      if (!achievements["Especialista"].unlocked && 
          userStats.categoryStats[category].total >= 10) {
          unlockAchievement("Especialista");
      }
  });
}

// Función para desbloquear logro
function unlockAchievement(achievementName) {
  if (achievements[achievementName] && !achievements[achievementName].unlocked) {
      achievements[achievementName].unlocked = true;
      userScore += achievements[achievementName].points;
      
      // Mostrar notificación
      showAchievementNotification(achievementName);
  }
}

// Función para mostrar notificación de logro
function showAchievementNotification(achievementName) {
  const notification = document.createElement('div');
  notification.className = 'achievement-notification';
  notification.innerHTML = `
      <div class="alert alert-info">
          <strong>¡Logro Desbloqueado!</strong><br>
          ${achievementName}: ${achievements[achievementName].description}<br>
          +${achievements[achievementName].points} puntos bonus
      </div>
  `;
  
  document.body.appendChild(notification);
  
  // Remover después de 5 segundos
  setTimeout(() => {
      if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
      }
  }, 5000);
}

// Función para actualizar la interfaz de usuario
function updateUI() {
  // Actualizar puntuación
  const scoreElement = document.getElementById('currentScore');
  if (scoreElement) {
      scoreElement.textContent = userScore;
  }
  
  // Actualizar racha
  const streakElement = document.getElementById('currentStreak');
  if (streakElement) {
      streakElement.textContent = currentStreak;
  }
  
  // Actualizar estadísticas
  updateStatsDisplay();
  
  // Actualizar logros
  updateAchievementsDisplay();
}

// Función para actualizar estadísticas
function updateStatsDisplay() {
  const statsContainer = document.getElementById('statsContainer');
  if (!statsContainer) return;
  
  const accuracy = userStats.totalExercises > 0 ? 
      ((userStats.correctAnswers / userStats.totalExercises) * 100).toFixed(1) : 0;
  
  statsContainer.innerHTML = `
      <div class="stats-grid">
          <div class="stat-item">
              <h4>Ejercicios Totales</h4>
              <span class="stat-value">${userStats.totalExercises}</span>
          </div>
          <div class="stat-item">
              <h4>Respuestas Correctas</h4>
              <span class="stat-value">${userStats.correctAnswers}</span>
          </div>
          <div class="stat-item">
              <h4>Precisión</h4>
              <span class="stat-value">${accuracy}%</span>
          </div>
          <div class="stat-item">
              <h4>Mejor Racha</h4>
              <span class="stat-value">${Math.max(currentStreak, 0)}</span>
          </div>
      </div>
      
      <h4>Estadísticas por Categoría:</h4>
      <div class="category-stats">
          ${Object.keys(userStats.categoryStats).map(category => {
              const stats = userStats.categoryStats[category];
              const categoryAccuracy = ((stats.correct / stats.total) * 100).toFixed(1);
              return `
                  <div class="category-stat">
                      <strong>${formatCategoryName(category)}:</strong>
                      ${stats.correct}/${stats.total} (${categoryAccuracy}%)
                  </div>
              `;
          }).join('')}
      </div>
  `;
}

// Función para actualizar logros
function updateAchievementsDisplay() {
  const achievementsContainer = document.getElementById('achievementsContainer');
  if (!achievementsContainer) return;
  
  achievementsContainer.innerHTML = `
      <div class="achievements-grid">
          ${Object.keys(achievements).map(achievementName => {
              const achievement = achievements[achievementName];
              const unlockedClass = achievement.unlocked ? 'unlocked' : 'locked';
              return `
                  <div class="achievement-item ${unlockedClass}">
                      <h5>${achievementName}</h5>
                      <p>${achievement.description}</p>
                      <span class="achievement-points">+${achievement.points} pts</span>
                      ${achievement.unlocked ? '<span class="achievement-status">✓ Desbloqueado</span>' : '<span class="achievement-status">🔒 Bloqueado</span>'}
                  </div>
              `;
          }).join('')}
      </div>
  `;
}

// Función para mostrar/ocultar secciones
function showSection(sectionId) {
  const sections = ['exercise-section', 'stats-section', 'achievements-section', 'history-section'];
  
  sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
          element.style.display = section === sectionId ? 'block' : 'none';
      }
  });
  
  // Actualizar botones de navegación
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(btn => {
      btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
  if (activeBtn) {
      activeBtn.classList.add('active');
  }
  
  // Actualizar contenido específico de la sección
  if (sectionId === 'history-section') {
      updateHistoryDisplay();
  }
}

// Función para actualizar historial
function updateHistoryDisplay() {
  const historyContainer = document.getElementById('historyContainer');
  if (!historyContainer) return;
  
  if (exerciseHistory.length === 0) {
      historyContainer.innerHTML = '<p>No hay ejercicios resueltos aún.</p>';
      return;
  }
  
  historyContainer.innerHTML = `
      <div class="history-list">
          ${exerciseHistory.slice(-10).reverse().map((exercise, index) => `
              <div class="history-item ${exercise.isCorrect ? 'correct' : 'incorrect'}">
                  <div class="history-header">
                      <span class="history-category">${formatCategoryName(exercise.category)}</span>
                      <span class="history-points">${exercise.points} pts</span>
                      <span class="history-status">${exercise.isCorrect ? '✓' : '✗'}</span>
                  </div>
                  <div class="history-question">
                      <strong>Pregunta:</strong> ${exercise.question}
                  </div>
                  <div class="history-answer">
                      <strong>Tu respuesta:</strong> ${exercise.userAnswer}
                  </div>
                  ${!exercise.isCorrect ? `
                      <div class="history-correct">
                          <strong>Respuesta correcta:</strong> ${exercise.correctAnswer}
                      </div>
                  ` : ''}
                  <div class="history-time">
                      ${exercise.timestamp.toLocaleString()}
                  </div>
              </div>
          `).join('')}
      </div>
  `;
  
  // Renderizar matemáticas con MathJax
  if (window.MathJax) {
      MathJax.typesetPromise([historyContainer]);
  }
}

// Función para exportar progreso
function exportProgress() {
  const progressData = {
      userScore: userScore,
      userStats: userStats,
      achievements: achievements,
      exerciseHistory: exerciseHistory,
      currentStreak: currentStreak,
      categoriesUsed: Array.from(categoriesUsed),
      exportDate: new Date().toISOString()
  };
  
  const dataStr = JSON.stringify(progressData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(dataBlob);
  link.download = `matematicas_progreso_${new Date().toISOString().split('T')[0]}.json`;
  link.click();
}

// Función para importar progreso
function importProgress(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
      try {
          const progressData = JSON.parse(e.target.result);
          
          // Validar y cargar datos
          if (progressData.userScore !== undefined) userScore = progressData.userScore;
          if (progressData.userStats) userStats = progressData.userStats;
          if (progressData.achievements) {
              Object.keys(progressData.achievements).forEach(key => {
                  if (achievements[key]) {
                      achievements[key].unlocked = progressData.achievements[key].unlocked;
                  }
              });
          }
          if (progressData.exerciseHistory) exerciseHistory = progressData.exerciseHistory;
          if (progressData.currentStreak !== undefined) currentStreak = progressData.currentStreak;
          if (progressData.categoriesUsed) categoriesUsed = new Set(progressData.categoriesUsed);
          
          updateUI();
          alert('Progreso importado exitosamente');
          
      } catch (error) {
          alert('Error al importar el archivo: ' + error.message);
      }
  };
  
  reader.readAsText(file);
}

// Función para resetear progreso
function resetProgress() {
  if (confirm('¿Estás seguro de que quieres resetear todo tu progreso? Esta acción no se puede deshacer.')) {
      userScore = 0;
      exerciseHistory = [];
      currentStreak = 0;
      categoriesUsed = new Set();
      userStats = {
          totalExercises: 0,
          correctAnswers: 0,
          categoryStats: {}
      };
      
      Object.keys(achievements).forEach(key => {
          achievements[key].unlocked = false;
      });
      
      currentExercise = null;
      
      updateUI();
      showSection('exercise-section');
      alert('Progreso reseteado exitosamente');
  }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', initializeApp);

// Configuración adicional para MathJax
window.MathJax = {
  tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  svg: {
      fontCache: 'global'
  }
};

// Estilos CSS adicionales
const additionalStyles = `
  .achievement-notification {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      max-width: 300px;
      animation: slideIn 0.3s ease-out;
  }
  
  @keyframes slideIn {
      from {
          transform: translateX(100%);
          opacity: 0;
      }
      to {
          transform: translateX(0);
          opacity: 1;
      }
  }
  
  .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin-bottom: 20px;
  }
  
  .stat-item {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid #dee2e6;
  }
  
  .stat-value {
      font-size: 24px;
      font-weight: bold;
      color: #0066cc;
  }
  
  .achievements-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
  }
  
  .achievement-item {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #dee2e6;
      transition: transform 0.2s;
  }
  
  .achievement-item.unlocked {
      background: #d4edda;
      border-color: #c3e6cb;
  }
  
  .achievement-item.locked {
      opacity: 0.6;
  }
  
  .achievement-item:hover {
      transform: translateY(-2px);
  }
  
  .achievement-points {
      color: #0066cc;
      font-weight: bold;
  }
  
  .achievement-status {
      display: block;
      margin-top: 10px;
      font-size: 14px;
  }
  
  .history-list {
      max-height: 600px;
      overflow-y: auto;
  }
  
  .history-item {
      background: #f8f9fa;
      margin-bottom: 15px;
      padding: 15px;
      border-radius: 8px;
      border-left: 4px solid #dee2e6;
  }
  
  .history-item.correct {
      border-left-color: #28a745;
  }
  
  .history-item.incorrect {
      border-left-color: #dc3545;
  }
  
  .history-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
  }
  
  .history-category {
      background: #0066cc;
      color: white;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 12px;
  }
  
  .history-time {
      font-size: 12px;
      color: #6c757d;
      margin-top: 10px;
  }
  
  .category-stats {
      background: #f8f9fa;
      padding: 15px;
      border-radius: 8px;
      margin-top: 15px;
  }
  
  .category-stat {
      margin-bottom: 8px;
  }
  
  @media (max-width: 768px) {
      .stats-grid {
          grid-template-columns: 1fr;
      }
      
      .achievements-grid {
          grid-template-columns: 1fr;
      }
      
      .history-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
      }
  }
`;

// Agregar estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
