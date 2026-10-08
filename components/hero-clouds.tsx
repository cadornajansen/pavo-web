"use client"

import { useId, useRef } from "react"
import { useInView } from "motion/react"
import styles from "@/components/hero-clouds.module.css"

export function HeroClouds(): React.JSX.Element {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref)
  const skyClip = useId()

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox="0 0 1536 1024"
      className={styles.clouds}
      data-active={inView}
    >
      <defs>
        {/* Follow the source landscape's ridge so distant clouds pass behind it. */}
        <clipPath id={skyClip}>
          <path d="M0 0H1536V545L1490 533L1450 518L1405 537L1365 562L1300 576L1245 575L1200 592L1150 607L1100 612L1040 599L990 614L946 610L904 628L849 618L808 630L756 615L709 619L650 606L594 618L544 597L489 595L431 580L374 575L329 593L283 578L234 590L196 565L146 552L107 567L58 559L0 570Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${skyClip})`}>
        <g className={styles.distant} fill="#fff" opacity=".68">
          <path d="M160 600C130 595 127 565 152 555C141 524 180 502 204 525C222 474 291 483 296 530C326 510 369 536 356 566C390 567 406 587 396 600Z" />
          <path d="M960 635C936 632 931 609 950 599C940 573 974 554 995 572C1010 529 1070 535 1077 577C1105 559 1138 581 1130 606C1160 606 1177 622 1170 635Z" />
        </g>
        <g className={styles.high} fill="#fff" opacity=".5">
          <path d="M1080 385C1052 380 1055 357 1078 353C1063 329 1096 304 1121 324C1134 275 1207 281 1210 330C1244 310 1273 334 1264 358C1300 354 1320 375 1306 385Z" />
        </g>
      </g>
      <g className={styles.near} fill="#fff" opacity=".24">
        <path d="M-80 665C-115 650 -99 619 -66 623C-75 592 -24 573 0 606C17 548 95 560 101 614C130 586 183 606 178 639C221 630 245 650 235 665Z" />
        <path d="M1170 685C1132 679 1141 651 1173 649C1162 623 1203 601 1227 625C1244 575 1310 583 1318 630C1353 607 1390 633 1384 655C1421 649 1442 674 1431 685Z" />
      </g>
    </svg>
  )
}
