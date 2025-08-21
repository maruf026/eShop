import React from 'react'
import { Loader2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'

function ButtonLoading({type, text, loading, className, onClick, ...props}) {
    
  return (
   <Button type={type} disabled={loading} onClick={onClick}  {...props} className={cn("",className)}>
     {
        loading &&  <Loader2Icon className="animate-spin" />
     }
      {text}
    </Button>
  )
}

export default ButtonLoading
