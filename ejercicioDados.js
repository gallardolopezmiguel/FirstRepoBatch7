Leer shot1, shot2, shot3

SI shot1 == shot2 ENTONCES
    ESCRIBE "GANASTE"
    SINO
        SI shot2 == shot3 ENTONCES
        ESCRIBE "GANASTE"
            SINO
                SI shot3 == shot1 ENTONCES
                ESCRIBE "GANASTE"
                    SINO "Perdite"
                    FIN-SI
            FIN-SI        
    FIN-SI
FIN-SI
FIN      


