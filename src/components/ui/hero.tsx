"use client"

import * as React from "react"

import Image from "next/image"

import Link from "next/link"

import { cn } from "@/lib/utils"

import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { ContactModal } from "@/components/home/contact-modal"

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode
  subtitle?: string
  eyebrow?: string
  ctaText?: string
  ctaLink?: string
  mockupImage?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, title, subtitle, eyebrow, ctaText, ctaLink, mockupImage, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center bg-background", className)}
        {...props}
      >
        {eyebrow && (
          <p 
            className="font-sans uppercase tracking-[0.51em] leading-[133%] text-center text-sm md:text-base lg:text-[19px] mt-16 md:mt-32 lg:mt-[249px] mb-8 text-foreground animate-appear opacity-0"
          >
            {eyebrow}
          </p>
        )}
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight md:leading-[1.2] lg:leading-[83px] text-center px-4 lg:px-[314px] text-foreground animate-appear opacity-0 delay-100 font-medium tracking-tighter"
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="text-base md:text-lg lg:text-xl xl:text-[28px] text-center font-sans font-light px-4 lg:px-[314px] mt-[25px] mb-[48px] leading-[133%] text-muted-foreground animate-appear opacity-0 delay-300 max-w-2xl"
          >
            {subtitle}
          </p>
        )}
        {ctaText && (
          <div className="animate-appear opacity-0 delay-500">
            {ctaLink ? (
              <Link href={ctaLink}>
                <div 
                  className="inline-flex items-center bg-primary text-primary-foreground rounded-[10px] hover:bg-primary/90 transition-colors font-sans w-fit min-w-[200px] md:w-[227px] h-10 md:h-[49px] px-4 md:pl-[22px] md:pr-[17px]"
                >
                  <div className="flex items-center justify-between w-full gap-2">
                    <span className="text-sm md:text-base lg:text-[19px] whitespace-nowrap">{ctaText}</span>
                    <div className="flex items-center gap-[14px]">
                      <div className="w-6 h-3 md:w-[36px] md:h-[15px] relative">
                        <Image
                          src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1737918196/Arrow_1_tacbar.svg"
                          alt="Arrow"
                          width={36}
                          height={15}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <ContactModal buttonText={ctaText} calLink="tynktech.nl/consultation">
                <div 
                  className="inline-flex items-center bg-primary text-primary-foreground rounded-[10px] hover:bg-primary/90 transition-colors font-sans w-fit min-w-[200px] md:w-[227px] h-10 md:h-[49px] px-4 md:pl-[22px] md:pr-[17px] cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full gap-2">
                    <span className="text-sm md:text-base lg:text-[19px] whitespace-nowrap">{ctaText}</span>
                    <div className="flex items-center gap-[14px]">
                      <div className="w-6 h-3 md:w-[36px] md:h-[15px] relative">
                        <Image
                          src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1737918196/Arrow_1_tacbar.svg"
                          alt="Arrow"
                          width={36}
                          height={15}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ContactModal>
            )}
          </div>
        )}
        {mockupImage && (
          <div className="mt-12 md:mt-20 w-full relative animate-appear opacity-0 delay-700">
            <MockupFrame>
              <Mockup type="responsive">
                <Image
                  src={mockupImage.src}
                  alt={mockupImage.alt}
                  width={mockupImage.width}
                  height={mockupImage.height}
                  className="w-full"
                  priority
                />
              </Mockup>
            </MockupFrame>
            <div
              className="absolute bottom-0 left-0 right-0 w-full h-32 md:h-[303px]"
              style={{
                background: "linear-gradient(to top, hsl(var(--muted)) 0%, rgba(217, 217, 217, 0) 100%)",
                zIndex: 10,
              }}
            />
          </div>
        )}
      </div>
    )
  }
)

Hero.displayName = "Hero"

export { Hero }

