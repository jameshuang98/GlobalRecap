import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import React from 'react'

type DateSelectorProps = {
    date: Date,
    setDate: (date: Date) => void,
};

const DateSelector: React.FC<DateSelectorProps> = ({ date, setDate }) => {

    const onSelectDate = (selectedDate: Date | undefined) => {
        if (!selectedDate) 
            return;
        setDate(selectedDate);
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[190px] pl-3 text-left font-normal"
                    )}
                >
                    {format(date, "PPP")}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onSelectDate}
                    disabled={(date) =>
                        date > new Date() || date < new Date("2025-04-01")
                    }
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}

export default DateSelector
