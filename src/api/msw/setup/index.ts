async function initMocks() {
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.NODE_ENV === 'test'
  ) {
    if (typeof window === 'undefined') {
      const { server } = await import('../setup/node');
      server.listen({ onUnhandledRequest: 'bypass' });
    } else {
      const { worker } = await import('../setup/browser');
      worker.start({ onUnhandledRequest: 'bypass' });
    }
  }
}

initMocks().catch((error) => {
  console.error('Failed to start MSW', error);
});

export {};
