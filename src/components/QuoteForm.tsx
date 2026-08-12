import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/utils/cn";
import { Button, Icon } from "@/components/ui";
import { categories, products } from "@/data/products";
import { packagingFormats } from "@/data/site";

const field =
  "w-full rounded-sm border border-ink-900/15 bg-ivory-50 px-3.5 py-2.5 text-[0.9375rem] text-ink-800 placeholder:text-ink-400 transition-colors focus:border-forest-600 focus:outline-none focus:ring-2 focus:ring-forest-600/15";

const labelCls =
  "mb-1.5 block text-[0.75rem] font-semibold tracking-[0.06em] text-ink-600 uppercase";

function Field({
  label,
  htmlFor,
  children,
  required,
  className,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  hint?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelCls}>
        {label} {required && <span className="ml-1 text-clay-600">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-[0.75rem] text-ink-400">{hint}</p>}
    </div>
  );
}

export default function QuoteForm({
  defaultProduct,
  defaultCategory,
  compact = false,
}: {
  defaultProduct?: string;
  defaultCategory?: string;
  compact?: boolean;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_7my8vsg",   // 👈 Replace with your Service ID from EmailJS
        "template_3608ajq",  // 👈 Replace with your Template ID from EmailJS
        formRef.current,
        "G8GiC1xqBrfy-QRwV"  // Your Public Key
      )
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setErrorMessage(
            "Failed to send your request. Please try again or reach out on WhatsApp."
          );
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-md border border-forest-600/25 bg-forest-100/60 p-8">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-forest-800 text-ivory-100">
          <Icon name="check" className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <h3 className="text-2xl">Enquiry Received!</h3>
        <p className="max-w-md text-[0.9375rem] leading-relaxed text-ink-600">
          Thank you for reaching out. Your request has been sent directly to our sales team at sales@atlasglobaltradeindia.com, and we will get back to you shortly.
        </p>
        <Button variant="secondary" size="sm" onClick={() => setSent(false)}>
          Submit another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="rounded-md border border-ink-900/[0.08] bg-ivory-50 p-6 shadow-[var(--shadow-soft)] sm:p-8"
      onSubmit={handleSubmit}
      aria-labelledby="quote-form-title"
    >
      <div className="mb-7">
        <h3 id="quote-form-title" className="text-[1.75rem] leading-tight">
          Request a Quote
        </h3>
        <p className="mt-2 text-[0.9375rem] text-ink-500">
          Share your requirement and our sales team will respond with pricing, specification and packing options.
        </p>
      </div>

      <div className={cn("grid gap-5", compact ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <Field label="Name" htmlFor="qf-name" required>
          <input id="qf-name" name="name" required autoComplete="name" className={field} placeholder="Your full name" />
        </Field>

        <Field label="Company Name" htmlFor="qf-company" required>
          <input id="qf-company" name="company" required autoComplete="organization" className={field} placeholder="Registered business name" />
        </Field>

        <Field label="Country" htmlFor="qf-country" required>
          <input id="qf-country" name="country" required autoComplete="country-name" className={field} placeholder="Destination country" />
        </Field>

        <Field label="Email" htmlFor="qf-email" required>
          <input id="qf-email" name="email" type="email" required autoComplete="email" className={field} placeholder="name@company.com" />
        </Field>

        <Field label="Phone / WhatsApp" htmlFor="qf-phone" required>
          <input id="qf-phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="Include country code" />
        </Field>

        <Field label="Product Category" htmlFor="qf-category">
          <select id="qf-category" name="category" defaultValue={defaultCategory ?? ""} className={field}>
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Both / Mixed container">Both / Mixed container</option>
          </select>
        </Field>

        <Field label="Product Interested In" htmlFor="qf-product" className="sm:col-span-2">
          <input id="qf-product" name="product" list="qf-product-list" defaultValue={defaultProduct ?? ""} className={field} placeholder="Start typing a product name" />
          <datalist id="qf-product-list">
            {products.map((p) => (
              <option key={p.id} value={p.name} />
            ))}
          </datalist>
        </Field>

        <Field label="Required Quantity" htmlFor="qf-quantity" hint="e.g. 5 MT per month, one 20ft container, trial lot">
          <input id="qf-quantity" name="quantity" className={field} placeholder="Quantity and frequency" />
        </Field>

        <Field label="Packaging Requirement" htmlFor="qf-packaging">
          <select id="qf-packaging" name="packaging" defaultValue="" className={field}>
            <option value="">Select packaging</option>
            {packagingFormats.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Please advise">Please advise</option>
          </select>
        </Field>

        <Field label="Message" htmlFor="qf-message" className="sm:col-span-2">
          <textarea id="qf-message" name="message" rows={5} className={cn(field, "resize-y")} placeholder="Specification, grade, target price, destination port, required documents, timelines…" />
        </Field>
      </div>

      {errorMessage && (
        <p className="mt-4 text-sm font-medium text-red-600">{errorMessage}</p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-[0.75rem] leading-relaxed text-ink-400">
          By submitting you agree to be contacted about this enquiry. We do not share buyer details with third parties.
        </p>
        <Button type="submit" size="lg" arrow className="w-full sm:w-auto" disabled={loading}>
          {loading ? "Sending..." : "Request a Quote"}
        </Button>
      </div>
    </form>
  );
}