const u_Age = Number(prompt ('cual es tu edad ?'));
const u_Sex = prompt ("Sexo (-H --> Hombre, M --> Mujer, O --> Other");
const u_Climate = prompt("Clima donde resides ( C --> Caliente, T --> Tibio --> F --> FRIO");
const u_Activity = prompt(" Actividad que cas a realizar -- T --> Trabajo, E --> Estudio, F --> Fiesta");
const u_Status = prompt("SI es laboral nivel ... --> E Ejecutivo --> P Profesional --> O Operativo --<ENTER> NA");

// Variables short if


const isChildren = u_Age < 18;
const isJoung = 18 < u_Age < 35;
const isOlder = 35 < u_Age;
const isMan = u_Sex.toUpperCase() === "H";
const isWom = u_Sex.toUpperCase() === "M";
const isHot = u_Climate.toUpperCase() === "C";
const isTemp = u_Climate.toUpperCase() === "T";
const isCold = u_Climate.toUpperCase() === "F";
const isWork = u_Activity.toUpperCase() === "T";
const isEstu = u_Activity.toUpperCase() === "E";
const isHoli = u_Activity.toUpperCase() === "F";
const isVip = u_Status.toUpperCase() === "E";
const isPro = u_Status.toUpperCase() === "P";
const isOpe = u_Status.toUpperCase() === "O";
const isNone = u_Status.toUpperCase() === "";


// document.write (isMan + "--" + isHot + " --" + isChildren + " --" + isEstu + "--" + isNone);

if (isMan || isWom)
    if (isMan) 
    {
        if (isChildren) 
        {
            if (isHot)
            {
                if (isEstu)
                {
                    if (isNone)
                    {
                        document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                    }   
                }
            }
            else 
            {
                if (isTemp)
                {
                    if (isEstu)
                    {
                        if (isNone)
                        {
                            document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                        }   
                    }
                }
                else
                {
                    if (isCold)
                    {
                        if (isEstu)
                        {
                            if (isNone)
                            {
                                document.write ("Vestir Pantalon Negro, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            }   
                        }
                    }
                }
            }
        }
        else
        {
            if (isJoung)
            {
                if (isHot)
                {
                    if (isEstu)
                    {
                        if (isNone)
                        {
                            document.write ("Vestir Pantalon hueso, camiseta azul con imagen, tennis de colores");
                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                        }   
                    }
                    else
                    {
                        if (isWork)
                        {
                            if (isVip)
                            {
                            document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            }
                            else
                            {
                                if (isPro)
                                {
                                    document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                }
                                else
                                {
                                    if (isOpe)
                                    {
                                        document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                }
                            }
                        }
                        else
                        {
                            if (isHoli)
                            {
                                document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                            }
                        }
                    }
                }
                else 
                {
                    if (isTemp)
                    {
                        if (isEstu)
                        {
                            if (isNone)
                            {
                                document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            }   
                        }
                        else
                        {
                            if (isWork)
                            {
                                if (isVip)
                                {
                                    document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }
                                else
                                {
                                    if (isPro)
                                    {
                                        document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                    else
                                    {
                                        if (isOpe)
                                        {
                                            document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (isHoli)
                                {
                                    document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                }
                            }
                        }
                    }
                    else
                    {
                        if (isCold)
                        {
                            if (isEstu)
                            {
                                if (isNone)
                                {
                                    document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }   
                            }
                            else
                            {
                                if (isWork)
                                {
                                    if (isVip)
                                    {
                                        document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    }
                                    else
                                    {
                                        if (isPro)
                                        {
                                            document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                        else
                                        {
                                            if (isOpe)
                                            {
                                                document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                        }
                                    }
                                }
                                else
                                {
                                    if (isHoli)
                                    {
                                        document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else
            {
                if (isOlder)
                {
                    if (isHot)
                    {
                        if (isEstu)
                        {
                            if (isNone)
                            {
                                document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            }   
                        }
                        else
                        {
                            if (isWork)
                            {
                                if (isVip)
                                {
                                document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }
                                else
                                {
                                    if (isPro)
                                    {
                                        document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                    else
                                    {
                                        if (isOpe)
                                        {
                                            document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (isHoli)
                                {
                                    document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                }
                            }
                        }
                    }
                    else 
                    {
                        if (isTemp)
                        {
                            if (isEstu)
                            {
                                if (isNone)
                                {
                                    document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }   
                            }
                            else
                            {
                                if (isWork)
                                {
                                    if (isVip)
                                    {
                                        document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    }
                                    else
                                    {
                                        if (isPro)
                                        {
                                            document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                        else
                                        {
                                            if (isOpe)
                                            {
                                                document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                        }
                                    }
                                }
                                else
                                {
                                    if (isHoli)
                                    {
                                        document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                }
                            }
                        }
                        else
                        {
                            if (isCold)
                            {
                                if (isEstu)
                                {
                                    if (isNone)
                                    {
                                        document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    }   
                                }
                                else
                                {
                                    if (isWork)
                                    {
                                        if (isVip)
                                        {
                                            document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        }
                                        else
                                        {
                                            if (isPro)
                                            {
                                                document.write ("Rango AGE --> " + u_Age + " ... <br>" + "Nivel cargo -->" + u_Status + "..<br>" + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                            else
                                            {
                                                if (isOpe)
                                                {
                                                    document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                                }
                                            }
                                        }
                                    }
                                    else
                                    {
                                        if (isHoli)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    else 
    {
        if (isWom)
        {
            if (isChildren) 
            {
                if (isHot)
                {
                    if (isEstu)
                    {
                        if (isNone)
                        {
                            document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                        }   
                    }
                }
                else 
                {
                    if (isTemp)
                    {
                        if (isEstu)
                        {
                            if (isNone)
                            {
                                document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            }   
                        }
                    }
                    else
                    {
                        if (isCold)
                        {
                            if (isEstu)
                            {
                                if (isNone)
                                {
                                    document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }   
                            }
                        }
                    }
                }
            }
            else
            {
                if (isJoung)
                {
                    if (isHot)
                    {
                        if (isEstu)
                        {
                            if (isNone)
                            {
                                document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                            }   
                        }
                        else
                        {
                            if (isWork)
                            {
                                if (isVip)
                                {
                                document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }
                                else
                                {
                                    if (isPro)
                                    {
                                        document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                    else
                                    {
                                        if (isOpe)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (isHoli)
                                {
                                    document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                }
                            }
                        }
                    }
                    else 
                    {
                        if (isTemp)
                        {
                            if (isEstu)
                            {
                                if (isNone)
                                {
                                    document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }   
                            }
                            else
                            {
                                if (isWork)
                                {
                                    if (isVip)
                                    {
                                        document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    }
                                    else
                                    {
                                        if (isPro)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                        else
                                        {
                                            if (isOpe)
                                            {
                                                document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                        }
                                    }
                                }
                                else
                                {
                                    if (isHoli)
                                    {
                                        document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                }
                            }
                        }
                        else
                        {
                            if (isCold)
                            {
                                if (isEstu)
                                {
                                    if (isNone)
                                    {
                                        document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    }   
                                }
                                else
                                {
                                    if (isWork)
                                    {
                                        if (isVip)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        }
                                        else
                                        {
                                            if (isPro)
                                            {
                                                document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                            else
                                            {
                                                if (isOpe)
                                                {
                                                    document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                                }
                                            }
                                        }
                                    }
                                    else
                                    {
                                        if (isHoli)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else
                {
                    if (isOlder)
                    {
                        if (isHot)
                        {
                            if (isEstu)
                            {
                                if (isNone)
                                {
                                    document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                }   
                            }
                            else
                            {
                                if (isWork)
                                {
                                    if (isVip)
                                    {
                                    document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    }
                                    else
                                    {
                                        if (isPro)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                        else
                                        {
                                            if (isOpe)
                                            {
                                                document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                        }
                                    }
                                }
                                else
                                {
                                    if (isHoli)
                                    {
                                        document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                    }
                                }
                            }
                        }
                        else 
                        {
                            if (isTemp)
                            {
                                if (isEstu)
                                {
                                    if (isNone)
                                    {
                                        document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                    }   
                                }
                                else
                                {
                                    if (isWork)
                                    {
                                        if (isVip)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        }
                                        else
                                        {
                                            if (isPro)
                                            {
                                                document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                            else
                                            {
                                                if (isOpe)
                                                {
                                                    document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                                }
                                            }
                                        }
                                    }
                                    else
                                    {
                                        if (isHoli)
                                        {
                                            document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                        }
                                    }
                                }
                            }
                            else
                            {
                                if (isCold)
                                {
                                    if (isEstu)
                                    {
                                        if (isNone)
                                        {
                                            document.write ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                        }   
                                    }
                                    else
                                    {
                                        if (isWork)
                                        {
                                            if (isVip)
                                            {
                                                document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                            }
                                            else
                                            {
                                                if (isPro)
                                                {
                                                    document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                    console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                                }
                                                else
                                                {
                                                    if (isOpe)
                                                    {
                                                        document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                        console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                                    }
                                                }
                                            }
                                        }
                                        else
                                        {
                                            if (isHoli)
                                            {
                                                document.write ("Rango Edad --> <br>" + u_Age + "Nivel cargo -->" + u_Status + " Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores");
                                                console.log ("Vestir Pantalon Blanco, camiseta azul con imagen, tennis de colores ");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
else
{
    document.write ("Variables mal ingresads o no existe recomendación");
    console.log ("Variables mal ingresads o no existe recomendación");
}

