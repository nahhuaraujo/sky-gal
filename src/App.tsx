import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Navbar, Footer } from './components';
import { About, Gallery, Home, NotFound } from './pages';
import store from './redux/store';
import { PublicRoutes } from './routes';

const App = () => {
  return (
    <S.App>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.GALLERY} element={<Gallery />} />
            <Route path={PublicRoutes.ABOUT} element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </S.App>
  );
};

export default App;