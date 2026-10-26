import Contact from '@/components/Contact';

type ContactPageProps = {
  address?: string;
};

export default function ContactPage({ address }: ContactPageProps) {
  return (
    <div className="pt-28">
      <Contact address={address} />
    </div>
  );
}
