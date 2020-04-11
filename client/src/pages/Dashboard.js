import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTransactions } from '../store/actions/transactionActions'
import CreateTransaction from '../transactions/CreateTransaction'

class Dashboard extends Component {

    state = {
        createModalOpen: false
    }


    openCreateModal = () => {
        this.setState({
            createModalOpen: true
        })
    }


    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        })
    }


    componentDidMount() {
        this.props.loadTransactions()
    }

    
    render() {
        let { auth, transactions } = this.props
        return (
            <>
                <div className="row">
                    <div className="col-md-8 ">
                        <h1>Welcome to {auth.user.name}</h1>
                        <p>Your email is {auth.user.email}</p>

                        <br />

                        <button className="btn btn-primary" 
                        onClick={this.openCreateModal}
                        >Create New Transaction</button>
                        <CreateTransaction
                            isOpen={this.state.createModalOpen}
                            close={this.closeCreateModal} />
                        <h1>Transactions: </h1>
                        <ul className="list-group">
                            {
                                transactions.map(transaction => (
                                    <li key={transaction._id} className="list-group-item">
                                        <p>
                                            <strong>Type:</strong> {transaction.type}
                                        </p>
                                        <p>
                                            <strong>  Amount:</strong> {transaction.amount}
                                        </p>

                                        <p>
                                            <strong>  Short Notes:</strong> {transaction.note}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
    transactions: state.transactions
})


export default connect(mapStateToProps, { loadTransactions })(Dashboard)