import { ReactNode } from "react"
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
    children: ReactNode
    className?: string;
}

export default function GridContainer({ children, className }: ContainerProps) {
    const defaultClass = "w-full max-w-grid mx-auto px-3";
    const combinedClasses = twMerge(defaultClass, className)

    return (
        <div className={combinedClasses}>
            {children}
        </div>
    )
}