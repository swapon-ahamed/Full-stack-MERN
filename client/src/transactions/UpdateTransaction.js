import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal';
import { updateTransaction } from '../store/actions/transactionActions'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '500px'
    }
};

class UpdateTransaction extends Component {

    state = {
        amount: 0,
        note: ""
    }

    componentDidMount(){
        this.setState({
            amount: this.props.transaction.amount,
            note: this.props.transaction.note

        })
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    changeHandeler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHnadaler = (event) => {
        event.preventDefault();
        this.props.updateTransaction(this.props.transaction._id, this.state);
        this.props.close()
    }

    render() {
        let { amount, type, note } = this.state

        return (

            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    onRequestClose={this.props.close}
                    style={customStyles}
                    contentLabel="Create New Transaction"
                >
                    <h2>Update New Transaction</h2>
                    <form onSubmit={this.submitHnadaler}>
                        <div className="form-group row">
                            <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
                            <div className="col-sm-10">
                                <input type="number"
                                    name="amount"
                                    className="form-control"
                                    id="amount" 
                                    value={amount}
                                    onChange={this.changeHandeler}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="Note" className="col-sm-2 col-form-label">Notes</label>
                            <div className="col-sm-10">
                                <textarea
                                    name="note"
                                    className="form-control"
                                    id="amount" value={note}
                                    onChange={this.changeHandeler}
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default connect(null, { updateTransaction })(UpdateTransaction)