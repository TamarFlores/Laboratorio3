class ServicesController 
{
    constructor() {}
    index(req, res) 
    {
        res.status(200).json({ serverResponse: "hhola mundo" });
    }
    
    test(req, res) 
    {
        req.body["msn"] = "Por el servidor";
        const data = req.body;
        res.status(200).json(data);
    }


    

    //DESAFIO! 1 CAMBIO DE DIVISAS
    divisa(req, res)
    {
        var params = req.body;
        if(params.moneda === null)
        {
            res.status(300).json({msn : "Inserte el valor de la moneda"});
            return;
        }
        if(params.cantidad === null)
        {
            res.status(300).json({msn : "Inserte la cantidad"});
            return;
        }
         if(params.tipo_de_moneda === null)
         {
            res.status(300).json({msn : "Inserte el pais de la moneda"});
            return;
        }
        if(params.moneda == 6.96)
        {
            const resultado = parseFloat(params.cantidad)/6.96;
            res.status(200).json({msn: params.tipo_de_moneda+" :"+' '+resultado});
            return;
        }
        let valor= parseFloat(params.moneda) * parseFloat(params.cantidad);
        let resultado = parseFloat(valor)/6.96;
        res.status(200).json({msn:params.tipo_de_moneda+": "+resultado});
    }



    //DESAFIO2 CALCULAR INTERES COMPUESTo
    interes(req, res)
    {
        var params = req.body;
        if(params.monto === null  && params.tipo===null && params.tiempo===null)
        {
            res.status(300).json({msn : "Inserte todos los datos"});
            return;
        }
        var tipo=params.tipo;
        const porcentaje= parseFloat(params.tipo / 100);
       
        const aux=parseFloat(Math.pow((1+porcentaje),params.tiempo));
        
        let resultado=parseFloat(params.monto) * parseFloat(aux);
        res.status(200).json({msn:"El monto total a pagar es "+ resultado +" bs."});
    }
}
export default ServicesController;