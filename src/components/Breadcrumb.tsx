import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  path?: string; // If no path, it's the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path && { item: `https://thinkments.com${item.path}` }),
    })),
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-[#F8F9FA] border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={index} className="flex items-center gap-2">
                  {!isLast && item.path ? (
                    <>
                      <Link
                        to={item.path}
                        className="text-gray-600 hover:text-[#00B4D8] transition-colors"
                      >
                        {item.name}
                      </Link>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </>
                  ) : (
                    <span className="text-gray-900 font-medium">{item.name}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
