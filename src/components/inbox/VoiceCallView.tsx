import React from 'react';
import svgPaths from "../../imports/svg-u33m1a9adr";
import { cn } from "../../lib/utils";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowUpRightIcon } from 'lucide-react';
import { ConversationTopicHeader } from "./ConversationTopicHeader";

// Icons
const IconWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative shrink-0", className)}>
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
      {children}
    </svg>
  </div>
);

const Icon12Wrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative shrink-0", className)}>
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
      {children}
    </svg>
  </div>
);

const Icon16Wrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative shrink-0", className)}>
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      {children}
    </svg>
  </div>
);

// Common Components
function StatusBadge({ label, color, iconPath }: { label: string, color: string, iconPath: string }) {
  return (
    <div className="bg-white box-border flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] border border-[#e3e3e4] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]">
      <IconWrapper className="size-[14px]">
        <path d={iconPath} fill={`var(--fill-0, ${color})`} />
      </IconWrapper>
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] text-[#5e6060] text-[12px] tracking-[0.06px]">
        {label}
      </p>
    </div>
  );
}

function Tag({ label, color, bgColor, iconColor }: { label: string, color: string, bgColor: string, iconColor: string }) {
  return (
    <div className="box-border flex gap-[2px] items-center px-[4px] py-[2px] rounded-[6px]" style={{ backgroundColor: bgColor }}>
      <Icon12Wrapper className="size-[12px]">
        <path d={svgPaths.p42f2600} fill={`var(--fill-0, ${iconColor})`} />
      </Icon12Wrapper>
      <p className="font-['Instrument_Sans'] text-[#404141] text-[12px]">{label}</p>
    </div>
  );
}

function Avatar({ letter, color, imgUrl }: { letter: string, color?: string, imgUrl?: string }) {
    if (imgUrl) {
        return (
            <div className="relative rounded-full shrink-0 size-[18px] overflow-hidden border-2 border-white ring-1 ring-transparent">
                 <ImageWithFallback src={imgUrl} alt={letter} className="w-full h-full object-cover" />
            </div>
        );
    }
    return (
        <div 
            className="box-border flex flex-col items-center justify-center relative rounded-full shrink-0 size-[18px] border-2 border-white ring-1 ring-transparent"
            style={{ backgroundColor: color || '#aaacff' }}
        >
            <p className="font-['Instrument_Sans'] font-semibold leading-none mix-blend-color-burn text-[#202121] text-[10px]">
                {letter}
            </p>
        </div>
    );
}

function AssignButton() {
    return (
        <div className="bg-[#f2f3f3] box-border flex gap-[2px] items-center justify-center p-[4px] relative rounded-[88px] border border-[#e3e3e4] shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-50">
            <div className="flex items-center -space-x-1 px-1">
                <Avatar letter="P" color="#aaacff" />
                <Avatar letter="N" color="#e78f8f" />
                <Avatar letter="S" imgUrl="https://images.unsplash.com/photo-1650913406617-bd9b0ab07d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1c2VyJTIwYXZhdGFyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MzE0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
            </div>
            <Icon16Wrapper className="size-[16px] ml-1">
                <path d={svgPaths.p322c5780} fill="#7A7D7D" />
            </Icon16Wrapper>
        </div>
    );
}

// Audio Player
function AudioPlayer() {
    return (
        <div className="w-full bg-white border-b border-[#e3e3e4] p-[16px] flex flex-col gap-[8px]">
            <div className="flex items-center justify-between text-[#404141] font-['Spline_Sans_Mono'] text-[14px] tracking-[0.07px]">
                <span>01:06</span>
                <div className="relative w-full mx-4 h-[5px]">
                     {/* Background Bar */}
                     <div className="absolute top-0 left-0 w-full h-full bg-[#ebeaee] rounded-[60px]" />
                     {/* Progress Bar */}
                     <div className="absolute top-0 left-0 h-full bg-[#0320f5] rounded-[60px]" style={{ width: '35%' }} />
                     {/* Thumb */}
                     <div className="absolute top-1/2 -translate-y-1/2 size-[15px] bg-[#0320f5] rounded-full border-2 border-white shadow-sm" style={{ left: '35%' }} />
                </div>
                <span>03:13</span>
            </div>
            <div className="flex justify-center w-full mt-2">
                <button className="flex items-center justify-center size-[32px] bg-[#0320f5] rounded-full text-white hover:bg-blue-700 transition-colors">
                    <IconWrapper className="size-[14px] ml-0.5">
                        <path d={svgPaths.p14def300} fill="#E9E9FF" />
                    </IconWrapper>
                </button>
            </div>
        </div>
    );
}

// Transcript Bubbles
function TranscriptBubble({ 
    text, 
    sender, 
    time, 
    type = 'agent' // 'agent' | 'user'
}: { 
    text: string, 
    sender: string, 
    time: string, 
    type: 'agent' | 'user' 
}) {
    const isAgent = type === 'agent';
    const bgColor = isAgent ? 'bg-[#aaacff]' : 'bg-[#fefefe]';
    
    return (
        <div className="flex gap-[6px] items-start w-full pl-0 pr-[36px]">
            {/* Avatar */}
            <div className={cn(
                "flex flex-col items-center justify-center rounded-full size-[17px] shrink-0 mt-1",
                isAgent ? "bg-[#aaacff]" : "bg-[#f1b2b2]"
            )}>
                 <p className="font-['Instrument_Sans'] font-semibold text-[#202121] text-[10px] leading-none mix-blend-color-burn">
                    {sender.charAt(0)}
                 </p>
            </div>
            
            <div className="flex flex-col gap-[4px] w-full">
                 {/* Header */}
                 <div className="flex gap-[4px] items-center">
                    <span className={cn(
                        "font-['Instrument_Sans'] text-[12px] text-[#7a7d7d]",
                        isAgent ? "font-semibold" : "font-semibold"
                    )}>
                        {sender}
                    </span>
                    <div className="flex items-center gap-[2px]">
                        <Icon12Wrapper className="size-[12px]">
                           <path d={svgPaths.p22b0f300} fill="#7A7D7D" />
                        </Icon12Wrapper>
                        <span className="font-['Spline_Sans_Mono'] text-[10px] text-[#7a7d7d]">{time}</span>
                    </div>
                 </div>
                 
                 {/* Content */}
                 <div className={cn(
                    "rounded-[16px] px-[12px] py-[8px] w-fit max-w-[90%]",
                    bgColor
                 )}>
                    <p className="font-['Instrument_Sans'] font-normal text-[#202121] text-[13px] leading-normal">
                        {text}
                    </p>
                 </div>
            </div>
        </div>
    );
}

function FeedbackSection() {
    return (
        <div className="flex flex-col items-center gap-[6px] w-full py-4">
            <p className="font-['Instrument_Sans'] text-[#b1b3b4] text-[12px]">Was this transcription accurate?</p>
            <div className="flex gap-[6px]">
                 <Icon12Wrapper className="size-[12px] cursor-pointer hover:text-gray-600">
                    <path d={svgPaths.p1abc3400} fill="#B1B3B4" />
                 </Icon12Wrapper>
                 <Icon12Wrapper className="size-[12px] cursor-pointer hover:text-gray-600">
                    <path d={svgPaths.p2fcba200} fill="#B1B3B4" />
                 </Icon12Wrapper>
            </div>
        </div>
    );
}

// Internal Comment Components from previous design
function InternalNote({ 
  author, 
  message, 
  mentions,
  avatarUrl
}: { 
  author: string, 
  message: React.ReactNode, 
  mentions?: boolean,
  avatarUrl?: string
}) {
  return (
    <div className="flex flex-row justify-end w-full my-2 pl-[36px]">
      <div className="flex gap-[6px] items-start justify-end w-full">
        <div className="flex flex-col gap-[4px] items-end max-w-full">
          <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
            <span className="font-semibold">{author} </span>
            <span className="italic">(internal)</span>
          </p>
          <div className={cn("box-border flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] rounded-[160px]", mentions ? "bg-[#e9ebfa] border border-[#8083ff]" : "bg-[#fcfcfc] border border-[#e3e3e4]")}>
            <div className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#202121] text-[12px] tracking-[0.06px]">
              {message}
            </div>
          </div>
        </div>
        {avatarUrl ? (
            <div className="size-[17px] rounded-full overflow-hidden shrink-0 mt-1">
                 <ImageWithFallback src={avatarUrl} alt={author} className="w-full h-full object-cover" />
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center rounded-full size-[17px] bg-[#aaacff] shrink-0 mt-1">
                 <div className="text-[10px] font-['Instrument_Sans'] leading-none font-semibold text-[#202121]">
                     {author.charAt(0)}
                 </div>
            </div>
        )}
      </div>
    </div>
  );
}

function InternalNoteLeft({ 
    author, 
    message
  }: { 
    author: string, 
    message: React.ReactNode
  }) {
    return (
      <div className="flex flex-row justify-start w-full my-2 pr-[36px]">
        <div className="flex gap-[6px] items-start justify-start w-full">
          <div className="flex flex-col items-center justify-center rounded-full size-[17px] bg-[#aaacff] shrink-0 mt-1">
             <div className="text-[10px] font-['Instrument_Sans'] leading-none font-semibold text-[#202121]">{author.charAt(0)}</div>
          </div>
          <div className="flex flex-col gap-[4px] items-start max-w-full">
            <p className="font-['Instrument_Sans'] font-normal text-[#7a7d7d] text-[12px] tracking-[0.06px]">
              <span className="font-semibold">{author} </span>
              <span className="italic">(internal)</span>
            </p>
            <div className="bg-[#fcfcfc] border border-[#e3e3e4] box-border flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] rounded-[16px]">
              <div className="font-['Instrument_Sans'] font-normal leading-[1.2] text-[#202121] text-[12px] tracking-[0.06px]">
                {message}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

function SystemUpdate({ text, tag }: { text: React.ReactNode, tag?: { label: string, color: string, bgColor: string, iconColor: string } }) {
  return (
    <div className="flex gap-[4px] items-center justify-center w-full my-2">
      <p className="font-['Instrument_Sans'] font-normal text-[#a0a3a4] text-[12px] text-center tracking-[0.06px]">
        {text}
      </p>
      {tag && (
        <Tag label={tag.label} color={tag.color} bgColor={tag.bgColor} iconColor={tag.iconColor} />
      )}
    </div>
  );
}

export function VoiceCallView() {
    return (
        <div className="bg-white flex flex-col h-full w-full isolate relative overflow-hidden">
             {/* Header */}
             <div className="w-full z-[3] bg-white border-b border-[#e3e3e4]">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-[12px] py-[6px]">
                    <div className="flex gap-[4px] items-center">
                        <StatusBadge label="Medium" color="#EDCA4C" iconPath={svgPaths.p33b8900} />
                        <StatusBadge label="Inbox" color="#AAACFF" iconPath={svgPaths.p3c9a6400} />
                    </div>
                    <div className="flex gap-[4px] items-center">
                         <div className="bg-[#f2f3f3] p-[4px] rounded-full border border-[#e3e3e4]">
                            <div className="bg-white rounded-full p-1 flex items-center justify-center size-[24px]">
                                <Icon16Wrapper className="size-[16px]">
                                    <path d={svgPaths.p306c3500} fill="#7A7D7D" />
                                </Icon16Wrapper>
                            </div>
                         </div>
                         <AssignButton />
                         <div className="bg-white border border-[#e3e3e4] rounded-[88px] px-[8px] py-[4px] cursor-pointer hover:bg-gray-50">
                             <p className="font-['Instrument_Sans'] font-semibold text-[#5e6060] text-[12px]">Assign</p>
                         </div>
                    </div>
                </div>
                
                {/* Title Bar */}
                <ConversationTopicHeader 
                    title="Issue with my account"
                    tags={["account"]}
                />
             </div>

             {/* Audio Player */}
             <AudioPlayer />

             {/* Main Scrollable Content */}
             <div className="flex-1 overflow-y-auto bg-white">
                 <div className="flex flex-col gap-[16px] p-[16px] max-w-[800px] mx-auto pb-[100px]">
                      
                      {/* Transcript Container */}
                      <div className="bg-[#f4f4f6] rounded-[8px] p-[8px] flex flex-col gap-[16px]">
                           <TranscriptBubble 
                               sender="Pauline Nyaboke" 
                               time="02:11" 
                               type="agent"
                               text="Good afternoon! This is Pauline from Acme Support. How can I assist you today?" 
                           />
                           <TranscriptBubble 
                               sender="Saito Watanashi" 
                               time="02:11" 
                               type="user"
                               text="Hi Pauline, I'm having a problem with my account. Every time I try to log in, something goes wrong." 
                           />
                           <TranscriptBubble 
                               sender="Pauline Nyaboke" 
                               time="02:11" 
                               type="agent"
                               text="I'm sorry to hear that. Could you explain a bit more about what's happening when you try to log in?" 
                           />
                           <TranscriptBubble 
                               sender="Saito Watanashi" 
                               time="02:11" 
                               type="user"
                               text="Yes, it freezes everytime I log in, I keep getting some kind of error and the homepage keeps loading indefinitely." 
                           />
                           <TranscriptBubble 
                               sender="Pauline Nyaboke" 
                               time="02:11" 
                               type="agent"
                               text="Thank you for clarifying. Are you accessing your account through the website or a mobile app?" 
                           />
                           <TranscriptBubble 
                               sender="Saito Watanashi" 
                               time="02:11" 
                               type="user"
                               text="I'm using the website on my laptop." 
                           />
                           <TranscriptBubble 
                               sender="Pauline Nyaboke" 
                               time="02:11" 
                               type="agent"
                               text="Alright, thanks. Could you please confirm your email address for me so I can check your account details?" 
                           />
                           <TranscriptBubble 
                               sender="Saito Watanashi" 
                               time="02:03" 
                               type="user"
                               text="Sure, it's saitosama@watashi.star" 
                           />
                           <TranscriptBubble 
                               sender="Pauline Nyaboke" 
                               time="02:04" 
                               type="agent"
                               text="Thanks, Saito. Let me have a quick look into this. I’ll be back with you shortly." 
                           />
                           <TranscriptBubble 
                               sender="Pauline Nyaboke" 
                               time="02:11" 
                               type="agent"
                               text="Thanks for waiting. It looks like there's a session error on your account. I’m escalating this to our technical team right now. You should receive a follow-up within the next hour." 
                           />
                           <TranscriptBubble 
                               sender="Saito Watanashi" 
                               time="02:49" 
                               type="user"
                               text="Alright, thanks for your help!" 
                           />
                           <TranscriptBubble 
                               sender="Pauline Nyaboke" 
                               time="03:02" 
                               type="agent"
                               text="You're welcome! Let us know if you need anything else. Have a great day!" 
                           />
                           <TranscriptBubble 
                               sender="Saito Watanashi" 
                               time="03:11" 
                               type="user"
                               text="Thanks, Pauline. You too!" 
                           />
                           
                           <FeedbackSection />
                      </div>

                      {/* Post-Call Activity / Internal Comments */}
                      <div className="flex flex-col gap-2 mt-2">
                          <SystemUpdate text="Jane Muthoni joined the conversation" />
                          <SystemUpdate 
                              text={<><span className="font-semibold">Jane Muthoni</span> labelled this conversation</>} 
                              tag={{ label: "account", color: "#EDCA4C", bgColor: "#fcf6e9", iconColor: "#EDCA4C" }} 
                          />
                          
                          <InternalNote 
                              author="You"
                              mentions={true}
                              avatarUrl="https://images.unsplash.com/photo-1650913406617-bd9b0ab07d07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1c2VyJTIwYXZhdGFyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MzE0MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                              message={
                                  <span>
                                      <span className="font-semibold text-[#0320f5]">@Pauline Nyaboke</span>, what’s the status of this issue?
                                  </span>
                              }
                          />
                          
                          <InternalNoteLeft 
                              author="Pauline Nyaboke"
                              message={
                                  <span>
                                      Hey <span className="font-semibold text-[#5258fe]">@Jane Muthoni</span>, it’s still in progress. <span className="font-semibold text-[#5258fe]">@Nikki Kimeu</span> has alerted Technical. We should be getting a status update soon.
                                  </span>
                              }
                          />
                          
                          <SystemUpdate text="Nikki Kimeu was added to the conversation" />
                      </div>

                      {/* Internal Composer */}
                      <div className="mt-4 bg-[#f2f3f3] rounded-[12px] p-[8px]">
                           <textarea 
                                placeholder="Type a comment"
                                className="w-full bg-transparent border-none resize-none focus:ring-0 text-[12px] font-['Instrument_Sans'] text-[#202121] placeholder:text-[#a0a3a4] min-h-[26px] outline-none"
                           />
                           <div className="flex items-center justify-between mt-2">
                               <div className="flex gap-[4px]">
                                   <div className="p-[4px] rounded hover:bg-gray-200 cursor-pointer">
                                       <Icon16Wrapper className="size-[16px]">
                                           <path d={svgPaths.p25c66f80} fill="#7A7D7D" />
                                       </Icon16Wrapper>
                                   </div>
                                   <div className="p-[4px] rounded hover:bg-gray-200 cursor-pointer">
                                       <Icon16Wrapper className="size-[16px]">
                                            <g>
                                                <path d={svgPaths.p2f943480} fill="#7A7D7D" />
                                                <path d={svgPaths.p2de75000} fill="#7A7D7D" />
                                                <path d={svgPaths.p208c0b40} fill="#7A7D7D" />
                                            </g>
                                       </Icon16Wrapper>
                                   </div>
                               </div>
                               <button className="bg-[#0320f5] text-white px-[10px] py-[6px] rounded-[4px] flex items-center gap-[4px] hover:bg-blue-700 transition-colors">
                                   <span className="font-['Instrument_Sans'] font-semibold text-[14px] tracking-[0.07px]">Send</span>
                                   <Icon16Wrapper className="size-[16px]">
                                       <path d={svgPaths.p47ef80} fill="white" />
                                   </Icon16Wrapper>
                               </button>
                           </div>
                      </div>

                 </div>
             </div>
        </div>
    );
}
