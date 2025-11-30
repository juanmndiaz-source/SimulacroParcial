const questionBank = [
{
    id: 1,
    question: "Sea f una función definida en R que cumple: f'(x−1)=f'(x)=0, f'(x²)<0 si |x|<1, f''(x²−x)>0, f'(0)=f'(1)=0. Seleccionar la(s) alternativa(s) correcta(s).",
    options: [
        "x = 1 es un mínimo local.",
        "La función crece en (-∞,−1) ∪ (1,∞).",
        "No puede asegurarse que x = 1 sea un máximo local.",
        "p = lim(x→0−)(f(x) − f(0))/(x − 0) = lim(x→0+)(f(x) − f(0))/(x − 0) = f'(0)."
    ],
    correctIndex: [2, 3],
    multiple: true,
    feedback: "La información dada no permite asegurar si x=1 es máximo o mínimo. La igualdad del cociente incremental es la definición de derivada en 0."
},

{
    id: 2,
    question: "Considerar la parábola y² = 4px, con p>0. Seleccionar la(s) alternativa(s) correcta(s).",
    options: [
        "La parábola tiene derivada en todo punto donde existe recta tangente.",
        "La parábola no tiene recta tangente en el origen.",
        "La recta tangente en (x₀, y₀) corta al eje x en (y₀²/(4p), 0).",
        "La ecuación de la recta tangente en (x₀, y₀) es y = (p/y₀)(x − x₀) + y₀.",
        "Los puntos donde la tangente es perpendicular a la recta dada están sobre y = −1."
    ],
    correctIndex: [0, 3],
    multiple: true,
    feedback: "La parábola tiene tangente vertical en el origen. La fórmula de la tangente es correctamente y = (p/y₀)(x − x₀) + y₀."
},

{
    id: 3,
    question: "Se desea el cilindro inscripto de máximo volumen en un cono recto de altura 5 cm y radio R=2.",
    options: [
        "El volumen máximo obtenido es mayor que (21π/27)R³.",
        "Los valores extremos dependen de R y no se puede verificar que sea máximo.",
        "El valor extremo obtenido es un máximo verificable con la segunda derivada.",
        "El cilindro de mayor volumen cumple r = (2/3)R y h = (1/3)H.",
        "Las dimensiones que maximizan el volumen son r = 2R/3 y h = 5/3.",
        "El volumen máximo es menor que (32π/27)R³."
    ],
    correctIndex: [2, 3, 5],
    multiple: true,
    feedback: "La optimización da r=2R/3 y h=H/3. El volumen máximo está entre los valores indicados en c y f."
},
];
