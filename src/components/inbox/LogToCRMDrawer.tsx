import React, { useState } from "react";
import { cn } from "../../lib/utils";
import svgPaths from "../../imports/svg-k0y6ciezy6";
import { Conversation } from "./data";

// Icons for the LogToCRMDrawer
const CRMIcons = {
  Xmark: () => (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path d={svgPaths.p388d5580} fill="#7A7D7D" />
      </svg>
    </div>
  ),
  Channel: () => (
    <div className="h-[12px] relative shrink-0 w-[11.947px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_38_4251_crm)">
          <path
            clipRule="evenodd"
            d={svgPaths.p1126f100}
            fill="#3DA067"
            fillRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_38_4251_crm">
            <rect fill="white" height="12" width="11.9472" />
          </clipPath>
        </defs>
      </svg>
    </div>
  ),
  CircleInfo: () => (
    <div className="relative shrink-0 size-[11.947px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 12 12"
      >
        <path d={svgPaths.p189fe900} fill="#5E6060" />
      </svg>
    </div>
  ),
  Search: () => (
    <div className="relative shrink-0 size-[14px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 14 14"
      >
        <g clipPath="url(#clip0_2_5067_crm)">
          <path d={svgPaths.p39de7c00} fill="#7A8890" />
        </g>
        <defs>
          <clipPath id="clip0_2_5067_crm">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  ),
  UserPlus: () => (
    <div className="relative shrink-0 size-[16px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 16 16"
      >
        <g clipPath="url(#clip0_38_4245_crm)">
          <path d={svgPaths.p2868770} fill="#0320F5" />
        </g>
        <defs>
          <clipPath id="clip0_38_4245_crm">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  ),
  CheckSmall: () => (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPaths.p1f089400} fill="#F9FAFB" />
      </svg>
    </div>
  ),
};

interface LogToCRMDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  conversation: Conversation;
}

const MOCK_CONTACTS = [
  {
    id: "1",
    name: "Aggie Kamau",
    avatarColor: "#bce5f3",
    avatarText: "A",
  },
  {
    id: "2",
    name: "Amanda Wakio",
    avatarColor: "#b4bbee",
    avatarText: "A",
    checked: true,
  },
  {
    id: "3",
    name: "Jacqueline Wandoe",
    avatarColor: "#80d4eb",
    avatarText: "J",
  },
  {
    id: "4",
    name: "Jane Kamau",
    avatarColor: "#e29a9a",
    avatarText: "J",
  },
  {
    id: "5",
    name: "Joan Kibe",
    avatarColor: "#b6b6c3",
    avatarText: "J",
  },
  {
    id: "6",
    name: "Nikki Kimeu",
    avatarColor: "#e78f8f",
    avatarText: "N",
  },
  {
    id: "7",
    name: "Pauline Nyaboke",
    avatarColor: "#bce5f3",
    avatarText: "P",
  },
  {
    id: "8",
    name: "Samuel Baya",
    avatarColor: "#ebdb80",
    avatarText: "S",
  },
  {
    id: "9",
    name: "Wallace Mutuku",
    avatarColor: "#e78fd4",
    avatarText: "W",
  },
];

export function LogToCRMDrawer({
  isOpen,
  onClose,
  conversation,
}: LogToCRMDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60" onClick={onClose}>
      <div 
        className="absolute top-[16px] right-[16px] bottom-[16px] w-[400px] bg-white rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden border border-[#e3e3e4]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
      <div className="h-[64px] shrink-0 border-b border-[#e3e3e4] flex items-center justify-between px-4 bg-white">
        <p className="font-['Instrument_Sans'] font-semibold text-[#121212] text-[20px] tracking-[0.1px]">
          Log conversation to CRM
        </p>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <CRMIcons.Xmark />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-9">
        {/* Conversation Info Card */}
        <div className="w-full bg-gradient-to-l from-[#f4d5cc] to-[#fcf4f2] rounded-[8px] p-4">
          <div className="flex gap-3 items-start">
            {/* Avatar */}
            <div
              className="w-[72px] h-[72px] rounded-full shrink-0 flex items-center justify-center text-[20px] font-semibold"
              style={{
                backgroundColor:
                  conversation.avatarColor || "#f1b2b2",
                color: "#202121",
              }}
            >
              {conversation.avatarText}
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between h-[72px] flex-1">
              <div className="flex flex-col gap-1">
                <div className="bg-[#e9f4ec] px-1 py-0.5 rounded-[6px] flex items-center gap-0.5 w-fit">
                  <CRMIcons.Channel />
                  <span className="text-[12px] text-[#3da067] font-['Instrument_Sans']">
                    {conversation.channel || "WhatsApp"}
                  </span>
                </div>
                <p className="font-['Instrument_Sans'] font-semibold text-[#121212] text-[18px] leading-tight line-clamp-1">
                  {conversation.name}
                </p>
              </div>

              <div className="bg-[rgba(34,34,34,0.1)] px-1 py-0.5 rounded-[6px] flex items-center gap-0.5 w-fit">
                <CRMIcons.CircleInfo />
                <span className="text-[12px] text-[#5e6060] font-['Instrument_Sans']">
                  This will be logged as CONV2331
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and List */}
        <div className="flex flex-col gap-4 w-full flex-1">
          {/* Search Bar */}
          <div className="w-full bg-[#f2f3f3] rounded-[8px] p-1.5">
            <div className="flex items-center gap-1 px-1">
              <div className="opacity-50">
                <CRMIcons.Search />
              </div>
              <input
                type="text"
                placeholder="Search all contacts"
                className="bg-transparent border-none outline-none text-[12px] text-[#404141] placeholder-opacity-60 w-full font-['Instrument_Sans']"
              />
            </div>
          </div>

          {/* Create New Contact Button */}
          <button className="flex items-center gap-1 self-start hover:bg-gray-50 p-1 rounded">
            <CRMIcons.UserPlus />
            <span className="font-['Instrument_Sans'] font-semibold text-[#0320f5] text-[14px] tracking-[0.07px]">
              Create new contact
            </span>
          </button>

          {/* Contacts List */}
          <div className="flex flex-col gap-2 w-full">
            {MOCK_CONTACTS.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-between w-full hover:bg-gray-50 p-1 rounded cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[12px]"
                    style={{
                      backgroundColor: contact.avatarColor,
                    }}
                  >
                    {contact.avatarText}
                  </div>
                  <span className="font-['Instrument_Sans'] text-[14px] text-[#202121]">
                    {contact.name}
                  </span>
                </div>
                <div className="w-[18px] h-[18px] border-2 border-[#4a5565] rounded-[2px] relative flex items-center justify-center">
                  {contact.checked && (
                    <div className="absolute inset-0 bg-[#0320f5] rounded-[2px] flex items-center justify-center border-none">
                      <CRMIcons.CheckSmall />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-end gap-2 mt-auto">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#f4f7f8] border border-[#e8edf0] rounded-[4px] shadow-sm text-[#0320f5] font-semibold text-[14px] font-['Instrument_Sans'] hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#0320f5] rounded-[4px] text-white font-semibold text-[14px] font-['Instrument_Sans'] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-blue-700">
            Log conversation
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}