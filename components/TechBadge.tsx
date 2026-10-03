import React from 'react';
import { FaJava, FaDatabase, FaServer, FaAws, FaCloud } from 'react-icons/fa';
import { SiSpringboot, SiSpringsecurity, SiReact, SiMysql, SiRedis, SiNginx, SiTypescript, SiJavascript, SiHtml5, SiApachekafka, SiHibernate, SiApachemaven, SiGit } from 'react-icons/si';
import { LucideIcon } from 'lucide-react';
import { Settings } from 'lucide-react';

export const TechBadge = ({ tech, className = '' }: { tech: string, className?: string }) => {
  let Icon: any = null;
  let color = '';
  const name = tech.toLowerCase();
  
  if (name.includes('javascript')) { Icon = SiJavascript; color = '#F7DF1E'; }
  else if (name.includes('java')) { Icon = FaJava; color = '#ED8B00'; }
  else if (name.includes('spring boot')) { Icon = SiSpringboot; color = '#6db33f'; }
  else if (name.includes('spring security')) { Icon = SiSpringsecurity; color = '#6db33f'; }
  else if (name.includes('react')) { Icon = SiReact; color = '#61DAFB'; }
  else if (name.includes('mysql')) { Icon = SiMysql; color = '#4479A1'; }
  else if (name.includes('sql server')) { Icon = FaDatabase; color = '#CC292B'; }
  else if (name.includes('redis')) { Icon = SiRedis; color = '#DC382D'; }
  else if (name.includes('aws')) { Icon = FaAws; color = '#FF9900'; }
  else if (name.includes('nginx')) { Icon = SiNginx; color = '#009639'; }
  else if (name.includes('ibm')) { Icon = FaCloud; color = '#052FAD'; }
  else if (name.includes('typescript')) { Icon = SiTypescript; color = '#3178C6'; }
  else if (name.includes('html')) { Icon = SiHtml5; color = '#E34F26'; }
  else if (name.includes('kafka')) { Icon = SiApachekafka; color = '#231F20'; }
  else if (name.includes('hibernate')) { Icon = SiHibernate; color = '#59666C'; }
  else if (name.includes('maven')) { Icon = SiApachemaven; color = '#C71A36'; }
  else if (name.includes('git')) { Icon = SiGit; color = '#F05032'; }
  else if (name.includes('sql')) { Icon = FaDatabase; color = '#336791'; }
  else if (name.includes('architecture') || name.includes('design') || name.includes('workflow')) { Icon = Settings; color = '#6B7280'; }
  else if (name.includes('integration')) { Icon = FaServer; color = '#6B7280'; }

  // Clean up versions and extensions for display
  const displayName = tech.replace(' 17', '').replace('.js', '');

  return (
    <span className={`flex items-center gap-1.5 px-3 py-1.5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-gray-700 text-xs font-bold rounded-lg border border-gray-100 hover:border-blue-200 hover:text-gray-900 hover:-translate-y-0.5 transition-all duration-300 ${className}`}>
      {Icon && <Icon className="w-4 h-4" style={{ color }} />}
      <span>{displayName}</span>
    </span>
  );
};
