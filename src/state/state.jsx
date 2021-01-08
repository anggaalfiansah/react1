import React, { Component } from 'react';

class Kursus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paket : "Web Developer",
            materi : "ReactJS",
            deskripsi : "Belajar ReactJS",
            harga : 200000
        }
    }
    
    render() {
        return (
            <div>
                <h1>Nama Paket : {this.state.paket}</h1>
                <h1>Materi : {this.state.materi}</h1>
                <h1>Deskripsi : {this.state.deskripsi}</h1>
                <h1>Harga : {this.state.harga}</h1>
            </div>
        );
    }
}

export default Kursus;