import { Button, Steps, message, theme } from 'antd'
import React, { ReactNode, useState } from 'react'

const steps = [
    {
    title: 'Step 1',
    description: 'Thông tin cá nhân',
    },
    {
    title: 'Step 2',
    description: 'Triệu chứng',
    },
    {
    title: 'Step 3',
    description: 'Hẹn lịch khám',
    },
];
  

const BookingSteps: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

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
            <Steps current={current} items={items}/>
            <div>{children}</div>
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                <Button type="default" onClick={() => next()}>
                    Next
                </Button>
                )}
                {current === steps.length - 1 && (
                <Button type="default" onClick={() => message.success('Processing complete!')}>
                    Done
                </Button>
                )}
                {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                    Previous
                </Button>
                )}
            </div>
        </>
    )
}

export default BookingSteps