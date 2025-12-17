import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export function General() {
  const [formData, setFormData] = useState({
    name: "Joe Maina",
    email: "joe@acme.corp",
    accountType: "Admin",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col gap-4 h-fit w-full">
      {/* Profile Picture Section */}
      <div className="flex items-center gap-5 w-full">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div
            className="bg-[#d5eef7] flex items-center justify-center rounded-full size-[108px]"
            style={{
              fontFamily: "Instrument Sans",
              fontVariationSettings: "'wdth' 100",
              fontWeight: 700,
            }}
          >
            <span className="text-[#2c5763] text-[28px]">
              JM
            </span>
          </div>
        </div>

        {/* Upload Button */}
        <button className="bg-gradient-to-b from-[#ffffff] to-[#f1f1f1] border border-[#e3e3e4] flex items-center gap-1 px-2.5 py-2 rounded-lg hover:from-[#fafafa] hover:to-[#e8e8e8] transition-all shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
          <FontAwesomeIcon
            icon={faCamera}
            className="w-[14px] h-[14px] text-[#7a8890]"
          />
          <span
            className="font-['Instrument_Sans'] text-[#404141] text-[12px] tracking-[0.06px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 400,
            }}
          >
            Upload a Picture
          </span>
        </button>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-6 w-full">
        {/* Name and Email Row */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {/* Name Field */}
          <div className="flex flex-col gap-2 w-full">
            <label
              className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 400,
              }}
            >
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                handleInputChange("name", e.target.value)
              }
              className="bg-[#f4f7f8] border border-[#d6d7ff] rounded-xl h-12 px-3 py-3 text-[#292f32] text-[14px] tracking-[0.07px] font-['Instrument_Sans'] outline-none focus:border-[#01b386] transition-colors"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 400,
              }}
            />
          </div>

          {/* Work Email Field */}
          <div className="flex flex-col gap-2 w-full">
            <label
              className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 400,
              }}
            >
              Work email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                handleInputChange("email", e.target.value)
              }
              className="bg-[#f4f7f8] border border-[#d6d7ff] rounded-xl h-12 px-3 py-3 text-[#292f32] text-[14px] tracking-[0.07px] font-['Instrument_Sans'] outline-none focus:border-[#01b386] transition-colors"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 400,
              }}
            />
          </div>
        </div>

        {/* Account Type Field */}
        <div className="flex flex-col gap-2 w-full">
          <label
            className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 400,
            }}
          >
            Account type
          </label>
          <div className="bg-[#f2f3f3] border border-[#e3e8f0] rounded-xl h-12 px-3 py-3 flex items-center justify-between w-full">
            <span
              className="font-['Instrument_Sans'] text-[#121212] text-[14px] tracking-[0.07px] opacity-50"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 400,
              }}
            >
              {formData.accountType}
            </span>
            <button
              className="text-[#0320f5] text-[14px] tracking-[0.07px] font-['Instrument_Sans'] hover:underline"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 600,
              }}
            >
              Update role
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}