
clase1 = historia
clase2 = natacion
clase3 = esgrima


SI clase1 == Lunes o Miercoles ENTONCES
    ESCRIBE "Tengo clase de historia"
    SINO
        SI clase2 = martes ENTONCES
        ESCRIBE "Tengo natacion"
            SINO
                SI clase3 = jueves ENTONCES
                ESCRIBE "Clase de natacion"
                    SINO "Son dias de descanso"

                    FIN-SI
            FIN-SI
    FIN-SI
FIN