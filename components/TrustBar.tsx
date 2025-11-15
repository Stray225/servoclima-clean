// components/TrustBar.tsx
import Image from "next/image";

export default function TrustBar() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-3xl font-bold text-center mb-10">
        Clientes que confían y trabajan con nosotros
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {/* Empresa 1 */}
        <div className="rounded-xl border bg-white shadow-sm flex items-center justify-center p-4 h-32">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/iconos/iconoempresa1.png"
              alt="Cliente 1"
              fill
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>

        {/* Empresa 2 */}
        <div className="rounded-xl border bg-white shadow-sm flex items-center justify-center p-4 h-32">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/iconos/iconoempresa2.png"
              alt="Cliente 2"
              fill
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>

        {/* Empresa 3 */}
        <div className="rounded-xl border bg-white shadow-sm flex items-center justify-center p-4 h-32">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/iconos/iconoempresa3.png"
              alt="Cliente 3"
              fill
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>

        {/* Empresa 4 */}
        <div className="rounded-xl border bg-white shadow-sm flex items-center justify-center p-4 h-32">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/iconos/iconoempresa4.png"
              alt="Cliente 4"
              fill
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
