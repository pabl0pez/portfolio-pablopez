import { ReactNode } from "react";

export default function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="min-h-screen w-full px-6 md:px-20 py-20 flex flex-col gap-6"
    >
      {children}
    </section>
  );
}
