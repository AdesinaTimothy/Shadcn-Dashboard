"use client"

import { useForm } from 'react-hook-form'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
 
const formSchema = z.object({
  username: z
  .string().min(2, { message: "Username must be at least 2 characters!" })
  .max(50),

  email: z.string().email({ message: "Invalid email address" }).max(50),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["admin", "user"]),
  
})

const EditUser = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "John.doe",
          email: "john.doe@gmail.com",
          phone: "+! 234 5678",
          location: "New York"
        },
      })


  return (
       
        <SheetContent>
            <SheetHeader>
            <SheetTitle className="mb-4">Edit User</SheetTitle>
            <SheetDescription>
                <Form {...form}>
                    <form className="space-y-8">
                        <FormField control={form.control} name="username" render = {({field}) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                            <Input {...field} />
                            </FormControl>
                            <FormDescription>
                            This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>   
                        )} />
                    </form>
                </Form>
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
  )
}

export default EditUser
