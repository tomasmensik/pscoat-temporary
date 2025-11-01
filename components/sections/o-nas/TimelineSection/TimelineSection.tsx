"use client";

import React from "react";
import { useI18n } from "@/lib/contexts/I18nContext";
import { CalendarIcon, ChartIcon, BuildingIcon, CheckIcon, AwardIcon } from "@/components/icons";

interface TimelineEvent {
  year: string;
  key: string;
  icon: "calendar" | "chart" | "building" | "check" | "award";
  position: "left" | "right";
  isSpecial?: boolean;
}

const events: TimelineEvent[] = [
  { year: "2007", key: "milestone2007", icon: "calendar", position: "left" },
  { year: "2009", key: "milestone2009", icon: "chart", position: "right" },
  { year: "2011", key: "milestone2011", icon: "building", position: "left" },
  { year: "2013", key: "milestone2013", icon: "check", position: "right" },
  {
    year: "2023",
    key: "milestone2023",
    icon: "award",
    position: "left",
    isSpecial: true,
  },
];

const iconComponents = {
  calendar: CalendarIcon,
  chart: ChartIcon,
  building: BuildingIcon,
  check: CheckIcon,
  award: AwardIcon,
};

export default function TimelineSection() {
  const { t } = useI18n();

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
        {t("about.milestones")}
      </h2>
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#0180ae] to-[#00a4d6]"></div>

        <div className="space-y-8">
          {events.map((event, index) => {
            const isLeft = event.position === "left";
            const IconComponent = iconComponents[event.icon];

            return (
              <div
                key={event.year}
                className="flex flex-col md:flex-row items-center gap-4"
              >
                {isLeft ? (
                  <>
                    <div className="w-full md:w-5/12 flex justify-end">
                      <div
                        className={`group relative rounded-xl p-5 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 w-full max-w-md ${
                          event.isSpecial
                            ? "bg-gradient-to-br from-[#0180ae] to-[#00a4d6]"
                            : "bg-white"
                        }`}
                      >
                        {!event.isSpecial && (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        )}
                        {event.isSpecial && (
                          <div className="absolute inset-0 bg-white/10 backdrop-blur opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        )}
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10 ${
                            event.isSpecial
                              ? "bg-white/20 backdrop-blur"
                              : "bg-gradient-to-br from-[#0180ae] to-[#00a4d6]"
                          }`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div
                          className={`text-2xl font-bold mb-1 relative z-10 ${
                            event.isSpecial ? "text-white" : "text-[#0180ae]"
                          }`}
                        >
                          {event.year}
                        </div>
                        <p
                          className={`text-sm relative z-10 ${
                            event.isSpecial ? "text-white/90" : "text-gray-600"
                          }`}
                        >
                          {t(`about.${event.key}`)}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block w-2/12"></div>
                    <div className="w-full md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-5/12"></div>
                    <div className="hidden md:block w-2/12"></div>
                    <div className="w-full md:w-5/12 flex justify-start">
                      <div className="group relative bg-white rounded-xl p-5 overflow-hidden border border-gray-200/50 hover:border-[#0180ae]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#0180ae]/10 w-full max-w-md">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0180ae] to-[#00a4d6] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0180ae] to-[#00a4d6] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-[#0180ae] mb-1 relative z-10">
                          {event.year}
                        </div>
                        <p className="text-sm text-gray-600 relative z-10">
                          {t(`about.${event.key}`)}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

