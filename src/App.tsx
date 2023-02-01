import { Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Footer, Navbar } from './components';
import { useScrollToTop } from './hooks';
import { About, Contact, Gallery, Home, NotFound, PhotoView } from './pages';
import { PublicRoutes } from './routes';

const App = () => {
  useScrollToTop();
  return (
    <S.App>
      <Navbar />
      <S.Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={PublicRoutes.GALLERY} element={<Gallery />} />
          <Route path={`${PublicRoutes.GALLERY}/:id`} element={<PhotoView />} />
          <Route path={PublicRoutes.ABOUT} element={<About />} />
          <Route path={PublicRoutes.CONTACT} element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </S.Main>
      <Footer />
    </S.App>
  );
};

export default App;
