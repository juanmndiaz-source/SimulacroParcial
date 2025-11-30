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
        "a. \\(x = 1\\) es un mínimo local.",
        "b. La función crece en \\(( -\\infty, -1 ) \\cup ( 1, \\infty )\\).",
        "c. No puede asegurarse que \\(x = 1\\) sea un máximo local.",
        "d. \\( \\lim_{x\\to -1^-} \\frac{f(x)-f(-1)}{x-(-1)} = \\lim_{x\\to -1^+} \\frac{f(x)-f(-1)}{x-(-1)} \\)."
    ],
    correctIndex: [1, 2],
    multiple: true,
    feedback: "La función decrece entre -1 y 1 y crece fuera de ese intervalo. No se puede asegurar que x = 1 sea máximo local."
},

{
    id: 2,
    question: `
        <p><strong>Considere la parábola \\( y^2 = 4px \\), donde \\(p\\) es un número real distinto de cero.</strong></p>
        <p><strong>Seleccione una o más opciones:</strong></p>
    `,
    options: [
        "a. Esto es lo mismo tener derivada en un punto que recta tangente en él.",
        "b. La parábola no tiene recta tangente en el origen de coordenadas.",
        "c. La recta tangente a la parábola en el punto \\((x_0, y_0)\\) interesa a \\( y = -f(x_0) \\).",
        "d. La recta tangente a la parábola en el punto \\((x_0, y_0)\\) se puede escribir como \\(y - y_0 = \\frac{2p}{y_0}(x - x_0)\\).",
        "e. Los puntos sobre la parábola donde la recta tangente es perpendicular a la recta \\( y = \\frac{1}{2p}x \\) se encuentran sobre la recta horizontal \\( y = -1 \\)."
    ],
    correctIndex: [0, 3],
    multiple: true,
    feedback: "La parábola tiene derivada siempre que y ≠ 0. En el origen sí existe recta tangente. La fórmula correcta para la tangente es la opción d."
},

{
    id: 3,
    question: `
        <p><strong>Se buscan determinar las dimensiones de un cilindro circular recto, de radio r y altura h, de volumen máximo posible inscripto en un cono circular recto de altura 5 cm y radio de base R &gt; 0.</strong></p>
        <p><strong>Seleccione una o más opciones:</strong></p>
    `,
    options: [
        "a. Si \\(V(r,h)\\) es el volumen total, entonces su máximo se da cuando \\(3r = 2R\\).",
        "b. El volumen máximo obtenido es mayor que \\( \\frac{27\\pi R^3}{256} \\).",
        "c. Los valores extremos que se obtienen de la función volumen del cilindro dependen de \\(R\\) y por lo tanto no se puede verificar que sea un volumen máximo.",
        "d. El cilindro de mayor volumen se obtiene cuando su altura es \\( h = \\frac{5}{3} r \\).",
        "e. Las dimensiones del cilindro que maximizan el volumen son \\( r = \\frac{2}{3}R \\) y \\( h = \\frac{5}{3} \\cdot \\frac{2}{3}R \\).",
        "f. El volumen máximo obtenido es menor que \\( \\frac{27\\pi R^3}{64} \\)."
    ],
    correctIndex: [0, 3, 4],
    multiple: true,
    feedback: "La condición de máximo se obtiene con 3r = 2R. La proporción entre altura y radio es h = (5/3)r, lo que da las dimensiones de la opción e."
}

];
