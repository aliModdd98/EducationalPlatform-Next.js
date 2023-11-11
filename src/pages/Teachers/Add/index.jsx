import MainLayouts from '@/MainLayout/mainLayout'
import AddingTeacher from '@/components/teachers/AddingTeacher'
import React from 'react'

function index() {
  return (
    <MainLayouts>
      <AddingTeacher/>   
    </MainLayouts>
  )
}

export default index