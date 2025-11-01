"use client";

import React from "react";
import { offices, getFlagUrl, Office } from "../WorldMapSection/data";

export default function OfficesGridSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {offices.map((office, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Flags */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {office.flags.map((flag, flagIndex) => (
              <img
                key={flagIndex}
                src={getFlagUrl(flag.code)}
                alt={flag.name}
                title={flag.name}
                className="w-8 h-6 object-cover rounded border border-gray-200"
              />
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2">{office.name}</h3>

          {/* Company */}
          <p className="text-[#0180ae] font-semibold mb-3">{office.company}</p>

          {/* Address */}
          {office.address && (
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {office.address}
            </p>
          )}

          {/* Note */}
          {office.note && (
            <p className="text-gray-500 text-sm italic mb-3">{office.note}</p>
          )}

          {/* Contacts */}
          {office.contacts ? (
            <div className="space-y-3">
              {office.contacts.map((contact, contactIndex) => (
                <div
                  key={contactIndex}
                  className="border-l-2 border-[#0180ae] pl-3"
                >
                  <p className="font-medium text-gray-900 text-sm">{contact.name}</p>
                  <p className="text-gray-600 text-sm">{contact.phone}</p>
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[#0180ae] hover:underline text-sm"
                    >
                      {contact.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {office.contact && (
                <p className="font-medium text-gray-900 text-sm">{office.contact}</p>
              )}
              {office.phone && (
                <p className="text-gray-600 text-sm">{office.phone}</p>
              )}
              {office.email && (
                <div className="space-y-1">
                  {office.email.split(", ").map((email, emailIndex) => (
                    <a
                      key={emailIndex}
                      href={`mailto:${email.trim()}`}
                      className="block text-[#0180ae] hover:underline text-sm"
                    >
                      {email.trim()}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

