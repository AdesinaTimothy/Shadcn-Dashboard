"use client"

import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { ScrollArea } from './ui/scroll-area'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useState } from 'react'
import { Button } from './ui/button'
import { format } from "date-fns"
import { Calendar1Icon } from 'lucide-react'
import { Calendar } from './ui/calendar'

const Todo = () => {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);


  return (
    <div>
    {/* Calender */}
    <h1 className="text-lg font-medium mb-6">Todo List</h1>
    <ScrollArea className="max-h-[400px] mt-2 overflow-y-auto">
    <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="" asChild>
        <Button className="w-full mb-4">
              <Calendar1Icon />
              {date ? format (date, "PPP") : <span>Pick a date</span>}
            </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto mb-3">
        <Calendar 
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }
          }
        />
        </PopoverContent>
    </Popover>
        {/* List Item */}

        <div className="flex flex-col gap-4">

            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1"/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1"/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1" checked/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1"/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1"/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1" checked/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1"/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1"/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
            <Card className="p-4">
              <div className='flex items-center gap-4'>
                <Checkbox id="item1"/>
                <label htmlFor="item1" className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </label>
              </div>
            </Card>
        </div>

    </ScrollArea>
    </div>
  )
}

export default Todo
