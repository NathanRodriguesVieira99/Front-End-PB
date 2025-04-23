'use client';
import { Suspense, lazy } from 'react';

const LoginForm = lazy(() => import('./components/loginForm'));
export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-store-darker font-main">
      <Suspense
        fallback={
          <div>
            <p>loading...(provisório)</p>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
