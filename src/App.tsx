import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Footer, Navbar } from './components';
import { TopScrollHOC } from './hoc';
import { About, Contact, Gallery, Home, NotFound, PhotoView } from './pages';
import store from './redux/store';
import { PublicRoutes } from './routes';

const App = () => {
  return (
    <S.App>
      <Provider store={store}>
        <Router>
          <Navbar />
          <TopScrollHOC>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path={PublicRoutes.GALLERY} element={<Gallery />} />
              <Route path={`${PublicRoutes.GALLERY}/:id`} element={<PhotoView />} />
              <Route path={PublicRoutes.ABOUT} element={<About />} />
              <Route path={PublicRoutes.CONTACT} element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </TopScrollHOC>
          <Footer />
        </Router>
      </Provider>
    </S.App>
  );
};

export default App;
