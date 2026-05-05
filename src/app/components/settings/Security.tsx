import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faMessage,
  faMobileScreen,
  faTrash,
  faEllipsisVertical,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { Toggle } from "../ui/Toggle";

export function Security() {
  const [currentPassword, setCurrentPassword] = useState(
    "•••••••••••••••••••",
  );
  const [newPassword, setNewPassword] = useState(
    "•••••••••••••••••••••••••",
  );
  const [confirmPassword, setConfirmPassword] = useState(
    "•••••••••••••••••••••••••",
  );
  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [textMessageEnabled, setTextMessageEnabled] =
    useState(true);
  const [authenticatorEnabled, setAuthenticatorEnabled] =
    useState(false);

  return (
    <div className="flex flex-col gap-12 py-4 w-full max-w-[1200px]">
      {/* Change Password Section */}
      <div className="flex flex-col gap-[36px] w-full">
        <p
          className="font-['Instrument_Sans'] text-[#5e6060] text-[16px] tracking-[0.08px]"
          style={{
            fontVariationSettings: "'wdth' 100",
            fontWeight: 600,
          }}
        >
          Change Password
        </p>

        <div className="flex flex-col gap-[36px] items-end w-full">
          <div className="flex flex-col gap-[16px] w-full">
            {/* Current Password */}
            <div className="flex flex-col gap-2 w-full">
              <label
                className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                Current password
              </label>
              <div className="relative">
                <input
                  type={
                    showCurrentPassword ? "text" : "password"
                  }
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(e.target.value)
                  }
                  className="bg-[#f4f7f8] border border-[#d6d7ff] rounded-xl h-12 px-3 py-3 pr-10 text-[#292f32] text-[14px] tracking-[0.07px] font-['Instrument_Sans'] outline-none focus:border-[#01b386] transition-colors w-full"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    fontWeight: 400,
                  }}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowCurrentPassword(!showCurrentPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon
                    icon={
                      showCurrentPassword ? faEyeSlash : faEye
                    }
                    className="w-4 h-4 text-[#030712]"
                  />
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="flex flex-col gap-2 w-full">
              <label
                className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                New password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                  className="bg-[#f4f7f8] border border-[#d6d7ff] rounded-xl h-12 px-3 py-3 pr-10 text-[#292f32] text-[14px] tracking-[0.07px] font-['Instrument_Sans'] outline-none focus:border-[#01b386] transition-colors w-full"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    fontWeight: 400,
                  }}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowNewPassword(!showNewPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon
                    icon={showNewPassword ? faEyeSlash : faEye}
                    className="w-4 h-4 text-[#030712]"
                  />
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="flex flex-col gap-2 w-full">
              <label
                className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 400,
                }}
              >
                Confirm new password
              </label>
              <div className="relative">
                <input
                  type={
                    showConfirmPassword ? "text" : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  className="bg-[#f4f7f8] border border-[#d6d7ff] rounded-xl h-12 px-3 py-3 pr-10 text-[#292f32] text-[14px] tracking-[0.07px] font-['Instrument_Sans'] outline-none focus:border-[#01b386] transition-colors w-full"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    fontWeight: 400,
                  }}
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-60 transition-opacity"
                >
                  <FontAwesomeIcon
                    icon={
                      showConfirmPassword ? faEyeSlash : faEye
                    }
                    className="w-4 h-4 text-[#030712]"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Changes Button */}
          <button className="bg-[#0320f5] flex items-center justify-center px-4 py-[9px] rounded-[4px] relative shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] hover:bg-[#0218d0] transition-colors">
            <span
              className="font-['Instrument_Sans'] text-[#fefefe] text-[14px] tracking-[0.07px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 600,
              }}
            >
              Save changes
            </span>
          </button>
        </div>
      </div>

      {/* 2-Step Verification Section */}
      <div className="flex flex-col gap-[25px] w-full">
        <div className="flex flex-col gap-4 w-full">
          <p
            className="font-['Instrument_Sans'] text-[#5e6060] text-[16px] tracking-[0.08px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 600,
            }}
          >
            2-Step verification
          </p>
          <p
            className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
            style={{
              fontVariationSettings: "'wdth' 100",
              fontWeight: 400,
            }}
          >
            We use 2-step verification when we need to check if
            it's really you using your account.
          </p>
        </div>

        <div className="flex flex-col gap-[36px] items-end w-full">
          <div className="flex flex-col gap-8 w-full">
            <p
              className="font-['Instrument_Sans'] text-[#5e6060] text-[14px] tracking-[0.07px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 600,
              }}
            >
              Your 2FA method
            </p>

            <div className="flex flex-col gap-6 w-full">
              {/* Text Message Option */}
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="w-4 h-4 text-[#7A7D7D]"
                  />
                  <p
                    className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                      fontWeight: 400,
                    }}
                  >
                    Text message
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {/* Toggle Switch */}
                  <Toggle
                    checked={textMessageEnabled}
                    onChange={() =>
                      setTextMessageEnabled(!textMessageEnabled)
                    }
                  />
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="w-4 h-4 text-[#7A7D7D]"
                  />
                </div>
              </div>

              {/* Phone Number with Delete */}
              {textMessageEnabled && (
                <div className="flex items-center justify-between w-full">
                  <p
                    className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                    style={{
                      fontVariationSettings: "'wdth' 100",
                      fontWeight: 400,
                    }}
                  >
                    +254 *** *** *78
                  </p>
                  <button className="bg-[#f2f3f3] flex items-center justify-center p-3 rounded-full hover:bg-[#e8e8e8] transition-colors">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="w-4 h-4 text-[#E53E3E]"
                    />
                  </button>
                </div>
              )}
            </div>

            {/* Authenticator App Option */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faShield}
                  className="w-4 h-4 text-[#7A7D7D]"
                />
                <p
                  className="font-['Instrument_Sans'] text-[#777] text-[14px] tracking-[0.07px]"
                  style={{
                    fontVariationSettings: "'wdth' 100",
                    fontWeight: 400,
                  }}
                >
                  Authenticator app
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Toggle Switch */}
                <Toggle
                  checked={authenticatorEnabled}
                  onChange={() =>
                    setAuthenticatorEnabled(
                      !authenticatorEnabled,
                    )
                  }
                />
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="w-4 h-4 text-[#7A7D7D]"
                />
              </div>
            </div>
          </div>

          {/* Save Changes Button (Disabled State) */}
          <button className="bg-[#e8edf0] flex items-center justify-center px-4 py-[9px] rounded-[4px] cursor-not-allowed">
            <span
              className="font-['Instrument_Sans'] text-[#7a8890] text-[14px] tracking-[0.07px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 600,
              }}
            >
              Save changes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}