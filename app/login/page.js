'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/news');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p style={{ textAlign: 'center', marginTop: 50 }}>Loading...</p>;
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '150px auto',
        padding: '40px 30px',
        backgroundColor: '#fff',
        borderRadius: 16,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: 'center',
        color: '#333',
      }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: '2.5rem',
          marginBottom: 24,
          color: '#111',
        }}
      >
        Login to Intan News
      </h1>

      <button
        onClick={() => signIn('google')}
        style={{
          width: '100%',
          padding: '14px 0',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.4)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#115293')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1976d2')}
      >
        Login with Google
      </button>
    </div>
  );
}
