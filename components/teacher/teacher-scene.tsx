import Image from "next/image"
import { GraduationCap } from "lucide-react"
import type { ReactElement } from "react"
import { cn } from "@/lib/utils"
import { TeacherMascot } from "@/components/teacher/teacher-motion"

export function DeskLaptop(): ReactElement {
  return (
    <div
      data-teacher-layer="laptop"
      className="absolute right-[3%] bottom-[6%] z-20 h-[33%] w-[40%]"
    >
      <div className="absolute inset-x-[12%] inset-y-0 -skew-x-12 rounded-[8%] border-t-[3px] border-l-[3px] border-[#eaf2ff] bg-linear-to-br from-[#c6d6f0] to-[#9db7de] shadow-[inset_-2px_-3px_0_#829dc6]">
        <GraduationCap className="absolute top-[38%] left-[38%] size-[25%] text-[#297cc7]" />
      </div>
      <div className="absolute -bottom-[3%] -left-[24%] h-[7%] w-[112%] rounded-b-xl bg-[#bdd0ed] shadow-[0_3px_0_#94aed3]" />
    </div>
  )
}

export function DeskBooks(): ReactElement {
  return (
    <div
      data-teacher-layer="books"
      className="absolute bottom-[5%] left-[5%] z-20 h-[20%] w-[28%]"
    >
      {["bottom-0 bg-[#069e79]", "bottom-[46%] left-[5%] bg-[#29bce9]"].map(
        (tone) => (
          <div
            key={tone}
            className={cn(
              "absolute h-[48%] w-full rounded-l-md rounded-r-[14px] p-[5%] shadow-[inset_-8px_0_0_#00000014]",
              tone
            )}
          >
            <div className="h-full w-[85%] space-y-[4%] rounded-r-lg bg-[#fcfdff] p-[5%]">
              <div className="h-px bg-[#dce7f5]" />
              <div className="h-px bg-[#dce7f5]" />
              <div className="h-px bg-[#dce7f5]" />
            </div>
          </div>
        )
      )}
    </div>
  )
}

export function DeskMug(): ReactElement {
  return (
    <div
      data-teacher-layer="mug"
      className="absolute bottom-[5%] left-[35%] z-30 h-[15%] w-[10%]"
    >
      <div className="absolute top-[20%] -right-[32%] h-[53%] w-[50%] rounded-r-full border-[5px] border-white" />
      <div className="absolute inset-0 rounded-b-[35%] bg-linear-to-r from-white to-[#e5efff]">
        <div className="absolute inset-x-0 top-0 h-[16%] rounded-[50%] border-[3px] border-white bg-[#795238]" />
      </div>
    </div>
  )
}

export function DeskSurface(): ReactElement {
  return (
    <div
      data-teacher-layer="desk"
      className="absolute inset-x-0 bottom-0 z-40 h-[5%] rounded-t-full bg-white shadow-[0_5px_0_#b7dafa]"
    />
  )
}

export function TeacherDeskScene(): ReactElement {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-[520/400] w-full max-w-[520px]"
    >
      <TeacherMascot />
      <DeskBooks />
      <DeskMug />
      <DeskLaptop />
      <DeskSurface />
    </div>
  )
}

export function TeacherDecorations(): ReactElement {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        data-teacher-layer="curved-trails"
        viewBox="0 0 1280 780"
        fill="none"
        className="absolute inset-0 hidden size-full xl:block"
      >
        <g stroke="#8bd5f4" strokeWidth="5" strokeLinecap="round">
          <path
            pathLength="1"
            d="M340 100C185 85 55 155 55 295S80 480 215 490S395 540 330 595"
          />
          <path
            pathLength="1"
            d="M1090 90C1215 100 1250 195 1240 300S1170 415 1055 425S970 450 965 485"
          />
        </g>
        <g fill="#8bd5f4">
          <circle cx="330" cy="595" r="6" />
          <circle cx="965" cy="485" r="6" />
        </g>
      </svg>
      {[
        {
          name: "cap-tile",
          position:
            "top-[1%] -right-2 w-20 max-[380px]:hidden sm:right-[10%] sm:w-28 xl:top-8 xl:right-[12%]",
        },
        {
          name: "class-tile",
          position:
            "bottom-[20%] left-0 w-28 sm:left-[16%] sm:w-40 xl:bottom-[27%] xl:left-[20%]",
        },
        {
          name: "chart-tile",
          position:
            "right-0 bottom-[19%] w-24 sm:right-[10%] sm:w-32 xl:right-[20%] xl:bottom-[33%]",
        },
      ].map(({ name, position }) => (
        <div
          key={name}
          data-teacher-layer={name}
          className={cn("absolute", position)}
        >
          <Image
            src={`/figma/teacher/${name}.png`}
            alt=""
            width={1254}
            height={1254}
            sizes="160px"
            className="h-auto w-full"
          />
        </div>
      ))}
      {[
        {
          name: "paper-left",
          position:
            "top-0 -left-5 max-[380px]:hidden sm:left-[8%] xl:top-8 xl:left-[23%]",
          flip: "",
        },
        {
          name: "paper-right",
          position: "top-[29%] -right-7 xl:top-20 xl:right-0",
          flip: "-scale-x-100",
        },
        {
          name: "paper-low",
          position: "bottom-[30%] -left-10 hidden xl:block",
          flip: "",
        },
      ].map(({ name, position, flip }) => (
        <div
          key={name}
          data-teacher-layer={name}
          className={cn("absolute w-28 sm:w-36", position)}
        >
          <Image
            src="/figma/teacher/floating-paper.png"
            alt=""
            width={1254}
            height={1254}
            sizes="144px"
            className={cn("h-auto w-full", flip)}
          />
        </div>
      ))}
    </div>
  )
}

// Ground belongs to the full-width section, not its centered illustration canvas.
export function TeacherGround(): ReactElement {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        data-teacher-layer="left-cloud"
        className="absolute -bottom-20 -left-16 h-44 w-64 rounded-[50%] bg-[#b5e4fc] shadow-[110px_35px_0_#b5e4fc]"
      />
      <div
        data-teacher-layer="right-cloud"
        className="absolute -right-16 -bottom-20 h-44 w-64 rounded-[50%] bg-[#b5e4fc] shadow-[-110px_35px_0_#b5e4fc]"
      />
      {["left", "right"].map((side) => (
        <svg
          key={side}
          data-teacher-layer={`${side}-leaves`}
          viewBox="0 0 180 160"
          className={cn(
            "absolute bottom-0 w-24 text-[#189a86] sm:w-36",
            side === "left" ? "left-0" : "right-0 -scale-x-100"
          )}
        >
          <path
            d="M0 160C-20 75 20 5 48 18S72 103 0 160Z"
            fill="currentColor"
          />
          <path d="M0 160C35 65 100 47 112 78S64 145 0 160Z" fill="#167f7c" />
          <path d="M0 160C61 118 165 116 172 152L180 160Z" fill="#24ad94" />
        </svg>
      ))}
    </div>
  )
}
