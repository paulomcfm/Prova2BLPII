import Usuario from "./templates/Usuario.jsx";
import Cadastrar from "./templates/Cadastrar.jsx";
import store from './redux/store.js';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
    <Usuario>

</Usuario>

    <Cadastrar>
        
        </Cadastrar>
      
      </Provider>
    </>
    

  );
}

export default App;
