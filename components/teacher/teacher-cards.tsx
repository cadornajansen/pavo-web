import {
  BookOpen,
  Check,
  ClipboardList,
  Clock3,
  FileText,
  FolderOpen,
  QrCode,
  Users,
} from "lucide-react"
import type { ReactElement, ReactNode } from "react"
import { cn } from "@/lib/utils"

function CardSurface({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}): ReactElement {
  return (
    <div
      className={cn(
        "rounded-[24px] border-2 border-[#b4def0] bg-white p-4 text-[#16375b] shadow-[0_6px_0_#a6d5e9]",
        className
      )}
    >
      {children}
    </div>
  )
}

export function ShareToClassCard(): ReactElement {
  return (
    <CardSurface className="border-[#99d9fb] shadow-[0_6px_0_#77c4ec]">
      <h3 className="text-center text-sm font-black tracking-tight sm:text-base">
        Connect by QR
      </h3>
      <div
        role="img"
        aria-label="Illustrative student QR code"
        className="mx-auto my-3 flex aspect-square w-full max-w-[112px] items-center justify-center rounded-[22px] border-2 border-[#b8e7ff] bg-[#e5f6ff] p-3 shadow-[0_3px_0_#c4eaff]"
      >
        <QrCode className="size-full stroke-[2] text-[#0869b5]" />
      </div>
      <p className="text-center text-xs leading-relaxed font-bold text-[#536985]">
        Scan to add student details.
      </p>
    </CardSurface>
  )
}

const exampleLearners = [
  {
    initials: "AR",
    name: "Ana Reyes",
    status: "Completed",
    tone: "bg-[#ddf6cf] text-[#3e781e]",
    avatar: "bg-[#ffe28a] text-[#795719]",
  },
  {
    initials: "MS",
    name: "Miguel Santos",
    status: "Completed",
    tone: "bg-[#ddf6cf] text-[#3e781e]",
    avatar: "bg-[#9de1fb] text-[#126494]",
  },
  {
    initials: "BC",
    name: "Bea Cruz",
    status: "In progress",
    tone: "bg-[#fff0ba] text-[#836200]",
    avatar: "bg-[#ffbfa7] text-[#923b28]",
  },
] as const

export function ClassOverviewCard(): ReactElement {
  return (
    <CardSurface>
      <h3 className="flex items-center gap-2 pb-3 text-base font-black tracking-tight">
        <Users
          aria-hidden="true"
          className="size-7 shrink-0 rounded-lg bg-[#2eaeef] p-1.5 text-white shadow-[0_2px_0_#1188c7]"
        />
        Class Overview
      </h3>
      <ul aria-label="Example learner progress" className="space-y-2">
        {exampleLearners.map(({ initials, name, status, tone, avatar }) => (
          <li
            key={name}
            className="flex items-center gap-2 rounded-xl bg-[#f0f8fc] p-2"
          >
            <span
              aria-hidden="true"
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-[10px] border-b-2 border-black/10 text-[10px] font-black",
                avatar
              )}
            >
              {initials}
            </span>
            <span className="min-w-0 flex-1 text-xs font-extrabold">
              {name}
            </span>
            <span
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full",
                tone
              )}
            >
              <span className="sr-only">{status}</span>
              {status === "Completed" ? (
                <Check aria-hidden="true" className="size-4 stroke-[3]" />
              ) : (
                <Clock3 aria-hidden="true" className="size-4 stroke-[2.5]" />
              )}
            </span>
          </li>
        ))}
      </ul>
    </CardSurface>
  )
}

export function AssignmentSentCard(): ReactElement {
  return (
    <CardSurface className="border-[#b5e4cb] shadow-[0_6px_0_#93ceb0]">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-[14px] border-b-4 border-[#10996e] bg-[#2bc48a] text-white"
        >
          <Check className="size-6 stroke-[3.5]" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-black tracking-tight">
            Results saved!
          </h3>
          <p className="mt-1 text-xs font-bold text-[#658274]">
            Ready for your records.
          </p>
        </div>
      </div>
    </CardSurface>
  )
}

const exampleMaterials = [
  {
    title: "Lesson Notes",
    icon: FileText,
    tone: "border-[#db6870] bg-[#ff8a90] text-white",
  },
  {
    title: "Learning Module",
    icon: BookOpen,
    tone: "border-[#138bd0] bg-[#39b5f7] text-white",
  },
  {
    title: "Practice Quiz",
    icon: ClipboardList,
    tone: "border-[#0c9c79] bg-[#31cba5] text-white",
  },
] as const

export function LearningMaterialsCard(): ReactElement {
  return (
    <CardSurface>
      <h3 className="flex items-center gap-2 pb-3 text-sm font-black tracking-tight sm:text-base">
        <FolderOpen
          aria-hidden="true"
          className="size-6 shrink-0 fill-[#d6efff] stroke-[2.5] text-[#249aee]"
        />
        Learning Materials
      </h3>
      <ul className="space-y-2">
        {exampleMaterials.map(({ title, icon: Icon, tone }) => (
          <li
            key={title}
            className="flex items-center gap-2.5 rounded-xl bg-[#f0f8fc] p-1.5"
          >
            <span
              aria-hidden="true"
              className={cn("rounded-[9px] border-b-[3px] p-1.5", tone)}
            >
              <Icon className="size-4 stroke-[2.5]" />
            </span>
            <span className="flex-1 text-xs font-extrabold">{title}</span>
          </li>
        ))}
      </ul>
    </CardSurface>
  )
}
