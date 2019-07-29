import {html, render} from "lit-html/lit-html.js";
import '@vaadin/vaadin-grid/vaadin-grid.js';
import Store from './store.js';
import Services from './services.js'

export default class IJug extends HTMLElement{
    constructor(){
        super();
        this.store = new Store('users');
        this.services = new Services();
    }
    connectedCallback(){
        this.services.getServices('http://localhost:8080/spa/resources/user')
        .then(data => {
            this.store.storager(JSON.stringify(data)); 
         });     
        this.callServer();     
        this.loadGrid();
    }        

   callServer(){
        const jugName = this.getAttribute('jug');    
        this.store.load();   
        const templet = html `
        <vaadin-grid>
            <vaadin-grid-column path="id" header="Código"></vaadin-grid-column>
            <vaadin-grid-column path="firstName" header="Nome"></vaadin-grid-column>
            <vaadin-grid-column path="lastName" header="Sobrenome"></vaadin-grid-column>
            <vaadin-grid-column path="email"header="E mail"></vaadin-grid-column>
            <vaadin-grid-column path="dataNascimento"header="Data Nascimento">Data Nascimento</vaadin-grid-column>
        </vaadin-grid>`;
        render(templet,this);
    }
    clicked(){
        let date = new Date();
        console.log('clicked!');
        let data = {firstName:"Pedro",
        lastName: "da Silva",
        email: "pedro_silva@gmail.com",
        dataNascimento:date};
        //this.service.postServices(`http://localhost:8080/spa/resources/user`,data);
        
    }

    loadGrid(){
        customElements.whenDefined('vaadin-grid').then(_ => {
            let grid = this.querySelector('vaadin-grid');
            grid.items = JSON.parse(this.store.load());
        });
    }
}customElements.define('i-jug', IJug);