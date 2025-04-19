"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { formatDate, isValidDate, parseDate } from "@/app/utils/dateUtils";


export function useDateQuery() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const today = new Date();
    const dateParam = searchParams.get("date");
    const parsedDate = dateParam ? parseDate(dateParam) : today;
    const initialDate = isValidDate(parsedDate) ? parsedDate : today;

    const [date, setDateState] = useState<Date>(initialDate);
    const hasUserSelectedDate = useRef(false);

    useEffect(() => {
        if (!hasUserSelectedDate.current) {
            return;
        }

        const formattedDate = formatDate(date);
        router.push(`/?date=${formattedDate}`);
    }, [date, router]);

    const setDate = (newDate: Date) => {
        if (isValidDate(newDate)) {
            hasUserSelectedDate.current = true;
            setDateState(newDate);
        }
    };

    return { date, setDate };
}