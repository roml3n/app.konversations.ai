import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPhone,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { AvatarPopout } from "./AvatarPopout";
import { useNavigation } from "../contexts/NavigationContext";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { canGoBack, canGoForward, goBack, goForward } = useNavigation();

  return (
    <div className="flex w-full items-center justify-between border-b border-border bg-card px-6 py-2">
      {/* Left side: Navigation arrows + Title */}
      <div className="flex items-center gap-6">
        {/* Navigation arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={goBack}
            disabled={!canGoBack}
            className={`transition-opacity ${
              canGoBack
                ? "opacity-100 hover:opacity-70 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="w-5 h-5 text-muted-foreground"
            />
          </button>
          <button
            onClick={goForward}
            disabled={!canGoForward}
            className={`transition-opacity ${
              canGoForward
                ? "opacity-100 hover:opacity-70 cursor-pointer"
                : "opacity-30 cursor-not-allowed"
            }`}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-5 h-5 text-muted-foreground"
            />
          </button>
        </div>

        {/* Title */}
        <span className="text-foreground font-semibold font-normal">
          {title}
        </span>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-muted/80 transition-colors">
          <FontAwesomeIcon
            icon={faPhone}
            className="w-4 h-4 text-muted-foreground"
          />
        </button>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-muted/80 transition-colors">
          <FontAwesomeIcon
            icon={faBell}
            className="w-4 h-4 text-muted-foreground"
          />
        </button>
        <AvatarPopout />
      </div>
    </div>
  );
}