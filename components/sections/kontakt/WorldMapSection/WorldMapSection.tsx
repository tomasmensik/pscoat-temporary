"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { useI18n } from "@/lib/contexts/I18nContext";
import { offices, getFlagUrl, Office } from "./data";

const MapComposableMap = ComposableMap as any;
const MapZoomableGroup = ZoomableGroup as any;
const MapGeographies = Geographies as any;
const MapGeography = Geography as any;
const MapMarker = Marker as any;

interface WorldMapSectionProps {
  selectedCountry: string | null;
  onCountrySelect: (countryCode: string | null) => void;
  zoomLevel: number;
  mapCenter: [number, number];
  mapZoom: number;
  onMapMove: (zoom: number, center: [number, number]) => void;
}

export default function WorldMapSection({
  selectedCountry,
  onCountrySelect,
  zoomLevel,
  mapCenter,
  mapZoom,
  onMapMove,
}: WorldMapSectionProps) {
  const { t } = useI18n();

  const getOfficesForCountry = (countryCode: string) => {
    return offices.filter((office) =>
      office.coordinates.some((coord) => coord.country === countryCode)
    );
  };

  const handleMarkerClick = (
    countryCode: string,
    coords: [number, number]
  ) => {
    const isDesktop = typeof window !== "undefined" && window.matchMedia('(min-width: 1024px)').matches;
    onCountrySelect(selectedCountry === countryCode ? null : countryCode);
    onMapMove(isDesktop ? mapZoom : 3, coords);
  };

  const countryOffices = selectedCountry
    ? getOfficesForCountry(selectedCountry)
    : [];
  const countryName =
    selectedCountry
      ? countryOffices[0]?.flags.find((f) => f.code === selectedCountry)?.name ||
        selectedCountry ||
        ""
      : "";

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16 relative">
      <div className="w-full h-96">
        <MapComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 180,
            center: [0, 75],
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <MapZoomableGroup
            zoom={mapZoom}
            center={mapCenter}
            onMoveEnd={({ zoom, coordinates }: any) => {
              const validCoordinates: [number, number] =
                Array.isArray(coordinates) &&
                coordinates.length === 2 &&
                typeof coordinates[0] === "number" &&
                typeof coordinates[1] === "number"
                  ? [coordinates[0], coordinates[1]]
                  : mapCenter;
              onMapMove(zoom, validCoordinates);
            }}
          >
            <MapGeographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
              {({ geographies }: any) =>
                geographies.map((geo: any) => (
                  <MapGeography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#f3f4f6"
                    stroke="#e5e7eb"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </MapGeographies>
            {offices.flatMap((office, officeIndex) =>
              office.coordinates.map((coord, coordIndex) => {
                const isCountrySelected = selectedCountry === coord.country;
                const baseRadius = isCountrySelected ? 10 : 6;
                const adjustedRadius = Math.max(
                  2,
                  baseRadius / Math.sqrt(zoomLevel)
                );

                return (
                  <MapMarker
                    key={`${officeIndex}-${coordIndex}`}
                    coordinates={coord.coords}
                  >
                    <circle
                      r={adjustedRadius}
                      fill={isCountrySelected ? "#00a4d6" : "#0180ae"}
                      stroke={isCountrySelected ? "#00a4d6" : "#fff"}
                      strokeWidth={Math.max(1, 2 / Math.sqrt(zoomLevel))}
                      className="transition-all duration-300 cursor-pointer"
                      onClick={() =>
                        handleMarkerClick(
                          coord.country,
                          coord.coords as [number, number]
                        )
                      }
                    />
                  </MapMarker>
                );
              })
            )}
          </MapZoomableGroup>
        </MapComposableMap>
      </div>

      {selectedCountry !== null && (
        <div className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-200 max-w-lg z-10 animate-in fade-in duration-200">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={getFlagUrl(selectedCountry)}
                alt={countryName}
                width={32}
                height={20}
                className="object-cover rounded-sm border border-gray-200"
              />
              <h3 className="font-bold text-gray-900 text-base">{countryName}</h3>
              <span className="text-gray-500 text-sm">
                ({countryOffices.length}{" "}
                {countryOffices.length === 1
                  ? t("contact.office")
                  : t("contact.offices")})
              </span>
            </div>
            <button
              onClick={() => onCountrySelect(null)}
              className="ml-4 text-gray-400 hover:text-gray-600"
              aria-label={t("contact.closeDetail")}
            >
              ×
            </button>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto">
            {countryOffices.map((office, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {office.company}
                </h4>
                <p className="text-[#0180ae] text-xs mb-2">{office.name}</p>
                {office.address && (
                  <p className="text-gray-600 text-xs mb-1 leading-relaxed">
                    📍 {office.address}
                  </p>
                )}
                {office.phone && (
                  <p className="text-gray-600 text-xs mb-1">📞 {office.phone}</p>
                )}
                {office.email && (
                  <p className="text-gray-600 text-xs mb-1">✉️ {office.email}</p>
                )}
                {office.contact && (
                  <p className="text-gray-600 text-xs">👤 {office.contact}</p>
                )}
                {office.contacts && office.contacts.length > 0 && (
                  <div className="mt-1">
                    {office.contacts
                      .slice(0, 2)
                      .map((contact, contactIndex) => (
                        <p key={contactIndex} className="text-gray-600 text-xs">
                          👤 {contact.name} - {contact.phone}
                        </p>
                      ))}
                  </div>
                )}
                {office.note && (
                  <p className="text-gray-500 text-xs italic mt-1">{office.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

