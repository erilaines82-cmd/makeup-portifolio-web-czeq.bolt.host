import About from '@/components/About';

type AboutPageProps = {
  paragraph1?: string;
  paragraph2?: string;
};

export default function AboutPage({ paragraph1, paragraph2 }: AboutPageProps) {
  return (
    <div className="pt-28">
      <About paragraph1={paragraph1} paragraph2={paragraph2} />
    </div>
  );
}
