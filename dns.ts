/**
 * DNS records for leotrapani.com, copied from the previous Vercel DNS zone.
 * The apex and www are not here: the Worker's custom domain owns them (see
 * alchemy.run.ts), and Cloudflare issues their certificates.
 */
type DnsRecord = {
  name: string;
  comment: string;
} & (
  | { type: "MX"; content: string; priority: number }
  | { type: "TXT" | "CNAME"; content: string }
);

export const DNS_RECORDS: Record<string, DnsRecord> = {
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
  // Rediredge serves every other subdomain with its own TLS, so the wildcard
  // must stay DNS-only.
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
