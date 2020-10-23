import React from 'react'
import './App.css'
import Form from './Components/Form'
import {BrowserRouter, Route} from 'react-router-dom'
import AdminDashboard from './Components/AdminDashBoard'



function App(){
    return(
        <BrowserRouter>
            <div>
                <h1>User Job Application</h1>
              
           
           
           <Route path="/" component={Form} exact={true}/>
           <Route path="/admin" component={AdminDashboard}/>
            </div>
        </BrowserRouter>
    )

}
export default App