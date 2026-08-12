import { Icon } from "@/components/ui";
import { company } from "@/data/site";



const channels = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: company.whatsapp,
    href: "https://wa.me/",
    note: "Fastest response during Indian business hours",
  },
  {
    icon: "mail",
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    note: "Send specifications, drawings or requirement sheets",
  },
  {
    icon: "phone",
    label: "Call",
    value: company.phone,
    href: `tel:${company.phone}`,
    note: company.hours,
  },
];

export default function ContactChannels() {
  return (
    <div className="flex h-full flex-col gap-5">
      <ul className="grid gap-3">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              className="group flex items-start gap-4 rounded-md border border-ink-900/[0.08] bg-ivory-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-600/30 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-sky-100 text-navy-700 transition-colors group-hover:bg-forest-800 group-hover:text-ivory-100">
                <Icon name={c.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-400 uppercase">
                  {c.label}
                </span>
                <span className="mt-1 block truncate text-[1rem] text-ink-900">{c.value}</span>
                <span className="mt-1 block text-[0.75rem] text-ink-400">{c.note}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="rounded-md border border-ink-900/[0.08] bg-ivory-100 p-6">
        <h3 className="text-[1.125rem]">Registered office</h3>
        <address className="mt-3 space-y-1 text-[0.9375rem] not-italic leading-relaxed text-ink-500">
          <p>{company.address}</p>
          <p>
            {company.city}, {company.state}
          </p>
          <p>India</p>
        </address>
        <dl className="mt-5 grid gap-2 border-t border-ink-900/[0.07] pt-4 text-[0.8125rem]">
          <div className="flex justify-between gap-4">
            <dt className="text-ink-400">Business hours</dt>
            <dd className="text-ink-700">{company.hours}</dd>
          </div>
          
          <div className="flex justify-between gap-4">
            <dt className="text-ink-400">Established</dt>
            <dd className="text-ink-700">{company.established}</dd>
          </div>
        </dl>
      </div>      
    </div>
  );
}
