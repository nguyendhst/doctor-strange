"use client"
import { Col, Row, StepProps, Steps } from 'antd'
import React from 'react'

export type TStepsConfig = {
    steps: StepProps[],
    current: number,
    leftContent: React.ReactNode,
    rightContent: React.ReactNode,
    children: React.ReactNode,
}

const BookingSteps: React.FC<TStepsConfig> = ({ steps, current, leftContent, rightContent, children }) => {

    const items = steps.map((item) => ({
        key: item.title,
        title: (
            <span style={{ color: '#1677ff' }}>
                {item.title}
            </span>
        ),
        description: item.description
    }));

    return (
        <>
            <Row gutter={6}>

                <Col span={4} className='flex flex-row justify-start'>

                    {leftContent}
                </Col>

                <Col span={16}>
                    <Steps current={current} items={items} labelPlacement="vertical" />
                </Col>

                <Col span={4} className='flex flex-row justify-end'>
                    {rightContent}
                </Col>

            </Row>
            <div className='pt-10'>{children}</div>
        </>
    )
}

export default BookingSteps