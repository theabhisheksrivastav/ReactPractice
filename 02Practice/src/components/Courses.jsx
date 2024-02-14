import React from 'react'
import { Card } from './Card'

export const Courses = () => {
  return (
    <>
        <div className="bg-amber-600 h-screen flex justify-center items-center">
            <div className="bg-amber-100  flex  overflow-x-scroll">
                <Card prname="Trading" para="This course teaches basic and rules of trading"/>
                <Card prname="Web Dev" para="This is basic WebDev course which teaches HTML/Css/Javascript"/>
                <Card prname="React.js" para="This course teaches React.js(Vite) and basic Tailwind CSS"/>
                <Card prname="Python" para="This course teaches basic python"/>
                <Card prname="OCR" para="This course teaches basic OCR ML/AI Project using YOLOv8"/>
                <Card prname="PWA" para="This course teaches Progressive Web App Building"/>
            </div>
        </div>
    </>
  )
}
