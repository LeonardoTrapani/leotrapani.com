/**
 * DNS records for leotrapani.com, copied from the previous Vercel DNS zone.
 * The apex A/ALIAS and CAA records Vercel managed are left out: the site is
 * served by the Worker's custom domain and Cloudflare issues its own certs.
 */
type DnsRecord = {
  name: string;
  comment: string;
} & (
  | { type: "MX"; content: string; priority: number }
  | { type: "TXT" | "CNAME"; content: string }
);

export const DNS_RECORDS: Record<string, DnsRecord> = {
  // Temporary: keeps the apex on the old Vercel site while the nameservers
  // move. Replaced by the Worker custom domain once the zone is active.
  VercelApex: {
    type: "CNAME",
    name: "@",
    content: "dfef3ad1819bdede.vercel-dns-016.com",
    comment: "Temporary bridge to Vercel during the nameserver switch",
  },
  // Google Workspace: mail for ciao@leotrapani.com and domain verification.
  GoogleMx: {
    type: "MX",
    name: "@",
    content: "smtp.google.com",
    priority: 1,
    comment: "Google Workspace mail",
  },
  GoogleVerification: {
    type: "TXT",
    name: "@",
    content:
      "google-site-verification=FZ441vA3xXAZ5h7ra9P6th3rSBssdm4RZDrLo3iic50",
    comment: "Google Workspace",
  },
  GoogleSearchVerification: {
    type: "TXT",
    name: "@",
    content:
      "google-site-verification=h6Fn8-_IdZ2_3XJ8hmmak9Upk_7nGi4zLkOEitUNZaI",
    comment: "Google site verification",
  },
  GoogleDomainVerification: {
    type: "CNAME",
    name: "rlpwuretr7qu",
    content: "gv-qfrknog74mjcrd.dv.googlehosted.com",
    comment: "Google Workspace",
  },
  Dmarc: {
    type: "TXT",
    name: "_dmarc",
    content: "v=DMARC1; p=none;",
    comment: "DMARC",
  },
  // Rediredge serves every other subdomain (www included) with its own TLS,
  // so the wildcard must stay DNS-only.
  RediredgeWildcard: {
    type: "CNAME",
    name: "*",
    content: "redirector.rediredge.app",
    comment: "Rediredge",
  },
  RediredgeVerification: {
    type: "TXT",
    name: "_rediredge",
    content: "rediredge-verify=fc6c6fa2-26b7-4fd1-8a20-71f97545366c",
    comment: "Rediredge",
  },
  EffectTalk: {
    type: "CNAME",
    name: "effect",
    content: "effect-talk.pages.dev",
    comment: "Effect Milan talk",
  },
  // Resend sending domain notifications.leotrapani.com.
  ResendSpf: {
    type: "TXT",
    name: "send.notifications",
    content: "send.notifications",
    comment: "Resend (value copied as-is from Vercel)",
  },
  ResendMx: {
    type: "MX",
    name: "send.notifications",
    content: "feedback-smtp.eu-west-1.amazonses.com",
    priority: 10,
    comment: "Resend",
  },
  ResendDkim: {
    type: "TXT",
    name: "resend._domainkey.notifications",
    content:
      "p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCgV8jw3w9sHjqwMwM2WrWd7ZNUXj7rD3ZAUfn8vz+u+lYZzksiqj7sqYDSMqd9JQad03DHOUinaYipg2rtQaRXAoYg51tJ5lZzl9bCLVZM+lIH+50pauwLaTBAzHRRyz2OkEloWe0XuLQPzRgATnS7nenB5WsVyOdmjL5ICXHYMwIDAQAB",
    comment: "Resend",
  },
  // Plunk sends through Amazon SES.
  PlunkDkim1: {
    type: "CNAME",
    name: "jzx4sqsr2mgzm2axwwpjvoqhq55sv2x6._domainkey",
    content: "jzx4sqsr2mgzm2axwwpjvoqhq55sv2x6.dkim.amazonses.com",
    comment: "Plunk",
  },
  PlunkDkim2: {
    type: "CNAME",
    name: "x4bmfmpojrqogs2tpygwte4jmakcb4ns._domainkey",
    content: "x4bmfmpojrqogs2tpygwte4jmakcb4ns.dkim.amazonses.com",
    comment: "Plunk",
  },
  PlunkDkim3: {
    type: "CNAME",
    name: "bhgccyaqr5xtm2cjgsxgx3b7c6brflir._domainkey",
    content: "bhgccyaqr5xtm2cjgsxgx3b7c6brflir.dkim.amazonses.com",
    comment: "Plunk",
  },
  PlunkSpf: {
    type: "TXT",
    name: "plunk",
    content: "v=spf1 include:amazonses.com ~all",
    comment: "Plunk",
  },
};
