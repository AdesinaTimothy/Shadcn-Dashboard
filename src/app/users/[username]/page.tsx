import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import React from 'react'

const SingleUserPage = () => {
  return (
    <div className="">
    <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/uses">Users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Timothy Adesina</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

        {/* CONTAINER  */}
    <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full xl:w-1/3 bg-red-800">
            <h2>Adesinal=</h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full xl:w-2/3 bg-green-800">
            <h2>Best Timo</h2>
        </div>
    </div>
    </div>
  )
}

export default SingleUserPage
