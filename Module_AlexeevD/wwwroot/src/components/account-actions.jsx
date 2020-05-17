import React from 'react';
import { Row, Button } from 'antd';

export const AccountActions = () => {
    return (
        <>
            <Row justify='start'>
                    <Button type='primary'>Пополнить</Button>
                    <Button type='primary'>Перевод</Button>
                    <Button type='primary'>Платеж</Button>
            </Row>
            <Row justify='space-around'>
                    <Button type='primary'>Выписка</Button>
                    <Button type='primary'>Создать шаблон</Button>
                    <Button type='primary'>Закрыть счет</Button>
            </Row>
        </>
    )
}
