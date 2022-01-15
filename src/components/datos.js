import React, { Component } from "react";

export class Datos extends Component {

    render() {
        const tablescroll = {
            position: 'relative',
            height: '300px',
            overflow: 'auto',
            display: 'block',
            fontSize: '12px'
        }
        const theadfix = {
            position: 'sticky',
            top: '0',
            left: '0',
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-sm" style={tablescroll}>
                    <thead style={theadfix} className="table-dark">
                        <tr>
                            {this.props.numColumn.map((columna) => {
                                return  (  <th>{Object.values(columna)}</th>)      
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((element) => (
                            <tr>
                                {Object.values(element).map((objeto)=>{
                                    //console.log(objeto)
                                   return ( <td>{objeto}</td> )
                            })}  
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

            </div>
        )

    }
}

//select distinct o.htitulo_cat, o.htitulo from webscraping w inner join oferta o on (w.id_webscraping=o.id_webscraping) where o.id_estado is null order by 1,2 limit 500;

//select o.htitulo_cat,o.htitulo,w.pagina_web,o.empresa,o.lugar,o.salario,date_part('year',o.fecha_publicacion) as periodo, f_dimPuestoEmpleo(o.id_oferta,7) as funciones, f_dimPuestoEmpleo(o.id_oferta,1) as conocimiento, f_dimPuestoEmpleo(o.id_oferta,3) as habilidades, f_dimPuestoEmpleo(o.id_oferta,2) as competencias, f_dimPuestoEmpleo(o.id_oferta,17) as certificaciones, f_dimPuestoEmpleo(o.id_oferta,5) as beneficio, f_dimPuestoEmpleo(o.id_oferta,11) as formacion  from webscraping w inner join oferta o on (w.id_webscraping=o.id_webscraping) where o.id_estado is null limit 500;



