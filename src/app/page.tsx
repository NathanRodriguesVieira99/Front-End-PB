import { Suspense, lazy } from 'react';
const Cadastro = lazy(() => import('./(auth)/cadastro/page'));

export default function AuthRedirect() {
  return (
    <Suspense
      fallback={
        <div>
          <p className="text-2xl text-text-main">loading...</p>
        </div>
      }
    >
      <Cadastro />
    </Suspense>
  );
}
