import React from 'react'
import RMenuItem from './RMenuItem'
import { Row, Col} from 'react-bootstrap'


class RMenu extends React.Component {
    render(){

        const appetizers = this.props.menu.filter(item => item.category === "Starters")
        const bakery= this.props.menu.filter(item=> item.category === "Sandwiches")
        const salads= this.props.menu.filter(item=>item.category === "Tossed Salads")
        const kmenu = this.props.menu.filter(item => 
            item.category === "Kids Menu" )
        const beverages= this.props.menu.filter(item=>
                item.category === "Beverages" || 
                item.category === "Coffee & Tea")
    
        const style = {
            fontFamily: "Russo One",
            backgroundColor: '#F1F1E2',
            color: "#A370A7"
        }


    // Starters
        const appMap = appetizers.map(item => 
                <RMenuItem 
                key={item.id} 
                item={item} 
                price={item.price}
                description={item.description}
                handleOrders={this.props.handleOrders}
        />) 
    
            const app1 = []
            for (let i = 0; i < appMap.length; i+=2) {
                app1.push(appMap[i])
            }
            const app2 = []
            for (let i = 1; i < appMap.length; i+=2) {
                app2.push(appMap[i])
            }
    
    // Salads
        const salMap = salads.map(item => 
            <RMenuItem 
            key={item.id} 
            item={item} 
            price={item.price}
            description={item.description}
            handleOrders={this.props.handleOrders}
        />)
            const sal1 = []
            for (let i = 0; i < salMap.length; i+=2) {
                sal1.push(salMap[i])
            }
            const sal2 = []
            for (let i = 1; i < salMap.length; i+=2) {
                sal2.push(salMap[i])
            }
    
    // Sandwiches
            const sanMap = bakery.map(item => 
                <RMenuItem 
                key={item.id} 
                item={item} 
                price={item.price}
                description={item.description}
                handleOrders={this.props.handleOrders}
            />)
    
            const san1 = []
            for (let i = 0; i < sanMap.length; i+=2) {
                san1.push(sanMap[i])
            }
            const san2 = []
            for (let i = 1; i < sanMap.length; i+=2) {
                san2.push(sanMap[i])
            }
    
    // Kids
            const kidsMap = kmenu.map(item => 
                <RMenuItem 
                key={item.id} 
                item={item} 
                price={item.price}
                description={item.description}
                handleOrders={this.props.handleOrders}
            />)
    
            const kids1 = []  
            for (let i = 0; i < kidsMap.length; i+=2) {
                kids1.push(kidsMap[i])
            }
            const kids2 = []  
            for (let i = 1; i < kidsMap.length; i+=2) {
                kids2.push(kidsMap[i])
            }
    
    // Bevs
            const bevsMap = beverages.map(item => 
                <RMenuItem 
                key={item.id} 
                item={item} 
                price={item.price}
                description={item.description}
                handleOrders={this.props.handleOrders}
            />)
    
            const bevs1 = []  
            for (let i = 0; i < bevsMap.length; i+=2) {
                bevs1.push(bevsMap[i])
            }
            const bevs2 = []  
            for (let i = 1; i < bevsMap.length; i+=2) {
                bevs2.push(bevsMap[i])
            }
        return( 

            
            <div className="column is-6">
            <h2 style={style}> S T A R T E R S</h2>        
            <Row> 
                <Col> {app1} </Col> 
                <Col> {app2} </Col>
            </Row>
            <br/>
            <h2 style={style}> S A L A D S </h2> 
            <Row> 
                <Col> {sal1} </Col> 
                <Col> {sal2} </Col>
            </Row>
            <br/>
            <h2 style={style}> S A N D W I C H E S </h2>
            <Row> 
                <Col> {san1} </Col> 
                <Col> {san2} </Col>
            </Row>
            <br/>
            <h2 style={style} > K I D ' S    M E N U </h2>
            <Row> 
                <Col> {kids1} </Col> 
                <Col> {kids2} </Col>
            </Row>
            <br/>
            <h2 style={style}> B E V E R A G E S</h2>
            <Row> 
                <Col> {bevs1} </Col> 
                <Col> {bevs2} </Col>
            </Row>
            <br/>
            </div>
        )
    }
}


export default RMenu;

// export default function RMenu(props) {
    
//     const appetizers = props.menu.filter(item => item.category === "Starters")
//     const bakery= props.menu.filter(item=> item.category === "Sandwiches")
//     const salads= props.menu.filter(item=>item.category === "Tossed Salads")
//     const kmenu = props.menu.filter(item => 
//         item.category === "Kids Menu" )
//     const beverages= props.menu.filter(item=>
//             item.category === "Beverages" || 
//             item.category === "Coffee & Tea")

//     const style = {
//         fontFamily: "Russo One",
//         backgroundColor: '#F1F1E2',
//         color: "#A370A7"
//     }

// // Starters
//     const appMap = appetizers.map(item => 
//             <RMenuItem 
//             key={item.id} 
//             item={item} 
//             price={item.price}
//             description={item.description}
//             handleOrders={props.handleOrders}
//     />) 

//         const app1 = []
//         for (let i = 0; i < appMap.length; i+=2) {
//             app1.push(appMap[i])
//         }
//         const app2 = []
//         for (let i = 1; i < appMap.length; i+=2) {
//             app2.push(appMap[i])
//         }

// // Salads
//     const salMap = salads.map(item => 
//         <RMenuItem 
//         key={item.id} 
//         item={item} 
//         price={item.price}
//         description={item.description}
//         handleOrders={props.handleOrders}
//     />)
//         const sal1 = []
//         for (let i = 0; i < salMap.length; i+=2) {
//             sal1.push(salMap[i])
//         }
//         const sal2 = []
//         for (let i = 1; i < salMap.length; i+=2) {
//             sal2.push(salMap[i])
//         }

// // Sandwiches
//         const sanMap = bakery.map(item => 
//             <RMenuItem 
//             key={item.id} 
//             item={item} 
//             price={item.price}
//             description={item.description}
//             handleOrders={props.handleOrders}
//         />)

//         const san1 = []
//         for (let i = 0; i < sanMap.length; i+=2) {
//             san1.push(sanMap[i])
//         }
//         const san2 = []
//         for (let i = 1; i < sanMap.length; i+=2) {
//             san2.push(sanMap[i])
//         }

// // Kids
//         const kidsMap = kmenu.map(item => 
//             <RMenuItem 
//             key={item.id} 
//             item={item} 
//             price={item.price}
//             description={item.description}
//             handleOrders={props.handleOrders}
//         />)

//         const kids1 = []  
//         for (let i = 0; i < kidsMap.length; i+=2) {
//             kids1.push(kidsMap[i])
//         }
//         const kids2 = []  
//         for (let i = 1; i < kidsMap.length; i+=2) {
//             kids2.push(kidsMap[i])
//         }

// // Bevs
//         const bevsMap = beverages.map(item => 
//             <RMenuItem 
//             key={item.id} 
//             item={item} 
//             price={item.price}
//             description={item.description}
//             handleOrders={props.handleOrders}
//         />)

//         const bevs1 = []  
//         for (let i = 0; i < bevsMap.length; i+=2) {
//             bevs1.push(bevsMap[i])
//         }
//         const bevs2 = []  
//         for (let i = 1; i < bevsMap.length; i+=2) {
//             bevs2.push(bevsMap[i])
//         }

// return (
//         <div className="column is-6">
//         <h2 style={style}> S T A R T E R S</h2>        
//         <Row> 
//             <Col> {app1} </Col> 
//             <Col> {app2} </Col>
//         </Row>
//         <br/>
//         <h2 style={style}> S A L A D S </h2> 
//         <Row> 
//             <Col> {sal1} </Col> 
//             <Col> {sal2} </Col>
//         </Row>
//         <br/>
//         <h2 style={style}> S A N D W I C H E S </h2>
//         <Row> 
//             <Col> {san1} </Col> 
//             <Col> {san2} </Col>
//         </Row>
//         <br/>
//         <h2 style={style} > K I D ' S    M E N U </h2>
//         <Row> 
//             <Col> {kids1} </Col> 
//             <Col> {kids2} </Col>
//         </Row>
//         <br/>
//         <h2 style={style}> B E V E R A G E S</h2>
//         <Row> 
//             <Col> {bevs1} </Col> 
//             <Col> {bevs2} </Col>
//         </Row>
//         <br/>
//         </div>
//     )
// }
