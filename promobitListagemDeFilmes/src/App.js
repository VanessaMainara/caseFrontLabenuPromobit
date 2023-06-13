import Header from './components/Header/Header';
import Router from './routes/Router'
import Provider from './Global/GlobalState';
import { GlobalStyle } from './Global/GlobalStyle'

export default function App() {

  return (

    <Provider>
      <Header/>
      <Router/>
      <GlobalStyle/>
    </Provider>

  )
}
