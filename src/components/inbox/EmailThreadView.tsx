import React, { useState } from "react";
import svgPaths from "../../imports/svg-es2i0ob6zh";
import { cn } from "../../lib/utils";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ConversationTopicHeader } from "./ConversationTopicHeader";
import { ConversationHeader } from "./ConversationHeader";
import { LogToCRMDrawer } from "./LogToCRMDrawer";
import { ChatComposer } from "./ChatComposer";

// Re-usable SVG Icons
const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative shrink-0", className)}>
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 14 14"
    >
      {children}
    </svg>
  </div>
);

const Icon16Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative shrink-0", className)}>
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16 16"
    >
      {children}
    </svg>
  </div>
);

const Icon12Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative shrink-0", className)}>
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 12 12"
    >
      {children}
    </svg>
  </div>
);

// Components from the design

function Tag({
  label,
  color,
  bgColor,
  iconColor,
}: {
  label: string;
  color: string;
  bgColor: string;
  iconColor: string;
}) {
  return (
    <div
      className="box-border flex gap-[2px] items-center px-[4px] py-[2px] rounded-[6px]"
      style={{ backgroundColor: bgColor }}
    >
      <Icon12Wrapper className="size-[12px]">
        <path
          d={svgPaths.p42f2600}
          fill={`var(--fill-0, ${iconColor})`}
        />
      </Icon12Wrapper>
      <p className="font-['Instrument_Sans'] text-[#404141] text-[12px]">
        {label}
      </p>
    </div>
  );
}

function MessageHeader({
  senderName,
  senderEmail,
  toEmail,
  avatarLetter,
  isAcmeSupport,
}: {
  senderName: string;
  senderEmail: string;
  toEmail: string;
  avatarLetter: string;
  isAcmeSupport?: boolean;
}) {
  return (
    <div className="flex flex-row items-center w-full p-[8px]">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-[4px] items-center">
          <div
            className={cn(
              "flex flex-col items-center justify-center rounded-full size-[24px]",
              isAcmeSupport ? "bg-[#b4bbee]" : "bg-[#f1b2b2]",
            )}
          >
            <p className="font-['Instrument_Sans'] font-semibold text-[#202121] text-[16px] leading-none mix-blend-color-burn">
              {avatarLetter}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center leading-[1.2] text-[#7a7d7d]">
            <div className="flex gap-[4px] items-start">
              <p className="font-['Instrument_Sans'] font-semibold text-[12px] tracking-[0.06px]">
                {senderName}
              </p>
              <p className="font-['Instrument_Sans'] font-normal text-[11px] tracking-[0.055px]">
                {`<${senderEmail}>`}
              </p>
            </div>
            <p className="font-['Instrument_Sans'] font-normal text-[11px] tracking-[0.055px]">
              To: {toEmail}
            </p>
          </div>
        </div>
        <div className="flex gap-[8px] items-center text-[#A0A3A4]">
          <Icon16Wrapper className="size-[16px] cursor-pointer hover:text-[#7A7D7D]">
            <path d={svgPaths.pd63a380} fill="currentColor" />
          </Icon16Wrapper>
          <Icon16Wrapper className="size-[16px] cursor-pointer hover:text-[#7A7D7D]">
            <path d={svgPaths.p169b59a0} fill="currentColor" />
          </Icon16Wrapper>
        </div>
      </div>
    </div>
  );
}

function Attachment({
  filename,
  size,
}: {
  filename: string;
  size: string;
}) {
  return (
    <div className="bg-[#f2f3f3] rounded-[88px] w-full mt-2">
      <div className="flex items-center justify-between px-[6px] py-[4px] w-full">
        <div className="flex gap-[4px] items-center">
          <IconWrapper className="size-[14px]">
            <path
              d={svgPaths.p26921480}
              fill="var(--fill-0, #B1B3B4)"
            />
          </IconWrapper>
          <p className="font-['Instrument_Sans'] font-semibold text-[#5e6060] text-[12px] tracking-[0.06px]">
            {filename}
          </p>
        </div>
        <p className="font-['Instrument_Sans'] font-normal text-[#a0a3a4] text-[12px] tracking-[0.06px]">
          {size}
        </p>
      </div>
    </div>
  );
}

function MessageBody({
  children,
  attachment,
}: {
  children: React.ReactNode;
  attachment?: { filename: string; size: string };
}) {
  return (
    <div className="bg-white rounded-[13px] w-full">
      <div className="flex flex-col gap-[8px] items-start p-[8px] w-full">
        <div className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#202121] text-[12px] tracking-[0.06px] w-full whitespace-pre-wrap">
          {children}
        </div>
        {attachment && (
          <Attachment
            filename={attachment.filename}
            size={attachment.size}
          />
        )}
      </div>
    </div>
  );
}

function InternalNote({
  author,
  message,
  mentions,
}: {
  author: string;
  message: React.ReactNode;
  mentions?: boolean;
}) {
  return (
    <div className="flex flex-row justify-end w-full my-2">
      <div className="flex gap-[6px] items-start justify-end pl-[56px]">
        <div className="flex flex-col gap-[4px] items-end">
          <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
            <span className="font-semibold">{author} </span>
            <span className="italic">(internal)</span>
          </p>
          <div
            className={cn(
              "box-border flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] rounded-[160px]",
              mentions
                ? "bg-[#e9e9ff] border border-[#8083ff]"
                : "bg-[#fcfcfc] border border-[#e3e3e4]",
            )}
          >
            <div className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#202121] text-[12px] tracking-[0.06px]">
              {message}
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-col items-center justify-center rounded-full size-[17px]",
            author.includes("Amanda")
              ? "bg-[#b4bbee]"
              : "bg-[#f1b2b2]",
          )}
        >
          {/* Placeholder avatar logic */}
          {author.includes("Amanda") && (
            <div className="text-[10px] font-['Instrument_Sans'] leading-none mt-0.5">
              A
            </div>
          )}
          {!author.includes("Amanda") && (
            <div className="rounded-full bg-indigo-100 size-full overflow-hidden relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650913406617-bd9b0ab07d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1c2VyJTIwYXZhdGFyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MzE0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="You"
                className="size-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InternalNoteLeft({
  author,
  message,
  mentions,
}: {
  author: string;
  message: React.ReactNode;
  mentions?: boolean;
}) {
  // Design shows right-aligned internal notes usually for "You", but let's follow the Figma structure for "Amanda Wakio" which is also right aligned in the design?
  // Wait, looking at the design:
  // "You (internal)" -> Right aligned
  // "Amanda Wakio (internal)" -> Right aligned? Actually the code says `justify-end` for `InternalMessageContainer`.
  // Wait, `InternalMessageContainer1` (Amanda) has `items-start` but `pl-0 pr-[36px]`. This suggests it might be left aligned or slightly indented?
  // Let's look at the Figma screenshot.
  // Ah, "You (internal)" is right aligned. "Amanda Wakio (internal)" is LEFT aligned (or at least distinct).
  // But `InternalMessageContainer1` has `items-start`.
  // I'll check the screenshot carefully.
  // Screenshot: "You (internal)" is right aligned. "Amanda Wakio" internal note is NOT right aligned, it's left aligned below the system updates.
  // Wait, "Sure thing @Jane Muthoni..." is the message from Amanda Wakio (internal).
  // The import code `InternalMessageContainer1` has `justify-end` on `InternalMessageContainer` (first one) but `InternalMessageContainer1` seems different.

  // Let's stick to the layout classes:
  // Container 1 (You): `justify-end`
  // Container 2 (Amanda): `items-start`

  return (
    <div className="flex flex-row justify-start w-full my-2">
      <div className="flex gap-[6px] items-start justify-start pr-[56px]">
        <div className="flex flex-col items-center justify-center rounded-full size-[17px] bg-[#b4bbee]">
          <div className="text-[10px] font-['Instrument_Sans'] leading-none mt-0.5">
            A
          </div>
        </div>
        <div className="flex flex-col gap-[4px] items-start">
          <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
            <span className="font-semibold">{author} </span>
            <span className="italic">(internal)</span>
          </p>
          <div
            className={cn(
              "box-border flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] rounded-[160px]",
              mentions
                ? "bg-[#e9e9ff] border border-[#8083ff]"
                : "bg-[#fcfcfc] border border-[#e3e3e4]",
            )}
          >
            <div className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#202121] text-[12px] tracking-[0.06px]">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemUpdate({
  text,
  tag,
}: {
  text: React.ReactNode;
  tag?: {
    label: string;
    color: string;
    bgColor: string;
    iconColor: string;
  };
}) {
  return (
    <div className="flex gap-[4px] items-center justify-center w-full my-1">
      <p className="font-['Instrument_Sans'] font-normal text-[#a0a3a4] text-[12px] text-center tracking-[0.06px]">
        {text}
      </p>
      {tag && (
        <div
          className="bg-white box-border flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px]"
          style={{ backgroundColor: tag.bgColor }}
        >
          {tag.iconColor === "spinner" ? (
            <Icon12Wrapper className="size-[12px]">
              <path
                d={svgPaths.p1718c180}
                fill="var(--fill-0, #8990DF)"
              />
            </Icon12Wrapper>
          ) : tag.iconColor === "chart" ? (
            <Icon12Wrapper className="size-[12px]">
              <path
                d={svgPaths.p156e4900}
                fill="var(--fill-0, #E7A188)"
              />
            </Icon12Wrapper>
          ) : (
            <Icon12Wrapper className="size-[12px]">
              <path
                d={svgPaths.p42f2600}
                fill={`var(--fill-0, ${tag.iconColor})`}
              />
            </Icon12Wrapper>
          )}
          <p className="font-['Instrument_Sans'] font-normal text-[#404141] text-[12px]">
            {tag.label}
          </p>
        </div>
      )}
    </div>
  );
}

export function EmailThreadView({
  onToggleDetails,
}: {
  onToggleDetails?: () => void;
}) {
  const [isCRMDrawerOpen, setIsCRMDrawerOpen] = useState(false);
  const [priority, setPriority] = useState("High");

  // Mock conversation data for the LogToCRMDrawer
  const conversationData = {
    id: "email-1",
    name: "Saito Watanashi",
    channel: "email",
    avatarColor: "#f1b2b2",
    avatarText: "S",
  };

  return (
    <div className="bg-white flex flex-col h-full w-full isolate relative overflow-hidden">
      {/* Header */}
      <div className="w-full z-[3]">
        <div className="flex flex-col items-start w-full border-b border-[#e3e3e4]">
          <ConversationHeader
            priority={priority}
            onPriorityChange={setPriority}
            status="Escalated"
          />
          {/* Subject Line */}
          <ConversationTopicHeader
            title="Issue with my account"
            tags={["account", "auth"]}
            onLogToCRM={() => setIsCRMDrawerOpen(true)}
            onToggleDetails={onToggleDetails}
            className="w-full justify-between"
          />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto w-full p-[16px] bg-white">
        <div className="flex flex-col gap-[12px] max-w-[800px] mx-auto">
          {/* Incoming Email */}
          <div className="bg-[#f2f3f3] flex flex-col items-start justify-center p-[4px] rounded-[16px] w-full">
            <MessageHeader
              senderName="Saito Watanashi"
              senderEmail="saitosama@watashi.star"
              toEmail="support@acme.corp"
              avatarLetter="S"
            />
            <MessageBody
              attachment={{
                filename: "DSC-20240423092342.png",
                size: "123KB",
              }}
            >
              <p>Hi there, Acme team!</p>
              <br />
              <p>
                My account freezes everytime I log in, I keep
                getting some kind of error and the homepage
                keeps loading indefinitely.
              </p>
              <br />
              <p>
                See the screenshot attached. I hope you can get
                it fixed soon because I need to make an
                important business inquiry.
              </p>
              <br />
              <p>Please ping me when done.</p>
              <br />
              <p>Regards,</p>
              <p>Saito</p>
            </MessageBody>
          </div>

          {/* Internal Note (Right aligned) */}
          <InternalNote
            author="You"
            mentions={true}
            message={
              <span>
                Hey{" "}
                <span className="font-semibold text-[#0320f5]">
                  @Amanda Wakio
                </span>
                , could you please sort this out?
              </span>
            }
          />

          {/* Updates */}
          <div className="flex flex-col gap-1 my-2">
            <SystemUpdate text="Amanda Wakio was added to the conversation" />
            <SystemUpdate
              text={
                <>
                  <span className="font-semibold">
                    Jane Muthoni
                  </span>{" "}
                  labelled this conversation
                </>
              }
              tag={{
                label: "account",
                color: "#EDCA4C",
                bgColor: "#fcf6e9",
                iconColor: "#EDCA4C",
              }}
            />
            <SystemUpdate
              text={
                <>
                  <span className="font-semibold">
                    Jane Muthoni
                  </span>{" "}
                  changed priority
                </>
              }
              tag={{
                label: "High",
                color: "#E7A188",
                bgColor: "#fcf4f2",
                iconColor: "chart",
              }}
            />
            <SystemUpdate
              text={
                <>
                  <span className="font-semibold">
                    Jane Muthoni
                  </span>{" "}
                  changed status
                </>
              }
              tag={{
                label: "Escalated",
                color: "#8990DF",
                bgColor: "#e9ebfa",
                iconColor: "spinner",
              }}
            />
          </div>

          {/* Internal Note (Amanda, Left/Start aligned based on design logic interpretation) */}
          {/* Actually in the screenshot, Amanda's note is below the updates and looks like a regular message bubble but smaller/styled differently? 
               Wait, looking at screenshot again:
               "You (internal)" is a blue/purple bubble on the right.
               Then system updates.
               Then "Amanda Wakio (internal)" is a grey bubble on the LEFT.
               Okay, implementing InternalNoteLeft.
           */}
          <InternalNoteLeft
            author="Amanda Wakio"
            message={
              <span>
                Sure thing{" "}
                <span className="font-semibold text-[#0320f5]">
                  @Jane Muthoni
                </span>
                , let me look into it
              </span>
            }
          />

          <SystemUpdate
            text={
              <>
                <span className="font-semibold">
                  Amanda Wakio
                </span>{" "}
                labelled this conversation
              </>
            }
            tag={{
              label: "auth",
              color: "#8990DF",
              bgColor: "#e9ebfa",
              iconColor: "#8990DF",
            }}
          />

          {/* Outgoing Email */}
          <div className="bg-[#f2f3f3] flex flex-col items-start justify-center p-[4px] rounded-[16px] w-full">
            <MessageHeader
              senderName="Acme Support"
              senderEmail="support@acme.corp"
              toEmail="saitosama@watashi.star"
              avatarLetter="S"
              isAcmeSupport
            />
            <MessageBody>
              <p>Hi Saito,</p>
              <br />
              <p>
                Thanks for reaching out. The issue seems to stem
                from an incorrect configuration in your
                settings. Let me sort it out for you.
              </p>
              <br />
              <p>Warm regards,</p>
              <p>Amanda</p>
            </MessageBody>
          </div>

          {/* Reply Box */}
        </div>
      </div>

      <ChatComposer />

      <LogToCRMDrawer
        isOpen={isCRMDrawerOpen}
        onClose={() => setIsCRMDrawerOpen(false)}
        conversation={conversationData as any}
      />
    </div>
  );
}