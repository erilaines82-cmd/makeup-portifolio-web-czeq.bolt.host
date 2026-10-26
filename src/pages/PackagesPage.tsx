import Packages from '@/components/Packages';
import type { ServicePackage } from '@/data';

type PackagesPageProps = {
  packages: ServicePackage[];
};

export default function PackagesPage({ packages }: PackagesPageProps) {
  return (
    <div className="pt-28">
      <Packages packages={packages} />
    </div>
  );
}
