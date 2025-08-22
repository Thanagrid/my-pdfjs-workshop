'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import { useRef } from "react"

const Invoice = () => {

   const invoice_data = [
      {
         id: "01",
         name: 'คอมพิวเตอร์',
         price: 12000,
         amount: 5
      },
      {
         id: "02",
         name: 'มือถือ',
         price: 6500,
         amount: 15
      },
      {
         id: "03",
         name: 'สายชาร์จ lighting',
         price: 750,
         amount: 10
      },
      {
         id: "04",
         name: 'สาย C-to-C Cable',
         price: 399,
         amount: 20
      },
      {
         id: "05",
         name: 'adapter 25W USB Type-c',
         price: 1190,
         amount: 10
      },
   ]

   const printRef = useRef(null)

   const handleDownloadPdf = async () => {
      const element = printRef.current;
      if(!element){
         return;
      }

   }

   return (
      <Card ref={printRef}>
         <CardHeader>
            <CardTitle className="text-3xl font-bold">
               Invoice
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
               This is demo invoice.
            </CardDescription>
         </CardHeader>
         <CardContent>
            <Table>
               <TableCaption>
                  ตารางแสดงรายการสินค้าที่คุณซื้อ
               </TableCaption>
               <TableHeader className="bg-gray-200">
                  <TableRow>
                     <TableHead>รหัสสินค้า</TableHead>
                     <TableHead>ชื่อสินค้า</TableHead>
                     <TableHead className="text-end">ราคา</TableHead>
                     <TableHead className="text-end">จำนวน</TableHead>
                     <TableHead className="text-end">รวม</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {invoice_data.map((item, index)=>{
                     return (
                        <TableRow key={index}>
                           <TableCell>{item.id}</TableCell>
                           <TableCell>{item.name}</TableCell>
                           <TableCell className="text-end">{(item.price).toLocaleString('th-TH', {minimumFractionDigits:2, maximumFractionDigits:2})}</TableCell>
                           <TableCell className="text-end">{item.amount}</TableCell>
                           <TableCell className="text-end">{((item.price)*(item.amount)).toLocaleString('th-TH', {minimumFractionDigits:2, maximumFractionDigits:2})}</TableCell>
                        </TableRow>
                     )
                  })}
                  <TableRow>
                     <TableCell colSpan={5} className="text-end">
                        รวม 184,880 บาท
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell colSpan={5} className="text-end">
                        ภาษี 7% - 12,941.6 บาท
                     </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell colSpan={5} className="text-end">
                        ทั้งหมด 197,821.6 บาท
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </CardContent>
         <CardFooter className="flex flex-row justify-center">
            <Button className="w-[50%] h-12 hover:cursor-pointer"
               onClick={()=>{handleDownloadPdf()}}
            >
               Download PDF
            </Button>
         </CardFooter>
      </Card>
   )
}

export default Invoice
