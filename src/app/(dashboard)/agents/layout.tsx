import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Agent Conversation | Tynk Tech',
  description: 'Interactive agent conversation powered by Tynk Tech',
  openGraph: {
    title: 'Agent Conversation | Tynk Tech',
    description: 'Interactive agent conversation powered by Tynk Tech',
    type: 'website',
  },
};

export default async function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
