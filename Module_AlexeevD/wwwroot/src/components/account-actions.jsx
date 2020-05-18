import React from 'react';
import { Row, Button } from 'antd';

export const AccountActions = () => {
    return (
        <>
            <Row justify='start'>
                    <Button htmlType="button">Пополнить</Button>
                    <Button htmlType="button" style={{
                        margin: '0 20px',
                      }}>Перевод</Button>
                    <Button htmlType="button">Платеж</Button>
            </Row>
            <Row justify='space-between'>
                    <Button htmlType="button">Выписка</Button>
                    <Button htmlType="button">Создать шаблон</Button>
                    <Button htmlType="button">Закрыть счет</Button>
            </Row>
        </>
    )
}
