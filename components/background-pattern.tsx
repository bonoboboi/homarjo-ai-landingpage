import Image from "next/image"

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-[#ffffe6] dark:bg-[#10100e] transition-colors duration-300" />
      <Image
        src="/images/bg_at1.webp"
        alt=""
        fill
        className="object-cover opacity-35"
        priority
        aria-hidden="true"
      />
    </div>
  )
}
