import { useCallback, useEffect, useSyncExternalStore } from "react";

/* ------------------------------------------------------------
   Minimal dependency-free hash router.
   Keeps the bundle tiny and works from a single static file.
   ------------------------------------------------------------ */

const listeners = new Set<() => void>();

function currentHash() {
  const h = window.location.hash.replace(/^#/, "");
  return h === "" ? "/" : h;
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const handler = () => listeners.forEach((l) => l());
  window.addEventListener("hashchange", handler);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("hashchange", handler);
  };
}

export function useRoute() {
  const hash = useSyncExternalStore(subscribe, currentHash, () => "/");
  const [pathPart, queryPart] = hash.split("?");
  const path = pathPart.replace(/\/+$/, "") || "/";
  const segments = path.split("/").filter(Boolean);
  const query = new URLSearchParams(queryPart ?? "");
  return { path, segments, query, hash };
}

export function navigate(href: string) {
  const target = href.startsWith("#") ? href : `#${href}`;
  if (window.location.hash === target) return;
  window.location.hash = target;
}

/** Scroll to top on route change (respects in-page anchors). */
export function useScrollRestoration(path: string) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);
}

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const href = to.startsWith("#") ? to : `#${to}`;
  const handle = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      // let the browser handle the hash change; just force scroll reset
      if (window.location.hash === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [href, onClick],
  );
  return (
    <a href={href} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
