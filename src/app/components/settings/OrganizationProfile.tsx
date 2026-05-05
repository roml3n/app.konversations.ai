import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToFile } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

export function OrganizationProfile() {
  const [formData, setFormData] = useState({
    organizationName: "HoloTech",
    website: "abc.corp",
    location: "Nairobi, Kenya",
    numberOfEmployees: "20-100",
  });

  const handleSave = () => {
    console.log("Saving organization profile:", formData);
  };

  return (
    <div className="flex flex-col gap-6 w-full items-center p-[32px]">
      {/* Avatar and Upload Button */}
      <div className="flex gap-5 items-center self-start">
        {/* Avatar Circle */}
        <button className="bg-[#d5eef7] relative rounded-full shrink-0 size-[108px] flex items-center justify-center">
          <p
            className="text-[#2c5763]"
            style={{
              fontSize: "28px",
              fontWeight: "var(--font-weight-bold)",
              lineHeight: "normal",
            }}
          >
            HT
          </p>
        </button>

        {/* Upload Button and Info */}
        <div className="flex gap-3 items-center">
          <button className="bg-gradient-to-b from-white to-[#f1f1f1] flex items-center gap-1 px-[10px] py-2 rounded-lg border border-border shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:brightness-95 transition-all">
            <FontAwesomeIcon
              icon={faArrowRightToFile}
              className="w-[14px] h-[14px] text-[#7a8890]"
            />
            <span
              className="text-[#404141]"
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              Upload a Logo
            </span>
          </button>

          <div className="text-[#777]" style={{ fontSize: "var(--text-xs)" }}>
            <p className="mb-0">Max: 10MB</p>
            <p>Ratio: 1:1</p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="flex flex-col gap-6 w-full mt-6">
        {/* Form Fields */}
        <div className="flex flex-col gap-6 w-full">
          {/* Row 1: Organization Name and Website */}
          <div className="flex gap-4 w-full">
            {/* Organization Name */}
            <div className="flex flex-col gap-2 flex-1">
              <label
                className="text-[#777]"
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-normal)",
                }}
              >
                Organization Name
              </label>
              <Input
                value={formData.organizationName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    organizationName: e.target.value,
                  })
                }
                className="h-12 rounded-xl border-[#d6d7ff]"
                style={{
                  fontSize: "var(--text-sm)",
                }}
              />
            </div>

            {/* Website */}
            <div className="flex flex-col gap-2 flex-1">
              <label
                className="text-[#777]"
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-normal)",
                }}
              >
                Website
              </label>
              <Input
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="h-12 rounded-xl border-[#d6d7ff]"
                style={{
                  fontSize: "var(--text-sm)",
                }}
              />
            </div>
          </div>

          {/* Row 2: Location */}
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-[#777]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              Location
            </label>
            <Input
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="h-12 rounded-xl border-[#d6d7ff]"
              style={{
                fontSize: "var(--text-sm)",
              }}
            />
          </div>

          {/* Row 3: Number of Employees */}
          <div className="flex flex-col gap-2 w-full">
            <label
              className="text-[#777]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              Number of Employees
            </label>
            <Select
              value={formData.numberOfEmployees}
              onValueChange={(value) =>
                setFormData({ ...formData, numberOfEmployees: value })
              }
            >
              <SelectTrigger className="h-12 rounded-xl border-[#d6d7ff]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="11-20">11-20</SelectItem>
                <SelectItem value="20-100">20-100</SelectItem>
                <SelectItem value="100-500">100-500</SelectItem>
                <SelectItem value="500+">500+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="px-4"
            style={{
              borderRadius: "var(--radius-button)",
            }}
          >
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
}