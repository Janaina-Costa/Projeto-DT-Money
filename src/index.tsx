import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import{ App } from './App';

createServer({
  models:{
    transaction:Model
  },
  seeds(server){
    server.db.loadData({ 
      transactions:[
        { 
          id:1,
          title:'Freelanse Website',
          type:'deposit',
          amounth:3000,
          category:'Desenvolvimento',
          createAt:'2022-02-26 19:00:00',
        },
        { 
          id:2,
          title:'Livros',
          type:'withdrow',
          amounth:450.00,
          category:'Desenvolvimento',
          createAt:'2022-02-28 1:00:00',
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request)=>{
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction',data )
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


