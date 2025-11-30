const questionBank = [
{
    id: 1,
    question: `
    <p><strong>Sea f una función definida en \\( \\mathbb{R} \\) que cumple simultáneamente:</strong></p>
    <ul>
        <li>\\( f'(-1) = f'(1) = 0 \\)</li>
        <li>\\( f'(x) < 0 \\) si \\( |x| < 1 \\)</li>
        <li>\\( f'(x) > 0 \\) si \\( |x| > 1 \\)</li>
        <li>\\( f(-1) = 4 \\) y \\( f(1) = 0 \\)</li>
    </ul>
    <p><strong>Seleccione una o más opciones:</strong></p>
    `,
    options: [
    "a. \\( \\lim_{x \\to 1} f(x) = 0 \\).",
    "b. \\(x = 1\\) es un mínimo local.",
    "c. La función crece en \\(( -\\infty, -1 ) \\cup ( 1, \\infty )\\).",
    "d. No puede asegurarse que \\(x = 1\\) sea un máximo local.",
    "e. \\( \\lim_{x \\to -1^-} \\frac{f(x) - f(-1)}{x - (-1)} = \\lim_{x \\to -1^+} \\frac{f(x) - f(-1)}{x - (-1)} \\)."
    ],
    correctIndex: [1, 2, 4],
    multiple: true
},

{
    id: 2,
    question: `
    <p><strong>Considere la parábola \\( y^2 = 4px \\), donde \\( p \\) es un número real distinto de cero.</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
    `,
    options: [
    "a. Es lo mismo tener derivada en un punto con recta tangente en él.",
    "b. La parábola no tiene recta tangente en el origen de coordenadas.",
    "c. La recta tangente a la parábola en el punto \\( (x_0, y_0) \\) interseca al eje x en el punto \\( (-x_0, 0) \\).",
    "d. La recta tangente a la parábola en el punto \\( (x_0, y_0) \\) se puede escribir como \\( y y_0 = 2p(x + x_0) \\).",
    "e. Los puntos sobre la parábola donde la recta tangente es perpendicular a la recta \\( y = \\frac{1}{2p}x \\) se encuentran sobre la recta horizontal \\( y = -1 \\)."
    ],
    correctIndex: [2, 3],
    multiple: true
},

{
  id: 3,
  question: `
    <p><strong>Se buscan determinar las dimensiones de un cilindro circular recto, de radio \\( r \\) y altura \\( h \\), de volumen máximo que puede inscribirse en un cono circular recto de altura \\( 5 \\text{ cm} \\) y radio de base \\( R > 0 \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. El volumen máximo obtenido es mayor que \\( \\frac{27}{2} \\pi R^2 \\).",
    "b. Los valores extremos que se obtienen de la función volumen del cilindro dependen de \\( R \\) y por lo tanto no es posible verificar que sea un volumen máximo.",
    "c. Se puede verificar que el valor extremo obtenido para la función volumen es un máximo utilizando el criterio de la segunda derivada.",
    "d. El cilindro inscrito que tiene mayor volumen se da cuando su radio \\( (r) \\) es dos tercios del radio de la base del cono \\( (R) \\) y su altura \\( (h) \\) es un tercio de la altura del cono.",
    "e. Las dimensiones del cilindro que maximizan el volumen son \\( r = \\frac{2}{3} R \\) y \\( h = \\frac{5}{3} \\text{ cm} \\).",
    "f. El volumen máximo obtenido es menor que \\( \\frac{22}{27} \\pi R^2 \\)."
  ],
  correctIndex: [2, 4, 5],
  multiple: true
},

{
  id: 4,
  question: `
    <p><strong>Dada una función \\( f \\) continua en \\( \\mathbb{R} \\), en base a la siguiente gráfica de \\( f' \\) (la derivada de \\( f \\)):</strong></p>
    <img src="./img/rJayiyC.png" alt="">
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. \\( f \\) crece en \\( (-2, -1) \\cup (\\frac{1}{8}, \\frac{5}{2}) \\).",
    "b. \\( x = -1 \\) es un punto crítico de \\( f' \\).",
    "c. \\( f \\) tiene un punto de inflexión en \\( x = -1 \\).",
    "d. \\( f \\) tiene dos puntos críticos, a saber, en \\( x = \\frac{1}{8} \\) y \\( x = \\frac{5}{3} \\).",
    "e. \\( f' \\) no es derivable en \\( x = -1 \\) debido a que presenta un punto anguloso allí.",
    "f. \\( f' \\) tiene una recta tangente horizontal en \\( x = \\frac{1}{3} \\)."
  ],
  correctIndex: [0, 4, 5],
  multiple: true
},

{
  id: 5,
  question: `
    <p><strong>Sea la sucesión \\( c_n = \\left( 1 + \\frac{a}{b-n} \\right)^{pn} \\), donde \\( a, b, p \\) son constantes reales positivas.</strong></p>
    <p><strong>Seleccione una o más alternativas correctas:</strong></p>
  `,
  options: [
    "a. La sucesión \\( c_n \\) no es acotada.",
    "b. En caso de convergencia de la sucesión \\( c_n \\), la derivación logarítmica resulta una herramienta útil para el cálculo del límite.",
    "c. La sucesión \\( c_n \\) es convergente a \\( L = e^{\\frac{ap}{b}} \\).",
    "d. La sucesión \\( c_n \\) es convergente a \\( L = e^{-ap} \\).",
    "e. La sucesión \\( c_n \\) es divergente.",
    "f. En caso de convergencia de la sucesión \\( c_n \\), los logaritmos resultan una herramienta útil para el cálculo del límite."
  ],
  correctIndex: [3, 5],
  multiple: true
},

{
  id: 6,
  question: `
    <p><strong>Sean \\( a \\) y \\( b \\) dos constantes positivas. Seleccione una o más alternativas correcta(s):</strong></p>
  `,
  options: [
    "a. La igualdad \\( \\frac{b}{(a-bx)^2} = \\sum_{k=0}^{\\infty} \\frac{b^{k+1}}{a^{k+2}} (k+1) x^k \\) se cumple \\( \\forall x: |bx| < a \\).",
    "b. La serie \\( \\sum_{n=1}^{\\infty} \\frac{b^n}{a^n} x^{n-1} \\) representa a la función \\( f(x) = \\frac{b}{(a-bx)^2} \\) en el origen.",
    "c. La igualdad \\( \\frac{4b}{a^2} = \\sum_{n=1}^{\\infty} \\frac{b n}{a^2 2^{n-1}} \\) es cierta a partir de la convergencia de la serie de \\( f(x) = \\frac{b}{(a-bx)^2} \\) en el punto \\( x = \\frac{a}{2b} \\).",
    "d. El radio de convergencia de la serie representativa de \\( f(x) = \\frac{b}{(a-bx)^2} \\) es \\( \\frac{a}{b} \\)."
  ],
  correctIndex: [0, 2, 3],
  multiple: true
},

{
  id: 7,
  question: `
    <p><strong>Sea la función \\( f(x) = \\frac{1}{\\sqrt{x} (x+1)} \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. \\( \\int_{0}^{1} f(x) dx = \\pi \\).",
    "b. La integral \\( \\int_{1}^{\\infty} f(x) dx \\) converge y su valor es \\( \\frac{\\pi}{2} \\).",
    "c. La región limitada por la gráfica de \\( f(x) \\) y el intervalo \\( [a, \\infty) \\), \\( a > 0 \\), es no acotada, por lo que su área resulta infinita.",
    "d. La sustitución \\( t = \\sqrt{x} \\) es útil para el cálculo de la integral indefinida \\( \\int f(x) dx \\).",
    "e. La función \\( G(x) = 2 \\arctan \\sqrt{x} \\) es una primitiva de la función \\( f(x) \\).",
    "f. \\( \\int_{0}^{\\infty} f(x) dx \\) diverge."
  ],
  correctIndex: [1, 3, 4],
  multiple: true
},

{
  id: 8,
  question: `
    <p><strong>Tildar la(s) alternativa(s) correcta(s):</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Si \\( f \\) es una función decreciente en el intervalo \\( [a, b] \\), entonces \\( f'(x) < 0 \\) \\( \\forall x \\in (a, b) \\).",
    "b. Sea la función \\( f(x) = x^3 + bx^2 + cx + d \\). Si se cumple que \\( b^2 - 4c < 0 \\), la función resulta siempre creciente.",
    "c. Si \\( f \\) es una función con derivada no nula en todos los reales, entonces \\( f \\) no tiene extremos locales.",
    "d. Sea \\( f \\) una función definida en todos los reales. Sea \\( c \\in \\mathbb{R} \\). Si \\( f \\) crece en \\( (-\\infty, c] \\) y decrece en \\( [c, \\infty) \\), entonces el punto \\( x = c \\) es un máximo local.",
    "e. Sea \\( f \\) una función definida en \\( \\mathbb{R} \\). Sea \\( x = c \\) un punto tal que \\( f'(x) > 0 \\) \\( \\forall x \\neq c \\). Entonces \\( x = c \\) no puede ser un máximo local."
  ],
  correctIndex: [2, 3, 4],
  multiple: true
},

{
  id: 9,
  question: `
    <p><strong>Determinar el punto, sobre la gráfica de la función \\( y = a \\sqrt{x} \\) (\\( 1 \\leq a < 2 \\)) más cercano al punto \\( (2, 0) \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. El valor \\( x \\) correspondiente al punto \\( (x, y) \\) buscado se puede obtener al resolver la ecuación \\( x^2 + (a^2 - 4)x + 4 = 0 \\).",
    "b. La distancia mínima coincide con el valor mínimo que alcanza la función \\( d(x) = \\sqrt{(x - 2)^2 + a^2 x} \\).",
    "c. Si \\( a = 1 \\) el punto buscado es \\( (\\frac{3}{2}, \\frac{\\sqrt{2}}{2}) \\).",
    "d. El valor \\( x \\) correspondiente al punto \\( (x, y) \\) buscado es \\( x = \\frac{4 - a^2}{2} \\).",
    "e. No es posible plantear este problema de optimización puesto que se desconoce el valor de \\( a \\)."
  ],
  // CORREGIDO: Se eliminaron 0 y 2 por ser incorrectos matemáticamente
  correctIndex: [1, 3],
  multiple: true
},

{
  id: 10,
  question: `
    <p><strong>Sea la sucesión cuyo término genérico es: \\( \\{d_n\\} = \\left\\{ \\frac{1}{n^2} + \\frac{1}{(n+1)^2} + \\frac{1}{(n+2)^2} + \\cdots + \\frac{1}{(2n)^2} \\right\\} \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La sucesión tiene ínfimo.",
    "b. El uso de L'Hospital resulta útil para decidir sobre el carácter (convergente o no) de la sucesión.",
    "c. \\( \\{d_n\\} \\) es monótona no creciente.",
    "d. La sucesión tiene máximo.",
    "e. La sucesión es convergente.",
    "f. La sucesión es monótona decreciente."
  ],
  correctIndex: [0, 4, 5],
  multiple: true
},

{
  id: 11,
  question: `
    <p><strong>Sea la función \\( h(x) = \\frac{f(x) - g(x)}{x^3} \\), donde: \\( f(x) = \\arctan x \\) y \\( g(x) = x \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La serie de Maclaurin para \\( h(x) \\) está dada por \\( -\\frac{1}{3} + \\frac{x^2}{5} - \\frac{x^4}{7} + \\cdots \\).",
    "b. Usando el desarrollo de Maclaurin de \\( h(x) \\) resulta \\( \\lim_{x \\to 0} h(x) = 0 \\).",
    "c. El dominio de convergencia de \\( f(x) \\) es \\( (-1, 1) \\).",
    "d. El dominio de convergencia de \\( f(x) \\) es \\( [-1, 1] \\).",
    "e. El dominio de convergencia de la serie de Maclaurin de \\( h(x) \\) es \\( [-1, 1] \\)."
  ],
  correctIndex: [0, 3, 4],
  multiple: true
},

{
  id: 12,
  question: `
    <p><strong>Si una función \\( f(x) \\) cumple con las hipótesis del teorema de Rolle, en un intervalo \\( [a, b] \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. \\( f \\) nunca se anula en \\( [a, b] \\).",
    "b. Existe al menos un punto interior al intervalo en el que la recta tangente a \\( f(x) \\) es horizontal.",
    "c. Si \\( c \\) es el punto del cual Rolle asegura su existencia, entonces siempre en \\( [c, b] \\) la función decrece.",
    "d. \\( f \\) no tiene extremos absolutos en el \\( [a, b] \\).",
    "e. \\( f \\) también cumple con la hipótesis de Lagrange en el intervalo \\( [a, b] \\).",
    "f. Siempre existe al menos un punto crítico en \\( (a, b) \\)."
  ],
  correctIndex: [1, 4, 5],
  multiple: true
},

{
  id: 13,
  question: `
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La derivada de la función \\( y = (\\sec x - \\tan x)(\\sec x + \\tan x) \\) es nula para todo \\( x \\), por lo que la función es constante.",
    "b. La pendiente de la recta tangente a la función \\( f(x) = \\ln\\left(\\frac{x^2 - 3}{\\sqrt{x^2 - 4}}\\right) \\) en \\( x = 3 \\) es \\( 3/5 \\).",
    "c. La derivada de la función \\( f(x) = \\frac{1}{3} (2x + 3)^{\\frac{3}{2}} \\) tiene como dominio a \\( \\mathbb{R} \\).",
    "d. La derivada de la función \\( y = \\frac{\\sqrt{x^4 + 1}}{1 + \\sen^2 x} \\) es: \\( y' = \\frac{\\sqrt{x^4 + 1} [2x^3 - \\sen 2x (1 + \\sen^2 x)]}{1 + \\sen^2 x} \\).",
    "e. La derivada de la función \\( y = \\sqrt{1 + \\cos(\\pi \\cdot \\csc x)} \\) es: \\( y' = \\frac{\\pi \\cdot \\sen(\\pi \\cdot \\csc x)}{2 \\cdot \\sen x \\cdot \\tan x \\cdot (1 + \\cos(\\pi \\cdot \\csc x))^{\\frac{3}{2}}} \\)."
  ],
  // CORREGIDO: Se eliminó 1 porque la pendiente calculada es 2/5 (0.4), no 3/5.
  correctIndex: [0],
  multiple: true
},

{
  id: 14,
  question: `
    <p><strong>Sea \\( g(x) = k + (x - p)^{\\frac{2}{3}} \\) y sea el punto \\( Q(p, k) \\), donde \\( p, k \\) son distintos de cero.</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. \\( g \\) tiene en \\( Q \\) un punto cuspidal, ya que, en él, las derivadas laterales son infinitas y de distinto signo.",
    "b. \\( g \\) tiene en \\( Q \\) una recta tangente vertical.",
    "c. \\( g \\) no resulta continua en \\( Q \\), por involucrar una potencia cuyo exponente es menor que 1.",
    "d. \\( g \\) tiene en \\( Q \\) un punto cuspidal, ya que, en él, las derivadas laterales son infinitas y de igual signo.",
    "e. En general, si \\( h(x) \\) es una función definida en \\( \\mathbb{R} \\) y \\( x = c \\) un punto en su dominio, entonces se cumple que: Si \\( h(x) \\) es derivable en \\( x = c \\) \\( \\Rightarrow \\) \\( h(x) \\) tiene recta tangente en \\( x = c \\).",
    "f. La función \\( g \\) es derivable en el punto \\( Q \\) y además \\( g'(0) = 0 \\)."
  ],
  correctIndex: [0, 1, 4],
  multiple: true
},

{
  id: 15,
  question: `
    <p><strong>Tildar las opciones correctas. Tené en cuenta que puede haber más de una y que las equivocaciones restan puntaje.</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Puede existir una función que a izquierda y derecha de un punto \\( x = c \\) de su dominio cambie sus concavidades y que, sin embargo, \\( x = c \\) NO sea de inflexión",
    "b. El punto \\( (1, -1/e) \\) es un punto de inflexión de la función \\( f(x) = x e^x \\).",
    "c. \\( x = -2 \\) y \\( x = 2 \\) son puntos de inflexión de la función \\( f(x) = \\frac{8}{x^2 - 4} \\).",
    "d. \\( x = -2 \\) y \\( x = 2 \\) separan concavidades opuestas en la función \\( f(x) = \\frac{8}{x^2 - 4} \\).",
    "e. \\( x = \\sqrt{3} \\) y \\( x = -\\sqrt{3} \\) son dos puntos de inflexión de la función \\( f(x) = \\frac{(x+1)^2}{1 + x^2} \\).",
    "f. Para cualquier función \\( f \\) en la que \\( f''(3) = 0 \\), se cumple que \\( x = 3 \\) es punto de inflexión de \\( f \\)."
  ],
  correctIndex: [2, 3, 5],
  multiple: true
},

{
  id: 16,
  question: `
    <p><strong>Dada \\( a > 0 \\), marcar las opciones correctas.</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La función \\( g(x) = \\frac{e^x - 1}{a x} \\) tiene una asíntota en \\( x = 0 \\).",
    "b. \\( \\lim_{x \\to 0} \\frac{e^x - 1}{a x} = \\frac{1}{a} \\).",
    "c. \\( \\lim_{x \\to \\frac{\\pi}{2}^-} \\frac{-a \\cos x}{x - \\frac{\\pi}{2}} = -a \\).",
    "d. La función \\( f(x) = \\frac{-a \\cos x}{x - \\frac{\\pi}{2}} \\) tiene una asíntota en \\( x = \\frac{\\pi}{2} \\).",
    "e. \\( \\lim_{x \\to \\frac{\\pi}{2}} \\frac{-a \\cos x}{x - \\frac{\\pi}{2}} = a \\)."
  ],
  correctIndex: [1, 2, 4],
  multiple: true
},

{
  id: 17,
  question: `
    <p><strong>Tildar la(s) alternativa(s) correcta(s):</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Si una función \\( f(x) \\) tiene un mínimo en \\( x = c \\) de su dominio, entonces la función \\( g = -f \\) tiene un máximo en \\( x = c \\).",
    "b. \\( f(x) = \\begin{cases} \\frac{1}{x} & 0 < x \\leq 1 \\\\ \\ln x & x > 1 \\end{cases} \\) tiene un punto de inflexión en \\( x = 1 \\).",
    "c. La función \\( g(x) = 2 + (x - 5)^3 \\) tiene un extremo local en \\( x = 5 \\).",
    "d. Como la gráfica de \\( f(x) = -\\frac{1}{x} \\) es cóncava hacia arriba para \\( x < 0 \\) y cóncava hacia abajo para \\( x > 0 \\), entonces \\( x = 0 \\) es un punto de inflexión.",
    "e. \\( f(x) = a x^4 + 2x + 6; \\ a > 0 \\) posee un punto de inflexión en \\( x = 0 \\).",
    "f. \\( f(x) = \\frac{1}{1 + x^2} \\) es cóncava hacia arriba en \\( (-\\infty, -\\frac{\\sqrt{3}}{3}) \\cup (\\frac{\\sqrt{3}}{3}, \\infty) \\) y cóncava hacia abajo en \\( (-\\frac{\\sqrt{3}}{3}, \\frac{\\sqrt{3}}{3}) \\)."
  ],
  correctIndex: [0, 5],
  multiple: true
},

{
  id: 18,
  question: `
    <p><strong>La siguiente es la gráfica de la derivada de una cierta función \\( f \\):</strong></p>
    <img src="./img/grafica2.png" alt=""></img>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La función \\( f \\) tiene un máximo relativo en \\( x = 1 \\).",
    "b. La función \\( f \\) tiene un punto de inflexión en \\( x = -2 \\).",
    "c. La función \\( f \\) es cóncava hacia abajo en el intervalo \\( [-2, 1] \\).",
    "d. La función \\( f \\) decrece en el intervalo \\( [-2, 1] \\).",
    "e. La función \\( f \\) tiene un máximo relativo en \\( x = -2 \\).",
    "f. La gráfica de la segunda derivada está por debajo del eje \\( x \\) en el intervalo \\( [2, 3] \\)."
  ],
  correctIndex: [1, 2, 5],
  multiple: true
},

{
  id: 19,
  question: `
    <p><strong>Marcar todas las alternativas que considere correctas.</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Dado \\( a > 0 \\), el cociente de polinomios \\( \\frac{a(x^2 + 1)}{x(x^2 - 16)} \\) se puede escribir en la forma \\( \\frac{A}{x + 2} + \\frac{B}{x - 2} + \\frac{C}{x} \\) para ciertas constantes \\( A, B, C \\).",
    "b. Es posible resolver la integral \\( \\int \\frac{1 + e^x}{e^{2x} - 4} dx \\) utilizando la sustitución \\( u = e^x \\) y luego el método de separación en suma de fracciones parciales.",
    "c. Ninguna de las opciones restantes es correcta.",
    "d. Dado \\( a > 0 \\), el cociente de polinomios \\( \\frac{a x (x^2 + 1)}{x^2 - 25} \\) se puede escribir en la forma \\( \\frac{A}{x + 5} + \\frac{B}{x - 5} \\) para ciertas constantes \\( A, B \\).",
    "e. La integral \\( \\int \\frac{-6a}{(x+1)(x-5)} dx \\), con \\( a < 0 \\), puede re-escribirse como \\( \\int \\left( \\frac{a}{x+1} - \\frac{a}{x-5} \\right) dx \\), y, así, es posible calcular su integral de manera más sencilla."
  ],
  correctIndex: [1, 4],
  multiple: true
},

{
  id: 20,
  question: `
    <p><strong>Teniendo en cuenta los siguientes enunciados, tildar la(s) alternativas correcta(s):</strong></p>
    <p><strong>Problema 1:</strong> Determinar el punto, sobre la gráfica de la función \\( y = \\sqrt{x - 8} \\) más cercano al punto \\( (4, 0) \\).</p>
    <p><strong>Problema 2:</strong> Encuentre la base y la altura de un triángulo cuya suma de estas dos variables es \\( A \\) y su área es máxima.</p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. El valor \\( x \\) correspondiente al punto \\( (x, y) \\) buscado en el **problema 1** se puede obtener al resolver la ecuación \\( x^2 - 7x + 8 = 0 \\).",
    "b. La base y la altura del triángulo en el **problema 2** deben ser iguales.",
    "c. El valor \\( x \\) correspondiente al punto \\( (x, y) \\) buscado en el **problema 1** se obtiene considerando uno de los extremos del dominio de la función distancia en este contexto.",
    "d. El área máxima en el **problema 2** es \\( \\frac{A^2}{8} \\).",
    "e. No se puede plantear el **problema 2** porque los valores dependen de \\( A \\).",
    "f. El valor \\( x \\) correspondiente al punto \\( (x, y) \\) buscado en el **problema 1** es \\( x = \\frac{7}{2} \\)."
  ],
  correctIndex: [1, 5],
  multiple: true
},

{
  id: 21,
  question: `
    <p><strong>Tildar la(s) alternativa(s) correcta(s):</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La recta \\( y = \\frac{1}{2}x + \\frac{1}{2} \\) que pasa por \\( P(1, 1) \\) es una aproximación lineal para \\( f(x) = \\sqrt{x} \\).",
    "b. Para un error porcentual del \\( 5\\% \\) en el cálculo del volumen de una esfera, se tiene una exactitud del \\( 0.1333... \\) al medir \\( 8 \\text{ cms} \\) de radio.",
    "c. La diferencial de \\( y = x (1 - \\cos x) \\) es \\( dy = (1 - \\cos x - x \\cdot \\sen x) dx \\).",
    "d. La recta \\( y = x - 1 \\) que es tangente a la gráfica de \\( f(x) = \\ln x \\) en el punto \\( P(1, 0) \\), permite estimar el valor numérico de \\( \\ln 2 \\).",
    "e. El área de un cuadrado cuyos lados miden \\( 10 \\text{ cms} \\) con un posible error de \\( 0.01 \\text{ cms} \\) tiene un error porcentual de \\( 0.2\\% \\)."
  ],
  // CORREGIDO: Se agregó 'a', se quitó 'd' (mala estimación) y se agregó 'e'.
  correctIndex: [0, 4],
  multiple: true
},

{
  id: 22,
  question: `
    <p><strong>Repasando un poco los métodos de integración. Tildar la(s) alternativa(s) correcta(s)</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La elección \\( u = e^{-x} \\) y \\( dv = (x^2 + 5) dx \\) es apropiada para resolver la integral \\( \\int (x^2 + 5) e^{-x} dx \\).",
    "b. Implementando la sustitución \\( v = \\sqrt{1 + x} \\), se puede calcular con éxito \\( \\int x^2 \\sqrt{1 + x} dx \\).",
    "c. Para el cálculo de la integral \\( \\int \\frac{dx}{\\sqrt{1 - x^2}} \\) la sustitución \\( x = \\sen(t) \\) resulta apropiada para encontrar la familia de primitivas.",
    "d. Para el cálculo de la integral \\( \\int x^2 \\ln(x) dx \\), resulta apropiado el método de integración por partes y, en él, la elección \\( u = \\ln(x) \\).",
    "e. Eligiendo \\( u = \\sen^3 x \\) y \\( dv = dx \\) el método de integración por partes resuelve la integral \\( \\int \\sen^3 x dx \\).",
    "f. Los valores de las constantes \\( A = 5/9 \\), \\( B = 7/9 \\) y \\( C = -8/3 \\) son los que permiten, aplicando el método de separación en fracciones parciales, calcular \\( \\int \\frac{x^2 + 3}{(x-1)(x+2)^2} dx \\)."
  ],
  correctIndex: [1, 2, 3],
  multiple: true
},

{
  id: 23,
  question: `
    <p><strong>Tildar la(s) alternativa(s) correcta(s):</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La curva de ecuación \\( y^2 = 5 x^4 - x^2 \\) se llama kampila de Eudoxo (ver figura). Para que en un punto \\( P(a, b) \\) de la kampila, la recta tangente a ella sea paralela a la recta \\( 9x - 2y - 5 = 0 \\), debe cumplirse la condición \\( 20 a^3 + 2 a = 9 b \\).",
    "b. Para cualquier valor real de \\( a \\) la expresión \\( \\frac{dy}{dx} = -\\frac{y}{x} \\) representa la pendiente de la recta tangente a \\( x^2 + y^2 = a \\).",
    "c. La ecuación \\( b^2 x^2 + a^2 y^2 = a^2 b^2 \\) representa una elipse. Las rectas verticales de ecuaciones \\( x = \\pm a \\) son tangentes a la elipse en los puntos \\( (\\pm a, 0) \\).",
    "d. Sea la elipse \\( 4x^2 + y^2 = 72 \\) y la recta \\( S \\) cuya ecuación es \\( 2y + a x + 3 = 0 \\), con \\( a \\in \\mathbb{R} - \\{0\\} \\). En los puntos \\( P(x, y) \\) cuyas componentes verifican la condición \\( 8 x = a y \\), la recta tangente a la elipse resulta paralela a \\( S \\).",
    "e. Sea la lemniscata de ecuación \\( a(x^2 + y^2)^2 = b(x^2 - y^2) \\), donde \\( a, b \\) son dos constantes reales positivas. Existen algunos valores positivos de \\( a \\) y \\( b \\) para los cuales la curva dada no tiene definida su recta tangente."
  ],
  // CORREGIDO: Se quitó 1 (b) porque la derivada correcta es -x/y.
  correctIndex: [3, 4],
  multiple: true
},

{
  id: 24,
  question: `
    <p><strong>Sean \\( f \\) y \\( g \\) dos funciones integrables en todo \\( \\mathbb{R} \\), de las cuales se conoce que: \\( \\int_{2}^{7} f(x) dx = -5 \\), \\( \\int_{2}^{4} f(x) dx = 1 \\) y que \\( \\int_{2}^{7} g(x) dx = -4 \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. \\( \\int_{4}^{7} f(x) dx = -\\int_{2}^{4} f(x) dx + \\int_{2}^{7} f(x) dx = -6 \\).",
    "b. \\( \\int_{2}^{7} [\\frac{1}{2} f(x) - 4 g(x)] dx = -\\frac{27}{2} \\).",
    "c. \\( \\int_{2}^{4} [f(x) + 3] dx = 7 \\).",
    "d. \\( -\\int_{2}^{7} [2 g(x) - \\frac{1}{2} f(x)] dx = \\frac{11}{2} \\).",
    "e. \\( \\int_{0}^{5} f(x + 2) dx = 1 \\)."
  ],
  correctIndex: [0, 1, 2, 4],
  multiple: true
},

{
  id: 25,
  question: `
    <p><strong>Sea la función \\( g(x) = \\frac{c x}{x^2 + 1} - \\frac{1}{2x + 1} \\), donde \\( c \\in \\mathbb{R} \\) es una constante.</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Una primitiva de la función \\( g(x) \\) está dada por la función \\( G(x) = \\frac{1}{2} \\ln \\left[ \\frac{(1 + x^2)^c}{1 + 2x} \\right] \\).",
    "b. El valor \\( c = 0 \\) devuelve \\( \\int_{2}^{\\infty} g(x) dx \\) convergente.",
    "c. La integral \\( \\int_{2}^{\\infty} g(x) dx \\) resulta convergente para el valor \\( c = \\frac{1}{2} \\).",
    "d. Existen valores de \\( c \\) mayores que \\( 1 \\) para los cuales la integral \\( \\int_{2}^{\\infty} g(x) dx \\) converge.",
    "e. Para todo valor de \\( c \\): \\( 0 < c < 1 \\) la integral impropia \\( \\int_{2}^{\\infty} g(x) dx \\) es convergente."
  ],
  correctIndex: [0, 2],
  multiple: true
},

{
  id: 26,
  question: `
    <p><strong>Tildar la(s) alternativa(s) correcta(s):</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. La sucesión \\( \\left\\{ \\cos((2n + 1) \\pi) \\right\\} \\) es convergente.",
    "b. La sucesión \\( \\left\\{ \\frac{1}{n + \\sen(n \\pi)} \\right\\} \\) es convergente.",
    "c. La sucesión \\( \\left\\{ \\frac{n^3}{3 n^3 + 1} \\right\\} \\), con \\( n \\geq 3 \\) es decreciente y tiende a \\( 1 \\).",
    "d. Dada \\( a < 0 \\), la sucesión \\( \\left\\{ \\frac{a^n}{2^n} \\right\\} \\) no converge.",
    "e. Dada \\( a \\neq 0 \\), el teorema de compresión es útil para probar que la sucesión \\( \\left\\{ \\frac{n - a}{\\ln n} \\right\\} \\) converge."
  ],
  correctIndex: [1],
  multiple: true
},

{
  id: 27,
  question: `
    <p><strong>Dada \\( 1 < a \\leq 2 \\), la función \\( F(x) = \\int_{0}^{x} a \\cdot \\cos t + 1 dt \\) definida en el intervalo \\( [0, \\infty) \\).</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Ninguna de las otras opciones es correcta.",
    "b. \\( F \\) es decreciente en el \\( [0, \\infty) \\).",
    "c. \\( \\frac{d}{dx} F \\) tiene un máximo local en \\( x = 2 \\pi \\).",
    "d. \\( F \\) tiene infinitos puntos de inflexión.",
    "e. \\( F \\) es creciente en \\( [0, \\infty) \\)."
  ],
  // CORREGIDO: Se agregó 'c' (máximo local de la derivada)
  correctIndex: [2, 3],
  multiple: true
},

{
  id: 28,
  question: `
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Existen dos curvas que pasan por el punto \\( P(1, 1) \\) y cuya integral de longitud de arco en el intervalo \\( [1, 4] \\) es \\( L = \\int_{1}^{4} \\sqrt{1 + 4x} dx \\).",
    "b. Existe \\( \\alpha \\in (0, 1) \\) para el cual la longitud de arco de la función \\( f(x) = \\ln \\sen x \\) en el intervalo \\( [\\frac{\\pi}{3}, \\frac{\\pi}{2}] \\) es \\( -\\ln \\tan \\frac{\\pi}{12} \\). Ayuda: \\( \\int \\csc x dx = \\ln |\\tan \\frac{x}{2}| + C \\).",
    "c. La longitud de arco de la gráfica de \\( f(x) = \\int_{0}^{x} \\sqrt{\\cos t} dt \\) desde el punto \\( x = 0 \\) hasta \\( x = \\frac{\\pi}{2} \\) es \\( \\sqrt{2} - 1 \\). Ayuda: \\( \\cos^2(\\frac{1}{2}x) = \\frac{1}{2}(1 + \\cos x) \\).",
    "d. Existen infinitas funciones continuamente diferenciables \\( y = f(x) \\) cuya longitud de arco en \\( [0, a] \\), \\( a > 0 \\) es constante e igual a \\( \\sqrt{2} a \\).",
    "e. No existe \\( a \\in (0, 1) \\) para el cual la longitud de arco de la función \\( f(x) = \\ln \\sen x \\) en el intervalo \\( [\\frac{\\pi}{3}, \\frac{\\pi}{2}] \\) sea \\( -\\ln \\tan \\frac{\\pi}{12} \\), ya que \\( -\\ln \\tan \\frac{\\pi}{12} \\) es un número negativo y, por ende, no puede representar una longitud. Ayuda: \\( \\int \\csc x dx = \\ln |\\tan \\frac{x}{2}| + C \\)."
  ],
  correctIndex: [0, 1, 3],
  multiple: true
},

{
  id: 29,
  question: `
    <p><strong>Tildar la(s) alternativa(s) correcta(s):</strong></p>
    <p><strong>Seleccione una o más de una:</strong></p>
  `,
  options: [
    "a. Ninguna de las otras opciones es correcta.",
    "b. El área de la región limitada por \\( y = \\ln x \\), el eje \\( x \\) y la recta tangente a la función en el punto \\( x = e \\) es de \\( e/2 + 1 \\).",
    "c. El área de la región limitada por \\( y = \\ln x \\), el eje \\( x \\) y la recta tangente a la función en el punto \\( x = e \\) es de \\( e/2 \\).",
    "d. El valor \\( m = -3 \\) hace que el área del recinto limitado por la curva \\( y = x^3 \\) y la recta \\( y = m x \\) sea \\( 9/2 \\)."
  ],
  correctIndex: [2, 3],
  multiple: true
},

];