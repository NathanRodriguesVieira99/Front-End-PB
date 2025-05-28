'use client';
import { Suspense, lazy } from 'react';

const LoginForm = lazy(() => import('./components/loginForm'));
export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-store-darker font-main">
      <Suspense
        fallback={
          <div>
            <p className="text-2xl text-text-main">loading...</p>
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
