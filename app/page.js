'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    } else if (status === "authenticated") {
      router.push('/news');
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <p>Loading session...</p>
      </div>
    );
  }

  if (!session) {
  
    return null;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {session.user?.name || 'User'}!</h1>
      <p>This is the homepage/dashboard.</p>
    </div>
  );
}
