import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Image from 'next/image'
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface MeetingModalProps {
    isOpen: boolean,
    title: string,
    children?: ReactNode;
    className?: string,
    onClose: () => void,
    handleClick?: () => void,
    buttonText?: string,
    buttonIcon?: string,
    image?: string
}

const MeetingModal = ({ isOpen, title, className, children, onClose, handleClick, buttonText, image, buttonIcon }: MeetingModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9'>
                <div className='flex flex-col gap-6'>
                    {image && (
                        <div className='flex justify-center'>
                            <Image src={image}  alt="image" width={72} height={72} />
                        </div>
                    )}
                    <DialogTitle className={cn('text-white text-3xl font-bold leading-[42px]', className)}>{title}</DialogTitle>
                    {children}
                    <Button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0' 
                        onClick={handleClick}
                    >
                        {buttonIcon && (
                            <Image src={buttonIcon} alt="icon" width={13} height={13} />
                        )} &nbsp;
                        {buttonText || "Schedule Meeting"} 
                    </Button>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default MeetingModal