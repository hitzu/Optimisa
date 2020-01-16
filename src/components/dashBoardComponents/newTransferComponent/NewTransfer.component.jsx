import React, { Component } from 'react'
import "./newTransfer.css"


export class NewTransferComponent extends Component {

    constructor(props){
		super(props)
		this.state = {
            balance : this.props.balance,
            options : [], 
            inputDestinationData : "",
            validDestinationInput : true,
            inputAmountData : "",
            acountSelected : ""
            
        }
    }
    
    componentDidMount() {
        const { balance } = this.state
          
        var arrTen = [];
          for (var k = 0; k < balance.length; k++) {
              arrTen.push(<option key={balance[k].account} value={balance[k].account}> { balance[k].account } { balance[k].balance.currency } - { balance[k].balance.value} </option>);
          }
          arrTen.unshift(<option key={123} value={""}> Select an account </option>)
          this.setState({
            options: arrTen
          });
        
    }

    updateDestinationInput = (value) => {
        if ( value.length > 7 ){
            this.setState({
                validDestinationInput : true
            })
        }
        this.setState({
            inputDestinationData : value
        })
    }
 
    ClearInputs = () => {
    this.inputDestination.value = "";
    this.inputAmount.value = "";
    }

    Transfer = () => {

        console.log(this.state.balance) 

        let {balance} = this.state

    

        let account = balance.find( (account) => {
            return account.account == this.state.acountSelected
        })

        if (parseFloat(this.state.inputAmountData) < 10000 && parseFloat(this.state.inputAmountData) < account.balance.value && this.state.acountSelected != "") {
            for (let account of balance ){
                if( account.account == this.state.acountSelected ){
                    console.log("entro a actualizar el primero")
                    account.balance.value = parseFloat(account.balance.value) - parseFloat(this.state.inputAmountData)
                    
                }
                else if (account.account == this.state.inputDestinationData){
                    console.log("entro a actualizar el segundo")
                    account.balance.value = parseFloat(account.balance.value) + parseFloat(this.state.inputAmountData)
                }
            }

            this.setState({
                balance : balance
            })
            console.log(balance)
        }
        else{
            alert("por favor revisa las cuentas")
        }
    }

    render () {

        return(
            <div className="newTransferContainer">
                <div className="title">
                    Create new transfer
                </div>
                <div className="originAccount">
                    <div className="originAccountTitle">
                        Select origin account
                    </div>
                    <div className="originAccountInput">
                        <select name="acounts" id="1" onChange={(e) => this.setState({ acountSelected : e.target.value })}>
                            {this.state.options}
                        </select>
                    </div>
                </div>
                <div className="destination">
                    <div className="destinationTitle">
                        Destination account
                    </div>
                    <div className="destinationInput">
                        <input type="text" ref={el => this.inputDestination = el} onChange={ (event) => this.updateDestinationInput(event.target.value)}/>
                    </div>
                </div>
                <div className="amount">
                    <div className="amountTitle">
                        Amount
                    </div>
                    <div className="amountInput">
                        <input type="text" ref={el => this.inputAmount = el} onChange={(event)=>{this.state.inputAmountData = event.target.value}}/>
                    </div>
                </div>
                <div className="buttons">
                    <div className="Transfer" onClick = {this.Transfer} disabled = {this.state.validDestinationInput}> 
                        Transfer
                    </div>
                    <div className="Cancel" onClick = {this.ClearInputs} >
                        Cancel
                    </div>
                </div>
            </div>
        )
    }

}