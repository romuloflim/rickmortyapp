import React, { Component } from 'react';

import Modal from './Modal';

class Pagin extends Component {
    constructor() {
        super();
        this.state = {
            index: 1,
            isOpen: false,
        }

        this.clkNext = (e) => {
            e.preventDefault();
            if (this.state.index < this.props.characters.length / 8) {
                this.setState({index: this.state.index + 1})
            }
        };

        this.clkPrev = (e) => {
            e.preventDefault();
            if (this.state.index > 1) {
                this.setState({index: this.state.index - 1})
            }
        };

        this.toggleModal = (e) => {
            this.setState({
              isOpen: !this.state.isOpen
            });
          }

          this.onClkDet = (ev) => {
            console.log(ev.target)
            this.setState({
                isOpen: !this.state.isOpen
              });
          }


    }

    render() {

        const cards = listCards(this.props.characters, this.state.index, 8).map ((item, i) => ( //array.map
            <div className="mdl-cell mdl-cell--3-col">
                <div className="mdl-card mdl-shadow--2dp demonst-card">
                    <div className="mdl-card__title" style={{background:"url('"+item.image+"')"}} >
                        <h2 className="mdl-card__title-text">{ item.name }</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <table className="md-table-characs">
                            <tr><th>ID</th><td>{ item.id }</td></tr>
                            <tr><th>Species</th><td>{ item.species }</td></tr>
                            <tr><th>Status</th><td>{ item.status }</td></tr>
                        </table>
                    </div>
                    <div className="mdl-card--border mdl-card__actions">
                        <button name="oi" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent" >Details</button>
                    </div>
                </div>
            </div>
        ));

        if (Math.ceil(this.props.characters.length / 8) < this.state.index && this.state.index > 1) {
            this.setState({index: 1})
        }

        if (this.props.characters.length <= 8){
            if (this.state.index > 1){
                this.setState({index: 1})
            }
            return (
                <div>
                    <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                        `Infos`
                    </Modal>
                <div className="mdl-grid md-position">
                    { cards }
                </div>
                </div>
            );
        }

        return (
            <div>
            <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            `Infos`
            </Modal>
                <div className="mdl-grid md-position">
                    { cards }
                </div>
                <div className="">
                    <div className="md-line">
                    <div>
                        <button onClick={this.clkPrev} className="md-button-bf mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab mdl-button--primary" ><i className="material-icons" >chevron_left</i></button>
                        <button onClick={this.clkNext} className="md-button-bf mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--fab mdl-button--mini-fab mdl-button--primary" ><i className="material-icons" >chevron_right</i></button>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

function listCards(array, pageActual, limitItems) {
    let result = [];
    let totalPage = Math.ceil( array.length / limitItems );
    let count = ( pageActual * limitItems ) - limitItems;
    let delimiter = count + limitItems;

    if(pageActual <= totalPage){
        for(let i=count; i<delimiter; i++){
            if(array[i] != null){
                result.push(array[i]);
            }
            count++;
        }
    }

    return result;

};

export default Pagin;