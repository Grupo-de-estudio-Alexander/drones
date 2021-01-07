import './Grilla.css'
import Direcciones from './componentes/Direcciones';
const React = require('react')
const axios = require('axios')


class Grilla extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drones: [
                [[1,1], 1],
                [[2,2], 2],
                [[4,4], 3],
            ],
            grillaSize: 10,
        }
        this.updateDrones = this.updateDrones.bind(this)
    }

    async updateDrones() {
        const { data } = await axios({
            method: "GET",
            baseURL: "http://127.0.0.1:5000",
            url: "/drones"
        });
        const drones = data.map((drone) => {
            return [drone.posicionInicial, drone.id];
        })
        this.setState({drones});
    }

    componentDidMount() {
        this.updateDrones();
    }

    render() {
        const filas = [];
        for (let x = this.state.grillaSize; x >= 0; x--) {
            const casillas = [];
            for (let y = 0; y <= this.state.grillaSize; y++) {
                // Revisar si en la posicion se encuentra un dron
                let dron;
                this.state.drones.forEach((val) => {
                    const droneX = val[0][1];
                    const droneY = val[0][0];
                    if (droneX === x && droneY === y) {
                        dron = val;
                    }
                })
                // Asignar valor a la casilla
                let casilla = <td className="m" id={"column " + y}> </td>
                if (dron) {
                    casilla = <td className={"m " + "d" + dron[1]} id={"column " + y}>{"D" + dron[1]}</td>
                }
                casillas.push(casilla)
            }
            const fila = <tr id={'row ' + x}>{casillas}</tr>
            filas.push(fila)
        }
        return (
            <div>
                <table class="cuadricula">
                    <tbody>
                        {filas}
                    </tbody>
                </table>
                <Direcciones name="Manuel" drones="4" posicionInicial="0,0" updateDrones={this.updateDrones}/>
            </div>
        )
    }
}

export default Grilla;