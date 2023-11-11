import MainLayouts from '@/MainLayout/mainLayout'
import AllStudents from '@/components/Students/AllStudents'
import React from 'react'

function index() {
  return (
    <MainLayouts>
      <AllStudents/>
    </MainLayouts>
  )
}

export default index