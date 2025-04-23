import { Suspense, lazy } from 'react';
const Cadastro = lazy(() => import('./(auth)/cadastro/page'));

export default function AuthRedirect() {
  return (
    <Suspense
      fallback={
        <div>
          <p>loading...(provisório)</p>
        </div>
      }
    >
      <Cadastro />
    </Suspense>
  );
}
