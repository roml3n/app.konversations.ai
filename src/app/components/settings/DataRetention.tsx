import { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

export function DataRetention() {
  const [duration, setDuration] = useState("30");
  const [timeUnit, setTimeUnit] = useState("days");

  const handleSave = () => {
    console.log("Saving data retention settings:", { duration, timeUnit });
  };

  return (
    <div className="flex flex-col gap-9 w-full pt-8 pb-16">
      {/* Main Content Container */}
      <div className="flex flex-col gap-9 w-[590px] mx-auto">
        {/* Heading */}
        <h2
          className="text-[#5e6060]"
          style={{
            fontSize: "var(--text-base)",
            fontWeight: "var(--font-weight-semibold)",
            lineHeight: "1",
          }}
        >
          Choose how long we should keep your data for
        </h2>

        {/* Form Container */}
        <div className="flex flex-col gap-6 items-end w-full">
          {/* Input Section */}
          <div className="flex flex-col gap-2 w-full">
            {/* Label */}
            <label
              className="text-[#777]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
              }}
            >
              Select the retention duration
            </label>

            {/* Input Group */}
            <div className="flex gap-2 w-full">
              {/* Duration Input */}
              <div className="flex-1">
                <Input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="!h-12 rounded-xl border-[#e3e8f0] bg-[#f2f3f3] !px-3 !py-0 flex items-center"
                  style={{
                    fontSize: "var(--text-sm)",
                  }}
                />
              </div>

              {/* Time Unit Select */}
              <div className="flex-1">
                <Select value={timeUnit} onValueChange={setTimeUnit}>
                  <SelectTrigger className="!h-12 rounded-xl border-[#e3e8f0] bg-[#f2f3f3] !px-3 !py-0">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="days">days</SelectItem>
                    <SelectItem value="weeks">weeks</SelectItem>
                    <SelectItem value="months">months</SelectItem>
                    <SelectItem value="years">years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Privacy Notice */}
            <p
              className="text-[#777]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
                lineHeight: "1.2",
              }}
            >
              Your data is always secure and private. We do not share what you
              trust us with. For more information, read our{" "}
              <a
                href="/privacy-policy"
                className="text-[#62c3dd] underline decoration-solid hover:text-[#4fb3cd] transition-colors"
              >
                privacy policy
              </a>
            </p>
          </div>

          {/* Save Button */}
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