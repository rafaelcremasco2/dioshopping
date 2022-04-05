import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import Header from './components/Header';


class App extends Component {
  constructor(props){
    super(props);
    const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))
    if(localCart !== null) {
      store.dispatch({type: 'CHANGE_CART', localCart})
    }     
  }

    
  render(){    
    document.title = 'Dio Shopping';
    
    const background = {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/soccerbg3.jpg'})`,
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center'
    };

    return(
      <Provider store={store}>
        <Container maxWidth="xl" style={background}>
          <Router>
            <Header />
            <Routes />
          </Router>
        </Container> 
      </Provider>
    )
  }
}

export default App;
