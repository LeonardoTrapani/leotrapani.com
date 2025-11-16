import {
  Calendar,
  FileUser,
  GlobeIcon,
  Lightbulb,
  MapPinIcon,
  MarsIcon,
  VenusIcon,
} from "lucide-react";

import { USER } from "@/features/portfolio/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { CurrentLocalTimeItem } from "./current-local-time-item";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
          <IntroItem icon={MapPinIcon} content={USER.address} />

          <CurrentLocalTimeItem timeZone={USER.timeZone} />

          <PhoneItem phoneNumber={USER.phoneNumber} />

          <EmailItem email={USER.email} />

          <IntroItem
            icon={GlobeIcon}
            content={urlToName(USER.website)}
            href={USER.website}
          />

          <IntroItem icon={Calendar} content={"19 years old"} />
        </div>
      </PanelContent>

      <div className="pointer-events-none absolute -inset-x-px inset-y-0 rounded-2xl border" />
    </Panel>
  );
}
