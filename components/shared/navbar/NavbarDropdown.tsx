"use client";

import React from "react";
import { TopItem } from "../../../lib/types/navigation";
import NavbarDropdownColumn from "../../NavbarDropdownColumn";
import NavbarExtraCard from "../../NavbarExtraCard";

const ExtraCards: React.FC<{ label: string; onLinkClick?: () => void }> = ({
  label,
  onLinkClick,
}) => {
  if (label === "Co je PSCoat?") {
    return <NavbarExtraCard type="co-je-pscoat" onLinkClick={onLinkClick} />;
  }
  if (label === "Produkty") {
    return <NavbarExtraCard type="produkty" onLinkClick={onLinkClick} />;
  }
  if (label === "O nás") {
    return <NavbarExtraCard type="o-nas" onLinkClick={onLinkClick} />;
  }
  return null;
};

interface NavbarDropdownProps {
  current: TopItem;
  onLinkClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function NavbarDropdown({
  current,
  onLinkClick,
  onMouseEnter,
  onMouseLeave,
}: NavbarDropdownProps) {
  return (
    <div
      className="fixed left-0 right-0 top-16 bg-white/20 backdrop-blur-xl border-t border-gray-200 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.25)] z-40"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop layout with vertical dividers and equal-height columns */}
        <div>
          {current.label === "Co je PSCoat?" && (
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:divide-x lg:divide-gray-200 items-stretch">
              {/* Column 1 - First group */}
              {current.groups && current.groups[0] && (
                <div className="lg:col-span-4 lg:px-6">
                  <NavbarDropdownColumn
                    group={current.groups[0]}
                    onLinkClick={onLinkClick}
                  />
                </div>
              )}
              {/* Column 2 - Second group */}
              {current.groups && current.groups[1] && (
                <div className="lg:col-span-4 lg:px-6">
                  <NavbarDropdownColumn
                    group={current.groups[1]}
                    onLinkClick={onLinkClick}
                  />
                </div>
              )}
              {/* Column 3 - Card */}
              <div className="lg:col-span-4 lg:px-6 h-full flex items-start">
                <div className="w-full">
                  <ExtraCards label={current.label} onLinkClick={onLinkClick} />
                </div>
              </div>
            </div>
          )}

          {["Produkty", "O nás"].includes(current.label) && (
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-8 lg:divide-x lg:divide-gray-200 items-stretch">
              {/* Subitems Column - col-4 */}
              {current.groups && current.groups[0] && (
                <div className="lg:col-span-4 lg:px-6">
                  <NavbarDropdownColumn
                    group={current.groups[0]}
                    onLinkClick={onLinkClick}
                  />
                </div>
              )}
              {/* Card Column - col-8 */}
              <div className="lg:col-span-8 lg:px-6 h-full">
                <div className="h-full">
                  <ExtraCards label={current.label} onLinkClick={onLinkClick} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile/Tablet layout */}
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-10">
          {current.groups &&
            current.groups.map((group) => (
              <div key={group.title}>
                <div className="text-xs font-semibold text-[#0180ae] tracking-widest mb-3 uppercase">
                  {group.title}
                </div>
                <ul className="space-y-2">
                  {group.items.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group flex items-start gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700 hover:text-[#0180ae] transition-colors"
                      >
                        <span className="flex-1">
                          <span className="flex items-center gap-2 text-sm font-semibold">
                            {link.label}
                          </span>
                          {link.desc && (
                            <span className="block text-xs text-gray-500 mt-0.5">
                              {link.desc}
                            </span>
                          )}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <ExtraCards label={current.label} onLinkClick={onLinkClick} />
        </div>
      </div>
    </div>
  );
}
