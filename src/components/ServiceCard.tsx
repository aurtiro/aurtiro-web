import { type LucideIcon } from 'lucide-react';
import { COLORS } from '../lib/colors';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className={`bg-white p-6 border ${COLORS.border} hover:border-[#0366d6] transition group rounded-sm`}>
    <Icon className={`w-8 h-8 ${COLORS.accent} mb-4 group-hover:scale-110 transition`} />
    <h3 className="text-lg font-bold mb-2 uppercase">{title}</h3>
    <p className={`${COLORS.muted} text-sm leading-relaxed`}>{description}</p>
  </div>
);

export default ServiceCard;
