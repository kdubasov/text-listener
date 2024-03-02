import Router from '@/app/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime/runtime';

const Providers = () => {
  return (
    <Suspense fallback={'Загрузка...'}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
};

export default Providers;
