async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('../setup/node');
    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = await import('../setup/browser');
    worker.start({ onUnhandledRequest: 'bypass' });
  }
}

initMocks();

export {};
